import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../assets/LanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import contactHero from "../../public/img/mainFactory.avif";
import hero1 from "../../public/img/hymo10pic.png";
import hero2 from "../../public/img/ax2.jpg";
import hero3 from "../../public/img/bx2.jpg";
import hero4 from "../../public/img/hymo13pic.png";
import hero5 from "../../public/img/txc3.jpg";
import hero6 from "../../public/img/hymo15pic.png";
import hero7 from "../../public/img/hymo9pic.png";


gsap.registerPlugin(ScrollTrigger);

const formFields = [
  {
    name: "company",
    type: "text",
    required: true,
    label: { pl: "*Nazwa firmy", en: "*Company name" },
    placeholder: { pl: "Twoja firma", en: "Your company" },
  },
  {
    name: "firstName",
    type: "text",
    required: true,
    label: { pl: "*Imię", en: "*First name" },
    placeholder: { pl: "Imię", en: "First name" },
  },
  {
    name: "lastName",
    type: "text",
    required: true,
    label: { pl: "*Nazwisko", en: "*Last name" },
    placeholder: { pl: "Nazwisko", en: "Last name" },
  },
  {
    name: "address",
    type: "text",
    required: true,
    label: { pl: "*Adres", en: "*Address" },
    placeholder: { pl: "Ulica, nr, miasto", en: "Street, city" },
  },
  {
    name: "email",
    type: "email",
    required: true,
    label: { pl: "*Adres email", en: "*Email address" },
    placeholder: { pl: "nazwa@firma.pl", en: "name@company.com" },
  },
  {
    name: "phone",
    type: "tel",
    required: true,
    label: { pl: "*Telefon", en: "*Phone" },
    placeholder: { pl: "+48 123 456 789", en: "+48 123 456 789" },
  },
  {
    name: "capacity",
    type: "number",
    required: true,
    label: { pl: "*Nośność platformy podnośnej [kg]", en: "*Lift capacity [kg]" },
    placeholder: { pl: "np. 2000", en: "e.g. 2000" },
  },
  {
    name: "platformLength",
    type: "number",
    required: true,
    label: { pl: "*Długość blatu platformy [mm]", en: "*Platform length [mm]" },
    placeholder: { pl: "np. 1800", en: "e.g. 1800" },
  },
  {
    name: "platformWidth",
    type: "number",
    required: true,
    label: { pl: "*Szerokość blatu platformy [mm]", en: "*Platform width [mm]" },
    placeholder: { pl: "np. 800", en: "e.g. 800" },
  },
  {
    name: "stroke",
    type: "number",
    required: true,
    label: { pl: "*Skok platformy [mm]", en: "*Lift stroke [mm]" },
    placeholder: { pl: "np. 800", en: "e.g. 800" },
  },
  {
    name: "application",
    type: "textarea",
    required: false,
    label: { pl: "Opis zastosowania platformy", en: "Application description" },
    placeholder: { pl: "Jak planujesz wykorzystać platformę?", en: "How will the platform be used?" },
  },
  {
    name: "extras",
    type: "textarea",
    required: false,
    label: { pl: "Dodatkowe wymagania, akcesoria", en: "Additional requirements" },
    placeholder: { pl: "Akcesoria, warunki pracy, itp.", en: "Accessories, environment, etc." },
  },
];

const contactGallery = [hero1, hero2, hero4, hero6, hero5, hero3, hero7];

