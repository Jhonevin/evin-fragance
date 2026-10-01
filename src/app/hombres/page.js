import { productos } from "@/data/products";
import CatalogView from "@/components/product/CatalogView";

export default function Hombres() {
  const filtrados = productos.filter((p) => p.categoria === "hombres");
  return <CatalogView titulo="Hombres" productos={filtrados} />;
}