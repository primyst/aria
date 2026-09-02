"use client";

import { motion } from "framer-motion";

/**
 * /technology — hero section
 * Distinct layout from /architecture and /fashion: a diagonal white
 * panel cuts across a dark background, ring/circle decorations float
 * around it, and stats sit in a horizontal icon row instead of cards
 * or a bottom badge bar.
 */

const IMAGE_URL =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { icon: "◐", label: "Nodes", value: "128" },
  { icon: "◈", label: "Latency", value: "0.4ms" },
  { icon: "◎", label: "Uptime", value: "99.998%" },
];

export default function TechnologyHero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0d1f1c] p-4 md:p-10">
      {/* Decorative rings, echoing the reference's circle motifs */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full border border-white/10" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="relative w-full max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-2xl"
      >
        {/* Nav */}
        <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0d1f1c] text-[12px] font-semibold text-[#7effc4]">
              V
            </span>
            <span className="text-[15px] font-semibold text-[#0d1f1c]">
              Void Systems
            </span>
          </div>
          <div className="hidden gap-8 text-[14px] text-[#0d1f1c]/55 md:flex">
            <span>Platform</span>
            <span>Research</span>
            <span>Docs</span>
          </div>
          <button className="rounded-full bg-[#0d1f1c] px-5 py-2 text-[13px] font-medium text-[#7effc4] transition hover:opacity-90">
            Request access
          </button>
        </div>

        {/* Diagonal split body: copy on the left, photo cut by a diagonal edge on the right */}
        <div className="relative grid grid-cols-1 gap-8 px-6 py-10 md:grid-cols-2 md:gap-0 md:px-10 md:py-14">
          {/* Left: copy */}
          <div className="flex flex-col justify-center pr-0 md:pr-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="mb-3 text-[12px] font-medium uppercase tracking-wide text-[#0d1f1c]/40"
            >
              System status: active
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="text-[36px] font-semibold leading-[1.08] tracking-tight text-[#0d1f1c] md:text-[44px]"
            >
              An interface for
              <br />
              what comes next.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease }}
              className="mt-5 max-w-md text-[15px] leading-relaxed text-[#0d1f1c]/55"
            >
              Infrastructure built to disappear into the background, so the
              people using it never have to think about it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
              className="mt-7 flex items-center gap-4"
            >
              <button className="rounded-full bg-[#0d1f1c] px-6 py-3 text-[14px] font-medium text-[#7effc4] transition hover:opacity-90">
                Get started
              </button>
              <button className="text-[14px] font-medium text-[#0d1f1c]/70">
                Read the docs →
              </button>
            </motion.div>

            {/* Horizontal icon-stat row, not cards or a badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease }}
              className="mt-10 flex gap-8 border-t border-[#0d1f1c]/10 pt-6"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="text-[16px] text-[#0d1f1c]/40">{s.icon}</span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#0d1f1c]">
                      {s.value}
                    </p>
                    <p className="text-[11px] text-[#0d1f1c]/45">{s.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: image cut by a diagonal edge, rings overlapping it */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="relative min-h-[320px] overflow-hidden rounded-[20px] md:min-h-0"
            style={{ clipPath: "polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            <img
              src={IMAGE_URL}
              alt="Abstract technology surface"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0d1f1c]/20" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
              className="absolute right-6 top-6 h-14 w-14 rounded-full border-2 border-white/40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease }}
              className="absolute bottom-8 right-16 h-9 w-9 rounded-full bg-[#7effc4]/80"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
