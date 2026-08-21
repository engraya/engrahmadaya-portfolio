import { describe, it, expect } from "vitest";
import { cn, validateString, getErrorMessage } from "./utils";

describe("cn", () => {
  it("joins truthy classes and drops falsy ones", () => {
    expect(cn("a", false && "b", undefined, "c")).toBe("a c");
  });

  it("lets a later Tailwind class win a conflict", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});

describe("validateString", () => {
  it("accepts a non-empty string within the limit", () => {
    expect(validateString("hello", 10)).toBe(true);
  });

  it("rejects an empty or whitespace-only string", () => {
    expect(validateString("", 10)).toBe(false);
    expect(validateString("   ", 10)).toBe(false);
  });

  it("rejects a string over the max length", () => {
    expect(validateString("toolong", 3)).toBe(false);
  });

  it("rejects non-string values", () => {
    expect(validateString(42, 10)).toBe(false);
    expect(validateString(null, 10)).toBe(false);
    expect(validateString(undefined, 10)).toBe(false);
  });
});

describe("getErrorMessage", () => {
  it("reads the message off an Error", () => {
    expect(getErrorMessage(new Error("boom"))).toBe("boom");
  });

  it("stringifies a non-Error value", () => {
    expect(getErrorMessage("plain")).toBe("plain");
    expect(getErrorMessage(500)).toBe("500");
  });
});
