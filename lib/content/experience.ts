import { t40, upwork, gaotek } from "@public/experience";
import { ntic, atbu } from "@public/sources";

export const experiences = [
  {
    id: 0,
    role: "Frontend Developer",
    company: "DAXAP AS",
    date: "June 2025 – April 2026",
    type: "Full-time",
    icon: "",
    desc: "Building production UIs with React and Next.js: reusable components from complex designs, performance work (lazy loading, efficient state), REST integrations, and close collaboration in agile delivery. Focus on cross-browser behavior and responsive layouts.",
  },
  {
    id: 1,
    role: "Associate Software Engineer",
    company: "T40 Technologies",
    date: "January 2024 – Present",
    type: "Full-time",
    icon: t40,
    desc: "Developing and maintaining scalable web apps with React and Next.js—translating UI/UX into high-quality components, optimizing load and runtime performance, integrating frontends with backend APIs, and hardening quality through debugging, testing, and cross-device checks.",
  },
  {
    id: 2,
    role: "Full Stack Engineer",
    company: "Alpharithm Investments",
    icon: "",
    date: "March 2025 – April 2025",
    type: "Full-time consultancy",
    desc: "Full-stack delivery with AI-powered services (Node.js, Python): responsive web/mobile interfaces with React and Next.js, scalable backends and REST APIs, PostgreSQL/MySQL/MongoDB schema design, cloud deployments, security-minded auth, and CI/CD with Docker and modern DevOps tooling.",
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "IAB CODES LTD",
    icon: "",
    date: "January 2025 – February 2025",
    type: "Contract",
    desc: "Next.js, TypeScript, and Node end-to-end: REST APIs wired to the frontend, JWT-based auth, performance tuning across devices, cloud deployments for scale, and agile collaboration with code reviews.",
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "Dijix Global Solutions",
    icon: "",
    date: "September 2024 – October 2024",
    type: "Contract",
    desc: "React and Redux frontends: reusable components, performance and responsiveness, and tight collaboration with design and backend for production-ready features.",
  },
  {
    id: 5,
    role: "Freelance Fullstack Developer",
    company: "Independent / Upwork",
    icon: upwork,
    date: "August 2022 – Present",
    type: "Freelance",
    desc: "End-to-end web work for clients—from UI through APIs—tailored solutions, deployment ownership, and ongoing performance care across projects.",
  },
  {
    id: 6,
    role: "HR Intern",
    company: "GAO Tek Inc. USA",
    icon: gaotek,
    date: "August 2022 – March 2023",
    type: "Internship",
    desc: "Remote HR support: applicant comms, screening, scheduling interviews, job postings across career and campus channels, and partnership outreach with academic programs.",
  },
] as const;

export const education = [
  {
    id: 0,
    img: atbu,
    school: "Abubakar Tafawa Balewa University, Bauchi",
    date: "2016 – 2021",
    grade: "4.16 CGPA",
    desc: "Bachelor of Engineering in Civil Engineering with a strong quantitative foundation; transitioned into software engineering for full-stack product work.",
    degree: "B.Eng. Civil Engineering",
  }
] as const;
