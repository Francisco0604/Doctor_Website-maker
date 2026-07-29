"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Stethoscope, 
  Activity, 
  Users, 
  Clock, 
  ShieldCheck, 
  Star, 
  PlusCircle,
  PhoneCall,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  const services = [
    { tag: "PRIMARY CARE", title: "General Consultation", icon: <Stethoscope size={36} />, desc: "Comprehensive, unhurried health checkups and wellness care for patients of all ages." },
    { tag: "CHRONIC CARE", title: "Diabetes Management", icon: <Activity size={36} />, desc: "Specialized monitoring, blood glucose tracking, and medication guidance tailored to you." },
    { tag: "CARDIO HEALTH", title: "Hypertension Care", icon: <ShieldCheck size={36} />, desc: "Effective blood pressure monitoring, heart health checks, and friendly lifestyle advice." },
    { tag: "SENIOR WELLNESS", title: "Preventive Care", icon: <PlusCircle size={36} />, desc: "Immunizations, regular health screenings, and preventive health plans to keep you thriving." },
  ];

  const stats = [
    { label: "Years Exp", value: "12+" },
    { label: "Happy Patients", value: "15k+" },
    { label: "Same-Day Appt", value: "Yes" },
  ];

  const faqs = [
    { q: "What are your clinic hours?", a: "We are open Monday to Friday from 9:00 AM to 8:00 PM, and Saturdays from 10:00 AM to 4:00 PM." },
    { q: "Do you accept Medicare and health insurance?", a: "Yes, we accept Medicare and most major health insurance plans. Call our front desk to verify your coverage instantly." },
    { q: "How can I book an appointment?", a: "You can book online with one click using the blue 'Book Appointment' button, or call our friendly staff directly." },
  ];

  return (
    <div className="overflow-hidden bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-blue-50/80 py-16 sm:py-24 border-b border-blue-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block bg-blue-100 text-blue-900 border border-blue-200 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                Compassionate & Accessible Family Care
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900">
                Trusted Healthcare for Your <span className="text-blue-700 underline decoration-blue-300">Entire Family</span>
              </h1>
              <p className="text-base sm:text-xl text-slate-700 leading-relaxed font-medium max-w-xl">
                Personalized medical attention from Dr. Aisha Sharma and her dedicated team. Easy-to-read instructions, easy phone access, and patient-first care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="appointment.html" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-md transition-all">
                  Book Appointment <ChevronRight size={22} />
                </a>
                <a href="tel:+15551234567" className="bg-white border-2 border-blue-700 text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-sm transition-all">
                  <PhoneCall size={22} className="text-blue-700" /> Call (555) 123-4567
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-blue-200">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-blue-50 p-5 rounded-2xl text-center border border-blue-100">
                    <Users className="mx-auto text-blue-700 mb-2" size={36} />
                    <h4 className="text-2xl sm:text-3xl font-black text-slate-900">15k+</h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-600">Happy Patients</p>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-2xl text-center border border-blue-100">
                    <Clock className="mx-auto text-blue-700 mb-2" size={36} />
                    <h4 className="text-2xl sm:text-3xl font-black text-slate-900">Same Day</h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-600">Appointments</p>
                  </div>
                  <div className="col-span-2 bg-blue-700 text-white p-6 rounded-2xl flex items-center justify-between shadow-md">
                    <div>
                      <h4 className="text-xl font-bold">Need a Consultation?</h4>
                      <p className="text-blue-100 text-sm font-medium">Quick scheduling for senior patients</p>
                    </div>
                    <Link href="/appointment" className="bg-white text-blue-800 px-5 py-3 rounded-full font-black text-sm hover:bg-blue-50 transition-colors flex items-center gap-1">
                      Book <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center md:justify-around gap-6 items-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-700 border border-blue-200">
                  <CheckCircle2 size={26} />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900">{stat.value}</h4>
                  <p className="text-xs sm:text-sm font-bold text-slate-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-xs font-black uppercase text-blue-700 bg-blue-100 border border-blue-200 px-4 py-1.5 rounded-full inline-block mb-3">
            Clinical Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Our Medical Services</h2>
          <p className="text-slate-600 text-base sm:text-lg mb-12 max-w-2xl mx-auto font-medium">
            We provide a wide range of healthcare services tailored to meet the unique needs of senior citizens and every family member.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3 border-t-4 border-t-blue-600"
              >
                <div className="flex items-center justify-between">
                  <div className="text-blue-700 p-2 bg-blue-50 rounded-xl border border-blue-100">{service.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a href="services.html" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3.5 rounded-full font-bold inline-flex items-center gap-2 shadow-md">
              View All Medical Services <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase text-blue-700 bg-blue-100 border border-blue-200 px-4 py-1.5 rounded-full inline-block mb-3">
                Patient Help
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-base sm:text-lg font-extrabold text-slate-900">{faq.q}</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-blue-700 py-12 sm:py-16">
        <div className="container mx-auto px-4 md:px-6 text-center text-white space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black">Need Immediate Phone Assistance?</h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto font-medium">
            Our friendly receptionist team is ready to assist you during clinic hours.
          </p>
          <Link href="tel:+15551234567" className="bg-white text-blue-900 px-10 py-4 rounded-full font-black text-lg sm:text-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-3 shadow-lg">
            <PhoneCall className="text-blue-700" size={24} /> Call Us: +1 (555) 123-4567
          </Link>
        </div>
      </section>
    </div>
  );
}

