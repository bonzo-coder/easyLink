

/*
function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAnimating, setIsAnimating] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 3500); // Animation duration (e.g., 3 seconds)

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  console.log(isAnimating);
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <div>
            {isAnimating ? <InitialAnimation /> : <HomePage />}
          </div>
        );
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      default:
        return (
          <div>
            {isAnimating ? <InitialAnimation /> : <HomePage />}
          </div>
        );
    }
  };

  return (
    <div>
     
      <div>
        <Header> 
          <nav>
            <button onClick={() => setCurrentPage("home")}>Home</button>
            <button onClick={() => setCurrentPage("about")}>About</button>
            <button onClick={() => setCurrentPage("contact")}>Contact</button>
          </nav>
        </Header>
          <div className="mainBody">{renderPage()}</div>
        <Footer></Footer>
      </div>
      
    </div>
  );
}

export default App;*/

// import { useState } from "react";

 
// import "./App.css";

// export default function App() {
//   const [language, setLanguage] = useState("pl");
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleLanguage = () => setLanguage(language === "pl" ? "en" : "pl");
//   const toggleDarkMode = () => setDarkMode(!darkMode);

  

//   const lang = labels[language];

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
//         <Header>ffddfddf</Header>
//         <header className="flex justify-between items-center px-6 py-4 shadow bg-gray-100 dark:bg-gray-800">
//           <div className="text-2xl font-bold">Easy Link</div>
//           <nav className="flex gap-4 text-sm">
//             <a href="#about">{lang.about}</a>
//             <a href="#platforms">{lang.platforms}</a>
//             <a href="#applications">{lang.applications}</a>
//             <a href="#industries">{lang.industries}</a>
//             <a href="#lifts">{lang.lifts}</a>
//             <a href="#palletizer">{lang.palletizer}</a>
//             <a href="#contact">{lang.contact}</a>
//           </nav>
//           <div className="flex gap-2">
//             <Switch  onChange={toggleLanguage} />
//             <Switch  onChange={toggleDarkMode} variant="ghost">
//             {darkMode ? <Sun /> : <Moon />}
//             </Switch>
              
//             <CustomizedSwitches 
//             languageSwitch={toggleLanguage}
//             darkModeSwitch={toggleDarkMode}
//             ></CustomizedSwitches>
            
            
//           </div>
//         </header>

//         <main className="relative">
//           <video
//             className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
//             autoPlay
//             muted
//             loop
//             src="/background-video.mp4"
//           ></video>
//           <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">{lang.headline}</h1>
//             <p className="text-lg md:text-2xl max-w-3xl">{lang.subheadline}</p>
//           </div>
//         </main>

//         <footer className="bg-gray-200 dark:bg-gray-700 text-center py-6 mt-10">
//           <p>&copy; 2025 Easy Link. All rights reserved.</p>
//         </footer>
//       </div>
//     </div>
//   );
// } 





import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate
} from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"
import PlatformsLayout from "./components/PlatformsLayout"
import PlatformLayout from "./components/PlatformLayout"
import Error from "./components/error"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="applications"
      errorElement={<Error />}
    />
    <Route 
      path="cars/:id" 
      errorElement={<Error />}
    />

    <Route 
      path="platforms"
      element={<PlatformsLayout />}
    />
      
    <Route
        path="platforms/:id"
        element={<PlatformLayout/>}
        errorElement={<Error />} 
    />
    <Route path="*" element={<NotFound />} />
    <Route path="/car-rental" element={<Navigate to='/' />} />
  </Route>
))

export default function App() {

  return (
    <RouterProvider router={router} />
  )
}

