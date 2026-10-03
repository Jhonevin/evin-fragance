"use client";

import Image from "next/image";
import Link from "next/link";
import { productos } from "@/data/products";
import { useCarrito } from "@/context/CartContext";
import styles from "./CartList.module.css";

export default function CartList() {
  const { carrito, quitarDelCarrito, cambiarCantidad } = useCarrito();

  const items = carrito
    .map((item) => {
      const producto = productos.find((p) => p.id === item.id);
      if (!producto) return null;
      const volumen = producto.volumenes?.find((v) => v.ml === item.ml);
      const precioUnitario = volumen?.precio ?? producto.precio;
      return { ...item, producto, precioUnitario };
    })
    .filter(Boolean);

  const total = items.reduce(
    (suma, item) => suma + item.precioUnitario * item.cantidad,
    0
  );
  const totalFormateado = new Intl.NumberFormat("es-CO").format(total);

  return (
    <main className={styles.main}>
      <div className={styles.breadcrumbs}>Inicio / Carrito</div>
      <h1 className={styles.titulo}>Carrito</h1>

      {items.length === 0 ? (
        <p className={styles.vacio}>
          Tu carrito está vacío.{" "}
          <Link href="/">Explora el catálogo</Link> y agrega tus
          fragancias favoritas.
        </p>
      ) : (
        <>
          <div className={styles.lista}>
            {items.map((item) => {
              const subtotal = new Intl.NumberFormat("es-CO").format(
                item.precioUnitario * item.cantidad
              );
              return (
                <div key={`${item.id}-${item.ml}`} className={styles.item}>
                  <div className={styles.imagenWrapper}>
                    <Image
                      src={item.producto.imagen}
                      alt={item.producto.nombre}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className={styles.info}>
                    <p className={styles.nombre}>{item.producto.nombre}</p>
                    <p className={styles.marca}>{item.producto.marca}</p>
                    {item.ml && <p className={styles.ml}>{item.ml} ml</p>}
                  </div>
                  <div className={styles.cantidad}>
                    <button
                      onClick={() =>
                        cambiarCantidad(item.id, item.ml, item.cantidad - 1)
                      }
                    >
                      −
                    </button>
                    <span>{item.cantidad}</span>
                    <button
                      onClick={() =>
                        cambiarCantidad(item.id, item.ml, item.cantidad + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className={styles.subtotal}>${subtotal}</p>
                  <button
                    className={styles.eliminar}
                    onClick={() => quitarDelCarrito(item.id, item.ml)}
                  >
                    Eliminar
                  </button>
                </div>
              );
            })}
          </div>
          <div className={styles.resumen}>
            <p className={styles.total}>Total: ${totalFormateado}</p>
          </div>
        </>
      )}
    </main>
  );
}