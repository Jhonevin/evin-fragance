"use client";

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import styles from "./CatalogView.module.css";

export default function CatalogView({ titulo, subtitulo, productos }) {
  const marcasDisponibles = useMemo(
    () => [...new Set(productos.map((p) => p.marca))],
    [productos]
  );

  const [marcasSeleccionadas, setMarcasSeleccionadas] = useState([]);
  const [orden, setOrden] = useState("relevancia");

  function toggleMarca(marca) {
    setMarcasSeleccionadas((actuales) =>
      actuales.includes(marca)
        ? actuales.filter((m) => m !== marca)
        : [...actuales, marca]
    );
  }

  const productosFiltrados = useMemo(() => {
    let lista = productos;

    if (marcasSeleccionadas.length > 0) {
      lista = lista.filter((p) => marcasSeleccionadas.includes(p.marca));
    }

    const listaOrdenada = [...lista];
    if (orden === "precio-asc") {
      listaOrdenada.sort((a, b) => a.precio - b.precio);
    } else if (orden === "precio-desc") {
      listaOrdenada.sort((a, b) => b.precio - a.precio);
    } else if (orden === "novedades") {
      listaOrdenada.sort((a, b) => (b.esNuevo ? 1 : 0) - (a.esNuevo ? 1 : 0));
    }

    return listaOrdenada;
  }, [productos, marcasSeleccionadas, orden]);

  return (
    <main className={styles.main}>
      <div className={styles.breadcrumbs}>Inicio / {titulo}</div>
      <h1 className={styles.titulo}>{titulo}</h1>
      {subtitulo && <p className={styles.subtitulo}>{subtitulo}</p>}

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <h3>Marca</h3>
          {marcasDisponibles.map((marca) => (
            <label key={marca} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={marcasSeleccionadas.includes(marca)}
                onChange={() => toggleMarca(marca)}
              />
              {marca}
            </label>
          ))}

          {marcasSeleccionadas.length > 0 && (
            <button
              className={styles.limpiarButton}
              onClick={() => setMarcasSeleccionadas([])}
            >
              Limpiar filtros
            </button>
          )}
        </aside>

        <div className={styles.resultados}>
          <div className={styles.toolbar}>
            <span className={styles.contador}>
              {productosFiltrados.length} producto(s)
            </span>
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
              className={styles.ordenSelect}
            >
              <option value="relevancia">Relevancia</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
              <option value="novedades">Novedades</option>
            </select>
          </div>

          {productosFiltrados.length === 0 ? (
            <p className={styles.vacio}>No hay productos con estos filtros.</p>
          ) : (
            <div className={styles.grid}>
              {productosFiltrados.map((producto) => (
                <ProductCard key={producto.id} producto={producto} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}