import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMute = () => setIsMuted(!isMuted);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Lineup', href: '#lineup' },
    { name: 'Tickets', href: '#tickets' },
    { name: 'Venue', href: '#venue' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neon-black bg-opacity-90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="neon-text text-2xl font-display font-bold">
            PUBFEST<span className="text-neon-pink">25</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="font-display text-sm tracking-wider hover:text-neon-pink transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              className="neon-button"
              onClick={() => window.location.href = '#tickets'}
            >
              Get Tickets
            </button>
            <button onClick={toggleMute} className="text-white hover:text-neon-pink transition-colors">
              {isMuted ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <button onClick={toggleMute} className="text-white hover:text-neon-pink transition-colors">
              {isMuted ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
            <button 
              onClick={toggleMenu} 
              className="text-white hover:text-neon-pink transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-neon-black bg-opacity-95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block py-2 font-display text-lg tracking-wider hover:text-neon-pink transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a 
                  href="#tickets" 
                  className="neon-button block text-center w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Get Tickets
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;