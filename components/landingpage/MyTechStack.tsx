"use client";

import Image from "next/image";
import { logoIconsList } from "@/constant";
import TitleHeader from "../TitleHeader";

interface Icon {
  name?: string;
  imgPath: string;
}

interface LogoIconProps {
  icon: Icon;
}

const LogoIcon = ({ icon }: LogoIconProps) => {
  return (
    <div className="flex-none flex-center marquee-item hover:scale-110 transition-transform duration-300">
      <Image
        src={icon.imgPath}
        alt={icon.name || "Tech logo"}
        width={100}
        height={100}
        className="object-contain"
        priority
      />
    </div>
  );
};

const TechStack = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <TitleHeader
        title="My Key Skills & Tools"
        sub="🤝 Technologies I Work With"
      />

      {/* Scrolling wrapper */}
      <div className="md:my-2 relative">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="marquee h-52">
          <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList.map((icon, index) => (
              <LogoIcon key={index} icon={icon} />
            ))}

            {/* Duplicate for continuous scroll */}
            {logoIconsList.map((icon, index) => (
              <LogoIcon key={`duplicate-${index}`} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
