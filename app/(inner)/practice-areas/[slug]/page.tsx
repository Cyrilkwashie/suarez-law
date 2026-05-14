import Image from "next/image";
import { notFound } from "next/navigation";
import InnerPageLayout from "@/components/InnerPageLayout";
import ConsultationBanner from "@/components/ConsultationBanner";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import { CheckCircle2, ShieldCheck, Clock, Star } from "lucide-react";
import type { Metadata } from "next";

type AreaData = {
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  intro: string[];
  recoverable: string[];
  steps: { num: string; title: string; desc: string }[];
  whyUs: string;
  faqs: FaqItem[];
};

const areaData: Record<string, AreaData> = {
  "bicycle-motorcycle": {
    title: "Bicycle & Motorcycle Accident Attorney",
    subtitle: "We fight for injured riders throughout Miami-Dade, Broward, and Palm Beach counties.",
    metaTitle: "Miami Bicycle & Motorcycle Accident Attorney | Suarez & Montero",
    metaDescription: "Injured in a bicycle or motorcycle accident in Miami? Suarez & Montero fights for maximum compensation. Free consultation â€” 305-631-1911.",
    image: "https://images.unsplash.com/photo-1558981001-5864b3250a69?w=1200&q=80",
    intro: [
      "Cyclists and motorcyclists are among the most vulnerable road users in Florida. When a negligent driver fails to yield, opens a car door without looking, or simply doesn't see you â€” the consequences can be devastating: broken bones, traumatic brain injuries, road rash, spinal damage, and worse.",
      "Insurance companies frequently try to shift blame onto riders, claiming you were speeding, lane-splitting, or not visible enough. We push back on those tactics aggressively. Our attorneys investigate every accident scene, gather surveillance footage, and work with accident reconstruction experts to prove exactly what happened.",
      "Florida law gives injured riders the right to full compensation â€” including medical bills, future treatment, lost income, and pain and suffering. Don't accept a quick settlement before understanding the true value of your case.",
    ],
    recoverable: [
      "Emergency and ongoing medical treatment",
      "Motorcycle or bicycle repair or replacement",
      "Lost wages and future earning capacity",
      "Pain, suffering, and emotional distress",
      "Permanent scarring or disfigurement",
      "Loss of enjoyment of life",
    ],
    steps: [
      { num: "01", title: "Free Case Review", desc: "We evaluate your accident, injuries, and insurance situation at no cost â€” available 24/7." },
      { num: "02", title: "We Build the Evidence", desc: "Our team secures the police report, surveillance footage, witness statements, and expert analysis." },
      { num: "03", title: "We Fight for Maximum Recovery", desc: "We negotiate aggressively with insurers â€” and go to trial when necessary to win what you deserve." },
    ],
    whyUs: "Riders deserve an attorney who understands the unique prejudices they face in court. At Suarez & Montero, we have over 24 years handling bicycle and motorcycle injury cases throughout South Florida. We know how to silence the blame-the-rider narrative and win.",
    faqs: [
      {
        question: "Do I need a helmet to have a valid injury claim in Florida?",
        answer: "Not necessarily. Florida law requires helmets for riders under 21, but riders over 21 may ride without one if they carry sufficient insurance. Even without a helmet, you may still have a valid claim â€” though the defense may argue comparative negligence. We'll protect your rights regardless.",
      },
      {
        question: "What if the driver says they didn't see me?",
        answer: "\"I didn't see them\" is not a legal defense. Drivers have a duty to observe the road and share it safely with all users. We use accident reconstruction, witness testimony, and surveillance footage to prove fault.",
      },
      {
        question: "How much is a motorcycle accident case worth in Miami?",
        answer: "Values vary widely based on injury severity, medical costs, and lost wages. Motorcycle accidents often cause serious injuries, which means higher potential compensation. We offer a free case evaluation to estimate your claim's value.",
      },
      {
        question: "How long do I have to file a claim in Florida?",
        answer: "Florida's statute of limitations for personal injury is generally 4 years. However, waiting reduces available evidence â€” contact us as soon as possible after your accident.",
      },
    ],
  },

  "truck-accidents": {
    title: "Truck Accident Attorney",
    subtitle: "Holding commercial trucking companies accountable across South Florida.",
    metaTitle: "Miami Truck Accident Attorney | Suarez & Montero â€” No Fee Unless We Win",
    metaDescription: "Injured in a truck accident in Miami? Our attorneys take on commercial trucking companies. Free consultation â€” call 305-631-1911.",
    image: "https://images.unsplash.com/photo-1720127601642-7c3a7ba88f5f?w=1200&q=80",
    intro: [
      "Commercial truck accidents are among the most catastrophic collisions on South Florida roads. The sheer size and weight of 18-wheelers, semis, and delivery vehicles means even a glancing blow can cause life-altering injuries â€” or death.",
      "These cases are far more complex than standard car accidents. Multiple parties may share liability: the driver, the trucking company, the cargo loader, the vehicle manufacturer, or a third-party maintenance contractor. Federal FMCSA regulations governing driver hours, vehicle inspections, and cargo weight create additional layers of evidence we know how to exploit.",
      "Suarez & Montero acts fast. We issue immediate preservation letters, subpoena the truck's black box and driver logs, and bring in accident reconstruction experts before critical evidence is altered or destroyed.",
    ],
    recoverable: [
      "All medical costs â€” surgery, hospitalization, and rehabilitation",
      "Future medical care and long-term treatment needs",
      "Lost wages and diminished earning capacity",
      "Pain and suffering and emotional distress",
      "Vehicle repair or total loss",
      "Wrongful death damages for surviving families",
    ],
    steps: [
      { num: "01", title: "Immediate Evidence Preservation", desc: "We send legal holds to the trucking company for the black box, logs, and maintenance records before they disappear." },
      { num: "02", title: "Multi-Party Investigation", desc: "We identify every liable party â€” driver, carrier, shipper, and manufacturer â€” to maximize your recovery." },
      { num: "03", title: "Aggressive Settlement or Trial", desc: "We negotiate from a position of strength. If the insurer won't pay fairly, we take them to court." },
    ],
    whyUs: "Trucking companies carry million-dollar insurance policies and retain powerful defense attorneys immediately after a crash. You need a law firm with equal firepower. Suarez & Montero has the resources and experience to go toe-to-toe with the largest carriers in Florida.",
    faqs: [
      {
        question: "Who can be held liable in a truck accident?",
        answer: "Potentially several parties: the truck driver, the trucking company, the cargo loading company (if overloading caused the crash), the truck manufacturer (if a defect was involved), or a maintenance provider. We investigate every angle.",
      },
      {
        question: "What evidence is critical in a truck accident case?",
        answer: "The truck's black box (ECM), driver logbooks, maintenance records, hours-of-service logs, cargo manifests, and any dashcam or roadside footage. We act immediately to preserve this evidence before it is overwritten or destroyed.",
      },
      {
        question: "Do federal regulations affect my truck accident claim?",
        answer: "Yes. FMCSA violations â€” including driver fatigue rules, vehicle inspection failures, and overweight loads â€” can be powerful evidence of negligence and significantly strengthen your case.",
      },
      {
        question: "How long does a truck accident case take?",
        answer: "Due to their complexity, truck cases typically take 12 to 36 months. We work to resolve cases efficiently while ensuring you receive the full compensation you deserve.",
      },
    ],
  },

  "slip-and-fall": {
    title: "Slip & Fall Accident Attorney",
    subtitle: "Pursuing full compensation for premises liability victims across South Florida.",
    metaTitle: "Miami Slip & Fall Attorney | Premises Liability | Suarez & Montero",
    metaDescription: "Injured in a slip and fall in Miami? Property owners must be held accountable. Free consultation â€” call Suarez & Montero at 305-631-1911.",
    image: "https://images.unsplash.com/photo-1770802921660-24faec94b4c0?w=1200&q=80",
    intro: [
      "Property owners in Florida have a legal duty to maintain safe premises for visitors. When they fail â€” through wet floors without warning signs, broken stairs, inadequate lighting, loose handrails, or uneven pavement â€” and you're injured as a result, they are liable.",
      "Slip and fall cases are time-sensitive. Surveillance footage is often overwritten within 24 to 72 hours. Businesses repair hazards immediately after accidents. Witnesses move on. Our attorneys act fast to preserve what matters.",
      "Whether you fell at a grocery store, hotel, apartment complex, restaurant, or parking lot, Suarez & Montero knows how to build a compelling premises liability case â€” even when property owners deny all responsibility.",
    ],
    recoverable: [
      "Emergency room visits and ongoing medical treatment",
      "Physical therapy and rehabilitation costs",
      "Lost income during recovery",
      "Pain and suffering â€” physical and emotional",
      "Permanent disability or reduced mobility",
      "Future medical expenses if injuries are ongoing",
    ],
    steps: [
      { num: "01", title: "Scene & Evidence Preservation", desc: "We send legal holds to secure surveillance footage, incident reports, and maintenance records before they're gone." },
      { num: "02", title: "Liability Investigation", desc: "We document the hazard, interview witnesses, and work with safety experts to establish the property owner's negligence." },
      { num: "03", title: "Full Compensation Recovery", desc: "We negotiate hard with property owners and their insurers â€” filing suit when they refuse to pay what's fair." },
    ],
    whyUs: "Property owners and their insurers are experienced at minimizing slip and fall claims. They will argue you were distracted, wearing improper footwear, or simply clumsy. We anticipate every defense and counter it with hard evidence and expert testimony.",
    faqs: [
      {
        question: "What do I need to prove in a slip and fall case?",
        answer: "You must show the property owner knew or should have known about the dangerous condition, failed to correct it in a reasonable time, and that the hazard directly caused your injury. We gather the footage, logs, and records to establish this.",
      },
      {
        question: "What if I was partially at fault for the fall?",
        answer: "Florida's modified comparative negligence rule allows you to recover damages if you are less than 51% at fault â€” reduced by your percentage of fault. We fight to minimize any fault attributed to you.",
      },
      {
        question: "Does it matter where I fell?",
        answer: "Yes. The type of property and your status as a visitor (invitee, licensee, or trespasser) affects the duty of care owed. We know the nuances for every type of premises case across Florida.",
      },
      {
        question: "How soon should I contact an attorney after a slip and fall?",
        answer: "Immediately. Surveillance footage is often deleted within 24â€“72 hours. The sooner we can issue a preservation letter and begin investigating, the stronger your case will be.",
      },
    ],
  },

  "medical-malpractice": {
    title: "Medical Malpractice Attorney",
    subtitle: "Holding healthcare providers accountable when negligence causes harm.",
    metaTitle: "Miami Medical Malpractice Attorney | Suarez & Montero",
    metaDescription: "Harmed by a doctor, hospital, or healthcare provider in Miami? Suarez & Montero handles medical malpractice cases. Free consultation â€” 305-631-1911.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    intro: [
      "When you place your health â€” or a loved one's life â€” in the hands of a medical professional, you trust them to meet the standard of care. Medical malpractice occurs when a doctor, surgeon, nurse, hospital, or other provider fails to meet that standard, and someone is harmed as a result.",
      "These cases are among the most complex in personal injury law. They require qualified medical expert witnesses, meticulous record review, and a deep understanding of clinical standards across specialties. Suarez & Montero has the network and experience to take on hospitals and their defense teams.",
      "We handle all forms of medical negligence â€” misdiagnosis, delayed diagnosis, surgical errors, birth injuries, anesthesia mistakes, medication errors, and failure to obtain informed consent. If you believe you were harmed by substandard care, our attorneys will review your case confidentially.",
    ],
    recoverable: [
      "Past and future medical expenses caused by the negligence",
      "Corrective surgery or additional treatment required",
      "Lost wages and long-term earning capacity",
      "Pain, suffering, and emotional trauma",
      "Loss of enjoyment or quality of life",
      "Wrongful death damages for families",
    ],
    steps: [
      { num: "01", title: "Medical Record Review", desc: "We obtain and analyze your complete medical records and consult with expert physicians in the relevant specialty." },
      { num: "02", title: "Expert Opinion & Case Filing", desc: "Florida law requires a verified expert opinion before filing. We secure qualified experts and build a bulletproof case." },
      { num: "03", title: "Litigation & Recovery", desc: "We take on hospitals and their insurers with the expertise and preparation needed to win." },
    ],
    whyUs: "Medical malpractice defendants hire elite defense firms with unlimited resources. We level the playing field. Our attorneys understand medicine, the law, and how to communicate complex negligence to a jury in a way that wins.",
    faqs: [
      {
        question: "How do I know if I have a medical malpractice case?",
        answer: "If a healthcare provider's actions fell below the standard of care a reasonably competent professional would provide â€” and you were directly harmed â€” you may have a claim. We'll review your records and consult medical experts to evaluate it.",
      },
      {
        question: "What is the statute of limitations for medical malpractice in Florida?",
        answer: "Generally 2 years from when you discovered (or should have discovered) the injury, with an absolute 4-year cap. Birth injury claims involving minors may differ. Don't wait â€” contact us today.",
      },
      {
        question: "Do I need an expert witness?",
        answer: "Yes. Florida law requires a verified written expert medical opinion before filing a malpractice claim. We have an established network of board-certified specialists who can evaluate your case.",
      },
      {
        question: "How much can I recover?",
        answer: "Damages include past and future medical expenses, lost wages, pain and suffering, and in death cases, family losses. Courts have challenged Florida's non-economic damage caps â€” we'll advise you on the current state of the law.",
      },
    ],
  },

  "wrongful-death": {
    title: "Wrongful Death Attorney",
    subtitle: "Compassionate and relentless representation for families who have lost a loved one.",
    metaTitle: "Miami Wrongful Death Attorney | Suarez & Montero",
    metaDescription: "Lost a loved one due to someone's negligence in Miami? Suarez & Montero pursues justice for grieving families. Free consultation â€” 305-631-1911.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80",
    intro: [
      "No legal process can undo the loss of a loved one. But a wrongful death claim can provide financial security for those left behind â€” and hold the negligent party accountable for the harm they caused.",
      "Florida's Wrongful Death Act allows the personal representative of the deceased's estate to bring a claim on behalf of surviving family members, including spouses, children, and parents. Compensation may include lost financial support, loss of companionship, medical and funeral expenses, and the deceased's pre-death pain and suffering.",
      "At Suarez & Montero, we handle wrongful death cases with the sensitivity, urgency, and tenacity they demand. We'll handle every aspect of the legal process so your family can focus on healing.",
    ],
    recoverable: [
      "Lost financial support the deceased would have provided",
      "Medical bills and funeral and burial expenses",
      "Loss of parental guidance for minor children",
      "Loss of companionship and consortium for a spouse",
      "Mental pain and suffering of surviving family members",
      "Deceased's own pain and suffering before death",
    ],
    steps: [
      { num: "01", title: "Compassionate Case Evaluation", desc: "We sit with your family, understand your situation, and explain your rights â€” at no cost and no pressure." },
      { num: "02", title: "Thorough Investigation", desc: "We investigate the cause of death, identify all liable parties, and gather the evidence needed to prove negligence." },
      { num: "03", title: "Maximum Family Recovery", desc: "We pursue every dollar the law allows for your family's financial security, present and future." },
    ],
    whyUs: "Wrongful death cases demand a law firm that combines genuine compassion with aggressive advocacy. Suarez & Montero has guided South Florida families through this process for over two decades. We understand both the law and the human cost â€” and we fight accordingly.",
    faqs: [
      {
        question: "Who can file a wrongful death claim in Florida?",
        answer: "A wrongful death suit must be filed by the personal representative of the deceased's estate on behalf of surviving family members â€” typically a spouse, children, or parents. We help identify who is eligible to recover.",
      },
      {
        question: "What damages are available?",
        answer: "Surviving family members may recover lost financial support, loss of companionship, mental pain and suffering, and medical and funeral expenses. The estate may also recover for the deceased's own suffering prior to death.",
      },
      {
        question: "How long do I have to file in Florida?",
        answer: "Florida's wrongful death statute of limitations is generally 2 years from the date of death â€” shorter than standard personal injury claims. Contact us immediately.",
      },
      {
        question: "Can a wrongful death claim be filed alongside a criminal case?",
        answer: "Yes. Civil and criminal cases are separate. A conviction is not required to pursue civil liability â€” the civil standard of proof (preponderance of evidence) is lower than the criminal standard.",
      },
    ],
  },

  "boating-cruise": {
    title: "Boating & Cruise Accident Attorney",
    subtitle: "Maritime accident expertise across Florida's waterways and cruise ship ports.",
    metaTitle: "Miami Boating & Cruise Ship Accident Attorney | Suarez & Montero",
    metaDescription: "Injured in a boating or cruise ship accident in Florida? Suarez & Montero handles maritime personal injury cases. Free consultation â€” 305-631-1911.",
    image: "https://images.unsplash.com/photo-1568033043438-4d6a22d928aa?w=1200&q=80",
    intro: [
      "South Florida's waterways see millions of boaters each year â€” and with that volume comes a significant number of accidents caused by operator inattention, alcohol use, excessive speed, and equipment failures. Florida consistently ranks among the top states for recreational boating fatalities and injuries.",
      "Cruise ship accidents add an entirely different layer of legal complexity. The major cruise lines operate under maritime law, require injuries to be reported within strict deadlines, and often mandate that lawsuits be filed in specific courts â€” sometimes as soon as one year after the incident. Missing a single deadline can forfeit your right to compensation.",
      "Whether you were injured on a privately owned boat, a charter vessel, a jet ski, or a major cruise ship, Suarez & Montero has the maritime law experience to navigate these unique rules and fight for your recovery.",
    ],
    recoverable: [
      "Medical treatment and emergency care",
      "Lost wages during recovery",
      "Pain, suffering, and emotional distress",
      "Permanent disability or disfigurement",
      "Property damage (personal belongings, equipment)",
      "Wrongful death damages for families of victims",
    ],
    steps: [
      { num: "01", title: "Immediate Deadline Check", desc: "Cruise ship and maritime claims have extremely short deadlines. We assess your specific situation immediately to protect your rights." },
      { num: "02", title: "Maritime Investigation", desc: "We gather accident reports, vessel records, operator history, Coast Guard reports, and witness accounts." },
      { num: "03", title: "Full Maritime Recovery", desc: "We pursue compensation under state, federal, and admiralty law â€” whichever provides the best result for you." },
    ],
    whyUs: "Maritime personal injury law is a specialty. Most personal injury attorneys don't have experience with admiralty jurisdiction, cruise line ticket contracts, or the Jones Act. Suarez & Montero does â€” and we use that expertise to maximize your recovery.",
    faqs: [
      {
        question: "What causes most boating accidents in Florida?",
        answer: "The most common causes are operator inattention, excessive speed, alcohol use, inexperience, and equipment failure. Florida law holds boat operators to the same reasonable care standards as road drivers.",
      },
      {
        question: "What are the special rules for cruise ship injury claims?",
        answer: "Most cruise lines require injuries to be reported within 6 months and lawsuits filed within 1 year, in a specific court. Missing these deadlines can bar your claim entirely. Contact us immediately if you were injured on a cruise.",
      },
      {
        question: "Can I sue if I was injured on a rented boat or jet ski?",
        answer: "Yes. Liability may rest with the operator, the rental company (if the vessel was poorly maintained), or a third-party boat. We investigate all liable parties to maximize your recovery.",
      },
      {
        question: "Is maritime law different from regular personal injury law?",
        answer: "Yes. Maritime law has its own jurisdiction rules, negligence standards, and filing deadlines. Our attorneys have specific experience navigating these complexities throughout South Florida.",
      },
    ],
  },

  "brain-spinal": {
    title: "Brain & Spinal Cord Injury Attorney",
    subtitle: "Securing lifetime compensation for catastrophic injury victims in South Florida.",
    metaTitle: "Miami Brain & Spinal Cord Injury Attorney | Suarez & Montero",
    metaDescription: "Suffered a traumatic brain or spinal cord injury in Miami? Suarez & Montero fights for maximum lifetime compensation. Free consultation â€” 305-631-1911.",
    image: "https://images.unsplash.com/photo-1758691463110-697a814b2033?w=1200&q=80",
    intro: [
      "Traumatic brain injuries and spinal cord injuries are among the most life-altering consequences of any accident. Even a \"mild\" TBI can produce lasting cognitive difficulties, personality changes, chronic headaches, and an inability to return to work. Spinal cord injuries â€” partial or complete â€” often require lifelong medical care, adaptive equipment, and significant home modifications.",
      "Insurance companies routinely undervalue these cases because the full lifetime cost of care is difficult to quantify without expert analysis. Suarez & Montero works with neurologists, physiatrists, life care planners, and economic experts to build an evidence-based picture of exactly what you will need â€” for the rest of your life.",
      "These are the cases where settling too fast is most dangerous. Do not accept any offer before speaking with an attorney who understands catastrophic injury claims.",
    ],
    recoverable: [
      "All past and future medical and surgical costs",
      "Long-term rehabilitation and physical therapy",
      "In-home care and assisted living needs",
      "Adaptive equipment and home modifications",
      "Lost income â€” including lifetime earning capacity",
      "Pain, suffering, and loss of independence",
    ],
    steps: [
      { num: "01", title: "Expert Medical Assessment", desc: "We connect you with leading specialists and life care planners to document every aspect of your current and future needs." },
      { num: "02", title: "Economic Damages Analysis", desc: "Our economic experts calculate lifetime lost earning capacity and full future care costs â€” not just current bills." },
      { num: "03", title: "Maximum Lifetime Recovery", desc: "We build a case that accounts for every year ahead â€” and fight to win a settlement or verdict that reflects that reality." },
    ],
    whyUs: "Standard personal injury settlements are designed for standard injuries. Brain and spinal cord injuries require a different level of preparation, expert engagement, and negotiating strength. Suarez & Montero has the experience and resources to handle catastrophic injury cases the right way.",
    faqs: [
      {
        question: "How is a traumatic brain injury valued in a lawsuit?",
        answer: "TBI cases consider current and future medical expenses, long-term rehabilitation, lost earning capacity, pain and suffering, and loss of enjoyment of life. We work with neurologists and life care planners to build a comprehensive damages picture.",
      },
      {
        question: "What compensation is available for a spinal cord injury?",
        answer: "Recoverable damages include all medical costs (surgeries, hospitalization, rehab), future care needs (in-home care, adaptive equipment), lost income for life, and non-economic damages for pain, suffering, and loss of independence.",
      },
      {
        question: "Can I recover compensation if my injury is partial â€” not complete paralysis?",
        answer: "Absolutely. Partial spinal cord injuries involve significant treatment, pain, and limitations. Severity affects value, but even a partial injury can result in a substantial recovery.",
      },
      {
        question: "How soon should I contact an attorney?",
        answer: "As soon as medically possible. These cases require extensive investigation, expert consultation, and careful documentation of ongoing needs. Early involvement builds the strongest possible case.",
      },
    ],
  },

  "pedestrian-accidents": {
    title: "Pedestrian Accident Attorney",
    subtitle: "Full advocacy for pedestrians struck by vehicles anywhere in South Florida.",
    metaTitle: "Miami Pedestrian Accident Attorney | Suarez & Montero",
    metaDescription: "Struck by a vehicle as a pedestrian in Miami? Suarez & Montero fights for full compensation. Free consultation â€” call 305-631-1911.",
    image: "https://images.unsplash.com/photo-1608487583634-0f31766e4cb1?w=1200&q=80",
    intro: [
      "Pedestrians are the most vulnerable people on the road. When a driver strikes someone on foot â€” at a crosswalk, intersection, parking lot, or sidewalk â€” the results are typically severe: broken bones, traumatic brain injury, internal bleeding, spinal damage, or death.",
      "Florida has one of the highest pedestrian fatality rates in the nation. Distracted driving, failure to yield at crosswalks, running red lights, and speeding are the leading causes. Drivers who fail to exercise reasonable care around people on foot must be held fully accountable.",
      "Suarez & Montero acts immediately after pedestrian accidents â€” securing surveillance footage, police reports, and witness statements before evidence is lost. We handle everything so you can focus on your recovery.",
    ],
    recoverable: [
      "All emergency and ongoing medical treatment",
      "Future surgeries and long-term rehabilitation",
      "Lost wages during recovery and reduced earning capacity",
      "Pain and suffering â€” physical and psychological",
      "Permanent disability, disfigurement, or scarring",
      "Personal property damaged in the accident",
    ],
    steps: [
      { num: "01", title: "Rapid Scene Investigation", desc: "We act immediately to gather surveillance footage, police reports, and witness accounts before evidence disappears." },
      { num: "02", title: "Liability & Insurance Analysis", desc: "We identify the at-fault driver, their insurer, and any additional sources of compensation â€” including UM coverage." },
      { num: "03", title: "Fight for Full Compensation", desc: "We pursue every dollar you deserve â€” medically, financially, and for your pain â€” through negotiation or trial." },
    ],
    whyUs: "Pedestrian accident victims are often in the most vulnerable position â€” physically and financially. Suarez & Montero brings 24+ years of South Florida personal injury experience, a track record of multimillion-dollar recoveries, and a genuine commitment to treating every client like family.",
    faqs: [
      {
        question: "Who is at fault when a pedestrian is hit by a car?",
        answer: "In most cases, the driver bears primary fault. Florida's modified comparative negligence rules may reduce your recovery if you were partially at fault (e.g., jaywalking), but we work hard to minimize any fault attributed to you.",
      },
      {
        question: "What if the driver fled the scene?",
        answer: "Hit-and-run accidents still offer avenues for compensation. Your own Uninsured Motorist (UM) coverage may apply. We help clients explore every available source of recovery.",
      },
      {
        question: "What damages can I recover?",
        answer: "Medical expenses, lost wages, earning capacity, pain and suffering, emotional distress, disability, disfigurement, and property damage are all potentially recoverable.",
      },
      {
        question: "Does Florida's no-fault law affect pedestrian claims?",
        answer: "Florida's no-fault (PIP) law typically covers vehicle occupants. As a pedestrian, you may be able to access PIP through your own auto policy if you have one â€” otherwise you pursue the at-fault driver's liability insurance directly.",
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
        {/* Feature image */}
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-10 shadow-lg">
          <Image
            src={area.image}
            alt={area.title}
            fill
            sizes="(max-width: 1024px) 100vw, 740px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5">
            <span className="font-body text-xs text-white/70 tracking-wider uppercase">
              Suarez &amp; Montero â€” South Florida
            </span>
          </div>
        </div>

        {/* Intro */}
        <section className="mb-10 space-y-4">
          {area.intro.map((para, i) => (
            <p key={i} className="text-ink-muted font-body leading-relaxed">
              {para}
            </p>
          ))}
        </section>

        {/* What You Can Recover */}
        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-ink mb-6">
            What You Can Recover
          </h2>
          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {area.recoverable.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-sky-600 mt-0.5 shrink-0"
                  />
                  <span className="font-body text-sm text-ink-muted leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-10">
          <h2 className="font-display font-bold text-2xl text-ink mb-6">
            How We Handle Your Case
          </h2>
          <div className="space-y-4">
            {area.steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-5 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm"
              >
                <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-white text-sm">
                    {step.num}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-ink text-base mb-1">
                    {step.title}
                  </p>
                  <p className="font-body text-sm text-ink-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </InnerPageLayout>

      {/* Why Suarez & Montero — full-width dark section */}
      <section className="bg-deep py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <p className="font-body text-xs tracking-[0.3em] text-sky-400 uppercase mb-4">
                Why Choose Us
              </p>
              <div className="flex items-start gap-3 mb-6">
                <ShieldCheck size={28} className="text-sky-400 shrink-0 mt-1" />
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">
                  Why Suarez &amp; Montero?
                </h2>
              </div>
              <p className="font-body text-sky-100/80 leading-relaxed text-base">
                {area.whyUs}
              </p>
            </div>

            {/* Right: stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "$100M+", label: "Recovered for clients" },
                { value: "24+", label: "Years of experience" },
                { value: "500+", label: "Five-star reviews" },
              ].map(({ value, label }) => (
                <div key={value} className="text-center bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="font-display font-bold text-sky-400 text-3xl md:text-4xl mb-2">
                    {value}
                  </p>
                  <p className="font-body text-xs text-sky-200/60 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges — full-width light section */}
      <section className="bg-white py-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Clock, label: "Available 24/7", sub: "Day or night, we answer" },
              { icon: Star, label: "No Fee Unless We Win", sub: "Zero upfront cost to you" },
              { icon: ShieldCheck, label: "Bilingual Service", sub: "English & Español" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 hover:border-sky-200 transition-colors">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-sky-600" />
                </div>
                <div>
                  <p className="font-body font-semibold text-ink">{label}</p>
                  <p className="font-body text-sm text-ink-muted">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion
        items={area.faqs}
        heading="Frequently Asked Questions"
        eyebrow="FAQ"
      />

      <ConsultationBanner
        heading={`Injured? Talk to a ${area.title.replace(" Attorney", "")} Lawyer Today.`}
        subtext="Free consultation. No fee unless we win. Available 24/7 â€” call 305-631-1911."
      />
    </>
  );
}
