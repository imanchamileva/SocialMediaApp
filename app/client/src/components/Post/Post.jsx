import like from "../../images/like (1).png"
import notlike from "../../images/notlike.png"
import share from "../../images/share.png"
import comment from "../../images/comment.png"



function Post({ data }) {
    return (
        <div>
            <img src={data.img} alt="post_image" />
            <div className="">
                <div className="flex flex-row">
                    <img src={data.liked? like : notlike } alt="" />
                    <img src={comment} alt="" />
                    <img src={share} alt="" />
                </div>


                
                
            </div>
        </div>
    )
}

export default Post