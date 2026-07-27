"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const treatments = [
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    overview: "Professional medical-grade whitening for a brilliant, long-lasting smile.",
    benefits: ["Up to 8 shades lighter in one visit", "Safe for tooth enamel", "Long-lasting results", "Customized sensitivity management"],
    procedure: "A high-concentration whitening gel is applied to the teeth and activated with a specialized plasma light. The process takes about 60-90 minutes.",
    recovery: "Minimal sensitivity for 24-48 hours. Avoid staining foods (coffee, wine) for 3 days.",
    faqs: [
      { q: "How long does it last?", a: "With proper care, results can last 12-24 months." },
      { q: "Is it painful?", a: "We use desensitizing agents to ensure a comfortable experience." }
    ]
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    overview: "Permanent, natural-looking solution for missing teeth.",
    benefits: ["Looks and feels like natural teeth", "Prevents bone loss", "Lasts a lifetime", "Restores full chewing power"],
    procedure: "A titanium post is surgically placed into the jawbone. After healing, a custom-made porcelain crown is attached.",
    recovery: "Initial healing takes 7-10 days. Full integration occurs over 3-6 months.",
    faqs: [
      { q: "Am I a candidate?", a: "Most adults with healthy gums and enough bone are candidates." },
      { q: "Is the surgery painful?", a: "We offer local anesthesia and sedation for a pain-free procedure." }
    ]
  },
  {
    id: "veneers",
    title: "Porcelain Veneers",
    overview: "Ultra-thin porcelain shells designed to create the 'Hollywood Smile'.",
    benefits: ["Corrects gaps, chips, and stains", "Completely custom shape and color", "Stain-resistant", "Durable and natural-looking"],
    procedure: "A small amount of enamel is removed. Custom veneers are then bonded to the front of your teeth.",
    recovery: "No recovery time needed. You can eat and drink normally immediately.",
    faqs: [
      { q: "How long do they last?", a: "Veneers typically last 10-15 years with good oral hygiene." },
      { q: "Can they be whitened?", a: "Porcelain doesn't change color, so we match them to your ideal shade." }
    ]
  }
];

const TreatmentPage = () => {
  const [activeTab, setActiveTab] = useState(treatments[0].id);

  return (
    <div className="pt-32 pb-24 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">World-Class Treatments</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Discover our range of aesthetic and restorative procedures designed to give you the perfect smile.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3 space-y-4">
            {treatments.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all border ${
                  activeTab === t.id 
                    ? "bg-primary text-white border-primary shadow-xl scale-105" 
                    : "bg-white text-gray-600 border-gray-100 hover:border-secondary"
                }`}
              >
                <h3 className="text-xl font-bold">{t.title}</h3>
                <p className={`text-sm mt-1 ${activeTab === t.id ? "text-gray-300" : "text-gray-400"}`}>{t.overview}</p>
              </button>
            ))}
          </div>

          {/* Treatment Content */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              {treatments.map((t) => t.id === activeTab && (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-50"
                >
                  <h2 className="text-3xl font-serif font-bold text-primary mb-8">{t.title} Detail</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div>
                      <h4 className="text-lg font-bold text-secondary mb-4">Key Benefits</h4>
                      <ul className="space-y-3">
                        {t.benefits.map((b, i) => (
                          <li key={i} className="flex items-center space-x-3 text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-secondary mb-4">The Procedure</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">{t.procedure}</p>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-6 rounded-2xl mb-12 border border-accent/20">
                    <h4 className="font-bold text-primary mb-2">Recovery & Aftercare</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{t.recovery}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-primary mb-6">Frequently Asked Questions</h4>
                    <div className="space-y-4">
                      {t.faqs.map((faq, i) => (
                        <div key={i} className="border-b border-gray-100 pb-4">
                          <p className="font-bold text-gray-800 mb-2">Q: {faq.q}</p>
                          <p className="text-gray-600 text-sm">A: {faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12 flex justify-center">
                    <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-secondary hover:text-primary transition-all">
                      Book {t.title} Consultation
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentPage;
