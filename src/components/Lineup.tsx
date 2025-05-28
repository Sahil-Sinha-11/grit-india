import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ArtistProps {
  name: string;
  role: string;
  time: string;
  image: string;
}

const Artist: React.FC<ArtistProps> = ({ name, role, time, image }) => {
  return (
    <div className="lineup-image relative group">
      <div className="relative w-full aspect-square overflow-hidden rounded-full border-4 border-neon-pink">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="artist-overlay absolute inset-0 bg-gradient-to-t from-neon-black via-transparent to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-4 text-center">
          <p className="text-lg md:text-xl font-display font-bold neon-text">{name}</p>
          <p className="text-sm text-neon-lightBlue">{role}</p>
          <p className="text-xs text-white mt-1">{time}</p>
        </div>
      </div>
    </div>
  );
};

const Lineup: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const artists = [
    {
      name: "ELECTRA PULSE",
      role: "Techno / House",
      time: "22:00 - 23:30",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg"
    },
    {
      name: "BASS REACTOR",
      role: "Bass House / Dubstep",
      time: "23:30 - 01:00",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
    },
    {
      name: "NEON DREAMS",
      role: "Progressive House",
      time: "01:00 - 02:30",
      image: "https://images.pexels.com/photos/1649693/pexels-photo-1649693.jpeg"
    },
    {
      name: "MIDNIGHT GROOVE",
      role: "Deep House",
      time: "02:30 - 04:00",
      image: "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg"
    },
    {
      name: "CYBER TRANCE",
      role: "Trance / Melodic",
      time: "04:00 - 05:30",
      image: "https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg"
    },
    {
      name: "URBAN BEATS",
      role: "Hip Hop / Trap",
      time: "20:30 - 22:00",
      image: "https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="lineup" className="section-padding bg-gradient-to-b from-neon-deepBlue to-neon-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading neon-text-blue">THE LINEUP</h2>
          <p className="text-xl font-display tracking-wide max-w-2xl mx-auto">
            EXPERIENCE THE BEAT MASTERS WHO WILL TRANSFORM YOUR NIGHT
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
        >
          {artists.map((artist, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Artist 
                name={artist.name} 
                role={artist.role} 
                time={artist.time} 
                image={artist.image} 
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-display mb-6">AND MANY MORE TO BE ANNOUNCED...</p>
          <a href="#tickets" className="neon-button-blue">SECURE YOUR SPOT</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Lineup;