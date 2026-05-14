"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const caseTypes = [
  "Car Accident",
  "Truck Accident",
  "Motorcycle Accident",
  "Bicycle Accident",
  "Pedestrian Accident",
  "Slip & Fall",
  "Wrongful Death",
  "Medical Malpractice",
  "Boating Accident",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to backend / email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-8 text-center">
        <p className="font-display font-bold text-2xl text-sky-700 mb-2">
          Thank you for reaching out!
        </p>
        <p className="font-body text-ink-muted text-sm">
          A member of our team will contact you within 1 business hour. If this is an
          emergency, please call us directly at{" "}
          <a href="tel:3056311911" className="text-sky-600 font-medium">
            305-631-1911
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-sm text-ink mb-1.5" htmlFor="name">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jaime García"
            className="w-full border border-sky-200 rounded-xl px-4 py-3 font-body text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
          />
        </div>
        <div>
          <label className="block font-body text-sm text-ink mb-1.5" htmlFor="phone">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(305) 000-0000"
            className="w-full border border-sky-200 rounded-xl px-4 py-3 font-body text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block font-body text-sm text-ink mb-1.5" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="w-full border border-sky-200 rounded-xl px-4 py-3 font-body text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
        />
      </div>

      <div>
        <label className="block font-body text-sm text-ink mb-1.5" htmlFor="case_type">
          Type of Case
        </label>
        <select
          id="case_type"
          name="case_type"
          className="w-full border border-sky-200 rounded-xl px-4 py-3 font-body text-sm text-ink focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white appearance-none"
        >
          <option value="">Select case type…</option>
          {caseTypes.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-body text-sm text-ink mb-1.5" htmlFor="message">
          Tell Us What Happened <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Briefly describe your accident and injuries…"
          className="w-full border border-sky-200 rounded-xl px-4 py-3 font-body text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-body font-bold py-3.5 rounded-full transition-colors"
      >
        <Send size={16} />
        Send Free Case Evaluation
      </button>

      <p className="text-xs font-body text-ink-subtle text-center">
        By submitting this form, you agree to be contacted by our firm. This is not legal
        advice and does not create an attorney-client relationship.
      </p>
    </form>
  );
}
