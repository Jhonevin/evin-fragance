import { productos } from "@/data/products";
import CatalogGrid from "@/components/product/CatalogGrid";

export default function Ofertas() {
  const filtrados = productos.filter((p) => p.enOferta);
  return (
    <CatalogGrid
      titulo="Ofertas"
      subtitulo="Hasta 50% de descuento en fragancias seleccionadas"
      productos={filtrados}
    />
  );
}