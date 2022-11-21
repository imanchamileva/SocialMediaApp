import PostModel from '../models/PostModel.js';
import mongoose from 'mongoose';
import userModel from '../models/userModel.js';

// create new post with body= info
export const createPost = async (req, res) => {
    // when we receive body, we put it in PostModel
    const newPost = new PostModel(req.body)

    try {
        await newPost.save()
        res.status(200).json("Post created !")
    } catch (error) {
        res.status(500).json(error)
    }
}

// get a post f

export const getPost = async (req, res) => {

    const id = req.params.id

    try {

        const post = await PostModel.findById(id)
        res.status(200).json(post)

    } catch (error) {
        res.status(500).json(error)
    }
}

// update a post 

export const updatePost = async (req, res) => {

    const postId = req.params.id

    const { userId } = req.body

    try {

        const post = await PostModel.findById(postId)

        // you're the only one that can update your post
        if (post.userId === userId) {

            //updating the post
            await post.updateOne({ $set: req.body })
            res.status(200).json("Post updated")
        }
        // if another id wants to change the post
        else {
            res.status(403).json("Action forbidden")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

// delete a post

export const deletePost = async (req, res) => {

    const id = req.params.id
    const { userId } = req.body



    try {

        const post = await PostModel.findById(id)

        if (post.userId === userId) {

            await post.deleteOne();
            res.status(200).json("Post deleted successfully")
        }
        else {
            res.status(403).json("Action forbidden")
        }

    } catch (error) {

        res.status(500).json(error)
    }
}

// like and dislike a post 

export const likePost = async (req, res) => {

    const id = req.params.id
    const { userId } = req.body

    try {

        const post = await PostModel.findById(id)
        // like the post
        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } })
            res.status(200).json("Post liked")
        }
        // dislike the post
        else {
            await post.updateOne({ $pull: { likes: userId } })
            res.status(200).json("Post unliked")
        }

    } catch (error) {
        res.status(500).json(error)

    }
}

// get timeline posts

export const getTimelinePosts = async (req, res) => {

    const userId = req.params.id

    try {
        // will retirn all the posts from this userid
        const currentUserPosts = await PostModel.find({ userId: userId })

        const followingPosts = await userModel.aggregate([
            {
                // when this query runs, it will give us a single document which will contain our userid and the _id field
                $match: {
                    _id: new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup: {
                    // posts come from our dbb, we chose posts as name
                    from: "posts",
                    // inside our usermodel we have following field
                    localField: "following",
                    foreignField: "userId",
                    // followingposts object
                    as: "followingPosts"
                }
            },
            {
                // returntype of aggregation, which fields u want to return as aggregation
                $project: {
                    followingPosts: 1,
                    _id: 0

                }
            }

        ])
        res.status(200).json(currentUserPosts.concat(followingPosts))
        // posts from the user he's following 

    } catch (error) {
        res.status(500).json(error)
    }
}