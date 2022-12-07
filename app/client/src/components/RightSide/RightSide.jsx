import home from "../../images/home.png"
import comment from "../../images/comment.png"
import noti from "../../images/noti.png"
import TrendCard from "../TrendCrad/TrendCard.jsx"




function RightSide() {
  return (
    <div className="mt-5">
        <div className="flex flex-row justify-around">
            <img className="w-8 h-8" src={home} alt="home_svg" />
            <img className="w-8 h-8" src={comment} alt="comment_svg" />
            <img className="w-8 h-8" src={noti} alt="notification_svg" />
        </div>

        <TrendCard/>

    </div>
  )
}

export default RightSide