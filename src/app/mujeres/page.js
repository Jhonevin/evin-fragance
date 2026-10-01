import { productos } from "@/data/products";
import CatalogGrid from "@/components/product/CatalogGrid";

export default function Mujeres() {
  const filtrados = productos.filter((p) => p.categoria === "mujeres");
  return <CatalogGrid titulo="Mujeres" productos={filtrados} />;
}