"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductDetail.module.css";

export default function ProductDetail({ producto }) {
  const [volumenSeleccionado, setVolumenSeleccionado] = useState(
    producto.volumenes[producto.volumenes.length - 1]
  );
  const [cantidad, setCantidad] = useState(1);

  const precioFormateado = new Intl.NumberFormat("es-CO").format(
    volumenSeleccionado.precio
  );

  return (
    <main className={styles.main}>
      <div className={styles.breadcrumbs}>
        <Link href="/">Inicio</Link> / <Link href={`/${producto.categoria}`}>{producto.categoria}</Link> / {producto.nombre}
      </div>

      <div className={styles.layout}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <Image src={producto.imagen} alt={producto.nombre} fill style={{ objectFit: "contain" }} priority />
          </div>
          <div className={styles.thumbnails}>
            <div className={styles.thumbnail}>
              <Image src={producto.imagen} alt={producto.nombre} fill style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <p className={styles.marca}>{producto.marca}</p>
          <h1 className={styles.nombre}>{producto.nombre}</h1>
          <p className={styles.concentracion}>{producto.concentracion}</p>
          <p className={styles.rating}>★ {producto.rating} ({producto.reviews} reseñas)</p>

          <p className={styles.descripcion}>{producto.descripcion}</p>

          <div className={styles.piramide}>
            <h3>Pirámide olfativa</h3>
            <div className={styles.notasGrid}>
              <div>
                <p className={styles.notaTitulo}>Notas de salida</p>
                <p className={styles.notaLista}>{producto.notas.salida.join(", ")}</p>
              </div>
              <div>
                <p className={styles.notaTitulo}>Notas de corazón</p>
                <p className={styles.notaLista}>{producto.notas.corazon.join(", ")}</p>
              </div>
              <div>
                <p className={styles.notaTitulo}>Notas de fondo</p>
                <p className={styles.notaLista}>{producto.notas.fondo.join(", ")}</p>
              </div>
            </div>
          </div>

          <div className={styles.volumenes}>
            <p className={styles.volumenLabel}>Presentación</p>
            <div className={styles.volumenOpciones}>
              {producto.volumenes.map((v) => (
                <button
                  key={v.ml}
                  className={
                    v.ml === volumenSeleccionado.ml
                      ? styles.volumenActivo
                      : styles.volumenBoton
                  }
                  onClick={() => setVolumenSeleccionado(v)}
                >
                  {v.ml} ml
                </button>
              ))}
            </div>
          </div>

          <p className={styles.precio}>${precioFormateado}</p>
          <p className={styles.disponibilidad}>✓ En stock</p>

          <div className={styles.acciones}>
            <div className={styles.cantidadSelector}>
              <button onClick={() => setCantidad((c) => Math.max(1, c - 1))}>−</button>
              <span>{cantidad}</span>
              <button onClick={() => setCantidad((c) => c + 1)}>+</button>
            </div>
            <button className={styles.agregarButton}>Agregar al carrito</button>
            <button className={styles.favButton} aria-label="Agregar a favoritos">♡</button>
          </div>
        </div>
      </div>
    </main>
  );
}