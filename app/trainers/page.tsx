"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { motion, AnimatePresence } from "framer-motion";

const trainers = [
  { 
    id: 1, 
    name: "Lead Medical German Trainer", 
    role: "Medical Language Specialist", 
    image: "/images/trainer1.jpg", 
    specialties: ["A1-B2 Curriculum", "Anatomy Basics", "Grammar"],
    bio: "Focuses on designing structured A1–B2 curricula with integrated medical vocabulary and clear progression for doctors. With over 10 years of experience, they ensure every doctor has a rock-solid foundation." 
  },
  { 
    id: 2, 
    name: "Clinical Communication Coach", 
    role: "Speaking & Interaction Expert", 
    image: "/images/trainer2.jpg", 
    specialties: ["Role Play", "Patient Interaction", "Anamnesis"],
    bio: "Guides doctors through clinical role plays, case presentations, and feedback on clarity, register, and confidence. Specializes in the nuances of doctor-patient bedside manner in German hospitals." 
  },
  { 
    id: 3, 
    name: "Academic Coordinator", 
    role: "Success & Curriculum Lead", 
    image: "/images/trainer3.jpg", 
    specialties: ["Batch Management", "Progress Tracking", "Support"],
    bio: "Oversees schedules, progression, and consistency across batches. They ensure that your learning journey is seamless, helping you balance intensive study with your professional medical responsibilities." 
  }
];

export default function TrainersPage() {
  const [selectedTrainer, setSelectedTrainer] = useState<any>(null);

  return (
    <section className="relative bg-slate-50 py-16 sm:py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-linear-to-b from-teal-50/50 to-transparent pointer-events-none" />
      
      <Container className="relative z-10">
        <header className="mb-16 text-center px-4 max-w-3xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
            Meet Your Mentors
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-5xl leading-tight">
            The Experts Behind <span className="text-teal-600">Doc2Deutsch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-slate-600">
            A dedicated team of linguists and clinical coaches helping you bridge the gap to the German healthcare system.
          </motion.p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          {trainers.map((trainer, index) => (
            <motion.article
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedTrainer(trainer)}
              className="group cursor-pointer relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-300"
            >
              <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 mb-6">
                <div className="absolute inset-0 rounded-full bg-teal-100 scale-105 group-hover:scale-110 transition-transform duration-300" />
                <Image src={trainer.image} alt={trainer.name} fill className="rounded-full object-cover relative z-10 border-4 border-white" />
              </div>

              <div className="text-center">
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{trainer.name}</h2>
                <p className="mt-1 text-sm font-semibold text-teal-600/80 uppercase tracking-wider">{trainer.role}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {trainer.specialties.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 bg-slate-100 text-slate-500 rounded-md font-bold uppercase">{tag}</span>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-center text-sm font-bold text-slate-900 group-hover:gap-3 transition-all">
                  Full Profile <span className="ml-2 text-teal-600">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {selectedTrainer && (
            <motion.div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedTrainer(null)}>
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-2xl rounded-4xl bg-white p-8 sm:p-12 shadow-2xl overflow-y-auto max-h-[90vh]">
                <button onClick={() => setSelectedTrainer(null)} className="absolute right-8 top-8 h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all">✕</button>
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="shrink-0">
                    <Image src={selectedTrainer.image} alt={selectedTrainer.name} width={180} height={180} className="rounded-3xl object-cover shadow-lg" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-teal-600 uppercase tracking-widest">Expert Faculty</span>
                    <h2 className="mt-2 text-3xl font-extrabold text-slate-900 leading-tight">{selectedTrainer.name}</h2>
                    <p className="mt-1 text-lg text-slate-500 font-medium italic">{selectedTrainer.role}</p>
                    <div className="mt-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Expertise & Background</h4>
                      <p className="text-slate-700 leading-relaxed">{selectedTrainer.bio}</p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {selectedTrainer.specialties.map((s: string) => (
                        <div key={s} className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-teal-50 px-4 py-2 rounded-xl border border-teal-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />{s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <footer className="mt-20 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-teal-100 bg-teal-50/50 p-6 text-sm text-slate-600 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white font-bold">!</span>
            <p>Trainers focus exclusively on <strong>linguistic and clinical communication training</strong>. For visa, licensing (Approbation), or legal matters, please refer to official German authorities.</p>
          </div>
        </footer>
      </Container>
    </section>
  );
}