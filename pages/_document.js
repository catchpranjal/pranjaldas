import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class PranjalDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script
            strategy="lazyOnload"
            src="https://www.googletagmanager.com/gtag/js?id=G-QVVW3WP6VW"
          ></Script>
          <Script id="ga-script" strategy="lazyOnload">
            {`window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date()); 
            gtag('config', 'G-QVVW3WP6VW',{
              page_path: window.location.pathname
            });
            `}
          </Script>
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
