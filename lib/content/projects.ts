import { 
    aiPrompts,
    precisAi,
    remindly,
    creatifyAI,
    pennyplan,
    coinstream,
    delectable,
    slideTubeAi,
    codraft,
    medimatrix,
    snapsavvy,
    cinehub ,
    shopoholics,
    shelterium,
    nutrimindAI,
    hireIQ,
    slideForge,
    coverflow,
    docupilot
   } from "@public/projects/projectSources";

export type ProjectKind = "frontend" | "backend" | "fullstack";

export type ProjectEndpoint = {
  readonly method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  readonly path: string;
  readonly purpose: string;
};

export const projects = [
   
      {
      id: 0,
      title: "Codraft — Real-time collaboration and document editing",
      description:
        "Collaborative editor with live presence and secure sharing (Liveblocks + Clerk). Shipped end-to-end UI, auth, and persistence—focused on low-latency typing and clear UX under concurrent edits.",
      image: codraft,
      tags: ["Nextjs", "Typescript", "Tailwind", "Sentry", "Liveblocks", "Clerk"],
      category: "web app",
      kind: "frontend" as const,
      github: "https://github.com/engraya/codraft",
      webapp: "https://codraft-io.vercel.app/",
    },
    {
      id: 1,
      title: "Delectable AI — Global recipes, smart search & recipe copilot 🌍🍽️",
      description:
        "Discover dishes from a large recipe catalog with trending picks and cuisine-style browsing. Describe what you want in plain English and AI turns it into search filters (cuisine, diet, intolerances, time, and more). On every recipe, Recipe Copilot is page-aware—ask about substitutions, scaling, simpler steps, or allergy-minded swaps—with requests handled on a backend so API keys stay off the client.",
      image: delectable,
      tags: ["React", "TypeScript", "Tailwind CSS", "Hono", "Gemini"],
      category: "web app",
      kind: "fullstack" as const,
      github: "https://github.com/engraya/Delectable",
      webapp: "https://delectable.vercel.app/",
    },
    {
      id: 2,
      title: "DocuPilot AI — AI-powered document generation platform",
      description:
        "DocuPilot AI is an AI-powered document automation SaaS that eliminates the friction of creating professional documents. Generate resumes, cover letters, proposals, contracts, and more with Gemini AI — then edit, export, and share them instantly.",
      image: docupilot,
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "ShadCn UI",
        "Supabase",
        "Gemini AI",
        "Stripe",
      ],
      category: "web app",
      kind: "fullstack" as const,
      github: "https://github.com/engraya/DocupilotAI",
      webapp: "https://docupilot-ai-seven.vercel.app/",
    },
    {
        id: 3,
        title: "NutriMind AI — Personalized AI nutrition & wellness platform",
        description:
          "NutriMind AI is a full-stack AI nutrition SaaS that adapts to your body, preferences, and lifestyle. Get personalized 7-day meal plans, scan your fridge with AI vision, track macros with real analytics, chat with a 24/7 health assistant, and generate workout plans — all powered by Google Gemini.",
        image: nutrimindAI,
        tags: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "ShadCn UI",
          "Supabase",
          "Gemini AI",
          "Cloudinary",
          "Recharts",
          "Framer Motion",
        ],
        category: "web app",
        kind: "fullstack" as const,
        github: "https://github.com/engraya/NutriMind-AI",
        webapp: "https://nutri-mind-ai-iota.vercel.app/",
      },
      {
        id: 4,
        title: "CoverFlow — AI cover letters tailored to job posts",
        description:
          "CoverFlow AI is an AI-powered cover letter generation platform built to simplify one of the most frustrating parts of the job application process — writing personalized cover letters for every role.",
        image: coverflow,
        tags: ["Next.js", "React", "Tailwind CSS", "GeminiAI", "TypeScript", "ShadCn UI"],
        category: "web app",
        kind: "frontend" as const,
        github: "https://github.com/engraya/CoverFlow",
        webapp: "https://cover-flow.vercel.app/",
      },
    {
      id: 5,  
      title: "SlideForge — AI-Powered Presentation Generator 🧠",
      description:
        "SlideForge transforms any topic into a polished, editable PowerPoint deck in under 30 seconds. Powered by Google Gemini AI and a Python FastAPI backend, it handles multi-language slide generation, async job polling, and one-click .pptx download — all without requiring an account. 🌐💬",
      image: slideForge,
      tags: ["React", "Nextjs", "TailwindCSS", "Typescript", "ShadCn", "Python", "FastAPI", "AI"],
      category: "web app",
      kind: "fullstack" as const,
      github: "https://github.com/engraya/SlideForge",
      webapp: "https://slide-forge123.vercel.app/",
    },
    {
      id: 6,
      title: "Précis — AI-powered article summarizer built for the internet age. 🧠📄⚡",
      description:
        "🌐 Précis is an AI-powered article summarization web application that transforms long-form online content into concise, easy-to-read summaries in seconds.⏳",
      image: precisAi,
      tags: ["React", "Typescript", "TailwindCSS", "Redux Toolkit", "Gemini AI"],
      category: "web app",
      kind: "frontend" as const,
      github: "https://github.com/engraya/Pr-cis",
      webapp: "https://precis-ai-123.vercel.app/",
    },
    {
      id: 7,
      title: "PennyPlan – Smart Finance Management with AI-Powered Insights 💰📊🤖",
      description:
        "Manage your finances effortlessly with AI-powered insights and personalized financial advice",
      image: pennyplan,
      tags: ["Nextjs", "Typescript", "TailwindCSS", "Shadcn UI", "Drizzle", "PostgreSQL", "AI", "Clerk", "NeonDB"],
      category: "web app",
      kind: "fullstack" as const,
      github: "https://github.com/engraya/pennyplan",
      webapp: "https://pennyplan.vercel.app/",
    },
    {
      id: 8,
      title: "Remindly – Smart AI Task & Reminder App to Organize Your Life ⏰📝✅",
      description:
        "Remindly is a focused productivity app that lets you organize tasks into color-coded collections, track completion progress at a glance, and create tasks from plain English",
      image: remindly,
      tags: ["React", "Nextjs", "Typescript", "TailwindCSS", "PostgreSQL", "ShadCnUI", "Clerk", "NeonDB"],
      category: "web app",
      kind: "fullstack" as const,
      github: "https://github.com/engraya/remindly",
      webapp: "https://remindly-io.vercel.app/",  
    },
    {
        id: 9,
      title: "SlideTube-AI – Instantly Turn YouTube Videos into Presentations 🎥➡️",
      description:
        "SlideTube-AI transforms any YouTube video into a professional, editable presentation🌐💬",
      image: slideTubeAi,
      tags: ["React", "Nextjs", "Typescript", "TailwindCSS", "Shadcn UI", "PostgreSQL", "Clerk", "Gemini-AI"],
      category: "web app",
      kind: "frontend" as const,
      github: "https://github.com/engraya/slideTube-ai",
      webapp: "https://slidetube-ai.vercel.app/",
    },
    {
      id: 10,
      title: "HireIQ — Hiring and job discovery platform",
      description:
        "Full-stack Next.js + Express + MongoDB: listings, applications, and discovery flows with React Query on the client. Emphasis on responsive UX and reliable API integration.",
      image: hireIQ,
      tags: ["Nextjs", "Javascript", "Tailwind","React", "Nodejs", "Express", "MongoDB"],
      category: "web app",
      kind: "fullstack" as const,
      github: "https://github.com/engraya/hireIQ",
      webapp: "https://hire-iq-123.vercel.app/",
    },
       {
      id: 11,
      title: "Medimatrix – Patient Record & Appointment Management System 🏥📋🩺",
      description:
        "Manage Patient's records, appointments, and more—all in one place",
      image: medimatrix,
      tags: ["Nextjs", "Typescript", "TailwindCSS", "Shadcn UI", "Appwrite", "Clerk", "Sentry"],
      category: "web app",
      kind: "frontend" as const,
      github: "https://github.com/engraya/medimatrix",
      webapp: "https://medimatrix.vercel.app/",
    },
    {
      id: 12,
      title: "CoinStream – Real-Time Crypto Stats, Market Trends & Coin Insight 💹🪙",
      description:
        "Explore detailed information on a wide range of coins, from market capitalization to trading volume.",
      image: coinstream,
      tags: ["Nextjs", "Typescript", "TailwindCSS"],
      category: "web app",
      kind: "frontend" as const,
      github: "https://github.com/engraya/coinStream",
      webapp: "https://coinstream.vercel.app/",
    },
    {
      id: 13,
      title: "CineHub – Discover Movies & TV Shows from Around the World 🎬🌍✨",
      description:
        "CineHub - your go-to platform to search, filter, and explore trending movies and TV shows from around the globe, powered by TMDB! 🎥🔥",
      image: cinehub,
      tags: ["Nextjs", "Typescript", "TailwindCSS", "HeadlessUI", "React"],
      category: "web app",
      kind: "frontend" as const,
      github: "https://github.com/engraya/cinehub",
      webapp: "https://cinehub-io.vercel.app/",
    },
    {
      id: 14,
      title: "Shelterium – AI Powered Real Estate App",
      description:
        "Shelterium is your AI-powered real estate platform for discovering, renting, and buying properties in Dubai. With intelligent search, smart price analysis, and verified listings — Shelterium makes finding your next home or investment effortless.",
      image: shelterium,
      tags: ["Nextjs", "Typescript", "TailwindCSS", "React", "AI"],
      category: "web app",
      kind: "frontend" as const,
      github: "https://github.com/engraya/Shelterium",
      webapp: "https://shelterium.vercel.app/",
    },
    {
      id: 15,
      title: "Creatify_AI – Instantly Generate SEO-Friendly Content for Web 🧠✍️🚀",
      description:
        "Creatify_AI empowers businesses, marketers, and creators with high-quality, SEO-friendly contents in seconds",
      image: creatifyAI,
      tags: ["React", "Nextjs", "Typescript", "TailwindCSS", "Shadcn UI", "PostgreSQL", "Clerk", "Stripe", "Docker", "Gemini-AI"],
      category: "web app",
      kind: "frontend" as const,
      github: "https://github.com/engraya/creatify_AI",
      webapp: "https://creatify-ai-pro.vercel.app/",
    },
      {
      id: 16,
      title: "Shopoholics – Ecommerce App for Seamless Online Shopping 🛍️🛒⚙️",
      description:
        "Shopoholics, an open-source Fullstack ecommerce app designed to revolutionize your online shopping experience! 🛒",
      image: shopoholics,
      tags: ["Nextjs", "Typescript", "TailwindCSS", "Sanity", "Stripe", "ShadCN", "React"],
      category: "web app",
      kind: "frontend" as const,
      github: "https://github.com/engraya/shopoHolics",
      webapp: "https://shopoholics.vercel.app/",
    },
      {
      id: 17,
      title: "Snapsavvy - Optimize your Photos Powered by AI 📷",
      description:
        " AI-powered application designed to revolutionize the way you enhance and restore your photos.",
      image: snapsavvy,
      tags: ["Nextjs", "Typescript", "TailwindCSS", "Shadcn UI", "Stripe", "Unsplash AI", "Clerk", "MongoDB"],
      category: "web app",
      kind: "frontend" as const,
      github: "https://github.com/engraya/SnapSavvy",
      webapp: "https://snapsavvy.vercel.app/",
    },
    {
      id: 18,
      title: "Core Post Backend — blog & engagement API",
      description: "Versioned Express REST API (`/api/v1`) for posts, nested comments, likes, and bookmarks on MongoDB. Users register and verify email via OTP email (Nodemailer); JWT protects mutations, with an extra database-backed verified-email check for write operations. List endpoints support query pagination (`page`), and auth-sensitive routes use express-rate-limit. Vitest and Supertest cover HTTP behavior against MongoDB when available.",
      image: aiPrompts,
      tags: [
        "Node.js",
        "TypeScript",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Joi",
        "Nodemailer",
        "Vitest"
      ],
      category: "API",
      kind: "backend",
      github: "https://github.com/engraya/core-post-backend",
      apiDocs: null,
      baseUrl: "https://core-post.onrender.com/api/v1",
      _baseUrlNote: "Host appears in README as https://core-post.onrender.com; `/api/v1` is the prefix in src/app.ts. Replace if your deployment differs or README is outdated.",
      auth: "JWT via `Authorization` cookie or `Authorization: Bearer`; email verification enforced with DB check (`isVerified`) on protected writes.",
      deployment: "Documented for Render (render.yaml: npm build + node dist/index.js, PORT 8000); multi-stage Docker image (node:22-alpine) — hosting choice not verified beyond config.",
      endpoints: [
        { "method": "GET", "path": "/", "purpose": "JSON hello / basic liveness response." },
        { "method": "POST", "path": "/api/v1/auth/register", "purpose": "Create account (rate-limited)." },
        { "method": "POST", "path": "/api/v1/auth/login", "purpose": "Authenticate and obtain JWT (rate-limited)." },
        { "method": "POST", "path": "/api/v1/auth/logout", "purpose": "Logout for authenticated user." },
        { "method": "PATCH", "path": "/api/v1/auth/verify-account", "purpose": "Confirm email with verification code (rate-limited)." },
        { "method": "GET", "path": "/api/v1/posts", "purpose": "Paginated list of posts (`page` query)." },
        { "method": "GET", "path": "/api/v1/posts/:_id", "purpose": "Single post; optional JWT enriches liked/bookmarked-by-me flags." },
        { "method": "POST", "path": "/api/v1/posts/create", "purpose": "Create post (authenticated + verified)." },
        { "method": "GET", "path": "/api/v1/posts/:postId/comments", "purpose": "Paginated comments for a post." },
        { "method": "POST", "path": "/api/v1/posts/:postId/like", "purpose": "Like a post (authenticated + verified)." },
        { "method": "GET", "path": "/api/v1/posts/:postId/likes/count", "purpose": "Public like count for a post." },
        { "method": "PATCH", "path": "/api/v1/users/me", "purpose": "Update current user profile (authenticated)." },
        { "method": "GET", "path": "/api/v1/users/me/bookmarks", "purpose": "Paginated saved posts for current user." },
        { "method": "GET", "path": "/api/v1/users/:id", "purpose": "User profile with posts." }
      ],
      architectureSummary: [
        "`createApp()` in src/app.ts mounts versioned routers under `/api/v1` and applies helmet, compression, CORS, cookie-parser, json/urlencoded parsers.",
        "Routers in src/routers/* delegate to controllers in src/controllers/*.",
        "Controllers call services in src/services/*; Joi validation is centralized in src/utils/validator.ts.",
        "Mongoose models in src/models/* persist to MongoDB; index.ts connects via MONGODB_URI then listens.",
        "Cross-cutting: asyncHandler, AppError + errorHandler, isAuthenticated / optionalAuthenticated / isVerified, and rate limiters on auth routes.",
        "No OpenAPI/Swagger spec or `.github/workflows` in repo; tests use Vitest + Supertest in src/app.test.ts."
      ]
    },
    {
      id: 19,
      title: "Jobnest API — job board backend",
      description:
        "REST API for job postings and applications built with Express and TypeScript. Mongoose models link users to jobs they create and jobs they apply to, with JWT-based sessions and role checks for admin-only user deletion. Request bodies for registration and login are validated with Joi; passwords are hashed with bcrypt. Routes are grouped under /api and /api/auth. No OpenAPI spec or health-check route is present in the repository.",
      image: aiPrompts,
      tags: [
        "Node.js",
        "TypeScript",
        "Express",
        "Mongoose",
        "MongoDB",
        "JWT",
        "Joi",
        "Helmet",
        "bcryptjs"
      ],
      category: "API",
      kind: "backend",
      github: "https://github.com/engraya/hirescape-api",
      baseUrl: "https://jobnest-jx9f.onrender.com",
      _baseUrlNote: "Not documented in repo; replace when deployment URL is known.",
      auth: "JWT via httpOnly cookie `Authorization` or `Authorization: Bearer <token>`",
      deployment: "Documented for Render (render.yaml: npm build + node dist/index.js, PORT 8000); multi-stage Docker image (node:22-alpine) — hosting choice not verified beyond config.",
      endpoints: [
        { "method": "GET", "path": "/", "purpose": "Returns a short welcome JSON message." },
        { "method": "POST", "path": "/api/auth/register", "purpose": "Create a user account with validated registration fields." },
        { "method": "POST", "path": "/api/auth/login", "purpose": "Authenticate and issue a JWT (cookie and JSON body)." },
        { "method": "POST", "path": "/api/auth/logout", "purpose": "Clear the auth cookie for the signed-in user." },
        { "method": "GET", "path": "/api/auth/users", "purpose": "List users (authenticated)." },
        { "method": "GET", "path": "/api/auth/users/:id", "purpose": "Fetch one user by id (authenticated)." },
        { "method": "DELETE", "path": "/api/auth/users/:id", "purpose": "Delete a user by id (authenticated admin only)." },
        { "method": "GET", "path": "/api/jobs", "purpose": "List all jobs with sorting and populated relations." },
        { "method": "GET", "path": "/api/jobs/:id", "purpose": "Fetch a single job by id." },
        { "method": "POST", "path": "/api/jobs", "purpose": "Create a job for the authenticated user." },
        { "method": "PUT", "path": "/api/jobs/:id", "purpose": "Update a job if the caller is the creator." },
        { "method": "DELETE", "path": "/api/jobs/:id", "purpose": "Delete a job if the caller is the creator." },
        { "method": "GET", "path": "/api/jobs/user/created", "purpose": "List jobs created by the authenticated user." },
        { "method": "GET", "path": "/api/jobs/user/applied", "purpose": "List jobs the authenticated user has applied to." },
        { "method": "POST", "path": "/api/jobs/apply/:id", "purpose": "Record an application to a job for the authenticated user." }
      ],
      omittedEndpointsForCap15: [
        "DELETE /api/jobs/created/:id — delete own job (creator check).",
        "DELETE /api/jobs/applied/:id — remove a job from the user’s applied list."
      ],
      architectureSummary: [
        "Express app in src/index.ts mounts auth and job routers and connects Mongoose when MONGODB_URI is set.",
        "HTTP routes live under src/routers/authRouter.ts and src/routers/jobRouter.ts (prefixes /api/auth and /api).",
        "Controllers in src/controllers/* implement handlers and call Mongoose models User and Job.",
        "Joi schemas in src/utils/validator.ts validate auth payloads; bcrypt hashing in src/utils/hashing.ts.",
        "isAuthenticated verifies JWT from cookie or Bearer header and attaches req.user; isAdmin gates admin-only deletes.",
        "No dedicated API versioning segment (e.g. /v1); public surface uses /api and /api/auth."
      ]
    },
    {
      id: 20,
      title: "SlideForge API",
      description: "SlideForge is a production-grade RESTful API built with FastAPI and Python 3.12 that automates AI-powered PowerPoint generation. It exposes an async job-queue pattern — clients POST a topic and receive a job ID immediately (202 Accepted), then poll for completion before downloading the generated .pptx file. Slide content is synthesized by the Google Gemini API (JSON-mode, gemini-2.0-flash-preview) with configurable language, theme, and slide count. The generated files are assembled using python-pptx with three built-in themes (Professional, Minimal, Vibrant) and served as binary file responses with server-side path-traversal protection. The service layer follows dependency injection via LRU-cached FastAPI dependencies, structured JSON logging, custom exception hierarchy with typed error codes, per-IP rate limiting via slowapi, and a multi-stage Docker build running as a non-root user. No OpenAPI/Swagger UI is exposed in production (docs are disabled). A GitHub Actions CI/CD pipeline covers linting (ruff), static type checking (mypy), test coverage (pytest + httpx), and Docker image build.",
      image: "placeholderImageVariable",
      tags: [
        "Python",
        "FastAPI",
        "Google Gemini AI",
        "python-pptx",
        "Pydantic",
        "Docker",
        "Async",
        "REST API",
        "slowapi",
        "GitHub Actions"
      ],
      category: "API",
      kind: "backend",
    
      github: "https://github.com/engraya/SlideForge-api",
    
      _baseUrlNote: "No deployment URL found in the repository. CORS origins include 'slide-forge123.vercel.app' (frontend) and localhost:3000. The API runs on port 8000 via Docker/docker-compose. Likely hosted on a container platform (Render, Railway, or similar) but no render.yaml / railway.json / fly.toml was found.",
    
      auth: "No authentication or authorization layer is implemented. The API is publicly accessible and protected solely by per-IP rate limiting via slowapi (default 10 requests/minute) applied to the POST /presentations generation endpoint. CORS is enforced with an explicit origins allowlist configured via environment variable.",
    
      deployment: "Multi-stage Docker build (python:3.12-slim) with a builder stage for compiled dependencies and a hardened runtime stage running as a non-root user (appuser, UID 1001). A docker-compose.yml is provided for local development with a named volume for PPTX file persistence and a built-in HTTP health check against /api/v1/health. GitHub Actions CI/CD pipeline triggers on push to main/develop and PRs to main, sequencing: ruff lint → mypy type-check → pytest coverage → Docker image build. The app is intentionally constrained to a single Uvicorn worker to preserve in-memory job state (documented as requiring Redis for horizontal scaling).",
    
      endpoints: [
        {
          "method": "GET",
          "path": "/api/v1/health",
          "purpose": "Liveness probe. Returns API status, environment name, and version string. Used by Docker health check and load balancers."
        },
        {
          "method": "GET",
          "path": "/api/v1/ready",
          "purpose": "Readiness probe. Confirms the service is initialized and ready to accept traffic."
        },
        {
          "method": "POST",
          "path": "/api/v1/presentations",
          "purpose": "Submit an AI presentation generation job. Accepts topic (3–300 chars), num_slides (1–20), language (9 locales), and theme (professional/minimal/vibrant). Returns a UUID job_id with status 'pending' immediately (202 Accepted). Generation runs as a FastAPI BackgroundTask. Rate-limited to 10 requests/minute per IP."
        },
        {
          "method": "GET",
          "path": "/api/v1/presentations/{job_id}/status",
          "purpose": "Poll job lifecycle state for a given UUID. Returns PPTResponse with status: pending → processing → ready | failed. Returns 404 if the job ID is not found in the in-memory store."
        },
        {
          "method": "GET",
          "path": "/api/v1/presentations/{job_id}/download",
          "purpose": "Download the completed .pptx file as a binary response (application/vnd.openxmlformats-officedocument.presentationml.presentation). Validates job status is 'ready', resolves the server-side filename with path-traversal protection, and schedules async cleanup of expired files after serving."
        }
      ],
    
      omittedEndpointsForCap15: [],
    
      architectureSummary: [
        "Feature-based vertical slice structure under src/: api/ (routers), services/, schemas/, utils/, with a single config.py and dependencies.py at the root.",
        "Async job-queue pattern using FastAPI BackgroundTasks: POST immediately returns 202 with a UUID job_id while generation runs in the background, decoupling request latency from AI inference time.",
        "Three-layer service architecture: GeminiProvider (AI inference with JSON-mode and exponential-backoff retry), PresentationService (python-pptx PPTX assembly with theme support), and FileService (safe filename generation, path-traversal defense, TTL-based file cleanup).",
        "Dependency injection via LRU-cached factory functions in dependencies.py, providing singleton service instances per Uvicorn worker without a DI framework.",
        "Typed custom exception hierarchy (SlideForgeError → AIServiceError, AIParsingError, PresentationGenerationError, PresentationNotFoundError, RateLimitError, InputValidationError) with structured JSON error responses including machine-readable error_code fields.",
        "In-memory job store (dict[str, PPTResponse]) intentionally documented as single-worker only, with a code comment indicating Redis as the required upgrade path for horizontal scaling.",
        "Security hardening: filename sanitization (NFKD normalization, ASCII-only, UUID suffix), Path.resolve() + prefix-check path-traversal guard, non-root Docker user, CORS allowlist, and slowapi rate limiting.",
        "Structured JSON logging via a custom JSONFormatter emitting ISO-8601 UTC timestamps with module/function/line context, with uvicorn access log and Google API noise suppressed.",
        "Pydantic v2 schemas with field-level validators (whitespace-only topic rejection, empty bullet filtering, slide count bounds) ensuring clean data enters the service layer.",
        "CI/CD pipeline enforces ruff lint, mypy strict type checking, and pytest coverage gates before a Docker image is built, preventing untyped or unlinted code from reaching the container registry."
      ]
    }    
  ] as const;
