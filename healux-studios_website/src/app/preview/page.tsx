"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
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

// Site metadata definitions
const SITES_METADATA = {
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

function PreviewContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [loadedSite, setLoadedSite] = useState<string>("");

  const siteParam = searchParams.get("site") || "activemotion-physio";
  const activeSite = (siteParam in SITES_METADATA ? siteParam : "activemotion-physio") as keyof typeof SITES_METADATA;
  const iframeUrl = `/samples/${activeSite}/index.html`;

  const siteInfo = SITES_METADATA[activeSite];

  // Determine loading state dynamically
  const loading = loadedSite !== activeSite;

  // Toggle devices and widths
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

  return (
    <div className="flex flex-col h-screen bg-[#030712] text-white overflow-hidden">
      {/* Top Banner Navigation */}
      <header className="h-16 px-6 glass-panel border-b border-white/5 flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-4">
          <Link 
            href="/"
            className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider bg-white/5 px-3 py-1.5 rounded-lg border border-white/5"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Studio
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-black text-white">{siteInfo.name}</span>
            <span className="hidden md:inline text-xs text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full font-bold uppercase">
              Live Preview
            </span>
          </div>
        </div>

        {/* Device Switcher */}
        <div className="hidden sm:flex items-center bg-white/5 p-1 rounded-xl border border-white/5 gap-1">
          <button 
            onClick={() => setDevice("desktop")}
            className={`p-2 rounded-lg transition-all ${device === "desktop" ? "bg-primary text-white" : "text-gray-400 hover:text-white"}`}
            title="Desktop Mode"
          >
            <Laptop className="h-4 w-4" />
          </button>
          <button 
            onClick={() => setDevice("tablet")}
            className={`p-2 rounded-lg transition-all ${device === "tablet" ? "bg-primary text-white" : "text-gray-400 hover:text-white"}`}
            title="Tablet Mode"
          >
            <Tablet className="h-4 w-4" />
          </button>
          <button 
            onClick={() => setDevice("mobile")}
            className={`p-2 rounded-lg transition-all ${device === "mobile" ? "bg-primary text-white" : "text-gray-400 hover:text-white"}`}
            title="Mobile Mode"
          >
            <Smartphone className="h-4 w-4" />
          </button>
        </div>

        {/* CTA */}
        <Link 
          href="/#contact"
          className="bg-primary hover:bg-primary-hover px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 text-black"
        >
          Request Similar Website <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </header>

      {/* Main Workspace split */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Side: Sidebar controls & features */}
        <aside className="w-80 border-r border-white/5 glass-panel hidden lg:flex flex-col p-6 overflow-y-auto shrink-0 space-y-8">
          <div>
            <h2 className="text-xs font-black uppercase text-primary tracking-widest mb-1.5 flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5" /> Product Showcase
            </h2>
            <h3 className="text-lg font-bold text-white">{siteInfo.name}</h3>
            <p className="text-xs text-gray-400 italic mt-1">&ldquo;{siteInfo.tagline}&rdquo;</p>
            <p className="text-xs text-gray-300 mt-4 leading-relaxed">{siteInfo.description}</p>
          </div>

          {/* Design Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Branding System</h4>
            
            <div className="space-y-3">
              <p className="text-xs text-gray-300">
                <span className="font-bold text-gray-400">Design Aura:</span><br />
                {siteInfo.designVibe}
              </p>
              
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Color Palette</p>
                <div className="flex flex-wrap gap-2">
                  {siteInfo.colors.map((color, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-2 py-1 rounded-lg">
                      <div className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: color.hex }} />
                      <span className="text-[10px] text-gray-300 font-semibold">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive features */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Specialized Features</h4>
            <ul className="space-y-2.5">
              {siteInfo.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300 leading-normal">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Page Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Included Pages</h4>
            <div className="flex flex-wrap gap-1.5">
              {siteInfo.pages.map((page, i) => (
                <span key={i} className="text-[10px] bg-white/5 text-gray-400 font-bold px-2.5 py-1 rounded-full uppercase">
                  {page}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Switch Demos</h4>
            <div className="grid grid-cols-1 gap-2">
              {Object.keys(SITES_METADATA).map((key) => (
                <button
                  key={key}
                  onClick={() => router.push(`/preview?site=${key}`)}
                  className={`text-left text-xs font-bold p-3 rounded-xl border transition-all uppercase tracking-wider ${activeSite === key ? "bg-primary/10 border-primary text-primary" : "bg-white/5 border-white/5 hover:bg-white/10 text-gray-400 hover:text-white"}`}
                >
                  {SITES_METADATA[key as keyof typeof SITES_METADATA].name.split(" ")[0]} Project
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Side: Iframe Preview Container */}
        <main className="flex-1 bg-[#090b16] p-4 md:p-8 flex items-center justify-center overflow-auto relative">
          {loading && (
            <div className="absolute inset-0 bg-[#090b16]/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center gap-3">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 animate-pulse">
                Hydrating Interactive Clinic Site...
              </p>
            </div>
          )}

          {/* Device Wrapper */}
          <div 
            className={`transition-all duration-500 ease-out flex items-center justify-center shadow-2xl relative ${device === "mobile" ? "border-[12px] border-zinc-800 rounded-[3rem] h-[690px] overflow-hidden bg-white" : device === "tablet" ? "border-8 border-zinc-800 rounded-[2rem] h-[1040px] overflow-hidden bg-white" : "w-full h-full"}`}
            style={{ width: getDeviceWidth() }}
          >
            {device === "mobile" && (
              <div className="absolute top-0 inset-x-0 h-6 bg-zinc-800 z-30 flex items-center justify-center">
                <div className="w-20 h-4 bg-black rounded-b-xl" />
              </div>
            )}
            {iframeUrl ? (
              <iframe
                src={iframeUrl}
                className="w-full h-full border-none"
                onLoad={handleIframeLoad}
                title="Site Live Preview"
              />
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function PreviewPage() {
  return (
    <Suspense fallback={
      <div className="h-screen w-screen bg-[#030712] flex flex-col items-center justify-center gap-3 text-white">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Loading Preview System...</p>
      </div>
    }>
      <PreviewContent />
    </Suspense>
  );
}
