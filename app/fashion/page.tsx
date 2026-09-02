"use client";

import { motion } from "framer-motion";

/**
 * /fashion — hero section
 * Distinct layout from /architecture: stacked feature cards on the left,
 * photo bleeding to the edge on the right, floating circular badge
 * overlapping the corner instead of a bottom info bar.
 */

const IMAGE_URL =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop";

const ease = [0.22, 1, 0.36, 1] as const;

const cards = [
  { label: "Silhouette", value: "One shape, nine ways" },
  { label: "Fabric", value: "Raw linen & silk" },
  { label: "Studio", value: "Shot in Almería" },
];

export default function FashionHero() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[#161412] p-4 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="w-full max-w-6xl overflow-hidden rounded-[28px] bg-[#f4efe9] shadow-2xl"
      >
        {/* Nav */}
        <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          <span className="text-[15px] font-semibold tracking-tight text-[#161412]">
            Meridian
          </span>
          <div className="hidden gap-8 text-[13px] text-[#161412]/55 md:flex">
            <span>Collections</span>
            <span>Atelier</span>
            <span>Stockists</span>
          </div>
          <button className="rounded-full border border-[#161412] px-5 py-2 text-[13px] font-medium text-[#161412] transition hover:bg-[#161412] hover:text-white">
            Sign up
          </button>
        </div>

        {/* Body: asymmetric grid, cards stacked left, image right */}
        <div className="grid grid-cols-1 gap-6 px-6 py-10 md:grid-cols-[1fr_1.1fr] md:gap-8 md:px-10 md:py-14">
          {/* Left column */}
          <div className="flex flex-col justify-between">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="text-[34px] font-semibold leading-[1.1] tracking-tight text-[#161412] md:text-[42px]"
            >
              Nothing still
              <br />
              stands for long.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
              className="mt-4 max-w-sm text-[14px] leading-relaxed text-[#161412]/60"
            >
              The Resort collection, made to move before it's even seen.
            </motion.p>

            {/* Stacked feature cards instead of a stat row */}
            <div className="mt-8 flex flex-col gap-3">
              {cards.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease }}
                  className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm"
                >
                  <span className="text-[12px] uppercase tracking-wide text-[#161412]/45">
                    {c.label}
                  </span>
                  <span className="text-[13px] font-medium text-[#161412]">
                    {c.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease }}
              className="mt-8 w-fit rounded-full bg-[#161412] px-6 py-3 text-[14px] font-medium text-white transition hover:opacity-90"
            >
              View the edit
            </motion.button>
          </div>

          {/* Right: image bleeding to the edge, badge overlapping the corner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="relative"
          >
            <div className="h-full min-h-[420px] w-full overflow-hidden rounded-[20px]">
              <img
                src={IMAGE_URL}
                alt="Editorial fashion portrait"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Circular badge overlapping top-left corner, not a bottom bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              transition={{ duration: 0.6, delay: 0.6, ease }}
              className="absolute -left-5 -top-5 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#161412] text-center text-white shadow-lg"
            >
              <span className="text-[10px] uppercase tracking-wide text-white/60">
                Resort
              </span>
              <span className="text-[15px] font-semibold">No. 07</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
              className="absolute bottom-4 right-4 rounded-full bg-white/95 px-4 py-2 text-[12px] font-medium text-[#161412] shadow-md backdrop-blur"
            >
              Look 03 of 09
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
