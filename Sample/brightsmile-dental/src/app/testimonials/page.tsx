"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Play } from "lucide-react";

const reviews = [
  {
    name: "Eleanor Rigby",
    role: "Patient",
    content: "The care I received at BrightSmile was beyond my expectations. The facility is like a 5-star hotel, and my new veneers have given me a confidence I never had before.",
    rating: 5,
    date: "2 months ago"
  },
  {
    name: "James Howell",
    role: "Patient",
    content: "I've always been terrified of the dentist. Dr. Smith and the team made me feel so relaxed. The sedation dentistry was a game-changer for my root canal.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Sophia Chen",
    role: "Patient",
    content: "Professional, clean, and state-of-the-art. Their 3D scanning technology meant no more messy impressions for my crown. Highly recommend!",
    rating: 5,
    date: "3 weeks ago"
  }
];

const TestimonialsPage = () => {
  return (
    <div className="pt-32 pb-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Patient Voices</span>
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">Patient Experiences</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Hear from those who have already transformed their lives with BrightSmile Dental Care.</p>
        </div>

        {/* Video Testimonials Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[1, 2].map((i) => (
            <div key={i} className="relative aspect-video bg-gray-900 rounded-[32px] overflow-hidden group cursor-pointer shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Play size={32} fill="currentColor" className="ml-1" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-xl font-bold">Patient Transformation Story #{i}</h3>
                <p className="text-sm text-gray-300">Dental Implants & Cosmetic Bonding</p>
              </div>
            </div>
          ))}
        </div>

        {/* Written Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-8 right-8 text-accent/20" size={48} />
              <div className="flex text-secondary mb-4">
                {[...Array(r.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-6">"{r.content}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-primary">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{r.name}</h4>
                  <p className="text-xs text-gray-400">{r.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
