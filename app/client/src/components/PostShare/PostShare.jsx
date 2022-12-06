import profileImg from "../../images/profileImg.jpg"
import { SlPicture } from 'react-icons/sl';
import { SlCalender } from 'react-icons/sl';
import { SlLocationPin } from 'react-icons/sl';
import { SlControlPlay } from 'react-icons/sl';
import { useState, useRef } from "react";
import { FaRegTimesCircle } from "react-icons/fa";




const PostShare = () => {


    const [image, setImage] = useState(null);
    const imageRef = useRef();


    const onImageChange = (event) => {


        // When the user finishes selecting a file or files, the element's change event fires. You can access the list of files from event.target.files, which is a createObjectURL object. Each item in the createObjectURL is an object.
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setImage({
                image: URL.createObjectURL(img)
            })
        }

    }




    return (
        <>
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
                            <div className="flex flex-row" onClick={() => imageRef.current.click()} >
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
                                <div className="hidden">
                                    <input
                                        type="file"
                                        name="myImage"
                                        ref={imageRef}
                                        onChange={onImageChange} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* if image exists */}
            {image && (
                <div className=" w-2/4">
                    <div className=" relative">
                        <div className="flex justify-end">
                            <FaRegTimesCircle className="cursor-pointer absolute h-6 w-8 m-1 text-gray-600 " onClick={() => setImage(null)} />
                        </div>
                        {/* usestate +key of object */}
                        <img src={image.image} alt=""  >

                        </img>
                    </div>
                </div>
            )}
        </>

    )
}

export default PostShare