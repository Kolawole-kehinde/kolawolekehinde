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
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
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

  // 👇 Scroll function
  const scrollToShowcase = () => {
    const section = document.getElementById("work");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg.png"
          alt="background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 xl:mt-20 mt-32 md:h-dvh h-[80vh] flex flex-col xl:flex-row items-center justify-between px-6 md:px-20">
        {/* LEFT: Text Section */}
        <header className="flex flex-col justify-center gap-7 max-w-2xl">
          <div className="hero-text text-2xl md:text-[45px] font-bold leading-tight">
            <h1>
              Shaping{" "}
              <span className="slide inline-block overflow-hidden align-middle">
                <span className="wrapper flex flex-col">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <Image
                        src={word.imgPath}
                        alt="icon"
                        width={48}
                        height={48}
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white"
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

          <p className="text-white/70 md:text-xl max-w-xl">
            I’m Kolawole Kehinde, a software developer based in Nigeria, building scalable,
            high-performance web applications and digital products for startups and
            businesses worldwide.
          </p>


          {/* CTA Button */}
          <button
            onClick={scrollToShowcase}
            className="cta-button group disabled:opacity-60 w-[350px]"
          >
            <div className="bg-circle" />
            <p className="text">Explore My Portfolio  </p>
            <div className="arrow-wrapper ml-4">
              <ArrowDown className="size-5 text-black" strokeWidth={2.2} />
            </div>
          </button>
        </header>

        {/* RIGHT: Illustration */}
        <div className="hidden xl:flex justify-center items-center w-1/2">
          <Image
            src="/images/heroImg.png"
            alt="hero illustration"
            width={499}
            height={388}
            className="object-contain"
          />
        </div>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default HeroSection;
