import Image from "next/image";
import styles from "./ProductCard.module.css";

export default function ProductCard({ producto }) {
  const precioFormateado = new Intl.NumberFormat("es-CO").format(producto.precio);

  return (
    <div className={styles.card}>
      {producto.badge && <span className={styles.badge}>{producto.badge}</span>}
      <button className={styles.favButton} aria-label="Agregar a favoritos">♡</button>

      <div className={styles.imageWrapper}>
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className={styles.info}>
        <p className={styles.nombre}>{producto.nombre}</p>
        <p className={styles.marca}>{producto.marca}</p>
        <p className={styles.rating}>★ {producto.rating} ({producto.reviews})</p>
        <p className={styles.precio}>${precioFormateado}</p>
        <button className={styles.addButton}>Agregar al carrito</button>
      </div>
    </div>
  );
}