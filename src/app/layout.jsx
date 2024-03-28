import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/app/providers";

import {
  fontText,
  fontTitle,
  fontTitleAnton,
} from "@/resources/fonts/fonts.config";
import "@/resources/styles/globals.css";

import { Toaster } from "sonner";

export const metadata = {
  title: "Fer Merida",
  description: "",
  keywords: "",
  auhor: "@fermeridamagni | https://github.com/fermeridamagni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${fontText.variable} ${fontTitle.variable} ${fontTitleAnton.variable} font-text w-full h-full`}
      >
        <Providers>
          <div className="w-full h-full flex flex-col items-center bg-[#ededed] dark:bg-black_primary">
            <Header />

            {children}

            <Toaster richColors closeButton />

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
