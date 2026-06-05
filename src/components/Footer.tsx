import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <span className="footer__logo">Lumiere</span>

        <nav aria-label="Footer">
          <ul className="footer__links" role="list">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/services">Servicios</Link></li>
            <li><Link href="/#nosotras">Nosotras</Link></li>
            <li><Link href="/#contacto">Contacto</Link></li>
          </ul>
        </nav>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Lumiere Wellness Center. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
