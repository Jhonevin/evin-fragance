"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    const guardado = localStorage.getItem("evin-fragance-carrito");
    if (guardado) setCarrito(JSON.parse(guardado));
    setCargado(true);
  }, []);

  useEffect(() => {
    if (cargado) {
      localStorage.setItem("evin-fragance-carrito", JSON.stringify(carrito));
    }
  }, [carrito, cargado]);

  function agregarAlCarrito(producto, ml, cantidad = 1) {
    setCarrito((actual) => {
      const existente = actual.find(
        (item) => item.id === producto.id && item.ml === ml
      );
      if (existente) {
        return actual.map((item) =>
          item.id === producto.id && item.ml === ml
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }
      return [...actual, { id: producto.id, ml, cantidad }];
    });
  }

  function quitarDelCarrito(id, ml) {
    setCarrito((actual) =>
      actual.filter((item) => !(item.id === id && item.ml === ml))
    );
  }

  function cambiarCantidad(id, ml, nuevaCantidad) {
    setCarrito((actual) =>
      actual.map((item) =>
        item.id === id && item.ml === ml
          ? { ...item, cantidad: Math.max(1, nuevaCantidad) }
          : item
      )
    );
  }

  const totalItems = carrito.reduce((s, i) => s + i.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ carrito, agregarAlCarrito, quitarDelCarrito, cambiarCantidad, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCarrito() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCarrito debe usarse dentro de CartProvider");
  }
  return context;
}