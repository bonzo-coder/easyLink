import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Sun, Moon } from "lucide-react";
import Switch from '@mui/material/Switch';
import CustomizedSwitches from "../components/ui/button";
import { labels } from "../assets/texts";
import PlatformsList from "../components/platforms/PlaformsList.jsx"
import { useLanguage } from '../assets/LanguageContext.jsx';
import MenuIcon from '@mui/icons-material/Menu'; // lub inna ikona menu
import CloseIcon from '@mui/icons-material/Close'; // do zamykania

export default function Header() {
    
    const activeStyles = {
        fontWeight: "bold",
        transform: "scale(1.2)",
        color: "#ABABAB"
    }
    const navigate = useNavigate();
    
    const {language, setLanguage} = useLanguage();
    const [darkMode, setDarkMode] = React.useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 900);

    const toggleLanguage = () => setLanguage(language === "pl" ? "en" : "pl");
    const toggleDarkMode = () => setDarkMode(!darkMode);

    const lang = labels[language];
    
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("logo").style.fontSize = "25px";
        document.getElementById("header").style.height = "60px";
    } else {
        document.getElementById("logo").style.fontSize = "35px";
        document.getElementById("header").style.height = "200px";
    }
    }
    
    function switchTheme(e) {
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {        document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
    }

    switchTheme();

    const [isDropdownVisible, setDropdownVisible] = React.useState(false);
console.log(isDropdownVisible);
console.log( isDesktop);
console.log( isDesktop === true)
    const handleMouseEnter = () => {
        console.log("Mouse entered dropdown area");
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        console.log("Mouse left dropdown area");
        setDropdownVisible(false);
    };
    
    React.useEffect(() => {
      const handleResize = () => setIsDesktop(window.innerWidth > 900);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header id="header">
          <div
            className={darkMode ? "dark" : ""}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              height: "100%",
              width: "100%",
              padding: "0 2em"
            }}
          >
            <div className="logo-container">
                <Link className="site-logo fancy" id="logo" to="/" style={{marginRight: "2em"}}>
                <span>E</span>
                <span>A</span>
                <span>S</span>
                <span>Y</span>
                <span>_</span>
                <span>L</span>
                <span>I</span>
                <span>N</span>
                <span>K</span>
                </Link>
            </div>
            {/* Hamburger icon for mobile */}
            <button
              className="mobile-menu-icon"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="menu"
              style={{
                color: "#fff",
                background: "transparent",
                marginLeft: "auto",
                marginRight: "1.5em",
                fontSize: "2.2rem",
                zIndex: 2002,
              }}
            >
              <MenuIcon />
            </button>
            {/* Nav + switches wrapper */}
            <div className="desktop-nav-switches" style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              justifyContent: "space-between"
            }}>
              <nav style={{display: "flex", alignItems: "center", gap: "1.5em"}}>
                <NavLink to="about" id="about" style={({isActive}) => isActive ? activeStyles : null}>{lang.about}</NavLink>
                <div
                  className="dropDownWrapper"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    className="button1"
                    to="platforms"
                    id="platforms"
                    style={({isActive}) => isActive ? activeStyles : null}
                  >
                    {lang.platforms}
                  </NavLink>
                  {isDropdownVisible && (
                    <PlatformsList
                      Language={language}
                      onItemClick={() => setMobileMenuOpen(false)}
                    />
                  )}
                </div>
                <NavLink to="applications" id="applications" style={({isActive}) => isActive ? activeStyles : null}>{lang.applications}</NavLink>
                <NavLink to="industries" id="industries" style={({isActive}) => isActive ? activeStyles : null}>{lang.industries}</NavLink>
                <NavLink to="lifts" id="lifts" style={({isActive}) => isActive ? activeStyles : null}>{lang.lifts}</NavLink>
                <NavLink to="palletizer" id="palletizer" style={({isActive}) => isActive ? activeStyles : null}>{lang.palletizer}</NavLink>
                <NavLink to="contact" id="contact" style={({isActive}) => isActive ? activeStyles : null}>{lang.contact}</NavLink>
              </nav>
              <div className="switches" style={{display: "flex", alignItems: "center", gap: "1.5em", marginLeft: "2em"}}>
                {/* Language Switch */}
                <button
                  className={`lang-switch ${language === "pl" ? "" : "active"}`}
                  onClick={() => setLanguage("pl")}
                >PL</button>
                <button
                  className={`lang-switch ${language === "en" ? "" : "active"}`}
                  onClick={() => setLanguage("en")}
                >EN</button>
                {/* Dark Mode Switch */}
                <button
                  className="darkmode-switch"
                  onClick={toggleDarkMode}
                  aria-label="dark mode"
                >
                  {darkMode ? <Sun size={22} /> : <Moon size={22} />}
                </button>
              </div>
            </div>
            {/* Hamburger menu and mobile nav remain unchanged */}
            <div className={`links-bar${mobileMenuOpen ? " open" : ""}`}>
              {/* Close icon only on mobile and only when menu is open */}
              <button
                className="close-menu-icon"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="close menu"
                style={{
                  color: "#222",
                  background: "transparent",
                  position: "absolute",
                  top: "1.5em",
                  right: "2em",
                  fontSize: "2.5rem",
                  zIndex: 4000,
                  display: mobileMenuOpen ? "block" : "none",
                }}
              >
                <CloseIcon />
              </button>
              <div className="links">
                <nav>
                  <NavLink 
                    to="about"
                    id="about"
                    style={({isActive}) => isActive ? activeStyles : null}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang.about}
                  </NavLink>
                  <div
                    className="dropDownWrapper"
                  onMouseEnter={isDesktop === true ? handleMouseEnter : null}
                  onMouseLeave={isDesktop  === true ? handleMouseLeave : null}
                  >
                    <NavLink
                      className="button1"
                      to="platforms"
                      id="platforms"
                      style={({isActive}) => isActive ? activeStyles : null}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {lang.platforms}
                    </NavLink>
                    {isDropdownVisible && (
                      <PlatformsList
                        Language={language}
                        onItemClick={() => setMobileMenuOpen(false)}
                      />
                    )}
                  </div>
                  <NavLink
                    to="applications"
                    id="applications"
                    style={({isActive}) => isActive ? activeStyles : null}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang.applications}
                  </NavLink>
                  <NavLink
                    to="industries"
                    id="industries"
                    style={({isActive}) => isActive ? activeStyles : null}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang.industries}
                  </NavLink>
                  <NavLink
                    to="lifts"
                    id="lifts"
                    style={({isActive}) => isActive ? activeStyles : null}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang.lifts}
                  </NavLink>
                  <NavLink
                    to="palletizer"
                    id="palletizer"
                    style={({isActive}) => isActive ? activeStyles : null}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang.palletizer}
                  </NavLink>
                  <NavLink
                    to="contact"
                    id="contact"
                    style={({isActive}) => isActive ? activeStyles : null}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang.contact}
                  </NavLink>
                </nav>
              </div>
              <div className="switches" style={{display: "flex", alignItems: "center", gap: "1.5em", marginLeft: "2em"}}>
                <button
                    className={`lang-switch ${language === "pl" ? "active" : ""}`}
                    onClick={() => setLanguage("pl")}
                >PL</button>
                <button
                    className={`lang-switch ${language === "en" ? "active" : ""}`}
                    onClick={() => setLanguage("en")}
                >EN</button>
                <button
                    className="darkmode-switch"
                    onClick={toggleDarkMode}
                    aria-label="dark mode"
                >
                    {darkMode ? <Sun size={22} /> : <Moon size={22} />}
                </button>
                </div>
            </div>
          </div>
        </header>
    )
}