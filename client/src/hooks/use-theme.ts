import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "terminal";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    const [theme, setTheme] = useState<Theme>("dark");
    
    useEffect(() => {
      const savedTheme = localStorage.getItem("cybernautica-theme") as Theme;
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem("cybernautica-theme", theme);
      document.documentElement.className = theme;
    }, [theme]);

    return { theme, setTheme };
  }
  return context;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("cybernautica-theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cybernautica-theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};