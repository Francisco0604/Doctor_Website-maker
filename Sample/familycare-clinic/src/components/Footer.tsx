import { Heart, Mail, Phone, MapPin, Globe, MessageSquare, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <a href="index.html" className="flex items-center gap-2">
              <Heart className="text-blue-500 fill-blue-500 h-6 w-6" />
              <span className="text-xl font-bold">FamilyCare Clinic</span>
            </a>
            <p className="text-gray-400">
              Providing compassionate and professional healthcare services for your entire family since 2012.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><MessageSquare size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Share2 size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="index.html" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="about.html" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="services.html" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="appointment.html" className="hover:text-white transition-colors">Book Appointment</a></li>
              <li><a href="contact.html" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1 shrink-0" size={18} />
                <span>123 Medical Park, Suite 45, Health City, HC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <span>contact@familycare.com</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6">Working Hours</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between text-red-400">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} FamilyCare Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
