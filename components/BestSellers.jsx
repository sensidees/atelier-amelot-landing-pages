/* Atelier Amelot · Brand landing page · BestSellers
 *
 * 8 incontournables — section eyebrow + h2 + subtitle + grid.
 * Desktop 4 cols / tablet 2 cols / mobile 1.5 col snap-scroll.
 */

function BestSellers({ brand, onProduct }) {
  const {
    bestSellersEyebrow,
    bestSellersTitle,
    bestSellersSubtitle,
    bestSellers = [],
  } = brand;

  return (
    <section
      className="bp-section bp-section--best"
      id="best-sellers"
      aria-labelledby="bp-best-title"
      data-screen-label="03 best sellers"
    >
      <div className="aa-container">
        <div className="bp-section__head">
          <p className="bp-eyebrow">{bestSellersEyebrow}</p>
          <h2 id="bp-best-title" className="bp-section__title">{bestSellersTitle}</h2>
          {bestSellersSubtitle && <p className="bp-section__lede">{bestSellersSubtitle}</p>}
        </div>

        <ul className="bp-best__grid" role="list">
          {bestSellers.map((p, i) => (
            <li key={p.ref} className="bp-best__item">
              <BrandProductCard
                product={p}
                brandName={brand.name}
                onClick={onProduct}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Object.assign(window, { BestSellers });
