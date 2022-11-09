import UserModel from '../models/userModel.js';
import bcrypt from 'bcrypt';

// get a user from the

export const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id)

        if (user) {

            const { password, ...otherDetails } = user._doc
            res.status(200).json(otherDetails)
        }

        else {
            res.status(404).json("no such user exists")
        }
    } catch (error) {

        res.status(500).json(error)
    }


}

// update a user 

export const updateUser = async (req, res) => {
    const id = req.params.id
    const { currentUserId, currentUserAdminStatus, password } = req.body

    if (id === currentUserId || currentUserAdminStatus) {

        try {

            if (password) {

                const salt = await bcrypt.genSalt(10)
                //will convert the body of request
                req.body.password = await bcrypt.hash(password, salt)
            }

            const user = await UserModel.
                //id= search the id to update in db, req.body= info to update in response, new:true= in response I want to get the updated user not the old one
                findByIdAndUpdate(id, req.body, { new: true })
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    else {
        res.status(403).json("Access denied ! You can only update your own profile")
    }
}

// delete user 

export const deleteUser = async (req, res) => {

    const id = req.params.id

    const { currentUserId, currentUserAdminStatus } = req.body

    if (currentUserId === id || currentUserAdminStatus) {

        try {

            await UserModel.findByIdAndDelete(id)
            res.status(200).json("User deleted successfully")

        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(403).json("Access denied ! You can only delete your own profile")
    }
}

// follow a user

