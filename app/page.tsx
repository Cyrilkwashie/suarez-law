import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import WhyUs from "@/components/WhyUs";
import PracticeAreas from "@/components/PracticeAreas";
import ProcessSteps from "@/components/ProcessSteps";
import AttorneysSection from "@/components/AttorneysSection";
import HomeContactSection from "@/components/HomeContactSection";
import Testimonials from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const faqItems = [
  {
    question: "How much does it cost to hire your firm?",
    answer:
      "Nothing upfront — ever. We work on a contingency fee basis, which means you pay zero legal fees unless we win your case. Your initial consultation is always free and confidential.",
  },
  {
    question: "What should I do immediately after an accident?",
    answer:
      "Seek medical attention right away, even if you feel fine. Document the scene with photos, gather witness information, and do not give statements to insurance adjusters before speaking with an attorney. Call us 24/7 for immediate guidance.",
  },
  {
    question: "How long do I have to file a claim in Florida?",
    answer:
      "Florida's statute of limitations for personal injury claims is generally two years from the date of the accident. Wrongful death claims also carry a two-year deadline. Acting quickly preserves critical evidence, so contact us as soon as possible.",
  },
  {
    question: "What compensation can I recover?",
    answer:
      "You may be entitled to medical expenses (past and future), lost wages, loss of earning capacity, pain and suffering, emotional distress, and property damage. In some cases, punitive damages are also available. We assess every potential source of recovery for your specific situation.",
  },
  {
    question: "Do you handle cases outside of Miami?",
    answer:
      "Yes. We represent clients throughout South Florida, including Miami-Dade, Broward, and Palm Beach counties. Consultations are available by phone or video call so distance is never a barrier.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <WhyUs />
      <PracticeAreas />
      <ProcessSteps />
      <AttorneysSection />
      <HomeContactSection />
      <Testimonials />
      <FaqAccordion items={faqItems} heading="Questions, answered." eyebrow="FAQ" />
      <CTABanner />
      <Footer />
    </div>
  );
}
