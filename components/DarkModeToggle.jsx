"use client";
import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      // className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded"
    >
      {theme === "light" ? (
        <Image src={assets.moon_icon} alt="" className="w-6" />
      ) : (
        <Image src={assets.sun_icon} alt="" className="w-6" />
      )}
    </button>
  );
}
