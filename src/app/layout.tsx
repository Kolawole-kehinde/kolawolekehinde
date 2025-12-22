
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/src/components/landingpage/Navbar";
import Footer from "@/src/components/landingpage/footer";
import Snowfall from "@/src/components/Snowfall";
import { ReactQueryProvider } from "@/src/providers/providers";
import { Toaster } from "sonner";

 

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default:
      "Kolawole Kehinde | Software Developer Building Scalable Web Applications",
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

  authors: [{ name: "Kolawole Kehinde" }],
  creator: "Kolawole Kehinde",
  publisher: "Kolawole Kehinde",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://your-domain.com",
  },

  openGraph: {
    title: "Kolawole Kehinde | Software Developer & Web Engineer",
    description:
      "Software developer based in Nigeria, creating scalable, modern web applications and digital products for global clients.",
    url: "https://your-domain.com",
    siteName: "Kolawole Kehinde Portfolio",
    images: [
      {
        url: "/images/og-image.png", // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: "Kolawole Kehinde – Software Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kolawole Kehinde | Software Developer Portfolio",
    description:
      "Building scalable web applications and digital products using modern technologies like Next.js and React.",
    images: ["/images/og-image.png"],
    creator: "@yourTwitterHandle", // optional
  },

  category: "technology",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
