"use client";

import { useEffect, useState } from "react";

type Service = {
  id: number;
  name: string;
  category: string;
  description: string;
  duration: string;
  price: string;
  featured: boolean;
};

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-tag" />
      <div className="skeleton skeleton-name" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text" style={{ width: "65%" }} />
      <div className="skeleton skeleton-btn" />
    </div>
  );
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[] | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("/data/services.json")
      .then((r) => r.json())
      .then((data: Service[]) => {
        setServices(data);
        setCategories(Array.from(new Set(data.map((s) => s.category))));
      })
      .catch(() => setServices([]));
  }, []);

  const filtered =
    services === null
      ? null
      : activeFilter === "all"
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <>
      {/* ── Catalog Hero ──────────────────────────────────────── */}
      <div className="catalog-hero">
        <div className="container">
          <span className="section-label">Menú de tratamientos</span>
          <h1 className="catalog-hero__title">Nuestros servicios</h1>
          <p className="catalog-hero__sub">
            Cada tratamiento está diseñado con protocolos de alta eficacia, adaptados a tu tipo de piel y objetivos.
          </p>
        </div>
      </div>


      {/* ── Filter Bar ────────────────────────────────────────── */}
      <div className="filter-bar" role="navigation" aria-label="Filtrar por categoría">
        <div className="container filter-bar__inner">
          {services === null ? (
            <span style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Cargando filtros…</span>
          ) : (
            <>
              <button
                className={`filter-btn${activeFilter === "all" ? " active" : ""}`}
                onClick={() => setActiveFilter("all")}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn${activeFilter === cat ? " active" : ""}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </>
          )}
        </div>
      </div>


      {/* ── Catalog Grid ──────────────────────────────────────── */}
      <section className="catalog-section" aria-labelledby="catalog-title">
        <div className="container">
          <h2 id="catalog-title" className="sr-only">Listado de servicios</h2>
          <div className="catalog-grid" aria-live="polite">
            {filtered === null ? (
              Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            ) : filtered.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state__icon">🔍</div>
                <h3 className="empty-state__title">Sin resultados</h3>
                <p className="empty-state__text">No hay servicios en esta categoría todavía.</p>
              </div>
            ) : (
              filtered.map((svc) => (
                <article key={svc.id} className="catalog-card" data-category={svc.category}>
                  <span className="catalog-card__tag">{svc.category}</span>
                  <h3 className="catalog-card__name">{svc.name}</h3>
                  <p className="catalog-card__desc">{svc.description}</p>
                  <div className="catalog-card__meta">
                    <span>⏱ {svc.duration}</span>
                  </div>
                  <div className="catalog-card__price">{svc.price}</div>
                  <div className="catalog-card__cta">
                    <a
                      href={`https://wa.me/549XXXXXXXXXX?text=${encodeURIComponent(`Hola! Me gustaría consultar sobre el servicio: ${svc.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                    >
                      Consultar
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>


      {/* ── CTA Strip ─────────────────────────────────────────── */}
      <section className="cta-banner" aria-labelledby="cta-strip-title">
        <div className="container">
          <h2 className="cta-banner__title" id="cta-strip-title">¿Tenés dudas sobre qué tratamiento elegir?</h2>
          <p className="cta-banner__sub">
            Escribinos y te asesoramos sin compromiso para encontrar el protocolo ideal para tu piel.
          </p>
          <a
            href="https://wa.me/549XXXXXXXXXX?text=Hola!%20Quisiera%20asesoramiento%20sobre%20los%20tratamientos%20de%20Lumiere%20Wellness%20Center."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-white"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
