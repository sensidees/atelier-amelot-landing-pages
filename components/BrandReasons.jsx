/* Atelier Amelot · Brand landing page · BrandReasons
 *
 * Grid 3 × 2 = 6 hairline cards. Each card = num + title + body.
 * The 4th card (conseil expert) is inverted (black bg) for rhythm.
 */

function BrandReasons({ brand }) {
  const {
    reasonsEyebrow,
    reasonsTitle,
    reasons = [],
  } = brand;

  return (
    <section
      className="bp-section bp-section--alt bp-reasons"
      id="raisons"
      aria-labelledby="bp-reasons-title"
      data-screen-label="07 raisons"
    >
      <div className="aa-container">
        <div className="bp-section__head">
          <p className="bp-eyebrow">{reasonsEyebrow}</p>
          <h2 id="bp-reasons-title" className="bp-section__title">{reasonsTitle}</h2>
        </div>

        <ul className="bp-reasons__grid" role="list">
          {reasons.map((r, i) => (
            <li key={r.n} className="bp-reasons__card">
              <div className="bp-reasons__num">/ {r.n}</div>
              <h3 className="bp-reasons__title">{r.title}</h3>
              <p className="bp-reasons__body">{r.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Object.assign(window, { BrandReasons });
