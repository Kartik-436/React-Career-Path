/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { CursorContext } from './CursorContext';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const { hover } = useContext(CursorContext);

    useEffect(() => {
        const cursor = cursorRef.current;

        const mouseMoveHandler = (e) => {
            gsap.to(cursor, {
                duration: 1.9,
                x: e.clientX,
                y: e.clientY,
                ease: "power3.out"
            });
        };

        window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="custom-cursor"
            style={{
                position: 'absolute',
                width: hover ? "60px" : "15px",
                height: hover ? "60px" : "15px",
                transform: "translate(-50%, -50%)",
                transition: 'height 0.5s ease-in-out, width 0.5s ease-in-out',
                backgroundColor: 'white',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 1000,
                mixBlendMode: 'difference',
            }}
        />
    );
};

export default CustomCursor;
