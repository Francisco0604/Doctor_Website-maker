"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Marathon Runner",
    story: "I had a recurring hamstring tear that wouldn't heal. The team at ActiveMotion analyzed my stride and found the root cause in my hip stability. I'm back to running PRs!",
    result: "Back to running in 6 weeks",
    rating: 5,
  },
  {
    name: "Mark Thompson",
    role: "Software Engineer",
    story: "Years of desk work left me with chronic neck pain and headaches. Their manual therapy and workstation ergonomics advice changed my life. I'm finally pain-free.",
    result: "90% reduction in headaches",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Pro Basketball Player",
    story: "After my ACL surgery, I was worried about my career. ActiveMotion's elite sports rehab program was intense and professional. Their data tracking kept me motivated.",
    result: "Returned to play in 9 months",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Yoga Instructor",
    story: "I struggled with a frozen shoulder for months. The specialized mobilization techniques used here were game-changing. I have my full range of motion back.",
    result: "Full mobility restored",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Weekend Warrior",
    story: "Knee pain was stopping me from playing soccer with my kids. The strengthening program was easy to follow and incredibly effective. No more pain on the pitch.",
    result: "Pain-free activity",
    rating: 5,
  },
  {
    name: "Linda M.",
    role: "Retiree",
    story: "Arthritis was making it hard to walk my dog. The gentle exercise program and joint management advice have given me my independence back. Highly recommend!",
    result: "3x increase in walking distance",
    rating: 5,
  },
  {
    name: "Robert P.",
    role: "Construction Worker",
    story: "Lower back pain is part of the job, I thought. But after 4 sessions, the pain was gone and I learned how to lift properly. No more sick days due to my back.",
    result: "Zero work days lost",
    rating: 5,
  },
  {
    name: "Sophie T.",
    role: "CrossFit Athlete",
    story: "Shoulder impingement was ruining my overhead lifts. The detailed assessment found muscle imbalances I never knew I had. My lifting form has never been better.",
    result: "Added 10kg to snatch PR",
    rating: 5,
  },
  {
    name: "Michael B.",
    role: "Post-Op Patient",
    story: "Recovery from hip replacement was daunting. The therapists here were patient and encouraging. I'm walking better now than I did 5 years ago.",
    result: "Normal gait in 12 weeks",
    rating: 5,
  },
  {
    name: "Karen L.",
    role: "Teacher",
    story: "Sciatica was making it impossible to stand in front of my class. The combination of traction and nerve gliding exercises worked wonders within weeks.",
    result: "Immediate relief from nerve pain",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="section-container">
        <div className="text-center mb-20">
          <h1 className="h1 mb-6">Patient Success Stories</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real stories from real patients. See how our specialized physiotherapy has helped people from all walks of life return to the activities they love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <Quote className="h-10 w-10 text-orange-200" />
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.story}"</p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t.role}</p>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-lg border border-orange-100">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-xs font-bold">{t.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
