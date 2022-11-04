import React from 'react'
import ProfileSide from '../../components/ProfileSide/ProfileSide'

const Home = () => {
    return (
        <div className="relative flex flex-row w-full h-screen">
            <ProfileSide />
            <div className="w-2/4  h-screen">Posts</div>
            <div className="w-1/4  h-screen">Right side</div>
        </div>
    )
}

export default Home 