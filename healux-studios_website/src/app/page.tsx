"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  Search, 
  Heart,
  Zap,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  MessageSquare,
  BadgeCheck
} from "lucide-react";
import PracticeGrowthCalculator from "@/components/PracticeGrowthCalculator";

export default function AgencyHomePage() {
  const [inquirySent, setInquirySent] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    practice: "",
    specialty: "Dental Clinic",
    message: ""
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email) {
      setInquirySent(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white relative">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 h-20 glass-panel border-b border-white/5 z-50 flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Heart className="h-5 w-5 text-black stroke-[2.5]" />
          </div>
          <div>
            <span className="text-lg font-black tracking-tight text-white group-hover:text-primary transition-colors">HealUX</span>
            <span className="text-xs font-bold text-gray-400 block -mt-1 uppercase tracking-widest">Studios</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-400">
          <Link href="#demos" className="hover:text-white transition-colors">Live Demos</Link>
          <Link href="#features" className="hover:text-white transition-colors">Compliance & Features</Link>
          <Link href="#roi" className="hover:text-white transition-colors">ROI Simulator</Link>
          <Link href="#process" className="hover:text-white transition-colors">Our Process</Link>
        </div>

        <Link 
          href="#contact" 
          className="bg-primary hover:bg-primary-hover px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-black transition-all hover:shadow-lg hover:shadow-primary/25"
        >
          Book Consult
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 px-4.5 py-2 rounded-full border border-white/5"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs font-black uppercase tracking-wider text-gray-300">Premium Medical Web Agency</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] text-white"
          >
            We build websites <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              patients trust & doctors love.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            A generic template won&apos;t build patient confidence. We design custom, HIPAA-compliant, SEO-optimized digital experiences tailored to clinics, dentists, and physical therapists.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link 
              href="#demos" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider text-black transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-primary/20 hover:shadow-primary/30"
            >
              Explore Sample Projects
              <ArrowRight className="h-4.5 w-4.5 stroke-[2.5]" />
            </Link>
            <Link 
              href="#roi" 
              className="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider text-white transition-all flex items-center justify-center gap-2.5"
            >
              Simulate Practice ROI
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/5"
          >
            <div>
              <p className="text-3xl font-black text-white">100%</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">HIPAA & ADA Compliant</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">2.5x</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Conversion Improvement</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-3xl font-black text-white">#1</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Google Search Positions</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:block relative"
        >
          {/* Glass floating abstract UI */}
          <div className="absolute top-12 -left-12 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md shadow-2xl z-20 w-52 flex items-center gap-3">
            <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase">Site Speed</p>
              <p className="text-sm font-bold text-white">0.4s Page Load</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md shadow-2xl z-20 w-60 flex items-center gap-3">
            <div className="h-10 w-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase">Security Audit</p>
              <p className="text-sm font-bold text-white">HIPAA Secure Server</p>
            </div>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-gradient-to-tr from-gray-900 to-gray-800 border border-white/10 p-2 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80" 
              alt="Healthcare designer"
              className="object-cover w-full h-full rounded-[2.2rem] opacity-75"
            />
          </div>
        </motion.div>
      </section>

      {/* Showcase / Sample Sites */}
      <section id="demos" className="py-24 px-6 md:px-12 bg-[#090b16] relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase text-primary tracking-widest bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              Interactive Design System
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Featured Practice Websites</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Explore our live, fully operational sample sites built for different clinical disciplines. Test responsiveness, dynamic tools, and conversions in our device simulator.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "activemotion-physio",
                title: "ActiveMotion Physiotherapy",
                tagline: "Move Better. Recover Faster.",
                bgImg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
                features: ["Pain Assessment Tool", "HD Video Library", "Sports Rehab theme"],
                color: "from-orange-500/20 to-orange-700/20 border-orange-500/30",
                textColor: "text-orange-400"
              },
              {
                id: "brightsmile-dental",
                title: "BrightSmile Dental Care",
                tagline: "Luxury Aesthetic & Restorative Care",
                bgImg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
                features: ["Before/After Slider", "Smile Quiz Quizzer", "Premium Luxury style"],
                color: "from-teal-500/20 to-teal-700/20 border-teal-500/30",
                textColor: "text-teal-400"
              },
              {
                id: "familycare-clinic",
                title: "FamilyCare Clinic",
                tagline: "Empathetic Healthcare for the Family",
                bgImg: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80",
                features: ["Multi-Specialty Grid", "Appointment Flow", "ADA Compliant theme"],
                color: "from-blue-500/20 to-blue-700/20 border-blue-500/30",
                textColor: "text-blue-400"
              }
            ].map((demo) => (
              <motion.div 
                key={demo.id}
                whileHover={{ y: -6 }}
                className="glass-card rounded-[2rem] overflow-hidden border border-white/5 flex flex-col h-[500px]"
              >
                <div className="relative h-48 w-full bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b16] to-transparent z-10" />
                  <img 
                    src={demo.bgImg} 
                    alt={demo.title}
                    className="object-cover w-full h-full opacity-60"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div className="space-y-4">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md bg-white/5 border border-white/5 ${demo.textColor}`}>
                      {demo.title.split(" ").slice(-1)[0]} Showcase
                    </span>
                    <h3 className="text-2xl font-bold text-white leading-tight">{demo.title}</h3>
                    <p className="text-gray-400 text-sm italic">&ldquo;{demo.tagline}&rdquo;</p>
                    
                    <div className="pt-2 flex flex-wrap gap-2">
                      {demo.features.map((feat, index) => (
                        <span key={index} className="text-[10px] bg-white/5 border border-white/5 text-gray-300 px-2 py-1 rounded-md">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={`/preview/?site=${demo.id}`}
                    className="w-full bg-white/5 hover:bg-primary border border-white/10 hover:border-transparent hover:text-black py-3 rounded-xl text-center text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 mt-6"
                  >
                    Open Live Simulator <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-black uppercase text-secondary tracking-widest bg-secondary/10 border border-secondary/20 px-4 py-1.5 rounded-full">
            Clinical Standards
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Engineered for Medical Success</h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Medical websites have higher standards than regular business sites. We engineer our platforms with strict security, patient privacy, and compliance built-in from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "HIPAA Compliant",
              desc: "Form data, patient communications, and scheduler integrations are fully encrypted, securing Protected Health Information (PHI)."
            },
            {
              icon: Smartphone,
              title: "ADA Accessible",
              desc: "Fully compliant with WCAG accessibility guidelines, ensuring all patients can book appointments regardless of visual/motor abilities."
            },
            {
              icon: Search,
              title: "Local Local SEO",
              desc: "Custom schema markup and site structures built to list your practice #1 on Google Local Map Pack and local clinical searches."
            },
            {
              icon: Zap,
              title: "0.4s Fast Load",
              desc: "Optimized Next.js structures load fast, minimizing patient drop-offs and dramatically boosting search engine indexing rank."
            }
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 rounded-[2rem] border border-white/5 space-y-6">
              <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI & Interactive Practice Growth Calculator Section */}
      <section id="roi" className="py-24 px-6 md:px-12 bg-[#090b16] relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-black uppercase text-primary tracking-widest bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              Financial Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              A website that actually <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">pays for itself.</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Most clinical websites act like simple online brochures. HealUX websites are engineered as Patient Acquisition Systems.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              By combining high-definition branding, local SEO visibility, and customized conversion tools (like calculators and sliders), we help your practice capture and book more high-value inquiries directly on your page.
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "Increase patient intake inquiries by average 18%",
                "Elevate practice profile authority in your local region",
                "Reduce front-office administrative load with auto-booking",
                "Full analytics dashboard to prove acquisition value"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-gray-200">
                  <BadgeCheck className="h-5 w-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <PracticeGrowthCalculator />
          </div>
        </div>
      </section>

      {/* How We Work / Process */}
      <section id="process" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-black uppercase text-secondary tracking-widest bg-secondary/10 border border-secondary/20 px-4 py-1.5 rounded-full">
            Our Method
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Our 4-Step Patient Flow Setup</h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            We work hand-in-hand with clinical practices to capture their distinct branding, medical authority, and patient workflow values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              num: "01",
              title: "Specialty Deep-Dive",
              desc: "We analyze your target patient profiles, clinical services, local competitors, and local Google Map pack visibility."
            },
            {
              num: "02",
              title: "Empathy-First Wireframing",
              desc: "We plan clear routing structures to reduce patient friction. Patients in pain want immediate answers, directions, and scheduling."
            },
            {
              num: "03",
              title: "HIPAA Copywriting & Design",
              desc: "We write highly optimized, medically precise content that matches your tone, combined with high-end aesthetic styling."
            },
            {
              num: "04",
              title: "Secure Cloud Deployment",
              desc: "We deploy the website on high-speed servers with active SSL certificates and fully integrated calendar scheduling."
            }
          ].map((step, i) => (
            <div key={i} className="glass-panel p-8 rounded-[2rem] border border-white/5 space-y-6 relative overflow-hidden">
              <span className="text-6xl font-black text-white/5 absolute right-4 top-4 select-none">{step.num}</span>
              <h3 className="text-lg font-bold text-white relative z-10">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-[#090b16] relative z-10">
        <div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-8 md:p-16 border border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative overflow-hidden">
          {/* Accent light glow */}
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-black uppercase text-accent tracking-widest bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full">
              Inquire Today
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Elevate Your Practice Identity.</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Schedule a private Web Strategy Assessment. We&apos;ll audit your current site, local search rankings, and lay out a clear design blueprint.
            </p>
            
            <div className="space-y-4 pt-6 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>hello@healuxstudios.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 304-4325</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Design District, Suite 400, NY</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/[0.01] border border-white/5 p-8 rounded-3xl relative z-10 w-full">
            {inquirySent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                  <ShieldCheck className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Consultation Request Sent!</h3>
                <p className="text-sm text-gray-400 max-w-sm mx-auto">
                  Thank you! Our medical Web Architect will review your local map positions and contact you in 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      placeholder="Dr. Sarah Jenkins"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      placeholder="doctor@practice.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-white" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Practice Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.practice}
                      onChange={(e) => setFormState({...formState, practice: e.target.value})}
                      placeholder="Apex Dental Care"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Practice Specialty</label>
                    <select 
                      value={formState.specialty}
                      onChange={(e) => setFormState({...formState, specialty: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-white"
                    >
                      <option className="bg-[#090b16]">Physiotherapy Clinic</option>
                      <option className="bg-[#090b16]">Dental Clinic</option>
                      <option className="bg-[#090b16]">Family Care Clinic</option>
                      <option className="bg-[#090b16]">Pediatrics / Orthopedics</option>
                      <option className="bg-[#090b16]">Other Medical Practice</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Message / Goals</label>
                  <textarea 
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="Tell us about your practice goals and current website issues..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-white" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-hover text-black font-black uppercase tracking-widest text-xs py-4 rounded-xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Send Inquiry <MessageSquare className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 md:px-12 text-center text-xs text-gray-500 space-y-4">
        <div className="flex items-center justify-center gap-2">
          <div className="h-6 w-6 bg-gradient-to-tr from-primary to-secondary rounded-lg flex items-center justify-center">
            <Heart className="h-3 w-3 text-black stroke-[2.5]" />
          </div>
          <span className="font-extrabold text-white">HealUX Studios</span>
        </div>
        <p className="max-w-md mx-auto">
          Premium web design and conversion systems engineered exclusively for medical professionals. HIPAA & ADA compliant.
        </p>
        <p className="pt-4 text-[10px] text-gray-600">
          © {new Date().getFullYear()} HealUX Studios. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
