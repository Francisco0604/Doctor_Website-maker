"use client";

import React, { useState } from "react";
import { IndianRupee, Users, Award, TrendingUp, Sparkles } from "lucide-react";

export default function PracticeGrowthCalculator() {
  const [currentPatients, setCurrentPatients] = useState(250);
  const [patientValue, setPatientValue] = useState(1500);

  const estimatedNewPatients = Math.round(currentPatients * 0.18);
  const monthlyRevenueIncrease = estimatedNewPatients * patientValue;
  const annualRevenueIncrease = monthlyRevenueIncrease * 12;

  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200/80 shadow-lg relative overflow-hidden">
      {/* Background soft ambient highlight */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-100/80 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 space-y-8">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 uppercase tracking-wider bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full mb-3">
            <Sparkles className="h-3.5 w-3.5 text-sky-600" /> ROI Calculator
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900">Calculate Practice Growth</h3>
          <p className="text-slate-600 text-sm mt-1">See how a patient-centric, high-performance website directly impacts your monthly income.</p>
        </div>

        <div className="space-y-6">
          {/* Slider 1 */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700 flex items-center gap-2">
                <Users className="h-4 w-4 text-sky-600" />
                Active Patients per Month
              </label>
              <span className="font-extrabold text-sky-800 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200/80">
                {currentPatients}
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="1000"
              step="10"
              value={currentPatients}
              onChange={(e) => setCurrentPatients(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
              <span>50 patients</span>
              <span>1,000 patients</span>
            </div>
          </div>

          {/* Slider 2 */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700 flex items-center gap-2">
                <IndianRupee className="h-4 w-4 text-sky-600" />
                Average Patient Value (₹)
              </label>
              <span className="font-extrabold text-sky-800 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200/80">
                ₹{patientValue.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="15000"
              step="250"
              value={patientValue}
              onChange={(e) => setPatientValue(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
              <span>₹500</span>
              <span>₹15,000</span>
            </div>
          </div>
        </div>

        {/* Results Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
          <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl flex flex-col justify-center">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Est. New Patients / mo</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-black text-sky-600">+{estimatedNewPatients}</span>
              <span className="text-xs text-slate-500 font-medium">patients</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-2">Via local map search & conversion layout.</p>
          </div>

          <div className="bg-emerald-50/80 border border-emerald-200/80 p-5 rounded-2xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <TrendingUp className="h-12 w-12 text-emerald-600" />
            </div>
            <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider">Est. Revenue Increase</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-black text-emerald-700">₹{monthlyRevenueIncrease.toLocaleString('en-IN')}</span>
              <span className="text-xs text-emerald-700 font-bold">/ mo</span>
            </div>
            <p className="text-xs text-emerald-800 font-semibold mt-2">+₹{annualRevenueIncrease.toLocaleString('en-IN')} / year</p>
          </div>
        </div>

        <div className="bg-sky-50/60 border border-sky-100 p-4 rounded-xl text-center text-xs text-slate-600 flex items-center justify-center gap-2">
          <Award className="h-4 w-4 text-sky-600 shrink-0" />
          <span>Patient-first UX yields up to <strong>300% higher conversions</strong> than generic templates.</span>
        </div>
      </div>
    </div>
  );
}
