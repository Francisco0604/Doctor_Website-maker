"use client";

import React, { useState } from "react";
import { DollarSign, Users, Award, TrendingUp, Sparkles } from "lucide-react";

export default function PracticeGrowthCalculator() {
  const [currentPatients, setCurrentPatients] = useState(250);
  const [patientValue, setPatientValue] = useState(150);

  // Calculations
  // Assume a professionally designed HealUX site drives 15% increase in conversion rate (e.g. from 2% to 4.5% or adds absolute 2.5% conversion)
  // Let's model it as a 15% relative improvement in visitor acquisition and 2.5x conversion rate optimization.
  // Standard web traffic for clinics is ~1,000 visitors/month.
  // With bad website: 2% of 1000 = 20 patients/month.
  // With HealUX website: 6% of 1000 = 60 patients/month (40 extra patients).
  
  const estimatedNewPatients = Math.round((currentPatients * 0.18)); // 18% increase in patient acquisition
  const monthlyRevenueIncrease = estimatedNewPatients * patientValue;
  const annualRevenueIncrease = monthlyRevenueIncrease * 12;

  return (
    <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 space-y-8">
        <div>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-primary uppercase tracking-wider mb-2">
            <Sparkles className="h-3 w-3" /> ROI Simulator
          </span>
          <h3 className="text-2xl font-extrabold text-white">Calculate Your Practice Growth</h3>
          <p className="text-gray-400 text-sm mt-1">See how a patient-centric, high-performance website directly impacts your bottom line.</p>
        </div>

        <div className="space-y-6">
          {/* Slider 1 */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-gray-300 flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Active Patients per Month
              </label>
              <span className="font-extrabold text-white bg-white/5 px-3 py-1 rounded-lg border border-white/5">
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
              className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase">
              <span>50 patients</span>
              <span>1,000 patients</span>
            </div>
          </div>

          {/* Slider 2 */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-gray-300 flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-primary" />
                Average Patient Value ($)
              </label>
              <span className="font-extrabold text-white bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                ${patientValue}
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="1500"
              step="25"
              value={patientValue}
              onChange={(e) => setPatientValue(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase">
              <span>$50</span>
              <span>$1,500</span>
            </div>
          </div>
        </div>

        {/* Results Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/10">
          <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl flex flex-col justify-center">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Est. New Patients / mo</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-black text-primary">+{estimatedNewPatients}</span>
              <span className="text-xs text-gray-500 font-medium">patients</span>
            </div>
            <p className="text-[10px] text-gray-500 mt-2">Via search visibility & conversion layout.</p>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-5 rounded-2xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <TrendingUp className="h-12 w-12 text-primary" />
            </div>
            <p className="text-[10px] text-primary/80 font-bold uppercase tracking-wider">Est. Revenue Increase</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-black text-white">${monthlyRevenueIncrease.toLocaleString()}</span>
              <span className="text-xs text-primary font-bold">/ mo</span>
            </div>
            <p className="text-xs text-gray-400 font-semibold mt-2">
              +${annualRevenueIncrease.toLocaleString()} / year
            </p>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl text-center text-xs text-gray-400 flex items-center justify-center gap-2">
          <Award className="h-4 w-4 text-secondary shrink-0" />
          <span>Patient-first UX yields up to <strong>300% higher conversions</strong> than generic templates.</span>
        </div>
      </div>
    </div>
  );
}
