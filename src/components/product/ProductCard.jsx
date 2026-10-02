"use client";

import Image from "next/image";
import Link from "next/link";
import { useFavoritos } from "@/context/FavoritesContext";
import styles from "./ProductCard.module.css";

export default function ProductCard({ producto }) {
  const { esFavorito, toggleFavorito } = useFavoritos();
  const precioFormateado = new Intl.NumberFormat("es-CO").format(producto.precio);
  const precioAnteriorFormateado = producto.precioAnterior
    ? new Intl.NumberFormat("es-CO").format(producto.precioAnterior)
    : null;
  const favorito = esFavorito(producto.id);

  return (
    <div className={styles.card}>
      {producto.badge && <span className={styles.badge}>{producto.badge}</span>}
      <button
        className={favorito ? styles.favButtonActivo : styles.favButton}
        onClick={() => toggleFavorito(producto.id)}
        aria-label={favorito ? "Quitar de favoritos" : "Agregar a favoritos"}
      >
        {favorito ? "♥" : "♡"}
      </button>

      <Link href={`/producto/${producto.id}`} className={styles.linkArea}>
        <div className={styles.imageWrapper}>
          <Image src={producto.imagen} alt={producto.nombre} fill style={{ objectFit: "contain" }} />
        </div>
        <p className={styles.nombre}>{producto.nombre}</p>
        <p className={styles.marca}>{producto.marca}</p>
      </Link>

      <div className={styles.info}>
        <p className={styles.rating}>★ {producto.rating} ({producto.reviews})</p>
        <div className={styles.precioRow}>
          <p className={styles.precio}>${precioFormateado}</p>
          {precioAnteriorFormateado && <p className={styles.precioAnterior}>${precioAnteriorFormateado}</p>}
        </div>
        <button className={styles.addButton}>Agregar al carrito</button>
      </div>
    </div>
  );
}