import { PostsData } from '../../Data/PostsData.js'
import Post from '../Post/Post.jsx'




function Posts() {
    return (
        <div>
            <div className="flex flex-col">
                {PostsData.map((post, id) => {

                    return <Post data={post} id={id} />
                }

                )}
            </div>
        </div>
    )
}

export default Posts