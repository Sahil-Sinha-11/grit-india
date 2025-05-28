import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateParallax = (strength: number) => {
    const x = (window.innerWidth / 2 - mousePosition.x) * strength;
    const y = (window.innerHeight / 2 - mousePosition.y) * strength;
    return `translate(${x}px, ${y}px)`;
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(15,15,15,0.8) 0%, rgba(58,12,163,0.6) 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Particle effect background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-neon-black opacity-70"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neon-pink"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              opacity: 0.6,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i + 20}
            className="absolute rounded-full bg-neon-lightBlue"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              opacity: 0.7,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      {/* Parallax circle decorations */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-neon-pink opacity-20 blur-xl"
        style={{ 
          left: '20%', 
          top: '30%',
          transform: calculateParallax(0.02)
        }}
      ></div>
      <div 
        className="absolute w-48 h-48 rounded-full bg-neon-blue opacity-20 blur-xl"
        style={{ 
          right: '25%', 
          bottom: '35%',
          transform: calculateParallax(0.03)
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold neon-text mb-4">
            PUBFEST <span className="text-neon-pink">2025</span>
          </h1>
          <motion.p 
            className="text-xl md:text-2xl neon-text-blue mb-8 font-display tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            JUNE 15 • NEON NIGHTLIFE • UNDERGROUND DANCE
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a href="#tickets" className="neon-button text-xl">
            BUY TICKETS
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-display tracking-wider"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="mb-2">SCROLL DOWN</p>
        <div className="h-12 w-0.5 bg-white mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;