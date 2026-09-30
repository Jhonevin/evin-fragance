"use client";

import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarLinks}>
          <span>Envíos a todo el país</span>
          <span>Pago seguro</span>
        </div>
        <div className={styles.topBarLinks}>
          <a href="/login">Iniciar sesión</a>
          <a href="/registro">Registrarse</a>
        </div>
      </div>

      <div className={styles.mainRow}>
        <a href="/" className={styles.logo}>
          EVIN FRAGANCE
          <span className={styles.tagline}>Tu esencia, tu estilo</span>
        </a>

        <form className={styles.searchForm}>
          <input
            type="text"
            placeholder="Buscar fragancias, marcas..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            Buscar
          </button>
        </form>

        <div className={styles.actions}>
          <a href="/favoritos">Favoritos</a>
          <a href="/carrito" className={styles.cartLink}>
            Carrito
            <span className={styles.cartCount}>0</span>
          </a>
        </div>
      </div>

      <nav className={styles.nav}>
        <a href="/">Inicio</a>
        <a href="/hombres">Hombres</a>
        <a href="/mujeres">Mujeres</a>
        <a href="/unisex">Unisex</a>
        <a href="/novedades">Novedades</a>
        <a href="/ofertas">Ofertas</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/contacto">Contacto</a>
      </nav>
    </header>
  );
}