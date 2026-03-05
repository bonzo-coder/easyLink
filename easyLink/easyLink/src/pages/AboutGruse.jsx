import React from "react";
import { useLanguage } from '../assets/LanguageContext';

import photo1 from "../../public/img/hymo1pic.jpg";
import photo2 from "../../public/img/hymo2pic.jpg";
import photo3 from "../../public/img/hymo3pic.jpg";
import photo4 from "../../public/img/hymo4pic.jpg";
import photo5 from "../../public/img/hymo5pic.jpg";
import photo6 from "../../public/img/hymo6pic.jpg";
import photo7 from "../../public/img/hymo7pic.jpg";
import photo8 from "../../public/img/hymo8pic.jpg";
import GruseLogo from "../../public/gruse-logo.svg";

const textContent = {
  pl: {
    title: "Precyzja rośnie w siłę",
    title2: "Rozwiązania, które podnoszą jakość Twojej firmy na nowy poziom.",
    paragraphs: [
       "Założona ponad 20 lat temu firma Gruse specjalizuje się w opracowywaniu rozwiązań podnoszących w segmencie premium i należy do liderów rynku w Niemczech oraz Europie. Kierując się mottem „Jesteśmy inżynierami z pasją”, firma nieustannie rozwija i projektuje indywidualne rozwiązania, które nie tylko podnoszą, ale również przechylają, transportują i wspierają procesy technologiczne. Dzięki konsekwentnemu podejściu do personalizacji, obecnie około 85% produktów jest projektowanych i produkowanych zgodnie ze specyficznymi wymaganiami klientów.",
       "Gruse dostarcza swoje rozwiązania dla szerokiego spektrum branż, w tym przemysłu lotniczego, drzewnego oraz motoryzacyjnego. Firma współpracuje również z producentami maszyn, dostarczając komponenty i systemy dla urządzeń takich jak walcarki czy dmuchawy. Każde rozwiązanie jest opracowywane z myślą o maksymalnej wydajności, bezpieczeństwie oraz niezawodności, co pozwala klientom optymalizować procesy produkcyjne i logistyczne.",
       "Jako kompleksowy partner w zakresie inżynierii mechanicznej, Gruse zatrudnia około 160 pracowników i prowadzi aktywny program szkoleniowy, wspierając rozwój przyszłych specjalistów w zawodach technicznych i handlowych. Wszystkie produkty są projektowane i wytwarzane w Niemczech, w siedzibie firmy w regionie Weserbergland, a następnie instalowane u klientów na całym świecie. Dzięki obecności w ponad 55 krajach Gruse łączy niemiecką precyzję inżynieryjną z globalnym doświadczeniem.",      
       "Specjalnością firmy są maszyny wykonywane na zamówienie, przeznaczone do podnoszenia, przechylania, transportu oraz wspierania procesów technologicznych. Każde rozwiązanie jest dostosowane do konkretnych wymagań aplikacji, zapewniając optymalną funkcjonalność i integrację z istniejącymi systemami. Dzięki wieloletniemu doświadczeniu, zaawansowanej wiedzy technicznej oraz indywidualnemu podejściu do każdego projektu, Gruse pozostaje zaufanym partnerem w dostarczaniu nowoczesnych i niezawodnych rozwiązań dla przemysłu."
    ]},
  en: {
    title: "Precision Growing Stronger",
    title2: "Solutions that elevate your company's quality to a new level.",
    paragraphs: [
   "Founded more than 20 years ago, Gruse has established itself as a leading provider of premium lifting solutions in Germany and across Europe. Guided by the motto “We are engineers with passion,” the company continuously develops and designs custom-engineered solutions that not only lift, but also tilt, convey, and support complex production processes. With a strong focus on customization, approximately 85 percent of Gruse’s products are designed and manufactured according to specific customer requirements.",
   "Gruse serves a wide range of industries, including aviation, wood processing, and automotive manufacturing, where precision handling and reliable lifting technology are essential. The company also partners with other machine manufacturers, supplying specialized systems and components for applications such as rolling mills and industrial blowers. Each solution is engineered to deliver maximum efficiency, safety, and durability, enabling customers to optimize their production and material handling operations.",
   "As a full-service mechanical engineering company, Gruse employs around 160 people and is actively committed to developing future talent through its in-house training programs in technical and commercial professions. All products are developed and manufactured in Germany at the company’s headquarters in the Weserbergland region and are installed and supported worldwide. With customers in more than 55 countries, Gruse combines German engineering excellence with global reach and experience.",
   "Custom-built machines form the core of Gruse’s expertise, particularly for applications that require lifting combined with tilting, conveying, or processing. Each system is tailored to the specific needs of the application, ensuring optimal performance and seamless integration into existing workflows. Through its engineering expertise, customer-focused approach, and commitment to quality, Gruse continues to be a trusted partner in delivering advanced and reliable industrial handling solutions."
  ]} 
}

export default function AboutGruse() {
  const { language } = useLanguage();
  const { title, title2, paragraphs } = textContent[language] || textContent.pl;

  return (
    <main className="about-hymo">
      <img src={GruseLogo} alt="gruse" className="about-hymo-logo" />

      {/* Centrowane tytuły u góry */}
      <div className="about-hymo-titles">
        <h1>{title}</h1>
        <h2>{title2}</h2>
      </div>

      {/* Galeria pozioma - trzy kwadratowe zdjęcia w jednym wierszu */}
      <section className="about-gallery about-gallery--dark">
        <div className="gallery-row">
          <img src={photo1} alt="Gruse 1" className="gallery-img" />
          <img src={photo2} alt="Gruse 2" className="gallery-img" />
          <img src={photo3} alt="Gruse 3" className="gallery-img" />
        </div>
      </section>

      {/* Teksty i obrazek z prawej */}
      <section className="about-text">
        <div className="about-text__row">
          <div className="about-text__col about-text__col--lead">
            <p>{paragraphs[0]}</p>
          </div>
          <div className="about-text__col about-text__col--img">
            <img src={photo4} alt="Gruse 4" className="about-img" />
          </div>
        </div>

        <div className="about-text__more">
          <div className="about-text__col">
            <p>{paragraphs[1]}</p>
          </div>
        </div>
      </section>

      <section className="about-gallery about-gallery--darker">
        <div className="gallery-row">
          <img src={photo5} alt="Gruse 5" className="gallery-img" />
          <img src={photo6} alt="Gruse 6" className="gallery-img" />
          <img src={photo7} alt="Gruse 7" className="gallery-img" />
        </div>
      </section>

      {/* paragraphs[2] + duży obraz o szerokości 3 zdjęć */}
      <section className="about-text about-text--centered">
        <p className="about-text__center-paragraph">{paragraphs[2]}</p>
        <p className="about-text__center-paragraph">{paragraphs[3]}</p>
        <div className="about-big-image-wrapper">
          <img src={photo8} alt="Gruse 8" className="about-big-image" />
        </div>
      </section>
    </main>
  );
}
