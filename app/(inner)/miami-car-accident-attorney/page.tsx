import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import ConsultationBanner from "@/components/ConsultationBanner";
import ProcessSteps from "@/components/ProcessSteps";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import { Car, CheckCircle2, ShieldCheck, Clock, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miami Car Accident Attorney | Suarez & Montero — No Fee Unless We Win",
  description:
    "Injured in a Miami car accident? Our attorneys have recovered $50M+ for victims. Call 305-631-1911 for a free consultation — available 24/7.",
};

const subPractices = [
  { label: "Uber Accidents", href: "/miami-uber-accident-attorney" },
  { label: "Head-On Collisions", href: "/miami-head-on-collision-attorney" },
  { label: "Rear-End Collisions", href: "/miami-rear-end-car-collision-attorney" },
  { label: "Speeding Accidents", href: "/miami-speeding-car-accidents-attorney" },
  { label: "Failure to Yield", href: "/miami-failure-to-yield-car-accident-lawyers" },
  { label: "Lyft Accidents", href: "/miami-lyft-car-accident-attorney" },
  { label: "Road Rage Accidents", href: "/miami-road-rage-car-accident-attorney" },
  { label: "Construction Zone", href: "/miami-construction-zone-car-accident-attorney" },
  { label: "Sideswipe & Merging", href: "/miami-sideswipe-merging-accident-attorney" },
  { label: "T-Bone Accidents", href: "/miami-t-bone-car-accident-attorney" },
  { label: "Drunk Driving", href: "/miami-drunk-driving-accident-attorney" },
  { label: "Parking Lot Accidents", href: "/miami-parking-lot-accident-attorney" },
  { label: "Hit & Run", href: "/miami-hit-and-run-accident-attorney" },
  { label: "Lane Change Accidents", href: "/miami-unsafe-lane-changing-car-accident-attorney" },
  { label: "Defective Tires", href: "/miami-defective-tire-accident-attorney" },
  { label: "Distracted Driving", href: "/miami-distracted-driving-accident-attorney" },
  { label: "Seat Belt Injuries", href: "/miami-seat-belt-injury-attorney" },
  { label: "Reckless Driving", href: "/miami-reckless-driving-accident-attorney" },
  { label: "Left Turn Accidents", href: "/miami-left-turn-accident-attorney" },
];

const faqs: FaqItem[] = [
  {
    question: "What should I do immediately after a car accident in Miami?",
    answer:
      "Call 911, seek medical attention even if you feel fine, document the scene with photos, exchange insurance info with the other driver, and contact an attorney before speaking to any insurance adjuster. Florida has a 4-year statute of limitations, but evidence disappears fast — act quickly.",
  },
  {
    question: "How much is my car accident case worth in Miami?",
    answer:
      "The value depends on factors including medical expenses, lost wages, property damage, pain and suffering, and whether the other driver was at fault. Many Miami car accident settlements range from tens of thousands to hundreds of thousands of dollars. Our attorneys will evaluate your case for free.",
  },
  {
    question: "Florida is a no-fault state — can I still sue?",
    answer:
      "Yes. Florida's no-fault law (PIP) covers initial medical bills regardless of fault, but you can still sue the at-fault driver if your injuries meet the \"serious injury\" threshold — which includes permanent impairment, significant scarring, or disfigurement.",
  },
  {
    question: "How long does a Miami car accident lawsuit take?",
    answer:
      "Most cases settle in 6–18 months. Complex cases or those that go to trial can take 2–3 years. We work to resolve your case as quickly as possible while maximizing your recovery.",
  },
  {
    question: "Do I have to pay upfront for a car accident lawyer in Miami?",
    answer:
      "Absolutely not. We work on a contingency fee basis — you pay nothing unless and until we recover money for you. The consultation is free, and there are no hidden costs.",
  },
];

