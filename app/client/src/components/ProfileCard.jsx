import React from 'react'
import Cover from '../images/cover.jpg'
import ProfileImg from '../images/profileImg.jpg'

const ProfileCard = () => {
    return (
        <div className="pl-4 pt-4">
            <div className="h-80 w-64 bg-red-500 rounded-lg">
                <img src={Cover} alt="profilecard_cover" className="rounded-t-lg relative" />
                <div className="flex justify-center">
                    <img src={ProfileImg} alt="profilecard_rofile_image" className="rounded-full w-24 h-24 absolute" />
                </div>

            </div>
        </div>
    )
}

export default ProfileCard