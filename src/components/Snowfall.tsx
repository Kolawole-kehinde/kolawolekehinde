"use client";

import { useEffect, useRef, useState } from "react";

const MAX_FLAKES = 25; // Reduce number for performance

export default function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [inView, setInView] = useState(false);

  // Lazy-load snowfall only when canvas is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (canvasRef.current) observer.observe(canvasRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const snowflakes = Array.from({ length: MAX_FLAKES }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1 + 0.5,
      d: Math.random() + 0.5,
    }));

    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "white";
      ctx.beginPath();
      for (const flake of snowflakes) {
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
      }
      ctx.fill();
      update();
      requestAnimationFrame(draw);
    };

    const update = () => {
      angle += 0.01;
      for (const flake of snowflakes) {
        flake.y += Math.pow(flake.d, 2) + 0.5; // slower movement
        flake.x += Math.sin(angle) * 0.3;

        if (flake.y > height) {
          flake.y = 0;
          flake.x = Math.random() * width;
        }
      }
    };

    draw();

    return () => window.removeEventListener("resize", handleResize);
  }, [inView]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
