/* Atelier Amelot · Brand landing page · BrandCertifications
 *
 * Bande dédiée sous BrandAbout · 4 logos certifiants tels quels.
 * Grille 4 colonnes desktop · 2×2 tablette · 1 colonne mobile.
 * Hairlines verticales entre cellules, pas d'ombre, pas de fond coloré.
 * Logos conservés en couleur d'origine (convention "fournisseurs logos").
 */

function BrandCertifications({ brand }) {
  const {
    certsEyebrow,
    certsTitle,
    certsLede,
    certs = [],
  } = brand;

  if (!certs.length) return null;

  return (
    <section
      className="bp-section bp-certs"
      id="certifications"
      aria-labelledby="bp-certs-title"
      data-screen-label="06 certifications"
    >
      <div className="aa-container">
        <div className="bp-section__head bp-certs__head">
          <p className="bp-eyebrow">{certsEyebrow}</p>
          <h2 id="bp-certs-title" className="bp-section__title">{certsTitle}</h2>
          {certsLede && <p className="bp-section__lede">{certsLede}</p>}
        </div>

        <ul className="bp-certs__grid" role="list">
          {certs.map((c) => (
            <li key={c.key} className="bp-certs__cell">
              <div className="bp-certs__logo-wrap">
                <img
                  className="bp-certs__logo"
                  src={c.logo}
                  alt={c.alt}
                  loading="lazy"
                />
              </div>
              <h3 className="bp-certs__name">{c.name}</h3>
              <p className="bp-certs__body">{c.body}</p>
              {c.ref && <p className="bp-certs__ref">{c.ref}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Object.assign(window, { BrandCertifications });
