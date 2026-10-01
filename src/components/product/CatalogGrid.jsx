import ProductCard from "./ProductCard";
import styles from "./CatalogGrid.module.css";

export default function CatalogGrid({ titulo, subtitulo, productos }) {
  return (
    <main className={styles.main}>
      <div className={styles.breadcrumbs}>Inicio / {titulo}</div>
      <h1 className={styles.titulo}>{titulo}</h1>
      {subtitulo && <p className={styles.subtitulo}>{subtitulo}</p>}

      {productos.length === 0 ? (
        <p className={styles.vacio}>No hay productos en esta categoría todavía.</p>
      ) : (
        <div className={styles.grid}>
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </main>
  );
}