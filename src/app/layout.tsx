import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Triz Agency — Estratégia, criação e performance",
  description: "Gestão de mídia paga orientada por dados. Planejamos, criamos, analisamos e otimizamos campanhas com foco em performance.",
  other: {
    "facebook-domain-verification": "koq3u1wuwyf3scyrkbgfmyam6ch6bu",
  },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Script
          id="meta-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1050348320347233');
              fbq('track', 'PageView');
            `,
          }}
        />
      </body>
      <GoogleAnalytics gaId="G-G7THS1FJPZ" />
    </html>
  );
}
