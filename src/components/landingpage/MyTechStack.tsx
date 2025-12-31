"use client";

import { Fade } from "react-awesome-reveal";
import TitleHeader from "../TitleHeader";
import { techStack } from "@/src/constant/techStack";
import TechCard from "../TechIconCardExperience";

const TechStack = () => {
  const items = [...techStack, ...techStack];

  return (
    <section id="tech-stack" className="section-padding mt-12 mb-20">
      <div className="max-w-6xl mx-auto px-4">
        <Fade direction="up" triggerOnce>
          <TitleHeader
            title="How I Can Contribute & My Key Skills"
            sub=" What I Bring to the Table"
          />
        </Fade>

        <Fade direction="up" delay={200} triggerOnce>
          <div className="mt-12 marquee-wrapper">
            <div className="marquee gap-6">
              {items.map((tech, i) => (
                <TechCard
                  key={`${tech.name}-${i}`}
                  name={tech.name}
                  image={tech.image}
                  color={tech.color}
                />
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default TechStack;
