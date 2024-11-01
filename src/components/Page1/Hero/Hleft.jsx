/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Hleft = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='flex flex-col gap-14 h-[100%] w-[40%] pt-12'>
            <h1 className='text-black text-7xl font-semibold'>Navigating the digital landscape for success</h1>
            <p className='text-black font-medium text-xl'>Unlock Your True Potential, Personalized Career Guidance Tailored to Your Unique Personality.
            </p>
            <Link to={"/signUp"}>
                <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        boxShadow: isHovered ? '0 0 20px 8px #111' : 'none',
                        fontWeight: isHovered ? '800' : '400',
                        transition: "all 0.5s ease",
                    }}
                    className='py-5 px-14 text-[whitesmoke] rounded-2xl text-2xl bg-neutral-950 h-fit w-fit active:scale-90'
                > Take Test Free 
                </button>
            </Link>
        </div>
    )
}

export default Hleft
