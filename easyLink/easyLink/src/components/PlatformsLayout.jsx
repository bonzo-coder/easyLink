import { NavLink, Outlet } from "react-router-dom"
import * as Machines from "../assets/machines";
import { useLanguage } from '../assets/LanguageContext';
import { useEffect, useState } from "react";
import "../index.css"; // upewnij się, że importujesz style

// machines/platforms window view
export default function PlatformsLayout() {
    const  {language} = useLanguage();
    const texts = Machines.machines[language];

    // Sprawdź tryb ciemny/jasny
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
        return () => observer.disconnect();
    }, []);

    const machinesList = Object.keys(texts).map(function(key) { 
        return (
            <NavLink key={key} to={texts[key].model} state={{ from: texts[key], key: key }} style={{textDecoration: "none"}}>
                <div
                    className={`machine-bubble${isDark ? " dark" : " light"}`}
                >
                    <h2 className={`device-title${isDark ? " dark" : " light"}`}>
                        {texts[key].title}
                    </h2>
                    <img
                        src={`../../public/img/${texts[key].model}.png`}
                        alt={`machine ${texts[key].model} table${key}`}
                        className={`device-image${isDark ? " dark" : " light"}`}
                    />
                </div>
            </NavLink>
        )
    });

    return (
        <>
            <div className="devices-container machine-bubbles-grid">
                {machinesList}
            </div>
            <Outlet />
        </>
    )
}