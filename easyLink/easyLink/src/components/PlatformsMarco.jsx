import { useLanguage } from "../assets/LanguageContext.jsx";
import marcoLogo from "../../public/marco-logo.png";
import marco1 from "../../public/img/marco.png";
import marco2 from "../../public/img/marco2.png";
import marco3 from "../../public/img/marco3.png";
import marco4 from "../../public/img/marco4.jpg";
import marco5 from "../../public/img/marco5.webp";


export default function PlatformsLayout() {
  const { language } = useLanguage();

  const text = {
    pl: {
      title: "Stóły podnośnikowe Marco",
      paragraph:
        "Stoły podnośnikowe Marco już wkrótce pojawią się w naszej ofercie. To nowoczesne i niezawodne rozwiązania usprawniające pracę w magazynach, warsztatach oraz zakładach produkcyjnych. Zapewniają bezpieczeństwo, wydajność i komfort użytkowania. Śledź nasze aktualności, aby jako pierwszy poznać szczegóły oraz dostępne modele. Zapraszamy do współpracy z naszą firmą. Skontaktuj się z nami, aby uzyskać więcej informacji.",
        title2: "Dostępne wkrótce!"
    },
    en: {
      title: "Marco Lift Tables",
      paragraph:
        "Marco lift tables will soon be available in our product range. These are modern and reliable solutions designed to improve efficiency in warehouses, workshops, and production facilities. They ensure safety, productivity, and ease of use. Follow our updates to be the first to learn about the details and available models. We invite you to cooperate with our company. Contact us for more information.",
    title2: "Available Soon!"
    }
    
  };

  const gallery = [
    marco1, marco2, marco3, marco4, marco5
  ];

  const { title, paragraph, title2 } = text[language] || text.pl;

  return (
    <main className="platforms-page">
        <div className="main-platforms">
            <div className="main-platforms-left">
                <img src={marcoLogo} alt="Marco" className="platforms-page__logo" />
                
                    <div className="platforms-info__left">
                        <h1>{title}</h1>
                        <p>{paragraph}</p>
                        <br></br>
                        <h1>{title2}</h1>
                    </div>
                
            </div>
            
            <div className="main-platforms-right">
                <div className={`platforms-gallery ${gallery.length > 1 ? "is-fade" : ""}`}>
                {gallery.map((src, i) => (
                    <img
                    key={`${src}-${i}`}
                    src={src}
                    alt={title}
                    style={gallery.length > 1 ? { animationDelay: `${i * 6}s` } : undefined}
                    />
                ))}
                </div>
            </div>


        </div>
      
      
    </main>
  );
}