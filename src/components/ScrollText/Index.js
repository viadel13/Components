import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Initialisation de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ZoomEffectScroll = () => {
    useEffect(() => {
        const { innerHeight } = window;

        // zoom-out
        gsap.from("#zoom-out h2", {
            scale: 2.5, stagger: 0.25, duration: 3,
            scrollTrigger: {
                trigger: "#zoom-out",
                pin: true,
                end: `+=${innerHeight * 1.3}`,
                scrub: 3
            }
        });

    }, []); // Le tableau vide assure que le code à l'intérieur de useEffect ne s'exécute qu'une seule fois après le montage du composant.

    return (
        <>
            <section 
                id="zoom-out"
                style={{
                    backgroundColor: '#000000',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    height: '100vh',
                    color: '#FFFDF6',
                    fontSize: '50px',
                    fontWeight: 700,
                    textAlign: 'center'
                }}
            >
                <h2>RECENT WORK</h2>
            </section>
        </>

    );
};

export default ZoomEffectScroll;
