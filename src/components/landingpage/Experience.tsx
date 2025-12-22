"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "@/src/constant";
import TitleHeader from "../TitleHeader";
import GlowCard from "../GlowCard";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray<HTMLElement>(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section id="experience" className="flex-center md:mt-20 mt-5 xl:px-0">
      <div className="w-full h-full md:px-20">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-20 relative">
          <div className="relative z-40 xl:space-y-32 space-y-10">
            {expCards?.map((card, index) => (
              <div key={card.id} className="exp-card-wrapper">
                
                {/* LEFT CARD */}
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    {/* FIX: Logo + Company name aligned */}
                    <div className="flex items-center gap-3">
                      <Image
                        src={card.imgPath}
                        alt="exp-img"
                        width={30}
                        height={30}
                      />
                      <p className="font-semibold text-lg">{card.company}</p>
                    </div>
                  </GlowCard>
                </div>

                {/* RIGHT SIDE */}
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText flex xl:gap-20 md:gap-10 relative z-20">

                      {/* FIX: Logo + Company name aligned */}
                    <div className="timeline-logo">
                      <Image
                        src={card.imgPath}
                        alt="exp-img"
                        width={150}
                        height={150}
                      />
                    </div>

                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">Responsibilities</p>

                        <ul className="list-disc mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
