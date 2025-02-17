/* eslint-disable no-unused-vars */
import gsap from 'gsap'
import React, { useContext, useEffect, useRef } from 'react'
import Btn7 from './../Btn7/Btn7';
import { CursorContext } from './../Cursor/CursorContext';

const FormL = () => {
    const FormSignUp = useRef(null)
    const { setHover } = useContext(CursorContext);

    useEffect(() => {
        gsap.from(FormSignUp.current, {
            duration: 1.2,
            opacity: 0,
            scale: 0,
            ease: "power2.out",
        })

        gsap.from(".HandImage", {
            duration: 1.9,
            opacity: 0,
            scale: 0,
            ease: "power2.out",
        })
    })

    return (
        <div className='z-[999] h-screen w-screen bg-transparent overflow-hidden'>
            <form ref={FormSignUp} id='SignUpForm' className='h-[80vh] w-[40vw] bg-white bg-opacity-7 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-3xl backdrop-blur-sm border border-white border-opacity-10  p-[50px_60px] flex flex-col items-center justify-between'>

                <div className='flex flex-col gap-4'>
                    <h3 className='text-4xl text-center font-semibold'>Log in to your Account</h3>
                    <h2 className='text-lg text-center font-medium'>Log in to your account to continue</h2>
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='flex' htmlFor="username">Username :</label>
                    <input className='h-[7vh] w-[32vw] rounded-lg px-4 py-4 bg-slate-100 cursor-text' type="text" placeholder="Username" id="username" />
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-between'>
                        <label htmlFor="password">Password :</label>
                        <label className='opacity-75 cursor-pointer w-fit' htmlFor="forgotPassword">forgot Password?</label>
                    </div>
                    <input className='h-[7vh] w-[32vw] rounded-lg px-4 py-4 bg-slate-100 cursor-text' type="password" placeholder="Minimum 6 characters..." id="password" />
                    <div className='flex items-center gap-2 ml-2'>
                        <input type="checkbox" className='cursor-pointer accent-[#B9FF66] size-5' /><label>I accept the terms and conditions</label>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center gap-5'>
                    <div 
                        onClick={() => (window.location.href = "/")}
                    >
                        <Btn7 routeTo="/" bgColor="white" name='Log In' padding='18px 60px' bold="800" border='1px solid' shadow='0 0 25px 7px black'/>
                    </div>
                    <p>Don't have an account? <a className='cursor-pointer text-pretty text-[#B9FF66] font-bold text-xl' href='/signUp'>SignUp</a></p>
                </div>

            </form>

            {/* <img className='HandImage h-[40vh] w-[20vw] absolute top-[40vh] left-[43vh] -rotate-90 select-none pointer-events-none' src="https://png.pngtree.com/png-vector/20230925/ourmid/pngtree-hand-holding-card-one-png-image_10113067.png" alt="" />
            <img className='HandImage h-[40vh] w-[20vw] absolute top-[39vh] right-[43vh] rotate-90 select-none pointer-events-none' src="https://png.pngtree.com/png-vector/20230925/ourmid/pngtree-hand-holding-card-one-png-image_10113067.png" alt="" /> */}
        </div>
    )
}

export default FormL
