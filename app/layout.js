import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "SapiKu – Pusat Daging Murah Jakarta",
  description: "SapiKu adalah pusat daging sapi murah dan berkualitas di Jakarta, menyediakan daging segar, beku, hingga produk peternakan untuk kebutuhan harian dan hari besar Anda.",
  keywords: "daging sapi, daging murah, pusat daging jakarta, daging segar, daging beku, jeroan, tetelan, tulang iga, sapiku",
  author: "SapiKu",
  viewport: "width=device-width, initial-scale=1"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased font-poppins`}
      >
        {children}
      </body>
    </html>
  );
}
