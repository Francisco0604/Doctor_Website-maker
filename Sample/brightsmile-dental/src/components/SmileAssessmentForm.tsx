"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const SmileAssessmentForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    concern: "",
    goal: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl border border-accent/20 max-w-lg mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Step {step} of 3</span>
          <div className="flex space-x-1">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`h-1.5 w-8 rounded-full ${s <= step ? "bg-secondary" : "bg-gray-100"}`} />
            ))}
          </div>
        </div>
        <h3 className="text-2xl font-serif font-bold text-primary">Free Smile Assessment</h3>
      </div>

      <form className="space-y-6">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">What is your primary dental concern?</label>
            <div className="grid grid-cols-1 gap-3">
              {["Discolored teeth", "Missing teeth", "Crooked teeth", "Gaps between teeth"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => { setFormData({ ...formData, concern: item }); nextStep(); }}
                  className={`text-left px-4 py-3 rounded-xl border transition-all ${
                    formData.concern === item ? "border-secondary bg-accent/10" : "border-gray-200 hover:border-secondary"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">What is your desired outcome?</label>
            <textarea
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-0 resize-none h-32"
              placeholder="Tell us about the smile you've always wanted..."
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            />
            <button
              type="button"
              onClick={nextStep}
              className="w-full mt-4 bg-primary text-white py-3 rounded-xl font-bold"
            >
              Continue
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-0"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-0"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-secondary text-primary py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all"
              onClick={(e) => { e.preventDefault(); alert("Assessment Sent! We will contact you shortly."); }}
            >
              Get My Transformation Plan
            </button>
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default SmileAssessmentForm;
