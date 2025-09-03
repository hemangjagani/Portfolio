"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-6 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-colors"
    >
      {dark ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
    </button>
  );
}
