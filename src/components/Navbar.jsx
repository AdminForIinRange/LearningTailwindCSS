import React from 'react'

import headerLogo from "../assets/images/header-logo.svg"
export default function Navbar() {
  return (
    <header className='padding-x py-8 absolute z-10 w-full' >

        <nav className='flex justify-between items-center max-container'>
            <a href="">

                <img src={headerLogo} alt="Logo"
                width={130}
                height={29} />
            </a>
            <ul className='flex-1'>

            </ul>
        </nav>
    </header>
  )
}
