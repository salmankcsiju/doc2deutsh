'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/Container';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const AboutPage = () => {
  return (
    <section className='overflow-hidden bg-white pb-16 pt-24 sm:pb-24 sm:pt-32'>
      <Container>
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-20 text-center px-4'
        >
          <span className='inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm'>
            Our Philosophy
          </span>
          <h1 className='mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl'>
            Beyond Conjugations: <span className="text-blue-600">Clinical Mastery</span>
          </h1>
          <p className='mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600'>
            General German helps you survive in Germany. Doc2Deutsch helps you <span className="font-semibold text-slate-900">thrive in a German hospital.</span>
          </p>
        </motion.header>

        <div className='grid gap-16 lg:grid-cols-2 lg:items-center px-4'>
          <motion.div {...fadeIn} className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-blue-100/50 blur-2xl" />
            <Image
              src='/images/hospital-discussion.jpg'
              alt='Doctors discussing clinical case'
              width={600}
              height={500}
              className='relative z-10 w-full rounded-[2.5rem] shadow-2xl object-cover aspect-4/3'
            />
            <div className="absolute -bottom-6 -right-6 z-20 hidden md:block rounded-2xl bg-white p-6 shadow-xl border border-blue-50">
              <p className="text-3xl font-bold text-blue-600">0%</p>
              <p className="text-xs font-bold uppercase text-slate-500">Generic Content</p>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className='space-y-6'>
            <h2 className='text-2xl font-bold text-slate-900'>
              The "Vacation Language" Trap
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Standard language schools teach you how to order a <i>Currywurst</i> or book a hotel. While essential, these skills won't help you during a 3:00 AM emergency hand-over.
              </p>
              <p className="border-l-4 border-blue-600 pl-6 italic font-medium text-slate-800">
                "In a German ward, precision isn't just a linguistic requirement—it's a clinical safety standard."
              </p>
              <p>
                We integrate medical context from **Day 1 (A1)**. You don't just learn the verb "to see"; you learn how to describe clinical findings.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeIn} className="mt-32 rounded-4xl bg-slate-50 p-8 lg:p-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">General German vs. Doc2Deutsch</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
              <h3 className="font-bold text-red-500 mb-4">General Schools</h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li>• Vocabulary: Hobbies, Travel, Shopping</li>
                <li>• Context: Daily life in a city</li>
                <li>• Goal: Passing a generic exam (Goethe/Telc)</li>
                <li>• Result: Struggle to understand senior consultants</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-blue-600 p-8 shadow-lg shadow-blue-200 text-white">
              <h3 className="font-bold text-blue-100 mb-4">Doc2Deutsch</h3>
              <ul className="space-y-3 text-blue-50 text-sm">
                <li>• Vocabulary: Anatomy, Pathology, Pharmacology</li>
                <li>• Context: Ward rounds, Patient history (Anamnese)</li>
                <li>• Goal: Clinical fluency + Exam Success</li>
                <li>• Result: Confident integration into German teams</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className='mt-32 grid gap-16 lg:grid-cols-2 lg:items-center px-4'>
          <motion.div {...fadeIn} className='order-2 lg:order-1 space-y-6'>
            <h2 className='text-2xl font-bold text-emerald-700'>
              Native-Level Professionalism
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Learning through clinical scenarios improves retention by up to 40%. By practicing dialogues that resemble real consultations, you reduce "translation lag" and develop the structured communication habits expected in Germany.
            </p>
            <div className="flex gap-4 items-center">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <p className="font-semibold text-slate-800">Anamnese-focused training</p>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="order-1 lg:order-2 relative">
             <div className="absolute -inset-4 rounded-4xl bg-emerald-100/50 blur-2xl" />
            <Image
              src='/images/medical-consultation.jpg'
              alt='Doctor explaining treatment to patient'
              width={600}
              height={500}
              className='relative z-10 w-full rounded-[2.5rem] shadow-2xl object-cover aspect-4/3'
            />
          </motion.div>
        </div>

        <motion.div 
          {...fadeIn}
          className='mt-32 overflow-hidden rounded-4xl bg-slate-900 text-white shadow-3xl'
        >
          <div className='grid gap-0 md:grid-cols-2'>
            <div className='p-10 lg:p-16 space-y-6 bg-linear-to-br from-blue-700 to-blue-900'>
              <h2 className='text-3xl font-bold'>Our Mission</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                To equip Indian doctors with the linguistic precision needed to provide world-class healthcare in Germany. We don't just teach words; we teach professional authority.
              </p>
            </div>

            <div className='p-10 lg:p-16 space-y-6 bg-slate-800'>
              <h2 className='text-2xl font-bold text-emerald-400'>Honest Positioning</h2>
              <p className="text-slate-300">
                We are language experts, not immigration agents. We focus 100% on training because we believe mastery of the tongue is the only shortcut to a successful career.
              </p>
              <div className="rounded-xl bg-slate-700/50 p-4 border border-slate-600">
                <p className='text-xs text-slate-400'>
                  *Doc2Deutsch does not provide visa, licensing, or legal services. We recommend official government channels for immigration matters.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutPage;