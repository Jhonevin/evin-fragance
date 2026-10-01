import { productos } from "@/data/products";
import CatalogView from "@/components/product/CatalogView";

export default function Unisex() {
  const filtrados = productos.filter((p) => p.categoria === "unisex");
  return <CatalogView titulo="Unisex" productos={filtrados} />;
}