"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Clock, Award } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-50 pt-20 pb-16 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-100/60 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-200 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-orange-100 text-orange-900 border border-orange-200 text-xs font-black uppercase tracking-wider">
              Gentle & Data-Backed Physiotherapy
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
              Move Better. <br />
              <span className="text-orange-600">Recover Faster.</span> <br />
              Live Pain-Free.
            </h1>
            <p className="text-base sm:text-xl text-slate-700 max-w-lg leading-relaxed font-medium">
              We combine specialized movement science with gentle clinical care to help senior adults and active individuals restore mobility and live without stiffness or pain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="appointment.html" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 shadow-lg transition-all">
                  Book Initial Assessment <ArrowRight className="h-5 w-5" />
                </a>
                <a href="treatments.html" className="bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-full font-bold text-base text-center transition-all">
                  Explore Treatments
                </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-orange-600" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-orange-600" />
                <span>15+ Expert Physios</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-slate-200">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                alt="Physiotherapy treatment"
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-200 z-20">
              <div className="h-12 w-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 border border-orange-200">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">12,000+</p>
                <p className="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1">Patients Recovered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase text-orange-800 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full inline-block">
              Clinical Quality
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900">Why ActiveMotion?</h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium">
              We analyze your movement patterns to find the root cause of discomfort and build a gentle, lasting recovery path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                category: "PROTOCOL",
                title: "Rapid & Safe Recovery",
                desc: "Our customized physical therapy protocols are structured to relieve joint pain and restore mobility safely.",
              },
              {
                icon: Users,
                category: "DEDICATION",
                title: "Private 1-on-1 Focus",
                desc: "Every therapy session is private and dedicated strictly to you. No rushed care, no split attention.",
              },
              {
                icon: Award,
                category: "EXPERTISE",
                title: "Licensed Specialists",
                desc: "Our senior therapists hold doctorate degrees in physical therapy with decades of combined clinical experience.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 border-t-4 border-t-orange-600 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 bg-orange-100 text-orange-700 rounded-2xl flex items-center justify-center border border-orange-200">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

