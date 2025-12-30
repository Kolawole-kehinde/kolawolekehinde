"use client";
import { Star } from "lucide-react";
import { useRef } from "react";

interface GlowCardProps {
  index: number;
  card?: {
    review?: string;
  };
  children: React.ReactNode;
}

const GlowCard = ({ index, card, children }: GlowCardProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const cardEl = cardRefs.current[index];
      if (!cardEl) return;

      const rect = cardEl.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;

      cardEl.style.setProperty("--start", `${angle + 60}`);
    };

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-8 mb-5 relative overflow-hidden"
    >
      <div className="glow pointer-events-none" />


      {/* ⭐ Stars */}
      {card?.review && (
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      )}

      {/* Review text */}
      {card?.review && (
        <p className="text-white-50 text-base leading-relaxed mb-6">
          {card.review}
        </p>
      )}
      {children}
    </div>
  );
};

export default GlowCard;
