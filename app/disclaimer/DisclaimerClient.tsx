"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { motion, AnimatePresence } from "framer-motion";

export default function DisclaimerClient() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <header className="mb-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-slate-900"
          >
            Disclaimer
          </motion.h1>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Clear boundaries. Transparent scope. Professional language training only.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setOpen(true)}
            className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            Read Full Disclaimer
          </motion.button>
        </header>

        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl rounded-2xl bg-white p-10 shadow-2xl"
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-6 top-6 text-sm font-semibold text-slate-500 hover:text-slate-900"
                >
                  Close
                </button>

                <h2 className="text-2xl font-semibold text-slate-900">
                  Scope of Services
                </h2>

                <div className="mt-6 space-y-5 text-slate-700 leading-relaxed text-sm">
                  <p>
                    Doc2Deutsch provides German language training only.
                    All programmes are focused on helping doctors improve
                    general and clinical communication skills.
                  </p>

                  <p>
                    We do not offer Fachsprachprüfung coaching. Any
                    specialised preparation for licensing examinations is
                    outside the scope of Doc2Deutsch courses.
                  </p>

                  <p>
                    We do not provide visa services. Doc2Deutsch does not
                    handle visa applications, residence permits, or
                    administrative procedures.
                  </p>

                  <p>
                    We do not provide licensing exam coaching or regulatory
                    guidance. Official information must be obtained from
                    competent authorities or qualified advisors.
                  </p>

                  <p className="text-xs text-slate-500 pt-4 border-t border-slate-200">
                    Participation in Doc2Deutsch courses constitutes
                    language training only and does not guarantee employment,
                    licensing approval, visa outcomes, or any regulatory result.
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