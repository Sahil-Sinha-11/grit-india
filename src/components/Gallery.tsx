import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';

interface GalleryItemProps {
  image: string;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick }) => {
  return (
    <div 
      className="overflow-hidden rounded-lg cursor-pointer group"
      onClick={onClick}
    >
      <img 
        src={image} 
        alt="Event Photo" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
};

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg",
    "https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg",
    "https://images.pexels.com/photos/1238941/pexels-photo-1238941.jpeg",
    "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg",
    "https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg",
    "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    "https://images.pexels.com/photos/2078071/pexels-photo-2078071.jpeg",
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
    <section id="gallery" className="section-padding bg-gradient-to-b from-neon-black to-neon-deepBlue">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading neon-text">GALLERY</h2>
          <p className="text-xl font-display tracking-wide max-w-2xl mx-auto">
            GLIMPSES OF THE EUPHORIA
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GalleryItem 
                image={image} 
                onClick={() => setSelectedImage(image)} 
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
          <h3 className="text-2xl font-display font-bold mb-6 neon-text-blue">PREVIOUS AFTERMOVIE</h3>
          <div className="max-w-4xl mx-auto aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden glass-card p-2">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/GKmW-t9sr0o" 
              title="PUBFEST Aftermovie" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-neon-pink transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl max-h-[90vh] relative">
            <img 
              src={selectedImage} 
              alt="Event Photo" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;