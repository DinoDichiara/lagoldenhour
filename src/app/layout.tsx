import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Lumiere Wellness Center — Tu piel, en su mejor versión",
  description:
    "Tratamientos faciales personalizados con técnicas de vanguardia y productos de alta gama. Reservá tu sesión hoy.",
  keywords: [
    "Lumiere Wellness Center",
    "estética facial",
    "tratamientos faciales",
    "limpieza facial",
    "radiofrecuencia",
    "Buenos Aires",
    "skincare",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
