import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { LanguageProvider } from '../assets/LanguageContext';
import { useState, useEffect, Suspense } from "react";
import { gsap } from "gsap";
import ScissorLiftAnimation from './Tableanimation'; 
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText"; 
import ScrollToTop from "../assets/ScrollToTop.jsx";

gsap.registerPlugin(ScrollSmoother, SplitText);

// Funkcja wywoływana po animacji, aby w tle wczytać resztę plików
const prefetchAllPages = () => {
    import("../pages/About");
    import("../pages/Applications");
    import("./PlatformsLayout");
    import("./PlatformLayout");
    import("../pages/Accessories");
    import("../pages/Lifts");
};

export default function Layout() {
    const [showIntro, setShowIntro] = useState(false);
    const [fadeIntro, setFadeIntro] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeIntro(true);
        }, 6000);

        const unmountTimer = setTimeout(() => {
            setShowIntro(false);
            // Kiedy intro znika i strona główna jest gotowa -> pobieramy resztę w tle
            prefetchAllPages();
        }, 7000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(unmountTimer);
        }
    }, []);

    useEffect(() => {
        let smoother;
        if (typeof window !== "undefined") {
            const wrapper = document.querySelector('#smooth-wrapper');
            const content = document.querySelector('#smooth-content');

            if (wrapper && content) {
                smoother = ScrollSmoother.create({
                    wrapper,
                    content,
                    smooth: 1,
                    effects: true,
                    smoothTouch: 0.1,
                });
            }
        }

        return () => {
            smoother && smoother.kill();
        };
    }, []);

    const renderPage = () => {
        return (
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <div className="site-wrapper reveal">
                        
                        <LanguageProvider>
                            <ScrollToTop />
                            <Header />
                            <main>
                                <div className="mainBody">
                                    {/* Suspense chroni aplikację, gdy "Leniwy" komponent musi się doładować */}
                                    <Suspense fallback={<div style={{height: '100vh', background: '#041433'}}></div>}>
                                        <Outlet/>
                                    </Suspense>
                                </div>
                            </main>
                            <Footer />
                        </LanguageProvider>

                        {showIntro && (
                            <div className={`intro-overlay ${fadeIntro ? 'fade-out' : ''}`}>
                                <ScissorLiftAnimation />
                            </div>
                        )}

                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="site-wrapper">
            {renderPage()}
        </div>
    );
}