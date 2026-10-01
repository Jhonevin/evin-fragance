import { productos } from "@/data/products";
import CatalogView from "@/components/product/CatalogView";

export default function Mujeres() {
  const filtrados = productos.filter((p) => p.categoria === "mujeres");
  return <CatalogView titulo="Mujeres" productos={filtrados} />;
}