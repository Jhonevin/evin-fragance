import { productos } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <p className={styles.heroEyebrow}>Fragancias que dejan huella</p>
        <h1 className={styles.heroTitle}>El poder de una <span>gran fragancia</span></h1>
        <p className={styles.heroSubtitle}>
          Descubre nuestra exclusiva colección de perfumes originales,
          diseñados para resaltar tu esencia en cada momento.
        </p>
        <a href="/ofertas" className={styles.heroButton}>Ver colección →</a>
      </section>

      <section className={styles.categorias}>
        <a href="/hombres">Hombres</a>
        <a href="/mujeres">Mujeres</a>
        <a href="/unisex">Unisex</a>
        <a href="/novedades">Novedades</a>
        <a href="/ofertas">Ofertas</a>
        <a href="/mas-vendidos">Más vendidos</a>
      </section>

      <section className={styles.destacados}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>Productos destacados</p>
            <h2>Los más populares</h2>
          </div>
          <a href="/ofertas">Ver todos los productos →</a>
        </div>

        <div className={styles.grid}>
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>

      <section className={styles.promo}>
        <p className={styles.promoEyebrow}>Promoción especial</p>
        <h2>Hasta <span>50% de descuento</span></h2>
        <p>En fragancias seleccionadas</p>
        <a href="/ofertas" className={styles.promoButton}>Ver ofertas →</a>
      </section>
    </main>
  );
}