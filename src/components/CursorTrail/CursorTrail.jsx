import { useEffect, useRef, useMemo } from 'react';

const CursorTrail = ({
  color = '#ffffff',
  particleCount = 20,
  particleLife = 500, // ms
  minSize = 1,
  maxSize = 5
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });

  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    return hasTouchScreen && isSmallScreen;
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let lastSpawn = 0;
    const spawnInterval = 16; // ~ one particle per frame at 60fps

    const moveHandler = e => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      const now = performance.now();
      if (now - lastSpawn < spawnInterval) return;
      lastSpawn = now;

      particlesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        size: minSize + Math.random() * (maxSize - minSize),
        born: now
      });

      if (particlesRef.current.length > particleCount * 3) {
        particlesRef.current.splice(0, particlesRef.current.length - particleCount * 3);
      }
    };
    window.addEventListener('mousemove', moveHandler, { passive: true });

    const render = now => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(p => now - p.born < particleLife);

      particlesRef.current.forEach(p => {
        const age = now - p.born;
        const t = age / particleLife;
        const alpha = 1 - t;
        const size = p.size * (1 - t * 0.6);

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(size, 0.1), 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha * 0.6;
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', moveHandler);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, color, particleCount, particleLife, minSize, maxSize]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9998,
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default CursorTrail;
