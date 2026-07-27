"use client";

import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Activity, 
  ShieldCheck, 
  PlusCircle, 
  Baby, 
  HeartPulse, 
  Microscope, 
  FileText 
} from "lucide-react";

export default function Services() {
  const allServices = [
    {
      title: "General Consultation",
      desc: "Routine health check-ups and medical advice for common ailments. We focus on early detection and prevention.",
      icon: <Stethoscope size={40} />,
      details: ["Physical Exams", "Fever & Infection Treatment", "Medical Referrals"]
    },
    {
      title: "Diabetes Management",
      desc: "Comprehensive care plan for Type 1 and Type 2 diabetes, including continuous glucose monitoring advice.",
      icon: <Activity size={40} />,
      details: ["Blood Sugar Tracking", "Insulin Management", "Dietary Counseling"]
    },
    {
      title: "Hypertension Care",
      desc: "Expert management of high blood pressure to prevent long-term complications like heart disease.",
      icon: <ShieldCheck size={40} />,
      details: ["BP Monitoring", "Lifestyle Modification", "Medication Review"]
    },
    {
      title: "Pediatric Care",
      desc: "Gentle and professional healthcare services for infants, children, and adolescents.",
      icon: <Baby size={40} />,
      details: ["Growth Monitoring", "Immunizations", "Common Childhood Illnesses"]
    },
    {
      title: "Cardiology Screening",
      desc: "Initial cardiac assessments including ECG and risk factor management for heart health.",
      icon: <HeartPulse size={40} />,
      details: ["ECG / EKG", "Cholesterol Screening", "Heart Disease Prevention"]
    },
    {
      title: "Laboratory Services",
      desc: "On-site blood tests and diagnostic services for fast and accurate results.",
      icon: <Microscope size={40} />,
      details: ["Blood Panels", "Urine Analysis", "Pathology Coordination"]
    },
    {
      title: "Health Certificates",
      desc: "Medical certificates for work, school, or travel after a thorough clinical assessment.",
      icon: <FileText size={40} />,
      details: ["Work Fitness", "Travel Clearance", "Sports Physicals"]
    },
    {
      title: "Preventive Screenings",
      desc: "Regular screenings for cancer, vitamin deficiencies, and other health risks.",
      icon: <PlusCircle size={40} />,
      details: ["Cancer Screenings", "Vitamin Profile", "Bone Density Check"]
    }
  ];

  return (
    <div className="pb-20">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Medical Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            From routine check-ups to chronic disease management, we offer a wide range of services to keep your family healthy.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-blue-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Health Plan?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Contact us today to discuss your specific health concerns and let us create a personalized care plan for you.
          </p>
          <motion.a
            href="/appointment"
            whileHover={{ scale: 1.05 }}
            className="btn-primary inline-block"
          >
            Schedule a Consultation
          </motion.a>
        </div>
      </section>
    </div>
  );
}
