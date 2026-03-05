import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../assets/LanguageContext";
import * as Machines from "../assets/machines";
import { machinesTableData } from "../assets/machinesTableData.jsx";
import { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";

const machineImageManifest = import.meta.glob(
  "../../public/img/*.{jpg,jpeg,png,avif}",
  { eager: true, import: "default" }
);

export default function MachineLayout() {

    let navigate = useNavigate();

    let location = useLocation();

    const  {language} = useLanguage();
    const texts = Machines.machines[language];
    console.log(texts)
    console.log(location)

    const machineModel = location.state.from.model;


    const asArray = Object.entries(texts);
    const filtered = asArray.filter(([key, value]) => value.model === machineModel);
    const machineDetails = filtered[0]?.[1];

    if (!machineDetails) {
      return null;
    }

  

  const gallerySources = useMemo(() => {
    if (!machineDetails?.model) return [];
    const slug = machineDetails.model.toLowerCase();
    const regex = new RegExp(`/(${slug})(\\d+)\\.(jpe?g|png|avif)$`, "i");

    return Object.entries(machineImageManifest)
      .map(([path, asset]) => {
        const match = path.toLowerCase().match(regex);
        if (!match) return null;
        return {
          src: typeof asset === "string" ? asset : asset?.default,
          index: Number(match[2]) || 0,
          fileName: path.split("/").pop(),
        };
      })
      .filter(Boolean)
      .sort((a, b) => a.index - b.index)
      .map((entry) => entry.src ?? `/img/${entry.fileName}`);
  }, [machineDetails?.model]);

// Pobierz model maszyny (np. "mx", "bx", "bxx" itd.)
const machineType = machineDetails?.model.slice(0, 2).toLowerCase(); // np. "mx", "bx", "ax", "bxx" itd.
console.log(machineType);
// Stan filtrów
const [filters, setFilters] = useState({
  capacity: "",
  liftStroke: "",
  length: "",
  width: "",
  closedHeight: "",
});

// Pobierz dane tabeli dla typu maszyny i języka
const tableData = machinesTableData[language][machineType] || [];
console.log(tableData);
// Mapowanie kluczy dla PL i EN
const keyMap = {
  en: {
    capacity: "Capacity",
    liftStroke: "Lift stroke",
    length: "Length",
    width: "Width",
    closedHeight: "Closed height",
  },
  pl: {
    capacity: "Ładowność (kg)",
    liftStroke: "Skok (mm)",
    length: "Długość (mm)",
    width: "Szerokość (mm)",
    closedHeight: "Wysokość min (mm)",
  },
};

// Funkcja pomocnicza do pobierania unikalnych wartości dla danego pola
function getUniqueOptions(data, key) {
  return [...new Set(data.map(row => row[key]).map(v => v.trim()))].filter(Boolean).sort((a, b) => {
    // Sortuj liczbowo jeśli to liczba
    return !isNaN(a) && !isNaN(b) ? Number(a) - Number(b) : a.localeCompare(b);
  });
}

// Pobierz opcje dla dropdownów
const options = {
  capacity: getUniqueOptions(tableData, keyMap[language].capacity),
  liftStroke: getUniqueOptions(tableData, keyMap[language].liftStroke),
  length: getUniqueOptions(tableData, keyMap[language].length),
  width: getUniqueOptions(tableData, keyMap[language].width),
  closedHeight: getUniqueOptions(tableData, keyMap[language].closedHeight),
};

// Filtrowanie danych
const filteredData = useMemo(() => {
  return tableData.filter(row => {
    return (
      (!filters.capacity || row[keyMap[language].capacity].toString().trim().includes(filters.capacity)) &&
      (!filters.liftStroke || row[keyMap[language].liftStroke].toString().trim().includes(filters.liftStroke)) &&
      (!filters.length || row[keyMap[language].length].toString().trim().includes(filters.length)) &&
      (!filters.width || row[keyMap[language].width].toString().trim().includes(filters.width)) &&
      (!filters.closedHeight || row[keyMap[language].closedHeight].toString().trim().includes(filters.closedHeight))
    );
  });
}, [filters, tableData, language]);

// Dodaj stan do modala
const [showImgModal, setShowImgModal] = useState(false);
const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);

// Dodaj ten efekt na początku komponentu
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

// Render
return (
  <>
    <nav className="host-nav">
      <div className="main-body-part">
      <div className="device-container" style={{ position: "relative" }}>
        <button
          onClick={() => navigate("/platforms")}
          className="back-button-absolute"
        >
          {language === "en" ? "Back" : "Wróć"}
        </button>
        <h2 className="device-title">{machineDetails?.title}</h2>
        <div key={machineDetails?.model} className="device-grid">
          <img
            src={`../../public/img/${machineDetails?.model}.png`}
            alt={`machine ${machineDetails?.model} table`}
            className="device-image-platformlayout"
            style={{ cursor: "zoom-in" }}
            onClick={() => setShowImgModal(true)}
          />
          <div className="texts-machine">
            <div>{machineDetails?.text}</div>
            <div>{machineDetails?.additionalText}</div>
          </div>
          
        </div>
        {/* MODAL Z POWIĘKSZONYM OBRAZEM */}
        {isClient && showImgModal &&
          createPortal(
            <div
              className="img-modal-overlay"
              role="dialog"
              aria-modal="true"
              onClick={() => setShowImgModal(false)}
            >
              <img
                src={`../../public/img/${machineDetails?.model}.png`}
                alt={`machine ${machineDetails?.model} full`}
                className="img-modal-expanded"
                onClick={e => e.stopPropagation()}
              />
              <button
                className="img-modal-close"
                onClick={() => setShowImgModal(false)}
                aria-label={language === "pl" ? "Zamknij podgląd" : "Close preview"}
              >✕</button>
            </div>,
            document.body
          )}
      </div>

      <div className="machine-gallery-block">
        {gallerySources.length > 0 && (
          <section
            className="machine-gallery"
            aria-label={language === "pl" ? "Galeria zdjęć urządzenia" : "Machine photo gallery"}
          >
            <div className="machine-gallery__mask">
              <div
                className="machine-gallery__track"
                data-loop={gallerySources.length > 1}
              >
                {(gallerySources.length > 1
                  ? [...gallerySources, ...gallerySources]
                  : gallerySources
                ).map((src, idx) => (
                  <div className="machine-gallery__item" key={`${src}-${idx}`}>
                    <img
                      src={src}
                      alt={`${machineDetails?.title || machineDetails?.model} ${language === "pl" ? "zdjęcie" : "photo"} ${(idx % gallerySources.length) + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      </div>
    </nav>
    
    <div className="machine-table" style={{ margin: "2em 0", width: "100%", maxWidth: "100vw" }}>
      <h3 style={{ marginBottom: "1em", fontWeight: 600, fontSize: "1.3em", textAlign: "center" }}>
        {language === "pl" ? "Filtruj parametry" : "Filter parameters"}
      </h3>
      <div className="table-filter-selects">
        <select
    value={filters.capacity}
    onChange={e => setFilters(f => ({...f, capacity: e.target.value}))}
  >
    <option value="">{keyMap[language].capacity}</option>
    {options.capacity.map(opt => (
      <option key={opt} value={opt}>{opt}</option>
    ))}
  </select>
  <select
    value={filters.liftStroke}
    onChange={e => setFilters(f => ({...f, liftStroke: e.target.value}))}
  >
    <option value="">{keyMap[language].liftStroke}</option>
    {options.liftStroke.map(opt => (
      <option key={opt} value={opt}>{opt}</option>
    ))}
  </select>
  <select
    value={filters.length}
    onChange={e => setFilters(f => ({...f, length: e.target.value}))}
  >
    <option value="">{keyMap[language].length}</option>
    {options.length.map(opt => (
      <option key={opt} value={opt}>{opt}</option>
    ))}
  </select>
  <select
    value={filters.width}
    onChange={e => setFilters(f => ({...f, width: e.target.value}))}
  >
    <option value="">{keyMap[language].width}</option>
    {options.width.map(opt => (
      <option key={opt} value={opt}>{opt}</option>
    ))}
  </select>
  <select
    value={filters.closedHeight}
    onChange={e => setFilters(f => ({...f, closedHeight: e.target.value}))}
  >
    <option value="">{keyMap[language].closedHeight}</option>
    {options.closedHeight.map(opt => (
      <option key={opt} value={opt}>{opt}</option>
    ))}
  </select>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{
          borderCollapse: "collapse",
          width: "100%",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          fontSize: "1em"
        }}>
          <thead>
            <tr>
              {tableData[0] && Object.keys(tableData[0]).map(col => (
                <th key={col} style={{
                  padding: "0.7em 1em",
                  borderBottom: "1px solid #eaeaea",
                  background: "#f8f8f8",
                  fontWeight: 600,
                  textAlign: "left"
                }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={tableData[0] ? Object.keys(tableData[0]).length : 1} style={{ textAlign: "center", padding: "2em", color: "#aaa" }}>
                  {language === "pl" ? "Brak wyników" : "No results"}
                </td>
              </tr>
            ) : filteredData.map((row, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #f0f0f0" }}>
                {Object.keys(row).map(col => (
                  <td key={col} style={{
                    padding: "0.7em 1em",
                    background: idx % 2 === 0 ? "#fff" : "#f7f9fa"
                  }}>{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Outlet />
  </>
);
}