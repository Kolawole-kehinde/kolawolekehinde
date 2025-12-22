"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { ReactQueryProvider } from "@/src/providers/providers";
import { Toaster } from "sonner";
import Script from "next/script";

// Dynamic imports for client-only components
const Snowfall = dynamic(() => import("../components/Snowfall"), { ssr: false });
const NavBar = dynamic(() => import("../components/landingpage/Navbar"), { ssr: false });
const Footer = dynamic(() => import("../components/landingpage/footer"), { ssr: false });

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10">
      <NavBar />
      <main>
        <Snowfall />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </main>
      <Footer />
      <Toaster richColors position="top-right" />

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `,
        }}
      />
    </div>
  );
}
