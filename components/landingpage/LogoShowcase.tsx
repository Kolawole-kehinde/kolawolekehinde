"use client";

import Image from "next/image";
import { logoIconsList } from "@/constant";

interface LogoIconType {
  imgPath: string;
}

interface LogoIconProps {
  icon: LogoIconType;
}

const LogoIcon = ({ icon }: LogoIconProps) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <div className="relative w-20 h-20 md:w-24 md:h-24">
        <Image
          src={icon.imgPath}
          alt="company logo"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 80px, 100px"
        />
      </div>
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`logo1-${index}`} icon={icon} />
        ))}
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`logo2-${index}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
