"use client";

import { LucideIcon } from "lucide-react";

type TechCardProps = {
  name: string;
  Icon: LucideIcon;
};

const TechCard = ({ name, Icon }: TechCardProps) => {
  return (
    <div
      className="
        group relative flex flex-col items-center justify-center
        w-50 h-50 sm:w-32 sm:h-32
        rounded-2xl
        bg-white/5 backdrop-blur
        border border-white/10
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
      "
    >
      <Icon
        size={50}
        className="
          text-white
          transition-transform duration-500
          group-hover:rotate-[360deg]
        "
      />

      <span className="mt-3 text-xs sm:text-sm text-white/70">
        {name}
      </span>

      {/* subtle glow */}
      <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition shadow-[0_0_40px_rgba(255,255,255,0.08)]" />
    </div>
  );
};

export default TechCard;
