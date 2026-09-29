import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {title:"Triz Agency — Estratégia, criação e performance",description:"Gestão de mídia paga orientada por dados. Planejamos, criamos, analisamos e otimizamos campanhas com foco em performance."};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
