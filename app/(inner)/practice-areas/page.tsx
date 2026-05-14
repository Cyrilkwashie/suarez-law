import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import ConsultationBanner from "@/components/ConsultationBanner";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas | Miami Personal Injury Lawyers | Suarez & Montero",
  description:
    "Suarez & Montero handles all types of personal injury cases in Miami — car accidents, truck accidents, slip and fall, wrongful death, and more.",
};

const areas = [
  {
    title: "Car Accidents",
    description:
      "Florida roads are among the nation's most dangerous. We fight aggressively for victims of car, SUV, and rideshare crashes throughout South Florida.",
    image: "https://images.unsplash.com/photo-1643934398344-d4ed2add8a27?w=700&q=80",
    href: "/miami-car-accident-attorney",
  },
  {
    title: "Bicycle & Motorcycle",
    description:
      "Cyclists and riders have full rights on Miami roads. When drivers fail to share the road, we hold them accountable and fight for maximum compensation.",
    image: "https://images.unsplash.com/photo-1558981001-5864b3250a69?w=700&q=80",
    href: "/practice-areas/bicycle-motorcycle",
  },
  {
    title: "Truck Accidents",
    description:
      "Commercial truck collisions cause catastrophic injuries. We handle multi-party trucking litigation and pursue every liable party.",
    image: "https://images.unsplash.com/photo-1720127601642-7c3a7ba88f5f?w=700&q=80",
    href: "/practice-areas/truck-accidents",
  },
  {
    title: "Slip & Fall",
    description:
      "Property owners must keep premises safe. When negligence causes a fall — wet floors, broken stairs, poor lighting — we pursue full compensation.",
    image: "https://images.unsplash.com/photo-1770802921660-24faec94b4c0?w=700&q=80",
    href: "/practice-areas/slip-and-fall",
  },
  {
    title: "Medical Malpractice",
    description:
      "Doctors and hospitals must be held accountable for preventable errors, misdiagnosis, and surgical mistakes that cause lasting harm.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80",
    href: "/practice-areas/medical-malpractice",
  },
  {
    title: "Wrongful Death",
    description:
      "We stand with families who have lost a loved one — pursuing justice and the financial security your family deserves.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=700&q=80",
    href: "/practice-areas/wrongful-death",
  },
  {
    title: "Boating & Cruise",
    description:
      "South Florida's waterways see thousands of boating accidents yearly. We also handle cruise ship injury claims with strict maritime deadlines.",
    image: "https://images.unsplash.com/photo-1568033043438-4d6a22d928aa?w=700&q=80",
    href: "/practice-areas/boating-cruise",
  },
  {
    title: "Brain & Spinal Injury",
    description:
      "Traumatic brain and spinal cord injuries require lifetime care. We secure maximum recovery working with medical and life-care experts.",
    image: "https://images.unsplash.com/photo-1758691463110-697a814b2033?w=700&q=80",
    href: "/practice-areas/brain-spinal",
  },
  {
    title: "Pedestrian Accidents",
    description:
      "Pedestrians struck by vehicles suffer devastating injuries. Florida has some of the highest pedestrian fatality rates in the nation — we fight back.",
    image: "https://images.unsplash.com/photo-1608487583634-0f31766e4cb1?w=700&q=80",
    href: "/practice-areas/pedestrian-accidents",
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
          and determination to fight for maximum compensation. Every consultation is free and
          you pay nothing unless we win.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {areas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group bg-white border border-sky-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-sky-900/10 hover:border-sky-200 transition-all"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="font-display font-bold text-white text-lg leading-tight drop-shadow">
                    {area.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="font-body text-sm text-ink-muted leading-relaxed mb-4">
                  {area.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sky-600 text-sm font-medium group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </InnerPageLayout>

      <ConsultationBanner />
    </>
  );
}
