"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * /architecture — hero section
 * Editorial, cinematic, monochromatic. Full-bleed image with
 * an oversized asymmetrical headline and thin structural rules.
 */

const IMAGE_URL =
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2400&auto=format&fit=crop";

export default function ArchitectureHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#0d0d0c] text-[#f2f0ec]"
    >
      {/* Image reveal */}
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[10%] h-[120%]">
          <motion.img
            src={IMAGE_URL}
            alt="Cantilevered concrete residence at dusk"
            className="h-full w-full object-cover"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0c]/80 via-[#0d0d0c]/10 to-[#0d0d0c]/30" />
      </motion.div>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 flex items-center justify-between px-6 pt-8 md:px-12 md:pt-10"
      >
        <span className="font-serif text-[15px] tracking-tight">Halden &amp; Vire</span>
        <div className="hidden gap-10 text-[12px] tracking-wide text-[#f2f0ec]/70 md:flex">
          <span>Practice</span>
          <span>Projects</span>
          <span>Journal</span>
          <span>Contact</span>
        </div>
        <span className="text-[12px] tracking-wide text-[#f2f0ec]/70">EN / NO</span>
      </motion.nav>

      {/* Editorial label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        className="relative z-10 mt-16 px-6 text-[12px] leading-relaxed text-[#f2f0ec]/60 md:mt-24 md:px-12"
      >
        <p>Studio for residential and cultural work</p>
        <p>Oslo — Lisbon</p>
      </motion.div>

      {/* Headline */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 md:px-12 md:pb-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h1 className="max-w-3xl overflow-hidden font-serif text-[13vw] leading-[0.92] tracking-tight md:text-[6.4vw]">
            {["Weight,", "held", "lightly."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1,
                    delay: 0.5 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="w-full max-w-[220px] shrink-0 border-t border-[#f2f0ec]/25 pt-4 text-[12px] leading-relaxed text-[#f2f0ec]/70"
          >
            <p>Project 014</p>
            <p>Lindøya House</p>
            <p>412 m² — 2025</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 text-[11px] tracking-widest text-[#f2f0ec]/50 md:block"
      >
        Scroll
      </motion.div>
    </section>
  );
}
