"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Zap, Heart, ArrowRight } from "lucide-react";
import SmileAssessmentForm from "@/components/SmileAssessmentForm";

const HomePage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[#F8FAFC]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/20 rounded-l-[100px] hidden lg:block" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Welcome to Excellence</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary leading-tight mb-6">
                Create The Smile You&apos;ve <span className="text-secondary italic">Always Wanted</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Experience premium dental care where luxury meets state-of-the-art technology. Your dream smile is just a consultation away.
              </p>
              <div className="flex flex-col sm:row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-center hover:shadow-lg transition-all transform hover:-translate-y-1">
                  Book Consultation
                </Link>
                <Link href="/gallery" className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-center hover:bg-primary hover:text-white transition-all">
                  View Smile Gallery
                </Link>
              </div>
              <div className="mt-12 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
                </div>
                <div>
                  <div className="flex text-secondary">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-xs font-bold text-gray-500">Trusted by 2,000+ Happy Patients</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <SmileAssessmentForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-primary mb-16">Why Choose BrightSmile?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck className="text-secondary" size={40} />, title: "Award-Winning Care", desc: "Recognized internationally for our commitment to clinical excellence and patient safety." },
              { icon: <Zap className="text-secondary" size={40} />, title: "Modern Technology", desc: "Using AI-powered diagnostics and 3D imaging for ultra-precise treatment planning." },
              { icon: <Heart className="text-secondary" size={40} />, title: "Comfort-First Approach", desc: "Enjoy a spa-like environment designed to eliminate dental anxiety forever." },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-colors"
              >
                <div className="mb-6 inline-block">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-secondary/30 rounded-3xl translate-x-4 translate-y-4" />
              <div className="h-[500px] w-full bg-gray-800 rounded-3xl overflow-hidden relative">
                {/* Placeholder for high-tech equipment image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-serif italic text-2xl">State-of-the-Art Facility</div>
              </div>
            </div>
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">The Future of Dentistry</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-white">Advanced Technology for Precision Results</h2>
              <ul className="space-y-6">
                {[
                  "3D Digital Smile Design for perfect symmetry",
                  "Low-radiation Digital X-Rays for safety",
                  "Intraoral Scanners (No more messy impressions)",
                  "Laser Dentistry for painless soft tissue procedures",
                ].map((tech, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xs">✓</div>
                    <span className="text-lg text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-10 flex items-center space-x-2 text-secondary font-bold hover:translate-x-2 transition-transform">
                <span>Learn about our technology</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary">Your Journey to a New Smile</h2>
            <p className="text-gray-500 mt-4">Simple, transparent, and luxurious every step of the way.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Meet your doctor and discuss your dream smile." },
              { step: "02", stepTitle: "Digital Plan", desc: "See your 3D smile design before we even start." },
              { step: "03", title: "Treatment", desc: "Painless procedures in a relaxing, spa-like setting." },
              { step: "04", title: "Reveal", desc: "Walk out with a confident, life-changing new smile." },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="text-6xl font-serif font-black text-accent/20 mb-[-30px] z-0">{item.step}</div>
                <h3 className="text-xl font-bold text-primary relative z-10 mb-4">{item.title || item.stepTitle}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-accent/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
