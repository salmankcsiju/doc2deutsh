'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/Container';
import Section from '@/components/Section';
import hero_image from '../public/images/Indian doctor learning medical German.png';

const BackgroundOrbs = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <motion.div
      animate={{ y: [0, 40, 0] }}
      transition={{ repeat: Infinity, duration: 12 }}
      className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{ y: [0, -50, 0] }}
      transition={{ repeat: Infinity, duration: 16 }}
      className="absolute bottom-10 right-10 w-96 h-96 bg-slate-900/20 rounded-full blur-[140px]"
    />
  </div>
);

const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(counter);
  }, [end]);

  return <span>{count}</span>;
};

const LeadPopup = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-lg p-4"
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="relative w-full max-w-lg bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-500 hover:text-red-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>

          <div className="bg-gradient-to-r from-slate-900 to-red-700 p-10 text-white text-center">
            <h3 className="text-3xl font-bold">
              Schedule a Free Academic Consultation
            </h3>
            <p className="mt-4 text-slate-200 text-sm">
              Personalized pathway planning for your Germany medical career.
            </p>
          </div>

          <form
            className="p-10 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <input
              required
              placeholder="Doctor's Full Name"
              className="w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all"
            />
            <input
              required
              placeholder="WhatsApp Number (+91)"
              className="w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all"
            />
            <select className="w-full px-4 py-4 border rounded-xl bg-white">
              <option>Evening Batch</option>
              <option>Weekend Intensive</option>
            </select>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-red-600 text-white py-4 rounded-xl font-bold shadow-lg"
            >
              Request Free Consultation
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('seenLead')) setShowPopup(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <LeadPopup
        isVisible={showPopup}
        onClose={() => {
          setShowPopup(false);
          sessionStorage.setItem('seenLead', 'true');
        }}
      />

      <section className="relative pt-32 pb-24 overflow-hidden">
        <BackgroundOrbs />
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-red-600 font-bold uppercase tracking-widest">
                🇩🇪 Specialized Medical German Training
              </span>

              <h1 className="mt-6 text-6xl font-black leading-tight text-slate-900">
                Achieve Clinical Fluency.
              </h1>

              <p className="mt-6 text-lg text-slate-600 max-w-lg">
                Premium academic German training structured exclusively for
                doctors pursuing medical careers in Germany.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                95% First Attempt Success Rate
              </div>

              <div className="mt-10 flex gap-12">
                <div>
                  <p className="text-4xl font-black text-red-600">
                    <Counter end={500} />+
                  </p>
                  <p className="text-sm text-slate-500">Doctors Trained</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-red-600">
                    <Counter end={95} />%
                  </p>
                  <p className="text-sm text-slate-500">Exam Success</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPopup(true)}
                className="mt-12 relative group bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold overflow-hidden"
              >
                <span className="relative z-10">
                  Book Your Free Consultation
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition duration-500" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={hero_image}
                alt="Medical German"
                fill
                className="object-cover transition duration-700 hover:scale-105 hover:rotate-1"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent my-20" />

      <Section eyebrow="Structured Pathway" title="Your 4-Step Germany Roadmap">
        <div className="grid md:grid-cols-4 gap-8">
          {['A1–B2 Training', 'FSP Preparation', 'Document Review', 'Approbation'].map(
            (step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl shadow-xl transition-all duration-500"
              >
                <span className="text-5xl font-black text-red-600">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-bold text-xl">{step}</h3>
                <p className="text-sm text-slate-500 mt-2">
                  Structured academic and clinical preparation.
                </p>
              </motion.div>
            )
          )}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Clarity Before Commitment">
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: 'Is B2 sufficient to work in Germany?',
              a: 'B2 is mandatory, but FSP clinical communication mastery is critical.',
            },
            {
              q: 'Are sessions live?',
              a: '100% live interactive academic sessions.',
            },
            {
              q: 'Do you assist with Approbation?',
              a: 'Yes, complete documentation guidance is provided.',
            },
          ].map((item, i) => (
            <div
              key={i}
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              className="p-6 border rounded-xl shadow-sm cursor-pointer"
            >
              <h4 className="font-bold">{item.q}</h4>
              <AnimatePresence>
                {openFAQ === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden text-sm text-slate-600 mt-2"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-24 text-center bg-gradient-to-r from-slate-900 to-red-700 text-white">
        <Container>
          <h2 className="text-4xl font-black">
            Begin Your Germany Medical Career Transition.
          </h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowPopup(true)}
            className="mt-8 bg-white text-black px-10 py-4 rounded-xl font-bold"
          >
            Schedule Consultation
          </motion.button>
        </Container>
      </section>
    </div>
  );
}