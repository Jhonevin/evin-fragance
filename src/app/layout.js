import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Evin Fragance",
  description: "Perfumería de lujo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}