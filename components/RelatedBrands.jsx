/* Atelier Amelot · Brand landing page · RelatedBrands
 *
 * Internal cross-linking · grid 3 col · each card = eyebrow + title +
 * arrow → at bottom.  Hairline divider top.  Hover : border noir, arrow
 * shifts 4px to the right (250ms).
 */

function RelatedBrands({ brand }) {
  const { relatedEyebrow, relatedTitle, related = [] } = brand;

  return (
    <section
      className="bp-section bp-related"
      id="maillage"
      aria-labelledby="bp-related-title"
      data-screen-label="10 maillage interne"
    >
      <div className="aa-container">
        <div className="bp-section__head">
          <p className="bp-eyebrow">{relatedEyebrow}</p>
          <h2 id="bp-related-title" className="bp-section__title">{relatedTitle}</h2>
        </div>

        <ul className="bp-related__grid" role="list">
          {related.map((r, i) => (
            <li key={i} className="bp-related__item">
              <a className="bp-related__card" href={r.href}>
                <div className="bp-related__num">/ {String(i + 1).padStart(2, "0")}</div>
                <p className="bp-related__eyebrow">{r.eyebrow}</p>
                <h3 className="bp-related__title">{r.title}</h3>
                <p className="bp-related__dek">{r.dek}</p>
                <div className="bp-related__arrow" aria-hidden="true">
                  <span className="bp-related__line"></span>
                  <span className="bp-related__head">→</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Object.assign(window, { RelatedBrands });
