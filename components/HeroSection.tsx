"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920"
        alt="Miami law office"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-32 w-full">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="font-body text-xs tracking-[0.3em] text-sky-300 uppercase mb-6"
          >
            South Florida · Since 2000
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={item}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8"
          >
            You Focus on Healing.
            <br />
            <span className="text-sky-400">We&apos;ll Handle</span>
            <br />
            the Fight.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="font-body text-lg text-white/80 mb-10 max-w-xl leading-relaxed"
          >
            For over 24 years, Jaime Suarez and the team at Suarez &amp; Montero
            have helped injury victims across South Florida recover millions in
            compensation through compassionate, aggressive legal representation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full font-body font-medium transition-colors duration-200"
            >
              Request a Free Consultation →
            </a>
            <a
              href="tel:3056311911"
              className="inline-flex items-center border border-white/60 text-white hover:bg-white/10 px-8 py-4 rounded-full font-body font-medium transition-colors duration-200"
            >
              Call Now — 305-631-1911
            </a>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            variants={item}
            className="flex items-center gap-3"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="font-body text-sm text-white/70">
              500+ Five-Star Client Reviews
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
