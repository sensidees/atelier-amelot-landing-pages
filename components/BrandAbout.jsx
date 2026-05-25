/* Atelier Amelot · Brand landing page · BrandAbout
 *
 * 50/50 desktop · stack mobile.
 * Left  : eyebrow + h2 + 2 paragraphs + 4 key figures (2×2 hairline grid).
 * Right : full-bleed atelier/usine photo.
 */

function BrandAbout({ brand }) {
  const {
    aboutEyebrow,
    aboutTitle,
    aboutCopy = [],
    aboutKeyFigures = [],
    aboutVisual,
    aboutVisualAlt,
  } = brand;

  return (
    <section
      className="bp-section bp-about"
      id="a-propos"
      aria-labelledby="bp-about-title"
      data-screen-label="05 à propos"
    >
      <div className="aa-container">
        <div className="bp-about__grid">
          <div className="bp-about__col bp-about__col--text">
            <p className="bp-eyebrow">{aboutEyebrow}</p>
            <h2 id="bp-about-title" className="bp-section__title">{aboutTitle}</h2>
            <div className="bp-about__copy">
              {aboutCopy.map((p, i) => (
                <p key={i} className="bp-about__p">{p}</p>
              ))}
            </div>

            {aboutKeyFigures.length > 0 && (
              <dl className="bp-about__figs" aria-label="chiffres clés Stanley/Stella">
                {aboutKeyFigures.map((f, i) => (
                  <div key={i} className="bp-about__fig">
                    <dt className="bp-about__fig-lbl">{f.lbl}</dt>
                    <dd className="bp-about__fig-val">{f.val}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="bp-about__col bp-about__col--visual">
            {brand.aboutShowcase ? (
              <BrandVisualShowcase
                states={brand.aboutShowcase.states}
                caption={brand.aboutShowcase.caption}
                eyebrow={brand.aboutShowcase.eyebrow}
              />
            ) : (
              <figure className="bp-about__figure">
                <img src={aboutVisual} alt={aboutVisualAlt}/>
              </figure>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { BrandAbout });
