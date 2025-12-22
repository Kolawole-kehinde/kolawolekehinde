import "./globals.css";
import { ReactNode } from "react";
import { metadata as siteMetadata } from "../app/metadata";
import ClientLayout from "./client-layout";

export const metadata = siteMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* You can add server-side <head> tags if needed */}
      </head>
      <body className="relative min-h-screen text-white overflow-hidden bg-[#0f0f0f]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
