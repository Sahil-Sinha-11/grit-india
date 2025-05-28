import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music, Zap, Users, Beer } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const featureItems = [
    {
      icon: <Music className="w-8 h-8 text-neon-pink" />,
      title: "World-Class DJs",
      description: "Experience electrifying sets from international and local DJ talents"
    },
    {
      icon: <Zap className="w-8 h-8 text-neon-lightBlue" />,
      title: "Immersive Lighting",
      description: "Be mesmerized by state-of-the-art light shows and visual effects"
    },
    {
      icon: <Users className="w-8 h-8 text-neon-lime" />,
      title: "Vibrant Community",
      description: "Connect with fellow party-goers in an inclusive, energetic atmosphere"
    },
    {
      icon: <Beer className="w-8 h-8 text-neon-purple" />,
      title: "Premium Drinks",
      description: "Enjoy craft beers, signature cocktails, and non-alcoholic options"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-neon-black to-neon-deepBlue">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-heading neon-text">
            ABOUT THE EVENT
          </motion.h2>
          
          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-2xl font-display tracking-wide leading-relaxed mb-8"
          >
            WHERE BEATS PULSE AND NEON DREAMS COME ALIVE
          </motion.p>
          
          <motion.div variants={itemVariants} className="prose prose-lg prose-invert mx-auto">
            <p className="text-lg md:text-xl font-body leading-relaxed mb-6">
              PUBFEST 2025 transforms an ordinary summer night into an extraordinary journey through sound and light. As dusk falls, the venue awakens with electric energy, drawing you into a world where bass reverberates through your core and lasers paint the darkness.
            </p>
            <p className="text-lg md:text-xl font-body leading-relaxed">
              This isn't just another party—it's a collective experience where strangers become family under the spell of hypnotic rhythms and shared euphoria. From underground techno to pulsing house beats, our carefully curated soundscape keeps you moving until dawn breaks.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featureItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;