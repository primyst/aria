"use client";

import { motion } from "framer-motion";

/**
 * /fashion — hero section
 * Floating white card on a blush background, real editorial photo,
 * pill nav/CTA, small badge overlay. Framer Motion entrance.
 */

const IMAGE_URL =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FashionHero() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[#e7c9b8] p-4 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="relative w-full max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-2xl"
      >
        {/* Nav */}
        <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#161412] text-[12px] font-semibold text-white">
              M
            </span>
            <span className="text-[15px] font-semibold text-[#161412]">
              Meridian
            </span>
          </div>
          <div className="hidden gap-8 text-[14px] text-[#161412]/60 md:flex">
            <span>Collections</span>
            <span>Atelier</span>
            <span>Stockists</span>
          </div>
          <button className="rounded-full bg-[#161412] px-5 py-2 text-[13px] font-medium text-white transition hover:opacity-90">
            Shop the edit
          </button>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-2 md:gap-6 md:px-10 md:py-14">
          {/* Left: copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="text-[38px] font-semibold leading-[1.08] tracking-tight text-[#161412] md:text-[46px]"
            >
              Nothing still
              <br />
              stands for long.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
              className="mt-5 max-w-md text-[15px] leading-relaxed text-[#161412]/60"
            >
              The Resort collection, shot in Almería. Nine looks built around
              one silhouette, made to move before they're seen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              className="mt-7 flex items-center gap-4"
            >
              <button className="rounded-full bg-[#161412] px-6 py-3 text-[14px] font-medium text-white transition hover:opacity-90">
                View the edit
              </button>
              <button className="flex items-center gap-2 text-[14px] font-medium text-[#161412]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#161412]/20">
                  ↗
                </span>
                Behind the shoot
              </button>
            </motion.div>

            {/* Stat badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
              className="mt-10 flex gap-8 border-t border-[#161412]/10 pt-6"
            >
              <div>
                <p className="text-[20px] font-semibold text-[#161412]">9</p>
                <p className="text-[12px] text-[#161412]/50">Looks in the edit</p>
              </div>
              <div>
                <p className="text-[20px] font-semibold text-[#161412]">1</p>
                <p className="text-[12px] text-[#161412]/50">Silhouette, reworked</p>
              </div>
              <div>
                <p className="text-[20px] font-semibold text-[#161412]">07</p>
                <p className="text-[12px] text-[#161412]/50">Season number</p>
              </div>
            </motion.div>
          </div>

          {/* Right: image with floating detail card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="relative"
          >
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[20px]">
              <img
                src={IMAGE_URL}
                alt="Editorial fashion portrait"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur"
            >
              <div>
                <p className="text-[13px] font-semibold text-[#161412]">
                  Look 03 — Almería
                </p>
                <p className="text-[12px] text-[#161412]/50">Resort 2027</p>
              </div>
              <span className="rounded-full bg-[#161412] px-3 py-1 text-[11px] font-medium text-white">
                No. 07
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
