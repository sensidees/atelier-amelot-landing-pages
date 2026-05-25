/* Atelier Amelot · Brand landing page · ConseilCtaBand
 *
 * Inverse section (#000 / #fff).  Centered text · max-width 720px.
 * Two CTAs : phone (primary white) + devis link (ghost white border).
 * Padding 96/96.  Strict B&W, no shadows, no radius.
 */

function ConseilCtaBand({ brand, onDevis }) {
  const {
    conseilEyebrow,
    conseilTitle,
    conseilBody,
    conseilPhone = "01 47 00 23 56",
  } = brand;

  const telHref = "tel:+33" + conseilPhone.replace(/\s+/g, "").replace(/^0/, "");

  return (
    <section
      className="bp-section bp-section--inverse bp-conseil"
      id="devis"
      aria-labelledby="bp-conseil-title"
      data-screen-label="09 cta conseil"
    >
      <div className="aa-container">
        <div className="bp-conseil__inner">
          <p className="bp-eyebrow bp-eyebrow--inverse">{conseilEyebrow}</p>
          <h2 id="bp-conseil-title" className="bp-section__title">{conseilTitle}</h2>
          <p className="bp-conseil__body">{conseilBody}</p>

          <div className="bp-conseil__ctas">
            <a href={telHref} className="aa-btn bp-btn-solid-white">
              {conseilPhone}
            </a>
            <a
              href="#devis-form"
              className="aa-btn bp-btn-ghost-white"
              onClick={(e) => { e.preventDefault(); onDevis?.(); }}
            >
              demander un devis en ligne
            </a>
          </div>

          <div className="bp-conseil__sub">
            <span>devis sous 1h ouvrée</span>
            <span aria-hidden="true">·</span>
            <span>retrait atelier 75011</span>
            <span aria-hidden="true">·</span>
            <span>livraison paris 48h</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ConseilCtaBand });
