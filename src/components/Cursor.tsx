import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' ||
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('lineup-image')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-5 h-5 rounded-full bg-neon-pink z-50 pointer-events-none hidden md:block"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          mixBlendMode: 'difference'
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeOut'
        }}
      />
      <motion.div
        className="fixed w-32 h-32 rounded-full bg-neon-pink opacity-5 z-40 pointer-events-none hidden md:block"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          mixBlendMode: 'difference'
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeOut'
        }}
      />
    </>
  );
};

export default Cursor;