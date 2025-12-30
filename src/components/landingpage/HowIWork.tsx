"use client";

import { Fade } from "react-awesome-reveal";
import TitleHeader from "../TitleHeader";
import GlowCard from "../GlowCard"; // Import your GlowCard

const workPrinciples = [
  {
    icon: "⚡",
    title: "Performance & Optimization",
    desc: "I build fast, efficient UIs and optimize React/Next.js apps for speed.",
  },
  {
    icon: "🎨",
    title: "Accessibility & UX",
    desc: "I ensure interfaces are accessible and intuitive for all users.",
  },
  {
    icon: "🔄",
    title: "Reusable Components",
    desc: "I design scalable, maintainable component libraries to speed up development.",
  },
  {
    icon: "💬",
    title: "Clear Communication",
    desc: "I clarify requirements early and provide transparent updates.",
  },
  {
    icon: "🧪",
    title: "Edge Case Testing",
    desc: "I proactively test for edge cases to avoid bugs in production.",
  },
  {
    icon: "📈",
    title: "Continuous Learning",
    desc: "I keep up with new technologies and best practices to improve my work.",
  },
];

const HowIWork = () => {
  return (
    <section id="how-i-work" className="section-padding mt-20 mb-20">
      <div className="max-w-6xl mx-auto px-4">
        <Fade direction="up" triggerOnce>
          <TitleHeader
            title="How I Work"
            sub="My Approach to Frontend Development"
          />
        </Fade>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workPrinciples.map(({ icon, title, desc }, idx) => (
            <Fade key={idx} direction="up" delay={idx * 100} triggerOnce>
              <GlowCard index={idx}>
                <div className="text-4xl mb-4">{icon}</div>
                <Fade direction="up" delay={150} triggerOnce>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                </Fade>
                <Fade direction="up" delay={300} triggerOnce>
                  <p className="text-white-50">{desc}</p>
                </Fade>
              </GlowCard>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
