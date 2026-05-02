export const howIWorkItems = [
  {
    id: "remote-async",
    name: "Remote-first & async",
    subtitle: "Clear writing · low-meeting culture",
    detail:
      "Comfortable across time zones with overlap windows for real-time work. I default to written specs, decisions, and updates so teams stay unblocked without waiting on calls.",
    icon: "globe2" as const,
  },
  {
    id: "ownership",
    name: "Ownership & delivery",
    subtitle: "From spec to production",
    detail:
      "I take features from ambiguous brief to live release: clarifying requirements, shipping in small slices, and following through with monitoring and post-release fixes.",
    icon: "target" as const,
  },
  {
    id: "code-quality",
    name: "Code quality",
    subtitle: "Typed · tested · reviewed",
    detail:
      "Strong TypeScript, automated tests, and CI gates with SonarQube/ESLint. Pull requests with clear context, small diffs, and explicit trade-offs.",
    icon: "shieldCheck" as const,
  },
  {
    id: "collaboration",
    name: "Collaboration",
    subtitle: "PR reviews · design syncs · pairing",
    detail:
      "I work closely with backend, design, and product. Constructive code reviews, shared ownership of outcomes, and pairing when a problem benefits from a second perspective.",
    icon: "users" as const,
  },
  {
    id: "performance",
    name: "Performance mindset",
    subtitle: "Web vitals · bundle hygiene · a11y",
    detail:
      "I measure before optimizing: Core Web Vitals, bundle analysis, and accessibility audits. Fast, inclusive interfaces are a feature, not an afterthought.",
    icon: "gauge" as const,
  },
  {
    id: "continuous-learning",
    name: "Continuous learning",
    subtitle: "AI-assisted workflows · RFCs · retros",
    detail:
      "I integrate AI tooling, write RFCs for non-trivial decisions, and run retros to compound improvements. The stack changes—how I learn it does not.",
    icon: "bookOpen" as const,
  },
] as const;
