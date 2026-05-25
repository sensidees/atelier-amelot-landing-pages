/* Atelier Amelot · Brand landing page · JSON-LD
 *
 * Page-level structured data : BreadcrumbList + Product (best sellers).
 * FAQPage JSON-LD is emitted inline by BrandFaq.jsx (lives with the FAQ).
 */

function PageJsonLd({ brand, origin = "https://www.atelier-amelot.fr" }) {
  const slug = brand.key;
  const url = `${origin}/marques/${slug}`;

  /* BreadcrumbList · accueil → marques → Stanley/Stella */
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "accueil",  "item": origin },
      { "@type": "ListItem", "position": 2, "name": "marques",  "item": `${origin}/marques` },
      { "@type": "ListItem", "position": 3, "name": brand.name, "item": url },
    ],
  };

  /* Product entries · 8 best sellers */
  const productList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": (brand.bestSellers || []).map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "sku": p.ref,
        "brand": { "@type": "Brand", "name": brand.name },
        "description": p.specs,
        "image": `${origin}/${p.image}`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "price": p.price.replace(",", "."),
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "seller": { "@type": "Organization", "name": "Atelier Amelot" },
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productList) }}
      />
    </>
  );
}

Object.assign(window, { PageJsonLd });
