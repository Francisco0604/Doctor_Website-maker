"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";

const blogArticles = [
  {
    title: "5 Signs You're Training Through an Injury (And When to Stop)",
    category: "Injury Prevention",
    readTime: "6 min read",
    excerpt: "Learn how to distinguish between 'good' muscle soreness and 'bad' structural pain to avoid long-term damage.",
  },
  {
    title: "The Desk Worker's Survival Guide: Fix Your Posture in 3 Minutes",
    category: "Lifestyle",
    readTime: "4 min read",
    excerpt: "Simple, evidence-based stretches you can do at your desk to eliminate neck and shoulder tension.",
  },
  {
    title: "ACL Recovery: Why the First 4 Weeks are Critical for Success",
    category: "Rehabilitation",
    readTime: "10 min read",
    excerpt: "A deep dive into the initial stages of post-op recovery and how to set yourself up for a return to sport.",
  },
  {
    title: "Is Ice or Heat Better for Your Pain? The Ultimate Verdict",
    category: "Tips & Advice",
    readTime: "5 min read",
    excerpt: "We clear up the confusion around thermal therapy and when to use each for optimal healing.",
  },
  {
    title: "Why Your Foot Core Might Be the Secret to Solving Knee Pain",
    category: "Biomechanics",
    readTime: "7 min read",
    excerpt: "Exploring the link between intrinsic foot strength and upstream joint stability in athletes.",
  },
  {
    title: "Understanding Chronic Pain: It's Not All in Your Head",
    category: "Education",
    readTime: "8 min read",
    excerpt: "An introduction to central sensitization and why chronic pain requires a different approach than acute injuries.",
  },
  {
    title: "The Role of Nutrition in Soft Tissue Recovery and Healing",
    category: "Health",
    readTime: "6 min read",
    excerpt: "What to eat to support collagen synthesis and reduce systemic inflammation during rehab.",
  },
  {
    title: "Dry Needling vs. Acupuncture: What's the Real Difference?",
    category: "Treatments",
    readTime: "5 min read",
    excerpt: "A clinical comparison of these two popular needle-based therapies for muscle tension.",
  },
  {
    title: "How to Build a Resilient Back: Beyond the Bird-Dog Exercise",
    category: "Strength",
    readTime: "9 min read",
    excerpt: "Advanced core stability concepts for those looking to bulletproof their spine for heavy lifting.",
  },
  {
    title: "The Importance of Sleep in Athletic Recovery and Performance",
    category: "Recovery",
    readTime: "6 min read",
    excerpt: "Why sleep is the most powerful recovery tool in your arsenal and how to optimize it.",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h1 className="h1 mb-6">Movement & Recovery Insights</h1>
            <p className="text-lg text-slate-600">
              Expert advice from our clinical team to help you stay active, avoid injury, and understand your body better.
            </p>
          </div>
          <div className="flex gap-2">
            {["All", "Rehab", "Performance", "Lifestyle"].map((cat) => (
              <button key={cat} className="px-4 py-2 rounded-full border border-slate-200 text-sm font-bold text-slate-600 hover:border-orange-600 hover:text-orange-600 transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-orange-600 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-400 font-bold uppercase tracking-wider mb-3">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {article.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <Tag className="h-3.5 w-3.5" /> {article.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                {article.excerpt}
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-black text-slate-900 group-hover:gap-3 transition-all">
                Read Article <ArrowRight className="h-4 w-4 text-orange-600" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
