import { Link } from "react-router-dom";
import { labels } from "../assets/texts";
import { useLanguage } from '../assets/LanguageContext.jsx';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScissorLiftTable from "../../public/TableDraft3D.jsx";  // Adjust the import path as necessary
import ScissorLiftTable1 from "../../public/TableDraft3D1.jsx";
import ScissorLiftTable2 from "../../public/TableDraft3D2.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const { language } = useLanguage();
    const texts = labels[language];

    const parallaxRef = useRef(null);
    const sectionRefs = useRef([]);
    const contentRef = useRef(null);

    useEffect(() => {
        // Parallax gallery
        if (parallaxRef.current) {
            gsap.to(parallaxRef.current, {
                x: () => -(parallaxRef.current.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top center",
                    end: () => `+=${parallaxRef.current.scrollWidth - window.innerWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                }
            });
        }
        // Animacja wejścia sekcji
        sectionRefs.current.forEach((ref, i) => {
            if (ref) {
                gsap.to(ref, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ref,
                        start: "top 80%",
                        toggleClass: {targets: ref, className: "visible"},
                        once: true
                    }
                });
            }
        });
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    return (
        <div className="home-container" ref={contentRef} style={{background: "none", padding: 0}}>
            {/* Blok 1 */}
            <section
                className="home-section"
                ref={el => sectionRefs.current[0] = el}
            >
                <h1>{texts.mainTitle}</h1>
                <p>{texts.mainText}</p>
            </section>
            <ScissorLiftTable1 contentRef={contentRef} />
            {/* Parallax gallery */}
            <div className="parallax-gallery-wrapper">
                <div className="parallax-gallery" ref={parallaxRef}>
                    <img src="/img/ax.png" alt="gallery1" />
                    <img src="/img/axx.png" alt="gallery2" />
                    <img src="/img/bx.png" alt="gallery3" />
                    <img src="/img/bxx.png" alt="gallery4" />
                </div>
            </div>

            {/* Blok 2 */}
            <section
                className="home-section"
                ref={el => sectionRefs.current[1] = el}
            >
                <h2>
                    {texts.mainText2.usage} {texts.mainText2.platforms} {texts.mainText2.lifting} {texts.mainText2.hymo}
                </h2>
                <p>{texts.mainText2.text1}</p>
                <p>{texts.mainText2.text2}</p>
                <p>{texts.mainText2.text3}</p>
                <button>{texts.mainText2.text4}</button>
            </section>

            {/* Blok 3 */}
            <section
                className="home-section"
                ref={el => sectionRefs.current[2] = el}
            >
                <h2>
                    {texts.mainText3.tables} {texts.mainText3.hymo} {texts.mainText3.safety} {texts.mainText3.transport}
                </h2>
                <p>{texts.mainText3.text1}</p>
                <p>{texts.mainText3.text2}</p>
                <p>{texts.mainText3.text3}</p>
            </section>

            {/* Przycisk na dole */}
            <Link to="/platforms" className="find-machine-btn">
                Find your machine
            </Link>
        </div>
    );
}