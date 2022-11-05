import React from 'react'
import Logo from '../../../images/logo.png'
import { BsSearch } from 'react-icons/bs';

function LogoSearch() {
  return (
    <div className="flex flex-row pt-5">
      <div className="px-2">
        <img src={Logo} alt="logo_bird" />
      </div>
      <div className="px-2 border-none bg-transparent outline-none rounded-2xl">
        <input type="text" placeholder="#Explore" />
      </div>
      <div className="px-2">
        <BsSearch />
      </div>
    </div>


  )
}

export default LogoSearch