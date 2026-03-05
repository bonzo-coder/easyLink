import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Zablokowanie natywnego zapamietywania scrolla przez przeglądarkę
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Natychmiastowe zerowanie na poziomie okna
    window.scrollTo(0, 0);

    // 3. Opóźnienie na wyrenderowanie nowego DOM przez React chwile po zmianie rotuingu
    const timer = setTimeout(() => {
      const smoother = ScrollSmoother.get();

      if (smoother) {
        // Twardy reset pozycji w ScrollSmoother
        smoother.scrollTop(0);
        // Czasami smoother potrzebuje ułamka sekundy na przeliczenie po scrollTop
        requestAnimationFrame(() => smoother.scrollTop(0)); 
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }

      // 4. Przeliczenie wszystkich triggerów od nowa po wczytaniu podstrony
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh(true);
      }
    }, 50); // 50ms daje przeglądarce czas na ułożenie elementów w DOM

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}