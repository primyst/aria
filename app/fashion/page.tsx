"use client";

import { motion } from "framer-motion";

/**
 * /fashion — hero section
 * High-fashion editorial. Typography as the dominant device,
 * overlapping layers, asymmetric grid, cropped imagery.
 */

const IMAGE_MAIN =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2200&auto=format&fit=crop";
const IMAGE_DETAIL =
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FashionHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#efeae2] text-[#161412]">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-20 flex items-center justify-between px-6 pt-7 text-[11px] tracking-[0.08em] md:px-10"
      >
        <span>MERIDIAN</span>
        <div className="hidden gap-8 md:flex">
          <span>Collections</span>
          <span>Atelier</span>
          <span>Stockists</span>
        </div>
        <span>No. 07 — Season</span>
      </motion.nav>

      {/* Main image, cropped and offset right */}
      <motion.div
        className="absolute right-0 top-0 h-full w-[62%] md:w-[54%]"
        initial={{ clipPath: "inset(0 0 0 100%)" }}
        animate={{ clipPath: "inset(0 0 0 0%)" }}
        transition={{ duration: 1.3, ease }}
      >
        <motion.img
          src={IMAGE_MAIN}
          alt="Editorial fashion portrait"
          className="h-full w-full object-cover object-top"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.9, ease }}
        />
      </motion.div>

      {/* Small detail image, overlapping */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9, ease }}
        className="absolute bottom-16 right-[38%] z-10 hidden h-[220px] w-[150px] md:block"
      >
        <img
          src={IMAGE_DETAIL}
          alt="Fabric detail"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Oversized cropped headline, layered over both */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-10">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="font-serif text-[19vw] leading-[0.82] tracking-tighter md:text-[10.5vw]"
          >
            NOTHING
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.55, ease }}
            className="ml-[8vw] font-serif text-[19vw] italic leading-[0.82] tracking-tighter md:ml-[6vw] md:text-[10.5vw]"
          >
            STILL
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="font-serif text-[19vw] leading-[0.82] tracking-tighter md:text-[10.5vw]"
          >
            STANDS
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-8 max-w-[220px] text-[12px] leading-relaxed text-[#161412]/70"
        >
          Resort collection, shot in Almería. Nine looks, one silhouette.
        </motion.p>
      </div>

      {/* Vertical rotated label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-10 right-6 z-20 hidden origin-bottom-right -rotate-90 text-[11px] tracking-[0.15em] text-[#161412]/60 md:block"
      >
        Resort 2027
      </motion.div>
    </section>
  );
}
