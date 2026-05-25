/* Atelier Amelot · Brand landing page · FilterBar
 * Sticky horizontal bar under the header. Brutalist B&W, hairlines only.
 *
 * Behaviour
 * ---------
 * - Each filter label + chevron toggles a full-width panel under the bar.
 * - Single dropdown open at a time. Click outside / Esc closes.
 * - Multi-select with square 16×16 checkboxes (no radius).
 * - Active-count badge to the right of label : "COULEUR · 3".
 * - COULEUR uses 24×24 swatch grid · 1px black border.
 * - PRIX uses dual-range slider 0–50 €.
 * - Aria-expanded / aria-controls / focus ring 2px solid black on all triggers.
 */

const { useEffect: fbUseEffect, useRef: fbUseRef, useState: fbUseState } = React;

/* ----- Filter definitions (re-used across all brand pages) ----- */
const FILTERS = [
  {
    id: "type",
    label: "type",
    kind: "checkbox",
    options: [
      "t-shirt", "sweat", "hoodie", "polo", "casquette",
      "tote bag", "sweat zippé", "débardeur",
    ],
  },
  {
    id: "ethique",
    label: "éthique",
    kind: "checkbox",
    options: [
      "GOTS certifié",
      "OEKO-TEX standard 100",
      "Fair Wear Foundation",
      "PETA-approved vegan",
      "Recycled Claim Standard",
      "made in europe",
    ],
  },
  {
    id: "couleur",
    label: "couleur",
    kind: "swatch",
    options: [
      { name: "noir",     hex: "#000000" },
      { name: "blanc",    hex: "#FFFFFF" },
      { name: "gris",     hex: "#9A9A9A" },
      { name: "écru",     hex: "#E8DFCB" },
      { name: "kaki",     hex: "#6B6E4D" },
      { name: "olive",    hex: "#3F4126" },
      { name: "marine",   hex: "#1A2237" },
      { name: "bleu",     hex: "#2F4F8A" },
      { name: "ciel",     hex: "#B5C7D9" },
      { name: "bordeaux", hex: "#5C1B1F" },
      { name: "rouge",    hex: "#9A1A1F" },
      { name: "rose",     hex: "#D6A0A8" },
      { name: "jaune",    hex: "#E2C53A" },
      { name: "vert",     hex: "#2E5C3A" },
      { name: "violet",   hex: "#3B2A4A" },
      { name: "tan",      hex: "#C8A77C" },
    ],
  },
  {
    id: "coupe",
    label: "coupe",
    kind: "checkbox",
    options: ["regular", "fitted", "oversize", "slim", "boxy", "crop"],
  },
  {
    id: "livraison",
    label: "livraison",
    kind: "checkbox",
    options: ["stock paris 48h", "stock europe 5j", "sur commande 3 semaines"],
  },
  {
    id: "univers",
    label: "univers",
    kind: "checkbox",
    options: ["homme", "femme", "unisexe", "enfant", "bébé"],
  },
  {
    id: "epaisseur",
    label: "épaisseur",
    kind: "checkbox",
    options: ["light · 150g", "medium · 180g", "heavy · 220g+", "premium · 280g+"],
  },
  {
    id: "composition",
    label: "composition",
    kind: "checkbox",
    options: [
      "100% bio coton",
      "mélange recyclé",
      "polyester recyclé",
      "lin / coton",
    ],
  },
  {
    id: "prix",
    label: "prix",
    kind: "range",
    min: 0,
    max: 50,
    step: 1,
    unit: "€",
  },
];

