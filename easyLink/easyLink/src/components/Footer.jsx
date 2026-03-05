import { Link } from "react-router-dom";
import { useLanguage } from "../assets/LanguageContext.jsx";

export default function Footer() {
  const { language } = useLanguage();

  const text = {
    pl: {
      menu: "Menu",
      website: "Strona",
      contact: "Kontakt",
      company: "Easy Link Polska",
      phones: "tel. +48 600 392 004  |  tel. +48 22 750 73 20",
      fax: "fax +48 22 750 87 88",
      address: "05-500 Piaseczno, ul. Nefrytowa 12",
      email: "e-mail: info@easylink.com.pl",
      links: [
        { label: "Strona główna", to: "/" },
        { label: "O firmie", to: "/about" },
        { label: "Zastosowania", to: "/applications" },
        { label: "Platformy", to: "/platforms" },
        { label: "Akcesoria", to: "/accessories" },
        { label: "Przenośniki taśmowe", to: "/lifts" },
        { label: "Paletyzator", to: "/palletizer" },
      ],
    },
    en: {
      menu: "Menu",
      website: "Website",
      contact: "Contact",
      company: "Easy Link Poland",
      phones: "tel. +48 600 392 004  |  tel. +48 22 750 73 20",
      fax: "fax +48 22 750 87 88",
      address: "05-500 Piaseczno, Nefrytowa 12",
      email: "e-mail: info@easylink.com.pl",
      links: [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Applications", to: "/applications" },
        { label: "Platforms", to: "/platforms" },
        { label: "Accessories", to: "/accessories" },
        { label: "Conveyor Belts", to: "/lifts" },
        { label: "Palletizer", to: "/palletizer" },
      ],
    },
  };

  const t = text[language] || text.pl;

  return (
    <footer className="site-footer">
      <div className="site-footer__col">
        <h3>{t.menu}</h3>
        <ul className="site-footer__links">
          {t.links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="site-footer__col">
        <h4>{t.website}</h4>
        <a href="https://www.easylink.com.pl" target="_blank" rel="noreferrer">
          www.easylink.com.pl
        </a>
      </div>

      <div className="site-footer__col">
        <h4>{t.contact}</h4>
        <p>{t.company}</p>
        <p>{t.phones}</p>
        <p>{t.fax}</p>
        <p>{t.address}</p>
        <p>{t.email}</p>
      </div>
    </footer>
  );
}