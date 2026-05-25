/* Atelier Amelot · Brand landing page · BrandHero
 *
 * Four variants of the brand hero, switchable via the `variant` prop:
 *
 *   classic    · text + product photo split (original)
 *   editorial  · type-only, no image, hairline rules above/below
 *   inverse    · full black background, centered manifest type
 *   fullbleed  · full-bleed atelier photo with black caption band
 *
 * Variants share the same `brand` data; switch via Tweaks panel.
 */

/* Shared breadcrumb. SEO-friendly nav with slugified hrefs. */
function HeroBreadcrumb({ items, muted = false }) {
  if (!items || !items.length) return null;
  const slugify = (s) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return (
    <nav
      className={"bp-breadcrumb" + (muted ? " bp-breadcrumb--inverse" : "")}
      aria-label="fil d'ariane"
    >
      <ol className="bp-breadcrumb__list">
        {items.map((crumb, i) => {
          const isLast = i === items.length - 1;
          const href =
            i === 0
              ? "/"
              : "/" + items.slice(1, i + 1).map(slugify).join("/");
          return (
            <li key={i} className="bp-breadcrumb__item">
              {isLast ? (
                <span className="bp-breadcrumb__current" aria-current="page">
                  {crumb}
                </span>
              ) : (
                <>
                  <a className="bp-breadcrumb__link" href={href}>
                    {crumb}
                  </a>
                  <span className="bp-breadcrumb__sep" aria-hidden="true">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* Shared title — renders Stanley/Stella with slashed accent. */
function HeroTitle({ name, className = "bp-hero__title" }) {
  const parts = name.split("/");
  return (
    <h1 id="bp-hero-title" className={className}>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="slash">/</span>}
          {part}
        </React.Fragment>
      ))}
    </h1>
  );
}

/* ─── Variant A · CLASSIC ───────────────────────────────────────────── */
function HeroClassic({ brand, onScrollToGrid, onDevis }) {
  const {
    name,
    eyebrow = "marque distribuée · Atelier Amelot",
    subtitle,
    breadcrumb = [],
    visual,
    visualAlt = name,
    visualTag,
    visualMeta = [],
  } = brand;
  const handleScroll = (e) => { e.preventDefault(); onScrollToGrid?.(); };
  const handleDevis  = (e) => { e.preventDefault(); onDevis?.(); };

  return (
    <section
      className="bp-hero bp-hero--classic"
      aria-labelledby="bp-hero-title"
      data-screen-label="01 hero"
    >
      <div className="aa-container">
        <div className="bp-hero__content">
          <HeroBreadcrumb items={breadcrumb}/>
          <p className="bp-eyebrow">{eyebrow}</p>
          <HeroTitle name={name}/>
          <p className="bp-hero__subtitle">{subtitle}</p>
          <div className="bp-hero__ctas">
            <a href="#produits" className="aa-btn" onClick={handleScroll}>voir les produits</a>
            <a href="#devis" className="aa-btn bp-btn-ghost" onClick={handleDevis}>demander un devis</a>
          </div>
        </div>

        {visual && (
          <div className="bp-hero__visual">
            <img src={visual} alt={visualAlt}/>
            {visualMeta.length > 0 && (
              <div className="bp-hero__visual-meta" aria-hidden="true">
                {visualMeta.map((m, i) => <div key={i}>{m}</div>)}
              </div>
            )}
            {visualTag && <div className="bp-hero__visual-tag">{visualTag}</div>}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Variant B · EDITORIAL · type-only manifesto ───────────────────── */
function HeroEditorial({ brand, onScrollToGrid, onDevis }) {
  const {
    name,
    eyebrow = "marque distribuée · Atelier Amelot",
    subtitle,
    breadcrumb = [],
  } = brand;
  const handleScroll = (e) => { e.preventDefault(); onScrollToGrid?.(); };
  const handleDevis  = (e) => { e.preventDefault(); onDevis?.(); };

  return (
    <section
      className="bp-hero bp-hero--editorial"
      aria-labelledby="bp-hero-title"
      data-screen-label="01 hero"
    >
      <div className="aa-container">
        <div className="bp-hero-ed__top">
          <HeroBreadcrumb items={breadcrumb}/>
          <p className="bp-eyebrow">{eyebrow}</p>
        </div>

        <HeroTitle name={name} className="bp-hero__title bp-hero__title--xxl"/>

        <div className="bp-hero-ed__bottom">
          <p className="bp-hero__subtitle bp-hero__subtitle--ed">{subtitle}</p>
          <div className="bp-hero__ctas">
            <a href="#produits" className="aa-btn" onClick={handleScroll}>voir les produits</a>
            <a href="#devis" className="aa-btn bp-btn-ghost" onClick={handleDevis}>demander un devis</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Variant C · INVERSE · black manifesto ──────────────────────────── */
function HeroInverse({ brand, onScrollToGrid, onDevis }) {
  const {
    name,
    eyebrow = "marque distribuée · Atelier Amelot",
    subtitle,
    breadcrumb = [],
  } = brand;
  const handleScroll = (e) => { e.preventDefault(); onScrollToGrid?.(); };
  const handleDevis  = (e) => { e.preventDefault(); onDevis?.(); };

  return (
    <section
      className="bp-hero bp-hero--inverse"
      aria-labelledby="bp-hero-title"
      data-screen-label="01 hero"
    >
      <div className="aa-container">
        <div className="bp-hero-inv__top">
          <HeroBreadcrumb items={breadcrumb} muted/>
          <p className="bp-eyebrow bp-eyebrow--inverse">{eyebrow}</p>
        </div>

        <HeroTitle name={name} className="bp-hero__title bp-hero__title--center bp-hero__title--xxl"/>

        <p className="bp-hero__subtitle bp-hero__subtitle--inverse">{subtitle}</p>

        <div className="bp-hero__ctas bp-hero__ctas--center">
          <a href="#produits" className="aa-btn aa-btn--inverse" onClick={handleScroll}>voir les produits</a>
          <a href="#devis" className="aa-btn bp-btn-ghost bp-btn-ghost--inverse" onClick={handleDevis}>demander un devis</a>
        </div>
      </div>
    </section>
  );
}

/* ─── Variant D · FULLBLEED · photo with black caption band ──────────── */
function HeroFullbleed({ brand, onScrollToGrid, onDevis }) {
  const {
    name,
    eyebrow = "marque distribuée · Atelier Amelot",
    subtitle,
    breadcrumb = [],
    aboutVisual,
    aboutVisualAlt,
  } = brand;
  const heroImg = brand.heroVisual || aboutVisual;
  const heroAlt = brand.heroVisualAlt || aboutVisualAlt || name;
  const handleScroll = (e) => { e.preventDefault(); onScrollToGrid?.(); };
  const handleDevis  = (e) => { e.preventDefault(); onDevis?.(); };

  return (
    <section
      className="bp-hero bp-hero--fullbleed"
      aria-labelledby="bp-hero-title"
      data-screen-label="01 hero"
    >
      {heroImg && (
        <div className="bp-hero-fb__photo" aria-hidden={false}>
          <img src={heroImg} alt={heroAlt}/>
          <div className="bp-hero-fb__overlay" aria-hidden="true"/>
        </div>
      )}

      <div className="bp-hero-fb__band">
        <div className="aa-container">
          <div className="bp-hero-fb__grid">
            <div className="bp-hero-fb__left">
              <HeroBreadcrumb items={breadcrumb} muted/>
              <p className="bp-eyebrow bp-eyebrow--inverse">{eyebrow}</p>
              <HeroTitle name={name} className="bp-hero__title bp-hero__title--fb"/>
            </div>
            <div className="bp-hero-fb__right">
              <p className="bp-hero__subtitle bp-hero__subtitle--inverse bp-hero__subtitle--fb">{subtitle}</p>
              <div className="bp-hero__ctas">
                <a href="#produits" className="aa-btn aa-btn--inverse" onClick={handleScroll}>voir les produits</a>
                <a href="#devis" className="aa-btn bp-btn-ghost bp-btn-ghost--inverse" onClick={handleDevis}>demander un devis</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Variant E · REVERSED · content left / subtitle right, no visual ── */
function HeroReversed({ brand, onScrollToGrid, onDevis }) {
  const {
    name,
    eyebrow = "marque distribuée · Atelier Amelot",
    subtitle,
    breadcrumb = [],
  } = brand;
  const handleScroll = (e) => { e.preventDefault(); onScrollToGrid?.(); };
  const handleDevis  = (e) => { e.preventDefault(); onDevis?.(); };

  return (
    <section
      className="bp-hero bp-hero--reversed"
      aria-labelledby="bp-hero-title"
      data-screen-label="01 hero"
    >
      <div className="aa-container">
        <div className="bp-hero-rv__grid">
          <div className="bp-hero-rv__left">
            <HeroBreadcrumb items={breadcrumb}/>
            <p className="bp-eyebrow">{eyebrow}</p>
            <HeroTitle name={name} className="bp-hero__title bp-hero__title--rv"/>
            <div className="bp-hero__ctas bp-hero-rv__ctas">
              <a href="#produits" className="aa-btn" onClick={handleScroll}>voir les produits</a>
              <a href="#devis" className="aa-btn bp-btn-ghost" onClick={handleDevis}>demander un devis</a>
            </div>
          </div>

          <div className="bp-hero-rv__right">
            <p className="bp-hero__subtitle bp-hero__subtitle--rv">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Variant F · BRAND PHOTO · content left / lifestyle photo right ──── */
function HeroBrandPhoto({ brand, onScrollToGrid, onDevis }) {
  const {
    name,
    eyebrow = "marque distribuée · Atelier Amelot",
    subtitle,
    breadcrumb = [],
    brandPhoto,
    brandPhotoAlt,
    heroVisual,
    heroVisualAlt,
  } = brand;
  const img = brandPhoto || heroVisual;
  const imgAlt = brandPhotoAlt || heroVisualAlt || name;
  const handleScroll = (e) => { e.preventDefault(); onScrollToGrid?.(); };
  const handleDevis  = (e) => { e.preventDefault(); onDevis?.(); };

  return (
    <section
      className="bp-hero bp-hero--brandphoto"
      aria-labelledby="bp-hero-title"
      data-screen-label="01 hero"
    >
      <div className="bp-hero-bp__wrap">
        <div className="bp-hero-bp__grid">
          <div className="bp-hero-bp__left">
            <HeroBreadcrumb items={breadcrumb}/>
            <p className="bp-eyebrow">{eyebrow}</p>
            <HeroTitle name={name} className="bp-hero__title bp-hero__title--bp"/>
            <p className="bp-hero__subtitle bp-hero__subtitle--bp">{subtitle}</p>
            <div className="bp-hero__ctas bp-hero-bp__ctas">
              <a href="#produits" className="aa-btn" onClick={handleScroll}>voir les produits</a>
              <a href="#devis" className="aa-btn bp-btn-ghost" onClick={handleDevis}>demander un devis</a>
            </div>
          </div>

          {img && (
            <figure className="bp-hero-bp__photo">
              <img src={img} alt={imgAlt}/>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Dispatcher ────────────────────────────────────────────────────── */
function BrandHero({ brand, variant = "classic", onScrollToGrid, onDevis }) {
  const props = { brand, onScrollToGrid, onDevis };
  switch (variant) {
    case "editorial":  return <HeroEditorial {...props}/>;
    case "inverse":    return <HeroInverse {...props}/>;
    case "fullbleed":  return <HeroFullbleed {...props}/>;
    case "reversed":   return <HeroReversed {...props}/>;
    case "brandphoto": return <HeroBrandPhoto {...props}/>;
    case "classic":
    default:           return <HeroClassic {...props}/>;
  }
}

Object.assign(window, { BrandHero });
