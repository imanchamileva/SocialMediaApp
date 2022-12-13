import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import LogoSearch from '../../components/ProfileSide/LogoSearch/LogoSearch'
import RightSide from '../../components/RightSide/RightSide'

function Profile() {
  return (
    <div>
      <div className="relative flex flex-row">
        <div className="w-1/3">
          <ProfileLeft />
        </div>

        <div className="flex flex-col w-1/3">
          <ProfileCard />
          <PostSide />
        </div>
        <div className="flex flex-col h-2/3 w-1/3">
          <RightSide />
        </div>
      </div>
    </div>
  )
}

export default Profile