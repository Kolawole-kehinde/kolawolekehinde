"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { words } from "@/src/constant";
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    gsap.to(".wrapper", {
      yPercent: -100 * (words.length - 1),
      repeat: -1,
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
    });
  });

  const scrollToShowcase = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 mt-28 xl:mt-20 min-h-[80vh] flex flex-col xl:flex-row items-center justify-between px-6 md:px-20 gap-12">
        {/* ✅ IMAGE — FIRST ON MOBILE */}
        <div className="order-1 xl:order-2 w-full xl:w-1/2 flex justify-center">
          <Image
            src="/images/heroImg.png"
            alt="Hero Illustration"
            width={500}
            height={390}
            priority
            className="w-full xl:w-[500px] h-auto"
          />
        </div>

        {/* ✅ TEXT — SECOND ON MOBILE */}
        <header className="order-2 xl:order-1 flex flex-col justify-center gap-7 max-w-2xl">
          <div className="hero-text text-2xl md:text-[45px] font-bold leading-[40px] lg:leading-tight">
            <h1>
              Shaping{" "}
              <span className="slide inline-block overflow-hidden align-middle">
                <span className="wrapper flex flex-col">
                  {words.map((word, index) => (
                    <span key={index} className="flex items-center gap-2 pb-2">
                      <Image
                        src={word.imgPath}
                        alt={word.text}
                        width={40}
                        height={40}
                        className="rounded-full bg-white p-1"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <h1 className="text-primary">into Real-World Products</h1>
            <h1>that Create Measurable Impact</h1>
          </div>

          {/* 🔥 Slightly improved role clarity */}
          <p className="text-white/70 md:text-xl max-w-xl">
            Frontend Engineer specializing in React, Next.js & TypeScript
            building scalable, high-performance web applications.
          </p>

          <button
            aria-label="Scroll to portfolio"
            onClick={scrollToShowcase}
            className="cta-button group w-[300px] sm:w-[350px]"
          >
            <div className="bg-circle" />
            <p className="text">Explore My Portfolio</p>
            <div className="arrow-wrapper ml-4">
              <ArrowDown className="size-5 text-black" />
            </div>
          </button>
        </header>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default HeroSection;
