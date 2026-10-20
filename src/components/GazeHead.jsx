import React, { useEffect, useRef } from 'react';

// Portrait that turns its head toward the pointer.
// `src` is a 3x3 sprite sheet: rows = looking up / level / down,
// columns = viewer's left / center / right. Only the head moves; the body is identical in all frames.
const GazeHead = ({ src, alt, className = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let x = 0;
    let y = 0;
    let raf = 0;
    let idle = 0;
    let last = '';

    const setFrame = (col, row) => {
      const pos = `${col * 50}% ${row * 50}%`;
      if (pos !== last) {
        el.style.backgroundPosition = pos;
        last = pos;
      }
    };

    const update = () => {
      raf = 0;
      const box = el.getBoundingClientRect();
      const threshold = box.width * 0.3;
      const dx = x - (box.left + box.width / 2);
      const dy = y - (box.top + box.height * 0.38); // eye level, not the box center
      const col = dx < -threshold ? 0 : dx > threshold ? 2 : 1;
      // Content sits below the avatar, so only look down when the pointer is well below it.
      const row = dy < -threshold ? 0 : dy > box.height * 2 ? 2 : 1;
      setFrame(col, row);
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(update);
      clearTimeout(idle);
      idle = setTimeout(() => setFrame(1, 1), 4000); // drift back to center when idle
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
      clearTimeout(idle);
    };
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={alt}
      className={className}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: '300% 300%',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
};

export default GazeHead;
