import InnerPageLayout from "@/components/InnerPageLayout";
import ConsultationBanner from "@/components/ConsultationBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Results | Miami Personal Injury Verdicts & Settlements | Suarez & Montero",
  description:
    "Browse multi-million dollar verdicts and settlements won by Suarez & Montero for Miami accident victims. Results speak louder than words.",
};

const results = [
  {
    amount: "$3,200,000",
    type: "Car Accident",
    description:
      "Settlement for a client who suffered permanent spinal injuries after a rear-end collision on I-95. The at-fault driver was intoxicated.",
  },
  {
    amount: "$1,750,000",
    type: "Slip & Fall",
    description:
      "Verdict for a client who fell on a wet floor in a Miami retail store, sustaining a traumatic brain injury requiring long-term rehabilitation.",
  },
  {
    amount: "$4,500,000",
    type: "Wrongful Death",
    description:
      "Settlement on behalf of the family of a construction worker killed by a negligent driver on the Palmetto Expressway.",
  },
  {
    amount: "$875,000",
    type: "Bicycle Accident",
    description:
      "Settlement for a cyclist struck by a delivery vehicle in Brickell, resulting in fractured pelvis and multiple surgeries.",
  },
  {
    amount: "$2,100,000",
    type: "Truck Accident",
    description:
      "Verdict against a national trucking company whose driver ran a red light, causing permanent knee and shoulder injuries.",
  },
  {
    amount: "$650,000",
    type: "Pedestrian Accident",
    description:
      "Settlement for a pedestrian struck in a crosswalk in Coral Gables, sustaining leg fractures and torn ligaments.",
  },
];

export default function CaseResultsPage() {
  return (
    <>
      <InnerPageLayout
        title="Case Results"
        subtitle="A sample of the multi-million dollar verdicts and settlements we have recovered for our clients."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Case Results" }]}
      >
        {/* Intro */}
        <p className="text-ink-muted font-body leading-relaxed mb-10">
          Every case is unique, and past results do not guarantee future outcomes. The
          settlements and verdicts below represent a sampling of our work for injury victims
          across South Florida. Our goal in every case is the same: maximum compensation.
        </p>

        {/* Results grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {results.map((r, i) => (
            <div
              key={i}
              className="bg-white border border-sky-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-sky-900/10 transition-shadow"
            >
              <span className="inline-block bg-sky-50 text-sky-700 text-xs font-body font-medium rounded-full px-3 py-0.5 mb-3">
                {r.type}
              </span>
              <p className="font-display font-bold text-3xl text-sky-600 mb-2">
                {r.amount}
              </p>
              <p className="font-body text-sm text-ink-muted leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>

        {/* Legal disclaimer */}
        <p className="text-xs font-body text-ink-subtle leading-relaxed border-t border-sky-100 pt-6">
          <strong>Disclaimer:</strong> The results described above are not typical. Every case
          is different. Past results do not guarantee a similar outcome. The information
          presented here may not reflect the most current legal developments or case outcomes.
          Contact our firm for a free evaluation of your specific circumstances.
        </p>
      </InnerPageLayout>

      <ConsultationBanner heading="Could Your Case Be Our Next Success Story?" />
    </>
  );
}
