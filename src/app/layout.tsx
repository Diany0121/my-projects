import type { Metadata } from "next";
import { ibm_plex_mono } from "./font/font";
import { ibm_plex_sans } from "./font/font";
import "./styles.css";

export const metadata: Metadata = {
  title: "Diany Martínez | Portfolio",
  description: "My web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibm_plex_mono.className} ${ibm_plex_sans.className} antialiased`}>
        {children}</body>
    </html>
  );
}
