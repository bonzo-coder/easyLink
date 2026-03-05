import React from "react";

import { useLanguage } from '../assets/LanguageContext';
import hero1 from "../../public/img/hymo1pic.jpg";
import hero2 from "../../public/img/hymo2pic.jpg";
import hero3 from "../../public/img/hymo3pic.jpg";
import hero4 from "../../public/img/hymo4pic.jpg";
import hero5 from "../../public/img/hymo5pic.jpg";

const textContent = {
  pl: {
    company: "Easy Link Polska",
    title: " Oficjalny dystrybutor rozwiązań dla transportu wewnętrznego",
    paragraphs: [
      "Oferujemy szeroką gamę urządzeń, w tym podnośniki nożycowe, przenośniki oraz automatyczne paletyzatory.",
      "Działamy od 1997 roku, dostarczając sprzęt wspierający przenoszenie i magazynowanie towarów. Jesteśmy częścią międzynarodowego konglomeratu",
      "SIGI Group",
      ", do którego należą renomowane marki takie jak",
      "Hymo, Marco i Gruse",
      "– liderzy w dziedzinie rozwiązań do transportu i obsługi materiałów. Oprócz nowych urządzeń zapewniamy części zamienne do wszystkich platform Hymo – nawet tych, które niezawodnie pracują od dziesięcioleci. Dbamy nie tylko o wysoką jakość naszych podnośników i przenośników, lecz także o najwyższy standard obsługi Klienta.",
      "Nasz zespół doświadczonych specjalistów służy pomocą na każdym etapie – od doboru odpowiedniego rozwiązania, przez optymalną konfigurację, aż po wsparcie techniczne. Dzięki naszym urządzeniom firmy z niemal każdej branży w Polsce mogą zwiększać efektywność i optymalizować procesy pracy.",
      "Biuro handlowe Easy Link Polska mieści się w Piasecznie. Zapraszamy do kontaktu!"
    ]
  },
  en: {
    company: "Easy Link Poland",
    title: "Official distributor of internal transport solutions",
    paragraphs: [
      "We offer a wide range of equipment, including scissor lifts, conveyors, and automatic palletizers.",
      "Since 1997, we have been delivering equipment that supports the movement and storage of goods. We are part of the international conglomerate",
      "SIGI Group",
      ", which includes renowned brands such as",
      "Hymo, Marco, and Gruse",
      "– leaders in the field of internal transport and material handling solutions. In addition to new devices, we supply spare parts for all Hymo platforms – even those that have been reliably operating for decades. We take care not only of the high quality of our lifts and conveyors but also of providing the highest standard of customer service.",  
      "Our team of experienced specialists is here to assist you at every stage – from selecting the right solution, through optimal configuration, to technical support. Thanks to our equipment, companies from almost every industry in Poland can increase efficiency and optimize their workflow.",
      "The Easy Link Poland sales office is located in Piaseczno. We look forward to hearing from you!"
    ]
  }
};

const HERO_IMAGES = [hero1, hero2, hero3, hero4, hero5];

export default function About() {
  const { language } = useLanguage();
  const { company,title, paragraphs } = textContent[language] || textContent.pl;

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__slider" aria-hidden>
          {HERO_IMAGES.map((src, index) => (
            <div
              key={src}
              className="about-hero__slide"
              style={{ backgroundImage: `url(${src})`, animationDelay: `${index * 6}s` }}
            />
          ))}
        </div>
        <div className="about-hero__overlay">
          <p className="about-hero__eyebrow">{company}</p>
          <h1>{title}</h1>
        </div>
      </section>

      <section className="about-body">
        {/* {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))} */}
        <p>{paragraphs[0]}</p>
        <p>{paragraphs[1]} <strong>{paragraphs[2]}</strong> {paragraphs[3]} <strong>{paragraphs[4]}</strong> {paragraphs[5]}</p>
        <p>{paragraphs[6]}</p>
        <p>{paragraphs[7]}</p>
      </section>
    </main>
  );
}
