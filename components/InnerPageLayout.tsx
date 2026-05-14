import Link from "next/link";
import { Phone, Mail, ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface InnerPageLayoutProps {
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
  children: React.ReactNode;
}

const practiceLinks = [
  { label: "Car Accidents", href: "/miami-car-accident-attorney" },
  { label: "Bicycle & Motorcycle", href: "/practice-areas/bicycle-motorcycle" },
  { label: "Truck Accidents", href: "/practice-areas/truck-accidents" },
  { label: "Slip & Fall", href: "/practice-areas/slip-and-fall" },
  { label: "Medical Malpractice", href: "/practice-areas/medical-malpractice" },
  { label: "Wrongful Death", href: "/practice-areas/wrongful-death" },
  { label: "Boating & Cruise", href: "/practice-areas/boating-cruise" },
  { label: "Brain & Spinal Injury", href: "/practice-areas/brain-spinal" },
  { label: "Pedestrian Accidents", href: "/practice-areas/pedestrian-accidents" },
  { label: "All Practice Areas", href: "/practice-areas" },
];

export default function InnerPageLayout({
  title,
  subtitle,
  breadcrumb,
  children,
}: InnerPageLayoutProps) {
  return (
    <>
      {/* Page hero banner */}
      <div className="bg-gradient-to-r from-deep to-[#0a2040] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          {breadcrumb && breadcrumb.length > 0 && (
            <nav className="flex items-center gap-2 text-sm text-sky-400 mb-4" aria-label="Breadcrumb">
              {breadcrumb.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/30">›</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/70">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Title */}
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-sky-200 text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Two-column content */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Main content */}
            <div className="min-w-0">{children}</div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Contact card */}
              <div className="bg-sky-600 rounded-2xl p-6 text-white sticky top-24">
                <p className="font-display font-bold text-xl mb-1">
                  Free Consultation
                </p>
                <p className="text-sky-100 text-sm mb-5 leading-relaxed">
                  No fee unless we win. Available 24/7. Hablamos Español.
                </p>
                <a
                  href="tel:3056311911"
                  className="flex items-center justify-center gap-2 bg-white text-sky-700 font-body font-bold py-3 rounded-full text-sm hover:bg-sky-50 transition-colors mb-3"
                >
                  <Phone size={15} />
                  305-631-1911
                </a>
                <a
                  href="mailto:info@suarezmontero.com"
                  className="flex items-center justify-center gap-2 border border-white/30 text-white font-body py-3 rounded-full text-sm hover:bg-white/10 transition-colors"
                >
                  <Mail size={15} />
                  Email Us
                </a>
              </div>

              {/* Practice areas links */}
              <div className="bg-white rounded-2xl border border-sky-100 p-6">
                <p className="font-display font-bold text-lg text-ink mb-4">
                  Practice Areas
                </p>
                <ul className="space-y-0">
                  {practiceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 py-2 text-sm font-body text-ink-muted hover:text-sky-600 border-b border-sky-50 last:border-0 transition-colors group"
                      >
                        <ChevronRight
                          size={14}
                          className="text-sky-400 shrink-0 group-hover:translate-x-0.5 transition-transform"
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
