"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Car,
  Bike,
  Truck,
  AlertCircle,
  Stethoscope,
  Users,
  Anchor,
  Brain,
  PersonStanding,
} from "lucide-react";

const areas = [
  {
    icon: Car,
    title: "Car Accidents",
    desc: "Rear-ends, T-bones, DUI crashes, Uber & Lyft.",
    image: "https://images.unsplash.com/photo-1643934398344-d4ed2add8a27?w=700&q=80",
  },
  {
    icon: Bike,
    title: "Bicycle & Motorcycle",
    desc: "Protecting riders when drivers are at fault.",
    image: "https://images.unsplash.com/photo-1558981001-5864b3250a69?w=700&q=80",
  },
  {
    icon: Truck,
    title: "Truck Accidents",
    desc: "Complex commercial trucking liability.",
    image: "https://images.unsplash.com/photo-1720127601642-7c3a7ba88f5f?w=700&q=80",
  },
  {
    icon: AlertCircle,
    title: "Slip & Fall",
    desc: "Premises liability and negligent property owners.",
    image: "https://images.unsplash.com/photo-1770802921660-24faec94b4c0?w=700&q=80",
  },
  {
    icon: Stethoscope,
    title: "Medical Malpractice",
    desc: "Holding healthcare providers accountable.",
    image: "https://images.unsplash.com/photo-1770836037423-d48c88ec60b9?w=700&q=80",
  },
  {
    icon: Users,
    title: "Wrongful Death",
    desc: "Justice and compensation for families.",
    image: "https://images.unsplash.com/photo-1607352196068-2eeca6389a26?w=700&q=80",
  },
  {
    icon: Anchor,
    title: "Boating & Cruise",
    desc: "Maritime accident expertise in Florida.",
    image: "https://images.unsplash.com/photo-1568033043438-4d6a22d928aa?w=700&q=80",
  },
  {
    icon: Brain,
    title: "Brain & Spinal",
    desc: "Catastrophic injury representation.",
    image: "https://images.unsplash.com/photo-1758691463110-697a814b2033?w=700&q=80",
  },
  {
    icon: PersonStanding,
    title: "Pedestrian Accidents",
    desc: "Full advocacy for those struck on foot.",
    image: "https://images.unsplash.com/photo-1608487583634-0f31766e4cb1?w=700&q=80",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
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

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
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
            Practice Areas
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight"
          >
            Personal injury cases
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-display italic text-4xl md:text-5xl text-sky-600 leading-tight"
          >
            we handle.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="font-body text-base text-ink-muted mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            From the highways of Miami to the quiet aftermath at home, we
            represent injury victims across every corner of South Florida.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                variants={fadeUp}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-sky-900/10 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon size={18} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-ink-muted leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
