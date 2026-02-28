"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/Button";

type FormState = {
  name: string;
  qualification: string;
  level: string;
  city: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  qualification: "",
  level: "",
  city: "",
  message: ""
};

const levels = [
  { label: "A1", color: "bg-green-100 text-green-800" },
  { label: "A2", color: "bg-blue-100 text-blue-800" },
  { label: "B1", color: "bg-yellow-100 text-yellow-800" },
  { label: "B2", color: "bg-purple-100 text-purple-800" },
  { label: "Speaking", color: "bg-teal-100 text-teal-800" }
];

const ContactForm = () => {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.qualification.trim())
      nextErrors.qualification = "Please enter your medical qualification.";
    if (!values.level.trim())
      nextErrors.level = "Please select your current German level.";
    if (!values.city.trim()) nextErrors.city = "Please enter your city in India.";
    if (!values.message.trim())
      nextErrors.message = "Please share your situation and questions.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setValues(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(false);

    if (!validate()) return;

    // TODO: Integrate Google Sheet submission here if needed
    setSubmitted(true);
    setValues(initialState);
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">Name</label>
          <input
            type="text"
            value={values.name}
            onChange={e => handleChange("name", e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:ring focus:ring-primary"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Medical Qualification</label>
          <input
            type="text"
            value={values.qualification}
            onChange={e => handleChange("qualification", e.target.value)}
            placeholder="MBBS, MD, BDS"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:ring focus:ring-primary"
          />
          {errors.qualification && <p className="mt-1 text-xs text-red-600">{errors.qualification}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">Current German Level</label>
          <select
            value={values.level}
            onChange={e => handleChange("level", e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:ring focus:ring-primary"
          >
            <option value="" disabled>
              Select your level
            </option>
            {levels.map(l => (
              <option key={l.label} value={l.label}>
                {l.label}
              </option>
            ))}
          </select>
          {errors.level && <p className="mt-1 text-xs text-red-600">{errors.level}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">City (India)</label>
          <input
            type="text"
            value={values.city}
            onChange={e => handleChange("city", e.target.value)}
            placeholder="City in India"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:ring focus:ring-primary"
          />
          {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Message</label>
        <textarea
          rows={4}
          value={values.message}
          onChange={e => handleChange("message", e.target.value)}
          placeholder="Share your current situation and questions about medical German."
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:ring focus:ring-primary"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          Your details will be used to contact you about language training options only.
        </p>
        <Button type="submit" variant="primary">
          Submit Enquiry
        </Button>
      </div>

      {submitted && (
        <p className="mt-2 text-sm font-medium text-emerald-600">
          Thank you. Your enquiry has been recorded. The team will respond with available language counselling slots.
        </p>
      )}
    </form>
  );
};

export default ContactForm;