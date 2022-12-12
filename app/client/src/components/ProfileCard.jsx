import React from 'react'
import Cover from '../images/cover.jpg'
import ProfileImg from '../images/profileImg.jpg'

const ProfileCard = () => {
    return (
        <div className="pt-4">
            <div className="h-80 bg-blue-300 rounded-lg relative flex justify-center ">
                <div className="absolute">
                    <img src={Cover} alt="profilecard_cover" className="rounded-t-lg" />
                </div>
                <div className="flex align-center justify-center pl-20 pt-12 absolute">
                    <img src={ProfileImg} alt="profilecard_profile_image" className="rounded-full w-24 h-24" />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard