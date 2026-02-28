"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { id: 1, quote: "The medical vocabulary modules helped me understand patient conversations from day one. Unlike general classes, this was 100% hospital-focused.", doctor: "Dr. Anirudh", degree: "MBBS", city: "Chennai", achievement: "Passed B2 Exam" },
  { id: 2, quote: "Perfect balance for working doctors. The evening batches and clinical role-plays prepared me for actual ward rounds in Germany.", doctor: "Dr. Bhavna", degree: "MD Medicine", city: "Mumbai", achievement: "FSP Prepared" },
  { id: 3, quote: "Much better than general German classes. The trainers understand that as doctors, we don't just need grammar; we need medical precision.", doctor: "Dr. Chitra", degree: "BDS", city: "Kochi", achievement: "Moving to Saxony" }
];

export default function TestimonialsPage() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

  return (
    <section className="relative bg-[#f8fafc] py-16 sm:py-24 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <header className="mb-16 text-center px-4 max-w-3xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xs font-black uppercase tracking-[0.2em] text-teal-600 mb-4">Success Stories</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            What Doctors Say About <span className="text-teal-600">Doc2Deutsch</span>
          </motion.h1>
          <p className="mt-6 text-slate-600 text-lg">Join hundreds of Indian medical professionals who mastered German while maintaining their clinical practice.</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedTestimonial(t)}
              className="cursor-pointer relative flex flex-col justify-between rounded-4xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-6 right-8 text-teal-100">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                  <path d="M10 0C4.48 0 0 4.48 0 10V30H15V10H7.5C7.5 7.24 9.74 5 12.5 5V0H10ZM35 0C29.48 0 25 4.48 25 10V30H40V10H32.5C32.5 7.24 34.74 5 37.5 5V0H35Z" />
                </svg>
              </div>
              <div className="relative"><p className="text-slate-700 leading-relaxed italic text-lg mb-8">"{t.quote}"</p></div>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="h-12 w-12 rounded-full bg-linear-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold">{t.doctor.split(' ')[1][0]}</div>
                <div><h3 className="text-slate-900 font-bold">{t.doctor}</h3><p className="text-xs text-slate-500 font-medium">{t.degree} • {t.city}</p></div>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-black uppercase rounded-lg w-fit"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />{t.achievement}</div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {selectedTestimonial && (
            <motion.div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedTestimonial(null)}>
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-xl rounded-[2.5rem] bg-white p-10 sm:p-16 shadow-2xl overflow-hidden">
                <button onClick={() => setSelectedTestimonial(null)} className="absolute right-8 top-8 h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-red-500 transition-all">✕</button>
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-linear-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold mb-6">{selectedTestimonial.doctor.split(' ')[1][0]}</div>
                  <p className="text-xl sm:text-2xl text-slate-800 leading-relaxed font-medium italic mb-8">"{selectedTestimonial.quote}"</p>
                  <h2 className="text-2xl font-extrabold text-slate-900">{selectedTestimonial.doctor}</h2>
                  <p className="text-teal-600 font-bold uppercase tracking-widest text-xs mt-2">{selectedTestimonial.degree} | {selectedTestimonial.city}</p>
                  <div className="mt-8 pt-8 border-t border-slate-100 flex justify-center gap-4">
                    <div className="px-4 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-500 border border-slate-100">Verified Doctor</div>
                    <div className="px-4 py-2 bg-teal-50 rounded-xl text-xs font-bold text-teal-600 border border-teal-100">{selectedTestimonial.achievement}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}