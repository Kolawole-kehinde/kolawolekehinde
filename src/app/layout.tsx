"use client";
import "./globals.css";
import Snowfall from "@/src/components/Snowfall";
import { ReactQueryProvider } from "@/src/providers/providers";
import { Toaster } from "sonner";
import Script from "next/script";
import NavBar from "../components/landingpage/Navbar";
import Footer from "../components/landingpage/footer";

export const metadata = {
  metadataBase: new URL("https://kolawolekehinde.vercel.app/"),
  title: {
    default: "Kolawole Kehinde | Software Developer Building Scalable Web Applications",
    template: "%s | Kolawole Kehinde",
  },
  description:
    "Kolawole Kehinde is a software developer based in Nigeria, building scalable, high-performance web applications and digital products for startups and businesses worldwide.",
  keywords: [
    "Kolawole Kehinde",
    "Software Developer Nigeria",
    "Web Developer Nigeria",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Scalable Web Applications",
    "Remote Software Developer",
    "Digital Product Developer",
    "Portfolio Website",
  ],
  openGraph: {
    title: "Kolawole Kehinde | Software Developer & Web Engineer",
    description:
      "Software developer based in Nigeria, creating scalable, modern web applications and digital products for global clients.",
    url: "https://kolawolekehinde.vercel.app/",
    siteName: "Kolawole Kehinde Portfolio",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Kolawole Kehinde – Software Developer Portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolawole Kehinde | Software Developer Portfolio",
    description:
      "Building scalable web applications and digital products using modern technologies like Next.js and React.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kolawole Kehinde",
              url: "https://kolawolekehinde.vercel.app/",
              sameAs: [
                "https://www.linkedin.com/in/sikiru-kolawole-905308255/",
                "https://github.com/Kolawole-kehinde",
                "https://www.upwork.com/freelancers/~0167908f7b67ed5b45",
              ],
              jobTitle: "Software Developer",
              image: "https://kolawolekehinde.vercel.app/images/og-image.png",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://kolawolekehinde.vercel.app/",
              name: "Kolawole Kehinde Portfolio",
              author: { "@type": "Person", name: "Kolawole Kehinde" },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://kolawolekehinde.vercel.app/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

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
      </head>
      <body className="relative min-h-screen text-white overflow-hidden bg-[#0f0f0f]">
        <div className="relative z-10">
          <NavBar />
          <main>
            <Snowfall />
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </main>
          <Footer />
          <Toaster richColors position="top-right" />
        </div>
      </body>
    </html>
  );
}
