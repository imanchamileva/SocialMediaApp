import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import LogoSearch from '../../components/ProfileSide/LogoSearch/LogoSearch'

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
      </div>
    </div>
  )
}

export default Profile