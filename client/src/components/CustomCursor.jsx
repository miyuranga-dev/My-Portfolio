import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    setIsVisible(true);

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-400/50 pointer-events-none z-50 mix-blend-screen hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0)',
          borderColor: isHovered ? 'rgba(52, 211, 153, 0.8)' : 'rgba(16, 185, 129, 0.4)'
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-emerald-400 pointer-events-none z-50 hidden md:block shadow-[0_0_10px_rgba(52,211,153,0.8)]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0.5 : 1
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 400, mass: 0.1 }}
      />
    </>
  );
}
