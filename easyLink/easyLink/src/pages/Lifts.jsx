import { useRef, useState, useEffect } from "react";

import { useLanguage } from '../assets/LanguageContext';
import videoHero from "../../public/video/easylink-video.mp4";
import RotabLogo from "../../public/rotab-logo.svg";

const textContent = {
  pl: {
    company: "Easy Link Polska",
    title: " Systemy przenośników",
    paragraphs: [
      "Jako dystrybutor rozwiązań firmy ROTAB AB oferujemy nowoczesne systemy przenośników przeznaczone do transportu palet i automatyzacji procesów logistycznych. Urządzenia ROTAB wyróżniają się solidną konstrukcją, modułową budową oraz możliwością łatwej integracji z istniejącymi liniami produkcyjnymi i magazynowymi.",
      "W ofercie znajdują się m.in. przenośniki rolkowe, przenośniki łańcuchowe, transfery palet oraz stoły obrotowe umożliwiające zmianę kierunku transportu. Dzięki szerokiej gamie modułów możliwe jest projektowanie systemów dopasowanych do konkretnych potrzeb zakładu – od prostych linii transportowych po zaawansowane instalacje zautomatyzowane.",
      "Systemy ROTAB sprawdzają się w wielu branżach, takich jak logistyka, przemysł spożywczy, produkcja czy centra dystrybucyjne. Rozwiązania te pozwalają usprawnić przepływ materiałów, zwiększyć wydajność pracy oraz poprawić bezpieczeństwo operacji transportowych.",
      "Zapewniamy wsparcie na każdym etapie wdrożenia – od doradztwa technicznego i doboru odpowiedniego rozwiązania, po integrację systemu oraz serwis. Dzięki temu nasi Klienci mogą w pełni wykorzystać potencjał nowoczesnych systemów transportu palet."
    ]
  },
  en: {
    company: "Easy Link Poland",
    title: "Conveyor Systems",
    paragraphs: [
      "As a distributor of solutions from ROTAB AB, we offer modern conveyor systems designed for pallet transport and logistics automation. ROTAB equipment is known for its robust construction, modular design, and easy integration with existing production and warehouse systems.",
      "Our offerings include roller conveyors, chain conveyors, pallet transfers, and turntables that allow for changes in transport direction. With a wide range of modules, it is possible to design systems tailored to the specific needs of a facility – from simple transport lines to advanced automated installations.",
      "ROTAB systems are effective in various industries, such as logistics, food processing, manufacturing, and distribution centers. These solutions help streamline material flow, increase work efficiency, and improve the safety of transport operations.",
      "We provide support at every stage of implementation – from technical consulting and selecting the right solution to system integration and service. This ensures that our clients can fully leverage the potential of modern pallet transport systems."
    ]
  }
};

export default function About() {
  const { language } = useLanguage();
  const { company, title, paragraphs } = textContent[language] || textContent.pl;

  const videoRef = useRef(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const onLoad = () => setLoadVideo(true);
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }
    return () => window.removeEventListener("load", onLoad);
  }, []);

  const handleVideoMeta = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    v.currentTime = v.duration / 2;
  };

  return (
    <main className="about-page">
      <section className="lifts-hero">
        {loadVideo ? (
          <video
            ref={videoRef}
            className="lifts-hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            onLoadedMetadata={handleVideoMeta}
          >
            <source src={videoHero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : null}
        <div className="lifts-hero__overlay" />
        <img src={RotabLogo} alt="Rotab" className="lifts-hero__logo" />
        <div className="lifts-hero__text">
          <p className="about-hero__eyebrow">{company}</p>
          <h1>{title}</h1>
        </div>
      </section>

      <section className="about-body">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>
    </main>
  );
}
