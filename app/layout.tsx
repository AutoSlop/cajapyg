import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CajaPyG — Controla tu caja, PyG y facturación",
  description:
    "CajaPyG le da a tu empresa una vista clara de cuánto gana, cuánto puede gastar y qué debe cobrar, en minutos y sin enredos contables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.className} scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
