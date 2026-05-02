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
      className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-gray-200/80 bg-white/90 text-gray-800 shadow-2xl backdrop-blur-[0.5rem] outline-none transition-all hover:scale-[1.05] hover:text-gray-950 active:scale-100 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 motion-safe:hover:scale-[1.15] dark:border-white/10 dark:bg-gray-950 dark:text-gray-100 dark:ring-offset-gray-950"
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
