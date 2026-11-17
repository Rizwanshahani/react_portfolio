"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";

    setTheme(savedTheme || systemTheme);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [isReady, theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }

  return context;
}
