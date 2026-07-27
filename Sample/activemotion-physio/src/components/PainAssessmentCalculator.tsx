"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, ChevronRight, RotateCcw, Activity } from "lucide-react";

const questions = [
  {
    id: 1,
    text: "Where is your primary source of pain?",
    options: ["Back/Spine", "Shoulder/Neck", "Hip/Knee", "Ankle/Foot", "Other"],
  },
  {
    id: 2,
    text: "How would you rate the intensity (0-10)?",
    options: ["1-3 (Mild)", "4-6 (Moderate)", "7-8 (Severe)", "9-10 (Extreme)"],
  },
  {
    id: 3,
    text: "How long has this been bothering you?",
    options: ["Less than a week", "1-4 weeks", "1-3 months", "3+ months"],
  },
];

export default function PainAssessmentCalculator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsFinished(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setIsFinished(false);
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl border border-white/10 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Activity className="h-32 w-32" />
      </div>

      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="relative z-10"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">
                Question {step + 1} of {questions.length}
              </span>
              <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-orange-600 transition-all duration-500" 
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-8 leading-tight">{questions[step].text}</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {questions[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className="w-full text-left p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-orange-600 hover:border-orange-500 transition-all flex justify-between items-center group"
                >
                  <span className="font-medium">{opt}</span>
                  <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 relative z-10"
          >
            <div className="h-20 w-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-600/20">
              <AlertCircle className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Initial Assessment Complete</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Based on your answers, we recommend a <span className="text-white font-bold">60-minute Clinical Assessment</span> to deep-dive into your {answers[0].toLowerCase()} issues.
            </p>
            <div className="flex flex-col gap-4">
              <button className="btn-primary w-full py-4 rounded-2xl">
                Priority Booking
              </button>
              <button 
                onClick={reset}
                className="flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold py-2"
              >
                <RotateCcw className="h-4 w-4" /> Restart Quiz
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
