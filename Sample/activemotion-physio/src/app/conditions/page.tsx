"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronRight, Activity, Zap, Shield, HeartPulse, Dumbbell, User } from "lucide-react";

const conditions = [
  {
    title: "Back Pain",
    icon: Activity,
    description: "From acute disc issues to chronic lower back stiffness, we use manual therapy and core stabilization.",
    symptoms: ["Sciatica", "Herniated Discs", "Postural Strain"],
  },
  {
    title: "Neck Pain",
    icon: HeartPulse,
    description: "Specialized treatment for desk-workers and whiplash recovery using cervical mobilization.",
    symptoms: ["Tension Headaches", "Whiplash", "Stiff Neck"],
  },
  {
    title: "Sports Injuries",
    icon: Zap,
    description: "Elite rehab for athletes. We treat ligament tears, muscle strains, and impact injuries.",
    symptoms: ["ACL/MCL Tears", "Hamstring Strains", "Concussion"],
  },
  {
    title: "Knee Rehabilitation",
    icon: Dumbbell,
    description: "Post-op recovery and arthritis management to restore full range of motion and strength.",
    symptoms: ["Meniscus Tears", "Runner's Knee", "Total Knee Replacement"],
  },
  {
    title: "Shoulder Problems",
    icon: Shield,
    description: "Expert care for rotator cuff issues and frozen shoulder using progressive loading protocols.",
    symptoms: ["Rotator Cuff Tears", "Impingement", "Dislocations"],
  },
  {
    title: "Arthritis",
    icon: User,
    description: "Evidence-based management to reduce inflammation and maintain joint mobility and function.",
    symptoms: ["Osteoarthritis", "Rheumatoid Arthritis", "Joint Stiffness"],
  },
];

export default function ConditionsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConditions = conditions.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <h1 className="h1 mb-6">Conditions We Treat</h1>
          <p className="text-lg text-slate-600">
            Our clinical experts specialize in diagnosing and treating a wide range of musculoskeletal and neurological conditions. Find your condition below to learn how we help.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search symptoms or conditions..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all bg-white shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredConditions.map((condition, i) => (
            <motion.div
              key={condition.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="h-12 w-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <condition.icon className="h-6 w-6" />
                </div>
                <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{condition.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {condition.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {condition.symptoms.map((symptom) => (
                  <span
                    key={symptom}
                    className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded-md"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredConditions.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 font-medium">No conditions found matching your search. Contact us for a custom consultation.</p>
          </div>
        )}
      </div>
    </div>
  );
}
