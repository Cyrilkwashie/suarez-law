import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import ConsultationBanner from "@/components/ConsultationBanner";
import { Scale, Shield, Trophy } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Suarez & Montero | Miami Personal Injury Law Firm",
  description:
    "Learn about Suarez & Montero, Miami's trusted personal injury law firm with 24+ years of experience fighting for accident victims. Meet our attorneys.",
};

const values = [
  {
    icon: Scale,
    title: "Justice for Every Client",
    description:
      "We treat every case as if it were our own family's. No client is too small, no case too complex.",
  },
  {
    icon: Shield,
    title: "No Fee Unless We Win",
    description:
      "Our contingency fee model means you never pay out of pocket. We only win when you win.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description:
      "Over $50 million recovered for our clients across thousands of cases in South Florida and beyond.",
  },
];

const attorneys = [
  {
    name: "Jaime Suarez",
    title: "Founding Partner",
    href: "/about/jaime-suarez",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600",
    bio: "With over 24 years of experience in personal injury law, Jaime Suarez has established himself as one of Miami's most respected accident attorneys. A fierce advocate for injury victims, he has recovered tens of millions of dollars for clients throughout Florida.",
  },
  {
    name: "Andres Montero",
    title: "Managing Partner",
    href: "/about/andres-montero",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600",
    bio: "Andres Montero brings a strategic litigation mindset and a passion for justice to every case. Fluent in both English and Spanish, he ensures that Miami's diverse community receives the highest quality legal representation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <InnerPageLayout
        title="About Suarez & Montero"
        subtitle="Miami's trusted personal injury law firm — fighting for accident victims for over two decades."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      >
        {/* Firm overview */}
        <section className="prose prose-slate max-w-none mb-12">
          <p className="text-lg text-ink-muted leading-relaxed mb-4">
            Founded on the principle that injury victims deserve a powerful voice, Suarez &amp;
            Montero has been serving Miami and South Florida communities for more than 24 years.
            Our firm was built by attorneys who believed the legal system should work for
            everyday people — not just corporations and insurance companies.
          </p>
          <p className="text-ink-muted leading-relaxed mb-4">
            From car accidents and truck collisions to slip-and-fall incidents and wrongful
            death, our team combines aggressive advocacy with genuine compassion. We speak your
            language — literally and figuratively — offering fully bilingual services in English
            and Spanish.
          </p>
          <p className="text-ink-muted leading-relaxed">
            We operate on a strict contingency fee basis: you pay nothing unless we secure a
            settlement or verdict for you. Our phone lines are open 24 hours a day, 7 days a
            week, because accidents don&apos;t wait for business hours.
          </p>
        </section>

        {/* Core values */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-ink mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white border border-sky-100 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center mb-3">
                    <Icon size={20} className="text-sky-600" />
                  </div>
                  <h3 className="font-display font-bold text-base text-ink mb-2">{v.title}</h3>
                  <p className="text-sm font-body text-ink-muted leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Attorney cards */}
        <section>
          <h2 className="font-display font-bold text-2xl text-ink mb-6">Meet Our Attorneys</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {attorneys.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group bg-white border border-sky-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-sky-900/10 transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sky-600 text-xs font-body uppercase tracking-widest mb-1">
                    {a.title}
                  </p>
                  <h3 className="font-display font-bold text-xl text-ink mb-3">{a.name}</h3>
                  <p className="text-sm font-body text-ink-muted leading-relaxed">{a.bio}</p>
                  <span className="mt-4 inline-block text-sky-600 text-sm font-medium group-hover:underline">
                    Read Full Bio →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </InnerPageLayout>

      <ConsultationBanner />
    </>
  );
}
