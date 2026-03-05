import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import { lazy } from "react";

// Te ładujemy od razu dla strony głównej i animacji
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Error from "./components/error";
import NotFound from "./pages/NotFound";

// Resztę ładujemy "leniwie" (nie wejdą do początkowego pliku bundle.js)
const About = lazy(() => import("./pages/About"));
const Applications = lazy(() => import("./pages/Applications"));
const PlatformsLayout = lazy(() => import("./components/PlatformsLayout"));
const PlatformLayout = lazy(() => import("./components/PlatformLayout"));
const AboutHymo = lazy(() => import("./pages/AboutHymo"));
const AboutMarco = lazy(() => import("./pages/AboutMarco"));
const AboutGruse = lazy(() => import("./pages/AboutGruse"));
const AboutRotab = lazy(() => import("./pages/AboutRotab"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Accessories = lazy(() => import("./pages/Accessories"));
const PlatformsGruse = lazy(() => import("./components/PlatformsGruse"));
const PlatformsMarco = lazy(() => import("./components/PlatformsMarco"));
const PlatformsCustom = lazy(() => import("./components/PlatformsCustom"));
const Lifts = lazy(() => import("./pages/Lifts"));
const Palletizer = lazy(() => import("./pages/Palletizer"));

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="accessories" element={<Accessories />} />
    <Route path="about-hymo" element={<AboutHymo />} />
    <Route path="about-marco" element={<AboutMarco />} />
    <Route path="about-gruse" element={<AboutGruse />} />
    <Route path="about-rotab" element={<AboutRotab />} />
    
    <Route path="platforms" element={<PlatformsLayout />} />
    <Route path="platforms/:id" element={<PlatformLayout/>} errorElement={<Error />} />
    <Route path="platforms/custom-tables" element={<PlatformsCustom/>} errorElement={<Error />} />
    <Route path="platforms/marco-tables" element={<PlatformsMarco/>} errorElement={<Error />} />
    <Route path="platforms/gruse-tables" element={<PlatformsGruse/>} errorElement={<Error />} />
    
    <Route path="applications" element={<Applications />} errorElement={<Error />} />
    <Route path="lifts" element={<Lifts />} errorElement={<Error />} />
    <Route path="palletizer" element={<Palletizer />} errorElement={<Error />} />
    <Route path="contact" element={<ContactPage />} errorElement={<Error />} />
    <Route path="*" element={<NotFound />} />
  </Route>
));

export default function App() {
  return <RouterProvider router={router} />;
}

