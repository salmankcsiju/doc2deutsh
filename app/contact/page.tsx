"use client";

import { useState } from "react";
import Container from "@/components/Container";

const courseLevels = [
  { label: "A1", color: "bg-green-100 text-green-800" },
  { label: "A2", color: "bg-blue-100 text-blue-800" },
  { label: "B1", color: "bg-yellow-100 text-yellow-800" },
  { label: "B2", color: "bg-purple-100 text-purple-800" },
  { label: "Speaking", color: "bg-teal-100 text-teal-800" }
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    level: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      const res = await fetch("YOUR_GOOGLE_SCRIPT_URL_HERE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.result === "success") {
        setForm({ name: "", email: "", message: "", level: "" });
        setSuccess(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-50 py-8 sm:py-12">
      <Container>
        <header className="mb-8 text-center px-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
            Contact
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Contact Doc2Deutsch
          </h1>
          <p className="mt-2 max-w-xs mx-auto text-sm text-slate-600 sm:max-w-md">
            Share your background and plans for Germany to explore a suitable medical German learning path.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 px-4">
          {/* Info Panel */}
          <div className="space-y-4 text-slate-700">
            <p>
              Request a free language counselling session. Share your German level, medical background, and study goals (A1–B2).
            </p>
            <p>
              Accurate details help us suggest suitable course structures and timelines for your current stage.
            </p>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs text-slate-700">
              <p className="font-semibold text-slate-900">Scope of this contact</p>
              <p className="mt-1">
                Doc2Deutsch provides German language training only. No FSP coaching, visa services, or licensing exam support.
              </p>
            </div>
          </div>

          {/* Form Panel */}
          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6 shadow-md w-full">
            <h2 className="text-base font-semibold text-slate-900">Enquiry Form</h2>
            <p className="mt-2 text-sm text-slate-700">
              Fill all fields so we can understand your context before the call.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-teal-600 focus:ring focus:ring-teal-200 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-teal-600 focus:ring focus:ring-teal-200 outline-none"
              />

              <select
                name="level"
                value={form.level}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-teal-600 focus:ring focus:ring-teal-200 outline-none"
              >
                <option value="" disabled>
                  Select your current or target level
                </option>
                {courseLevels.map((c) => (
                  <option key={c.label} value={c.label}>
                    {c.label}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-teal-600 focus:ring focus:ring-teal-200 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-teal-600 px-4 py-2 text-white font-semibold hover:bg-teal-700 transition"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {success && (
                <p className="mt-2 text-sm text-green-600">
                  Thank you! Your enquiry has been submitted.
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}