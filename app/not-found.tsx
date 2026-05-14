"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowLeft, Scale } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      <div style={{ height: "136px" }} aria-hidden="true" />

      <main className="bg-deep min-h-[70vh] flex items-center justify-center px-6 py-24 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sky-500 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-sky-600 blur-3xl" />
        </div>

        <div className="relative text-center max-w-2xl mx-auto">
          {/* Icon */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div className="w-20 h-20 bg-sky-600/20 border border-sky-600/30 rounded-2xl flex items-center justify-center">
              <Scale size={36} className="text-sky-400" />
            </div>
          </motion.div>

          {/* 404 */}
          <motion.p
            className="font-display font-bold text-sky-600 text-8xl md:text-9xl leading-none mb-4 select-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            404
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            This page doesn&apos;t exist.
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="font-body text-sky-200/70 text-lg mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            The page you&apos;re looking for may have moved or never existed.
            <br />
            If you need legal help right now, we&apos;re just a call away.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-body font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors duration-200"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <a
              href="tel:3056311911"
              className="inline-flex items-center gap-2 border border-sky-600/40 hover:border-sky-500 text-sky-300 hover:text-white font-body font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors duration-200"
            >
              <Phone size={16} />
              Call 305-631-1911
            </a>
          </motion.div>

          {/* Helpful links */}
          <motion.div
            className="mt-14 pt-10 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="font-body text-xs tracking-widest text-sky-200/40 uppercase mb-5">
              You might be looking for
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Car Accidents", href: "/miami-car-accident-attorney" },
                { label: "Practice Areas", href: "/practice-areas" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact-us" },
                { label: "Case Results", href: "/case-results" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-sky-400 hover:text-white border border-sky-600/20 hover:border-sky-500/50 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
