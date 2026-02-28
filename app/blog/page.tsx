"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { motion, AnimatePresence } from "framer-motion";

const posts = [
  {
    id: 1,
    category: "Medical German",
    title: "Why Doctors Need Specialized Medical German",
    date: "Feb 24, 2026",
    readTime: "5 min read",
    description: "How medical German differs from general German and why doctors benefit from clinical context.",
    image: "/images/medical-german.jfif",
    content: "Medical German includes terminology, documentation language, structured handovers, discharge summaries, and patient communication patterns used in hospitals. It goes far beyond everyday conversation and requires precision and contextual understanding. Learning these early prevents 'language shock' during your first ward round."
  },
  {
    id: 2,
    category: "Study Planning",
    title: "Learning German While Working 48+ Hours",
    date: "Feb 18, 2026",
    readTime: "7 min read",
    description: "Considerations for balancing internship, residency or practice with steady German learning.",
    image: "/images/study-planning.jpg",
    content: "Doctors often prepare for Germany while managing demanding clinical schedules. Structured planning, repetition cycles, medical-context immersion, and realistic weekly goals are essential. We recommend the 'Pommadoro Medical' method: focusing on 25-minute high-intensity vocabulary clusters between shifts."
  },
  {
    id: 3,
    category: "Vocabulary",
    title: "Mastering Body Systems & Symptoms",
    date: "Feb 12, 2026",
    readTime: "4 min read",
    description: "Building medical vocabulary through body systems, common symptoms and routine hospital tasks.",
    image: "/images/vocabulary.jpg",
    content: "Effective vocabulary building begins with organ systems, symptom descriptions, physical examination language, and documentation phrases. Instead of random lists, learn in thematic clusters (e.g., Cardiology vocabulary alongside Chest Pain symptoms) to improve retention and usability."
  },
  {
    id: 4,
    category: "Hospital Communication",
    title: "Top 5 Language Challenges in German Wards",
    date: "Feb 05, 2026",
    readTime: "6 min read",
    description: "Typical communication challenges doctors face when they first start working in German.",
    image: "/images/hospital.jpg",
    content: "Common challenges include understanding regional accents, rapid ward communication, indirect phrasing, and documentation expectations. Preparation reduces stress and improves professional confidence. Our simulations help you practice 'Redemittel' (useful phrases) for high-pressure situations."
  }
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  return (
    <section className="bg-[#f8fafc] py-16 sm:py-24 overflow-hidden">
      <Container>
        <header className="mb-16 text-center px-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-teal-600">Insights & Guides</span>
            <h1 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-5xl leading-tight">
              Doc2Deutsch <span className="text-teal-600">Journal</span>
            </h1>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Expert advice on medical German, hospital culture, and study strategies for the modern doctor.
            </p>
          </motion.div>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer flex flex-col h-full rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-300"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-teal-700 text-[10px] font-black uppercase rounded-lg shadow-sm">
                     {post.category}
                   </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 bg-slate-300 rounded-full" />
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="mt-3 text-sm text-slate-500 line-clamp-3 leading-relaxed">
                  {post.description}
                </p>

                <div className="mt-auto pt-6 flex items-center text-xs font-black text-teal-600 uppercase tracking-widest group-hover:gap-2 transition-all">
                  Read Article <span className="text-lg">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {selectedPost && (
            <motion.div
              className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl rounded-[2.5rem] bg-white shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh]"
              >
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute right-6 top-6 h-12 w-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-slate-900 hover:bg-red-50 hover:text-red-500 transition-all z-10 shadow-lg"
                >
                  ✕
                </button>

                <div className="relative h-64 sm:h-96 w-full">
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-white via-white/20 to-transparent" />
                </div>

                <div className="relative -mt-20 px-6 sm:px-12 pb-12">
                   <div className="inline-block px-4 py-1.5 bg-teal-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl mb-6 shadow-xl shadow-teal-200">
                     {selectedPost.category}
                   </div>
                   
                   <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                     {selectedPost.title}
                   </h2>

                   <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-8 pb-8 border-b border-slate-100">
                      <span>By Doc2Deutsch Team</span>
                      <span className="h-1 w-1 bg-slate-300 rounded-full" />
                      <span>{selectedPost.readTime}</span>
                   </div>

                   <p className="text-base sm:text-lg leading-relaxed text-slate-600 first-letter:text-5xl first-letter:font-bold first-letter:text-teal-600 first-letter:mr-3 first-letter:float-left">
                     {selectedPost.content}
                   </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}