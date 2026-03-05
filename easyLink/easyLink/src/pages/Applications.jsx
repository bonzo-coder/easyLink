
import heroImg from "../../public/img/factoryUsage.jpeg"
import { useLanguage } from '../assets/LanguageContext';

import g1 from "../../public/img/hymo1pic.jpg"
import g2 from "../../public/img/hymo2pic.jpg"
import g3 from "../../public/img/hymo3pic.jpg"
import g4 from "../../public/img/hymo4pic.jpg"
import g5 from "../../public/img/hymo5pic.jpg"
import g6 from "../../public/img/hymo6pic.jpg"
import g7 from "../../public/img/hymo7pic.jpg"
import g8 from "../../public/img/hymo8pic.jpg"

const GALLERY_IMAGES = [g1, g2, g3, g4, g5, g6, g7, g8, heroImg, g1];

const textContent = {
  pl: {
    titles:  [
        "Obsługa zwojów",
        "Zintegrowany podnośnik",
        "Załadunek i rozładunek",
        "Niwelator",
        "Podnośniki do ramp ",
        "Podnośnik ciężarówek",
        "Strefa przyjęć",
        "Platforma podnośna"
    ],
    mainText: "Zoptymalizuj procesy firmowe z naszymi stołami podnośnymi! ",
    text: ["Stoły podnośne stanowią istotny element wyposażenia nowoczesnych zakładów produkcyjnych, gdzie kluczowe znaczenie mają ergonomia pracy, bezpieczeństwo oraz efektywność procesów. Ich podstawowym zadaniem jest umożliwienie podnoszenia, opuszczania i pozycjonowania ładunków na optymalnej wysokości roboczej, co znacząco redukuje konieczność ręcznego dźwigania przez pracowników. Dzięki temu zmniejsza się ryzyko urazów układu mięśniowo-szkieletowego, a komfort pracy ulega wyraźnej poprawie.",
          "W warunkach produkcyjnych stoły podnośne znajdują zastosowanie m.in. na liniach montażowych, w strefach pakowania, przy obsłudze maszyn oraz w magazynach międzyoperacyjnych. Umożliwiają precyzyjne ustawienie detali, półproduktów lub gotowych wyrobów na wysokości dopasowanej do aktualnego etapu procesu technologicznego. Przekłada się to na większą dokładność wykonywanych czynności, skrócenie czasu operacji oraz ograniczenie błędów wynikających ze zmęczenia operatorów.",
          "Nowoczesne stoły podnośne mogą być wyposażone w napęd hydrauliczny, elektryczny lub pneumatyczny, a także w dodatkowe funkcje, takie jak obrotnice, rolki transportowe czy systemy sterowania automatycznego. Pozwala to na ich łatwą integrację z istniejącymi liniami produkcyjnymi oraz dostosowanie do specyficznych wymagań danej branży, np. motoryzacyjnej, spożywczej czy metalowej.",
          "Zastosowanie stołów podnośnych wpływa również na poprawę organizacji pracy i płynności przepływu materiałów. Ułatwiają one transport wewnętrzny oraz szybkie przezbrajanie stanowisk, co ma szczególne znaczenie w produkcji seryjnej i jednostkowej. W efekcie inwestycja w stoły podnośne przekłada się na wzrost wydajności, wyższy poziom bezpieczeństwa oraz długofalowe korzyści ekonomiczne dla przedsiębiorstwa."
        ]
  },
  en: {
    titles:  [
        "Coil Handling",
        "Lift in conveyor integrated",
        "Line Loading Unloading",
        "Nivelator",
        "Loading Dock Lifts",
        "Truck Lift",
        "Receiving Area",
        "Lift Table"
    ],
    mainText: "Optimize your company processes with our lift tables! ",
    text: [ "Lifting tables are an essential element of modern production facilities, where ergonomics, safety, and process efficiency play a key role. Their primary function is to enable lifting, lowering, and positioning loads at an optimal working height, significantly reducing the need for manual handling by employees. As a result, the risk of musculoskeletal injuries is minimized, and overall working comfort is noticeably improved.",
            "In production environments, lifting tables are commonly used on assembly lines, in packing areas, at machine workstations, and in intermediate storage zones. They allow for precise positioning of components, semi-finished products, or finished goods at a height suited to the current stage of the technological process. This leads to greater accuracy in performed tasks, shorter operation times, and a reduction in errors caused by operator fatigue." ,
            "Modern lifting tables can be equipped with hydraulic, electric, or pneumatic drives, as well as additional features such as turntables, roller conveyors, or automated control systems. This enables easy integration with existing production lines and adaptation to the specific requirements of a given industry, such as automotive, food processing, or metalworking.",
            "The use of lifting tables also improves work organization and material flow efficiency. They facilitate internal transport and quick reconfiguration of workstations, which is particularly important in both mass and custom production. As a result, investing in lifting tables leads to increased productivity, higher safety standards, and long-term economic benefits for the company."
        ]
  }
};

