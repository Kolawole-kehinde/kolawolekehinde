import "./globals.css";
import { ReactNode } from "react";
import { metadata as siteMetadata } from "./metadata";
import ClientLayout from "./client-layout";

export const metadata = siteMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head />
      <body className="relative min-h-screen text-white overflow-hidden bg-[#0f0f0f]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
