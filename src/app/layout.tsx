import "./globals.css";
import { ReactNode } from "react";
import { metadata as siteMetadata } from "./metadata";
import ClientLayout from "./client-layout";
import SeoJsonLd from "./seo-jsonld";

export const metadata = siteMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className="relative min-h-screen text-white overflow-hidden bg-[#0f0f0f]">
        <ClientLayout>
          <SeoJsonLd />
          {children}
          </ClientLayout>
      </body>
    </html>

  );
}
