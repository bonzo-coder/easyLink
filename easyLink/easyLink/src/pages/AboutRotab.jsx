import { useLanguage } from '../assets/LanguageContext';

import photo1 from "../../public/img/rotab1.png";
import photo2 from "../../public/img/rotab2.png";
import photo3 from "../../public/img/rotab3.png";
import photo4 from "../../public/img/rotab4.png";
import photo5 from "../../public/img/rotab5.png";

import RotabLogo from "../../public/rotab-logo.svg";

const textContent = {
  pl: {
    title: "Precyzja rośnie w siłę",
    title2: "Rozwiązania, które podnoszą jakość Twojej firmy na nowy poziom.",
    paragraphs: [
        "Założona ponad 40 lat temu firma Rotab specjalizuje się w rozwiązaniach z zakresu automatyki przemysłowej, zdobywając uznanie jako niezawodny partner dla przedsiębiorstw produkcyjnych w Szwecji i całej Europie. Dzięki wieloletniemu doświadczeniu oraz konsekwentnemu rozwojowi technologicznemu firma dostarcza nowoczesne rozwiązania, które wspierają automatyzację procesów, zwiększają wydajność operacyjną oraz poprawiają bezpieczeństwo pracy w wymagających środowiskach przemysłowych.", 
        "Siedziba główna Rotab znajduje się w Tyresö, około 20 minut na południe od Sztokholmu. To właśnie tam zlokalizowane są zarówno działy produkcji, jak i zespoły odpowiedzialne za rozwój nowych produktów oraz wdrażanie innowacyjnych koncepcji. Bliska współpraca pomiędzy inżynierami, projektantami i zespołem produkcyjnym umożliwia sprawne przekształcanie nowych pomysłów w praktyczne i niezawodne rozwiązania przemysłowe, dostosowane do indywidualnych potrzeb klientów.",  
        "Rotab koncentruje się na dostarczaniu wysokiej jakości systemów i komponentów, które integrują się z istniejącymi liniami produkcyjnymi oraz wspierają optymalizację procesów technologicznych. Firma stale inwestuje w rozwój kompetencji, nowoczesne technologie oraz doskonalenie swoich produktów, aby sprostać rosnącym wymaganiom współczesnego przemysłu.", 
        "Istotnym elementem działalności Rotab jest również rozbudowana sieć dystrybutorów oraz partnerów handlowych w całej Europie. Dzięki tej współpracy firma jest w stanie zapewnić klientom profesjonalne doradztwo techniczne, wsparcie projektowe oraz sprawną obsługę na każdym etapie realizacji projektu. Połączenie szwedzkiej jakości, doświadczenia inżynieryjnego oraz indywidualnego podejścia do klienta sprawia, że Rotab pozostaje zaufanym dostawcą rozwiązań automatyki przemysłowej i partnerem wspierającym rozwój nowoczesnych zakładów produkcyjnych."
    ]
  },
  en: {
    title: "Precision Growing Stronger",
    title2: "Solutions that elevate your company's quality to a new level.",
    paragraphs: [
        "Founded more than 40 years ago, Rotab has built a strong reputation as a trusted provider of industrial automation solutions, supporting manufacturing companies in Sweden and across Europe. With decades of engineering experience and a continuous focus on technological advancement, the company delivers modern systems designed to improve operational efficiency, enhance workplace safety, and optimize production processes in demanding industrial environments.",  
        "Rotab’s headquarters is located in Tyresö, approximately 20 minutes south of Stockholm. This facility brings together both manufacturing operations and dedicated teams responsible for product development and innovation. Close collaboration between engineers, designers, and production specialists enables the company to efficiently transform new ideas into practical, reliable solutions tailored to specific customer requirements.",
        "The company specializes in delivering high-quality automation systems and components that integrate seamlessly into existing production lines while supporting process optimization and long-term operational reliability. Rotab continuously invests in technical expertise, modern technologies, and product development to ensure its solutions meet the evolving needs of modern industry.",
        "An important part of Rotab’s success is its well-established network of distributors and partners throughout Europe. This network enables the company to provide professional technical support, project guidance, and responsive service at every stage of implementation. By combining Swedish engineering quality, extensive industry experience, and a customer-focused approach, Rotab continues to strengthen its position as a reliable partner in industrial automation and a valued contributor to efficient and future-ready manufacturing operations."
    ]

  }
};

export default function AboutRotab() {
  const { language } = useLanguage();
  const { title, title2, paragraphs } = textContent[language] || textContent.pl;

  return (
    <main className="about-hymo">
      <img src={RotabLogo} alt="Rotab" className="about-hymo-logo" />

      {/* Centrowane tytuły u góry */}
      <div className="about-hymo-titles">
        <h1>{title}</h1>
        <h2>{title2}</h2>
      </div>

      {/* Galeria pozioma - trzy kwadratowe zdjęcia w jednym wierszu */}
      <section className="about-gallery about-gallery--dark">
        <div className="gallery-row">
          <img src={photo1} alt="Rotab 1" className="gallery-img" />
          <img src={photo2} alt="Rotab 2" className="gallery-img" />
          <img src={photo3} alt="Rotab 3" className="gallery-img" />
        </div>
      </section>

      {/* Teksty i obrazek z prawej */}
      <section className="about-text">
        <div className="about-text__row">
          <div className="about-text__col about-text__col--lead">
            <p>{paragraphs[0]}</p>
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
          <img src={photo4} alt="Marco 5" className="gallery-img" />
          <img src={photo5} alt="Marco 6" className="gallery-img" />
          
        </div>
      </section>

      {/* paragraphs[2] + duży obraz o szerokości 3 zdjęć */}
      <section className="about-text about-text--centered">
        <p className="about-text__center-paragraph">{paragraphs[2]}</p>

       
      </section>
    </main>
  );
}
