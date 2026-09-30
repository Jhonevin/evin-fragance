export default function Home() {
  return (
    <div style={{ padding: "var(--space-lg)" }}>
      <h1>Evin Fragance</h1>
      <p style={{ color: "var(--color-text-secondary)" }}>
        Fragancias que dejan huella
      </p>
      <button
        style={{
          background: "var(--color-primary)",
          color: "var(--color-background)",
          border: "none",
          borderRadius: "var(--radius-md)",
          padding: "12px 24px",
          fontFamily: "var(--font-body)",
        }}
      >
        Ver colección
      </button>
    </div>
  );
}