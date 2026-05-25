/* Atelier Amelot · Brand landing page · Catalog
 *
 * Full grid · 24 cards per page · 5-page pagination.
 * 4-col desktop / 3-col tablet / 2-col mobile.
 * Square 48×48 page buttons.  Active = solid black, white text.
 */

const { useState: catUseState } = React;

function Catalog({ brand, onProduct }) {
  const {
    catalog = [],
    catalogCount,
    catalogPerPage = 24,
    catalogTitle,
    catalogEyebrow,
    catalogSubtitle,
  } = brand;

  const totalPages = Math.max(1, Math.ceil(catalogCount / catalogPerPage));
  const [page, setPage] = catUseState(1);

  const goTo = (p) => {
    const next = Math.max(1, Math.min(totalPages, p));
    setPage(next);
    // jump to top of catalog so the user sees the new page
    const el = document.getElementById("produits");
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 120,
        behavior: "smooth",
      });
    }
  };

  // Window of 5 page buttons centered on current page.
  const window5 = (() => {
    const visible = 5;
    let start = Math.max(1, page - Math.floor(visible / 2));
    let end = start + visible - 1;
    if (end > totalPages) { end = totalPages; start = Math.max(1, end - visible + 1); }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  })();

  const start = (page - 1) * catalogPerPage + 1;
  const end   = Math.min(page * catalogPerPage, catalogCount);

  return (
    <section
      className="bp-section bp-section--alt bp-catalog"
      id="produits"
      aria-labelledby="bp-cat-title"
      data-screen-label="04 catalogue"
    >
      <div className="aa-container">
        <div className="bp-section__head bp-catalog__head">
          <p className="bp-eyebrow">{catalogEyebrow}</p>
          <h2 id="bp-cat-title" className="bp-section__title">{catalogTitle}</h2>
          {catalogSubtitle && <p className="bp-section__lede">{catalogSubtitle}</p>}
        </div>

        {/* Count + sort */}
        <div className="bp-catalog__bar" role="region" aria-label="résumé du catalogue">
          <div className="bp-catalog__count">
            affichage {start}-{end} sur {catalogCount} produits
          </div>
          <div className="bp-catalog__sort">
            <label htmlFor="bp-cat-sort">trier par</label>
            <select id="bp-cat-sort" defaultValue="prix-asc">
              <option value="prix-asc">prix · croissant</option>
              <option value="prix-desc">prix · décroissant</option>
              <option value="nouveaute">nouveauté</option>
              <option value="destockage">destockage</option>
            </select>
            <span className="bp-catalog__chev" aria-hidden="true"></span>
          </div>
        </div>

        <ul className="bp-catalog__grid" role="list">
          {catalog.map((p, i) => (
            <li key={`${p.ref}-${i}`} className="bp-catalog__item">
              <BrandProductCard product={p} brandName={brand.name} onClick={onProduct}/>
            </li>
          ))}
        </ul>

        <nav className="bp-pagination" aria-label="pagination catalogue Stanley/Stella">
          <div className="bp-pagination__count" aria-hidden="true">
            affichage {start}-{end} sur {catalogCount} produits
          </div>
          <ul className="bp-pagination__list" role="list">
            <li>
              <button
                type="button"
                className="bp-pagination__btn bp-pagination__btn--wide"
                onClick={() => goTo(page - 1)}
                aria-label="page précédente"
                aria-disabled={page === 1}
                disabled={page === 1}
              >précédent</button>
            </li>
            {window5[0] > 1 && (
              <>
                <li>
                  <button
                    type="button"
                    className="bp-pagination__btn"
                    onClick={() => goTo(1)}
                    aria-label="aller à la page 1"
                  >1</button>
                </li>
                <li aria-hidden="true" className="bp-pagination__sep">·</li>
              </>
            )}
            {window5.map((p) => (
              <li key={p}>
                <button
                  type="button"
                  className={`bp-pagination__btn${p === page ? " is-current" : ""}`}
                  onClick={() => goTo(p)}
                  aria-current={p === page ? "page" : undefined}
                  aria-label={`page ${p}`}
                >{p}</button>
              </li>
            ))}
            {window5[window5.length - 1] < totalPages && (
              <>
                <li aria-hidden="true" className="bp-pagination__sep">·</li>
                <li>
                  <button
                    type="button"
                    className="bp-pagination__btn"
                    onClick={() => goTo(totalPages)}
                    aria-label={`aller à la page ${totalPages}`}
                  >{totalPages}</button>
                </li>
              </>
            )}
            <li>
              <button
                type="button"
                className="bp-pagination__btn bp-pagination__btn--wide"
                onClick={() => goTo(page + 1)}
                aria-label="page suivante"
                aria-disabled={page === totalPages}
                disabled={page === totalPages}
              >suivant</button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

Object.assign(window, { Catalog });