export default function CarAccidentPage() {
  return (
    <>
      <InnerPageLayout
        title="Miami Car Accident Attorney"
        subtitle="Aggressive representation for accident victims throughout Miami-Dade, Broward, and Palm Beach counties."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Car Accident" }]}
      >
        {/* Feature image */}
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-10 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1643934398344-d4ed2add8a27?w=1200&q=80"
            alt="Miami Car Accident Attorney"
            fill
            sizes="(max-width: 1024px) 100vw, 740px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5">
            <span className="font-body text-xs text-white/70 tracking-wider uppercase">
              Suarez &amp; Montero — South Florida
            </span>
          </div>
        </div>

        {/* Intro */}
        <section className="mb-10">
          <p className="text-ink-muted font-body leading-relaxed mb-4">
            Miami&apos;s roads are among the most dangerous in the United States. If you or a
            loved one were injured in a car accident, you need an attorney who knows how to
            fight back against insurance companies determined to minimize your claim.
          </p>
          <p className="text-ink-muted font-body leading-relaxed mb-4">
            At Suarez &amp; Montero, we have recovered{" "}
            <strong className="text-ink">over $100 million</strong> for accident victims across
            South Florida. Our attorneys are available{" "}
            <strong className="text-ink">24 hours a day, 7 days a week</strong> — and you pay
            nothing unless we win your case.
          </p>
        </section>

        {/* What You Can Recover */}
        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-ink mb-6">What You Can Recover</h2>
          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Emergency room and medical bills",
                "Vehicle repair or replacement",
                "Lost wages and future earning capacity",
                "Pain, suffering, and emotional distress",
                "Permanent disability or disfigurement",
                "Loss of enjoyment of life",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-sky-600 mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-ink-muted leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sub-practice grid */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-ink mb-6">
            Types of Car Accident Cases We Handle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subPractices.map((sp) => (
              <Link
                key={sp.href}
                href={sp.href}
                className="flex items-center gap-3 bg-white border border-sky-100 rounded-xl px-4 py-3 font-body text-sm text-ink-muted hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50 transition-all group"
              >
                <Car size={16} className="text-sky-500 shrink-0 group-hover:text-sky-600" />
                {sp.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Process steps */}
        <ProcessSteps />

        {/* Why Suarez & Montero */}
        <section className="mb-10">
          <div className="bg-deep rounded-2xl p-7 text-white">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={22} className="text-sky-400 shrink-0" />
              <h2 className="font-display font-bold text-xl">Why Suarez &amp; Montero?</h2>
            </div>
            <p className="font-body text-sky-100/80 leading-relaxed text-sm mb-5">
              Miami car accident cases are won or lost on evidence and negotiating power. We have
              the resources to take on major insurance carriers — and the trial record to back it
              up. With over 24 years handling South Florida car accident claims, we know every
              tactic insurers use to deny or minimize your case. We fight back.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/10">
              <div className="text-center">
                <p className="font-display font-bold text-sky-400 text-2xl">$100M+</p>
                <p className="font-body text-xs text-sky-200/60 mt-1">Recovered</p>
              </div>
              <div className="text-center">
                <p className="font-display font-bold text-sky-400 text-2xl">24+</p>
                <p className="font-body text-xs text-sky-200/60 mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="font-display font-bold text-sky-400 text-2xl">500+</p>
                <p className="font-body text-xs text-sky-200/60 mt-1">Five-Star Reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust badges */}
        <section className="mb-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Clock, label: "Available 24/7", sub: "Day or night, we answer" },
              { icon: Star, label: "No Fee Unless We Win", sub: "Zero upfront cost to you" },
              { icon: ShieldCheck, label: "Bilingual Service", sub: "English & Español" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3.5">
                <div className="w-9 h-9 bg-sky-50 rounded-lg flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-sky-600" />
                </div>
                <div>
                  <p className="font-body font-semibold text-ink text-sm">{label}</p>
                  <p className="font-body text-xs text-ink-subtle">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <FaqAccordion items={faqs} heading="Car Accident FAQ" />
      </InnerPageLayout>

      <ConsultationBanner heading="Were You in a Miami Car Accident?" subtext="Call now for a free case evaluation. No fee unless we win — guaranteed." />
    </>
  );
}
