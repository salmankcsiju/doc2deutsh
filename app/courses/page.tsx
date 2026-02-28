"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button"; 
import { motion, AnimatePresence } from "framer-motion";

const courses = [
  { 
    id: 1, 
    title: "A1 Medical German", 
    image: "/images/A1-German.webp", 
    short: "Foundation level with hospital-focused basics.", 
    content: "Focus on pronunciation, core grammar, hospital vocabulary, and basic patient greetings. Designed to build a strong medical-context language foundation from the beginning.",
    details: ["Hospital Greetings", "Core Grammar", "Body Parts Vocabulary", "Medical Pronunciation"]
  },
  { 
    id: 2, 
    title: "A2 Medical German", 
    image: "/images/A2-German.webp", 
    short: "Develop structured patient communication.", 
    content: "Covers symptom vocabulary, structured patient questioning, and giving medical instructions clearly and confidently.",
    details: ["Patient History (Anamnese)", "Symptom Descriptions", "Medical Instructions", "Drug Administration Basics"]
  },
  { 
    id: 3, 
    title: "B1 Medical German", 
    image: "/images/B1-German.webp", 
    short: "Independent clinical communication.", 
    content: "Learn to explain medical conditions, communicate with colleagues, and understand medical texts and documentation.",
    details: ["Colleague Consultation", "Medical Reports", "Patient Education", "Clinical Documentation"]
  },
  { 
    id: 4, 
    title: "B2 Medical German", 
    image: "/images/B2-German.webp", 
    short: "Advanced professional communication.", 
    content: "Advanced terminology, diagnosis explanation, case discussions, and professional-level documentation structures.",
    details: ["Case Discussions", "Emergency Protocols", "Legal Documentation", "Specialist Terminology"]
  },
  { 
    id: 5, 
    title: "Medical Speaking Course", 
    image: "/images/Indian doctor learning medical.jpg", 
    short: "Clinical fluency and structured spoken German.", 
    content: "Practice history taking, explaining procedures, emergency vocabulary, and real hospital scenarios to improve fluency and structured communication.",
    details: ["Real Hospital Simulation", "Procedure Explanations", "Emergency Vocabulary", "Fluent History Taking"]
  }
];

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <header className="mb-12 px-4 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600"
          >
            Academic Programs
          </motion.p>
          <h1 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-5xl">
            Medical German <span className="text-blue-600">Specializations</span>
          </h1>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          {courses.map((course, index) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedCourse(course)}
              className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {course.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600 line-clamp-2">{course.short}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 uppercase">View Details →</span>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {selectedCourse && (
            <motion.div
              className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl rounded-[2.5rem] bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                  <Image
                    src={selectedCourse.image}
                    alt={selectedCourse.title}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-600/10" />
                </div>

                <div className="flex-1 p-8 sm:p-12 overflow-y-auto">
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="absolute right-6 top-6 h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:text-red-500 transition-all z-20"
                  >
                    ✕
                  </button>

                  <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">Course Details</span>
                  <h2 className="mt-2 text-3xl font-extrabold text-slate-900">{selectedCourse.title}</h2>
                  
                  <p className="mt-6 text-base leading-relaxed text-slate-600">{selectedCourse.content}</p>

                  <div className="mt-8">
                    <h4 className="text-sm font-bold text-slate-900 uppercase">Curriculum Highlights:</h4>
                    <ul className="mt-4 space-y-3">
                      {selectedCourse.details.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-[10px]">✔</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-100">
                    <Button 
                      href="/contact" 
                      className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all"
                    >
                      Enroll Now
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