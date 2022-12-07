import like from "../../images/like (1).png"
import notlike from "../../images/notlike.png"
import share from "../../images/share.png"
import comment from "../../images/comment.png"



function Post({ data }) {
    return (
        <div classNamae="flex flex-col bg-white h-screen rounded-lg w-1/4">
            <img className ="w-4/4" src={data.img} alt="post_image" />
            <div className="w-48 h-32 flex flex-col justify-evenly ">
                <div className="flex flex-row w-24 justify-between">
                    <img src={data.liked ? like : notlike} alt="like_svg" />
                    <img src={comment} alt="comment_svg" />
                    <img src={share} alt="share_svg" />
                </div>
                <span>{data.likes} likes</span>
                <div className="w-72">
                    <span className="font-bold">{data.name} </span>
                    <span>{data.desc}</span>
                </div>



            </div>
        </div>
    )
}

export default Post