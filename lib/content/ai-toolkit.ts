export const aiToolkitItems = [
  {
    id: "llm",
    name: "LLM integration",
    subtitle: "OpenAI · Gemini · production APIs",
    detail:
      "Shipping features with GPT-class and Gemini models: prompts, streaming, guardrails, and cost-aware usage.",
    icon: "brain" as const,
  },
  {
    id: "assistants",
    name: "AI-assisted development",
    subtitle: "Cursor · GitHub Copilot · Claude Code",
    detail:
      "Faster delivery and cleaner refactors using agentic editors, inline suggestions, and review-ready diffs.",
    icon: "terminal" as const,
  },
  {
    id: "prompts",
    name: "Prompt & context design",
    subtitle: "Templates · evals · structured outputs",
    detail:
      "Repeatable prompt patterns, JSON/tool calling, and testing ideas before they hit users.",
    icon: "wand" as const,
  },
  {
    id: "rag",
    name: "RAG & knowledge grounding",
    subtitle: "Embeddings · retrieval · citations",
    detail:
      "Grounding answers in your own data so apps stay accurate and easier to trust.",
    icon: "search" as const,
  },
  {
    id: "automation",
    name: "Workflow automation",
    subtitle: "CI hooks · codegen · internal tools",
    detail:
      "Using AI where it removes toil: scaffolding, docs, test ideas, and repeatable pipelines.",
    icon: "workflow" as const,
  },
  {
    id: "ux",
    name: "Product UX for AI",
    subtitle: "Loading · errors · transparency",
    detail:
      "Interfaces that set expectations, handle failures gracefully, and keep humans in the loop.",
    icon: "sparkles" as const,
  },
] as const;
