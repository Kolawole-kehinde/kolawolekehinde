"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowDown } from "lucide-react";
import { words } from "@/src/constant";

const AnimatedCounter = dynamic(() => import("./AnimatedCounter"), {
  ssr: false,
});

const HeroSection = () => {
  useGSAP(() => {
    const runAnimations = () => {
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
      gsap.fromTo(
        ".availability-badge",
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(runAnimations);
    } else {
      setTimeout(runAnimations, 200);
    }
  }, []);

  const scrollToShowcase = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-black text-white">
      <h1 className="sr-only">
        Kolawole Kehinde – Frontend Engineer & Software Developer
      </h1>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg.png"
          alt=""
          fill
          loading="lazy"
          className="object-cover opacity-20"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mt-28 xl:mt-20 min-h-[80vh] flex flex-col xl:flex-row items-center justify-between px-6 md:px-20 gap-12">
        {/* Image */}
        <div className="order-1 xl:order-2 w-full xl:w-1/2 flex justify-center">
          <Image
            src="/images/heroImg.png"
            alt="Kolawole Kehinde – Frontend Engineer Illustration"
            width={500}
            height={390}
            priority
            className="w-full max-w-[500px] h-auto"
          />
        </div>

        {/* Text */}
        <header className="order-2 xl:order-1 flex flex-col justify-center gap-6 max-w-2xl">
          <div className="availability-badge inline-flex items-center gap-2 w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span>Open to Remote Roles</span>
          </div>

          {/* Headline */}
          <div className="hero-text text-2xl md:text-[45px] font-bold leading-10 md:leading-tight">
            <h2>
              Shaping{" "}
              <span className="slide inline-block overflow-hidden align-middle h-12 md:h-14">
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
            </h2>

            <h2 className="text-primary">into Real-World Products</h2>
            <h2>that Create Measurable Impact</h2>
          </div>

          {/* Subtitle */}
          <p className="text-white/70 md:text-xl max-w-xl">
            Hi, I’m <strong>Kolawole Kehinde</strong>, a Frontend Engineer based in Nigeria, specializing in React, Next.js & TypeScript
            building scalable, high-performance web applications.
          </p>

          {/* CTA */}
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

      {/* Stats (lazy) */}
      <AnimatedCounter />
    </section>
  );
};

export default HeroSection;
