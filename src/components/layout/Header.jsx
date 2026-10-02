"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useFavoritos } from "@/context/FavoritesContext";
import styles from "./Header.module.css";

export default function Header() {
  const [busqueda, setBusqueda] = useState("");
  const router = useRouter();
  const { favoritos } = useFavoritos();

  function manejarBusqueda(evento) {
    evento.preventDefault();
    if (busqueda.trim() === "") return;
    router.push(`/buscar?q=${encodeURIComponent(busqueda.trim())}`);
  }

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

        <form className={styles.searchForm} onSubmit={manejarBusqueda}>
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
          <a href="/favoritos" className={styles.actionLink}>
            <FiHeart /> Favoritos
            {favoritos.length > 0 && <span className={styles.favCount}>{favoritos.length}</span>}
          </a>
          <a href="/carrito" className={styles.cartLink}>
            <FiShoppingCart /> Carrito
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