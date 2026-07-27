"use client";

import React, { useState, useEffect } from "react";
import { 
  Laptop, 
  Tablet, 
  Smartphone, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle, 
  ExternalLink, 
  Loader2 
} from "lucide-react";

export const SITES_METADATA = {
  "activemotion-physio": {
    name: "ActiveMotion Physiotherapy",
    tagline: "Move Better. Recover Faster. Live Pain-Free.",
    description: "Designed for a modern physiotherapy and sports rehabilitation practice. Focuses on movement, vitality, and data-backed outcomes.",
    colors: [
      { name: "Energetic Orange", hex: "#ea580c" },
      { name: "Slate Gray", hex: "#1e293b" },
      { name: "Soft Accent", hex: "#fff7ed" }
    ],
    features: [
      "Dynamic Pain Assessment Calculator",
      "Embedded HD Exercise Video Library",
      "Condition Treatment Directory",
      "Sticky 'Book Assessment' Conversion CTA"
    ],
    pages: ["Home", "Treatments", "Conditions", "Testimonials", "Blog", "Appointment", "Contact"],
    designVibe: "High-energy, Movement-focused, Athlete-friendly, Clean & Scientific"
  },
  "brightsmile-dental": {
    name: "BrightSmile Dental Care",
    tagline: "Luxury Aesthetic & Restorative Dentistry",
    description: "Tailored for a premium, high-end cosmetic dental practice. Exudes clinical excellence, confidence, and high-end luxury.",
    colors: [
      { name: "Deep Navy Teal", hex: "#0f3443" },
      { name: "Imperial Gold", hex: "#d4af37" },
      { name: "Champagne Accent", hex: "#f7e7ce" }
    ],
    features: [
      "Interactive Before/After Smile Slider",
      "Interactive Smile Assessment Form",
      "Pricing & Financing Calculator",
      "Premium Floating WhatsApp Integration"
    ],
    pages: ["Home", "Treatments", "Pricing", "Testimonials", "Gallery", "FAQ", "Contact"],
    designVibe: "Luxury, Clean, Elegant Serif Typography, High Trust, Spacious Layout"
  },
  "familycare-clinic": {
    name: "FamilyCare Clinic",
    tagline: "Empathetic Healthcare for Your Whole Family",
    description: "A patient-first portal built for general medicine practices. Stresses warm hospitality, accessibility, and professional trust.",
    colors: [
      { name: "Deep Trust Blue", hex: "#1e40af" },
      { name: "Modern Medical Cyan", hex: "#06b6d4" },
      { name: "Neutral Gray", hex: "#f3f4f6" }
    ],
    features: [
      "Multi-specialty Clinic Services Grid",
      "Clean Appointment Request Booking Flow",
      "Physician Profiles & Patient Success Stories",
      "Responsive Accessible Layout Structure"
    ],
    pages: ["Home", "Services", "About Aisha Sharma", "Appointment", "Contact"],
    designVibe: "Warm, Inclusive, Approachable, Highly Readable, ADA Accessible"
  }
};

interface LiveSimulatorModalProps {
  initialSite?: string;
  onClose?: () => void;
}

