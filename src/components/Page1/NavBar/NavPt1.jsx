/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import Magnetic from './../../Cursor/Magnetic';
import { CursorContext } from '../../Cursor/CursorContext';


const NavPt1 = () => {
    const StarRef = useRef(null)
    const textRef = useRef(null)
    const Wrapper = useRef(null)

    var { setHover } = useContext(CursorContext);

    useGSAP(()=> {
        const star = StarRef.current;
        const text = textRef.current;
        
        var NavBarTimeline = gsap.timeline()
        var tl2 = gsap.timeline()
        var tl = gsap.timeline({ repeat: -1 });

        NavBarTimeline
            .add(tl2)
            .add(tl);

        tl2.from("#wrapper > *", {
            y: 80,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.1,
            opacity: 0,
        })

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
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
            <a id='wrapper' ref={Wrapper} className='flex items-center justify-center gap-2' href="/">
                <img ref={StarRef} className='h-16' src="Star.svg" alt="" />
                <Magnetic>
                    <div className='overflow-hidden'>
                        <h1 ref={textRef} className='text-black text-[40px] font-extrabold text-nowrap'>Career Path</h1>
                    </div>
                </Magnetic>
            </a>
        </div>
    )
}

export default NavPt1
