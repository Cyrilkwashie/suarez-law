"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ContactForm from "./ContactForm";

const badges = [
  "100% Free Consultation",
  "Available 24/7",
  "Bilingual · English & Español",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

export default function HomeContactSection() {
  return (
    <section id="contact" className="bg-sky-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text + image */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeUp}
              className="font-body text-xs tracking-[0.3em] text-sky-600 uppercase mb-4"
            >
              Free Case Evaluation
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight mb-6"
            >
              Start with a{" "}
              <span className="text-sky-600 italic">conversation.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-base text-ink-muted leading-relaxed mb-8"
            >
              Tell us what happened. We&apos;ll explain your options in plain
              language — no pressure, no obligation. Your consultation is
              always free.
            </motion.p>

            {/* Badges */}
            <motion.ul variants={container} className="space-y-3 mb-10">
              {badges.map((badge) => (
                <motion.li
                  key={badge}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={18} className="text-sky-600 shrink-0" />
                  <span className="font-body text-sm text-ink">{badge}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Decorative image */}
            <motion.div
              variants={fadeUp}
              className="relative w-full aspect-video rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80"
                alt="Attorney consultation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-deep/40 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl shadow-lg shadow-sky-900/5 border border-sky-100 p-8"
          >
            <p className="font-display font-bold text-2xl text-ink mb-1">
              Request Free Consultation
            </p>
            <p className="font-body text-sm text-ink-muted mb-6">
              All consultations are confidential.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
