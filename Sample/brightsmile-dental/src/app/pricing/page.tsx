"use client";

import React from "react";
import { Check, Shield } from "lucide-react";

const plans = [
  {
    name: "Smile Refresh",
    price: "From $299",
    description: "Perfect for routine maintenance and subtle enhancement.",
    features: [
      "Medical Grade Teeth Whitening",
      "Comprehensive Cleaning",
      "Digital X-Rays",
      "Oral Health Assessment"
    ]
  },
  {
    name: "Luxury Transformation",
    price: "From $1,200/unit",
    description: "A complete overhaul for a red-carpet-ready smile.",
    popular: true,
    features: [
      "Custom Porcelain Veneers",
      "3D Smile Design Simulation",
      "Laser Gum Contouring",
      "Bespoke Shade Matching",
      "10-Year Warranty"
    ]
  },
  {
    name: "Restorative Excellence",
    price: "Custom Quote",
    description: "Advanced surgical solutions for complex dental needs.",
    features: [
      "Premium Dental Implants",
      "Bone Grafting (if needed)",
      "Zirconia Bridges",
      "IV Sedation Options",
      "Lifetime Post-Op Support"
    ]
  }
];

const PricingPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Investment in Yourself</span>
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">Pricing & Finance</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Transparent pricing for premium dental care. We also offer 0% interest financing plans to make your dream smile accessible.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-[40px] border-2 transition-all ${
                plan.popular 
                  ? "bg-primary text-white border-primary shadow-2xl scale-105 z-10" 
                  : "bg-white text-primary border-gray-100 hover:border-accent"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-serif font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6 text-secondary">{plan.price}</div>
              <p className={`text-sm mb-8 leading-relaxed ${plan.popular ? "text-gray-300" : "text-gray-500"}`}>{plan.description}</p>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center space-x-3">
                    <Check size={18} className="text-secondary shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-bold transition-all ${
                plan.popular 
                  ? "bg-secondary text-primary hover:bg-white" 
                  : "bg-primary text-white hover:bg-secondary hover:text-primary"
              }`}>
                Book Consultation
              </button>
            </div>
          ))}
        </div>

        <div className="bg-accent/10 rounded-[40px] p-8 md:p-12 border border-accent/20 flex flex-col md:row justify-between items-center text-center md:text-left gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center justify-center md:justify-start">
              <Shield className="mr-3 text-secondary" size={32} />
              Flexible Finance Options
            </h2>
            <p className="text-gray-600 text-sm">
              We believe everyone deserves a beautiful smile. That&apos;s why we partner with leading finance providers to offer monthly payment plans starting from 0% APR. Spread the cost of your treatment over 12-60 months.
            </p>
          </div>
          <button className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all whitespace-nowrap">
            Check Your Eligibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
