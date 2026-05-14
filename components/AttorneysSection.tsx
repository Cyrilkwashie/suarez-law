"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const attorneys = [
  {
    name: "Jaime Suarez",
    title: "Founding Partner",
    bio: "Twenty-four years of relentless advocacy for injury victims across South Florida. Known for the quiet precision he brings to high-stakes negotiations.",
    image: "https://www.jaime-suarez.com/wp-content/uploads/2025/12/suarez-new-pic-300x291-1-1.webp",
    href: "/about/jaime-suarez",
  },
  {
    name: "Andres G. Montero",
    title: "Partner · Trial Attorney",
    bio: "A trial lawyer with a calm courtroom presence and a record of significant verdicts in catastrophic injury and wrongful death cases.",
    image: "https://imageserver.floridabar.org/Images/8/61/0965618p.jpg",
    href: "/about/andres-montero",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

export default function AttorneysSection() {
  return (
    <section id="attorneys" className="bg-white py-24 lg:py-32">
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
            Our Attorneys
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight mb-3"
          >
            Meet the attorneys behind the fight.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-base text-ink-muted max-w-xl mx-auto"
          >
            Approachable counsel. Uncompromising representation.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          {attorneys.map((attorney) => (
            <motion.div
              key={attorney.name}
              variants={fadeUp}
              className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-sky-900/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display font-bold text-xl text-white">
                    {attorney.name}
                  </p>
                  <p className="font-body text-sm text-sky-300 mt-0.5">
                    {attorney.title}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="p-6">
                <p className="font-body text-sm text-ink-muted leading-relaxed mb-5">
                  {attorney.bio}
                </p>
                <Link
                  href={attorney.href}
                  className="inline-flex items-center gap-2 font-body text-sm font-medium text-sky-600 hover:text-sky-500 transition-colors"
                >
                  View Profile
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
