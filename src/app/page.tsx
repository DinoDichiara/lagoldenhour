"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-btn" />
    </div>
  );
}

export default function HomePage() {
  const [featured, setFeatured] = useState<Service[] | null>(null);

  useEffect(() => {
    fetch("/data/services.json")
      .then((r) => r.json())
      .then((data: Service[]) => setFeatured(data.filter((s) => s.featured).slice(0, 3)))
      .catch(() => setFeatured([]));
  }, []);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <span className="hero__eyebrow">Estética facial · Buenos Aires</span>
          <h1 className="hero__title" id="hero-title">
            Tu piel,<br />en su<br /><em>mejor versión</em>
          </h1>
          <p className="hero__sub">
            Rituales personalizados que combinan ciencia y sensorialidad para una piel saludable, luminosa y en equilibrio.
          </p>
          <Link href="/services" className="btn btn--primary">
            Descubrir servicios <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="hero__img-wrap" aria-hidden="true">
          <div className="img-placeholder">hero.jpg</div>
        </div>
      </section>


      {/* ── Philosophy Strip ─────────────────────────────────── */}
      <div className="strip" aria-hidden="true">
        <p className="strip__quote">&ldquo;Cuidado consciente. Resultados visibles. Bienestar genuino.&rdquo;</p>
      </div>


      {/* ── Featured Services ─────────────────────────────────── */}
      <section className="services-section section" aria-labelledby="services-title">
        <div className="container">
          <div className="services-section__header">
            <div>
              <span className="section-label">Tratamientos</span>
              <h2 className="services-section__title" id="services-title">Nuestros tratamientos</h2>
            </div>
            <Link href="/services" className="btn btn--outline">Ver todos los servicios</Link>
          </div>

          <div className="services-grid" aria-live="polite">
            {featured === null ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : featured.length === 0 ? (
              <p style={{ color: "var(--color-muted)", gridColumn: "1/-1", textAlign: "center", padding: "2rem 0" }}>
                No se pudieron cargar los servicios. Por favor, intentá más tarde.
              </p>
            ) : (
              featured.map((svc, i) => (
                <article
                  key={svc.id}
                  className={`service-card${i === 0 ? " service-card--featured" : ""}`}
                >
                  <div className="service-card__img-wrap">
                    <div className="img-placeholder">service-{i + 1}.jpg</div>
                  </div>
                  <div className="service-card__body">
                    <h3 className="service-card__name">{svc.name}</h3>
                    <p className="service-card__desc">{svc.description}</p>
                    <Link href="/services" className="service-card__link">Ver más</Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>


      {/* ── About ────────────────────────────────────────────── */}
      <section className="about section" id="nosotras" aria-labelledby="about-title">
        <div className="container">
          <div className="about__inner">
            <div className="about__img-wrap">
              <div className="img-placeholder">about.jpg</div>
            </div>

            <div className="about__content">
              <span className="section-label">Nuestra historia</span>
              <h2 className="about__title" id="about-title">
                Una mirada diferente sobre el cuidado de la piel
              </h2>
              <div className="about__divider" aria-hidden="true" />
              <p className="about__text">
                Lumiere Wellness Center nació de la convicción de que cada piel cuenta su propia historia. No creemos en rutinas genéricas ni en soluciones express: creemos en el tiempo que se dedica a escuchar, analizar y diseñar protocolos realmente adaptados a cada persona.
              </p>
              <p className="about__text">
                Trabajamos con ingredientes activos de alta eficacia, tecnologías de última generación y, sobre todo, con las manos y la atención que merecés. Porque el verdadero lujo es sentirte bien en tu propia piel.
              </p>
              <Link href="/services" className="btn btn--outline" style={{ marginTop: "0.5rem" }}>
                Conocer los tratamientos
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ── Ritual / Process ──────────────────────────────────── */}
      <section className="ritual section" aria-labelledby="ritual-title">
        <div className="container">
          <span className="section-label" style={{ textAlign: "center", display: "block" }}>El proceso</span>
          <h2 className="ritual__title" id="ritual-title">¿Cómo es una sesión?</h2>
          <p className="ritual__sub">
            Cada visita está diseñada para que te sientas acompañada desde el primer momento.
          </p>

          <div className="ritual__steps" role="list">
            <div className="ritual__step" role="listitem">
              <div className="ritual__step-icon" aria-hidden="true">🧖</div>
              <span className="ritual__step-num">Paso 01</span>
              <h3 className="ritual__step-name">Diagnóstico</h3>
              <p className="ritual__step-desc">
                Analizamos tu piel, tu rutina actual y tus objetivos para diseñar el protocolo ideal.
              </p>
            </div>

            <div className="ritual__step" role="listitem">
              <div className="ritual__step-icon" aria-hidden="true">✨</div>
              <span className="ritual__step-num">Paso 02</span>
              <h3 className="ritual__step-name">Tratamiento</h3>
              <p className="ritual__step-desc">
                Aplicamos las técnicas y activos seleccionados con el tiempo y la precisión que cada paso requiere.
              </p>
            </div>

            <div className="ritual__step" role="listitem">
              <div className="ritual__step-icon" aria-hidden="true">🌿</div>
              <span className="ritual__step-num">Paso 03</span>
              <h3 className="ritual__step-name">Pautas personalizadas</h3>
              <p className="ritual__step-desc">
                Te asesoramos sobre cómo cuidar los resultados en casa con una rutina pensada para vos.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ── Gallery Teaser ────────────────────────────────────── */}
      <section className="gallery section" aria-labelledby="gallery-title">
        <div className="container">
          <span className="section-label" style={{ textAlign: "center", display: "block" }}>Galería</span>
          <h2 className="gallery__title" id="gallery-title">Momentos</h2>

          <div className="gallery__grid" aria-label="Galería de imágenes">
            <div className="gallery__item"><div className="img-placeholder">gallery-1.jpg</div></div>
            <div className="gallery__item"><div className="img-placeholder">gallery-2.jpg</div></div>
            <div className="gallery__item"><div className="img-placeholder">gallery-3.jpg</div></div>
            <div className="gallery__item"><div className="img-placeholder">gallery-4.jpg</div></div>
          </div>
        </div>
      </section>


      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="cta-banner" id="contacto" aria-labelledby="cta-title">
        <div className="container">
          <span className="section-label" style={{ color: "rgba(255,255,255,0.65)" }}>Reservas</span>
          <h2 className="cta-banner__title" id="cta-title">Reservá tu ritual</h2>
          <p className="cta-banner__sub">
            Tomáte el tiempo que merecés. Escribinos y encontramos juntas el turno perfecto para vos.
          </p>
          <a
            href="https://wa.me/549XXXXXXXXXX?text=Hola!%20Quiero%20reservar%20un%20turno%20en%20Lumiere%20Wellness%20Center."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-white"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
