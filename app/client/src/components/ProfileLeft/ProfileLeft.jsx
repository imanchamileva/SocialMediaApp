import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import { InfoCard } from '../InfoCard/InfoCard'
import LogoSearch from '../ProfileSide/LogoSearch/LogoSearch'

const ProfileLeft = () => {
  return (
    <div className="flex items-center flex-col">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileLeft