import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Star, Music, Coffee } from 'lucide-react';

interface TicketPlanProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  isPopular?: boolean;
}

const TicketPlan: React.FC<TicketPlanProps> = ({ 
  title, 
  price, 
  description,
  features,
  icon,
  isPopular = false
}) => {
  return (
    <div 
      className={`glass-card p-6 md:p-8 relative ${
        isPopular ? 'border-neon-pink border-2' : ''
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neon-pink text-neon-black font-display text-sm py-1 px-4 rounded-full">
          MOST POPULAR
        </div>
      )}
      
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl md:text-2xl font-display font-bold text-center mb-2">
        {title}
      </h3>
      
      <div className="text-center mb-4">
        <span className="text-3xl md:text-4xl font-display font-bold text-white">
          {price}
        </span>
      </div>
      
      <p className="text-gray-300 text-center mb-6">
        {description}
      </p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-neon-pink mr-2">✓</span>
            <span className="text-gray-200">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="text-center">
        <button 
          className={isPopular ? "neon-button w-full" : "neon-button-blue w-full"}
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};

const Tickets: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const ticketPlans = [
    {
      title: "EARLY BIRD",
      price: "$49",
      description: "Limited availability early access tickets",
      features: [
        "General admission",
        "Access to main stage",
        "Standard bar access",
        "Limited early bird offer"
      ],
      icon: <Clock className="w-8 h-8 text-neon-lightBlue" />,
      isPopular: false
    },
    {
      title: "VIP",
      price: "$99",
      description: "Enhanced experience with premium perks",
      features: [
        "Priority entry",
        "Access to all stages",
        "Premium bar access",
        "VIP lounge area",
        "Complimentary welcome drink"
      ],
      icon: <Star className="w-8 h-8 text-neon-pink" />,
      isPopular: true
    },
    {
      title: "BACKSTAGE",
      price: "$149",
      description: "Ultimate festival experience for true fans",
      features: [
        "All VIP benefits",
        "Backstage access",
        "Meet & greet with artists",
        "Exclusive merchandise pack",
        "Free drinks all night"
      ],
      icon: <Music className="w-8 h-8 text-neon-purple" />,
      isPopular: false
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
    <section id="tickets" className="section-padding bg-gradient-to-b from-neon-black to-neon-deepBlue">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading neon-text">GET YOUR TICKETS</h2>
          <p className="text-xl font-display tracking-wide max-w-2xl mx-auto">
            SECURE YOUR SPOT AT THE MOST ANTICIPATED EVENT OF THE SUMMER
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {ticketPlans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TicketPlan 
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                icon={plan.icon}
                isPopular={plan.isPopular}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center glass-card p-6 max-w-3xl mx-auto"
        >
          <Coffee className="w-8 h-8 text-neon-lime mx-auto mb-4" />
          <h3 className="text-xl font-display font-bold mb-2">GROUP DISCOUNT</h3>
          <p className="mb-4">Coming with friends? Get 10% off when purchasing 5+ tickets.</p>
          <button className="neon-button-blue">CONTACT FOR GROUP RATES</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Tickets;