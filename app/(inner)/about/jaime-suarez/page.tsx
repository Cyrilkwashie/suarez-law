import Image from "next/image";
import InnerPageLayout from "@/components/InnerPageLayout";
import ConsultationBanner from "@/components/ConsultationBanner";
import { Award, BookOpen, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jaime Suarez — Miami Personal Injury Attorney | Suarez & Montero",
  description:
    "Jaime Suarez is a founding partner with 24+ years fighting for accident victims in Miami and across Florida. Rated 5.0 stars on Google.",
};

const education = [
  { school: "University of Miami School of Law", degree: "Juris Doctor" },
  { school: "Florida International University", degree: "B.S., Political Science" },
];

const barAdmissions = [
  "Florida Bar, 2000",
  "U.S. District Court, Southern District of Florida",
  "U.S. District Court, Middle District of Florida",
];

const accolades = [
  "Super Lawyers — Personal Injury, 2018–2024",
  "Top 100 Trial Lawyers — The National Trial Lawyers",
  "10 Best Attorneys — American Institute of Personal Injury Attorneys",
  "Avvo Rating 10.0 — Superb",
  "5.0 Stars — Google Reviews (500+ reviews)",
];

export default function JaimeSuarezPage() {
  return (
    <>
      <InnerPageLayout
        title="Jaime Suarez"
        subtitle="Founding Partner — Miami Personal Injury Attorney"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Jaime Suarez" },
        ]}
      >
        {/* Two-column bio layout */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 mb-12">
          {/* Photo */}
          <div className="relative h-80 md:h-auto rounded-2xl overflow-hidden shadow-lg shrink-0">
            <Image
              src="https://www.jaime-suarez.com/wp-content/uploads/2025/12/suarez-new-pic-300x291-1-1.webp"
              alt="Jaime Suarez"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Bio */}
          <div>
            <p className="text-sky-600 uppercase text-xs tracking-widest font-body mb-2">
              Founding Partner
            </p>
            <h1 className="font-display font-bold text-3xl text-ink mb-4">Jaime Suarez</h1>
            <p className="font-body text-ink-muted leading-relaxed mb-4">
              For over 24 years, Jaime Suarez has dedicated his career to representing accident
              victims throughout Miami and South Florida. As founding partner of Suarez &amp;
              Montero, he has built the firm on a simple belief: every injured person deserves
              powerful, relentless advocacy regardless of their financial situation.
            </p>
            <p className="font-body text-ink-muted leading-relaxed mb-4">
              Mr. Suarez has a proven track record in complex personal injury litigation,
              including high-stakes car accident cases, wrongful death lawsuits, and serious
              injury claims against major insurance carriers. His courtroom tenacity is matched
              by his deep commitment to each client&apos;s recovery.
            </p>
            <p className="font-body text-ink-muted leading-relaxed">
              A Miami native and fluent Spanish speaker, Jaime understands the unique challenges
              faced by Miami&apos;s diverse communities. He is available 24/7 and personally
              handles every client&apos;s case from intake through resolution.
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
