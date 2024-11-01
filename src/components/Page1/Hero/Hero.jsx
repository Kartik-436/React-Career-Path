/* eslint-disable no-unused-vars */
import React from 'react'
import Hleft from "./Hleft";
import Hright from './Hright';

const Hero = () => {
    return (
        <div className='flex items-center justify-evenly h-[80vh] w-screen'>
            <Hleft/>
            <Hright/>
        </div>
    )
}

export default Hero
