import React from 'react'
import LogoSearch from './LogoSearch/LogoSearch'
import { BsSearch } from 'react-icons/bs';



function ProfileSide() {
  return (
    <div className="w-1/4  h-screen flex flex-col items-center overflow-auto">
        <LogoSearch />
        <BsSearch/>
    </div>
  )
}

export default ProfileSide