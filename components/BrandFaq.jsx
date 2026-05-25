/* Atelier Amelot · Brand landing page · BrandFaq
 *
 * Accordion · hairline dividers · square chevron (+, rotated to × when open).
 * No radius, no shadow.  250ms cubic-bezier ease.
 * Emits inline JSON-LD FAQPage for SEO.
 */

const { useState: faqUseState } = React;

function BrandFaq({ brand }) {
  const { faqEyebrow, faqTitle, faq = [] } = brand;
  const [open, setOpen] = faqUseState(0); // first one open by default

  const toggle = (i) => setOpen((cur) => (cur === i ? -1 : i));

  const jsonld = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  });

  return (
    <section
      className="bp-section bp-faq"
      id="faq"
      aria-labelledby="bp-faq-title"
      data-screen-label="08 faq"
    >
      <div className="aa-container">
        <div className="bp-faq__grid">
          <div className="bp-faq__head">
            <p className="bp-eyebrow">{faqEyebrow}</p>
            <h2 id="bp-faq-title" className="bp-section__title">{faqTitle}</h2>
            <p className="bp-faq__lede">
              Une réponse manque ? Appelez l'atelier au <a className="bp-link" href="tel:+33147002356">01 47 00 23 56</a>, ou <a className="bp-link" href="#devis">demandez un devis</a> et on revient en 1h ouvrée.
            </p>
          </div>

          <ul className="bp-faq__list" role="list">
            {faq.map((item, i) => {
              const isOpen = open === i;
              const idA = `faq-a-${i}`;
              const idQ = `faq-q-${i}`;
              return (
                <li key={i} className={`bp-faq__item${isOpen ? " is-open" : ""}`}>
                  <h3 className="bp-faq__q">
                    <button
                      type="button"
                      id={idQ}
                      className="bp-faq__btn"
                      aria-expanded={isOpen}
                      aria-controls={idA}
                      onClick={() => toggle(i)}
                    >
                      <span className="bp-faq__qtext">{item.q}</span>
                      <span className={`bp-faq__plus${isOpen ? " is-open" : ""}`} aria-hidden="true">+</span>
                    </button>
                  </h3>
                  <div
                    id={idA}
                    role="region"
                    aria-labelledby={idQ}
                    className="bp-faq__a"
                    hidden={!isOpen}
                  >
                    <p>{item.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* JSON-LD FAQPage · injected for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonld }}
      />
    </section>
  );
}

Object.assign(window, { BrandFaq });
