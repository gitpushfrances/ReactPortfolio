import { useState, useEffect, useCallback } from 'react';
import { flushSync } from 'react-dom';

function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!document.startViewTransition || reduceMotion) {
      setTheme(nextTheme);
      return;
    }

    // The browser snapshots the old and new page and cross-fades them on the
    // compositor (timing in index.css), so no per-element color transitions run.
    document.startViewTransition(() => {
      applyTheme(nextTheme);
      flushSync(() => setTheme(nextTheme));
    });
  }, [theme]);

  return { theme, toggleTheme };
}
