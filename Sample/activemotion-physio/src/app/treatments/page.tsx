"use client";

import React from "react";
import { motion } from "framer-motion";
import { Timer, Target, BarChart3, Footprints, ClipboardList, Thermometer, ShieldCheck } from "lucide-react";
import ExerciseVideoLibrary from "@/components/ExerciseVideoLibrary";

const treatmentPlans = [
  {
    title: "Sports Rehabilitation",
    tagline: "Return to Play Faster",
    process: ["Biomechanical Analysis", "Sport-Specific Loading", "Plyometric Training"],
    timeline: "4-12 Weeks",
    outcomes: "Restore peak performance and reduce re-injury risk by 60%.",
    color: "bg-orange-600",
  },
  {
    title: "Post-Surgery Recovery",
    tagline: "Precision Post-Op Care",
    process: ["Pain Management", "Mobility Restoration", "Functional Strengthening"],
    timeline: "8-24 Weeks",
    outcomes: "Optimal tissue healing and restoration of normal daily function.",
    color: "bg-slate-800",
  },
  {
    title: "Chronic Pain Management",
    tagline: "Rewire Your Pain System",
    process: ["Pain Education", "Graded Motor Imagery", "Lifestyle Modification"],
    timeline: "Ongoing / 6 Months",
    outcomes: "Significantly reduced pain perception and improved quality of life.",
    color: "bg-orange-500",
  },
];

const steps = [
  { icon: ClipboardList, title: "Initial Assessment", desc: "60-minute deep dive into your history and goals." },
  { icon: Footprints, title: "Gait & Motion Analysis", desc: "Using high-speed sensors to identify movement flaws." },
  { icon: Target, title: "Personalized Protocol", desc: "A bespoke plan updated weekly based on your data." },
  { icon: BarChart3, title: "Outcome Tracking", desc: "Objective metrics to prove your progress at every stage." },
];

export default function TreatmentsPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="section-container">
        <div className="text-center mb-20">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">Our Methodology</span>
          <h1 className="h1 mt-4">Precision Treatment Plans</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mt-6 text-lg">
            We move beyond standard physiotherapy. Our data-driven approach ensures your recovery is efficient, objective, and sustainable.
          </p>
        </div>

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {treatmentPlans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-xl"
            >
              <div className={`h-2 ${plan.color}`} />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.title}</h3>
                <p className="text-orange-600 font-bold text-xs uppercase tracking-wider mb-8">{plan.tagline}</p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                      <Timer className="h-4 w-4" /> Recovery Timeline
                    </p>
                    <p className="text-slate-900 font-bold">{plan.timeline}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-3">Key Process</p>
                    <ul className="space-y-2">
                      {plan.process.map((p) => (
                        <li key={p} className="text-slate-600 text-sm flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-600" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-2">
                    <Thermometer className="h-4 w-4" /> Expected Outcomes
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed">{plan.outcomes}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Process */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">The ActiveMotion Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                    <step.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hybrid Care */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
          <div>
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">Hybrid Care</span>
            <h2 className="h2 mt-4">Recovery Doesn't Stop at the Clinic Door</h2>
            <p className="text-slate-600 text-lg mb-8">
              We provide all patients with access to our proprietary exercise library. High-definition videos and precise instructions ensure you're performing your home program with clinical accuracy.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "HD video guides for every prescribed exercise",
                "Progress tracking via our member portal",
                "Direct messaging with your therapist",
                "Customized loading protocols",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-900 font-bold">
                  <ShieldCheck className="h-5 w-5 text-orange-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-inner">
            <ExerciseVideoLibrary />
          </div>
        </div>
      </div>
    </div>
  );
}
