import React from 'react'
import Logo  from '../../../images/logo.png'


function LogoSearch() {
  return (
    <div>
        <img src={Logo} alt="logo_bird" />
        <div>
            <input type="text" placeholder="#Explore" />
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default LogoSearch