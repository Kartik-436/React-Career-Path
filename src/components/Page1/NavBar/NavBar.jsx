/* eslint-disable no-unused-vars */
import React from 'react'
import NavPt1 from './NavPt1';
import NavPt2 from './NavPt2';

const NavBar = () => {
    return (
        <div className='flex items-center justify-between gap-5 px-28 py-6 w-screen sticky top-0 bg-[#f3f3f3]'>
            <NavPt1/>
            <NavPt2/>
        </div>
    )
}

export default NavBar
