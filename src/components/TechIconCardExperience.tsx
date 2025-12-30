"use client";

import Image from "next/image";

type TechCardProps = {
  name: string;
  image: string;
  color: string;
};

const TechCard = ({ name, image, color }: TechCardProps) => {
  return (
    <div
      className="
        group relative flex flex-col items-center justify-center mt-10
        w-50 h-60 
        lg:w-52 lg:h-68 
        rounded-[100px]
        bg-white/5 backdrop-blur
        border border-white/10
        transition-all duration-300
        hover:-translate-y-2
      "
    >
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="
          transition-transform duration-700
          group-hover:rotate-360
        "
      />

      <span className="mt-4 text-sm md:text-base text-white/80">
        {name}
      </span>

      {/* color glow */}
      <span
        className="absolute inset-0 rounded-[100px] opacity-0 group-hover:opacity-100 transition"
        style={{
          boxShadow: `0 0 45px ${color}55`,
        }}
      />
    </div>
  );
};

export default TechCard;
