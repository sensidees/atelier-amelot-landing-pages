# Atelier Amelot · Landing Page Marque (Stanley/Stella)

Prototype haute fidélité de la page marque Stanley/Stella pour Atelier Amelot — grossiste & marquage textile à Paris.

## Stack

HTML statique + React 18 (via CDN) + Babel Standalone (compilation JSX in-browser). Pas de build step. Direct push, Vercel sert les fichiers tels quels.

## Structure

```
.
├── index.html                  # Entry point
├── tokens.css                  # Design tokens (couleurs, typo, spacing)
├── colors_and_type.css         # Palette + types
├── site.css                    # Layout global, header, footer
├── brand-page.css              # Styles spécifiques page marque
├── responsive.css              # Breakpoints mobile / tablet
├── components/                 # Composants React JSX (chargés via Babel)
│   ├── Chrome.jsx              # Topbar + Header + Footer
│   ├── BrandHero.jsx           # Hero avec 6 variantes (A-F)
│   ├── BestSellers.jsx
│   ├── Catalog.jsx
│   ├── FilterBar.jsx
│   ├── BrandProductCard.jsx
│   ├── BrandAbout.jsx
│   ├── BrandCertifications.jsx
│   ├── BrandReasons.jsx
│   ├── BrandFaq.jsx
│   ├── ConseilCtaBand.jsx
│   ├── BrandVisualShowcase.jsx
│   ├── RelatedBrands.jsx
│   ├── PageJsonLd.jsx
│   ├── data.jsx                # Catalogue + données métier
│   └── tweaks-panel.jsx        # UI dev pour switch hero variants
├── assets/
│   ├── certifications/
│   ├── home/
│   ├── logos/
│   ├── lookbook/
│   └── products/
├── fonts/                      # URW DIN (display + body)
└── uploads/                    # Visuels source haute résolution
```

## Mode prototype

- `X-Robots-Tag: noindex, nofollow` posé via `vercel.json` → le proto n'est pas indexé
- Tweaks panel actif (touche `T` pour ouvrir/fermer) pour switcher entre les 6 variantes de hero
- React en mode `development` (pas optimisé), à passer en production pour le go live final

## Déploiement

Tout push sur `main` redéploie automatiquement via Vercel.

## Notes pour le handoff agence dev

- React + Babel via CDN sert au prototype rapide. Pour la version production, recompiler en Next.js 15 + Tailwind (cf. starter Sens Idées) avec build statique
- Tokens centralisés dans `tokens.css` → à porter en variables CSS Tailwind
- Le tweaks panel (`tweaks-panel.jsx`) est un outil dev, à retirer en production
- 6 variantes de hero (A Classic, B Editorial, C Inverse, D Fullbleed, E Reversed, F Brand photo) — la variante retenue après validation client sera figée
- Schema.org JSON-LD prévu dans `PageJsonLd.jsx` (Product + FAQPage + BreadcrumbList) — à enrichir avec données réelles avant prod
