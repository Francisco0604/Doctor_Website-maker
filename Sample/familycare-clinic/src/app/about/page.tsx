"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Heart, ShieldCheck } from "lucide-react";

export default function About() {
  const education = [
    { year: "2010", event: "Completed MD in Internal Medicine", institution: "Medical University of excellence" },
    { year: "2006", event: "MBBS Graduation", institution: "National Health Institute" },
    { year: "2012", event: "Specialization in Diabetes Management", institution: "Global Health Academy" },
  ];

  const values = [
    { title: "Patient First", desc: "Every decision we make is centered around the well-being and comfort of our patients.", icon: <Heart className="text-blue-600" /> },
    { title: "Integrity", desc: "We maintain the highest standards of professional ethics and transparency in our treatments.", icon: <ShieldCheck className="text-blue-600" /> },
    { title: "Excellence", desc: "Continuously updating our skills and technology to provide the best possible care.", icon: <Award className="text-blue-600" /> },
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About FamilyCare Clinic</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Dedicated to providing the highest quality healthcare with a personal touch.
          </p>
        </div>
      </section>

      {/* Doctor Bio */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-200 rounded-3xl aspect-[4/5] overflow-hidden flex items-center justify-center"
            >
              {/* Placeholder for Doctor Image */}
              <span className="text-gray-400 font-bold text-2xl">Dr. Aisha Sharma Image</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Dr. Aisha Sharma</h2>
              <p className="text-blue-600 font-semibold mb-4 text-lg">MBBS, MD Internal Medicine (12+ Years Exp)</p>
              <div className="space-y-4 text-gray-600">
                <p>
                  Dr. Aisha Sharma is a highly experienced physician specializing in Internal Medicine. With a career spanning over 12 years, she has dedicated her life to providing comprehensive medical care to families in our community.
                </p>
                <p>
                  Her expertise lies in managing chronic conditions such as Diabetes and Hypertension, as well as providing preventive care that helps patients lead healthier, longer lives.
                </p>
                <p>
                  She believes in a holistic approach to medicine, where patient education and lifestyle management are just as important as clinical treatment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are driven by a simple mission: to make world-class healthcare accessible and compassionate for everyone.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="mb-4">{val.icon}</div>
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Certifications</h2>
          <div className="max-w-4xl mx-auto">
            {education.map((item, i) => (
              <div key={i} className="flex gap-6 mb-8 relative">
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 z-10">
                    <BookOpen size={20} />
                  </div>
                  {i !== education.length - 1 && <div className="w-0.5 h-full bg-blue-100 absolute top-12 left-6"></div>}
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1">
                  <span className="text-blue-600 font-bold">{item.year}</span>
                  <h4 className="text-xl font-bold mt-1">{item.event}</h4>
                  <p className="text-gray-500">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
