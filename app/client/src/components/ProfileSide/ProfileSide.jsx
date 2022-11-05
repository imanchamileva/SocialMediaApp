import React from 'react'
import ProfileCard from '../ProfileCard'
import LogoSearch from './LogoSearch/LogoSearch'




function ProfileSide() {
  return (
    <div className="w-1/3  h-screen flex flex-col overflow-auto">
        <LogoSearch />
        <ProfileCard />
    </div>
  )
}

export default ProfileSide