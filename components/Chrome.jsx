/* Atelier Amelot · Brand chrome (header / topbar / footer) */
const { useState } = React;

function Wordmark({ height = 22 }) {
  return (
    <img
      src="assets/logos/atelier-amelot-wordmark.svg"
      alt="Atelier Amelot"
      style={{ height, width: "auto", display: "block" }}
      onError={(e) => { e.currentTarget.style.display = "none"; }}
    />
  );
}

function Topbar() {
  return (
    <div className="aa-topbar">
      <a href="#marquages">Marquages</a>
      <a href="#magazine">Magazine</a>
      <a href="#faq">FAQ</a>
      <a href="#adresse">Adresse</a>
      <a className="rdv" href="#rdv">Prendre rendez-vous atelier</a>
      <a className="phone" href="tel:+33177126127">Appelez-nous: +33 0177126127</a>
    </div>
  );
}

function Header({ active, onNavigate }) {
  const items = [
    { id: "vetements",   label: "vêtements" },
    { id: "casquettes",  label: "casquettes & chapeaux" },
    { id: "sacs",        label: "sacs & bagagerie" },
    { id: "sport",       label: "sport" },
    { id: "workwear",    label: "workwear" },
    { id: "maison",      label: "maison et objets" },
    { id: "outlet",      label: "outlet" },
  ];
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="aa-header">
      <button
        className="aa-burger"
        aria-label={open ? "fermer le menu" : "ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span className={"aa-burger__bars" + (open ? " is-open" : "")}>
          <span></span><span></span><span></span>
        </span>
      </button>

      <a href="#" className="aa-brand" onClick={(e) => { e.preventDefault(); onNavigate?.("home"); }}>
        <Wordmark height={22}/>
      </a>
      <nav className="aa-nav">
        {items.map(i => (
          <a key={i.id} href={`#${i.id}`}
             onClick={(e) => { e.preventDefault(); onNavigate?.("category", i); }}
             style={{ opacity: active === i.id ? 1 : undefined }}>
            {i.label}
          </a>
        ))}
      </nav>
      <div className="aa-utility">
        <svg className="aa-ico" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></svg>
        <svg className="aa-ico aa-ico--user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6"/></svg>
        <a href="#devis" className="aa-btn aa-btn--md aa-btn-devis"
           onClick={(e) => { e.preventDefault(); onNavigate?.("devis"); }}>
          <span className="aa-btn-devis__full">demander un devis</span>
          <span className="aa-btn-devis__short">devis</span>
        </a>
      </div>

      {open && (
        <>
          <div className="aa-mobile-scrim" onClick={() => setOpen(false)} aria-hidden="true"/>
          <div className="aa-mobile-nav" role="dialog" aria-label="menu de navigation">
            <div className="aa-mobile-nav__head">
              <span className="aa-mobile-nav__label">catalogue</span>
              <button
                className="aa-mobile-nav__close"
                aria-label="fermer"
                onClick={() => setOpen(false)}
              >×</button>
            </div>
            <ul className="aa-mobile-nav__list">
              {items.map(i => (
                <li key={i.id}>
                  <a href={`#${i.id}`}
                     onClick={(e) => { e.preventDefault(); setOpen(false); onNavigate?.("category", i); }}>
                    {i.label}
                    <span className="aa-mobile-nav__chev" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="aa-mobile-nav__sub">
              <a href="#marquages" onClick={() => setOpen(false)}>marquages</a>
              <a href="#magazine" onClick={() => setOpen(false)}>magazine</a>
              <a href="#faq" onClick={() => setOpen(false)}>faq</a>
              <a href="#rdv" onClick={() => setOpen(false)}>prendre rendez-vous atelier</a>
              <a href="tel:+33177126127" className="aa-mobile-nav__phone">+33 01 77 12 61 27</a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="aa-footer">
      <div className="top">
        <div>
          <h4>Atelier Amelot et vous</h4>
          <a href="#">contact</a><a href="#">mon compte</a><a href="#">devis</a>
          <a href="#">livraison</a><a href="#">retours & remboursements</a>
        </div>
        <div>
          <h4>l'atelier</h4>
          <a href="#">marquage</a><a href="#">magazine</a><a href="#">faq</a>
        </div>
        <div>
          <h4>légal</h4>
          <a href="#">mentions légales</a>
          <a href="#">condition général de vente</a>
          <a href="#">conditions d'utilisation</a>
          <a href="#">politique de confidentialité</a>
        </div>
        <div className="news">
          <h4>restons en contact ! abonnez-vous à notre newsletter</h4>
          <div style={{ fontSize: 10, color: "#8A8A8A", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>e-mail</div>
          <div className="row">
            <input placeholder="entrez votre email"/>
            <span className="arrow">→</span>
          </div>
          <p className="fine">en vous inscrivant, vous acceptez la politique de confidentialité et les conditions d'utilisation de l'Atelier Amelot.</p>
        </div>
      </div>
      <div className="end">
        <div>Atelier Amelot · tous droits réservés</div>
        <div className="social">
          <svg viewBox="0 0 24 24"><path d="M13 22v-9h3l1-4h-4V6.5C13 5.5 13.4 5 14.5 5H17V1.2C16.5 1.1 15.1 1 13.8 1 11 1 9 2.6 9 5.8V9H6v4h3v9h4z"/></svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="#fff"/></svg>
          <svg viewBox="0 0 24 24"><path d="M16 3c0 2.5 2 4.5 4.5 4.5v3.5C18.5 11 17 10.3 16 9.3v6.7c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7 0 1 .1V13.6c-.3-.1-.7-.1-1-.1-1.4 0-2.5 1.1-2.5 2.5S8.6 18.5 10 18.5s2.5-1.1 2.5-2.5V3H16z"/></svg>
          <svg viewBox="0 0 24 24"><path d="M22 7.5c0-1.6-1.3-3-3-3-2 0-7 0-7 0s-5 0-7 0c-1.6 0-3 1.3-3 3v9c0 1.6 1.3 3 3 3 2 0 7 0 7 0s5 0 7 0c1.6 0 3-1.3 3-3v-9zM10 16V8l6 4-6 4z"/></svg>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Topbar, Header, Footer, Wordmark });
