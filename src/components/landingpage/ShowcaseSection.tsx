"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type TechStackProps = {
  stack: string[];
};

const TechStack = ({ stack }: TechStackProps) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/70 backdrop-blur"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const rydeRef = useRef<HTMLDivElement | null>(null);
  const libraryRef = useRef<HTMLDivElement | null>(null);
  const ycDirectoryRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* FIRST PROJECT */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <Image
                src="/images/project1.png"
                alt="Ryde App Interface"
                width={600}
                height={400}
              />
            </div>

            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2>

              <p className="text-white-50 md:text-xl">
                A modern ride-hailing app focused on speed, performance, and
                seamless UX.
              </p>

              <TechStack
                stack={[
                  "React Native",
                  "Expo",
                  "TypeScript",
                  "Tailwind CSS",
                  "REST APIs",
                ]}
              />
            </div>
          </div>

          {/* OTHER PROJECTS */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <Image
                  src="/images/project2.png"
                  alt="Library Management Platform"
                  width={500}
                  height={350}
                />
              </div>

              <h2>The Library Management Platform</h2>

              <TechStack
                stack={[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Supabase",
                  "PostgreSQL",
                ]}
              />
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <Image
                  src="/images/project3.png"
                  alt="YC Directory App"
                  width={500}
                  height={350}
                />
              </div>

              <h2>YC Directory – A Startup Showcase App</h2>

              <TechStack
                stack={[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Supabase",
                  "Auth",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
