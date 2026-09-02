"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

/**
 * /experimental — hero section
 * Controlled chaos. Layered, cropped imagery, distorted type,
 * interaction-revealed message. Most unconventional of the five.
 */

const IMAGES = {
  a: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1400&auto=format&fit=crop",
  b: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1000&auto=format&fit=crop",
  c: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1000&auto=format&fit=crop",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function ExperimentalHero() {
  const [revealed, setRevealed] = useState(false);
  const rotate = useMotionValue(-6);
  const skew = useTransform(rotate, (r) => r * 0.4);

  return (
    <section
      onClick={() => setRevealed((v) => !v)}
      className="relative h-screen w-full cursor-pointer select-none overflow-hidden bg-[#e5e1d8] text-[#151312]"
    >
      {/* Nav, deliberately off-grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute left-6 top-6 z-30 text-[11px] tracking-wide md:left-10 md:top-8"
      >
        studio unfixed
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="absolute right-6 top-6 z-30 rotate-3 text-[11px] tracking-wide md:right-10 md:top-8"
      >
        click anywhere
      </motion.div>

      {/* Layered images, scattered */}
      <motion.img
        src={IMAGES.a}
        alt=""
        initial={{ opacity: 0, scale: 1.3, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ duration: 1.4, ease }}
        className="absolute left-[6%] top-[14%] h-[62%] w-[46%] object-cover object-center [clip-path:polygon(0%_0%,100%_4%,96%_100%,4%_96%)] md:left-[10%] md:w-[34%]"
      />
      <motion.img
        src={IMAGES.b}
        alt=""
        initial={{ opacity: 0, scale: 1.3, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 5 }}
        transition={{ duration: 1.4, delay: 0.15, ease }}
        className="absolute bottom-[8%] right-[8%] h-[38%] w-[36%] object-cover object-center [clip-path:polygon(4%_0%,100%_0%,96%_100%,0%_92%)] md:right-[14%] md:w-[22%]"
      />
      <motion.img
        src={IMAGES.c}
        alt=""
        initial={{ opacity: 0, scale: 1.3, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: -2 }}
        transition={{ duration: 1.4, delay: 0.3, ease }}
        className="absolute right-[30%] top-[8%] hidden h-[28%] w-[18%] object-cover object-center [clip-path:polygon(0%_6%,94%_0%,100%_96%,6%_100%)] md:block"
      />

      {/* Distorted oversized wordmark, layered center */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <motion.h1
          style={{ rotate, skewX: skew }}
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, letterSpacing: "-0.02em" }}
          transition={{ duration: 1.6, delay: 0.4, ease }}
          className="pointer-events-none px-4 text-center font-serif text-[17vw] leading-[0.85] mix-blend-difference text-[#f2f0ea] md:text-[9vw]"
        >
          UNFIXED
        </motion.h1>
      </div>

      {/* Interaction-revealed message */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-[#151312] px-6 text-center"
          >
            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="max-w-xl font-serif text-[7vw] leading-[1.05] text-[#e5e1d8] md:text-[3.2vw]"
            >
              We don't start with a brief.
              <br />
              We start with a question nobody asked yet.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom scatter label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 rotate-1 text-[11px] tracking-wide text-[#151312]/60"
      >
        est. nowhere in particular
      </motion.div>
    </section>
  );
}
