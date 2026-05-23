import { t40, upwork, gaotek } from "@public/experience";
import { ntic, atbu } from "@public/sources";

export const experiences = [
  {
    id: 0,
    role: "Frontend Developer",
    company: "DAXAP AS",
    date: "June 2025 – May 2026",
    type: "Full-time",
    icon: "",
    desc: "Built and shipped production features for two multilingual civic-tech platforms, Kiddy and Vibori, using React, Next.js, and TypeScript. Developed scalable multilingual support across 10 languages, improved accessibility to WCAG AA standards, optimized performance on low-end devices, and implemented real-time communication features that significantly enhanced engagement and accessibility for immigrant and non-native-speaking communities in Norway. Also built reusable UI components and community-focused features like event discovery, subscriptions, and Google Maps integration.",
  },
  {
    id: 1,
    role: "Software Engineer",
    company: "T40 Technologies",
    date: "January 2024 – June 2025",
    type: "Full-time",
    icon: t40,
    desc: "Core frontend engineer on intercity.ng, a travel-tech platform for booking bus tickets, parcels, and vehicle charters across 100+ Nigerian transport operators, including companion mobile apps. I built and owned end-to-end core product flows using React, Next.js, and TypeScript, covering ticket booking, parcel delivery, vehicle charters, reviews, and community features. I developed the main multi-step booking funnel (search, compare operators, passenger details, payment, and ticket issuance), which handled the platform’s highest traffic. I also integrated multiple payment providers such as Paystack, Monnify, and Nomba alongside various operator APIs, ensuring reliable real-money transactions with proper failure handling. In addition, I improved performance and Core Web Vitals through techniques like code splitting, lazy loading, and image optimization, which was especially important for low-bandwidth users. I built a reusable and accessible component system shared across web and mobile webviews to maintain UI consistency and speed up development, and implemented optimized search and filtering with debouncing and caching to reduce API load and improve response times.",
  },
  {
    id: 2,
    role: "Full Stack Engineer (Frontend)",
    company: "Alpharithm Investments",
    icon: "",
    date: "March 2025 – April 2025",
    type: "Contract",
    desc: "Translated complex UI/UX designs into reusable, scalable frontend components and improved application performance through code optimization, lazy loading, and efficient state management. Ensured cross-browser compatibility and full mobile responsiveness across all products while collaborating with cross-functional teams through code reviews and agile workflows. Also implemented authentication systems using JWT and OAuth, set up CI/CD pipelines with Docker, and handled deployments across AWS, Vercel, Railway, and Render.",
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "IAB CODES LTD",
    icon: "",
    date: "November 2024 – February 2025",
    type: "Contract",
    desc: "Next.js, TypeScript, and Node end-to-end: REST APIs wired to the frontend, JWT-based auth, performance tuning across devices, cloud deployments for scale, and agile collaboration with code reviews.",
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "Dijix Global Solutions",
    icon: "",
    date: "March 2024 – October 2024",
    type: "Contract",
    desc: "React and Redux frontends: reusable components, performance and responsiveness, and tight collaboration with design and backend for production-ready features.",
  },

] as const;

export const education = [
  {
    id: 0,
    img: atbu,
    school: "Abubakar Tafawa Balewa University",
    date: "2016 – 2021",
    grade: "4.16 CGPA",
    desc: "",
    degree: "Bachelors of Engineering",
  }
] as const;
