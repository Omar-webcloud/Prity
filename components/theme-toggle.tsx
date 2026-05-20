"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    const stored = window.localStorage.getItem("theme");
    if (stored !== null) {
      setDark(stored === "dark");
    } else {
      setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark, mounted]);

  function toggleTheme() {
    setDark(!dark);
  }

  return (
    <Button
      type="button"
      variant="secondary"
      size="icon"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
