"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Car, Info, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div>
            <h1 className="h1 mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-12">
              Whether you're ready to start your recovery or just have a few questions about our services, our team is here to help.
            </p>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Our Location", detail: "123 Motion Way, Sydney, NSW 2000" },
                { icon: Phone, title: "Phone", detail: "(02) 9876 5432" },
                { icon: Mail, title: "Email", detail: "hello@activemotion.com.au" },
                { icon: Clock, title: "Hours", detail: "Mon-Fri: 7am - 8pm | Sat: 8am - 2pm" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                    <item.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Utility Info */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <div className="flex items-center gap-3 mb-3">
                  <Car className="h-5 w-5 text-orange-600" />
                  <h4 className="font-bold text-orange-900">Parking Info</h4>
                </div>
                <p className="text-sm text-orange-800 leading-relaxed">
                  Free 2-hour parking is available directly behind the clinic in the 'Health District' lot.
                </p>
              </div>
              <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <Info className="h-5 w-5 text-slate-600" />
                  <h4 className="font-bold text-slate-900">Public Transport</h4>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We are a 5-minute walk from Central Station. Multiple bus routes stop right outside.
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100"
          >
            <h3 className="text-2xl font-black text-slate-900 mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:outline-none bg-slate-50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:outline-none bg-slate-50 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:outline-none bg-slate-50 transition-all">
                  <option>General Inquiry</option>
                  <option>Feedback</option>
                  <option>Billing Question</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:outline-none bg-slate-50 transition-all"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-4 text-lg">
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
        
        {/* Map Placeholder */}
        <div className="mt-24 h-[400px] bg-slate-200 rounded-[3rem] overflow-hidden relative group">
          <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
             <span className="text-slate-500 font-bold uppercase tracking-widest flex items-center gap-3">
               <MapPin className="h-6 w-6" /> Interactive Map Integration
             </span>
          </div>
          {/* Real iframe would go here */}
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
