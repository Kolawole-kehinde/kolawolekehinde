"use client";

import Image from "next/image";
import { abilities } from "@/src/constant";
import GlowCard from "../GlowCard";
import TitleHeader from "../TitleHeader";
import { Fade } from "react-awesome-reveal";

const HowIWork = () => {
  return (
    <section id="how-i-work" className="w-full padding-x-lg">
        <div className="mb-10">
             <Fade direction="up" triggerOnce>
          <TitleHeader
            title="How I Work"
            sub="My Approach to Frontend Development"
          />
        </Fade>
        </div>
      <div className="mx-auto grid-3-cols">
     
        {abilities.map(({ imgPath, title, desc }, index) => (
          <GlowCard key={title} index={index}>
            <div className="flex flex-col gap-4">
              <div className="size-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur">
                <div className="relative w-10 h-10">
                  <Image
                    src={imgPath}
                    alt={title}
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-white text-2xl font-semibold mt-2">
                {title}
              </h3>

              <p className="text-white-50 text-lg">{desc}</p>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
};

export default HowIWork;
