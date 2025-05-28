import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-neon-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 neon-text">PUBFEST<span className="text-neon-pink">25</span></h3>
            <p className="text-gray-300 mb-4">
              The most anticipated summer party event of 2025. Experience the ultimate nightlife celebration with world-class DJs, immersive visuals, and an electric atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-neon-pink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-neon-pink transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-neon-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-neon-pink transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-neon-pink transition-colors">About</a>
              </li>
              <li>
                <a href="#lineup" className="text-gray-300 hover:text-neon-pink transition-colors">Lineup</a>
              </li>
              <li>
                <a href="#tickets" className="text-gray-300 hover:text-neon-pink transition-colors">Tickets</a>
              </li>
              <li>
                <a href="#venue" className="text-gray-300 hover:text-neon-pink transition-colors">Venue</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-neon-pink transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-neon-pink transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-4">CONTACT INFO</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-neon-pink mr-3 mt-1" />
                <span className="text-gray-300">info@pubfest2025.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-neon-pink mr-3 mt-1" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-neon-pink mr-3 mt-1" />
                <span className="text-gray-300">Neon Underground Club, 123 Electric Avenue, Downtown</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-4">NEWSLETTER</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get the latest updates and offers.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-neon-deepBlue bg-opacity-50 border border-neon-purple border-opacity-30 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-pink"
                />
              </div>
              <button 
                type="submit" 
                className="neon-button-blue w-full"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-neon-purple border-opacity-30 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 PUBFEST. All rights reserved. <a href="#" className="text-neon-pink hover:underline">Privacy Policy</a> | <a href="#" className="text-neon-pink hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;