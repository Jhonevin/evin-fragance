import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <p className={styles.logo}>EVIN FRAGANCE</p>
          <p className={styles.tagline}>Tu esencia, tu estilo</p>
        </div>

        <div>
          <h4>Enlaces rápidos</h4>
          <a href="/">Inicio</a>
          <a href="/tienda">Tienda</a>
          <a href="/ofertas">Ofertas</a>
          <a href="/nosotros">Nosotros</a>
          <a href="/contacto">Contacto</a>
        </div>

        <div>
          <h4>Ayuda</h4>
          <a href="/faq">Preguntas frecuentes</a>
          <a href="/envios">Envíos y devoluciones</a>
          <a href="/privacidad">Política de privacidad</a>
        </div>

        <div>
          <h4>Síguenos en</h4>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="TikTok"><FaTiktok /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div>
          <h4>Newsletter</h4>
          <p>Suscríbete y recibe ofertas exclusivas.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Tu correo electrónico" />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <span>© 2026 Evin Fragance. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}