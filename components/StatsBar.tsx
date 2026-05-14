"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 100, prefix: "$", suffix: "M+", label: "Recovered for Clients" },
  { value: 24, suffix: "+", label: "Years Experience" },
  { value: 3000, suffix: "+", label: "Cases Handled" },
  { value: 500, suffix: "+", label: "Five-Star Reviews" },
];

function CountUp({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  inView,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span className="font-display text-3xl font-bold text-white">
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-sky-600 py-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-4 px-6 text-center ${
                i < stats.length - 1 ? "lg:border-r border-white/20" : ""
              } ${i < 2 ? "border-b lg:border-b-0 border-white/20" : ""}`}
            >
              <CountUp
                target={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                inView={isInView}
              />
              <p className="font-body text-xs tracking-widest uppercase text-sky-100 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
