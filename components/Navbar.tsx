'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';
import Button from './Button';

type NavItem = {
  href: string;
  label: string;
  color: string;
};

const navItems: NavItem[] = [
  { href: '/', label: 'Home', color: 'bg-green-500' },
  { href: '/about', label: 'About', color: 'bg-blue-500' },
  { href: '/courses', label: 'Courses', color: 'bg-yellow-500' },
  { href: '/roadmap', label: 'Germany Roadmap', color: 'bg-red-500' },
  { href: '/trainers', label: 'Trainers', color: 'bg-purple-500' },
  { href: '/testimonials', label: 'Testimonials', color: 'bg-pink-500' },
  { href: '/blog', label: 'Blog', color: 'bg-indigo-500' },
  { href: '/contact', label: 'Contact', color: 'bg-teal-500' }
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for a more "dynamic" feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <Container className="flex items-center justify-between">
        
        {/* LOGO with hover lift */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-blue-200 shadow-lg group-hover:rotate-3 transition-transform">
              D2D
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              Doc2Deutsch
            </span>
          </Link>
        </motion.div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-x-6">
          <nav className="flex items-center gap-x-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
            {navItems.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all rounded-full ${
                    isActive ? 'text-blue-600 bg-white shadow-sm' : 'text-slate-600 hover:text-blue-500'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span 
                      layoutId="activeTab"
                      className={`absolute inset-x-4 -bottom-1 h-0.5 ${item.color} rounded-full`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Button 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-200"
          >
            Free Counselling
          </Button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          className="p-2 text-slate-600 lg:hidden hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </Container>

      {/* MOBILE MENU with Framer Motion Slide */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden"
          >
            <Container className="flex flex-col gap-y-1 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-lg font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6 px-4">
                <Button href="/contact" className="w-full justify-center bg-blue-600 text-white py-4 rounded-2xl text-lg shadow-xl shadow-blue-100">
                  Get Started Free
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;