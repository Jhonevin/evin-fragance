"use client";

import { productos } from "@/data/products";
import { useFavoritos } from "@/context/FavoritesContext";
import ProductCard from "./ProductCard";
import styles from "./CatalogGrid.module.css";

export default function FavoritosList() {
  const { favoritos } = useFavoritos();
  const productosFavoritos = productos.filter((p) => favoritos.includes(p.id));

  return (
    <main className={styles.main}>
      <div className={styles.breadcrumbs}>Inicio / Favoritos</div>
      <h1 className={styles.titulo}>Favoritos</h1>

      {productosFavoritos.length === 0 ? (
        <p className={styles.vacio}>
          Todavía no tienes productos favoritos. Explora el catálogo y marca los que más te gusten con el corazón ♡.
        </p>
      ) : (
        <div className={styles.grid}>
          {productosFavoritos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </main>
  );
}