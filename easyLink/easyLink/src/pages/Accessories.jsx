import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLanguage } from '../assets/LanguageContext.jsx';
import Harmonijka from "../../public/img/acc-harmonijka.avif";
import Harmonijka1 from "../../public/img/acc-harmonijka1.avif";
import Klapa from "../../public/img/acc-klapa.avif";
import Obrotnica from "../../public/img/acc-obrotnica.avif";
import Oslona from "../../public/img/acc-oslona.avif";
import Oslona1 from "../../public/img/acc-osłona.avif";
import Podstawa from "../../public/img/acc-podstawa.avif";
import Podstawa1 from "../../public/img/acc-podstawa1.avif";
import Podwozie from "../../public/img/acc-podwozie.avif";
import Prowadnica from "../../public/img/acc-prowadnica.avif";
import Rama from "../../public/img/acc-rama.avif";
import Rama1 from "../../public/img/acc-rama1.avif";
import Rampa from "../../public/img/acc-rampa.avif";
import Zacisk from "../../public/img/acc-zacisk.avif";
import Zasilacz from "../../public/img/acc-zasilacz.avif";
import TableDraft from "../../public/TableDraft3D.jsx";
import TableDraft2 from "../../public/TableDraft3D2.jsx";

const HERO_IMAGES = [Harmonijka, Klapa, Oslona];

const textContent = {
  pl: {
    company: "Easy Link Polska",
    title: "Akcesoria do stołow podnośnikowych",
    accessories: [
      {
        key: "harmonijka",
        title: "Składana osłona boczna - Harmonijka",
        paragraph: "Chroni przed wpadaniem większych obiektów pod platformę dźwigową, jak również pełni rolę zabezpieczenia dla operatora platformy. Dodatkowo skutecznie chroni przed brudem i kurzem, zmniejszając zużycie urządzenia oraz części mechanicznych.",
        images: [Harmonijka, Harmonijka1]
      },
      {
        key: "klapa",
        title: "Klapa przeładunkowa",
        paragraph: "Niweluje lukę pomiędzy platformą dźwigową za pojazdem.",
        images: [Klapa]
      },
      {
        key: "oslona",
        title: "Osłona ramowa",
        paragraph: "Zapewnia bezpieczeństwo na platformie. Chroni przed upadkiem lub zsunięciem się towaru, przez co  poprawia komfort pracy.",
        images: [Oslona]
      },
      {
        key: "oslona-ochronna",
        title: "Osłona ochronna z siatki stalowej",
        paragraph: "Chroni przed dostaniem się pod platformę większych obiektów. Zwiększa w ten sposób bezpieczeństwo pracy oraz komfort operatora platformy.",
        images: [Oslona1]
      },
      {
        key: "obrotnica",
        title: "Obrotnica",
        paragraph: "Ułatwia dostęp do ładunku. Gdy załadunek bądź rozładunek odbywa się ręcznie, ładunek może być obrócony tak, by zapewnić najbardziej dogodną pozycję przy pracy. Obrotnica jest zgodna z modelami MX, BX i AX.",
        images: [Obrotnica]
      },
      {
        key: "podstawa",
        title: "Ruchoma podstawa z uchwytem",
        paragraph: "Ułatwia przemieszczanie platformy bez ładunku. Umoliwia łatwe przemieszczanie platformy z miejsca na miejsce",
        images: [Podstawa, Podstawa1]
      },
      {
        key: "podwozie",
        title: "Podwozie do jazdy po szynach",
        paragraph: "Przeznaczone do poziomego przesuwania platform po szynach po ustalonym torze. Dla naszych Klientów, jako wyposażenie dodatkowe dostępny jest również dedykowany zespół napędowy.",
        images: [Podwozie]
      },
      {
        key: "prowadnica",
        title: "Prowadnica z wejściem na wózek paletowy",
        paragraph: "Ułatwia ustawianie wózka paletowego na stole MX-E",
        images: [Prowadnica]
      },
      {
        key: "rama",
        title: "Rama podstawy z wejściem na wózek paletowy",
        paragraph: "Pozwala na łatwy transport platformy bez ładunku, przy użyciu wózka paletowego.",
        images: [Rama, Rama1]
      },
      {
        key: "rampa",
        title: "Rampa",
        paragraph: "Ułatwia załadunek oraz rozładunek przy użyciu wózka paletowego. Dzięki zastosowaniu rampy - stołu MX-R nie trzeba umieszczać w specjalnym zagłębieniu.",
        images: [Rampa]
      },
      {
        key: "zacisk",
        title: "Zacisk transportowy",
        paragraph: "Umożliwia zastosowanie prostej metody przewożenia platformy MX-E pomiędzy stanowiskami pracy.",
        images: [Zacisk]
      },
      {
        key: "zasilacz",
        title: "Zasilacz hydrauliczny",
        paragraph: "Wybierając spośród różnych wersji zasilaczy, można dostosować szybkość podnoszenia do indywidualnych potrzeb: silniejszy zasilacz podnosi szybciej platformę. Zasilacz wolnostojący umożliwia za to odizolowanie źródła hałasu oraz chroni to urządzenie przed kurzem i brudem.  Jego obsługa jest wygodna, nawet gdy platforma znajduje się w trudnodostępnej  pozycji. ",
        images: [Zasilacz]
      }
    ]
  },
  en: {
    company: "Easy Link Poland",
title: "Lift Table Accessories",
accessories: [
  {
    key: "bellows-guard",
    title: "Folding Side Guard – Bellows",
    paragraph: "Protects against larger objects falling underneath the lifting platform and also serves as a safety feature for the operator. Additionally, it effectively protects against dirt and dust, reducing wear of the device and its mechanical components.",
    images: [Harmonijka, Harmonijka1]
  },
  {
    key: "dock-plate",
    title: "Dock Plate",
    paragraph: "Bridges the gap between the lifting platform and the vehicle.",
    images: [Klapa]
  },
  {
    key: "frame-guard",
    title: "Frame Guard",
    paragraph: "Ensures safety on the platform. Protects against falling or sliding loads, improving working comfort.",
    images: [Oslona]
  },
  {
    key: "mesh-guard",
    title: "Protective Steel Mesh Guard",
    paragraph: "Prevents larger objects from getting underneath the platform. This increases work safety and operator comfort.",
    images: [Oslona1]
  },
  {
    key: "turntable",
    title: "Turntable",
    paragraph: "Provides easier access to the load. When loading or unloading is done manually, the load can be rotated to ensure the most convenient working position. The turntable is compatible with MX, BX, and AX models.",
    images: [Obrotnica]
  },
  {
    key: "mobile-base",
    title: "Mobile Base with Handle",
    paragraph: "Makes it easy to move the platform without a load. Allows convenient relocation of the platform from one place to another.",
    images: [Podstawa, Podstawa1]
  },
  {
    key: "rail-chassis",
    title: "Rail Travel Chassis",
    paragraph: "Designed for horizontal movement of platforms along rails on a fixed track. As optional equipment, a dedicated drive unit is also available for our customers.",
    images: [Podwozie]
  },
  {
    key: "pallet-guide",
    title: "Guide with Pallet Truck Entry",
    paragraph: "Facilitates positioning of a pallet truck on the MX-E table.",
    images: [Prowadnica]
  },
  {
    key: "base-frame",
    title: "Base Frame with Pallet Truck Entry",
    paragraph: "Allows easy transportation of the platform without a load using a pallet truck.",
    images: [Rama, Rama1]
  },
  {
    key: "ramp",
    title: "Ramp",
    paragraph: "Facilitates loading and unloading using a pallet truck. Thanks to the ramp, the MX-R table does not need to be installed in a special pit.",
    images: [Rampa]
  },
  {
    key: "transport-clamp",
    title: "Transport Clamp",
    paragraph: "Enables a simple method of transporting the MX-E platform between workstations.",
    images: [Zacisk]
  },
  {
    key: "hydraulic-power-unit",
    title: "Hydraulic Power Unit",
    paragraph: "By choosing from different power unit versions, the lifting speed can be adjusted to individual needs – a more powerful unit lifts the platform faster. A standalone power unit allows isolation of the noise source and protects the device from dust and dirt. It is easy to operate, even when the platform is in a hard-to-reach position.",
    images: [Zasilacz]
      }
    ]
  }
};

