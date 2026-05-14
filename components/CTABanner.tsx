"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function CTABanner() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1920"
        alt="Attorney walking with client"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-deep/80" />

      {/* Decorative large text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display font-bold text-[20rem] text-white/5 leading-none whitespace-nowrap">
          24/7
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-xs tracking-[0.3em] text-sky-300 uppercase mb-6"
          >
            We&apos;re Here For You
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-6xl text-white leading-tight mb-6"
          >
            You Don&apos;t Have to
            <br />
            <span className="text-sky-300">Go Through This Alone.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-base text-white/70 mb-10 max-w-xl mx-auto"
          >
            Speak with an attorney today. Confidential. Compassionate. Free.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="tel:3056311911"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-10 py-4 rounded-full font-body font-medium transition-colors duration-200"
            >
              <Phone size={16} />
              Call: 305-631-1911
            </a>
            <a
              href="tel:7862264230"
              className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 px-10 py-4 rounded-full font-body font-medium transition-colors duration-200"
            >
              Español: 786-ABOGADO
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
