import "@/styles/globals.css";
import localFont from "next/font/local";
const kyiv = localFont({
  src: [
    {
      path: "../public/fonts/KyivTypeSans-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/KyivTypeSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/KyivTypeSans-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/KyivTypeSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/KyivTypeSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/KyivTypeSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/KyivTypeSans-Thin.woff2",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-kyiv", // Digunakan di Tailwind
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${kyiv.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
