import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// Theme type lives in types/index.ts — imported here so ThemeContext doesn't
// duplicate it. Consumers can import Theme from either location.
import type { Theme } from "../types";
export type { Theme };

// ─── Types ────────────────────────────────────────────────────────────────────

interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const ThemeContext = createContext<ThemeContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

interface ThemeProviderProps {
  children: ReactNode;
  /** Root element that receives the theme class. Defaults to document root. */
  rootRef?: React.RefObject<HTMLElement | null>;
}

export function ThemeProvider({ children, rootRef }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  // Apply / remove the `light-theme` class on the targeted root element so
  // that CSS custom-property overrides in index.css take effect.
  useEffect(() => {
    const el = rootRef?.current ?? document.documentElement;
    el.classList.toggle("light-theme", theme === "light");
    return () => el.classList.remove("light-theme");
  }, [theme, rootRef]);

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === "dark", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}