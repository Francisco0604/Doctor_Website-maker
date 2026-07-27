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
  PhoneCall
} from "lucide-react";

export default function Home() {
  const services = [
    { title: "General Consultation", icon: <Stethoscope size={32} />, desc: "Comprehensive health checkups for all ages." },
    { title: "Diabetes Management", icon: <Activity size={32} />, desc: "Specialized care and monitoring for diabetic patients." },
    { title: "Hypertension Care", icon: <ShieldCheck size={32} />, desc: "Effective blood pressure management and lifestyle advice." },
    { title: "Preventive Care", icon: <PlusCircle size={32} />, desc: "Vaccinations and screenings to keep you healthy." },
  ];

  const stats = [
    { label: "Years Exp", value: "12+" },
    { label: "Happy Patients", value: "15k+" },
    { label: "Same-Day Appt", value: "Yes" },
  ];

  const faqs = [
    { q: "What are your clinic hours?", a: "We are open Monday to Friday from 9 AM to 8 PM, and Saturdays from 10 AM to 4 PM." },
    { q: "Do you accept insurance?", a: "Yes, we accept most major health insurance providers. Please contact us to verify yours." },
    { q: "How can I book an appointment?", a: "You can book online through our appointment page or call us directly." },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-600 font-bold uppercase tracking-wider">Compassionate Care</span>
              <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6 leading-tight">
                Trusted Healthcare for Your <span className="text-blue-600">Entire Family</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Personalized medical attention from Dr. Aisha Sharma and her dedicated team. We prioritize your health and well-being above all else.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/appointment" className="btn-primary flex items-center gap-2">
                  Book Appointment <ChevronRight size={20} />
                </Link>
                <Link href="tel:+15551234567" className="btn-secondary flex items-center gap-2">
                  <PhoneCall size={20} /> Call Now
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-blue-600/10 rounded-full w-full aspect-square absolute -top-10 -right-10 animate-pulse"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-blue-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-2xl text-center">
                    <Users className="mx-auto text-blue-600 mb-2" size={32} />
                    <h4 className="text-2xl font-bold">15k+</h4>
                    <p className="text-sm text-gray-600">Patients</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-2xl text-center">
                    <Clock className="mx-auto text-blue-600 mb-2" size={32} />
                    <h4 className="text-2xl font-bold">24/7</h4>
                    <p className="text-sm text-gray-600">Support</p>
                  </div>
                  <div className="col-span-2 bg-blue-600 text-white p-6 rounded-2xl flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold">Book Now</h4>
                      <p className="text-blue-100 text-sm">Save your spot today</p>
                    </div>
                    <Link href="/appointment" className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-50 transition-colors">
                      <ChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center md:justify-between gap-8 items-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <PlusCircle size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">{stat.value}</h4>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Medical Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide a wide range of healthcare services tailored to meet the unique needs of every family member.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all text-left border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/services" className="text-blue-600 font-bold hover:underline">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b pb-6">
                  <h4 className="text-lg font-bold mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-blue-100 mb-8 text-lg">Our emergency line is available during clinic hours for urgent queries.</p>
          <Link href="tel:+15551234567" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-3">
            <PhoneCall /> +1 (555) 123-4567
          </Link>
        </div>
      </section>
    </div>
  );
}
