/* eslint-disable no-unused-vars */
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const BackgroundSL = () => {

    const cheetah1 = useRef(null)
    const cheetah2 = useRef(null)
    const cheetah3 = useRef(null)
    const cheetah4 = useRef(null)

    useEffect(() => {
        gsap.from( cheetah1.current , {
            duration: 1.2,
            opacity: 0,
            x: -500,
            y: 500,
            ease: "power2.out",
            stagger: 0.1,
        })

        gsap.from( cheetah2.current , {
            duration: 1.2,
            opacity: 0,
            x: 500,
            y: 500,
            ease: "power2.out",
            stagger: 0.1,
        })

        gsap.from( cheetah3.current , {
            duration: 1.2,
            opacity: 0,
            x: -500,
            y: -500,
            ease: "power2.out",
            stagger: 0.1,
        })

        gsap.from( cheetah4.current , {
            duration: 1.2,
            opacity: 0,
            x: 500,
            y: -500,
            ease: "power2.out",
            stagger: 0.1,
        })
    })

    return (
        <div id="wrap" className='overflow-hidden h-screen w-screen relative'>
            <img ref={cheetah1} className='h-[65vh] w-[80vh] object-cover absolute bottom-0 left-[-50px]' src="OvalBL.svg" alt="" />
            <img ref={cheetah2} className='h-[65vh] w-[85vh] object-cover absolute bottom-[0] right-[-20px]' src="OvalBR.svg" alt="" />
            <img ref={cheetah3} className='h-[90vh] w-[130vh] absolute top-[-200px] left-[-30px]' src="OvalTL.svg" alt="" />
            <img ref={cheetah4} className='h-[60vh] w-[80vh] absolute top-0 right-0' src="OvalTR.svg" alt="" />
        </div>
    )
}

export default BackgroundSL
