import profileImg from "../../images/profileImg.jpg"
import { SlPicture } from 'react-icons/sl';
import { SlCalender } from 'react-icons/sl';
import { SlLocationPin } from 'react-icons/sl';
import { SlControlPlay } from 'react-icons/sl';


const PostShare = () => {
    return (
        <div className="flex flex-col bg-white rounded-lg h-36 items-center justify-around mt-5">
            <div className="flex flex-col justify-around h-24 w-3/4">
                <div className="flex flex-row items-center justify-center gap-x-3">
                    <div className="">
                        <img src={profileImg} className="w-12 rounded-full" alt="" />
                    </div>
                    <div>
                        <input className="rounded-lg w-96 h-10 bg-gray-100" type="text" placeholder="What's new ?" />
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-row justify-center items-center gap-x-3">
                        <div className="flex flex-row">
                            <SlPicture className="h-6 w-8 text-green-500 cursor-pointer" />
                            Photo
                        </div>

                        <div className="flex flex-row justify-evenly">
                            <SlControlPlay className="h-6 w-8 text-purple-500 cursor-pointer" />
                            Video
                        </div>
                        <div className="flex flex-row justify-evenly">
                            <SlCalender className="h-6 w-8 text-orange-500 cursor-pointer" />
                            Date
                        </div>
                        <div className="flex flex-row justify-evenly">
                            <SlLocationPin className="h-6 w-8 text-yellow-500 cursor-pointer" />
                            Location
                        </div>
                        <div>
                            <button className="bg-gradient-to-r from-orange-500 to-yellow-300  hover:to-yellow-500 w-20 rounded-lg h-8">
                                <h6 className="text-white">Share</h6>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default PostShare