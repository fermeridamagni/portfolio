import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "./providers";

import { fontText, fontTitle } from "@/resources/fonts/config.fonts";
import "@/resources/styles/globals.css";

export const metadata = {
  title: "Fer Merida | Portfolio",
  description:
    "My name is Fer Merida and I'm software developer, this is my portfolio!",
  author: "Fer Merida | https://fermeridamagni.github.io/portfolio/",
  keywords:
    "portfolio, fermeridamagni, fermerida, fer merida, fer, merida, software, development, developer, desarrollo, app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <Script src="/resources/lib/jQuery.min.js"></Script>
      </head>
      <body className={`${fontText.variable} ${fontTitle.variable}`}>
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>

        <Script src="https://kit.fontawesome.com/3d7356b300.js"></Script>
        <Script src="/functions/index.js" strategy="lazyOnload"></Script>

        <Analytics />
      </body>
    </html>
  );
}
