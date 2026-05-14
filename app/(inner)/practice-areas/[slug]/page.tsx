import { notFound } from "next/navigation";
import InnerPageLayout from "@/components/InnerPageLayout";
import ConsultationBanner from "@/components/ConsultationBanner";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import type { Metadata } from "next";

type AreaData = {
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  faqs: FaqItem[];
};

const areaData: Record<string, AreaData> = {
  "bicycle-motorcycle": {
    title: "Bicycle & Motorcycle Accident Attorney",
    subtitle:
      "We fight for injured riders throughout Miami-Dade, Broward, and Palm Beach counties.",
    metaTitle:
      "Miami Bicycle & Motorcycle Accident Attorney | Suarez & Montero",
    metaDescription:
      "Injured in a bicycle or motorcycle accident in Miami? Suarez & Montero fights for maximum compensation. Free consultation — 305-631-1911.",
    intro: [
      "Cyclists and motorcyclists are among the most vulnerable people on Florida roads. When a negligent driver fails to see you, the consequences can be devastating — broken bones, traumatic brain injuries, road rash, and worse.",
      "At Suarez & Montero, we understand the unique challenges bicycle and motorcycle accident victims face. Insurance companies often blame riders unfairly. We investigate thoroughly, gather evidence quickly, and build cases that hold negligent drivers fully accountable.",
      "Florida law entitles injured riders to compensation for medical bills, lost income, pain and suffering, and more. Do not accept a low-ball settlement before speaking with our attorneys.",
    ],
    faqs: [
      {
        question: "Do I need a helmet to have a valid injury claim in Florida?",
        answer:
          "Not necessarily. Florida law requires helmets for riders under 21, but riders over 21 may ride without one if they carry sufficient insurance. Even if you weren't wearing a helmet, you may still have a valid claim — though the defense may argue comparative negligence. We'll protect your rights regardless.",
      },
      {
        question: "What if the driver says they didn't see me?",
        answer:
          "\"I didn't see them\" is not a legal defense. Drivers have a duty to observe the road and share it safely with all users. We use accident reconstruction, witness testimony, and surveillance footage to prove fault.",
      },
      {
        question: "How much is a motorcycle accident case worth in Miami?",
        answer:
          "Values vary widely depending on injury severity, medical costs, and lost wages. Motorcycle accidents often result in serious injuries, which means higher potential compensation. We offer a free case evaluation to estimate what your claim may be worth.",
      },
      {
        question: "How long do I have to file a bicycle or motorcycle accident claim in Florida?",
        answer:
          "Florida's statute of limitations for personal injury claims is generally 4 years from the date of the accident. However, waiting reduces the quality of available evidence — contact us as soon as possible.",
      },
    ],
  },
  "truck-accidents": {
    title: "Truck Accident Attorney",
    subtitle:
      "Holding commercial trucking companies accountable across South Florida.",
    metaTitle:
      "Miami Truck Accident Attorney | Suarez & Montero — No Fee Unless We Win",
    metaDescription:
      "Injured in a truck accident in Miami? Our attorneys take on commercial trucking companies. Free consultation — call 305-631-1911.",
    intro: [
      "Commercial truck accidents are among the most catastrophic collisions on South Florida roads. The sheer size and weight of 18-wheelers, semis, and delivery trucks means even a minor impact can cause life-altering injuries.",
      "Truck accident cases are significantly more complex than standard car accidents. Multiple parties may share liability — the driver, the trucking company, the cargo loader, or the vehicle manufacturer. Federal and state regulations governing hours of service, vehicle maintenance, and cargo limits create additional layers of evidence to explore.",
      "Suarez & Montero moves fast to preserve black box data, driver logs, and maintenance records before they disappear. We have the resources and experience to take on large trucking corporations and their insurers.",
    ],
    faqs: [
      {
        question: "Who can be held liable in a truck accident?",
        answer:
          "Potentially several parties: the truck driver, the trucking company (if the driver was employed), the cargo loading company (if overloading caused the crash), the truck manufacturer (if a defect was involved), or a maintenance provider. We investigate every angle.",
      },
      {
        question: "What evidence is critical in a truck accident case?",
        answer:
          "The truck's black box (ECM), driver logbooks, maintenance records, hours-of-service logs, cargo manifests, and any available dashcam or roadside footage. We act immediately to preserve this evidence before it is overwritten or destroyed.",
      },
      {
        question: "Do federal regulations affect my truck accident claim?",
        answer:
          "Yes. The FMCSA (Federal Motor Carrier Safety Administration) regulates commercial trucking. Violations of federal rules on driver rest hours, vehicle inspections, or weight limits can be powerful evidence of negligence.",
      },
      {
        question: "How long does a truck accident case take?",
        answer:
          "Due to their complexity, truck accident cases often take longer than standard car accident claims — typically 12 to 36 months. We work to resolve cases efficiently while ensuring you receive the full compensation you deserve.",
      },
    ],
  },
  "slip-and-fall": {
    title: "Slip & Fall Accident Attorney",
    subtitle:
      "Pursuing full compensation for premises liability victims across South Florida.",
    metaTitle:
      "Miami Slip & Fall Attorney | Premises Liability | Suarez & Montero",
    metaDescription:
      "Injured in a slip and fall in Miami? Property owners must be held accountable. Free consultation — call Suarez & Montero at 305-631-1911.",
    intro: [
      "Property owners in Florida have a legal duty to maintain safe premises. When they fail — through wet floors, broken stairs, poor lighting, or uneven pavement — and you're injured as a result, they can be held liable.",
      "Slip and fall cases require swift action. Evidence such as surveillance footage, incident reports, and witness accounts can disappear quickly. Our attorneys act fast to preserve what is needed to prove your case.",
      "Whether you were injured at a grocery store, apartment complex, hotel, restaurant, or private residence, Suarez & Montero has the experience to build a strong premises liability claim on your behalf.",
    ],
    faqs: [
      {
        question: "What do I need to prove in a slip and fall case?",
        answer:
          "You must show that the property owner knew or should have known about the dangerous condition, failed to fix it in a reasonable time, and that the hazard caused your injury. We gather surveillance footage, maintenance logs, and incident reports to establish this.",
      },
      {
        question: "What if I was partially at fault for the fall?",
        answer:
          "Florida follows a modified comparative negligence rule. If you are found less than 51% at fault, you can still recover damages — reduced by your percentage of fault. We fight to minimize any fault assigned to you.",
      },
      {
        question: "Does it matter where I fell?",
        answer:
          "Location matters for identifying who owes a duty of care. Falls in stores, restaurants, hotels, parking lots, and apartment complexes are among the most common. Each type of property involves specific legal considerations we are well-versed in.",
      },
      {
        question: "How soon should I contact an attorney after a slip and fall?",
        answer:
          "Immediately. Businesses often repair hazardous conditions and erase surveillance footage quickly after an incident. The sooner we can send a preservation letter and investigate, the stronger your case will be.",
      },
    ],
  },
  "medical-malpractice": {
    title: "Medical Malpractice Attorney",
    subtitle:
      "Holding healthcare providers accountable when negligence causes harm.",
    metaTitle:
      "Miami Medical Malpractice Attorney | Suarez & Montero",
    metaDescription:
      "Harmed by a doctor, hospital, or healthcare provider in Miami? Suarez & Montero handles medical malpractice cases. Free consultation — 305-631-1911.",
    intro: [
      "When you trust a doctor, hospital, or other healthcare provider with your health, you expect competent, careful care. Medical malpractice occurs when a provider's negligence falls below the accepted standard of care — causing injury, worsening a condition, or causing death.",
      "Medical malpractice cases are among the most complex in personal injury law. They require expert medical testimony, extensive record review, and a deep understanding of healthcare standards. Suarez & Montero works with qualified medical experts to build compelling cases for our clients.",
      "Common forms of medical malpractice we handle include misdiagnosis, surgical errors, birth injuries, medication mistakes, and failure to treat. If you believe you or a loved one has been harmed by medical negligence, contact us for a confidential case review.",
    ],
    faqs: [
      {
        question: "How do I know if I have a medical malpractice case?",
        answer:
          "If a healthcare provider's actions fell below the standard of care a reasonably competent professional would provide — and you suffered harm as a direct result — you may have a claim. We review your medical records and consult with experts to evaluate your case.",
      },
      {
        question: "What is the statute of limitations for medical malpractice in Florida?",
        answer:
          "Florida generally requires medical malpractice claims to be filed within 2 years of when the injury was discovered, or should have been discovered, with an absolute 4-year cap in most cases. Birth injury claims involving minors may have different timelines.",
      },
      {
        question: "Do I need an expert witness for a medical malpractice claim?",
        answer:
          "Yes. Florida law requires a verified written medical expert opinion to support a malpractice claim before filing. We have an established network of qualified medical professionals who can review your case and provide the necessary opinions.",
      },
      {
        question: "How much can I recover in a medical malpractice case?",
        answer:
          "Recoverable damages include past and future medical expenses, lost wages, loss of earning capacity, pain and suffering, and in wrongful death cases, funeral costs and family losses. Florida previously capped non-economic damages, but courts have challenged those caps — we'll advise you based on current law.",
      },
    ],
  },
  "wrongful-death": {
    title: "Wrongful Death Attorney",
    subtitle:
      "Compassionate and relentless representation for families who have lost a loved one.",
    metaTitle:
      "Miami Wrongful Death Attorney | Suarez & Montero",
    metaDescription:
      "Lost a loved one due to someone's negligence in Miami? Suarez & Montero pursues justice for grieving families. Free consultation — 305-631-1911.",
    intro: [
      "Losing a family member due to someone else's negligence is a tragedy that no family should face alone. A wrongful death claim cannot undo the loss, but it can provide financial security and a measure of justice for those left behind.",
      "Florida's Wrongful Death Act allows the personal representative of the deceased's estate to bring a claim on behalf of surviving family members, including spouses, children, and parents. Compensation may include lost financial support, loss of companionship, medical and funeral expenses, and more.",
      "At Suarez & Montero, we handle wrongful death cases with the sensitivity and urgency they deserve. Our attorneys will guide your family through the legal process while you focus on healing.",
    ],
    faqs: [
      {
        question: "Who can file a wrongful death claim in Florida?",
        answer:
          "A wrongful death suit must be filed by the personal representative of the deceased's estate, acting on behalf of surviving family members — typically a spouse, children, or parents. We can help identify who is eligible to recover in your specific situation.",
      },
      {
        question: "What damages are available in a wrongful death case?",
        answer:
          "Surviving family members may recover lost financial support, loss of companionship and guidance, mental pain and suffering, and medical and funeral expenses. The estate itself may also recover for the deceased's pain and suffering prior to death.",
      },
      {
        question: "How long do I have to file a wrongful death claim in Florida?",
        answer:
          "Florida's wrongful death statute of limitations is generally 2 years from the date of death. This is shorter than standard personal injury claims — it is critical to contact an attorney as soon as possible.",
      },
      {
        question: "Can a wrongful death claim be filed if there is a criminal case?",
        answer:
          "Yes. Civil wrongful death claims are separate from criminal prosecutions. A criminal conviction is not required to pursue civil liability — and civil cases use a lower burden of proof (preponderance of the evidence rather than beyond a reasonable doubt).",
      },
    ],
  },
  "boating-cruise": {
    title: "Boating & Cruise Accident Attorney",
    subtitle:
      "Maritime accident expertise across Florida's waterways and cruise ports.",
    metaTitle:
      "Miami Boating & Cruise Ship Accident Attorney | Suarez & Montero",
    metaDescription:
      "Injured in a boating or cruise ship accident in Florida? Suarez & Montero handles maritime personal injury cases. Free consultation — 305-631-1911.",
    intro: [
      "South Florida is a boating paradise — and one of the highest-traffic waterway regions in the United States. With that comes a significant number of boating accidents each year caused by operator inattention, intoxication, speeding, and equipment failures.",
      "Cruise ship accidents present a unique legal challenge. Cruise lines typically require passengers to file suit in specific courts within very short deadlines (sometimes as little as one year). Missing these deadlines can forfeit your right to compensation entirely.",
      "Whether you were injured on a privately owned vessel, a jet ski, or a major cruise ship, Suarez & Montero has the maritime law expertise to protect your rights and fight for full compensation.",
    ],
    faqs: [
      {
        question: "What causes most boating accidents in Florida?",
        answer:
          "The most common causes include operator inattention, excessive speed, alcohol use, inexperience, and equipment failure. Florida law holds boat operators to the same standards of reasonable care as drivers on the road.",
      },
      {
        question: "What are the special rules for cruise ship injury claims?",
        answer:
          "Most cruise lines require injury claims to be reported within six months and lawsuits to be filed within one year, in a specific court (often Miami or the port of departure). Missing these deadlines can bar your claim entirely. Contact us immediately if you were injured on a cruise.",
      },
      {
        question: "Can I sue if I was injured while jet skiing or on a rented boat?",
        answer:
          "Yes. Liability may rest with the operator, the rental company (if the vessel was improperly maintained), or a third-party boat operator. We investigate all liable parties to maximize your recovery.",
      },
      {
        question: "Is maritime law different from regular personal injury law?",
        answer:
          "Yes. Maritime law (admiralty law) has its own rules regarding jurisdiction, negligence standards, and deadlines. Our attorneys have specific experience in Florida maritime claims and can navigate these complexities on your behalf.",
      },
    ],
  },
  "brain-spinal": {
    title: "Brain & Spinal Cord Injury Attorney",
    subtitle:
      "Securing lifetime compensation for catastrophic injury victims in South Florida.",
    metaTitle:
      "Miami Brain & Spinal Cord Injury Attorney | Suarez & Montero",
    metaDescription:
      "Suffered a traumatic brain or spinal cord injury in Miami? Suarez & Montero fights for maximum lifetime compensation. Free consultation — 305-631-1911.",
    intro: [
      "Traumatic brain injuries (TBI) and spinal cord injuries are among the most life-altering consequences of accidents. Even a \"mild\" TBI can cause lasting cognitive problems, personality changes, and an inability to work. Spinal cord injuries can result in partial or complete paralysis, requiring a lifetime of medical care and adaptive equipment.",
      "Standard insurance settlements are woefully inadequate for the true lifetime cost of these injuries. Suarez & Montero works with medical experts, life care planners, and economists to calculate the full extent of your future needs — and fights to recover every dollar.",
      "If you or a loved one has suffered a brain or spinal cord injury in an accident caused by someone else's negligence, do not accept any settlement before consulting with our attorneys.",
    ],
    faqs: [
      {
        question: "How is a traumatic brain injury valued in a lawsuit?",
        answer:
          "TBI cases consider current and future medical expenses, long-term rehabilitation costs, lost earning capacity (including inability to return to prior work), pain and suffering, and loss of enjoyment of life. We work with neurologists and life care planners to build a comprehensive damages picture.",
      },
      {
        question: "What compensation is available for a spinal cord injury?",
        answer:
          "Recoverable compensation includes all medical costs (surgeries, hospitalization, rehabilitation), future care needs (in-home care, adaptive equipment, wheelchair modifications), lost income for life, and non-economic damages for pain, suffering, and loss of independence.",
      },
      {
        question: "Can I still recover compensation if my injury is partial and not complete paralysis?",
        answer:
          "Absolutely. Partial spinal cord injuries still involve significant medical treatment, pain, and limitations. The severity of your injury affects the value of your claim, but a partial injury can still result in a substantial recovery.",
      },
      {
        question: "How soon should I contact an attorney after a brain or spinal injury?",
        answer:
          "As soon as medically possible. These cases require extensive investigation, expert consultation, and careful documentation of your ongoing medical needs. Early involvement allows us to preserve evidence and begin building the strongest possible case.",
      },
    ],
  },
  "pedestrian-accidents": {
    title: "Pedestrian Accident Attorney",
    subtitle:
      "Full advocacy for pedestrians struck by vehicles anywhere in South Florida.",
    metaTitle:
      "Miami Pedestrian Accident Attorney | Suarez & Montero",
    metaDescription:
      "Struck by a vehicle as a pedestrian in Miami? Suarez & Montero fights for full compensation. Free consultation — call 305-631-1911.",
    intro: [
      "Pedestrians have virtually no protection against a vehicle. When a driver strikes someone on foot — whether at a crosswalk, intersection, or parking lot — the injuries are typically severe and life-disrupting.",
      "Florida has some of the highest pedestrian fatality rates in the nation. Distracted driving, failure to yield, and speeding are among the leading causes. Drivers who fail to exercise reasonable care around pedestrians must be held accountable.",
      "Suarez & Montero represents pedestrian accident victims throughout Miami-Dade, Broward, and Palm Beach counties. We act quickly to secure surveillance footage, police reports, and witness statements before evidence is lost.",
    ],
    faqs: [
      {
        question: "Who is at fault when a pedestrian is hit by a car?",
        answer:
          "In most cases, the driver bears primary fault. However, Florida's modified comparative negligence rules mean that if you were jaywalking or otherwise negligent, your recovery may be reduced proportionately. We work to minimize any fault assigned to you and maximize your compensation.",
      },
      {
        question: "What if the driver fled the scene?",
        answer:
          "Hit-and-run accidents still provide avenues for compensation. If the driver cannot be identified, your own Uninsured Motorist (UM) coverage may apply. We help clients explore every available source of compensation, including UM and underinsured motorist coverage.",
      },
      {
        question: "What damages can I recover as a pedestrian accident victim?",
        answer:
          "You may recover medical expenses (past and future), lost wages, loss of earning capacity, pain and suffering, emotional distress, and property damage (e.g., broken phone or belongings). In severe cases, compensation for permanent disability and lifestyle changes is also available.",
      },
      {
        question: "Does Florida's no-fault law affect pedestrian accident claims?",
        answer:
          "Florida's no-fault (PIP) law typically applies to vehicle occupants. As a pedestrian, you may still be able to access PIP benefits through your own auto insurance policy if you have one. Otherwise, you pursue a claim directly against the at-fault driver's liability insurance.",
      },
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = areaData[slug];
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
  };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areaData[slug];

  if (!area) notFound();

  return (
    <>
      <InnerPageLayout
        title={area.title}
        subtitle={area.subtitle}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: area.title },
        ]}
      >
        <section className="mb-10 space-y-4">
          {area.intro.map((para, i) => (
            <p key={i} className="text-ink-muted font-body leading-relaxed">
              {para}
            </p>
          ))}
        </section>
      </InnerPageLayout>

      <FaqAccordion items={area.faqs} eyebrow="Common Questions" />

      <ConsultationBanner />
    </>
  );
}
