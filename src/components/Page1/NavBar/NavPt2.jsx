/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Btn7 from './../../Btn7/Btn7';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CursorContext } from '../../Cursor/CursorContext';

const NavPt2 = () => {

    const { setHover } = useContext(CursorContext);

    useGSAP(() => {
        gsap.from("#wrapper-nav2 > *", {
            y: 120,
            duration: 1.5,
            opacity: 0,
            ease: 'power2.inOut',
            stagger: {
                from: "start",
                each: 0.2,
            }
        })
    })

    return (
        <div id='wrapper-nav2' className="flex items-center gap-5">
            <Btn7 routeTo="about" name="About Us"/>
            <Btn7 routeTo="services" name="Services"/>
            <Btn7 routeTo="contact" name="Contact Us"/>
            <Btn7 routeTo="faq" name="FAQ"/>
            <Btn7 routeTo="blog" name="Blog"/>
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}> <Btn7 routeTo="signUp" padding='18px 35px' bold="800" border='1px solid' borderC='#8cff00' shadow='0 0 25px 7px #B9FF66' name="Take Test Free"/> </div>
        </div>
    )
}

export default NavPt2
