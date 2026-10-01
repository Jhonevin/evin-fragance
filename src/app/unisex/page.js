import { productos } from "@/data/products";
import CatalogGrid from "@/components/product/CatalogGrid";

export default function Unisex() {
  const filtrados = productos.filter((p) => p.categoria === "unisex");
  return <CatalogGrid titulo="Unisex" productos={filtrados} />;
}