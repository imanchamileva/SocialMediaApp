import React from 'react'
import Cover from '../images/cover.jpg'
import ProfileImg from '../images/profileImg.jpg'

const ProfileCard = () => {

    const ProfilePage = true;


    return (
        <div className="pt-4">
            <div className="h-80 bg-white rounded-lg relative flex justify-center items-start">
                <div className="absolute">
                    <img src={Cover} alt="profilecard_cover" className="rounded-t-lg" />
                </div>
                <div className="flex mt-3 justify-center flex-col items-center  h-96 absolute">
                    <img src={ProfileImg} alt="profilecard_profile_image" className="rounded-full w-24 h-24" />
                    <h3>Zendeya ML</h3>
                    <h3>Front-end developer</h3>
                    <h3>
                        {ProfilePage && (<>
                            <vl>
                                <span>3 posts</span>
                            </vl>
                        </>)}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard