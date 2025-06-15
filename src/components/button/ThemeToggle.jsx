import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div>
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2  shadow-md   transition-all duration-300 border-2 border-white hover:dark:border-blue-400 mr-3 hover:cursor-pointer hover:text-blue-400 hover:border-blue-400"
      >
        {isDark ? <Sun className="w-5 h-5 " /> : <Moon className="w-5 h-5 " />}
      </button>
    </div>
  );
};

export default ThemeToggle;
