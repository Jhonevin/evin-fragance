import { productos } from "@/data/products";
import CatalogGrid from "@/components/product/CatalogGrid";

export default function Hombres() {
  const filtrados = productos.filter((p) => p.categoria === "hombres");
  return <CatalogGrid titulo="Hombres" productos={filtrados} />;
}