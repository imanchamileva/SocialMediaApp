import React from 'react'
import Cover from '../images/cover.jpg'
import ProfileImg from '../images/profileImg.jpg'

const ProfileCard = () => {
    return (
        <div className="pl-4 pt-4">
            <div className="h-80 w-64 bg-blue-300 rounded-lg relative">
                <div className="absolute">
                    <img src={Cover} alt="profilecard_cover" className="rounded-t-lg" />
                </div>
                <div className="flex align-center pl-20 pt-12 absolute">
                    <img src={ProfileImg} alt="profilecard_profile_image" className="rounded-full w-24 h-24" />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard