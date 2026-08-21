import { describe, it, expect } from "vitest";
import { resolveNavHref } from "./navigation";

describe("resolveNavHref", () => {
  it("keeps the root href as-is", () => {
    expect(resolveNavHref("/", "/")).toBe("/");
    expect(resolveNavHref("/", "/projects")).toBe("/");
  });

  it("leaves a hash link bare when already on the home page", () => {
    expect(resolveNavHref("#about", "/")).toBe("#about");
  });

  it("prefixes a hash link with / when on another route", () => {
    expect(resolveNavHref("#about", "/projects")).toBe("/#about");
    expect(resolveNavHref("#contact", "/projects/3")).toBe("/#contact");
  });

  it("passes a normal path through unchanged", () => {
    expect(resolveNavHref("/projects", "/")).toBe("/projects");
  });
});
