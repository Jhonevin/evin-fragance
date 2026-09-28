import "./globals.css";

    export const metadata = {
      title: "Evin mirnadl",
      description: "Perfumería de lujo",
    };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
    
  );
}