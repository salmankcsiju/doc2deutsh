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
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-20 text-center px-4'
        >
          <span className='inline-block rounded-full bg-slate-900 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm border-b-2 border-red-600'>
            ⭐ About Doc2Deutsch
          </span>
          <h1 className='mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl'>
            Beyond Conjugations: <span className="text-red-600">Clinical Mastery</span>
          </h1>
          <p className='mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600'>
            Doc2Deutsch is a specialized platform created <span className="font-bold text-slate-900">exclusively for doctors</span> preparing for a medical career in Germany.
          </p>
        </motion.header>

        {/* Why We Exist Section */}
        <div className='grid gap-16 lg:grid-cols-2 lg:items-center px-4'>
          <motion.div {...fadeIn} className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-yellow-400/20 blur-2xl" />
            <Image
              src='/images/hospital-discussion.jpg'
              alt='Doctors discussing clinical case'
              width={600}
              height={500}
              className='relative z-10 w-full rounded-[2.5rem] shadow-2xl object-cover aspect-4/3 border-4 border-white'
            />
            <div className="absolute -bottom-6 -right-6 z-20 hidden md:block rounded-2xl bg-slate-900 p-6 shadow-xl border-t-4 border-red-600">
              <p className="text-3xl font-bold text-yellow-500">100%</p>
              <p className="text-xs font-bold uppercase text-white">Medical Focus</p>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className='space-y-6'>
            <h2 className='text-3xl font-bold text-slate-900 border-l-4 border-red-600 pl-4'>
              The "Vacation Language" Trap
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Standard language schools teach you how to order a <i>Currywurst</i>. While essential, these skills won't help you during a 3:00 AM emergency hand-over.
              </p>
              <p className="font-medium text-slate-800">
                Most institutes teach German for tourists—not for healthcare professionals. Doc2Deutsch bridges this gap.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-slate-50 rounded-xl border-t-2 border-slate-900">
                  <p className="font-bold text-slate-900">What We Do</p>
                  <p className="text-sm">A1–B2 Medical German, Anamnese, Case Discussion.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border-t-2 border-red-600">
                  <p className="font-bold text-red-600">What We Don't</p>
                  <p className="text-sm">No visa services or FSP coaching. Pure training.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div {...fadeIn} className="mt-32 rounded-4xl bg-slate-900 p-8 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full -mr-16 -mt-16 blur-3xl" />
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white">General German vs. <span className="text-yellow-500">Doc2Deutsch</span></h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-800 p-8 border border-slate-700">
              <h3 className="font-bold text-red-500 mb-4 uppercase tracking-widest text-xs">General Schools</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li>• Vocabulary: Hobbies, Travel, Shopping</li>
                <li>• Context: Daily life in a city</li>
                <li>• Goal: Generic exam success (Goethe/Telc)</li>
                <li>• Result: Struggle to understand senior consultants</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-xs border-b border-yellow-500 pb-1 inline-block">Doc2Deutsch</h3>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li><span className="text-red-600 font-bold">•</span> Vocabulary: Anatomy, Pathology, Pharmacology</li>
                <li><span className="text-red-600 font-bold">•</span> Context: Ward rounds, Patient history (Anamnese)</li>
                <li><span className="text-red-600 font-bold">•</span> Goal: Clinical fluency + Exam Success</li>
                <li><span className="text-red-600 font-bold">•</span> Result: Confident integration into German teams</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Approach Section */}
        <div className='mt-32 grid gap-16 lg:grid-cols-2 lg:items-center px-4'>
          <motion.div {...fadeIn} className='order-2 lg:order-1 space-y-6'>
            <h2 className='text-3xl font-bold text-slate-900'>
              Our Teaching Approach
            </h2>
            <div className="space-y-6">
              {[
                { stage: "Stage 1", title: "Foundation (A1–A2)", desc: "Grammar clarity and medical pronunciation.", color: "bg-slate-900" },
                { stage: "Stage 2", title: "Integration (B1)", desc: "Medical vocabulary introduction and role-play.", color: "bg-red-600" },
                { stage: "Stage 3", title: "Professional (B2)", desc: "Case discussions and patient communication confidence.", color: "bg-yellow-500" }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`h-12 w-12 shrink-0 rounded-lg ${step.color} flex items-center justify-center text-white font-bold text-xs`}>
                    {step.stage}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{step.title}</h4>
                    <p className="text-slate-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="order-1 lg:order-2 relative">
            <Image
              src='/images/medical-consultation.jpg'
              alt='Doctor explaining treatment'
              width={600}
              height={500}
              className='relative z-10 w-full rounded-[2.5rem] shadow-2xl object-cover aspect-4/3'
            />
            <div className="absolute -inset-4 rounded-4xl bg-red-600/5 blur-2xl" />
          </motion.div>
        </div>

        {/* Mission Footer */}
        <motion.div 
          {...fadeIn}
          className='mt-32 overflow-hidden rounded-4xl bg-white border-2 border-slate-900 shadow-2xl'
        >
          <div className='grid gap-0 md:grid-cols-2'>
            <div className='p-10 lg:p-16 space-y-6 bg-slate-900 text-white'>
              <h2 className='text-3xl font-bold'>Our Mission</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                To equip doctors with the linguistic precision needed to provide world-class healthcare in Germany. We don't just teach words; we teach professional authority.
              </p>
              <div className="flex gap-4">
                 <button className="bg-yellow-500 text-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors">Book Free Demo</button>
              </div>
            </div>

            <div className='p-10 lg:p-16 space-y-6 bg-slate-50'>
              <h2 className='text-2xl font-bold text-red-600 underline decoration-yellow-500 underline-offset-8'>Founder's Vision</h2>
              <p className="text-slate-600 italic">
                "Having experienced the confusion around language preparation, we built a platform that focuses on practical medical communication—the skill doctors truly need."
              </p>
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-400 font-mono italic">
                   *Doc2Deutsch is 100% focused on training mastery. mastering the tongue is the only shortcut.
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