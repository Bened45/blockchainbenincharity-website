import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blockchainbenincharity.com"),
  title: "Blockchain Bénin Charity - La Blockchain au service de l'humain",
  description: "Organisation humanitaire béninoise utilisant la blockchain pour garantir la transparence totale de chaque don.",
  openGraph: {
    title: "Blockchain Bénin Charity",
    description: "La Blockchain au service de l'humain. Transparence totale pour chaque don.",
    url: "https://blockchainbenincharity.com",
    siteName: "Blockchain Bénin Charity",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blockchain Bénin Charity",
    description: "La Blockchain au service de l'humain.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
