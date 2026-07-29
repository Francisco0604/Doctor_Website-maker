"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Activity, Calendar } from "lucide-react";

const navLinks = [
  { name: "Home", href: "index.html" },
  { name: "Conditions", href: "conditions.html" },
  { name: "Treatments", href: "treatments.html" },
  { name: "Testimonials", href: "testimonials.html" },
  { name: "Blog", href: "blog.html" },
  { name: "Contact", href: "contact.html" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="index.html" className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              ACTIVEMOTION
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-orange-600 ${
                  pathname === link.href ? "text-orange-600" : "text-slate-600"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="appointment.html" className="btn-primary py-2 px-5 text-sm flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Book Assessment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-bold ${
                    pathname === link.href ? "text-orange-600 bg-orange-50" : "text-slate-600"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="appointment.html"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full block text-center"
                >
                  Book Assessment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
