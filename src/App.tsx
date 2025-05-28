import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Lineup from './components/Lineup';
import Tickets from './components/Tickets';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="relative">
      <Cursor />
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <main>
          <Hero />
          <About />
          <Lineup />
          <Tickets />
          <Venue />
          <Gallery />
          <Faq />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;