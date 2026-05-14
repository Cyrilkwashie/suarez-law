import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import ConsultationBanner from "@/components/ConsultationBanner";
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
  Scale,
  Train,
  ShipIcon,
  Flame,
  Umbrella,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas | Miami Personal Injury Lawyers | Suarez & Montero",
  description:
    "Suarez & Montero handles all types of personal injury cases in Miami — car accidents, truck accidents, slip and fall, wrongful death, and more.",
};

const areas = [
  {
    icon: Car,
    title: "Auto Accidents",
    description:
      "Florida roads are among the nation's most dangerous. We fight aggressively for victims of car, SUV, and rideshare crashes.",
    href: "/miami-auto-accident-attorney",
  },
  {
    icon: Bike,
    title: "Bicycle Accidents",
    description:
      "Cyclists have full rights on Miami roads. When drivers fail to share the road, we hold them accountable.",
    href: "/miami-bicycle-accident-attorney",
  },
  {
    icon: Truck,
    title: "Truck Accidents",
    description:
      "Commercial truck collisions cause catastrophic injuries. We handle the complexity of multi-party trucking litigation.",
    href: "/miami-truck-accident-lawyer",
  },
  {
    icon: AlertCircle,
    title: "Slip & Fall",
    description:
      "Property owners must keep premises safe. When negligence causes a fall, we pursue full compensation.",
    href: "/miami-slip-fall-accident-attorney",
  },
  {
    icon: Stethoscope,
    title: "Medical Malpractice",
    description:
      "Doctors and hospitals can be held accountable for preventable errors, misdiagnosis, and surgical mistakes.",
    href: "/miami-medical-malpractice-attorney",
  },
  {
    icon: Users,
    title: "Wrongful Death",
    description:
      "We stand with families who have lost a loved one due to someone else's negligence or recklessness.",
    href: "/miami-wrongful-death-attorney",
  },
  {
    icon: Anchor,
    title: "Boating Accidents",
    description:
      "South Florida's waterways see thousands of boating accidents yearly. We know maritime personal injury law.",
    href: "/miami-boating-accident-attorney",
  },
  {
    icon: Brain,
    title: "Brain Injury",
    description:
      "Traumatic brain injuries require lifetime care. We secure the maximum recovery needed for long-term treatment.",
    href: "/miami-brain-injury-attorney",
  },
  {
    icon: PersonStanding,
    title: "Pedestrian Accidents",
    description:
      "Pedestrians struck by vehicles suffer devastating injuries. We fight for full and fair compensation.",
    href: "/miami-pedestrian-accident-attorney",
  },
  {
    icon: Scale,
    title: "Premises Liability",
    description:
      "Swimming pools, parking lots, defective stairs — property owners are responsible for visitor safety.",
    href: "/miami-premises-liability-attorney",
  },
  {
    icon: Train,
    title: "Train Accidents",
    description:
      "Railroad and public transit accidents involve complex liability. Our attorneys have the experience to navigate these cases.",
    href: "/miami-train-accident-attorney",
  },
  {
    icon: ShipIcon,
    title: "Cruise Ship Accidents",
    description:
      "Cruise ship injury claims are governed by maritime law and strict deadlines — we act fast to protect your rights.",
    href: "/miami-cruise-ship-accident-attorney",
  },
  {
    icon: Zap,
    title: "Spinal Cord Injury",
    description:
      "Spinal injuries can be life-altering. We pursue compensation for medical care, lost income, and quality of life.",
    href: "/miami-spinal-cord-injury-attorney",
  },
  {
    icon: Umbrella,
    title: "Product Liability",
    description:
      "Defective products cause serious harm. We hold manufacturers and distributors accountable for dangerous goods.",
    href: "/miami-product-liability-attorney",
  },
  {
    icon: Flame,
    title: "Serious Injury",
    description:
      "Burn injuries, amputations, and other catastrophic harms require specialized legal counsel. We deliver results.",
    href: "/miami-serious-injury-lawyer",
  },
];

export default function PracticeAreasPage() {
  return (
    <>
      <InnerPageLayout
        title="Practice Areas"
        subtitle="Miami personal injury lawyers handling all types of accident and injury cases throughout South Florida."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Practice Areas" }]}
      >
        <p className="text-ink-muted font-body leading-relaxed mb-10">
          No matter how complex your case, Suarez &amp; Montero has the experience, resources,
          and determination to fight for maximum compensation. Browse our practice areas below
          — and remember: every consultation is free and you pay nothing unless we win.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <Link
                key={area.href}
                href={area.href}
                className="group bg-white border border-sky-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-sky-900/10 hover:border-sky-200 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-sky-600 transition-colors">
                    <Icon
                      size={20}
                      className="text-sky-600 group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-ink mb-1 group-hover:text-sky-600 transition-colors">
                      {area.title}
                    </h3>
                    <p className="font-body text-sm text-ink-muted leading-relaxed">
                      {area.description}
                    </p>
                    <span className="mt-3 inline-block text-sky-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </InnerPageLayout>

      <ConsultationBanner />
    </>
  );
}
