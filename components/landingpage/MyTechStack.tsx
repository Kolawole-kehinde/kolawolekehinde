"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "../TitleHeader";
import { techStackIcons } from "@/constant";
import TechIconCardExperience from "../TechIconCardExperience";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <main id="skills" className="flex-center section-padding mt-10 mb-20">
      <div className="w-full h-full md:px-10">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <div className="tech-grid">
          {techStackIcons.map((tech) => (
            <div
              key={tech.name}
              className="card-border tech-card overflow-hidden group xl:rounded-xl rounded-lg"
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
    </main>
  );
};

export default TechStack;
