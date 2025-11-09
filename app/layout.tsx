import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/landingpage/Navbar";
import Footer from "@/components/landingpage/footer";
import { Toaster } from "sonner";
import Snowfall from "@/components/Snowfall";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A personal portfolio website built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen text-white overflow-hidden bg-[#0f0f0f]">
        
        <div className="relative z-10">
          <NavBar />
          <Snowfall />
          <main>{children}</main>
          <Footer />
        </div>

      </body>
    </html>
  );
}