export default function LiveSimulatorModal({ initialSite = "activemotion-physio", onClose }: LiveSimulatorModalProps) {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeSite, setActiveSite] = useState<keyof typeof SITES_METADATA>(
    (initialSite in SITES_METADATA ? initialSite : "activemotion-physio") as keyof typeof SITES_METADATA
  );
  const [loadedSite, setLoadedSite] = useState<string>("");

  useEffect(() => {
    if (initialSite && initialSite in SITES_METADATA) {
      setActiveSite(initialSite as keyof typeof SITES_METADATA);
    }
  }, [initialSite]);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const iframeUrl = `${basePath}/samples/${activeSite}/index.html`;
  const siteInfo = SITES_METADATA[activeSite];
  const loading = loadedSite !== activeSite;

  const getDeviceWidth = () => {
    switch (device) {
      case "mobile": return "375px";
      case "tablet": return "768px";
      case "desktop":
      default:
        return "100%";
    }
  };

  const handleIframeLoad = () => {
    setLoadedSite(activeSite);
  };

  const handleSwitchSite = (key: string) => {
    setActiveSite(key as keyof typeof SITES_METADATA);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("site", key);
      window.history.pushState({}, "", url.toString());
    }
  };

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("site");
      window.history.pushState({}, "", url.pathname);
      window.location.href = `${basePath}/`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col h-screen w-screen bg-slate-100 text-slate-900 overflow-hidden">
      {/* Top Banner Navigation */}
      <header className="h-16 px-6 bg-white border-b border-slate-200 shadow-sm flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-wider bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg border border-slate-200 cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Agency
          </button>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-black text-slate-900">{siteInfo.name}</span>
            <span className="hidden md:inline text-xs text-sky-700 bg-sky-50 border border-sky-200/80 px-2 py-0.5 rounded-full font-bold uppercase">
              Live Preview
            </span>
          </div>
        </div>

        {/* Device Switcher */}
        <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 gap-1">
          <button 
            onClick={() => setDevice("desktop")}
            className={`p-2 rounded-lg transition-all ${device === "desktop" ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
            title="Desktop Mode"
          >
            <Laptop className="h-4 w-4" />
          </button>
          <button 
            onClick={() => setDevice("tablet")}
            className={`p-2 rounded-lg transition-all ${device === "tablet" ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
            title="Tablet Mode"
          >
            <Tablet className="h-4 w-4" />
          </button>
          <button 
            onClick={() => setDevice("mobile")}
            className={`p-2 rounded-lg transition-all ${device === "mobile" ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
            title="Mobile Mode"
          >
            <Smartphone className="h-4 w-4" />
          </button>
        </div>

        {/* CTA */}
        <a 
          href="#contact"
          onClick={handleBack}
          className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 text-white shadow-md shadow-sky-600/20"
        >
          Request Similar Website <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </header>

      {/* Main Workspace split */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Side: Sidebar controls & features */}
        <aside className="w-80 border-r border-slate-200 bg-white hidden lg:flex flex-col p-6 overflow-y-auto shrink-0 space-y-8">
          <div>
            <h2 className="text-xs font-black uppercase text-sky-600 tracking-widest mb-1.5 flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5" /> Product Showcase
            </h2>
            <h3 className="text-lg font-bold text-slate-900">{siteInfo.name}</h3>
            <p className="text-xs text-slate-500 italic mt-1">&ldquo;{siteInfo.tagline}&rdquo;</p>
            <p className="text-xs text-slate-600 mt-4 leading-relaxed">{siteInfo.description}</p>
          </div>

          {/* Design Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Branding System</h4>
            
            <div className="space-y-2">
              <span className="text-[10px] text-slate-500 uppercase font-bold block">Palette</span>
              <div className="flex items-center gap-2">
                {siteInfo.colors.map((c, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2 py-1 rounded-md text-[10px] text-slate-700">
                    <span className="h-3 w-3 rounded-full border border-slate-300 inline-block shrink-0" style={{ backgroundColor: c.hex }} />
                    <span className="font-medium">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] text-slate-500 uppercase font-bold block">Design Vibe</span>
              <span className="text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200/80 px-2.5 py-1 rounded-lg block">
                {siteInfo.designVibe}
              </span>
            </div>
          </div>

          {/* Special Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Custom Clinical Modules</h4>
            <ul className="space-y-2 text-xs">
              {siteInfo.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="h-3.5 w-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Switcher Cards */}
          <div className="space-y-3 pt-4 border-t border-slate-100 mt-auto">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Switch Demo Practice</h4>
            <div className="space-y-2">
              {Object.entries(SITES_METADATA).map(([key, site]) => (
                <button
                  key={key}
                  onClick={() => handleSwitchSite(key)}
                  className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                    activeSite === key 
                      ? "border-sky-600 bg-sky-50/80 text-sky-900 font-bold shadow-sm" 
                      : "border-slate-200 bg-white hover:bg-slate-50 text-slate-600"
                  }`}
                >
                  <div className="font-extrabold">{site.name}</div>
                  <div className="text-[10px] opacity-80 mt-0.5 truncate">{site.tagline}</div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Center: Live Device Viewport Canvas */}
        <main className="flex-1 bg-slate-200/80 flex items-center justify-center p-4 md:p-8 overflow-hidden relative">
          {loading && (
            <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm z-20 flex flex-col items-center justify-center gap-3 text-slate-700 font-bold text-sm">
              <Loader2 className="h-8 w-8 text-sky-600 animate-spin" />
              <span>Loading Medical Simulator...</span>
            </div>
          )}

          <div 
            className="h-full bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 border border-slate-300 flex flex-col relative"
            style={{ width: getDeviceWidth(), maxWidth: "100%" }}
          >
            {/* Browser Address Bar Header */}
            <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-3 shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex-1 bg-white border border-slate-200/80 rounded-md px-3 py-1 text-[11px] font-mono text-slate-500 truncate flex items-center gap-2">
                <span className="text-emerald-600 font-bold">https://</span>
                <span className="text-slate-800">{activeSite}.demo-healux.com</span>
              </div>
            </div>

            {/* Live iFrame View */}
            <iframe 
              src={iframeUrl}
              onLoad={handleIframeLoad}
              className="w-full flex-1 border-none bg-white"
              title={siteInfo.name}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
