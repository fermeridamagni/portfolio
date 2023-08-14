import Link from "next/link";
import Script from "next/script";

import '@/resources/lib/bootstrap.min.css';
import '@/resources/styles/globals.css';
import styles from '@/resources/styles/components/not-found.module.css';
import { fontText, gagalin } from '@/resources/fonts/config.fonts';

import Footer from "@/components/footer";

export default function NotFound() {
  return ( <>
    <html>
      <body className={fontText.variable}>
        <main className={styles.main}>
          <div className={styles.card}>
            <div>
              <h1 className={gagalin.className}><i className="fa-solid fa-xmark"></i> 404 <i className="fa-solid fa-xmark"></i></h1>
            </div>
            <div>
              <div>
                <h2>No podemos encontrar la página que estás buscando.</h2>
              </div>
            </div>
            <div>
              <p>Puede que la URL esté mal escrita o ya no esté disponible.</p>
            </div>
            <div>
              <Link href="/" className="btn btn-dark btn-lg">Volver a inicio <i className="fa-solid fa-house"></i></Link>
            </div>
          </div>
        </main>

        <Footer/>

        <Script src="https://kit.fontawesome.com/3d7356b300.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload"></Script>
      </body>
    </html>
  </> );
};