import Link from "next/link";
import Image from "next/image";
import InnerPageLayout from "@/components/InnerPageLayout";
import ConsultationBanner from "@/components/ConsultationBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Miami Personal Injury Law News | Suarez & Montero",
  description:
    "Stay informed with legal news, accident tips, and insights from the personal injury attorneys at Suarez & Montero in Miami.",
};

// TODO: connect to CMS
const posts = [
  {
    slug: "what-to-do-after-a-car-accident-miami",
    title: "What to Do Immediately After a Car Accident in Miami",
    excerpt:
      "The steps you take in the minutes and hours after a crash can significantly impact your ability to recover compensation. Here's exactly what to do.",
    date: "May 2, 2025",
    category: "Car Accidents",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600",
  },
  {
    slug: "florida-no-fault-insurance-explained",
    title: "Florida No-Fault Insurance: What It Means for Your Injury Claim",
    excerpt:
      "Florida's PIP system confuses many accident victims. We break down what no-fault insurance covers — and when you can still sue the at-fault driver.",
    date: "April 18, 2025",
    category: "Insurance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600",
  },
  {
    slug: "bicycle-accident-rights-miami",
    title: "Know Your Rights: Miami Cyclists and the Law",
    excerpt:
      "Cyclists have full legal rights on Florida roads. If you were hit by a car, you may be entitled to substantial compensation — even if you weren't wearing a helmet.",
    date: "April 5, 2025",
    category: "Bicycle Accidents",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
  },
  {
    slug: "how-insurance-companies-minimize-claims",
    title: "How Insurance Companies Try to Minimize Your Injury Claim",
    excerpt:
      "Insurance adjusters are trained to pay out as little as possible. Learn their most common tactics and how an attorney can protect your full recovery.",
    date: "March 21, 2025",
    category: "Insurance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
  },
  {
    slug: "wrongful-death-florida-explained",
    title: "Wrongful Death in Florida: Who Can File and What to Expect",
    excerpt:
      "Losing a loved one due to someone's negligence is devastating. Florida law allows surviving family members to pursue wrongful death claims — here's how.",
    date: "March 7, 2025",
    category: "Wrongful Death",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600",
  },
  {
    slug: "slip-and-fall-what-you-need-to-prove",
    title: "Slip and Fall Cases: What You Need to Prove in Florida",
    excerpt:
      "Property owners aren't automatically liable when someone falls on their premises. We explain the legal elements you must establish — and how we prove them.",
    date: "February 20, 2025",
    category: "Premises Liability",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600",
  },
];

export default function BlogPage() {
  return (
    <>
      <InnerPageLayout
        title="Legal Blog"
        subtitle="News, tips, and insights from Miami's personal injury attorneys."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      >
        {/* TODO: connect to CMS — currently placeholder posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-sky-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-sky-900/10 transition-shadow"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-body text-sky-600 font-medium bg-sky-50 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs font-body text-ink-subtle">{post.date}</span>
                </div>
                <h3 className="font-display font-bold text-base text-ink mb-2 line-clamp-2 group-hover:text-sky-600 transition-colors">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-ink-muted leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-block text-sky-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </InnerPageLayout>

      <ConsultationBanner
        heading="Injured? Let's Talk."
        subtext="Free consultation. No fee unless we win. Available 24/7."
      />
    </>
  );
}
