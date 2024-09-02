import Image from "next/image";
import { useEffect, useRef } from "react";
// import { transform } from "next/dist/build/swc";

import styles from "./helpingHand.module.css"

export default function HelpingHand({ children }) {
    const movingBoxRef = useRef(null);
    //const targetBoxRef = useRef(null);

    useEffect(() => {
        const movingBox = movingBoxRef.current;
        const targetBox = document.getElementById('Slider');

        const moveToTarget = () => {
            if (targetBox && movingBox) {
                const targetRect = targetBox.getBoundingClientRect();
                const boxRect = movingBox.getBoundingClientRect();
                
                // Calculate the translation values
                const translateX = targetRect.left - boxRect.left;
                const translateY = targetRect.top - boxRect.top;

                // Apply the translation
                movingBox.style.transform = `translate(${translateX}px, ${translateY}px)`;
            }
        };

        // Move the box every second
        //const intervalId = window.setInterval(moveToTarget, 1000);

        // Cleanup the interval on component unmount
        //return () => clearInterval(intervalId);
    }, []);
    
    return (
        <>
        <div ref={movingBoxRef} className={styles.hintHand} style={{ position: 'absolute' }}>
            <Image src="/portfolio/images/pointer-1_200x200.png" width={200} height={200} alt="Helping hand" unoptimized/>
        </div>
        
        </>
    );
};
