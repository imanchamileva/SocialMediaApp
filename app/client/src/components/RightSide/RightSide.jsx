import home from "../../images/home.png"
import comment from "../../images/comment.png"
import noti from "../../images/noti.png"





function RightSide() {
  return (
    <div>
        <div className="flex flex-row">
            <img className="w-8" src={home} alt="home_svg" />
            <img className="w-8" src={comment} alt="comment_svg" />
            <img className="w-8" src={noti} alt="notification_svg" />
        </div>
    </div>
  )
}

export default RightSide