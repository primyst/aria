"use client";

import { motion } from "framer-motion";

/**
 * /real-estate — hero section
 * Cinematic luxury property campaign. One dominant image,
 * restrained typography, quiet specification block.
 */

const IMAGE_URL =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop";

const ease = [0.22, 1, 0.36, 1] as const;

export default function RealEstateHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#111110] text-[#f5f3ef]">
      {/* Image reveal + slow scale */}
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: "inset(6% 6% 6% 6%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.5, ease }}
      >
        <motion.img
          src={IMAGE_URL}
          alt="Glass-walled coastal residence at golden hour"
          className="h-full w-full object-cover"
          initial={{ scale: 1.18 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 3.5, ease }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/85 via-[#111110]/5 to-[#111110]/45" />
      </motion.div>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 flex items-center justify-between px-6 pt-8 text-[12px] tracking-wide md:px-12"
      >
        <span className="font-serif text-[16px]">Solane Estates</span>
        <div className="hidden gap-10 text-[#f5f3ef]/70 md:flex">
          <span>Listings</span>
          <span>Advisory</span>
          <span>Journal</span>
        </div>
        <span className="text-[#f5f3ef]/70">Private viewings</span>
      </motion.nav>

      {/* Location tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1 }}
        className="relative z-10 mt-20 px-6 text-[12px] tracking-wide text-[#f5f3ef]/70 md:mt-28 md:px-12"
      >
        Cascais, Portugal
      </motion.div>

      {/* Headline + specs */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 md:px-12 md:pb-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.7, ease }}
              className="max-w-2xl font-serif text-[11vw] leading-[0.95] tracking-tight md:text-[5vw]"
            >
              A house that
              <br />
              faces the sea.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid w-full max-w-[280px] shrink-0 grid-cols-2 gap-x-6 gap-y-3 border-t border-[#f5f3ef]/25 pt-4 text-[12px] leading-relaxed"
          >
            <div>
              <p className="text-[#f5f3ef]/50">Type</p>
              <p>Villa</p>
            </div>
            <div>
              <p className="text-[#f5f3ef]/50">Area</p>
              <p>640 m²</p>
            </div>
            <div>
              <p className="text-[#f5f3ef]/50">Bedrooms</p>
              <p>5</p>
            </div>
            <div>
              <p className="text-[#f5f3ef]/50">Reference</p>
              <p>SE-1142</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
