import InnerPageLayout from "@/components/InnerPageLayout";
import ConsultationBanner from "@/components/ConsultationBanner";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Miami Personal Injury Attorneys | Suarez & Montero",
  description:
    "Contact Suarez & Montero for a free case evaluation. Available 24/7. Hablamos Español. Offices in Miami, Broward, and Duval.",
};

const offices = [
  {
    city: "Miami (Main Office)",
    address: "1 SE 3rd Ave, Suite 2900",
    cityState: "Miami, FL 33131",
    phone: "305-631-1911",
    tel: "tel:3056311911",
  },
  {
    city: "Broward County",
    address: "200 SE 1st St, Suite 200",
    cityState: "Fort Lauderdale, FL 33301",
    phone: "954-704-8123",
    tel: "tel:9547048123",
  },
  {
    city: "Duval County",
    address: "301 W Bay St, Suite 1500",
    cityState: "Jacksonville, FL 32202",
    phone: "904-800-5297",
    tel: "tel:9048005297",
  },
];

export default function ContactUsPage() {
  return (
    <>
      <InnerPageLayout
        title="Contact Us"
        subtitle="We're available 24/7. Your consultation is free and confidential."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-display font-bold text-2xl text-ink mb-6">
              Free Case Evaluation
            </h2>
            <ContactForm />
          </div>

          {/* Office info + Spanish CTA */}
          <div className="space-y-8">
            {/* Offices */}
            <div>
              <h2 className="font-display font-bold text-2xl text-ink mb-5">Our Offices</h2>
              <div className="space-y-5">
                {offices.map((o) => (
                  <div
                    key={o.city}
                    className="bg-white border border-sky-100 rounded-2xl p-5"
                  >
                    <p className="font-display font-bold text-base text-ink mb-2">{o.city}</p>
                    <p className="flex items-start gap-2 font-body text-sm text-ink-muted mb-1">
                      <MapPin size={14} className="text-sky-500 mt-0.5 shrink-0" />
                      {o.address}, {o.cityState}
                    </p>
                    <a
                      href={o.tel}
                      className="flex items-center gap-2 font-body text-sm text-sky-600 hover:text-sky-700 font-medium"
                    >
                      <Phone size={14} />
                      {o.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Spanish CTA */}
            <div className="bg-gradient-to-br from-deep to-[#0a2040] rounded-2xl p-6 text-white">
              <p className="font-display font-bold text-xl mb-2">¿Hablas Español?</p>
              <p className="font-body text-sky-100 text-sm mb-4 leading-relaxed">
                Nuestros abogados hablan español con fluidez. Estamos aquí para ayudarte las
                24 horas del día, los 7 días de la semana.
              </p>
              <a
                href="tel:7862264230"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-body font-bold px-6 py-3 rounded-full text-sm transition-colors"
              >
                <Phone size={15} />
                786-ABOGADO
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-ink-muted font-body text-sm">
              <Mail size={16} className="text-sky-500 shrink-0" />
              <a
                href="mailto:info@suarezmontero.com"
                className="hover:text-sky-600 transition-colors"
              >
                info@suarezmontero.com
              </a>
            </div>
          </div>
        </div>
      </InnerPageLayout>

      <ConsultationBanner />
    </>
  );
}
