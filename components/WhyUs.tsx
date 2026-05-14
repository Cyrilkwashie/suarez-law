"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scale, ShieldCheck, UserCheck } from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "Experience That Matters",
    desc: "Two decades of trial-tested advocacy and case results that speak for themselves.",
  },
  {
    icon: ShieldCheck,
    title: "We Handle the Pressure",
    desc: "From insurance calls to paperwork — we carry the legal weight so you can heal.",
  },
  {
    icon: UserCheck,
    title: "Client-First Representation",
    desc: "You'll know your attorney by name. Every call returned. Every question answered.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-sky-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden ring-4 ring-sky-200 ring-offset-4 ring-offset-sky-50">
              <Image
                src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=900"
                alt="Attorney reviewing case files at desk"
                fill
                loading="eager"
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content */}
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
              Why Clients Choose Us
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight mb-6"
            >
              Trusted legal support
              <br />
              when it{" "}
              <span className="text-sky-600 italic">matters most.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-base text-ink-muted leading-relaxed mb-10"
            >
              After an accident, you need more than legal advice. You need a
              team that listens, guides you clearly, and fights to protect your
              future.
            </motion.p>

            {/* Feature cards */}
            <motion.div variants={container} className="space-y-5">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={feat.title}
                    variants={fadeUp}
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-sky-100"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-ink mb-1">
                        {feat.title}
                      </p>
                      <p className="font-body text-sm text-ink-muted leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

