import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// A small, fixed catalog so the tab counts are deterministic:
// 2 frontend, 1 backend, 0 fullstack.
vi.mock("@lib/constants", () => ({
  projects: [
    { id: 1, kind: "frontend", title: "FE One", description: "", tags: [], image: "" },
    { id: 2, kind: "frontend", title: "FE Two", description: "", tags: [], image: "" },
    { id: 3, kind: "backend", title: "BE One", description: "", tags: [], image: "" },
  ],
}));

// Stub the heavy 3D card so the filter logic is what's under test.
vi.mock("@components/ProjectCard", () => ({
  default: ({ title }: { title: string }) => (
    <div data-testid="project-card">{title}</div>
  ),
}));

// framer-motion's layout animation isn't relevant here.
vi.mock("framer-motion", () => ({
  motion: new Proxy(
    {},
    {
      get:
        () =>
        ({ children }: { children?: React.ReactNode }) =>
          <div>{children}</div>,
    }
  ),
}));

import ProjectsFilter from "./ProjectsFilter";

describe("ProjectsFilter", () => {
  it("renders a tab per category with live counts", () => {
    render(<ProjectsFilter />);
    expect(screen.getByRole("tab", { name: /all/i })).toHaveTextContent("(3)");
    expect(screen.getByRole("tab", { name: /frontend/i })).toHaveTextContent("(2)");
    expect(screen.getByRole("tab", { name: /backend/i })).toHaveTextContent("(1)");
    expect(screen.getByRole("tab", { name: /fullstack/i })).toHaveTextContent("(0)");
  });

  it("shows every project under the default 'All' tab", () => {
    render(<ProjectsFilter />);
    expect(screen.getAllByTestId("project-card")).toHaveLength(3);
    expect(screen.getByRole("tab", { name: /all/i })).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  it("filters to the selected category", async () => {
    render(<ProjectsFilter />);
    await userEvent.click(screen.getByRole("tab", { name: /frontend/i }));

    expect(screen.getByRole("tab", { name: /frontend/i })).toHaveAttribute(
      "aria-selected",
      "true"
    );
    expect(screen.getAllByTestId("project-card")).toHaveLength(2);
  });

  it("shows an empty message for a category with no projects", async () => {
    render(<ProjectsFilter />);
    await userEvent.click(screen.getByRole("tab", { name: /fullstack/i }));

    expect(screen.queryAllByTestId("project-card")).toHaveLength(0);
    expect(
      screen.getByText(/no projects in this category yet/i)
    ).toBeInTheDocument();
  });
});
