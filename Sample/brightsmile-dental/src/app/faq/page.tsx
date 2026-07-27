"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "General",
    questions: [
      { q: "Are you accepting new patients?", a: "Yes! We are always happy to welcome new members to the BrightSmile family. You can book your first consultation online or by phone." },
      { q: "What should I bring to my first appointment?", a: "Please bring your ID, any previous dental records if available, and a list of current medications." }
    ]
  },
  {
    category: "Treatments",
    questions: [
      { q: "Does cosmetic dentistry hurt?", a: "Our primary goal is your comfort. We use advanced local anesthesia and sedation options to ensure all procedures are completely pain-free." },
      { q: "How long does a smile makeover take?", a: "It varies by patient. Some treatments (like whitening) take an hour, while veneers or implants may require multiple visits over several weeks." }
    ]
  },
  {
    category: "Insurance & Finance",
    questions: [
      { q: "Do you accept dental insurance?", a: "We work with most major PPO insurance providers as an out-of-network boutique practice. We handle all the paperwork for you." },
      { q: "What payment methods do you accept?", a: "We accept all major credit cards, Apple Pay, and offer financing through CareCredit and our internal plans." }
    ]
  }
];

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? "text-secondary" : "text-primary group-hover:text-secondary"}`}>
          {q}
        </span>
        <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          {isOpen ? <Minus className="text-secondary" /> : <Plus className="text-primary group-hover:text-secondary" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 leading-relaxed max-w-3xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage = () => {
  return (
    <div className="pt-32 pb-24 bg-[#FDFCFB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Knowledge Hub</span>
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">Common Questions</h1>
          <p className="text-gray-500">Everything you need to know about your journey with BrightSmile Dental Care.</p>
        </div>

        <div className="space-y-12">
          {faqs.map((group, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-secondary uppercase tracking-widest mb-6 border-l-4 border-secondary pl-4">
                {group.category}
              </h2>
              <div className="bg-white rounded-[32px] px-8 shadow-sm border border-gray-50">
                {group.questions.map((faq, j) => (
                  <FAQItem key={j} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-accent/20 rounded-[40px] text-center border border-accent/30">
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8">Our patient coordinators are ready to help you with any specific queries you may have.</p>
          <div className="flex flex-col sm:row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold">Call Us: (555) 123-4567</button>
            <button className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full font-bold">Email Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
