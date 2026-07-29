import React from "react";
import { Globe, MessageSquare, Share2, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-secondary">BrightSmile</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Redefining dental excellence through luxury care and state-of-the-art technology. Your journey to a perfect smile starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><MessageSquare size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Share2 size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold border-b border-white/10 pb-2">Quick Links</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="treatments.html" className="hover:text-secondary transition-colors">Treatments</a></li>
              <li><a href="gallery.html" className="hover:text-secondary transition-colors">Smile Gallery</a></li>
              <li><a href="pricing.html" className="hover:text-secondary transition-colors">Pricing & Finance</a></li>
              <li><a href="faq.html" className="hover:text-secondary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold border-b border-white/10 pb-2">Contact Us</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span>123 Luxury Lane, Dental District,<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>hello@brightsmile.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold border-b border-white/10 pb-2">Opening Hours</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 7:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 4:00 PM</span></li>
              <li className="flex justify-between text-secondary"><span>Sunday:</span> <span>By Appointment</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:row justify-between items-center text-xs text-gray-400 space-y-4 md:space-y-0">
          <p>© 2024 BrightSmile Dental Care. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="privacy.html" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="terms.html" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
