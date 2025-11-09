"use client";

import Image from "next/image";
import { techStackIcons } from "@/constant";
import TitleHeader from "../TitleHeader";

const TechStack = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <TitleHeader
        title="My Key Skills & Tools"
        sub="🤝 Technologies I Work With"
      />

      {/* Scrolling wrapper */}
      <div className="mt-10 relative w-full overflow-hidden">
        <div className="tech-marquee flex gap-10 whitespace-nowrap animate-marquee rounded-full">
          {techStackIcons.map((tech) => (
            <div
              key={tech.name}
              className="tech-card group flex flex-col items-center justify-center p-4 rounded-xl bg-gray-900 hover:scale-110 hover:bg-yellow-500 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={tech.imgPath}
                alt={tech.name}
                width={64}
                height={64}
                className="mb-2 object-contain"
              />
              <p className="text-sm font-medium text-white group-hover:text-black">
                {tech.name}
              </p>
            </div>
          ))}

          {/* duplicate for endless effect */}
          {techStackIcons.map((tech) => (
            <div
              key={`${tech.name}-duplicate`}
              className="tech-card group flex flex-col items-center justify-center p-4 rounded-xl bg-gray-900 hover:scale-110 hover:bg-yellow-500 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={tech.imgPath}
                alt={tech.name}
                width={64}
                height={64}
                className="mb-2 object-contain"
              />
              <p className="text-sm font-medium text-white group-hover:text-black">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
