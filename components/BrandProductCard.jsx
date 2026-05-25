/* Atelier Amelot · Brand landing page · BrandProductCard
 *
 * Square 1:1 product image (no border). Hover : light paper background,
 * image scale 1.02 (250ms). Eyebrow brand + category, name (display),
 * specs (body), price tag in display bold. Reused for best sellers + catalog.
 *
 * Tag accepts one of : "new", "meilleure vente", "destockage".
 * Style follows the value · always 100% B&W.
 */

const TAG_CLASS = {
  "new":             "bp-card__badge--new",
  "meilleure vente": "bp-card__badge--best",
  "destockage":      "bp-card__badge--destock",
};

function BrandProductCard({ product, brandName, onClick }) {
  const { ref, category, name, specs, price, image, alt, tag } = product;
  const href = `#p-${ref}`;
  const eyebrow = brandName && category
    ? `${brandName} · ${category}`
    : ref;
  const tagClass = tag ? (TAG_CLASS[tag] || "") : "";
  return (
    <a
      className="bp-card"
      href={href}
      onClick={(e) => { e.preventDefault(); onClick?.(product); }}
      aria-label={`${name}, à partir de ${price} euros hors taxes`}
    >
      <div className="bp-card__img">
        {tag && <span className={`bp-card__badge ${tagClass}`}>{tag}</span>}
        {image ? (
          <img src={image} alt={alt || name} loading="lazy"/>
        ) : (
          <div className="bp-card__ph" aria-hidden="true"></div>
        )}
      </div>
      <div className="bp-card__info">
        <div className="bp-card__ref">{eyebrow}</div>
        <div className="bp-card__name">{name}</div>
        <div className="bp-card__specs">{specs}</div>
        <div className="bp-card__price">
          <span className="lbl">à partir de</span>
          <span className="val">{price}&nbsp;€</span>
          <span className="ht">ht</span>
        </div>
      </div>
    </a>
  );
}

Object.assign(window, { BrandProductCard });
