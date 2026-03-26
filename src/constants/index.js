export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Resumind – AI Resume Analyzer",
    desc: "Resumind is an ATS-style resume analysis platform that allows users to upload resumes and receive compatibility scores and AI-powered feedback to improve their chances for specific job roles.",
    subdesc:
      "Built using React, TypeScript, and TailwindCSS with Puter services for authentication, file storage, and AI processing. The platform analyzes resumes against job descriptions and provides relevance scoring and improvement suggestions.",
    href: "https://resumind-eta.vercel.app",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#1E1E2F",
      border: "0.2px solid #2B2B45",
      boxShadow: "0px 0px 60px 0px #4F46E54D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      }
    ],
  },
  {
    title: "Online Judge Platform",
    desc: "A scalable full-stack online judge platform that allows users to create coding problems, submit solutions, and receive automated evaluation based on predefined test cases.",
    subdesc:
      "Developed during my Software Development Externship at Algo University. Built using React for the frontend and Node.js with Express for backend services, with secure containerized code execution using Docker and deployment on Render.",
    href: "#",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/node.png",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/express.png",
      },
      {
        id: 4,
        name: "Docker",
        path: "/assets/docker.png",
      },
    ],
  },
  {
  title: "3D Developer Portfolio Website",
  desc: "An interactive 3D portfolio website showcasing my projects, skills, and experience through immersive visuals and smooth animations.",
  subdesc:
    "Built using React, Three.js, and React Three Fiber, inspired by modern web design practices. Implemented 3D models, camera controls, and responsive UI to create an engaging user experience. Focused on performance optimization, component-based architecture, and clean UI/UX design.",
  href: "#",
  texture: "/textures/project/project3.mp4",
  logo: "/assets/project-logo3.png",
  logoStyle: {
    backgroundColor: "#0E1F38",
    border: "0.2px solid #0E2D58",
    boxShadow: "0px 0px 60px 0px #2F67B64D",
  },
  spotlight: "/assets/spotlight3.png",
  tags: [
    {
      id: 1,
      name: "React",
      path: "/assets/react.svg",
    },
    {
      id: 2,
      name: "Three.js",
      path: "/assets/threejs.png",
    },
    {
      id: 3,
      name: "Tailwind CSS",
      path: "/assets/tailwindcss.png",
    },
  ],
  },
  {
  title: "Trustworthy AI — Adversarial Attacks & Explainability",
  desc: "A research-grade pipeline exploring vulnerabilities in deep learning image classifiers through adversarial attacks and AI explainability techniques.",
  subdesc:
    "Built with Python and PyTorch, implementing 6 attack methods (FGSM, PGD, C&W, DeepFool, Targeted, UAP) and 4 XAI techniques (GradCAM, Integrated Gradients, LIME, SHAP) across 5 pretrained CNN architectures. Includes a live Gradio interface, cross-model robustness benchmarking, and automated report generation.",
  href: "https://github.com/lucifer4330k/Trustworthy-Artificial-Intelligence",
  texture: "/textures/project/project4.mp4",
  logo: "/assets/project-logo4.png",
  logoStyle: {
    backgroundColor: "#1A0E2E",
    border: "0.2px solid #3B1F6A",
    boxShadow: "0px 0px 60px 0px #6B3FBF4D",
  },
  spotlight: "/assets/spotlight4.png",
  tags: [
    {
      id: 1,
      name: "Python",
      path: "/assets/python.svg",
    },
    {
      id: 2,
      name: "PyTorch",
      path: "/assets/pytorch.png",
    },
    {
      id: 3,
      name: "Gradio",
      path: "/assets/gradio.png",
    },
  ],
  },
  {
  title: "Nova-X — 3D Obstacle Game",
  desc: "An interactive 3D space-themed obstacle game where players control a rolling ball and navigate through dynamic challenges using real-time physics.",
  subdesc:
    "Built with React, Three.js (React Three Fiber), and Rapier physics, featuring smooth animations, collision handling, and immersive gameplay. Includes a modular component-based architecture, responsive controls, and optimized rendering for real-time performance.",
  href: "https://github.com/Madhuri36/Nova-X",
  texture: "/textures/project/project5.mp4",
  logo: "/assets/project-logo5.png",
  logoStyle: {
    backgroundColor: "#0A1A2F",
    border: "0.2px solid #1F3B6A",
    boxShadow: "0px 0px 60px 0px #3F6BBF4D",
  },
  spotlight: "/assets/spotlight5.png",
  tags: [
    {
      id: 1,
      name: "React",
      path: "/assets/react.svg",
    },
    {
      id: 2,
      name: "Three.js",
      path: "/assets/threejs.png",
    },
    {
      id: 3,
      name: "Tailwind CSS",
      path: "/assets/tailwindcss.png",
    },
  ],
}
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.055,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -4, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [10, 1, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-62, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};
export const workExperiences = [
  {
    id: 1,
    name: " Algo University (Backed by Y Combinator)",
    pos: "Software Development Extern",
    duration: "Feb 2025 - July 2025",
    title:
      "Developed a scalable online judge platform supporting code submission and automated evaluation. Leveraged React, Node.js, and Docker to build a secure, containerized system deployed on Render.",
    icon: "/assets/AlgoLogo.png",
    animation: "victory",
  }
];
