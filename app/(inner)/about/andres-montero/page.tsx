import Image from "next/image";
import InnerPageLayout from "@/components/InnerPageLayout";
import ConsultationBanner from "@/components/ConsultationBanner";
import { Award, BookOpen, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andres Montero — Miami Personal Injury Attorney | Suarez & Montero",
  description:
    "Andres Montero is managing partner at Suarez & Montero, a bilingual personal injury attorney fighting for Miami accident victims.",
};

const education = [
  { school: "Florida State University College of Law", degree: "Juris Doctor" },
  { school: "University of Florida", degree: "B.A., Economics" },
];

const barAdmissions = [
  "Florida Bar, 2004",
  "U.S. District Court, Southern District of Florida",
];

const accolades = [
  "Rising Stars — Super Lawyers, 2014–2018",
  "Top 40 Under 40 — The National Trial Lawyers",
  "10 Best Attorneys — American Institute of Personal Injury Attorneys",
  "Avvo Rating 9.8 — Superb",
];

export default function AndresMonteroPa() {
  return (
    <>
      <InnerPageLayout
        title="Andres Montero"
        subtitle="Managing Partner — Miami Personal Injury Attorney"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Andres Montero" },
        ]}
      >
        {/* Two-column bio layout */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 mb-12">
          {/* Photo */}
          <div className="relative h-80 md:h-auto rounded-2xl overflow-hidden shadow-lg shrink-0">
            <Image
              src="https://imageserver.floridabar.org/Images/8/61/0965618p.jpg"
              alt="Andres Montero"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Bio */}
          <div>
            <p className="text-sky-600 uppercase text-xs tracking-widest font-body mb-2">
              Managing Partner
            </p>
            <h1 className="font-display font-bold text-3xl text-ink mb-4">Andres Montero</h1>
            <p className="font-body text-ink-muted leading-relaxed mb-4">
              Andres Montero joined Suarez &amp; Montero as managing partner, bringing a sharp
              strategic litigation mindset and an unwavering passion for justice. His practice
              focuses on complex personal injury cases involving automobile accidents, premises
              liability, and serious bodily harm.
            </p>
            <p className="font-body text-ink-muted leading-relaxed mb-4">
              Bilingual in English and Spanish, Andres ensures that Miami&apos;s vibrant
              Hispanic community receives the same level of aggressive, attentive representation
              as any client. He takes pride in being accessible — always reachable by phone or
              email regardless of the hour.
            </p>
            <p className="font-body text-ink-muted leading-relaxed">
              Andres believes strongly in client education: he takes time to explain the legal
              process, manage expectations, and empower clients to make informed decisions. His
              approach blends tenacious advocacy with genuine care for each person&apos;s
              well-being and long-term recovery.
            </p>
          </div>
        </div>

        {/* Education */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} className="text-sky-600" />
            <h2 className="font-display font-bold text-xl text-ink">Education</h2>
          </div>
          <ul className="space-y-3">
            {education.map((e) => (
              <li key={e.school} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-sky-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-body font-medium text-ink text-sm">{e.school}</p>
                  <p className="font-body text-ink-muted text-sm">{e.degree}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Bar Admissions */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-sky-600" />
            <h2 className="font-display font-bold text-xl text-ink">Bar Admissions</h2>
          </div>
          <ul className="space-y-2">
            {barAdmissions.map((b) => (
              <li key={b} className="flex items-center gap-3 font-body text-sm text-ink-muted">
                <CheckCircle size={14} className="text-sky-500 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </section>

        {/* Accolades */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-sky-600" />
            <h2 className="font-display font-bold text-xl text-ink">Awards &amp; Recognition</h2>
          </div>
          <ul className="space-y-2">
            {accolades.map((a) => (
              <li key={a} className="flex items-center gap-3 font-body text-sm text-ink-muted">
                <CheckCircle size={14} className="text-sky-500 shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </section>
      </InnerPageLayout>

      <ConsultationBanner />
    </>
  );
}
