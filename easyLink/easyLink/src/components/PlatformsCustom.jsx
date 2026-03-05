import { useLanguage } from "../assets/LanguageContext.jsx";

import custom1 from "../../public/img/ax2.jpg";
import custom2 from "../../public/img/bx5.jpg";
import custom3 from "../../public/img/dx3.jpg";
import custom4 from "../../public/img/hymo1pic.jpg";
import custom5 from "../../public/img/hymo6pic.jpg";


export default function PlatformsLayout() {
  const { language } = useLanguage();

  const text = {
    pl: {
      title: "Stóły podnośnikowe na wymiar",
      paragraph:
        " Niestandardowe stoły podnośnikowe to idealne rozwiązanie dla firm poszukujących niestandardowych rozwiązań do podnoszenia i transportu ciężkich ładunków. Nasze stoły są projektowane i produkowane zgodnie z indywidualnymi wymaganiami klienta, co pozwala na dostosowanie ich do specyficznych potrzeb i warunków pracy. Oferujemy szeroki wybór opcji, takich jak różne rozmiary, udźwigi, mechanizmy podnoszenia i dodatkowe funkcje, aby zapewnić optymalne rozwiązanie dla Twojej firmy. Skontaktuj się z nami, aby omówić swoje potrzeby i otrzymać spersonalizowaną ofertę.",
    },
    en: {
      title: "Custom Lift Tables",
      paragraph:
        "Custom lift tables are the ideal solution for companies seeking tailored solutions for lifting and transporting heavy loads. Our tables are designed and manufactured according to individual customer requirements, allowing them to be adapted to specific needs and working conditions. We offer a wide range of options, such as different sizes, load capacities, lifting mechanisms, and additional features, to provide the optimal solution for your company. Contact us to discuss your needs and receive a personalized offer.",
    },
  };

  const gallery = [custom1, custom2, custom3, custom4, custom5];

  return (
    <main className="platforms-page">
      <div className="main-platforms">
        <div className="main-platforms-left">
          <div className="platforms-info__left">
            <h1>{text[language].title}</h1>
            <p>{text[language].paragraph}</p>
          </div>
        </div>

        <div className="custom-platforms-right">
          <div className="custom-gallery">
            <div className="custom-gallery__track">
              {/* Exactly TWO sets for a perfect 50% loop */}
              {[...gallery, ...gallery].map((src, i) => (
                <div className="custom-gallery__item" key={`g-${i}`}>
                  <img src={src} alt={`gallery-${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}