"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  theme: ThemeOptions;
  changeTheme: (theme: ThemeOptions) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeOptions>("system");

  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const updateTheme = useCallback((newTheme: ThemeOptions) => {
    const themeToSet = newTheme === "system" ? getSystemTheme() : newTheme;

    setTheme(themeToSet);
    localStorage.setItem("theme", themeToSet);
    document.documentElement.setAttribute("data-theme", themeToSet);
  }, []);

  useEffect(() => {
    const storedTheme =
      (localStorage.getItem("theme") as ThemeOptions) || getSystemTheme();
    updateTheme(storedTheme);

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        updateTheme("system");
      }
    };

    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryList.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme, updateTheme]);

  const changeTheme = (newTheme: ThemeOptions) => {
    updateTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