// Configure up to 10 dots here — position using percent values (left/top).
// Edit `left`/`top` to place each dot over the image; `href` opens in a new tab.


export default function Applications() {
    const { language } = useLanguage();
    

    const HERO_DOTS = [
    { id: 1, left: '25%', top: '50%', href: 'https://hymo.com/application/coilhandling/', title: textContent[language].titles[0] },
    { id: 2, left: '40%', top: '65%', href: 'https://hymo.com/application/lift-in-conveyor-integrated/', title: textContent[language].titles[1] },
    { id: 3, left: '43%', top: '46%', href: 'https://hymo.com/application/line-loading-unloading/', title: textContent[language].titles[2] },
    { id: 4, left: '31%', top: '57%', href: 'https://hymo.com/application/nivelator/', title: textContent[language].titles[3] },
    { id: 5, left: '60%', top: '86%', href: 'https://hymo.com/application/loading-docks/', title: textContent[language].titles[4] },
    { id: 6, left: '69%', top: '37%', href: 'https://hymo.com/application/truck-lift-lkw/', title: textContent[language].titles[5] },
    { id: 7, left: '34%', top: '78%', href: 'https://hymo.com/application/receiving-area/', title: textContent[language].titles[6] },
    { id: 8, left: '50%', top: '32%', title: textContent[language].titles[7] },
    
];

    return (
        <main>
            <section className="hymo-hero">
                <div className="hymo-hero__blur hymo-hero__blur--left"  />
                <div className="hymo-hero__blur hymo-hero__blur--right"  />
                                <div className="hymo-hero__center">
                                        <img src={heroImg} alt="Hymo usage" className="hymo-hero__image" />

                                        {/* overlay dots container (absolute within center) */}
                                        <div className="hymo-hero__dots" aria-hidden={false}>
                                            {HERO_DOTS.map((d, i) => (
                                                <a
                                                    key={d.id}
                                                    className="hymo-hero__dot"
                                                    href={d.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title={d.title}
                                                    aria-label={d.title}
                                                    style={{ left: d.left, top: d.top }}
                                                >
                                                    <span className="hymo-hero__dot-circle" style={{ animationDelay: `${i * 0.35}s` }} />
                                                    <span className="hymo-hero__dot-label">{d.title}</span>
                                                </a>
                                            ))}
                                        </div>
                                </div>
            </section>

                        {/* bilingual text area + auto-scrolling gallery */}
                        <section className="hero-text-gallery">
                            <div className="hero-text-columns">
                                <div className="hero-text hero-text--pl">
                                    <h3>{textContent[language].mainText}</h3>
                                    {textContent[language].text.slice(0,2).map((p,i) => <p key={i}>{p}</p>)}
                                </div>

                                
                            </div>

                            <div className="auto-gallery">
                                <div className="auto-gallery__track">
                                    {GALLERY_IMAGES.map((src, i) => (
                                        <div className="auto-gallery__item" key={`g1-${i}`}>
                                            <img src={src} alt={`gallery-${i}`} />
                                        </div>
                                    ))}
                                    {GALLERY_IMAGES.map((src, i) => (
                                        <div className="auto-gallery__item" key={`g2-${i}`}>
                                            <img src={src} alt={`gallery-dup-${i}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
</section>
                        
        </main>
    )
}