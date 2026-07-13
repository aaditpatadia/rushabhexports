import { generalSans } from "@/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  metadataBase: new URL("https://rushabhenterprise.com"),
  title: {
    default: "Rushabh Enterprise: Precision Lubrication & Fastening Components, Rajkot, India",
    template: "%s | Rushabh Enterprise",
  },
  description:
    "Rushabh Enterprise manufactures precision grease nipples, oil cups, grease cups, oil level indicators, industrial nylon knobs and copper rivets from Rajkot, India, in Metric (DIN 71412), BSP (BS1486) and NPT (SAE J534) standards, exporting to Germany, the Middle East, and beyond.",
  keywords: [
    "grease nipple manufacturer India",
    "grease nipple supplier UAE",
    "DIN 71412 manufacturer Rajkot",
    "BSP grease fitting exporter India",
    "precision lubrication components exporter",
    "Rushabh Enterprise",
  ],
  openGraph: {
    title: "Rushabh Enterprise: Precision Lubrication & Fastening Components",
    description:
      "Precision-engineered lubrication and fastening components from Rajkot, India. Metric, BSP and NPT: one manufacturer, every standard.",
    url: "https://rushabhenterprise.com",
    siteName: "Rushabh Enterprise",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${generalSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=hagrid@700,600,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-paper text-forest antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
