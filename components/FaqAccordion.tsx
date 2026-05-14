"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  heading?: string;
  eyebrow?: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function FaqAccordion({
  items,
  heading = "Frequently Asked Questions",
  eyebrow = "FAQ",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="bg-sky-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left: heading */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="lg:sticky lg:top-28"
          >
            <motion.p
              variants={fadeUp}
              className="font-body text-xs tracking-[0.3em] text-sky-600 uppercase mb-4"
            >
              {eyebrow}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight"
            >
              {heading}
            </motion.h2>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            className="space-y-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
          >
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white border border-sky-100 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-body font-medium text-ink hover:bg-sky-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{item.question}</span>
                    <div
                      className={`w-8 h-8 rounded-full bg-sky-600 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={16} className="text-white" />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: { duration: 0.22, ease: "easeOut" },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: { duration: 0.16 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 font-body text-sm text-ink-muted leading-relaxed border-t border-sky-100">
                          <div className="pt-4">{item.answer}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

