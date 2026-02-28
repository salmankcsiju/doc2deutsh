'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Button from '@/components/Button';
import hero_image from '../public/images/Indian doctor learning medical German.png';

const EnrollPopup = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden bg-white rounded-3xl shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-5">
              <div className="hidden md:block md:col-span-2 relative">
                <Image 
                  src="/images/medical-future1.jfif" 
                  alt="Enroll now" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="col-span-3 p-8">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Limited Slots</span>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">Start Your Journey to Germany</h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  Join our next batch of doctor-only Medical German training. Get structured A1-B2 prep.
                </p>
                
                <div className="mt-6 space-y-3">
                  <Button href="/contact" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200">
                    Enroll in Course
                  </Button>
                  <button 
                    onClick={onClose}
                    className="w-full text-slate-500 text-sm font-medium hover:underline"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenEnrollPopup');
      if (!hasSeenPopup) {
        setShowPopup(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('hasSeenEnrollPopup', 'true');
  };

  return (
    <>
      <EnrollPopup isVisible={showPopup} onClose={handleClosePopup} />
      
      {/* Hero Section */}
      <section className='relative overflow-hidden border-b border-blue-50 bg-linear-to-b from-blue-50/50 to-white pb-16 pt-24 sm:pb-24 sm:pt-32'>
        <div className="absolute -right-20 -top-20 h-125 w-125 rounded-full bg-blue-100/40 blur-3xl" />
        
        <Container>
          <div className='grid gap-16 lg:grid-cols-2 lg:items-center'>
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <span className='inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm'>
                Medical German for Indian doctors
              </span>
              <h1 className='mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl'>
                Your Bridge to a <span className="text-blue-600">Medical Career</span> in Germany
              </h1>
              <p className='mt-6 text-lg leading-relaxed text-slate-600 md:text-xl'>
                Master German from A1 to B2 with a curriculum built for doctors. Focus on clinical communication and hospital-ready vocabulary.
              </p>

              <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
                <Button href='/contact' className='bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-xl shadow-lg shadow-blue-200 transition-all hover:scale-105'>
                  Free Counselling Session
                </Button>
                <Button href='/courses' variant='outline' className='px-8 py-4 rounded-xl border-2 hover:bg-slate-50 transition-all'>
                  Join a Demo Class
                </Button>
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className='mt-10 flex items-center gap-4 rounded-2xl bg-white p-5 border border-blue-100 shadow-xl shadow-blue-500/5'
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className='text-sm font-bold text-slate-900'>Small Batches, High Focus</p>
                  <p className='text-xs text-slate-500'>Structured A1–B2 roadmap designed for busy clinical schedules.</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative'
            >
              <div className='absolute -inset-4 rounded-4xl bg-linear-to-tr from-blue-600/10 to-emerald-600/10 blur-2xl' />
              <div className='relative h-100 w-full overflow-hidden rounded-4xl border-8 border-white shadow-2xl sm:h-137.5'>
                <Image
                  src={hero_image}
                  alt='Indian doctor learning medical German'
                  fill
                  className='object-cover transition-transform duration-700 hover:scale-110'
                  priority
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Why Doc2Deutsch */}
      <Section id='why-doc2deutsch' eyebrow='The Doc2Deutsch Advantage' title='Specialized for Healthcare Professionals' className='bg-slate-50'>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            { title: 'Doctor-only batches', img: '/images/medical-future1.jfif', desc: 'Study with peers who share your background and goals.' },
            { title: 'Medical Context A1-B2', img: '/images/medical-future2.png', desc: 'No generic themes. Learn clinical terminology from day one.' },
            { title: 'Clinical Communication', img: '/images/medical-future3.png', desc: 'Practice patient history and doctor-to-doctor discussions.' },
          ].map((feature, index) => (
            <motion.div 
              key={index}
              {...fadeIn}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className='group rounded-3xl border border-white bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-all hover:shadow-2xl hover:shadow-blue-500/10'
            >
              <div className='mb-6 overflow-hidden rounded-2xl'>
                <Image
                  src={feature.img} 
                  alt={feature.title}
                  width={400}
                  height={250}
                  className='aspect-4/3 object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>
              <h3 className='text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors'>{feature.title}</h3>
              <p className='mt-4 text-slate-600 leading-relaxed'>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Who is this for */}
      <Section id='who-is-this-for' eyebrow='Who Is This For' title='Structured Prep for Serious Aspirants'>
        <div className='grid gap-16 md:grid-cols-2 items-center'>
          <motion.div {...fadeIn}>
            <ul className='space-y-6'>
              {[
                'MBBS / MD / BDS doctors planning Germany',
                'Doctors starting from A0 or A1 levels',
                'Professionals needing a verifiable roadmap'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-lg font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeIn} className='relative h-100 overflow-hidden rounded-4xl shadow-2xl'>
            <Image
              src='/images/doctors-group.webp'
              alt='Doctors learning together'
              fill
              className='object-cover hover:scale-105 transition-transform duration-700'
            />
          </motion.div>
        </div>
      </Section>

      {/* Our Approach */}
      <Section 
        id='our-approach' 
        eyebrow='Our Approach' 
        title='Language levels aligned with clinical communication' 
        className='bg-white overflow-hidden'
      >
        <div className='grid gap-12 lg:grid-cols-2 items-center'>
          <div className='relative space-y-8'>
            {/* Decorative vertical line */}
            <div className="absolute left-4.75 top-2 bottom-2 w-0.5 bg-linear-to-b from-blue-600 to-emerald-500 hidden sm:block" />

            {[
              { level: 'A1-A2', title: 'Foundational Clinical Basics', desc: 'Patient greetings, hospital geography, and core medical vocabulary.', icon: '🏥' },
              { level: 'B1', title: 'Intermediate Clinical Interaction', desc: 'Understanding medical documentation and explaining basic procedures.', icon: '📝' },
              { level: 'B2', title: 'Advanced Professional Fluency', desc: 'Case discussions, detailed history taking, and emergency communication.', icon: '🩺' },
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex gap-6 group"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  {step.level}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    {step.title} <span className="text-base">{step.icon}</span>
                  </h3>
                  <p className="mt-1 text-slate-600 leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='absolute -inset-4 rounded-4xl bg-blue-100/50 blur-2xl' />
            <div className='relative w-full h-87.5 sm:h-112.5 overflow-hidden rounded-4xl shadow-2xl border-4 border-white'>
              <Image
                src='/images/clinical-training.webp'
                alt='Clinical communication practice'
                fill
                className='object-cover'
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-blue-100 shadow-lg">
                <p className="text-sm font-bold text-blue-700">Focused Curriculum</p>
                <p className="text-xs text-slate-600">Every lesson is mapped to real-world German hospital scenarios.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className='py-20'>
        <Container>
          <motion.div {...fadeIn} className='bg-slate-900 rounded-4xl p-12 text-center text-white relative overflow-hidden'>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px]" />
            <h2 className='text-3xl lg:text-5xl font-bold relative z-10'>Ready to start your journey?</h2>
            <p className='mt-6 text-slate-400 max-w-2xl mx-auto relative z-10'>
              Get a personalized roadmap from our medical language experts.
            </p>
            <div className='mt-10 flex flex-col sm:flex-row justify-center gap-4 relative z-10'>
              <Button href='/contact' className='bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:bg-blue-500 transition-colors'>
                Book Free Counselling
              </Button>
              <Button href='/courses' className='bg-slate-800 text-white px-10 py-4 rounded-2xl font-bold border border-slate-700 hover:bg-slate-700 transition-colors'>
                View All Courses
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;