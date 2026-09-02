"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * /technology — hero section
 * Dark, immersive, sophisticated. One focal visual, massive type,
 * technical micro-labels, cursor-reactive glow.
 */

const IMAGE_URL =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop";

const ease = [0.22, 1, 0.36, 1] as const;

export default function TechnologyHero() {
  const [mounted, setMounted] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glowX = useSpring(mx, { stiffness: 60, damping: 20 });
  const glowY = useSpring(my, { stiffness: 60, damping: 20 });
  const bgX = useTransform(glowX, (v) => `${v}px`);
  const bgY = useTransform(glowY, (v) => `${v}px`);

  useEffect(() => setMounted(true), []);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-[#08090a] text-[#e9ecec]"
    >
      {/* Focal image, dimmed and desaturated */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease }}
      >
        <img
          src={IMAGE_URL}
          alt="Abstract systems architecture"
          className="h-full w-full object-cover opacity-[0.35] grayscale"
        />
        <div className="absolute inset-0 bg-[#08090a]/60" />
      </motion.div>

      {/* Cursor-follow glow */}
      {mounted && (
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] rounded-full"
          style={{
            x: bgX,
            y: bgY,
            translateX: "-50%",
            translateY: "-50%",
            background:
              "radial-gradient(circle, rgba(120,255,214,0.06) 0%, rgba(120,255,214,0) 70%)",
          }}
        />
      )}

      {/* Grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e9ecec_1px,transparent_1px),linear-gradient(to_bottom,#e9ecec_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 pt-8 text-[12px] tracking-wide text-[#e9ecec]/60 md:px-12"
      >
        <span className="text-[#e9ecec]">VOID // SYS</span>
        <div className="hidden gap-10 md:flex">
          <span>Platform</span>
          <span>Research</span>
          <span>Access</span>
        </div>
        <span>rev. 4.0.12</span>
      </motion.nav>

      {/* Technical label, top-left of headline */}
      <div className="relative z-10 flex h-[calc(100%-88px)] flex-col justify-center px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-6 text-[12px] tracking-wide text-[#78ffd6]/70"
        >
          system status: active
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.55, ease }}
            className="max-w-4xl text-[11vw] font-light leading-[0.94] tracking-tight md:text-[6vw]"
          >
            An interface
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="max-w-4xl text-[11vw] font-light leading-[0.94] tracking-tight md:text-[6vw]"
          >
            for what comes next.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-10 flex items-center gap-6 text-[11px] tracking-wide text-[#e9ecec]/50"
        >
          <span>Latency 0.4ms</span>
          <span className="h-1 w-1 rounded-full bg-[#78ffd6]/60" />
          <span>Nodes 128</span>
          <span className="h-1 w-1 rounded-full bg-[#78ffd6]/60" />
          <span>Uptime 99.998%</span>
        </motion.div>
      </div>

      {/* Corner marker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 right-6 z-10 text-[11px] tracking-wide text-[#e9ecec]/40 md:right-12"
      >
        01 / index
      </motion.div>
    </section>
  );
}
