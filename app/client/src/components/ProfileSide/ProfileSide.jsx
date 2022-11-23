import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import ProfileCard from '../ProfileCard'
import LogoSearch from './LogoSearch/LogoSearch'




function ProfileSide() {
  return (
    <div className="w-1/3  h-screen flex flex-col overflow-auto">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileSide