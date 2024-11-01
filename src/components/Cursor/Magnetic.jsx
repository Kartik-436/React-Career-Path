/* eslint-disable no-unused-vars */
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Magnetic = ({children}) => {
    const ref = useRef(null)

    useEffect( () => {
        const Xto = gsap.quickTo(ref.current, "x", {
            duration: 1, 
            ease: "elastic.out(1, 0.3)",
        })
        const Yto = gsap.quickTo(ref.current, "y", {
            duration: 1, 
            ease: "elastic.out(1, 0.3)",
        })

        const mousemove = (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = ref.current.getBoundingClientRect();
            const x = clientX - ( left + width / 2 );
            const y = clientY - ( top + height / 2 );
            Xto(x / 2);
            Yto(y / 2);
        }

        const mouseleave = () => {
            Xto(0);
            Yto(0);
        }

        ref.current.addEventListener("mousemove", mousemove);
        ref.current.addEventListener("mouseleave", mouseleave);

        return () => {
            ref.current.removeEventListener("mousemove", mousemove);
            ref.current.removeEventListener("mouseleave", mouseleave);
        }
    }, [])

    return (
        React.cloneElement(children, {ref})
    )
}

export default Magnetic