export default function About() {
  const { language } = useLanguage();
  const { company, title, accessories } = textContent[language] || textContent.pl;

  const sectionRef = useRef(null);
  const tableRef = useRef(null);
  const table1Ref = useRef(null);
  const table2Ref = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !tableRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 10%",
          end: "bottom bottom",
          scrub: true,
          pin: tableRef.current,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      tl.set(table1Ref.current, { autoAlpha: 1 })
        .set(table2Ref.current, { autoAlpha: 0 })
        .to(table1Ref.current, { autoAlpha: 0 }, 0.4)
        .to(table2Ref.current, { autoAlpha: 1 }, 0.5);
    }, sectionRef);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, [language]);

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

      <section ref={sectionRef} className="accessories-page part1">
        <div className="accessories-page__grid">
          <div className="accessories-page__content">
            {accessories.map((item) => {
              const hasMultiple = item.images.length > 1;

              return (
                <article key={item.key} className="accessory-card">
                  <div className="accessory-card__left">
                    <h2>{item.title}</h2>
                    <p>{item.paragraph}</p>
                  </div>

                  <div className={`accessory-card__right ${hasMultiple ? "is-fade" : ""}`}>
                    {item.images.map((src, i) => (
                      <img
                        key={`${item.key}-${i}`}
                        src={src}
                        alt={item.title}
                        style={hasMultiple ? { animationDelay: `${i * 4}s` } : undefined}
                      />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div ref={tableRef} className="accessories-page__background" aria-hidden>
            <div ref={table1Ref} className="accessories-table-layer">
              <TableDraft />
            </div>
            <div ref={table2Ref} className="accessories-table-layer">
              <TableDraft2 />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
