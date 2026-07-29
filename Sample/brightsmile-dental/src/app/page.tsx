"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Zap, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import SmileAssessmentForm from "@/components/SmileAssessmentForm";

const HomePage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 pb-16 bg-[#F8FAFC]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/10 rounded-l-[100px] hidden lg:block" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <span className="inline-block bg-teal-100 text-teal-900 border border-teal-200 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                Gentle & Premium Dental Care
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-slate-900 leading-tight">
                Create The Smile You&apos;ve <span className="text-teal-700 italic">Always Wanted</span>
              </h1>
              <p className="text-base sm:text-xl text-slate-700 max-w-lg leading-relaxed font-medium">
                Experience gentle, premium dental care designed for maximum comfort. Clear options, modern technology, and friendly doctors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="contact.html" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-base text-center shadow-lg transition-all">
                  Book Initial Consultation
                </a>
                <a href="gallery.html" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-full font-bold text-base text-center transition-all">
                  View Smile Gallery
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">
                      ★
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-500">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-xs font-black text-slate-700">Trusted by 2,000+ Happy Patients</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <SmileAssessmentForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div>
            <span className="text-xs font-black uppercase text-teal-800 bg-teal-50 border border-teal-200/80 px-4 py-1.5 rounded-full inline-block mb-3">
              Clinical Standards
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900">Why Choose BrightSmile?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { category: "CLINICAL EXCELLENCE", icon: <ShieldCheck className="text-teal-700" size={36} />, title: "Award-Winning Care", desc: "Recognized internationally for our commitment to gentle clinical care, patient safety, and comfort." },
              { category: "DIAGNOSTICS", icon: <Zap className="text-teal-700" size={36} />, title: "Modern 3D Imaging", desc: "Using gentle 3D digital imaging for ultra-precise treatment planning without discomfort." },
              { category: "PATIENT COMFORT", icon: <Heart className="text-teal-700" size={36} />, title: "Comfort-First Approach", desc: "Relaxing, quiet clinic environment designed to eliminate anxiety and make every visit effortless." },
            ].map((benefit, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 border-t-4 border-t-teal-600 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-white rounded-2xl border border-slate-200">{benefit.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200/60 px-2.5 py-1 rounded-md">
                    {benefit.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="h-[400px] sm:h-[480px] w-full bg-slate-800 rounded-3xl overflow-hidden relative border border-slate-700 shadow-2xl flex items-center justify-center p-8 text-center">
                <div>
                  <span className="text-teal-400 text-xs font-black uppercase tracking-widest block mb-2">State-Of-The-Art Clinic</span>
                  <h3 className="text-2xl font-serif text-white font-bold">Low-Radiation Digital Facility</h3>
                  <p className="text-slate-400 text-sm mt-2 max-w-sm mx-auto">Equipped with comfortable dental suites and painless digital laser tools.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-teal-400 font-black tracking-widest uppercase text-xs bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700 inline-block">
                Modern Precision
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight text-white">Advanced Dental Technology for Comfortable Results</h2>
              <ul className="space-y-4 pt-2">
                {[
                  "3D Digital Smile Design for perfect comfort and accuracy",
                  "Ultra Low-radiation Digital X-Rays for maximum patient safety",
                  "Gentle Intraoral Scanners (No messy impressions needed)",
                  "Laser Dentistry for painless, fast-healing procedures",
                ].map((tech, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-200 font-medium text-base sm:text-lg">
                    <div className="w-6 h-6 rounded-full bg-teal-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0">✓</div>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a href="treatments.html" className="inline-flex items-center space-x-2 text-teal-400 font-extrabold text-base hover:text-teal-300 transition-colors">
                  <span>Explore all dental treatments</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey Timeline */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase text-teal-800 bg-teal-50 border border-teal-200/80 px-4 py-1.5 rounded-full inline-block">
              Clear Step-by-Step Method
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900">Your Journey to a New Smile</h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium">Transparent, friendly, and comfortable every step of the way.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-1 bg-gradient-to-r from-teal-200 via-sky-300 to-teal-200 z-0 rounded-full" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {[
                { step: "01", phase: "STEP 1 • CONSULT", title: "Consultation", desc: "Meet your friendly doctor, share your goals, and get clear answers." },
                { step: "02", phase: "STEP 2 • 3D PLAN", title: "Digital Plan", desc: "Preview your exact 3D smile design before any procedure begins." },
                { step: "03", phase: "STEP 3 • CARE", title: "Gentle Treatment", desc: "Relaxing procedures in a quiet, spa-like environment with zero rush." },
                { step: "04", phase: "STEP 4 • REVEAL", title: "Smile Reveal", desc: "Walk out with a clear, comfortable, and confident new smile." },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-teal-700 text-white text-sm sm:text-base font-black flex items-center justify-center shadow-md">
                        {item.step}
                      </span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-teal-800 bg-teal-100 border border-teal-200 px-2.5 py-1 rounded-full">
                        {item.phase}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mt-2 font-medium">{item.desc}</p>
                  </div>
                  <div className="pt-4 text-xs font-extrabold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
                    <span>Stage {i + 1} of 4</span>
                    {i < 3 && <span className="hidden lg:inline text-teal-600 font-bold ml-auto">→</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

