import React from 'react'
import Logo from '../../../images/logo.png'
import { BsSearch } from 'react-icons/bs';

function LogoSearch() {
  return (
    <div className="flex flex-row pt-5">
      <div className="px-2">
        <img src={Logo} alt="logo_bird" />
      </div>
      <div className="px-2  border-none bg-transparent outline-none flex justify-evenly relative">
        <input type="text" placeholder="#Explore" className="rounded-md py-1 h-8"  />
        <div className="px-2 pt-2 bg-red-300  h-8 rounded-md absolute right-0 cursor-pointer">
        <BsSearch />
      </div>
      </div>

    </div>


  )
}

export default LogoSearch