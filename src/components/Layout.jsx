import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { LanguageProvider } from '../assets/LanguageContext';
import InitialAnimation from "../../public/EasyLinkLogo.svg?react";
import React, { useState, useEffect } from "react";
import ScissorLiftAnimation from './Tableanimation'; // Adjusted import path

export default function Layout() {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 7000);

        return () => clearTimeout(timer);
    }, []);

    const renderPage = () => {
        return (
            <div className={`site-wrapper${!isAnimating ? " reveal" : ""}`}>
                {isAnimating ? <ScissorLiftAnimation/> : <LanguageProvider>
                    <Header />
                    <main>
                        <div className="mainBody">
                            <Outlet/>
                        </div>
                    </main>
                    <Footer />
                </LanguageProvider>}
            </div>
        );
    }

    return (
        <div className="site-wrapper">
            
                        {renderPage()}
                  
        </div>
    );
}