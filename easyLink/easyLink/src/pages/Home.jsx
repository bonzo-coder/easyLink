import { Link, NavLink } from "react-router-dom";
import { labels } from "../assets/texts";
import { useLanguage } from '../assets/LanguageContext.jsx';
import React, { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import HymoLogo from "../../public/Hymo-logo.png";
import MarcoLogo from "../../public/marco-logo.png";
import GruseLogo from "../../public/gruse-logo.svg";
import RotabLogo from "../../public/rotab-logo.svg";
import Photo1Main from "../../public/img/Main1.jpg";
import Photo3Main from "../../public/img/Main3.jpg";
import Photo4Main from "../../public/img/Main4.jpg";
import Photo5Main from "../../public/img/Main5.jpg";
import Photo6Main from "../../public/img/Main6.jpg";
import Photo7Main from "../../public/img/Main7.jpg";
import FactoryUsage from "../../public/img/HymoUsage.jpeg";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function Home() {
    const { language } = useLanguage();
    const texts = labels[language];
    const heroTextRef = useRef(null);
    const sectionRefs = useRef([]);
    

    // useEffect(() => {
    //     const smoother = ScrollSmoother.create({
    //         smooth: 1,
    //         effects: true,
    //         smoothTouch: 0.1,
    //     });

    //     return () => {
    //         smoother && smoother.kill();
    //     };
    // }, []);

    useLayoutEffect(() => {
        let splitInstance;

        if (heroTextRef.current) {
            splitInstance = new SplitText(heroTextRef.current, { type: "words" });

            gsap.set(splitInstance.words, { opacity: 0, y: 30 });

            gsap.fromTo(
                splitInstance.words,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.08,
                    ease: "power2.out",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: sectionRefs.current[1] || sectionRefs.current[0],
                        start: "top 80%",
                        end: "top 30%",
                        scrub: true,
                    },
                }
            );
        }

        return () => {
            splitInstance && splitInstance.revert();
        };
    }, [language]);

    const heroVideoSrc = "../../public/video/home_loop.mp4";
    const heroSlides = [Photo3Main, Photo4Main, Photo5Main, Photo6Main, Photo1Main, Photo7Main];
    const heroSlidesCount = heroSlides.length;

    const secondaryHeroes = [
        {
            id: "hero-2",
            image: FactoryUsage,
            heading: `${texts.mainText2.usage} ${texts.mainText2.platforms} ${texts.mainText2.lifting} ${texts.mainText2.hymo}`,
            paragraphs: [texts.mainText2.text1, texts.mainText2.text2, texts.mainText2.text3],
            cta: texts.mainText2.text4,
        },
        {
            id: "hero-3",
            image: Photo3Main,
            heading: `${texts.mainText3.tables} ${texts.mainText3.hymo} ${texts.mainText3.safety} ${texts.mainText3.transport}`,
            paragraphs: [texts.mainText3.text1, texts.mainText3.text2, texts.mainText3.text3],
        },
    ];

    useEffect(() => {
        const triggers = [];

        sectionRefs.current.forEach((ref) => {
            if (!ref) return;
            const tween = gsap.fromTo(
                ref,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ref,
                        start: "top 85%",
                        end: "top 40%",
                        scrub: true,
                    },
                }
            );
            triggers.push(tween);
        });

        return () => {
            triggers.forEach((t) => t.scrollTrigger && t.scrollTrigger.kill());
            triggers.forEach((t) => t.kill && t.kill());
        };
    }, []);

    return (
        <div className="home-container home-modern">
            <section className="logos-section">
                <div className="logos-grid">
                    <NavLink to="/about-hymo" className="logoHymo" aria-label="About Hymo">
                        <img src={HymoLogo} alt="Hymo" />
                    </NavLink>
                    <NavLink to="/about-marco" className="logoMarco" aria-label="About Marco">
                        <img src={MarcoLogo} alt="Marco" />
                    </NavLink>
                    <NavLink to="/about-gruse" className="logoGruse" aria-label="About Gruse">
                        <img src={GruseLogo} alt="Gruse" />
                    </NavLink>
                    <NavLink to="/about-rotab" className="logoRotab" aria-label="About Rotab">
                        <img src={RotabLogo} alt="Rotab" />
                    </NavLink>
                </div>
            </section>

            <section className="home-hero" ref={(el) => (sectionRefs.current[0] = el)}>
                <div className="home-hero__media">
                    <div className="home-hero__slider" aria-hidden="true">
                        {heroSlides.map((image, idx) => (
                            <div
                                className="home-hero__slide"
                                style={{ backgroundImage: `url(${image})` }}
                                data-index={idx}
                                data-count={heroSlidesCount}
                                key={`${image}-${idx}`}
                            />
                        ))}
                    </div>
                    <div className="home-hero__overlay">
                        <h1>{texts.mainTitle}</h1>
                    </div>
                </div>
            </section>

            <section className="home-hero-reveal" ref={(el) => (sectionRefs.current[1] = el)}>
                <p className="home-hero-reveal__text" ref={heroTextRef} key={language}>
                    {texts.mainText}
                </p>
            </section>

            <section className="home-text-video" ref={(el) => (sectionRefs.current[2] = el)}>
                <div className="home-text-video__text">
                
                    <p>{texts.mainText1}</p>

                    <p className="home-text-video__highlight">{texts.mainCustomMessage}</p>
                    {/* <p>{texts.mainCustomMessage2}</p> */}
                    <Link to="/platforms/custom-tables" className="home-text-video__cta">
                        {texts.mainCustomButton}
                    </Link>
                </div>
                <div className="home-text-video__media">
                    <div className="home-video-frame">
                        <video width="300" height="300" autoPlay muted loop playsInline>
                            <source src={heroVideoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>

            {secondaryHeroes.map((hero, idx) => (
                <section
                    className={`home-secondary ${idx % 2 === 1 ? "home-secondary--reverse" : ""}`}
                    key={hero.id}
                    ref={(el) => (sectionRefs.current[idx + 3] = el)}
                >
                    <div className="home-secondary__media" style={{ backgroundImage: `url(${hero.image})` }} />
                    <div className="home-secondary__text">
                        <h3>{hero.heading}</h3>
                        {hero.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                        ))}
                        {hero.cta && hero.id === "hero-2" ? (
                            <Link to="/applications" className="home-secondary__cta">
                                {hero.cta}
                            </Link>
                        ) : (
                            hero.cta && <button className="home-secondary__cta">{hero.cta}</button>
                        )}
                    </div>
                </section>
            ))}

            <Link to="/platforms" className="find-machine-btn">
                {texts.mainButtonMessage}
            </Link>
        </div>
    );
}