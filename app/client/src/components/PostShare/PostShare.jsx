import profileImg from "../../images/profileImg.jpg"
import { SlPicture } from 'react-icons/sl';
import { SlCalender } from 'react-icons/sl';
import { SlLocationPin } from 'react-icons/sl';
import { SlControlPlay } from 'react-icons/sl';


const PostShare = () => {
    return (
        <div className="flex flex-col bg-white rounded-lg h-36 items-center justify-center">
            <div className="flex flex-row items-center  gap-x-3 h-24">
                <div className="w-12">
                    <img src={profileImg} className=" rounded-full" alt="" />
                </div>
                <div className="flex h-20 flex-col justify-evenly">
                    <div>
                        <input className="rounded-full w-96 h-10 bg-gray-100" type="text" placeholder="What's new ?" />
                    </div>
                    <div className="flex justify-evenly">
                        <div className="flex flex-row justify-between w-96">
                            <div className="flex flex-row">
                                <SlPicture className="h-6 w-8 text-green-500" />
                                Photo
                            </div>

                            <div className="flex flex-row justify-evenly">
                                <SlControlPlay className="h-6 w-8 text-purple-500" />
                                Video
                            </div>
                            <div className="flex flex-row justify-evenly">
                                <SlCalender className="h-6 w-8 text-orange-500" />
                                Date
                            </div>
                            <div className="flex flex-row justify-evenly">
                                <SlLocationPin className="h-6 w-8 text-yellow-500" />
                                Location
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostShare