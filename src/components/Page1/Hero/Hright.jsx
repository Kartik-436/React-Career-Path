/* eslint-disable no-unused-vars */
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Hright = () => {

    useGSAP(() => {
        gsap.from("#wrapper-p1-hright", {
            x: 500,
            duration: 1,
            ease: 'power2.inOut',
            opacity: 0,
        })
    })

    useGSAP(() => {
        function getRandomDelay() {
            return Math.random() * 2;
        }
    
        function getRandomRotation() {
            return Math.random() * 360;
        }
    
        function getRandomScale() {
            return 0.3 + Math.random();
        }
    
        gsap.to("#Star", {
            duration: 4,
            rotation: getRandomRotation(),
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: getRandomDelay(),
        });

        gsap.to(".Star", {
            duration: 2,
            rotation: -getRandomRotation(),
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: getRandomDelay(),
        });

        gsap.to("#Play", {
            duration: 2.6 + Math.random(),
            x: 40,
            rotate: `${80 + Math.random() * 20}deg`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: getRandomDelay(),
        });
    
        gsap.to("#Location", {
            duration: 2.5 + Math.random(),
            x: 40,
            y: 15,
            rotate: `${40 + Math.random() * 20}deg`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: getRandomDelay(),
        });

        gsap.to("#greenCricle", {
            duration: 2,
            x: 30,
            y: -55,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        gsap.to("#Share", {
            duration: 2.7 + Math.random(),
            x: 30,
            y: -15,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: getRandomDelay(),
        });

        gsap.to(".greenCricle", {
            duration: 1,
            scale: getRandomScale(),
            repeat: -1,
            yoyo: true,
            ease: "power3.inOut",
            delay: getRandomDelay(),
        });

        gsap.to("#BlackCircle", {
            duration: 1,
            scale: getRandomScale(),
            repeat: -1,
            yoyo: true,
            ease: "power3.inOut",
        });
    
        gsap.to("#Like", {
            duration: 2 + Math.random(),
            x: 20,
            y: -10,
            rotate: `${-30 + Math.random() * 20}deg`,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: getRandomDelay(),
        });
    
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    
        tl.to("#Megaphone", {
            rotate: "-14deg",
            duration: 0.6,
            ease: "power2.inOut",
        })
    
        tl.to("#Megaphone", {
                scale: 1.05,
                duration: 0.1,
                yoyo: true,
                repeat: 5,
                ease: "power2.inOut",
            })
    
        tl.to("#Megaphone", {
                rotate: "14deg",
                duration: 0.6,
                ease: "power2.inOut",
            })
    
        tl.to("#Megaphone", {
                scale: 1.05,
                duration: 0.1,
                yoyo: true,
                repeat: 5,
                ease: "power2.inOut",
            })
    
        tl.to("#Megaphone", {
                rotate: "0deg",
                duration: 0.6,
                ease: "power2.inOut",
            })
    
        tl.to("#Megaphone", {
                scale: 1.05,
                duration: 0.1,
                yoyo: true,
                repeat: 5,
                ease: "power2.inOut",
            })
    
        tl.to("#Megaphone", {
                rotate: "0deg",
                duration: 0.6,
                ease: "power2.inOut",
            });

        gsap.to(".Ring1", {
            x: 50,
            y: -50,
            duration: 2,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
        });

        gsap.to(".Ring2", {
            x: 30,
            y: -80,
            duration: 2.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
        });

        gsap.to(".Ring3", {
            x: 80,
            y: -40,
            duration: 1.8,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
        });
    })

    return (
        <div id='wrapper-p1-hright' className='w-[40%] h-[100%] relative'>
            <img 
                id="Star" 
                className="absolute Breathe size-[7vw] top-[62vh] left-[18%] -translate-x-[50%] -translate-y-[50%]"
                src="Star.svg" alt="" />

            <img 
                className="absolute Star Breathe size-[3vw] top-[72vh] left-[52%] -translate-x-[50%] -translate-y-[50%]" 
                src="Star.svg" alt="" />

            <img 
                className="absolute Ring1 Breathe top-[22%] left-[8%]" 
                src="Ring.svg" alt="" />

            <img 
                className="absolute Ring2 Breathe top-[26%] left-[6%]" 
                src="Ring.svg" alt="" />

            <img 
                className="absolute Ring3 Breathe top-[30%] left-[4%]" 
                src="Ring.svg" alt="" />

            <img
                id="Megaphone" 
                className="absolute Breathe w-[50%] h-[55%] top-[45%] left-[45%] -translate-x-[50%] -translate-y-[50%]"
                src="Megaphone.png" alt="" />

            <img 
            id="Play" 
                className="absolute Breathe top-[36vh] left-[82%] -translate-x-[50%] -translate-y-[50%]" 
                src="Black_Play.png" alt="" />

            <img 
                id="Location" 
                className="absolute Breathe top-[50vh] left-[77%] -translate-x-[50%] -translate-y-[50%]" 
                src="Green_Location.png" alt="" />

            <img 
                id="Share" 
                className="absolute Breathe top-[23vh] left-[84%] -translate-x-[50%] -translate-y-[50%]" 
                src="Green_Share.png" alt="" />

            <img 
                id="greenCricle" 
                className="absolute Breathe size-[2vw] top-[15vh] left-[26%] -translate-x-[50%] -translate-y-[50%]"
                src="small_green_circle.svg" alt="" />

            <img 
                className="absolute Breathe greenCricle size-[1.5vw] top-[71vh] left-[66%] -translate-x-[50%] -translate-y-[50%]" 
                src="small_green_circle.svg" alt="" />

            <img 
                id="BlackCircle" 
                className="absolute Breathe size-[4vw] top-[12vh] left-[16%] -translate-x-[50%] -translate-y-[50%]" 
                src="big_black_circle.svg" alt="" />

            <img 
                id="Like" 
                className="absolute Breathe top-[15vh] left-[70%] -translate-x-[50%] -translate-y-[50%]" 
                src="Black_Like.png" alt=""/>
        </div>
    )
}

export default Hright