const contactCopy = {
  pl: {
    eyebrow: "Zaufaj naszym ekspertom",
    title: "Profesjonalne doradztwo przy wyborze platform HYMO",
    lead: "Nasze doświadczenie i wiedza pomogą Ci znaleźć dokładnie to, czego potrzebujesz.",
    paragraphs: [
      "Nasi specjaliści pomogą Państwu w dokonaniu właściwego wyboru platformy podnośnikowej Hymo. Tego typu zadanie wymaga dokładnej analizy Państwa potrzeb oraz wnikliwego przyjrzenia się środowisku pracy, w którym funkcjonować będą nasze urządzenia.",
      "Wnikliwie wysłuchamy także wszelkich uwag i komentarzy dotyczących Państwa przyszłych potrzeb, tak aby zakupiony u nas sprzęt doskonale spełniał powierzone mu zadania przez długie lata. Pomożemy dobrać także odpowiednie wyposażenie dodatkowe, które usprawni pracę i zoptymalizuje koszty.",
    ],
    listHeading: "Na dobór właściwego rozwiązania wpływają m.in.:",
    bulletPoints: [
      "specyfika potrzeb i zastosowań",
      "przestrzeń, w której pracuje sprzęt",
      "rodzaj podnoszonego ładunku",
      "sposób załadunku",
      "rodzaj zasilania",
      "intensywność pracy",
    ],
    closing:
      "Już teraz zapraszamy do kontaktu z naszym Działem Sprzedaży. Nasi konsultanci służą profesjonalnym wsparciem w zakresie wyboru oraz konfiguracji odpowiedniego modelu podnośnika Hymo.",
    form: {
      title: "Zapytanie o platformy podnośne HYMO",
      description:
        "Uzupełnij poniższy formularz, aby otrzymać rekomendację platformy dopasowanej do Twoich potrzeb.",
      submit: "Wyślij zapytanie",
      requiredNote: "*Pole wymagane",
      success: "Dziękujemy! Skontaktujemy się z Tobą najszybciej jak to możliwe.",
    },
  },
  en: {
    eyebrow: "Trust our experts",
    title: "Expert guidance for choosing the right HYMO platform",
    lead: "Our experience and know-how help you find exactly what you need.",
    paragraphs: [
      "Our specialists will guide you through selecting the perfect HYMO lift platform. This requires a detailed analysis of your needs and a careful look at the work environment in which the equipment will operate.",
      "We take the time to listen to future requirements as well, ensuring the solution you purchase today delivers reliable performance for years. We also help match the right accessories to streamline workflows and optimize costs.",
    ],
    listHeading: "Key factors we evaluate include:",
    bulletPoints: [
      "specific application requirements",
      "available workspace",
      "type of load being lifted",
      "loading method",
      "power supply options",
      "expected duty cycle",
    ],
    closing:
      "Contact our Sales Department today. Our consultants provide professional advice on selecting and configuring the ideal HYMO lift platform.",
    form: {
      title: "Inquiry for HYMO lift platforms",
      description:
        "Fill in the form so our consultants can recommend the best platform configuration for you.",
      submit: "Send inquiry",
      requiredNote: "*Required field",
      success: "Thank you! Our team will contact you shortly.",
    },
  },
};

