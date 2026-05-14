import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import ConsultationBanner from "@/components/ConsultationBanner";
import ProcessSteps from "@/components/ProcessSteps";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import { Car } from "lucide-react";
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
        {/* Intro */}
        <section className="mb-10">
          <p className="text-ink-muted font-body leading-relaxed mb-4">
            Miami&apos;s roads are among the most dangerous in the United States. If you or a
            loved one were injured in a car accident, you need an attorney who knows how to
            fight back against insurance companies determined to minimize your claim.
          </p>
          <p className="text-ink-muted font-body leading-relaxed mb-4">
            At Suarez &amp; Montero, we have recovered{" "}
            <strong className="text-ink">over $50 million</strong> for accident victims across
            South Florida. Our attorneys are available{" "}
            <strong className="text-ink">24 hours a day, 7 days a week</strong> — and you pay
            nothing unless we win your case.
          </p>
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

        {/* FAQ */}
        <FaqAccordion items={faqs} heading="Car Accident FAQ" />
      </InnerPageLayout>

      <ConsultationBanner heading="Were You in a Miami Car Accident?" subtext="Call now for a free case evaluation. No fee unless we win — guaranteed." />
    </>
  );
}
