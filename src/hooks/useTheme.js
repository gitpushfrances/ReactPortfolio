import { useState, useEffect, useCallback } from 'react';
import { flushSync } from 'react-dom';

const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

// Builds a wobbly, slightly-overshooting expansion so the wave feels
// like water settling instead of a mechanically perfect circle.
function buildWaveKeyframes(x, y, endRadius) {
  const steps = 28;
  const overshoot = 1.06;
  const frames = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;

    let r;
    if (t < 0.85) {
      r = endRadius * overshoot * easeOutCubic(t / 0.85);
    } else {
      const localT = (t - 0.85) / 0.15;
      r = endRadius * (overshoot - (overshoot - 1) * easeOutCubic(localT));
    }

    // Decaying up/down bob as the wave expands
    const bobAmplitude = 14 * (1 - t);
    const bobY = Math.sin(t * Math.PI * 3) * bobAmplitude;

    frames.push({
      clipPath: `circle(${Math.max(r, 0)}px at ${x}px ${y + bobY}px)`
    });
  }
  return frames;
}

// Cosmetic smaller ring that trails slightly behind the main wave
function spawnTrailingRing(x, y, endRadius, isDark) {
  const ring = document.createElement('div');
  ring.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y}px;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    border: 2px solid ${isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.25)'};
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 999999;
  `;
  document.body.appendChild(ring);

  const trailDiameter = endRadius * 1.4;
  const anim = ring.animate(
    [
      { width: '0px', height: '0px', opacity: 0.9 },
      { width: `${trailDiameter}px`, height: `${trailDiameter}px`, opacity: 0 }
    ],
    { duration: 650, delay: 130, easing: 'ease-out', fill: 'forwards' }
  );
  anim.onfinish = () => ring.remove();
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback((event) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        buildWaveKeyframes(x, y, endRadius),
        {
          duration: 700,
          easing: 'linear', // curve is baked into the keyframes themselves
          pseudoElement: '::view-transition-new(root)'
        }
      );

      spawnTrailingRing(x, y, endRadius, nextTheme === 'dark');
    });
  }, [theme]);

  return { theme, toggleTheme };
}
