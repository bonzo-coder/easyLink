import { useLanguage } from '../assets/LanguageContext';

import photo1 from "../../public/img/hymo1pic.jpg";
import photo2 from "../../public/img/hymo2pic.jpg";
import photo3 from "../../public/img/hymo3pic.jpg";
import photo4 from "../../public/img/hymo4pic.jpg";
import photo5 from "../../public/img/hymo5pic.jpg";
import photo6 from "../../public/img/hymo6pic.jpg";
import photo7 from "../../public/img/hymo7pic.jpg";
import photo8 from "../../public/img/hymo8pic.jpg";
import HymoLogo from "../../public/Hymo-logo.png";

const textContent = {
  pl: {
    title: "Precyzja rośnie w siłę",
    title2: "Rozwiązania, które podnoszą jakość Twojej firmy na nowy poziom.",
    paragraphs: [
      "Szwedzka firma Hymo AB już od ponad pół wieku jest wiodącym dostawcą platform podnośnych w Europie. Najwyższa jakość, najlepsze podzespoły oparte na dojrzałych technologiach stanowią nieodzowne wsparcie w środowiskach pracy związanych z produkcją, przechowywaniem, transportem oraz dystrybucją towarów o dużej wadze i gabarytach. Podnośniki hydrauliczne Hymo AB sprawdzają się wszędzie tam, gdzie produkty muszą pokonać  różnicę poziomów lub przenieść się z miejsca na miejsce.sy Link Polska mieści się w Piasecznie. Zapraszamy do kontaktu!",
      "Szeroka gama modeli oraz specjalistycznych, dodatkowych modułów sprawia, że z naszych dźwigników z powodzeniem korzystają firmy we wszystkich sektorach przemysłu. Stosowane przez nas rozwiązania techniczne gwarantują bezpieczeństwo, wydajność oraz doskonałą ergonomię pracy. Każda z naszych platform nożycowych spełnia najwyższe normy jakości. Każdy egzemplarz przed dostarczeniem go do Klienta, przechodzi indywidualne testy i badania techniczne. Od ponad 50 lat z powodzeniem unosimy ciężar najwyższych oczekiwań naszych Klientów, gdyż wiemy, że na zaufanie pracuje się każdego dnia, wraz z każdym sprzedanym egzemplarzem naszych produktów.",
      "Główna siedziba firmy mieści się w Szwecji. Ponadto firma Hymo AB ma swoje placówki w Wielkiej Brytanii, Niemczech, Francji oraz w Holandii. Sieć naszej sprzedaży tworzą także niezależni dystrybutorzy w większości państw na świecie. Naszym wyłącznym dystrybutorem w Polsce jest firma Easy Link Polska."
    ]
  },
  en: {
    title: "Precision Growing Stronger",
    title2: "Solutions that elevate your company's quality to a new level.",
    paragraphs: [
      "Hymo AB, a Swedish company, has been a leading supplier of lifting platforms in Europe for over half a century. Top-quality components and mature technologies provide indispensable support in environments related to production, storage, transport and distribution of heavy and oversized goods. Hymo AB hydraulic lifts perform reliably wherever products must overcome level differences or be moved from one place to another. Easy Link Polska is located in Piaseczno — feel free to contact us.",
      "A wide range of models and specialized additional modules means our lifts are successfully used across all industrial sectors. The technical solutions we apply ensure safety, efficiency and excellent ergonomics. Each of our scissor platforms meets the highest quality standards and every unit undergoes individual tests and technical inspections before delivery to the customer. For over 50 years we have been meeting our customers' highest expectations — trust is earned every day with every product we supply.",
      "The company's headquarters are located in Sweden. In addition, Hymo AB has offices in the United Kingdom, Germany, France and the Netherlands. Our sales network also includes independent distributors in most countries worldwide. Our exclusive distributor in Poland is Easy Link Polska."
    ]
  }
};

export default function AboutHymo() {
  const { language } = useLanguage();
  const { title, title2, paragraphs } = textContent[language] || textContent.pl;

  return (
    <main className="about-hymo">
      <img src={HymoLogo} alt="Hymo" className="about-hymo-logo" />

      {/* Centrowane tytuły u góry */}
      <div className="about-hymo-titles">
        <h1>{title}</h1>
        <h2>{title2}</h2>
      </div>

      {/* Galeria pozioma - trzy kwadratowe zdjęcia w jednym wierszu */}
      <section className="about-gallery about-gallery--dark">
        <div className="gallery-row">
          <img src={photo1} alt="Hymo 1" className="gallery-img" />
          <img src={photo2} alt="Hymo 2" className="gallery-img" />
          <img src={photo3} alt="Hymo 3" className="gallery-img" />
        </div>
      </section>

      {/* Teksty i obrazek z prawej */}
      <section className="about-text">
        <div className="about-text__row">
          <div className="about-text__col about-text__col--lead">
            <p>{paragraphs[0]}</p>
          </div>
          <div className="about-text__col about-text__col--img">
            <img src={photo4} alt="Hymo 4" className="about-img" />
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
          <img src={photo5} alt="Hymo 5" className="gallery-img" />
          <img src={photo6} alt="Hymo 6" className="gallery-img" />
          <img src={photo7} alt="Hymo 7" className="gallery-img" />
        </div>
      </section>

      {/* paragraphs[2] + duży obraz o szerokości 3 zdjęć */}
      <section className="about-text about-text--centered">
        <p className="about-text__center-paragraph">{paragraphs[2]}</p>

        <div className="about-big-image-wrapper">
          <img src={photo8} alt="Hymo 8" className="about-big-image" />
        </div>
      </section>
    </main>
  );
}
