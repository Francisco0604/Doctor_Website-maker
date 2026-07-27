"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    { icon: <MapPin className="text-blue-600" />, title: "Address", content: "123 Medical Park, Suite 45, Health City, HC 12345" },
    { icon: <Phone className="text-blue-600" />, title: "Phone", content: "+1 (555) 123-4567" },
    { icon: <Mail className="text-blue-600" />, title: "Email", content: "contact@familycare.com" },
    { icon: <Clock className="text-blue-600" />, title: "Hours", content: "Mon - Sat: 9:00 AM - 8:00 PM" },
  ];

  return (
    <div className="pb-20">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                {contactDetails.map((detail, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{detail.title}</h4>
                      <p className="text-gray-600">{detail.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-green-600 transition-colors shadow-lg shadow-green-100"
                >
                  <MessageCircle /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Full Name</label>
                      <input type="text" className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Email Address</label>
                      <input type="email" className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Subject</label>
                    <input type="text" className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="General Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Message</label>
                    <textarea rows={6} className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="How can we help you?"></textarea>
                  </div>
                  <button className="btn-primary w-full py-4 flex items-center justify-center gap-3 shadow-lg shadow-blue-100">
                    <Send size={20} /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="px-4 md:px-6">
        <div className="container mx-auto">
          <div className="bg-gray-200 w-full h-[450px] rounded-3xl overflow-hidden relative shadow-inner flex items-center justify-center text-gray-500 font-bold border-4 border-white shadow-xl">
             {/* In a real app, replace this div with a Google Maps iframe */}
             <div className="text-center">
               <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
               <p className="text-xl text-gray-400">Interactive Map Location</p>
               <p className="text-sm font-normal">Google Maps API Integration Placeholder</p>
             </div>
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d-122.41941548468212!3d37.77492957975922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1619541604085!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="absolute inset-0 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