function ContactPage() {
  const { language } = useLanguage();
  const copy = contactCopy[language] || contactCopy.pl;
  const galleryRef = useRef(null);
  const heroContentRef = useRef(null);
  const [formValues, setFormValues] = useState(() =>
    formFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const requiredMessage = language === "pl" ? "To pole jest wymagane" : "This field is required";
  const emailInvalidMessage = language === "pl" ? "Podaj poprawny adres email" : "Enter a valid email";

  const validateField = (fieldName, value) => {
    const field = formFields.find((config) => config.name === fieldName);
    if (!field) return "";

    const normalizedValue = typeof value === "string" ? value.trim() : value;

    if (field.required && !normalizedValue) {
      return requiredMessage;
    }

    if (field.name === "email" && normalizedValue && !/^\S+@\S+\.\S+$/.test(normalizedValue)) {
      return emailInvalidMessage;
    }

    return "";
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    setSubmitted(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const errors = {};

    formFields.forEach((field) => {
      const errorMessage = validateField(field.name, formValues[field.name]);
      if (errorMessage) {
        errors[field.name] = errorMessage;
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleViewportChange = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleViewportChange();
    window.addEventListener("resize", handleViewportChange);

    return () => window.removeEventListener("resize", handleViewportChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateHeight = () => {
      const heroNode = heroContentRef.current;
      if (!heroNode || window.innerWidth <= 900) {
        setHeroHeight(0);
        return;
      }

      setHeroHeight(heroNode.offsetHeight || 0);
    };

    updateHeight();

    let resizeObserver;
    const node = heroContentRef.current;
    if (node && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(node);
    }

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [language, isMobile]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const galleryNode = galleryRef.current;
    const heroNode = heroContentRef.current;
    if (!galleryNode || !heroNode) return;
    if (heroHeight === 0) return;

    const ctx = gsap.context(() => {
      const track = galleryNode.querySelector(".contact-parallax__track");
      if (!track) return;

      const distance = () => {
        const overflow = track.scrollHeight - galleryNode.clientHeight;
        if (overflow > 0) {
          return overflow;
        }
        return galleryNode.clientHeight * 0.6;
      };

      gsap.fromTo(
        track,
        { y: () => 500 },
        {
          y: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: heroNode,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }, galleryNode);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [heroHeight, language]);

  const heroCopyMarkup = (
    <>
      <p className="contact-hero__eyebrow">{copy.eyebrow}</p>
      <h1>{copy.title}</h1>
      <p className="contact-hero__lead">{copy.lead}</p>
      {copy.paragraphs.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
      <div className="contact-hero__list">
        <p className="contact-hero__list-heading">{copy.listHeading}</p>
        <ul>
          {copy.bulletPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
      <p className="contact-hero__closing">{copy.closing}</p>
    </>
  );

  return (
    <main className="contact-page">
      <section className={`contact-hero ${isMobile ? "contact-hero--mobile" : ""}`}>
        {isMobile ? (
          <div className="contact-hero__mobile-hero">
            <div className="contact-hero__mobile-gallery">
              {contactGallery.slice(0, 3).map((image, idx) => (
                <div
                  key={`mobile-${image}-${idx}`}
                  className="contact-hero__mobile-item"
                  style={{ backgroundImage: `url(${image})` }}
                />
              ))}
            </div>
            <div className="contact-hero__content contact-hero__content--mobile">
              {heroCopyMarkup}
            </div>
          </div>
        ) : (
          <>
            <div
              className="contact-parallax"
              ref={galleryRef}
              aria-hidden="true"
              style={heroHeight ? { height: `${heroHeight}px` } : undefined}
            >
              <div className="contact-parallax__track">
                {contactGallery.map((image, idx) => (
                  <div
                    key={`${image}-${idx}`}
                    className="contact-parallax__item"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                ))}
              </div>
            </div>
            <div className="contact-hero__content" ref={heroContentRef}>
              {heroCopyMarkup}
            </div>
          </>
        )}
      </section>

      <section className="contact-form">
        <div className="contact-form__panel">
          <div className="contact-form__header">
            <h2>{copy.form.title}</h2>
            <p>{copy.form.description}</p>
            <span className="contact-form__required-note">{copy.form.requiredNote}</span>
          </div>
          <form className="contact-form__grid" onSubmit={handleSubmit} noValidate>
            {formFields.map((field) => {
              const label = field.label[language];
              const placeholder = field.placeholder[language];
              const value = formValues[field.name];
              const error = formErrors[field.name];
              const isTextArea = field.type === "textarea";
              const trimmedValue = typeof value === "string" ? value.trim() : value;
              const hasValidValue = trimmedValue && !error;
              const status = error ? "error" : hasValidValue ? "success" : undefined;

              return (
                <label
                  key={field.name}
                  className={`contact-form__field ${isTextArea ? "contact-form__field--full" : ""}`}
                  data-status={status}
                >
                  <span>{label}</span>
                  {isTextArea ? (
                    <textarea
                      name={field.name}
                      value={value}
                      placeholder={placeholder}
                      onChange={handleChange}
                      aria-invalid={!!error}
                      rows={4}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={value}
                      placeholder={placeholder}
                      onChange={handleChange}
                      aria-invalid={!!error}
                    />
                  )}
                  {error && <span className="contact-form__error">{error}</span>}
                </label>
              );
            })}
            <div className="contact-form__actions">
              <button type="submit" className="contact-form__submit">{copy.form.submit}</button>
              {submitted && <p className="contact-form__success">{copy.form.success}</p>}
            </div>
          </form>
        </div>
      </section>

      <section className="contact-details">
        <div className="contact-details__panel">
          <div className="contact-details__info">
            <p className="contact-details__eyebrow">Easy Link Polska</p>
            <address>
              <p>ul. Nefrytowa 12</p>
              <p>05-500 Piaseczno</p>
              <p>NIP: 716-104-63-01</p>
              <p>tel. +48 22 750 73 20</p>
              <p>tel. +48 600 392 004</p>
              <p>fax +48 22 750 87 88</p>
              <p>email: <a href="mailto:info@easylink.com.pl">info@easylink.com.pl</a></p>
              <p><a href="https://www.easylink.com.pl" target="_blank" rel="noreferrer">www.easylink.com.pl</a></p>
            </address>
          </div>
          <div className="contact-details__map" aria-hidden="true">
            <iframe
              title="Easy Link Polska"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.631897443941!2d21.002460377153512!3d52.07263497196729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193262753ba2fb%3A0xefe4ea0b1ba82bae!2sNefrytowa%2012%2C%2005-500%20Piaseczno!5e0!3m2!1spl!2spl!4v1707432000000!5m2!1spl!2spl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;