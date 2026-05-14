import { Phone, AtSign, Globe2, Camera, Briefcase, CirclePlay } from "lucide-react";

const socialLinks = [
  { icon: AtSign,     label: "Twitter/X",  href: "#" },
  { icon: Globe2,     label: "Facebook",   href: "#" },
  { icon: Camera,     label: "Instagram",  href: "#" },
  { icon: Briefcase,  label: "LinkedIn",   href: "#" },
  { icon: CirclePlay, label: "YouTube",    href: "#" },
];

const phones = [
  { city: "Miami",    number: "305-631-1911", href: "tel:3056311911" },
  { city: "Duval",    number: "904-800-5297", href: "tel:9048005297" },
  { city: "Broward",  number: "954-704-8123", href: "tel:9547048123" },
];

export default function TopBar() {
  return (
    <div className="bg-deep border-b border-white/10 hidden md:block">
      {/* Row 1 — Social + availability */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-sky-400 hover:text-white transition-colors"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>
        <p className="text-sky-200 text-xs text-right">
          Available 24 Hours 7 Days A Week &nbsp;·&nbsp;{" "}
          <span className="opacity-70">
            Disponibles las 24 horas del dia 7 dias a la semana
          </span>
        </p>
      </div>

      {/* Row 2 — Phone numbers + accent + language */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-1.5 flex items-center justify-between border-t border-white/10">
        {/* Phone links */}
        <div className="flex items-center">
          {phones.map((p, i) => (
            <span key={p.city} className="flex items-center">
              {i > 0 && (
                <span className="border-r border-white/20 h-3.5 mx-3" />
              )}
              <span className="text-white/40 text-xs mr-1.5">{p.city}</span>
              <a
                href={p.href}
                className="text-white text-sm font-medium hover:text-sky-300 transition-colors flex items-center gap-1"
              >
                <Phone size={11} className="text-sky-400" />
                {p.number}
              </a>
            </span>
          ))}
        </div>

        {/* Accent number */}
        <div className="flex items-center gap-2">
          <span className="text-white/30 text-xs uppercase tracking-wider">Accidentes:</span>
          <a
            href="tel:7862264230"
            className="text-sky-400 font-bold tracking-wide text-sm hover:text-sky-300 transition-colors"
          >
            786-ABOGADO
          </a>
          <span className="text-white/20">·</span>
          <a
            href="tel:7865299377"
            className="text-sky-400 font-bold tracking-wide text-sm hover:text-sky-300 transition-colors"
          >
            786-LAWYERS
          </a>
        </div>

        {/* Language toggle */}
        <div className="flex items-center gap-3 text-xs text-sky-200">
          <span className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
            <span>🇺🇸</span> English
          </span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
            <span>🇪🇸</span> Español
          </span>
        </div>
      </div>
    </div>
  );
}
