import { productos } from "@/data/products";
import CatalogGrid from "@/components/product/CatalogGrid";

export default function Novedades() {
  const filtrados = productos.filter((p) => p.esNuevo);
  return (
    <CatalogGrid
      titulo="Novedades"
      subtitulo="Las fragancias más recientes de nuestra colección"
      productos={filtrados}
    />
  );
}