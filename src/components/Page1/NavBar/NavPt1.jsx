/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';


const NavPt1 = () => {
    const StarRef = useRef(null)
    const textRef = useRef(null)

    useGSAP(()=> {
        const star = StarRef.current;
        const text = textRef.current;

        var tl = gsap.timeline({ repeat: -1 });

        gsap.to(star, {
            repeat: -1,
            rotate: "360deg",
            duration: 7,
            ease: "linear",
            transformOrigin: "center",
            yoyo: true,
        });

        tl.to(text, {
            delay: 5,
            duration: 2,
            x: -500,
            ease: "none",
        })

        tl.to(text, {
            duration: 1,
            delay: 0.7,
            x: 0,
            opacity: 1,
            ease: "none",
        })

        tl.to(text, {
            duration: 2,
            delay: 4,
            x: 500,
            ease: "none",
        })

        tl.to(text, {
            delay: 1,
            duration: 1,
            x: 0,
            opacity: 1,
            ease: "none",
    });
})

    return (
        <div>
            <a className='flex items-center justify-center gap-2' href="/">
                <img ref={StarRef} className='h-16' src="Star.svg" alt="" />
                <div className='overflow-hidden'>
                    <h1 ref={textRef} className='text-black text-[40px] font-extrabold text-nowrap'>Career Path</h1>
                </div>
            </a>
        </div>
    )
}

export default NavPt1
