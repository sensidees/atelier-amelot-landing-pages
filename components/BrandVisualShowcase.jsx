/* Atelier Amelot · BrandVisualShowcase
 *
 * Premium 4-state visual transformer · "du textile brut au support de marque".
 *
 * Desktop  · mouse X over the visual zone splits into 4 quarters → state.
 *           · click / arrow keys / tab on the 4 indicators also switch state.
 *           · transition  = opacity crossfade + ~1.5% scale, 400ms cubic.
 *
 * Mobile   · swipe + tap on indicators (no hover dependency).
 *           · drag threshold 32px to advance.
 *
 * Accessibility  · role=tablist · aria-selected · arrow-key nav · focus rings.
 * Performance    · all 4 images decoded eagerly on mount, kept in DOM stacked.
 */

const { useState: vsUseState, useEffect: vsUseEffect, useRef: vsUseRef, useCallback: vsUseCallback } = React;

function BrandVisualShowcase({ states = [], caption, eyebrow }) {
  const [active, setActive] = vsUseState(0);
  const [hovering, setHovering] = vsUseState(false);
  const stageRef = vsUseRef(null);
  const touchStart = vsUseRef(null);
  const total = states.length;

  // Preload all images once · no latency on hover quartile change.
  vsUseEffect(() => {
    states.forEach((s) => { const i = new Image(); i.src = s.image; });
  }, [states]);

  // Mouse-X partitioning · 4 quarters.
  const onMove = vsUseCallback((e) => {
    if (!stageRef.current || total === 0) return;
    const r = stageRef.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const ratio = Math.max(0, Math.min(0.9999, x / r.width));
    const idx = Math.floor(ratio * total);
    if (idx !== active) setActive(idx);
  }, [active, total]);

  // Keyboard nav from indicators.
  const onKey = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); setActive((a) => (a + 1) % total); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); setActive((a) => (a - 1 + total) % total); }
    if (e.key === "Home")       { e.preventDefault(); setActive(0); }
    if (e.key === "End")        { e.preventDefault(); setActive(total - 1); }
  };

  // Touch handlers · 32px swipe threshold.
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 32) {
      if (dx < 0) setActive((a) => Math.min(total - 1, a + 1));
      else        setActive((a) => Math.max(0, a - 1));
    }
    touchStart.current = null;
  };

  const current = states[active] || {};

  return (
    <div className="bp-vs" role="region" aria-label="lookbook Stanley/Stella · transformation produit">
      {eyebrow && <div className="bp-vs__eyebrow">{eyebrow}</div>}

      <div
        ref={stageRef}
        className={`bp-vs__stage${hovering ? " is-hovering" : ""}`}
        onMouseMove={onMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {states.map((s, i) => (
          <figure
            key={i}
            className={`bp-vs__frame${i === active ? " is-active" : ""}`}
            aria-hidden={i !== active}
          >
            <img
              src={s.image}
              alt={s.alt}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </figure>
        ))}

        {/* Hairline progress · barre fine en bas de la stage */}
        <div className="bp-vs__progress" aria-hidden="true">
          {states.map((_, i) => (
            <span key={i} className={`bp-vs__progress-cell${i <= active ? " is-on" : ""}`}/>
          ))}
        </div>

        {/* Caption overlay · état courant */}
        <div className="bp-vs__overlay" aria-hidden="true">
          <span className="bp-vs__overlay-idx">{String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
          <span className="bp-vs__overlay-label">{current.label}</span>
        </div>
      </div>

      {/* Indicators · 4 labels · also tab/arrow nav */}
      <ul
        className="bp-vs__nav"
        role="tablist"
        aria-label="états du produit"
        onKeyDown={onKey}
      >
        {states.map((s, i) => (
          <li key={i} className="bp-vs__nav-item" role="presentation">
            <button
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls={`vs-frame-${i}`}
              tabIndex={i === active ? 0 : -1}
              className={`bp-vs__btn${i === active ? " is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="bp-vs__btn-idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="bp-vs__btn-label">{s.label}</span>
            </button>
          </li>
        ))}
      </ul>

      {caption && (
        <p className="bp-vs__caption">{caption}</p>
      )}
    </div>
  );
}

Object.assign(window, { BrandVisualShowcase });
