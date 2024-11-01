/* eslint-disable no-unused-vars */
import React from 'react'
import Btn7 from './../../Btn7/Btn7';

const NavPt2 = () => {
    return (
        <div className="flex items-center gap-5">
            <Btn7 routeTo="about" name="About Us"/>
            <Btn7 routeTo="services" name="Services"/>
            <Btn7 routeTo="contact" name="Contact Us"/>
            <Btn7 routeTo="faq" name="FAQ"/>
            <Btn7 routeTo="blog" name="Blog"/>
            <Btn7 routeTo="signUp" padding='18px 35px' bold="800" border='1px solid' borderC='#8cff00' shadow='0 0 25px 7px #B9FF66' name="Take Test Free"/>
        </div>
    )
}

export default NavPt2
