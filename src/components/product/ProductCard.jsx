import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";

export default function ProductCard({ producto }) {
  const precioFormateado = new Intl.NumberFormat("es-CO").format(producto.precio);
  const precioAnteriorFormateado = producto.precioAnterior
    ? new Intl.NumberFormat("es-CO").format(producto.precioAnterior)
    : null;

  return (
    <div className={styles.card}>
      {producto.badge && <span className={styles.badge}>{producto.badge}</span>}
      <button className={styles.favButton} aria-label="Agregar a favoritos">♡</button>

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