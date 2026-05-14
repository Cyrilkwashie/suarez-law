import Link from "next/link";
import { Phone } from "lucide-react";

interface ConsultationBannerProps {
  heading?: string;
  subtext?: string;
}

export default function ConsultationBanner({
  heading = "Ready to Fight for the Compensation You Deserve?",
  subtext = "No fee unless we win. Call us today for a free, no-obligation case evaluation.",
}: ConsultationBannerProps) {
  return (
    <section className="bg-sky-600 py-12 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
          {heading}
        </h2>
        <p className="text-sky-100 text-base md:text-lg mb-8">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:3056311911"
            className="inline-flex items-center gap-2 bg-white text-sky-700 font-body font-bold px-8 py-3.5 rounded-full hover:bg-sky-50 transition-colors"
          >
            <Phone size={18} />
            Call 305-631-1911
          </a>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-body font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
          >
            Free Case Evaluation
          </Link>
        </div>
      </div>
    </section>
  );
}
