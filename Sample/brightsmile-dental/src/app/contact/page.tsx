"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
              <h1 className="text-5xl font-serif font-bold text-primary mb-6">Contact Us</h1>
              <p className="text-gray-500 leading-relaxed">
                Whether you have a question about a treatment, want to book a consultation, or just want to say hello, we&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <MapPin className="text-secondary" />, title: "Visit Us", content: "123 Luxury Lane, Dental District, Beverly Hills, CA 90210" },
                { icon: <Phone className="text-secondary" />, title: "Call Us", content: "+1 (555) 123-4567" },
                { icon: <Mail className="text-secondary" />, title: "Email Us", content: "hello@brightsmile.com" },
                { icon: <Clock className="text-secondary" />, title: "Hours", content: "Mon-Fri: 9am-7pm, Sat: 10am-4pm" },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/20 rounded-xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-snug">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary p-8 rounded-[40px] text-white flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Instant Chat</h3>
                <p className="text-sm text-gray-400">Message us on WhatsApp for a quick response.</p>
              </div>
              <button className="bg-secondary text-primary p-4 rounded-full hover:scale-110 transition-transform">
                <MessageSquare size={24} fill="currentColor" />
              </button>
            </div>

            {/* Map Placeholder */}
            <div className="h-[300px] w-full bg-gray-100 rounded-[40px] overflow-hidden border border-gray-100 flex items-center justify-center relative">
               <div className="text-gray-400 font-serif italic">Interactive Map Interface</div>
               <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-50"
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">First Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-secondary/50 transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Last Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-secondary/50 transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                <input type="email" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-secondary/50 transition-all" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Treatment Interest</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-secondary/50 transition-all appearance-none">
                  <option>Select a treatment...</option>
                  <option>Teeth Whitening</option>
                  <option>Dental Implants</option>
                  <option>Veneers</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                <textarea className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-secondary/50 transition-all h-32 resize-none" placeholder="How can we help you?" />
              </div>

              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold hover:bg-secondary hover:text-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Send Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
