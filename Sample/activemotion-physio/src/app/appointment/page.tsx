"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, Activity, ArrowRight } from "lucide-react";
import PainAssessmentCalculator from "@/components/PainAssessmentCalculator";

export default function AppointmentPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Context & Form */}
          <div>
            <div className="mb-12">
              <h1 className="h1 mb-6">Book Your Assessment</h1>
              <p className="text-lg text-slate-600">
                Start your journey to recovery today. Our initial assessments are comprehensive, 1-on-1, and focused on finding the root cause of your pain.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-600" />
                Select Your Preferences
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input type="text" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:outline-none bg-slate-50 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input type="tel" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:outline-none bg-slate-50 transition-all" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Injury Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:outline-none bg-slate-50 transition-all">
                    <option>Sports Injury</option>
                    <option>Chronic Back Pain</option>
                    <option>Post-Surgery Rehab</option>
                    <option>Work-Related Strain</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Preferred Date</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:outline-none bg-slate-50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Preferred Time</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:outline-none bg-slate-50 transition-all">
                      <option>Morning (7am - 12pm)</option>
                      <option>Afternoon (12pm - 5pm)</option>
                      <option>Evening (5pm - 8pm)</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-lg">
                  Submit Request
                  <ArrowRight className="h-5 w-5" />
                </button>
                <p className="text-[10px] text-center text-slate-400 font-medium">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>

          {/* Right Side: Calculator & Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Pain Assessment</h3>
              <p className="text-slate-600 mb-8 text-sm">
                Unsure about what you need? Use our clinical assessment tool to get an initial recommendation.
              </p>
              <PainAssessmentCalculator />
            </div>

            <div className="bg-orange-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4">What to Bring?</h4>
                <ul className="space-y-3">
                  {[
                    "Loose, comfortable clothing",
                    "Relevant scans or medical reports",
                    "A list of current medications",
                    "Your private health insurance card",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium">
                      <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Activity className="h-3 w-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-20 transform rotate-12">
                <Calendar className="h-48 w-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
