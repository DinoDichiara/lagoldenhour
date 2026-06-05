"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav" role="banner">
      <div className="container nav__inner">
        <Link href="/" className="nav__logo" aria-label="Lumiere Wellness Center — Inicio">
          Lumiere
        </Link>

        <nav aria-label="Navegación principal">
          <ul className={`nav__links${mobileOpen ? " open" : ""}`} id="nav-links" role="list">
            <li><Link href="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link href="/services" onClick={closeMenu}>Servicios</Link></li>
            <li><Link href="/#nosotras" onClick={closeMenu}>Nosotras</Link></li>
            <li><Link href="/#contacto" onClick={closeMenu}>Contacto</Link></li>
            <li>
              <Link href="/services" className="nav__cta" onClick={closeMenu}>
                Reservar
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="nav__toggle"
          id="nav-toggle"
          aria-controls="nav-links"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={toggleMenu}
        >
          <span
            style={
              mobileOpen
                ? { transform: "translateY(6.5px) rotate(45deg)" }
                : undefined
            }
          />
          <span style={mobileOpen ? { opacity: 0 } : undefined} />
          <span
            style={
              mobileOpen
                ? { transform: "translateY(-6.5px) rotate(-45deg)" }
                : undefined
            }
          />
        </button>
      </div>
    </header>
  );
}
