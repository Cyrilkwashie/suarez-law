"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "María R.",
    location: "Miami, FL",
    stars: 5,
    text: "From the first call, I felt heard. They handled everything while I focused on my recovery.",
  },
  {
    name: "Daniel P.",
    location: "Fort Lauderdale, FL",
    stars: 5,
    text: "Jaime treated me like family. The settlement exceeded what I thought was possible.",
  },
  {
    name: "Carolina M.",
    location: "Coral Gables, FL",
    stars: 5,
    text: "Bilingual, kind, and absolutely relentless. I'd recommend them to anyone in South Florida.",
  },
  {
    name: "James T.",
    location: "Miami, FL",
    stars: 5,
    text: "Got rear-ended on I-95. These guys fought the insurance company hard and settled fast. Incredible team.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-xs tracking-[0.3em] text-sky-600 uppercase mb-4"
          >
            Client Voices
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-5xl text-ink mb-4"
          >
            Clients remember how they were treated.
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-2"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-gold fill-gold" />
            ))}
            <span className="font-body text-sm text-ink-muted ml-2">
              500+ five-star reviews
            </span>
          </motion.div>
        </motion.div>

        {/* Cards — horizontal scroll on mobile, grid on md+ */}
        <motion.div
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 md:pb-0 md:overflow-visible snap-x snap-mandatory"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={fadeUp}
              className="bg-sky-50 border border-sky-100 rounded-2xl p-8 shrink-0 w-72 md:w-auto snap-start"
            >
              <div className="font-display text-6xl text-sky-200 leading-none mb-2 select-none">
                &ldquo;
              </div>
              <p className="font-body text-ink-muted text-base leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>
              <p className="font-display font-semibold text-ink mt-2 text-base">
                {review.name}
              </p>
              <p className="font-body text-xs text-ink-muted mt-0.5">
                {review.location}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
