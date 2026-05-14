"use client";

import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps?: Step[];
  heading?: string;
}

const defaultSteps: Step[] = [
  {
    number: "01",
    title: "Tell Us What Happened",
    description:
      "Share your story in a free, no-obligation consultation. We listen first.",
  },
  {
    number: "02",
    title: "We Build Your Case",
    description:
      "Evidence, experts, and a tailored strategy — quietly assembled in your favor.",
  },
  {
    number: "03",
    title: "We Fight for Compensation",
    description:
      "Negotiation or trial — we pursue the full value of your claim, relentlessly.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function ProcessSteps({
  steps = defaultSteps,
  heading = "What happens next.",
}: ProcessStepsProps) {
  return (
    <section className="bg-deep py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-xs tracking-[0.3em] text-sky-400 uppercase mb-4"
          >
            Our Process
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-5xl text-white leading-tight"
          >
            {heading}
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-10 left-[16.66%] right-[16.66%] border-t border-dashed border-white/20"
            aria-hidden="true"
          />

          <motion.div
            className="relative grid grid-cols-1 sm:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                {/* Number badge */}
                <div className="w-20 h-20 rounded-full bg-sky-600 border-4 border-sky-500/30 flex items-center justify-center mb-6 shadow-lg shadow-sky-900/40 shrink-0">
                  <span className="font-display font-bold text-white text-xl">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
