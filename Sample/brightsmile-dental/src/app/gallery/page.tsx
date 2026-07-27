"use client";

import React from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { motion } from "framer-motion";

const cases = [
  {
    title: "Complete Smile Makeover",
    description: "Full porcelain veneers to correct discoloration and alignment.",
    before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop",
    tag: "Veneers"
  },
  {
    title: "Invisalign Transformation",
    description: "12 months of clear aligner treatment for perfect spacing.",
    before: "https://images.unsplash.com/photo-1593022356769-11f09a79a24e?q=80&w=1000&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop",
    tag: "Invisalign"
  },
  {
    title: "Dental Implant Bridge",
    description: "Restoring full function and aesthetics to the upper arch.",
    before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1000&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?q=80&w=1000&auto=format&fit=crop",
    tag: "Implants"
  }
];

const GalleryPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Transformation Stories</span>
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">Smile Gallery</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">See the life-changing results we&apos;ve achieved for our patients through expert cosmetic and restorative dentistry.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-6 overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                <BeforeAfterSlider beforeImage={c.before} afterImage={c.after} />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">{c.tag}</span>
                <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-primary rounded-[40px] text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-6">Ready for your own transformation?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">Book a free smile assessment and see what&apos;s possible for your smile with our 3D digital simulation.</p>
            <button className="bg-secondary text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
              Start My Smile Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
