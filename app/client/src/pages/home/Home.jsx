import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/ProfileSide/ProfileSide'

const Home = () => {
    return (
        <div className="relative flex flex-row w-full h-screen">
            <div className="w-1/4 flex justify-center">
            <ProfileSide />

            </div>
            <div className="w-2/4  h-screen">
                <PostSide />
            </div>
            <div className="w-1/4  h-screen">Right side</div>

        </div>
    )
}

export default Home 