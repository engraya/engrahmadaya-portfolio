"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center outline-none transition-all hover:scale-[1.05] active:scale-100 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 motion-safe:hover:scale-[1.15] dark:bg-gray-950 dark:ring-offset-gray-900"
      onClick={toggleTheme}
    >
      {!mounted ? (
        <BsSun />
      ) : resolvedTheme === "dark" ? (
        <BsMoon />
      ) : (
        <BsSun />
      )}
    </button>
  );
}

export default ThemeSwitch
