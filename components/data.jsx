/* Atelier Amelot · Brand pages · data
 * One entry per distributed brand. The whole landing page swaps
 * by changing `BRAND_KEY` below. This is template B.
 */

const BRANDS = {
  "stanley-stella": {
    key: "stanley-stella",
    name: "Stanley/Stella",
    breadcrumb: ["accueil", "marques", "Stanley/Stella"],
    eyebrow: "distributeur officiel",
    subtitle:
      "Vêtements Stanley/Stella personnalisables avec votre logo ou votre print : t-shirts, sweats, hoodies, polos et tote bags en coton bio certifié GOTS, fabrication europe, grammages stables d'une saison à l'autre. Marquage intégré dans notre Atelier à Paris (75011) en sérigraphie, broderie, flocage, DTG, DTF ou écusson. Devis express & livraison en 48h.",
    stats: [],
    heroVisual: "assets/home/hero-cover.webp",
    heroVisualAlt: "atelier Atelier Amelot · table de marquage textile, presses sérigraphie et stack de t-shirts Stanley/Stella",
    brandPhoto: "assets/home/stanley-stella-lifestyle.jpg",
    brandPhotoAlt: "trois mannequins portant des sweats et hoodies Stanley/Stella, atelier studio sur fond beige",
    visual: null,
    visualAlt: "",
    visualTag: null,
    visualMeta: [],

    catalogCount: 215,
    catalogPerPage: 24,
    catalogPage: 1,
    catalogTitle: "explorez les 200+ références",
    catalogEyebrow: "catalogue complet Stanley/Stella",
    catalogSubtitle: "",
    catalog: [
      { ref: "sttu170", category: "t-shirt fitted",   name: "stella · t-shirt fitted",   specs: "155g · bio coton · 20 coloris",       price: "5,30",  image: "assets/products/prod-tee-3.webp", alt: "Stanley/Stella stella t-shirt fitted bio" },
      { ref: "sttu755", category: "t-shirt heavy",    name: "rocker · t-shirt heavy",    specs: "220g · bio coton peigné · 18 coloris", price: "7,90",  image: "assets/products/prod-tee-2.webp", alt: "rocker t-shirt heavy 220g blanc" },
      { ref: "stsu178", category: "sweat crew",       name: "shifter · sweat crew",       specs: "300g · molleton bio · 14 coloris",     price: "22,40", image: "assets/products/prod-sw-1.webp",  alt: "shifter sweat crew gris chiné" },
      { ref: "stsu688", category: "sweat oversize",   name: "matcher · sweat oversize",   specs: "320g · molleton premium · 12 coloris", price: "29,90", tag: "new", image: "assets/products/prod-sw-2.webp",  alt: "matcher sweat oversize tan" },
      { ref: "stau817", category: "polo",             name: "briser · polo manches longues", specs: "200g · piqué bio · 6 coloris",      price: "14,50", image: "assets/products/prod-tee-4.webp", alt: "briser polo manches longues" },
      { ref: "sttu556", category: "t-shirt heavy",    name: "stargazer · t-shirt heavy",  specs: "220g · bio coton · 16 coloris",        price: "8,40",  image: "assets/products/prod-tee-1.webp", alt: "stargazer t-shirt heavy" },
      { ref: "stsu142", category: "hoodie zippé",     name: "drummer · hoodie zippé",     specs: "300g · molleton brossé · 14 coloris",  price: "32,90", tag: "meilleure vente", image: "assets/products/prod-sw-3.webp",  alt: "drummer hoodie zippé" },
      { ref: "stsu823", category: "hoodie",           name: "cruiser · hoodie premium",   specs: "320g · molleton bio · 22 coloris",     price: "24,90", image: "assets/products/prod-sw-4.webp",  alt: "cruiser hoodie premium kaki" },
      { ref: "sttu755", category: "t-shirt léger",    name: "creator · t-shirt léger",    specs: "150g · bio coton · 24 coloris",        price: "4,50",  image: "assets/products/prod-ss-3.webp",  alt: "creator t-shirt léger" },
      { ref: "sttu816", category: "t-shirt premium",  name: "ledger · t-shirt premium",   specs: "200g · bio coton peigné · 8 coloris",  price: "9,90",  image: "assets/products/prod-ss-4.webp",  alt: "ledger t-shirt premium" },
      { ref: "stau170", category: "tote bag",         name: "stanley · tote bag bio",     specs: "240g toile · bio coton · 8 coloris",   price: "3,90",  tag: "destockage", image: "assets/products/prod-ss-1.webp",  alt: "stanley tote bag bio" },
      { ref: "sttu559", category: "t-shirt",          name: "rocker · t-shirt unisexe",   specs: "180g · bio coton · 22 coloris",        price: "6,40",  image: "assets/products/prod-tee-1.webp", alt: "rocker t-shirt unisexe" },
      { ref: "stsu827", category: "sweat zippé",      name: "rover · sweat zippé bio",    specs: "300g · molleton recyclé · 10 coloris", price: "28,90", image: "assets/products/prod-sw-5.webp",  alt: "rover sweat zippé recyclé" },
      { ref: "stsu183", category: "sweat capuche",    name: "fuser · sweat capuche",      specs: "260g · molleton bio · 18 coloris",     price: "21,50", image: "assets/products/prod-sw-6.webp",  alt: "fuser sweat capuche bio" },
      { ref: "sttu833", category: "t-shirt crop",     name: "muser · t-shirt crop",       specs: "175g · bio coton · 10 coloris",        price: "6,90",  tag: "new", image: "assets/products/prod-tee-3.webp", alt: "muser t-shirt crop femme" },
      { ref: "sttu478", category: "t-shirt manches longues", name: "anchor · manches longues", specs: "190g · bio coton · 12 coloris", price: "9,20",  image: "assets/products/prod-tee-2.webp", alt: "anchor t-shirt manches longues" },
      { ref: "stau823", category: "sweat enfant",     name: "twister · sweat enfant",     specs: "260g · molleton bio · 8 coloris",      price: "16,40", image: "assets/products/prod-sw-7.webp",  alt: "twister sweat enfant bio" },
      { ref: "stau824", category: "t-shirt enfant",   name: "twister · t-shirt enfant",   specs: "180g · bio coton · 14 coloris",        price: "5,80",  image: "assets/products/prod-sw-8.webp",  alt: "twister t-shirt enfant bio" },
      { ref: "stau170", category: "casquette",        name: "mover · casquette 6-panel",  specs: "twill bio · 6 coloris · velcro",       price: "8,40",  image: "assets/products/prod-ss-2.webp",  alt: "mover casquette 6-panel" },
      { ref: "stsu181", category: "sweat oversize",   name: "trotter · sweat oversize",   specs: "320g · molleton brossé · 10 coloris",  price: "31,90", tag: "meilleure vente", image: "assets/products/prod-sw-1.webp",  alt: "trotter sweat oversize" },
      { ref: "sttu757", category: "t-shirt boxy",     name: "spinner · t-shirt boxy",     specs: "200g · bio coton · 14 coloris",        price: "8,90",  image: "assets/products/prod-tee-4.webp", alt: "spinner t-shirt boxy" },
      { ref: "stsu559", category: "sweat crew",       name: "wanderer · sweat crew",      specs: "260g · molleton bio · 16 coloris",     price: "18,90", image: "assets/products/prod-sw-2.webp",  alt: "wanderer sweat crew" },
      { ref: "sttu828", category: "t-shirt bébé",     name: "creator · t-shirt bébé",     specs: "180g · bio coton · 10 coloris",        price: "5,50",  image: "assets/products/prod-tee-1.webp", alt: "creator t-shirt bébé bio" },
      { ref: "sttu559", category: "débardeur",        name: "snapper · débardeur unisexe", specs: "170g · bio coton · 8 coloris",        price: "5,90",  tag: "destockage", image: "assets/products/prod-tee-2.webp", alt: "snapper débardeur unisexe bio" },
    ],

    bestSellersEyebrow: "top ventes Stanley/Stella",
    bestSellersTitle: "Les pièces incontournables",
    bestSellersSubtitle: "",
    bestSellers: [
      {
        ref: "sttu169",
        category: "t-shirt",
        name: "creator · t-shirt unisexe bio",
        specs: "180g · 100% bio coton · 24 coloris",
        price: "4,90",
        tag: "meilleure vente",
        image: "assets/products/prod-tee-1.webp",
        alt: "Stanley/Stella creator t-shirt unisexe coton bio, gamme classique 180g",
      },
      {
        ref: "stsu868",
        category: "sweat oversize",
        name: "sparker drop · sweat oversize",
        specs: "280g · molleton bio · 18 coloris",
        price: "19,90",
        tag: "new",
        image: "assets/products/prod-sw-1.webp",
        alt: "Stanley/Stella sparker drop sweat oversize gris chiné, molleton bio 280g",
      },
      {
        ref: "stsu822",
        category: "hoodie",
        name: "cruiser · hoodie premium",
        specs: "320g · molleton brossé · 22 coloris",
        price: "24,90",
        tag: "meilleure vente",
        image: "assets/products/prod-sw-4.webp",
        alt: "Stanley/Stella cruiser hoodie premium kaki, molleton brossé 320g",
      },
      {
        ref: "ststu178",
        category: "sweat zippé",
        name: "realer · sweat zippé bio",
        specs: "300g · molleton recyclé · 16 coloris",
        price: "26,50",
        tag: "destockage",
        image: "assets/products/prod-sw-2.webp",
        alt: "Stanley/Stella realer sweat zippé bio coton tan, molleton 300g",
      },
      {
        ref: "stau760",
        category: "sweat",
        name: "sparker · sweat regular bio",
        specs: "260g · molleton bio · 24 coloris",
        price: "14,90",
        image: "assets/products/prod-sw-3.webp",
        alt: "Stanley/Stella sparker sweat regular coton bio, coupe droite 260g",
      },
      {
        ref: "sttu788",
        category: "t-shirt heavy",
        name: "rocker · t-shirt heavy",
        specs: "220g · bio coton peigné · 18 coloris",
        price: "7,90",
        tag: "new",
        image: "assets/products/prod-tee-2.webp",
        alt: "Stanley/Stella rocker t-shirt heavy 220g blanc, coton bio peigné",
      },
      {
        ref: "sttu170",
        category: "t-shirt fitted",
        name: "stella · t-shirt fitted bio",
        specs: "155g · bio coton · 20 coloris",
        price: "5,30",
        image: "assets/products/prod-tee-3.webp",
        alt: "Stanley/Stella stella t-shirt femme fitted, coton bio 155g",
      },
      {
        ref: "stau815",
        category: "polo",
        name: "briser · polo unisexe bio",
        specs: "210g · piqué bio · 8 coloris",
        price: "12,90",
        tag: "destockage",
        image: "assets/products/prod-tee-4.webp",
        alt: "Stanley/Stella briser polo unisexe bio, maille piqué 210g",
      },
    ],

    aboutEyebrow: "qui est Stanley/Stella",
    aboutTitle: "le pionnier du textile durable",
    aboutVisual: "assets/home/showroom.webp",
    aboutVisualAlt:
      "atelier de teinture Stanley/Stella, jersey bio coton et finitions teintes naturelles",
    aboutCopy: [
      "Fondé en 2012 à bruxelles, Stanley/Stella a imposé le coton bio certifié GOTS sur des coupes streetwear contemporaines. Production europe et asie, audits Fair Wear Foundation, OEKO-TEX standard 100.",
      "Distribué par Atelier Amelot depuis 2014. Stock paris dédié, grammages stables d'une saison à l'autre, certifications publiquement vérifiables. Zéro greenwashing, des documents, des numéros.",
      "Plus de 200 références au catalogue : t-shirts unisexes, sweats oversize, hoodies premium, polos, casquettes et tote bags. Du grammage léger 150g au molleton brossé 320g, en coupes regular, fitted, oversize, slim et boxy.",
    ],
    aboutShowcase: {
      eyebrow: "du textile brut au support de marque",
      states: [
        {
          label: "brut",
          image: "assets/lookbook/01-brut.png",
          alt: "Stanley/Stella creator 2.0 t-shirt blanc porté brut, mannequin studio, sans marquage",
        },
        {
          label: "marquage cœur",
          image: "assets/lookbook/02-marquage-coeur.png",
          alt: "même t-shirt avec broderie monogramme Atelier Amelot placée au cœur, finition premium",
        },
        {
          label: "print créatif",
          image: "assets/lookbook/03-print-creatif.png",
          alt: "t-shirt brun Stanley/Stella avec print créatif grand format en sérigraphie sur le devant",
        },
        {
          label: "détail matière",
          image: "assets/lookbook/04-detail-matiere.png",
          alt: "macro du jersey Stanley/Stella, détail matière et fil de broderie",
        },
      ],
    },
    aboutKeyFigures: [
      { lbl: "fondée en", val: "2012" },
      { lbl: "coton", val: "100% bio" },
      { lbl: "production", val: "europe / asie" },
      { lbl: "certifications", val: "4" },
    ],

    certsEyebrow: "certifications",
    certsTitle: "garanties & traçabilités",
    certsLede:
      "Chaque référence Stanley/Stella est tracée par 4 labels indépendants. Audits annuels, numéros de certificat, documents disponibles sur demande.",
    certs: [
      {
        key: "fair-wear",
        name: "Fair Wear Foundation",
        body: "Audit social annuel des usines partenaires. Stanley/Stella est classé leader, le plus haut niveau de l'organisation.",
        ref: "statut leader",
        logo: "assets/certifications/fair-wear-foundation.png",
        alt: "logo Fair Wear Foundation, stanley and stella is a member, statut leader",
      },
      {
        key: "OCS",
        name: "Organic Content Standard",
        body: "Traçabilité du coton bio de la ferme au vêtement fini. Certification OCS blended pour les mélanges, OCS 100 pour le coton pur.",
        ref: "CU 8194934",
        logo: "assets/certifications/ocs-organic-content-standard.png",
        alt: "logo Organic Content Standard, contains organically grown cotton, certifié par control union",
      },
      {
        key: "OEKO-TEX",
        name: "OEKO-TEX standard 100",
        body: "Absence de substances nocives sur le produit fini. Teste les colorants, métaux lourds, pesticides résiduels et formaldéhyde.",
        ref: "2012163 centexbel",
        logo: "assets/certifications/oeko-tex-standard-100.png",
        alt: "logo OEKO-TEX standard 100, certificat 2012163 délivré par centexbel",
      },
      {
        key: "PETA-vegan",
        name: "PETA-approved vegan",
        body: "Zéro composant d'origine animale sur l'ensemble du catalogue. Ni laine, ni soie, ni cuir, ni colle animale.",
        ref: "approved vegan",
        logo: "assets/certifications/peta-approved-vegan.png",
        alt: "logo PETA approved vegan, label apposé sur les produits sans matière animale",
      },
    ],

    reasonsEyebrow: "vous + Atelier Amelot",
    reasonsTitle: "l'alliance qui fait gagner 3 semaines à vos projets",
    reasons: [
      {
        n: "01",
        title: "stock paris",
        body:
          "Catalogue en stock paris. Retrait atelier 75011 ou livraison 48h sur la france métropolitaine.",
      },
      {
        n: "02",
        title: "marquage intégré",
        body:
          "Sérigraphie, broderie, DTG, DTF, flocage et écusson réalisés sur place. Un seul interlocuteur, un seul délai.",
      },
      {
        n: "03",
        title: "prix grossiste",
        body:
          "Tarifs dégressifs dès 10 pièces, conditions grossiste vérifiées sur devis.",
      },
      {
        n: "04",
        title: "conseil expert",
        body:
          "20 ans d'atelier textile, 20 000+ clients accompagnés. Recommandation référence et technique selon usage, public et budget.",
      },
      {
        n: "05",
        title: "rdv atelier",
        body:
          "Prenez rendez-vous au 125 rue amelot pour voir les pièces, toucher les grammages et cadrer votre projet sur place.",
      },
      {
        n: "06",
        title: "sav direct",
        body:
          "Un défaut, un retard, un litige : un seul contact. 48h pour réponse, 7j pour remplacement.",
      },
    ],

    faqEyebrow: "questions fréquentes",
    faqTitle: "tout sur Stanley/Stella chez Atelier Amelot",
    faq: [
      {
        q: "quels sont les délais de livraison pour Stanley/Stella ?",
        a:
          "Les 200+ références en stock paris partent sous 48h en france métropolitaine, 3 à 5 jours sur l'europe. Pour une référence hors stock, le réassort depuis le hub belge prend 5 jours ouvrés. Les commandes spéciales (coloris, taille bébé, grosses séries) sont livrées sous 3 semaines.",
      },
      {
        q: "peut-on commander une seule pièce Stanley/Stella ?",
        a:
          "Oui, Atelier Amelot livre à partir d'une seule pièce sur le stock paris, sans frais de dossier. Les tarifs grossistes dégressifs s'appliquent à partir de 10 pièces et progressent sur les paliers 50, 100, 250, 500.",
      },
      {
        q: "quels marquages sont compatibles avec les vêtements Stanley/Stella ?",
        a:
          "Les 6 techniques de l'atelier sont compatibles avec l'intégralité du catalogue : sérigraphie (à partir de 20 pièces), broderie, flocage, DTG, DTF, écusson. La sérigraphie reste la technique reine sur le coton bio peigné Stanley/Stella, le rendu est exceptionnel.",
      },
      {
        q: "Stanley/Stella propose-t-il des tailles enfant et bébé ?",
        a:
          "Oui, la gamme couvre du 3-6 mois (mini creator) au xxl adulte. La coupe enfant est ajustée, la coupe bébé est conçue pour le change. Nous recommandons un test taille avant commande pour les uniformes scolaires ou crèches.",
      },
      {
        q: "quelle différence entre coupe regular, fitted et oversize ?",
        a:
          "Regular est la coupe droite classique unisexe (creator, sparker). Fitted est ajustée près du corps (stella). Oversize tombe plus large, manches descendues, longueur étendue (sparker drop, freestyler). La coupe boxy raccourcit le buste pour un rendu street, la coupe crop arrête la pièce sous le buste.",
      },
      {
        q: "les vêtements Stanley/Stella sont-ils certifiés bio ?",
        a:
          "Oui, l'intégralité du catalogue est en coton bio certifié GOTS (Global Organic Textile Standard), OEKO-TEX standard 100 et Fair Wear Foundation. Les certifications sont publiquement vérifiables. Les modèles en mélange recyclé portent le label Recycled Claim Standard.",
      },
      {
        q: "comment obtenir un nuancier physique Stanley/Stella ?",
        a:
          "Le nuancier officiel est disponible en consultation à l'atelier 125 rue amelot. Pour les projets de marque, Atelier Amelot envoie gratuitement des échantillons des 3 à 5 références shortlistées avant validation du devis.",
      },
      {
        q: "quelle est la garantie sur les défauts de fabrication ?",
        a:
          "Stanley/Stella garantit ses pièces contre les défauts de fabrication. Atelier Amelot prend en charge le retour et le remplacement sous 7 jours ouvrés, sans frais ni discussion. Un défaut, un seul contact, une décision en 48h.",
      },
    ],

    conseilEyebrow: "besoin d'un conseil ?",
    conseilTitle:
      "vous lancez votre marque ou vous hésitez sur une référence ?",
    conseilBody:
      "Appelez-nous, on échange 15 minutes pour cadrer votre besoin. Devis chiffré envoyé dans l'heure.",
    conseilPhone: "01 47 00 23 56",

    relatedEyebrow: "poursuivre la lecture",
    relatedTitle: "explorez nos autres marques & techniques",
    related: [
      {
        eyebrow: "marque distribuée",
        title: "Sol's",
        dek: "L'entrée de gamme rapport qualité/prix, 6 techniques compatibles.",
        href: "/marques/sols",
      },
      {
        eyebrow: "marque distribuée",
        title: "Westford Mill",
        dek: "La spécialiste tote bag et accessoires, certifié fairtrade.",
        href: "/marques/westford-mill",
      },
      {
        eyebrow: "technique de marquage",
        title: "sérigraphie paris",
        dek: "La technique reine du marquage textile, dès 20 pièces.",
        href: "/marquage/serigraphie",
      },
    ],
  },
};

const BRAND_KEY = "stanley-stella";

Object.assign(window, { BRANDS, BRAND_KEY });
