import { productos } from "@/data/products";
import CatalogGrid from "@/components/product/CatalogGrid";

export default function Buscar({ searchParams }) {
  const query = (searchParams?.q || "").toLowerCase().trim();

  const resultados = query
    ? productos.filter(
        (p) =>
          p.nombre.toLowerCase().includes(query) ||
          p.marca.toLowerCase().includes(query)
      )
    : [];

  return (
    <CatalogGrid
      titulo={query ? `Resultados para: "${query}"` : "Buscar"}
      subtitulo={
        query
          ? `${resultados.length} producto(s) encontrado(s)`
          : "Escribe algo en el buscador para empezar"
      }
      productos={resultados}
    />
  );
}