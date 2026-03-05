
import { useLanguage } from '../assets/LanguageContext';
import videoHero from "../../public/video/easylink-video.mp4";
import RotabLogo from "../../public/rotab-logo.svg";

const textContent = {
  pl: {
    company: "Easy Link Polska",
    title: " Paletyzatory automatyczne",
    paragraphs: [
      "Jako dystrybutor rozwiązań firmy ROTAB AB oferujemy nowoczesne automatyczne paletyzatory przeznaczone do wydajnego układania produktów na paletach w liniach produkcyjnych i pakujących. Systemy te pozwalają znacząco usprawnić końcowy etap procesu logistycznego, zwiększając wydajność oraz powtarzalność operacji.",
      "Paletyzatory ROTAB mogą obsługiwać różne typy ładunków, takie jak kartony, skrzynki czy worki. Dzięki elastycznej konstrukcji i możliwości integracji z przenośnikami oraz systemami transportu palet, rozwiązania te można łatwo dopasować do specyfiki danej linii produkcyjnej.",
      "Automatyzacja procesu paletyzacji pozwala ograniczyć pracę manualną, poprawić bezpieczeństwo stanowisk pracy oraz zoptymalizować wykorzystanie przestrzeni magazynowej. Systemy te znajdują zastosowanie w wielu branżach, m.in. w przemyśle spożywczym, produkcyjnym i logistycznym.",
      "Zapewniamy wsparcie na każdym etapie wdrożenia – od analizy potrzeb i doboru odpowiedniego rozwiązania, po integrację systemu oraz serwis techniczny. Dzięki temu nasi Klienci mogą w pełni wykorzystać możliwości nowoczesnych systemów automatycznej paletyzacji."
    ]
  },
  en: {
    company: "Easy Link Poland",
    title: "Automatic Palletizers",
    paragraphs: [
      "As a distributor of solutions from ROTAB AB, we offer modern automatic palletizers designed for efficient product stacking on pallets in production and packaging lines. These systems significantly streamline the final stage of the logistics process, increasing efficiency and consistency of operations.",
      "ROTAB palletizers can handle various types of loads, such as cartons, crates, or bags. Thanks to their flexible design and integration capabilities with conveyors and pallet transport systems, these solutions can be easily adapted to the specific needs of a production line.",
      "Automating the palletizing process reduces manual labor, improves workplace safety, and optimizes warehouse space utilization. These systems are used in various industries, including food processing, manufacturing, and logistics.",
      "We provide support at every stage of implementation – from needs analysis and selecting the right solution to system integration and technical service. This ensures that our clients can fully leverage the potential of modern automatic palletizing systems."
    ]
  }
};

export default function About() {
  const { language } = useLanguage();
  const { company, title, paragraphs } = textContent[language] || textContent.pl;

  return (
    <main className="about-page">
      <section className="lifts-hero">
        
        <video className="lifts-hero__video" autoPlay muted loop playsInline>
          <source src={videoHero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
