export const portfolioData = {
  personal: {
    name: "Md. Atiqur Rahman",
    role: "CSE Graduate • Software Engineering • Aspiring Software Developer & Product Enthusiast",
    status: "Open for Software Engineering & Product Thinking Roles",
    tagline: "Recent CSE graduate from East West University with a passion for building things and solving real-world problems. Currently looking for opportunities in software development and product-focused roles.",
    education: "Bachelor of Science in Computer Science & Engineering (Major: Software Engineering), East West University, Dhaka, Bangladesh (2026)",
    location: "Dhaka, Bangladesh",
    phone: "01721885491",
    email: "atiqurrahmandiptojob@gmail.com",
    github: "https://github.com/atiqurrahmandipto",
    linkedin: "https://www.linkedin.com/in/atiqurrahmandipto"
  },
  metrics: [
    { number: "2026", label: "B.Sc. in CSE Graduate", sub: "East West University (Software Engineering Major)" },
    { number: "2", label: "Languages Spoken", sub: "Bangla & English" }
  ],
  skills: [
    { name: "React.js / Next.js & Frontend", level: "Web Development", category: "languages", tags: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3"] },
    { name: "Flutter & Kotlin", level: "Mobile Development", category: "languages", tags: ["Flutter", "Kotlin", "Android Studio"] },
    { name: "Python & Java", level: "Core Logic & OOP", category: "languages", tags: ["Python", "Java", "OOP Design"] },
    { name: "PHP & C", level: "Backend & Systems", category: "languages", tags: ["PHP", "C", "Web Services"] },
    { name: "AI Tools & Prompt Engineering", level: "Agent Tooling & Workflow", category: "aitools", tags: ["Prompt Engineering", "Cursor", "GitHub Copilot", "Antigravity", "Claude", "ChatGPT"] },
    { name: "SQL & Data Analysis", level: "Data & Research", category: "data", tags: ["SQL", "Google Sheets / Excel", "Google Forms", "Basic Data Analysis"] },
    { name: "Git, GitHub & Platforms", level: "Engineering Workflow", category: "aitools", tags: ["Git", "GitHub", "Jira", "VS Code", "Figma"] },
    { name: "Product Thinking & PRD", level: "Core Competency", category: "product", tags: ["PRD Writing", "Task Sequencing", "Problem Identification", "MVP Scoping", "Gap Analysis"] }
  ],
  projects: [
    {
      id: "project-1",
      title: "Kids Book — AI-Powered Bilingual Learning App for Children",
      category: "mobile ai",
      badge: "AI & EdTech • Mobile Prototype on GitHub",
      summary: "A bilingual (Bangla & English) self-learning application for children in Class 1–3, featuring an AI-powered adaptive layer for personalized content delivery. Early prototype built & published on GitHub.",
      image: "/assets/project1.svg",
      tech: ["Flutter", "Kotlin", "Python", "AI Adaptive Layer", "Android Studio", "GitHub"],
      metrics: [
        { val: "Class 1–3", lbl: "Curriculum Alignment" },
        { val: "Bilingual", lbl: "Bangla & English Content" },
        { val: "GitHub", lbl: "Working Prototype Published" },
        { val: "In Dev", lbl: "AI Layer Integration" }
      ],
      features: [
        "Bilingual self-learning modules tailored specifically for children in Class 1–3.",
        "Curriculum-aligned gamified lessons enabling independent progression.",
        "AI-powered adaptive layer for personalized content delivery based on child progress.",
        "Working prototype published on GitHub with ongoing developer collaboration for full AI integration."
      ],
      demoUrl: "https://github.com/atiqurrahmandipto",
      repoUrl: "https://github.com/atiqurrahmandipto"
    },
    {
      id: "project-2",
      title: "Digital Wedding Planning Platform (Bangladesh)",
      category: "product",
      badge: "Product Strategy • 82-Feature MVP Spec Complete",
      summary: "Centralized platform to organize Bangladesh's unorganized wedding planning. Wrote a detailed 82-feature MVP specification covering workspace permissions, guest management, and pre-launch gap analysis.",
      image: "/assets/project2.svg",
      tech: ["Product Strategy", "MVP Specification", "System Design", "Gap Analysis", "Figma"],
      metrics: [
        { val: "82 Features", lbl: "Detailed MVP Spec Written" },
        { val: "De-Risked", lbl: "Pre-Launch Gap Analysis" },
        { val: "Full Scope", lbl: "Workspace & Permissions" },
        { val: "Tokens", lbl: "Secure Invitation Flow" }
      ],
      features: [
        "82-feature MVP specification covering workspace/permissions model, guest management, and event lifecycles.",
        "Designed tokenized invitation system for RSVP tracking and guest entry validation.",
        "Conducted pre-launch gap analysis identifying key risks (guest limits, auth recovery, RSVP flow, UX gaps).",
        "Assessed business model viability and operational feasibility before development."
      ],
      demoUrl: "https://github.com/atiqurrahmandipto",
      repoUrl: "https://github.com/atiqurrahmandipto"
    },
    {
      id: "project-3",
      title: "Aabadi — D2C E-Commerce & Traceability",
      category: "ecommerce",
      badge: "D2C Brand • E-Commerce & Traceability",
      summary: "Direct-to-consumer food brand sourcing cold-pressed mustard oil directly from Jamalpur farmers. Features a consumer-facing traceability system so buyers can verify batch authenticity and origin.",
      image: "/assets/project3.svg",
      tech: ["JavaScript", "HTML/CSS", "PHP / Python", "SQL", "E-Commerce", "D2C Sourcing"],
      metrics: [
        { val: "Jamalpur", lbl: "Direct Farmer Sourcing Origin" },
        { val: "100% Pure", lbl: "Cold-Pressed Quality Control" },
        { val: "Dhaka", lbl: "Target Urban Homemaker Market" },
        { val: "Traceable", lbl: "Consumer Batch Verification" }
      ],
      features: [
        "D2C supply chain connecting Jamalpur mustard farmers directly with urban Dhaka families.",
        "Consumer-facing batch traceability feature enabling buyers to verify harvest date, press batch, and purity.",
        "Quality-controlled, process-owned brand in the daily cooking essentials segment.",
        "Scalable e-commerce web platform with batch tracking and order workflows."
      ],
      demoUrl: "https://github.com/atiqurrahmandipto",
      repoUrl: "https://github.com/atiqurrahmandipto"
    }
  ],
  leadership: [
    {
      role: "Technical & Website Planning Advisor",
      organization: "Early-Stage University Entrepreneurship Advisory",
      period: "University Leadership",
      bullets: [
        "Advised an early-stage entrepreneur on tech stack selection, third-party services, and UI/UX design direction based on actual budget and business needs before development.",
        "Ensured budget efficiency and prevented premature technical complexity."
      ]
    },
    {
      role: "Project Scoping & Feature Lead",
      organization: "Academic & Collaborative Projects",
      period: "Project Leadership",
      bullets: [
        "Broke down complex group project ideas into structured, actionable engineering phases with clear scopes and task sequencing.",
        "Led feature scoping discussions weighing usability and technical feasibility over theoretical solutions."
      ]
    }
  ]
};
