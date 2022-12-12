import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'




const Home = () => {
    return (
        <div className="relative flex flex-row w-full h-full">
            <div className="w-1/3 flex justify-center">
            <ProfileSide />

            </div>
            <div className="w-1/3  h-screen">
                <PostSide />
            </div>
            <div className="w-1/3  h-screen">
                <RightSide />
            </div>

        </div>
    )
}

export default Home 