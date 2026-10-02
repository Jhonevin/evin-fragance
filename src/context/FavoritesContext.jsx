"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);
  const [cargado, setCargado] = useState(false);

  // Al montar la app, lee lo que ya estaba guardado en el navegador
  useEffect(() => {
    const guardados = localStorage.getItem("evin-fragance-favoritos");
    if (guardados) {
      setFavoritos(JSON.parse(guardados));
    }
    setCargado(true);
  }, []);

  // Cada vez que cambian los favoritos, los guarda en el navegador
  useEffect(() => {
    if (cargado) {
      localStorage.setItem("evin-fragance-favoritos", JSON.stringify(favoritos));
    }
  }, [favoritos, cargado]);

  function toggleFavorito(id) {
    setFavoritos((actuales) =>
      actuales.includes(id) ? actuales.filter((f) => f !== id) : [...actuales, id]
    );
  }

  function esFavorito(id) {
    return favoritos.includes(id);
  }

  return (
    <FavoritesContext.Provider value={{ favoritos, toggleFavorito, esFavorito }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritos() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavoritos debe usarse dentro de FavoritesProvider");
  }
  return context;
}