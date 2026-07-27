"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Clock, Award } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-50 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-200 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
              Official Sports Rehab Partner
            </span>
            <h1 className="h1 mb-6 leading-tight">
              Move Better. <br />
              <span className="text-orange-600">Recover Faster.</span> <br />
              Live Pain-Free.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              We combine elite-level sports science with clinical excellence to get you back to the activities you love. No more "just living with it."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointment" className="btn-primary group">
                Book Assessment
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/treatments" className="btn-secondary">
                View Treatment Plans
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 grayscale opacity-60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-orange-600" />
                <span className="font-bold text-slate-900">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-orange-600" />
                <span className="font-bold text-slate-900">15+ Expert Physios</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              {/* Placeholder for high-motion athlete image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                alt="Physiotherapy treatment"
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Stats Overlay */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100"
            >
              <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 leading-none">12,000+</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Patients Recovered</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="h2">Why ActiveMotion?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We don't just treat symptoms. We analyze your movement patterns to find the root cause and build a path to lasting performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Rapid Recovery",
                desc: "Our data-driven protocols are designed to get you back to 100% up to 30% faster than traditional methods.",
              },
              {
                icon: Users,
                title: "1-on-1 Focus",
                desc: "Every session is private and dedicated solely to you. No split attention, no wasted time.",
              },
              {
                icon: Award,
                title: "Elite Expertise",
                desc: "Our therapists have worked with professional athletes across the NFL, NBA, and Premier League.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="card border-none bg-slate-50"
              >
                <div className="h-14 w-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
