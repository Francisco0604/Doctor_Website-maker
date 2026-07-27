"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  BadgeCheck,
  CheckCircle2,
  Lock,
  Stethoscope,
  Activity,
  Award,
  Menu,
  X
} from "lucide-react";
import PracticeGrowthCalculator from "@/components/PracticeGrowthCalculator";
import LiveSimulatorModal from "@/components/LiveSimulatorModal";

export default function AgencyHomePage() {
  const [inquirySent, setInquirySent] = useState(false);
  const [activePreviewSite, setActivePreviewSite] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const site = params.get("site");
      if (site) {
        setActivePreviewSite(site);
      }
    }
  }, []);

  const openSimulator = (siteId: string) => {
    setActivePreviewSite(siteId);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("site", siteId);
      window.history.pushState({}, "", url.toString());
    }
  };

  const closeSimulator = () => {
    setActivePreviewSite(null);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("site");
      window.history.pushState({}, "", url.pathname);
    }
  };

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
    <div className="min-h-screen bg-slate-50 text-slate-900 relative selection:bg-sky-500 selection:text-white">
      {/* Ambient medical soft background glows */}
      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-sky-200/40 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-teal-200/30 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-200/30 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none z-0" />

      {/* Header / Navigation */}
      <nav className="fixed top-0 inset-x-0 h-16 sm:h-20 bg-white/90 backdrop-blur-md border-b border-slate-200/80 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 shadow-sm">
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
          <div className="h-9 w-9 sm:h-10 sm:w-10 bg-gradient-to-br from-sky-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform shrink-0">
            <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-white stroke-[2.5]" />
          </div>
          <div>
            <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">HealUX</span>
            <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-500 block -mt-1 uppercase tracking-widest">Medical Web Agency</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <Link href="#demos" className="hover:text-sky-600 transition-colors">Live Practice Demos</Link>
          <Link href="#features" className="hover:text-sky-600 transition-colors">Clinical Compliance</Link>
          <Link href="#roi" className="hover:text-sky-600 transition-colors">ROI Simulator</Link>
          <Link href="#process" className="hover:text-sky-600 transition-colors">Our Method</Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link 
            href="#contact" 
            className="bg-sky-600 hover:bg-sky-700 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider text-white transition-all shadow-md shadow-sky-600/20 hover:shadow-lg"
          >
            Book Consult
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 inset-x-0 bg-white border-b border-slate-200 shadow-xl z-40 md:hidden p-6 flex flex-col space-y-4 text-sm font-bold text-slate-700"
          >
            <Link href="#demos" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-600 py-2 border-b border-slate-100">Live Practice Demos</Link>
            <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-600 py-2 border-b border-slate-100">Clinical Compliance</Link>
            <Link href="#roi" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-600 py-2 border-b border-slate-100">ROI Simulator</Link>
            <Link href="#process" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-600 py-2 border-b border-slate-100">Our Method</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-600 py-2 text-sky-600 font-extrabold">Book Consultation →</Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/80 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full"
          >
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-sky-600" />
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-sky-800">Trusted by Doctors & Clinics</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] sm:leading-[1.08] text-slate-900"
          >
            We build websites <br />
            <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-blue-700 bg-clip-text text-transparent">
              patients trust & doctors rely on.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-medium"
          >
            A generic business template won&apos;t build patient confidence. We engineer clean, HIPAA-ready, fast digital experiences tailored specifically for doctors, dentists, clinics, and physical therapists.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3.5 pt-2"
          >
            <Link 
              href="#demos" 
              className="bg-sky-600 hover:bg-sky-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-sky-600/25 hover:shadow-sky-600/40 w-full sm:w-auto"
            >
              Explore Live Demos
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
            <Link 
              href="#roi" 
              className="bg-white border border-slate-300 hover:bg-slate-50 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 transition-all flex items-center justify-center gap-2.5 shadow-sm w-full sm:w-auto text-center"
            >
              Calculate Practice ROI
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 sm:pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 border-t border-slate-200"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">100%</p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">HIPAA & ADA Compliant</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">2.5x</p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Patient Conversion</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-2xl sm:text-3xl font-black text-slate-900">#1</p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Google Local Rankings</p>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual Cards */}
        <div className="lg:col-span-5 hidden lg:block relative">
          {/* Floating Metric 1 */}
          <div className="absolute top-8 -left-10 bg-white border border-slate-200/90 p-4 rounded-2xl shadow-xl z-20 w-52 flex items-center gap-3">
            <div className="h-10 w-10 bg-sky-50 rounded-full flex items-center justify-center border border-sky-100">
              <Zap className="h-5 w-5 text-sky-600" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Page Speed</p>
              <p className="text-xs font-extrabold text-slate-900">0.4s Fast Load</p>
            </div>
          </div>

          {/* Floating Metric 2 */}
          <div className="absolute -bottom-6 -right-6 bg-white border border-slate-200/90 p-4 rounded-2xl shadow-xl z-20 w-60 flex items-center gap-3">
            <div className="h-10 w-10 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Security Standard</p>
              <p className="text-xs font-extrabold text-slate-900">HIPAA Encrypted Server</p>
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-gradient-to-tr from-slate-200 to-sky-100 border border-slate-200/80 p-2 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80" 
              alt="Medical Practice Web Design"
              className="object-cover w-full h-full rounded-[2.2rem]"
            />
          </div>
        </div>
      </section>

      {/* Featured Practice Showcase Section */}
      <section id="demos" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white border-y border-slate-200/80 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase text-sky-700 tracking-widest bg-sky-50 border border-sky-200/80 px-4 py-1.5 rounded-full">
              Interactive Practice Demos
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">Featured Practice Websites</h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              Explore fully functional sample sites custom built for different medical specialties. Test responsive designs, booking tools, and patient conversion features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                id: "activemotion-physio",
                title: "ActiveMotion Physiotherapy",
                tagline: "Move Better. Recover Faster.",
                bgImg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
                features: ["Pain Assessment Tool", "HD Video Library", "Sports Rehab Theme"],
                badgeColor: "bg-orange-50 text-orange-700 border-orange-200"
              },
              {
                id: "brightsmile-dental",
                title: "BrightSmile Dental Care",
                tagline: "Luxury Aesthetic & Restorative Care",
                bgImg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
                features: ["Before/After Slider", "Smile Quizzer", "Luxury Aesthetic"],
                badgeColor: "bg-teal-50 text-teal-700 border-teal-200"
              },
              {
                id: "familycare-clinic",
                title: "FamilyCare Clinic",
                tagline: "Empathetic Healthcare for the Family",
                bgImg: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80",
                features: ["Multi-Specialty Grid", "Appointment Flow", "ADA Accessible"],
                badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
              }
            ].map((demo) => (
              <motion.div 
                key={demo.id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl sm:rounded-[2rem] overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-auto min-h-[460px]"
              >
                <div className="relative h-44 sm:h-48 w-full bg-slate-100">
                  <img 
                    src={demo.bgImg} 
                    alt={demo.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-white">
                  <div className="space-y-3 sm:space-y-4">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-md border ${demo.badgeColor} inline-block`}>
                      {demo.title.split(" ").slice(-1)[0]} Showcase
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">{demo.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm italic font-medium">&ldquo;{demo.tagline}&rdquo;</p>
                    
                    <div className="pt-2 flex flex-wrap gap-1.5 sm:gap-2">
                      {demo.features.map((feat, index) => (
                        <span key={index} className="text-[10px] bg-slate-100 border border-slate-200 text-slate-700 font-semibold px-2.5 py-1 rounded-md">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    type="button"
                    onClick={() => openSimulator(demo.id)}
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 mt-6 cursor-pointer shadow-md shadow-sky-600/20"
                  >
                    Open Live Simulator <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Standards / Features Section */}
      <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-16">
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-black uppercase text-teal-700 tracking-widest bg-teal-50 border border-teal-200/80 px-4 py-1.5 rounded-full">
            Clinical Standards
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">Engineered for Medical Success</h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            Medical websites demand higher security and privacy standards than standard business sites. We build each platform with strict security, patient privacy, and compliance from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "HIPAA Compliant",
              desc: "Form data, patient inquiries, and scheduling forms are end-to-end encrypted to safeguard Protected Health Information (PHI)."
            },
            {
              icon: Smartphone,
              title: "ADA Accessible",
              desc: "Fully aligned with WCAG 2.1 accessibility guidelines, ensuring all patients can read and book seamlessly on any device."
            },
            {
              icon: Search,
              title: "Local Google SEO",
              desc: "Medical schema markup structured to list your clinic #1 on Google Local Maps and regional doctor searches."
            },
            {
              icon: Zap,
              title: "0.4s Fast Load",
              desc: "Blazing fast page loads minimize patient drop-offs, boosting appointment conversion rates by up to 2.5x."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-slate-200/80 shadow-sm hover:shadow-lg transition-all space-y-4 sm:space-y-5">
              <div className="h-12 w-12 bg-sky-50 rounded-2xl flex items-center justify-center border border-sky-100">
                <item.icon className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practice ROI Calculator Section */}
      <section id="roi" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white border-y border-slate-200/80 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <span className="text-xs font-black uppercase text-sky-700 tracking-widest bg-sky-50 border border-sky-200/80 px-4 py-1.5 rounded-full">
              Financial Impact
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              A practice website that <br />
              <span className="bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
                pays for itself.
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              Most medical websites act like static brochures. HealUX websites are engineered as active Patient Acquisition Systems.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              By combining high-trust clinical branding, local Google visibility, and interactive tools, we help your clinic attract and book more patient appointments directly online.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "Increase new patient online inquiries by an average of 18%",
                "Elevate local practice authority in your region",
                "Reduce front-office phone call workload with online booking",
                "Transparent analytics dashboard showing acquisition metrics"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start sm:items-center gap-3 text-xs sm:text-sm text-slate-700 font-semibold">
                  <CheckCircle2 className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-sky-600 shrink-0 mt-0.5 sm:mt-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <PracticeGrowthCalculator />
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section id="process" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-16">
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-black uppercase text-teal-700 tracking-widest bg-teal-50 border border-teal-200/80 px-4 py-1.5 rounded-full">
            Our Method
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">Our 4-Step Setup Process</h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            We work closely with doctors and practice owners to capture their clinical authority, brand identity, and patient scheduling needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { step: "01", title: "Practice Deep-Dive", text: "We analyze your specialty services, patient demographics, and local Google Map rankings." },
            { step: "02", title: "Patient Flow Design", text: "We structure clear navigation paths so patients in pain can quickly find info and book." },
            { step: "03", title: "Clinical Copy & Branding", text: "We write medically precise, high-trust content combined with clean, modern aesthetics." },
            { step: "04", title: "Secure Deployment", text: "We launch your site on high-speed SSL servers with active calendar booking integration." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-slate-200/80 shadow-sm space-y-3 sm:space-y-4 relative overflow-hidden">
              <span className="text-4xl sm:text-5xl font-black text-slate-100 absolute right-4 top-4 select-none">{item.step}</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 relative z-10">{item.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed relative z-10 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Consultation Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white border-t border-slate-200/80 relative z-10">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-2xl sm:rounded-[3rem] p-6 sm:p-10 md:p-16 border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative overflow-hidden">
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <span className="text-xs font-black uppercase text-sky-700 tracking-widest bg-sky-100 border border-sky-200 px-4 py-1.5 rounded-full inline-block">
              Inquire Today
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">Elevate Your Practice Presence.</h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              Schedule a private Web Strategy Assessment. We&apos;ll review your current website, local search position, and provide a clear design blueprint.
            </p>
            
            <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <Mail className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>
                <span className="truncate">hello@healuxstudios.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <Phone className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>
                <span>+91 78750 44836</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <MapPin className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>
                <span>Candolim, Bardez, Goa, India</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-md relative z-10 w-full">
            {inquirySent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 sm:py-12 space-y-4"
              >
                <div className="h-14 w-14 sm:h-16 sm:w-16 bg-emerald-100 border border-emerald-300 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Consultation Request Received!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto font-medium">
                  Thank you, Doctor. Our Web Architect will review your local map positions and contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      placeholder="Dr. Sarah Jenkins"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-sky-600 text-slate-900 font-medium" 
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      placeholder="doctor@practice.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-sky-600 text-slate-900 font-medium" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">Practice Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.practice}
                      onChange={(e) => setFormState({...formState, practice: e.target.value})}
                      placeholder="Apex Medical Center"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-sky-600 text-slate-900 font-medium" 
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">Practice Specialty</label>
                    <select 
                      value={formState.specialty}
                      onChange={(e) => setFormState({...formState, specialty: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-sky-600 text-slate-900 font-medium"
                    >
                      <option>Physiotherapy Clinic</option>
                      <option>Dental Clinic</option>
                      <option>Family Care Clinic</option>
                      <option>Pediatrics / Orthopedics</option>
                      <option>Other Medical Practice</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">Message / Practice Goals</label>
                  <textarea 
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="Tell us about your practice goals and current website needs..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-sky-600 text-slate-900 font-medium" 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold uppercase tracking-widest text-xs py-3.5 sm:py-4 rounded-xl transition-all shadow-md shadow-sky-600/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Send Inquiry <MessageSquare className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-10 sm:py-12 px-4 sm:px-6 md:px-12 text-center text-xs text-slate-400 space-y-4">
        <div className="flex items-center justify-center gap-2">
          <div className="h-6 w-6 sm:h-7 sm:w-7 bg-sky-600 rounded-lg flex items-center justify-center">
            <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white stroke-[2.5]" />
          </div>
          <span className="font-extrabold text-white text-xs sm:text-sm">HealUX Studios</span>
        </div>
        <p className="max-w-md mx-auto text-slate-400 text-xs">
          Clean web design and patient conversion systems engineered exclusively for medical professionals.
        </p>
        <p className="pt-2 text-[10px] text-slate-500">
          © {new Date().getFullYear()} HealUX Studios. All rights reserved.
        </p>
      </footer>

      {/* Live Device Simulator Modal */}
      {activePreviewSite && (
        <LiveSimulatorModal 
          initialSite={activePreviewSite} 
          onClose={closeSimulator} 
        />
      )}
    </div>
  );
}
