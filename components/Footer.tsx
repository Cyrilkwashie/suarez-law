import Link from "next/link";
import { Phone, Globe2, Share2, Link2 } from "lucide-react";

const practiceLinks = [
  "Car Accidents",
  "Bicycle & Motorcycle",
  "Truck Accidents",
  "Slip & Fall",
  "Medical Malpractice",
  "Wrongful Death",
  "Boating & Cruise",
  "Brain & Spinal",
  "Pedestrian Accidents",
];

const phones = [
  { label: "Miami", number: "305-631-1911", href: "tel:3056311911" },
  { label: "Broward", number: "954-704-8123", href: "tel:9547048123" },
  { label: "Duval", number: "904-800-5297", href: "tel:9048005297" },
  { label: "Accidentes", number: "786-ABOGADO", href: "tel:7862264230" },
];

export default function Footer() {
  return (
    <footer className="bg-deep border-t border-sky-900">
      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Col 1 — Brand */}
        <div>
          <Link href="/" className="flex items-baseline gap-1.5 mb-3">
            <span className="font-display font-bold text-lg tracking-tight text-white">
              SUAREZ
            </span>
            <span className="font-display text-sky-400 italic text-base">
              &amp; MONTERO
            </span>
          </Link>
          <p className="font-body text-sm text-sky-300/60 mb-6 max-w-xs leading-relaxed">
            Miami&apos;s trusted personal injury attorneys. Protecting accident
            victims since 2001.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Website"
              className="text-sky-400 hover:text-white transition-colors duration-200"
            >
              <Globe2 size={18} />
            </a>
            <a
              href="#"
              aria-label="Share"
              className="text-sky-400 hover:text-white transition-colors duration-200"
            >
              <Share2 size={18} />
            </a>
            <a
              href="#"
              aria-label="Links"
              className="text-sky-400 hover:text-white transition-colors duration-200"
            >
              <Link2 size={18} />
            </a>
          </div>
        </div>

        {/* Col 2 — Practice Areas */}
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-sky-400 mb-5">
            Practice Areas
          </h4>
          <ul className="space-y-2.5">
            {practiceLinks.map((link) => (
              <li key={link}>
                <a
                  href="#practice-areas"
                  className="font-body text-sm text-sky-200/70 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-sky-400 mb-5">
            Contact Us
          </h4>
          <ul className="space-y-4">
            {phones.map((p) => (
              <li key={p.label} className="flex items-center gap-3">
                <Phone size={14} className="text-sky-600 shrink-0" />
                <div>
                  <p className="font-body text-xs text-sky-200/50 uppercase tracking-wide">
                    {p.label}
                  </p>
                  <a
                    href={p.href}
                    className="font-body text-sm text-sky-400 font-medium hover:text-white transition-colors duration-200"
                  >
                    {p.number}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sky-900/60 py-6 px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="font-body text-xs text-sky-200/60 text-center leading-relaxed">
          © {new Date().getFullYear()} Suarez &amp; Montero, P.A. All rights
          reserved. The information on this website is for general informational
          purposes only and does not constitute legal advice. No attorney-client
          relationship is formed by use of this site.
        </p>
      </div>
    </footer>
  );
}
