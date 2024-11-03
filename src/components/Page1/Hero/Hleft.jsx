/* eslint-disable no-unused-vars */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CursorContext } from '../../Cursor/CursorContext';

const Hleft = () => {

    const { setHover } = useContext(CursorContext)

    const [isHovered, setIsHovered] = useState(false);

    useGSAP(() => {
        gsap.from("#wrapper-p1-hleft > *", {
            x: -500,
            duration: 1.5,
            ease: 'power2.inOut',
            opacity: 0,
            stagger: {
                from: "end",
                each: 0.3,
            },
        })
    })

    return (
        <div id='wrapper-p1-hleft' className='flex flex-col gap-[4vh] h-[100%] w-[40%] pt-12'>
            <h1 className='text-black text-[65px] font-[600]'>Navigating the digital landscape for success</h1>
            <p className='text-black font-medium text-xl'>Unlock Your True Potential, Personalized Career Guidance Tailored to Your Unique Personality.
            </p>
            <a href={"/signUp"}>
                <button
                    onMouseEnter={() => {setIsHovered(true); setHover(true)} }
                    onMouseLeave={() => {setIsHovered(false); setHover(false)} }
                    style={{
                        boxShadow: isHovered ? '0 0 20px 8px #111' : 'none',
                        fontWeight: isHovered ? '800' : '400',
                        transition: "all 0.5s ease",
                    }}
                    className='py-5 px-14 mt-3 text-[whitesmoke] rounded-2xl text-2xl bg-neutral-950 h-fit w-fit active:scale-90'
                > Take Test Free 
                </button>
            </a>
        </div>
    )
}

export default Hleft
