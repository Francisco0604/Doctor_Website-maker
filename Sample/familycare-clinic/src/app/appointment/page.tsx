"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-md border border-green-100"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Appointment Requested!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for choosing FamilyCare Clinic. Our team will contact you shortly to confirm your preferred time slot.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-primary w-full"
          >
            Book Another Appointment
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-blue-100 max-w-xl mx-auto">
            Fill out the form below and we&apos;ll get back to you to confirm your visit.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Info Sidebar */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="text-blue-600" size={20} />
                  Availability
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex justify-between"><span>Mon - Fri:</span> <span>9am - 8pm</span></li>
                  <li className="flex justify-between"><span>Saturday:</span> <span>10am - 4pm</span></li>
                  <li className="flex justify-between text-red-500"><span>Sunday:</span> <span>Closed</span></li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="font-bold mb-2">Need help?</h4>
                <p className="text-sm text-gray-600 mb-4">Call our support team for immediate assistance.</p>
                <a href="tel:+15551234567" className="text-blue-600 font-bold">+1 (555) 123-4567</a>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <User size={16} /> Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Phone size={16} /> Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Mail size={16} /> Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Calendar size={16} /> Preferred Date
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Clock size={16} /> Preferred Time
                    </label>
                    <select
                      required
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    >
                      <option value="">Select a slot</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <MessageSquare size={16} /> Special Notes (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your concern..."
                    className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className={`btn-primary w-full py-4 text-lg shadow-lg shadow-blue-200 flex items-center justify-center gap-3 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Request Appointment"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
