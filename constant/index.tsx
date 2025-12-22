const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

const words = [
  { text: "Bold Ideas", imgPath: "/images/ideas.svg" },
  { text: "Smart Concepts", imgPath: "/images/concepts.svg" },
  { text: "Elegant Designs", imgPath: "/images/designs.svg" },
  { text: "Scalable Code", imgPath: "/images/code.svg" },
  { text: "Bold Ideas", imgPath: "/images/ideas.svg" },
  { text: "Smart Concepts", imgPath: "/images/concepts.svg" },
  { text: "Elegant Designs", imgPath: "/images/designs.svg" },
  { text: "Scalable Code", imgPath: "/images/code.svg" },
];


const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  { name: "React Developer", imgPath: "/images/logos/react.png" },
  { name: "Python Developer", imgPath: "/images/logos/python.svg" },
  { name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { name: "Interactive Developer", imgPath: "/images/logos/three.png" },
  { name: "Project Manager", imgPath: "/images/logos/git.svg" },
];


export const techStackIcons = [
  {
    name: "React Js",
    modelPath: "/models/react_logo-transformed.glb",
    scale: [1, 1, 1] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
    imgPath: "/logos/react.png",
  },
  {
    name: "JavaScrip",
    modelPath: "/models/python-transformed.glb",
    scale: [0.8, 0.8, 0.8] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
    imgPath: "/logos/python.png",
  },
  {
    name: "TypeScript",
    modelPath: "/models/node-transformed.glb",
    scale: [5, 5, 5] as [number, number, number],
    rotation: [0, -Math.PI / 2, 0] as [number, number, number],
    imgPath: "/logos/node.png",
  },
  {
    name: "NextJs",
    modelPath: "/models/three.js-transformed.glb",
    scale: [0.05, 0.05, 0.05] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
    imgPath: "/logos/threejs.png",
  },
  {
    name: "Supabase",
    modelPath: "/models/git-svg-transformed.glb",
    scale: [0.05, 0.05, 0.05] as [number, number, number],
    rotation: [0, -Math.PI / 4, 0] as [number, number, number],
    imgPath: "/logos/git.png",
  },
];


const expCards = [
  {
    id: "1",
    company: "AppClick Technology",
    review:
      "Kehinde showed exceptional growth during his time at AppClick Technology, consistently contributing clean, scalable frontend features.",
    imgPath: "/images/appClick.png",
    logoPath: "/images/appClick.png",
    title: "Frontend Development Intern — AppClick Technology",
    date: "2023 – June 2024",
    responsibilities: [
      "Built responsive features using React, JS, Tailwind.",
      "Developed reusable UI components.",
      "Collaborated using Git/GitHub and APIs.",
    ],
  },
  {
    id: "2",
    company: "MyVamsNet Academy",
    review:
      "Kehinde’s time at MyVamsNet Academy strengthened his technical foundation.",
    imgPath: "/images/myvamsnet_logo.png",
    logoPath: "/images/myvamsnet_logo.png",
    title: "Frontend Trainee — MyVamsNet Academy",
    date: "July 2024 – November 2024",
    responsibilities: [
      "Completed training in React, TypeScript and nextjs.",
      "Built multiple real-world projects.",
      "Mastered responsive layouts and UI/UX principles.",
    ],
  },
  {
    id: "3",
    company: "MyVamsNet",
    review:
      "At MyVamsNet, Kehinde contributes to real-world applications with strong attention to detail.",
    imgPath: "/images/myvamsnet_logo.png",
    logoPath: "/images/myvamsnet_logo.png",
    title: "Frontend Development Intern — MyVamsNet",
    date: "November 2024 – Present",
    responsibilities: [
      "Building production-level features in React/Nextjs/TS.",
      "Implementing scalable component structures.",
      "Optimizing performance and patterns.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/appClick.png" },
  { name: "logo2", imgPath: "/images/myvamsnet_logo.png" },
  { name: "logo3", imgPath: "/images/myvamsnet_logo.png" },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Adrian transformed our complex requirements into a seamless functional website.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Fantastic experience! Attention to detail and commitment to quality.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Professional, prompt, and dedicated. Highly recommended!",
    imgPath: "/images/client2.png",
  },
];

const socialImgs = [
  { name: "insta", url: "https://www.instagram.com/", imgPath: "/images/insta.png" },
  { name: "fb", url: "https://www.facebook.com/", imgPath: "/images/fb.png" },
  { name: "x", url: "https://www.x.com/", imgPath: "/images/x.png" },
  { name: "linkedin", url: "https://www.linkedin.com/", imgPath: "/images/linkedin.png" },
];

// ✅ Group exports (everything except techStackIcons)
export {
  words,
  abilities,
  logoIconsList,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackImgs,
  navLinks,
};
