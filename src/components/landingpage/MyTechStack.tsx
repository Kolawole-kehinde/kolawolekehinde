"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import TitleHeader from "../TitleHeader";
import { techStackIcons } from "@/src/constant";
import gsap from "gsap";

// Dynamically load Three.js 3D card
const TechIconCardExperience = dynamic(
  () => import("../TechIconCardExperience"),
  { ssr: false }
);

const TechStack = () => {
  // GSAP animation only on client
  useEffect(() => {
    import("gsap/dist/ScrollTrigger").then((ScrollTriggerModule) => {
      const ScrollTrigger = ScrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".tech-card",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: { trigger: "#skills", start: "top 80%" },
        }
      );
    });
  }, []);

  return (
    <section id="skills" className="flex-center section-padding mt-10 mb-20">
      <div className="w-full h-full md:px-10">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

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
      </div>
    </section>
  );
};

export default TechStack;
