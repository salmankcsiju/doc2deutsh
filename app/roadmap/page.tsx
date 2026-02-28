"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button"; 
import { motion, AnimatePresence } from "framer-motion";

const roadmapSections = [
  { 
    id: 1, 
    level: "A1–A2",
    title: "The Medical Foundation", 
    image: "/images/language-levels.jpg", 
    short: "Mastering hospital-focused basics and core anatomy.", 
    content: "Start your journey by learning basic patient greetings, hospital geography, and core medical vocabulary. Many hospitals expect doctors to communicate basic needs clearly before moving to clinical tasks.",
    skills: ["Anatomy Basics", "Patient Intake", "Daily Hospital Life"]
  },
  { 
    id: 2, 
    level: "B1",
    title: "Clinical Interaction", 
    image: "/images/hospital.jpg", 
    short: "Navigating daily ward communication and nursing syncs.", 
    content: "At the B1 level, the focus shifts to explaining findings, documenting cases, and coordinating with nursing staff. Understanding natural-speed German and adjusting your register is key to patient safety.",
    skills: ["Ward Rounds", "Vitals Reporting", "Shift Handovers"]
  },
  { 
    id: 3, 
    level: "B2",
    title: "Professional Mastery", 
    image: "/images/expectations.jpg", 
    short: "Complex medical discussions & diagnostic reporting.", 
    content: "B2 is the gold standard for hospital readiness. You will learn to take detailed patient histories (Anamnese), conduct complex medical discussions with consultants, and write professional-grade discharge summaries.",
    skills: ["Patient History", "Medical Dictation", "Informed Consent"]
  },
  { 
    id: 4, 
    level: "D2D",
    title: "Where We Fit In", 
    image: "/images/doc2deutsch.jpg", 
    short: "Structured training with a clinical lens.", 
    content: "Doc2Deutsch provides the linguistic bridge. Our courses reflect real-world hospital scenarios to ensure you aren't just passing a test, but preparing for a successful long-term career in Germany.",
    skills: ["Career Coaching", "Interview Prep", "Visa Support"]
  }
];

export default function RoadmapPage() {
  const [selectedSection, setSelectedSection] = useState<any>(null);

  return (
    <section className="bg-slate-50 py-12 sm:py-24 overflow-x-hidden">
      <Container className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="mb-12 sm:mb-20 text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-teal-600">The Doctor's Journey</p>
          <h1 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Linguistic <span className="text-teal-600">Roadmap</span> to Germany
          </h1>
        </header>

        {/* Timeline Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden sm:block" />

          {roadmapSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center mb-16 sm:mb-28 lg:mb-36 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-1/2 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg -translate-x-1/2 z-10 hidden md:block" />

              <div 
                className="w-full md:w-[46%] aspect-video relative rounded-2xl sm:rounded-4xl overflow-hidden shadow-xl cursor-pointer group" 
                onClick={() => setSelectedSection(section)}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="w-full md:w-[46%] mt-6 md:mt-0 px-2 sm:px-6 lg:px-12 text-center md:text-left">
                <span className="text-teal-600 font-bold text-xs uppercase mb-2 block tracking-widest">{section.level} Milestone</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-snug">{section.title}</h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">{section.short}</p>
                
                <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                  {section.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white text-slate-500 text-[10px] font-bold rounded-full border border-slate-200 uppercase">
                      {skill}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedSection(section)}
                  className="mt-6 text-xs sm:text-sm font-bold text-teal-600 hover:underline flex items-center gap-1 mx-auto md:mx-0 group"
                >
                  View Details <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedSection && (
            <motion.div
              className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSection(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative flex flex-col md:flex-row w-full max-w-5xl h-auto max-h-[90vh] sm:max-h-[85vh] rounded-2xl sm:rounded-4xl bg-white shadow-2xl overflow-hidden"
              >
                <button
                  onClick={() => setSelectedSection(null)}
                  className="absolute right-4 top-4 h-10 w-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-slate-500 hover:text-red-500 transition-all z-110 shadow-md"
                >
                  ✕
                </button>

                <div className="relative w-full md:w-[42%] h-48 sm:h-64 md:h-auto shrink-0">
                  <Image
                    src={selectedSection.image}
                    alt={selectedSection.title}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-teal-600/10" />
                </div>

                <div className="flex-1 p-6 sm:p-10 lg:p-14 overflow-y-auto">
                  <span className="text-[10px] sm:text-xs font-black text-teal-600 uppercase tracking-widest">Roadmap Step</span>
                  <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">{selectedSection.title}</h2>
                  
                  <div className="mt-6">
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600">
                      {selectedSection.content}
                    </p>
                  </div>

                  <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-100">
                    <Button 
                      href="/courses" 
                      className="w-full bg-teal-600 text-white py-4 rounded-xl sm:rounded-2xl font-bold shadow-xl shadow-teal-200 hover:bg-teal-700 transition-all text-sm sm:text-base"
                    >
                      Explore Relevant Courses
                    </Button>
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