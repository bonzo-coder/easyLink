import { useLanguage } from '../assets/LanguageContext';

import photo1 from "../../public/img/marco.png";
import photo2 from "../../public/img/marco7.jpg";
import photo3 from "../../public/img/marco2.png";
import photo4 from "../../public/img/marco3.png";
import photo5 from "../../public/img/marco4.jpg";
import photo6 from "../../public/img/marco5.webp";

import MarcoLogo from "../../public/marco-logo.png";

const textContent = {
  pl: {
    title: "Precyzja rośnie w siłę",
    title2: "Rozwiązania, które podnoszą jakość Twojej firmy na nowy poziom.",
    paragraphs: [
        "Założona w 1935 roku w Szwecji firma Marco rozwinęła się z pionierskiego przedsiębiorstwa inżynieryjnego w europejskiego lidera w projektowaniu i produkcji w pełni spersonalizowanych podnośników nożycowych. Założyciel firmy, Sven Marcusson, zbudował jej reputację w oparciu o precyzję wykonania, niezawodność oraz dogłębne zrozumienie wyzwań związanych z podnoszeniem w środowisku przemysłowym. Przez dekady Marco pozostaje wierne wizji swojego założyciela, nieustannie opracowując innowacyjne rozwiązania odpowiadające na konkretne potrzeby, które zwiększają bezpieczeństwo pracy, usprawniają procesy oraz wspierają funkcjonowanie wymagających środowisk operacyjnych.",   
        "Kompetencje Marco obejmują szeroki zakres branż, w tym logistykę, produkcję, przemysł motoryzacyjny oraz magazynowanie, gdzie indywidualnie dopasowane rozwiązania podnoszące są kluczowe dla bezpiecznego i efektywnego transportu materiałów. Każdy produkt jest projektowany zgodnie ze specyficznymi wymaganiami klienta, co zapewnia jego bezproblemową integrację z istniejącymi procesami oraz utrzymanie najwyższych standardów wydajności i trwałości.",
        "Kluczowym elementem sukcesu Marco jest silne zaangażowanie we współpracę i dzielenie się wiedzą. Firma aktywnie zarządza i wspiera zaufaną sieć dystrybutorów, zapewniając kompleksowe szkolenia, wsparcie techniczne oraz ciągłą opiekę merytoryczną. Takie podejście umożliwia dystrybutorom świadczenie profesjonalnego doradztwa i szybkiej obsługi, a jednocześnie pozwala Marco pozostawać w stałym kontakcie z potrzebami rynku. Dzięki temu procesowi rozwoju opartemu na informacjach zwrotnych firma nieustannie doskonali swoje produkty i dostarcza rozwiązania odpowiadające zmieniającym się wymaganiom branży, umacniając swoją pozycję zaufanego partnera i lidera innowacji w technologii podnoszenia."
    ]
  },
  en: {
    title: "Precision Growing Stronger",
    title2: "Solutions that elevate your company's quality to a new level.",
    paragraphs: [
    "Established in 1935 in Sweden, Marco has grown from a pioneering engineering company into the European market leader in the design and manufacture of fully customized scissor lifts. Founded by Sven Marcusson, the company built its reputation on precision engineering, reliability, and a deep understanding of industrial lifting challenges. Over the decades, Marco has remained true to its founder’s vision by continuously developing innovative, problem-solving solutions that improve workplace safety, optimize workflow efficiency, and support demanding operational environments.",
    "Marco’s expertise extends across a wide range of industries, including logistics, manufacturing, automotive, and warehousing, where tailored lifting solutions are essential for safe and efficient material handling. Each product is engineered to meet specific customer requirements, ensuring seamless integration into existing processes while maintaining the highest standards of performance and durability.",
    "Central to Marco’s success is its strong commitment to collaboration and knowledge sharing. The company actively manages and supports a trusted distributor network, providing comprehensive training, technical guidance, and ongoing support. This approach ensures that distributors are equipped to deliver expert advice and responsive service, while also enabling Marco to stay closely connected to market needs. By maintaining this feedback-driven development process, Marco continues to refine its products and deliver solutions that meet evolving industry demands, reinforcing its position as a trusted partner and innovation leader in lifting technology."
    ]
  }
};

export default function AboutMarco() {
  const { language } = useLanguage();
  const { title, title2, paragraphs } = textContent[language] || textContent.pl;

  return (
    <main className="about-hymo">
      <img src={MarcoLogo} alt="Hymo" className="about-hymo-logo" />

      {/* Centrowane tytuły u góry */}
      <div className="about-hymo-titles">
        <h1>{title}</h1>
        <h2>{title2}</h2>
      </div>

      {/* Galeria pozioma - trzy kwadratowe zdjęcia w jednym wierszu */}
      <section className="about-gallery about-gallery--dark">
        <div className="gallery-row">
          <img src={photo5} alt="Marco 1" className="gallery-img" />
          <img src={photo2} alt="Marco 2" className="gallery-img" />
          <img src={photo3} alt="Marco 3" className="gallery-img" />
        </div>
      </section>

      {/* Teksty i obrazek z prawej */}
      <section className="about-text">
        <div className="about-text__row">
          <div className="about-text__col about-text__col--lead">
            <p>{paragraphs[0]}</p>
          </div>
          <div className="about-text__col about-text__col--img">
            <img src={photo4} alt="Marco 4" className="about-img" />
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
          <img src={photo1} alt="Marco 5" className="gallery-img" />
          <img src={photo5} alt="Marco 6" className="gallery-img" />
          <img src={photo6} alt="Marco 7" className="gallery-img" />
        </div>
      </section>

      {/* paragraphs[2] + duży obraz o szerokości 3 zdjęć */}
      <section className="about-text about-text--centered">
        <p className="about-text__center-paragraph">{paragraphs[2]}</p>

       
      </section>
    </main>
  );
}
