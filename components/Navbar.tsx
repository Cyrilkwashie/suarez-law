"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, Menu, X } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "Jaime Suarez", href: "/about/jaime-suarez" },
      { label: "Andres Montero", href: "/about/andres-montero" },
    ],
  },
  {
    label: "Car Accident",
    href: "/miami-car-accident-attorney",
    dropdown: [
      { label: "Miami Uber Accident", href: "/miami-uber-accident-attorney" },
      { label: "Head on Collisions", href: "/miami-head-on-collision-attorney" },
      { label: "Rear End Collisions", href: "/miami-rear-end-car-collision-attorney" },
      { label: "Speeding Accidents", href: "/miami-speeding-car-accidents-attorney" },
      { label: "Failure to Yield", href: "/miami-failure-to-yield-car-accident-lawyers" },
      { label: "Lyft Car Accidents", href: "/miami-lyft-car-accident-attorney" },
      { label: "Road Rage Accidents", href: "/miami-road-rage-car-accident-attorney" },
      { label: "Construction Zone", href: "/miami-construction-zone-car-accident-attorney" },
      { label: "Sideswipe & Merging", href: "/miami-sideswipe-merging-accident-attorney" },
      { label: "T-Bone Accidents", href: "/miami-t-bone-car-accident-attorney" },
      { label: "Drunk Driving", href: "/miami-drunk-driving-accident-attorney" },
      { label: "Parking Lot Accidents", href: "/miami-parking-lot-accident-attorney" },
      { label: "Hit & Run", href: "/miami-hit-and-run-accident-attorney" },
      { label: "Lane Change Accidents", href: "/miami-unsafe-lane-changing-car-accident-attorney" },
      { label: "Defective Tires", href: "/miami-defective-tire-accident-attorney" },
      { label: "Distracted Driving", href: "/miami-distracted-driving-accident-attorney" },
      { label: "Seat Belt Injuries", href: "/miami-seat-belt-injury-attorney" },
      { label: "Reckless Driving", href: "/miami-reckless-driving-accident-attorney" },
      { label: "Left Turn Accidents", href: "/miami-left-turn-accident-attorney" },
    ],
  },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    dropdown: [
      { label: "Car Accidents", href: "/miami-car-accident-attorney" },
      { label: "Bicycle & Motorcycle", href: "/practice-areas/bicycle-motorcycle" },
      { label: "Truck Accidents", href: "/practice-areas/truck-accidents" },
      { label: "Slip & Fall", href: "/practice-areas/slip-and-fall" },
      { label: "Medical Malpractice", href: "/practice-areas/medical-malpractice" },
      { label: "Wrongful Death", href: "/practice-areas/wrongful-death" },
      { label: "Boating & Cruise", href: "/practice-areas/boating-cruise" },
      { label: "Brain & Spinal Injury", href: "/practice-areas/brain-spinal" },
      { label: "Pedestrian Accidents", href: "/practice-areas/pedestrian-accidents" },
    ],
  },
  {
    label: "Personal Injury",
    href: "/personal-injury",
    dropdown: [
      { label: "Florida Personal Injury Attorney", href: "/personal-injury/florida-personal-injury-attorney" },
      { label: "How An Attorney Can Help", href: "/how-an-accident-attorney-can-help" },
      { label: "Benefits of an Injury Lawyer", href: "/personal-injury/benefits-of-an-injury-lawyer" },
      { label: "Tips to Hiring an Attorney", href: "/personal-injury/tips-to-hiring-a-personal-injury-attorney" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    dropdown: [
      { label: "Latest News", href: "/news" },
    ],
  },
  { label: "Case Results", href: "/case-results" },
  { label: "Contact Us", href: "/contact-us" },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.12 },
  },
};

function NavDropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const isLarge = (item.dropdown?.length ?? 0) >= 8;
  const isActive = pathname?.startsWith(item.href) && item.href !== "/";

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        className={`relative font-body text-sm tracking-wide group transition-colors duration-200 ${
          isActive ? "text-sky-600" : "text-ink-muted hover:text-sky-600"
        }`}
      >
        {item.label}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-sky-600 transition-all duration-300 group-hover:w-full" />
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={`relative flex items-center gap-1 font-body text-sm tracking-wide group transition-colors duration-200 ${
          isActive ? "text-sky-600" : "text-ink-muted hover:text-sky-600"
        }`}
        onClick={() => setOpen(false)}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-sky-600 transition-all duration-300 group-hover:w-full" />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className={`absolute top-full left-0 mt-2 bg-white border border-sky-100 rounded-2xl shadow-xl shadow-sky-900/10 z-50 py-2 ${
              isLarge ? "min-w-[480px]" : "min-w-[220px]"
            }`}
          >
            <div
              className={
                isLarge
                  ? "grid grid-cols-2 gap-x-2 gap-y-0 p-2"
                  : "py-1"
              }
            >
              {item.dropdown!.map((child) => {
                const childActive = pathname === child.href;
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-2 text-sm font-body rounded-lg transition-colors ${
                      childActive
                        ? "text-sky-600 bg-sky-50 font-medium"
                        : "text-ink-muted hover:text-sky-600 hover:bg-sky-50"
                    }`}
                  >
                    {child.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Mobile accordion item
function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className={`block py-3 font-body text-base border-b border-sky-100 ${
          pathname === item.href ? "text-sky-600 font-medium" : "text-ink"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-sky-100">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex w-full items-center justify-between py-3 font-body text-base text-ink"
      >
        {item.label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 text-ink-muted ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { duration: 0.2 } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.15 } }}
            className="overflow-hidden"
          >
            <div className="pb-2 pl-4 grid grid-cols-1 gap-0">
              {item.dropdown!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="block py-2 text-sm font-body text-ink-muted hover:text-sky-600"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBg = isHomepage
    ? scrolled
      ? "bg-white/95 backdrop-blur-sm shadow-sm"
      : "bg-white"
    : "bg-white shadow-sm";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        style={!isHomepage ? { top: 0 } : undefined}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1.5 shrink-0">
            <span className="font-display font-bold text-lg tracking-tight text-ink">
              SUAREZ
            </span>
            <span className="font-display text-sky-600 italic text-base">
              &amp; MONTERO
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <NavDropdownItem key={item.href} item={item} />
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <a
              href="tel:3056311911"
              className="hidden sm:inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-full text-sm font-body font-medium transition-colors duration-200 shrink-0"
            >
              <Phone size={14} />
              305-631-1911
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="lg:hidden p-2 rounded-lg hover:bg-sky-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-sky-100 shadow-xl max-h-[80vh] overflow-y-auto lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-4">
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.href}
                  item={item}
                  onClose={() => setMobileOpen(false)}
                />
              ))}
              <a
                href="tel:3056311911"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 bg-sky-600 text-white py-3 rounded-full font-body font-medium"
              >
                <Phone size={16} />
                Call 305-631-1911
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

