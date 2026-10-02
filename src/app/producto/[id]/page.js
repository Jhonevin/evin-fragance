import { productos } from "@/data/products";
import ProductDetail from "@/components/product/ProductDetail";
import Link from "next/link";

export default async function ProductoDetalle({ params }) {
  const { id } = await params;
  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return (
      <main style={{ padding: "var(--space-xl)", textAlign: "center" }}>
        <h1>Producto no encontrado</h1>
        <p style={{ color: "var(--color-text-secondary)", margin: "var(--space-md) 0" }}>
          El perfume que buscas no existe o fue removido del catálogo.
        </p>
        <Link href="/" style={{ color: "var(--color-primary)" }}>← Volver al inicio</Link>
      </main>
    );
  }

  return <ProductDetail producto={producto} />;
}