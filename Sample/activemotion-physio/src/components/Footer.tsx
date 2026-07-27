import React from "react";
import Link from "next/link";
import { Activity, Mail, Phone, MapPin, Globe, MessageSquare, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Activity className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-black tracking-tighter text-white">
                ACTIVEMOTION
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Leading physiotherapy clinic specializing in sports rehabilitation and movement
              optimization. We help you move better, recover faster, and live pain-free.
            </p>
            <div className="flex gap-4">
              <Globe className="h-5 w-5 hover:text-orange-500 cursor-pointer transition-colors" />
              <MessageSquare className="h-5 w-5 hover:text-orange-500 cursor-pointer transition-colors" />
              <Share2 className="h-5 w-5 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/conditions" className="hover:text-orange-500 transition-colors">Conditions Treated</Link></li>
              <li><Link href="/treatments" className="hover:text-orange-500 transition-colors">Treatment Plans</Link></li>
              <li><Link href="/testimonials" className="hover:text-orange-500 transition-colors">Success Stories</Link></li>
              <li><Link href="/blog" className="hover:text-orange-500 transition-colors">Health Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li>Sports Injury Rehab</li>
              <li>Post-Surgery Recovery</li>
              <li>Chronic Pain Management</li>
              <li>Manual Therapy</li>
              <li>Gait & Motion Analysis</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 shrink-0" />
                <span>123 Motion Way, Health District<br />Sydney, NSW 2000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500 shrink-0" />
                <span>(02) 9876 5432</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500 shrink-0" />
                <span>hello@activemotion.com.au</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} ActiveMotion Physiotherapy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
