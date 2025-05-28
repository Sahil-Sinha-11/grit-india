import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Ticket, Bus } from 'lucide-react';

const Venue: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const infoItems = [
    {
      icon: <MapPin className="w-6 h-6 text-neon-pink" />,
      title: "LOCATION",
      content: "Neon Underground Club, 123 Electric Avenue, Downtown"
    },
    {
      icon: <Clock className="w-6 h-6 text-neon-lightBlue" />,
      title: "DOORS OPEN",
      content: "20:00 - June 15, 2025"
    },
    {
      icon: <Ticket className="w-6 h-6 text-neon-purple" />,
      title: "ENTRY REQUIREMENTS",
      content: "18+ with valid ID, Ticket required"
    },
    {
      icon: <Bus className="w-6 h-6 text-neon-lime" />,
      title: "TRANSPORTATION",
      content: "Shuttle service available, Limited parking nearby"
    }
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
    <section id="venue" className="section-padding bg-gradient-to-b from-neon-deepBlue to-neon-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading neon-text-blue">THE VENUE</h2>
          <p className="text-xl font-display tracking-wide max-w-2xl mx-auto">
            WHERE THE MAGIC HAPPENS
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926160472316!3d48.858373679287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1644178255823!5m2!1sen!2sus" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  className="w-full h-96 md:h-[500px]"
                ></iframe>
              </div>
            </div>
          </motion.div>
          
          <div>
            <motion.div 
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {infoItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="glass-card p-4 flex items-start"
                >
                  <div className="mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-300">{item.content}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div 
                variants={itemVariants}
                className="glass-card p-6 mt-8"
              >
                <h3 className="font-display font-bold text-xl mb-4 text-neon-pink">VENUE HIGHLIGHTS</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-neon-pink mr-2">✓</span>
                    <span>3 Fully-equipped dance floors with premium sound systems</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-pink mr-2">✓</span>
                    <span>State-of-the-art lighting and visual effects</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-pink mr-2">✓</span>
                    <span>Multiple bars with craft beers and signature cocktails</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-pink mr-2">✓</span>
                    <span>Outdoor chill-out area with comfortable seating</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-pink mr-2">✓</span>
                    <span>VIP sections with bottle service and private booths</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;