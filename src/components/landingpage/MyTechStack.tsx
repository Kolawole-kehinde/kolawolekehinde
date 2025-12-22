"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { techStackIcons } from "@/src/constant";
import TitleHeader from "../TitleHeader";

const TechIconCardExperience = dynamic(
  () => import("../TechIconCardExperience"),
  { ssr: false }
);

export default function TechStack() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const el = document.getElementById("skills");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="flex-center section-padding mt-10 mb-20">
      <div className="w-full h-full md:px-10">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        {inView && (
          <div className="tech-grid">
            {techStackIcons.map((tech) => (
              <div
                key={tech.name}
                className="card-border tech-card overflow-hidden group rounded-4xl lg:rounded-full"
              >
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content">
                  <div className="tech-icon-wrapper">
                    <TechIconCardExperience model={tech} />
                  </div>
                  <div className="padding-x w-full">
                    <p>{tech.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