function FilterBar() {
  const [open, setOpen] = fbUseState(null);       // id of open filter or null
  const [selected, setSelected] = fbUseState({}); // { filterId: Set of option values }
  const [price, setPrice] = fbUseState([0, 50]);
  const barRef = fbUseRef(null);

  // Close on outside click / Esc
  fbUseEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(null); };
    const onClick = (e) => {
      if (barRef.current && !barRef.current.contains(e.target)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const toggle = (id) => setOpen((cur) => (cur === id ? null : id));

  const toggleOption = (filterId, val) => {
    setSelected((cur) => {
      const next = { ...cur };
      const set = new Set(next[filterId] || []);
      if (set.has(val)) set.delete(val); else set.add(val);
      next[filterId] = set;
      return next;
    });
  };

  const countFor = (id) => {
    if (id === "prix") {
      return (price[0] !== 0 || price[1] !== 50) ? 1 : 0;
    }
    return (selected[id]?.size) || 0;
  };

  const totalActive = FILTERS.reduce((acc, f) => acc + countFor(f.id), 0);

  const resetAll = () => {
    setSelected({});
    setPrice([0, 50]);
    setOpen(null);
  };

  const activeFilter = FILTERS.find((f) => f.id === open);

  return (
    <div className="bp-fb-wrap" ref={barRef} data-screen-label="02 filtres sticky">
      <div className="bp-fb" role="region" aria-label="filtres produits Stanley/Stella">
        <div className="aa-container">
          <div className="bp-fb__row">
            <ul className="bp-fb__list" role="menubar">
              {FILTERS.map((f) => {
                const c = countFor(f.id);
                const isOpen = open === f.id;
                return (
                  <li key={f.id} role="none" className="bp-fb__item">
                    <button
                      type="button"
                      role="menuitem"
                      aria-expanded={isOpen}
                      aria-controls={`panel-${f.id}`}
                      className={`bp-fb__btn${isOpen ? " is-open" : ""}${c > 0 ? " has-active" : ""}`}
                      onClick={() => toggle(f.id)}
                    >
                      <span className="lbl">{f.label}</span>
                      {c > 0 && <span className="badge">· {c}</span>}
                      <span className={`chev${isOpen ? " up" : ""}`} aria-hidden="true"></span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              className={`bp-fb__reset${totalActive === 0 ? " is-disabled" : ""}`}
              onClick={resetAll}
              aria-disabled={totalActive === 0}
            >
              réinitialiser{totalActive > 0 ? ` · ${totalActive}` : ""}
            </button>
          </div>
        </div>

        {/* Dropdown panel */}
        <div
          id={activeFilter ? `panel-${activeFilter.id}` : "panel-none"}
          className={`bp-fb__panel${open ? " is-open" : ""}`}
          role="region"
          aria-hidden={!open}
        >
          {activeFilter && (
            <div className="aa-container">
              <FilterPanel
                filter={activeFilter}
                selected={selected[activeFilter.id] || new Set()}
                price={price}
                onToggle={(v) => toggleOption(activeFilter.id, v)}
                onPrice={setPrice}
                onClose={() => setOpen(null)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterPanel({ filter, selected, price, onToggle, onPrice, onClose }) {
  if (filter.kind === "swatch") {
    return (
      <div className="bp-fb__pcontent">
        <div className="bp-fb__phead">
          <div className="bp-fb__plabel">{filter.label}</div>
          <button type="button" className="bp-fb__pclose" onClick={onClose} aria-label="fermer">×</button>
        </div>
        <div className="bp-fb__swatches">
          {filter.options.map((opt) => {
            const isOn = selected.has(opt.name);
            return (
              <button
                key={opt.name}
                type="button"
                aria-pressed={isOn}
                onClick={() => onToggle(opt.name)}
                className={`bp-fb__swatch${isOn ? " is-on" : ""}`}
                title={opt.name}
              >
                <span className="sw" style={{ background: opt.hex }} aria-hidden="true"/>
                <span className="nm">{opt.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (filter.kind === "range") {
    return (
      <div className="bp-fb__pcontent">
        <div className="bp-fb__phead">
          <div className="bp-fb__plabel">{filter.label}</div>
          <button type="button" className="bp-fb__pclose" onClick={onClose} aria-label="fermer">×</button>
        </div>
        <div className="bp-fb__range">
          <div className="bp-fb__range-vals">
            <span>{price[0]}{filter.unit}</span>
            <span className="muted">prix par pièce, ht</span>
            <span>{price[1]}{filter.unit}</span>
          </div>
          <div className="bp-fb__range-track">
            <input
              type="range"
              min={filter.min} max={filter.max} step={filter.step}
              value={price[0]}
              onChange={(e) => onPrice([Math.min(+e.target.value, price[1] - 1), price[1]])}
              aria-label="prix minimum"
            />
            <input
              type="range"
              min={filter.min} max={filter.max} step={filter.step}
              value={price[1]}
              onChange={(e) => onPrice([price[0], Math.max(+e.target.value, price[0] + 1)])}
              aria-label="prix maximum"
            />
          </div>
        </div>
      </div>
    );
  }

  /* checkbox */
  return (
    <div className="bp-fb__pcontent">
      <div className="bp-fb__phead">
        <div className="bp-fb__plabel">{filter.label}</div>
        <button type="button" className="bp-fb__pclose" onClick={onClose} aria-label="fermer">×</button>
      </div>
      <div className="bp-fb__checks">
        {filter.options.map((opt) => {
          const isOn = selected.has(opt);
          return (
            <label key={opt} className={`bp-fb__check${isOn ? " is-on" : ""}`}>
              <span className={`bp-fb__box${isOn ? " is-on" : ""}`} aria-hidden="true"/>
              <input
                type="checkbox"
                checked={isOn}
                onChange={() => onToggle(opt)}
                style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
              />
              <span className="bp-fb__cnm">{opt}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, { FilterBar });
