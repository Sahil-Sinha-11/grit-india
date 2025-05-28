import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`faq-item border-b border-neon-purple border-opacity-30 ${isOpen ? 'active' : ''}`}>
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg md:text-xl font-display font-bold">{question}</h3>
        <ChevronDown 
          className={`faq-icon text-neon-pink transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`} 
          size={20} 
        />
      </button>
      <div 
        className="faq-answer overflow-hidden max-h-0 transition-all duration-300"
      >
        <div className="pb-4 text-gray-300">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const faqItems = [
    {
      question: "What are the age restrictions for the event?",
      answer: "PUBFEST 2025 is an 18+ event. Valid photo ID matching the name on your ticket will be required for entry. Please ensure you bring appropriate identification to avoid disappointment."
    },
    {
      question: "What items are prohibited at the venue?",
      answer: "Prohibited items include outside food and beverages, illegal substances, weapons, professional cameras/recording equipment, and pets (service animals excepted). Any items deemed dangerous or disruptive by security personnel may be confiscated."
    },
    {
      question: "What is the refund policy?",
      answer: "Tickets are non-refundable but transferable up to 7 days before the event. In case of event cancellation, full refunds will be processed automatically within 14 business days. For postponement, tickets will remain valid for the rescheduled date."
    },
    {
      question: "Is there a dress code?",
      answer: "While there is no strict dress code, we encourage attendees to embrace the neon nightlife theme. Think glow-in-the-dark accessories, reflective materials, and vibrant colors! Most importantly, wear comfortable shoes as you'll be dancing all night."
    },
    {
      question: "Will there be food available at the venue?",
      answer: "Yes, multiple food vendors will be available throughout the venue offering a variety of options, including vegetarian, vegan, and gluten-free choices. Food service will run from doors opening until 2:00 AM."
    },
    {
      question: "Are there lockers or coat check services?",
      answer: "Yes, secure lockers will be available for rent on a first-come, first-served basis. A coat check service will also be provided for a small fee. We recommend traveling light as space is limited."
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
    <section id="faq" className="section-padding bg-gradient-to-b from-neon-deepBlue to-neon-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading neon-text">FAQ</h2>
          <p className="text-xl font-display tracking-wide max-w-2xl mx-auto">
            EVERYTHING YOU NEED TO KNOW
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto glass-card p-6 md:p-8"
        >
          {faqItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FaqItem 
                question={item.question}
                answer={item.answer}
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
          <p className="text-lg mb-6">Still have questions?</p>
          <a href="#contact" className="neon-button-blue">CONTACT US</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;