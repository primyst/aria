"use client";

import { motion } from "framer-motion";

/**
 * /experimental — hero section
 * A Travels & Tours brand. Breaks the "card on colored background"
 * pattern used by the other four heroes: no boxed card, no rounded
 * container — a full-width overlapping photo collage with a floating
 * booking widget. Muted stone/clay/ink palette, not bright "crayon"
 * travel-site colors.
 */

const IMAGES = {
  a: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
  b: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=900&auto=format&fit=crop",
  c: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=900&auto=format&fit=crop",
};

const ease = [0.22, 1, 0.36, 1] as const;

const destinations = [
  { name: "Atlas Mountains", trips: "12 tours" },
  { name: "Sossusvlei", trips: "8 tours" },
  { name: "Faroe Islands", trips: "6 tours" },
];

export default function TravelHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#eae5db] text-[#211f1c]">
      {/* Nav — plain, no pill card wrapper */}
      <div className="relative z-30 flex items-center justify-between px-6 pt-8 md:px-12">
        <span className="text-[15px] font-semibold tracking-tight">
          Northbound Travel
        </span>
        <div className="hidden gap-8 text-[13px] text-[#211f1c]/55 md:flex">
          <span>Destinations</span>
          <span>Small-group tours</span>
          <span>Journal</span>
        </div>
        <button className="rounded-full bg-[#211f1c] px-5 py-2 text-[13px] font-medium text-white transition hover:opacity-90">
          Plan a trip
        </button>
      </div>

      {/* Scattered overlapping photos — no card container */}
      <motion.img
        src={IMAGES.a}
        alt="Winding mountain road at sunrise"
        initial={{ opacity: 0, y: 30, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ duration: 1, delay: 0.15, ease }}
        className="absolute left-[6%] top-[16%] h-[280px] w-[220px] rounded-sm object-cover shadow-xl md:left-[9%] md:h-[380px] md:w-[300px]"
      />
      <motion.img
        src={IMAGES.b}
        alt="Desert dunes at dusk"
        initial={{ opacity: 0, y: 30, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ duration: 1, delay: 0.3, ease }}
        className="absolute right-[8%] top-[10%] hidden h-[220px] w-[180px] rounded-sm object-cover shadow-xl md:block"
      />
      <motion.img
        src={IMAGES.c}
        alt="Traveler overlooking coastal cliffs"
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 1, delay: 0.45, ease }}
        className="absolute bottom-[16%] right-[10%] h-[240px] w-[190px] rounded-sm object-cover shadow-xl md:right-[15%] md:h-[300px] md:w-[240px]"
      />

      {/* Headline layered across the collage */}
      <div className="relative z-20 flex h-screen flex-col justify-center px-6 md:px-12">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="m-0 text-[13vw] font-medium leading-[0.92] tracking-tight md:text-[6.5vw]"
          >
            Go further,
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: 0.68, ease }}
            className="m-0 ml-[8vw] text-[13vw] font-medium italic leading-[0.92] tracking-tight text-[#211f1c]/70 md:ml-[6vw] md:text-[6.5vw]"
          >
            slower.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease }}
          className="mt-6 max-w-sm text-[14px] leading-relaxed text-[#211f1c]/55"
        >
          Small-group journeys to places that are still difficult to get to,
          led by people who actually live there.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease }}
          className="mt-7 w-fit rounded-full bg-[#211f1c] px-6 py-3 text-[14px] font-medium text-white transition hover:opacity-90"
        >
          Browse upcoming trips
        </motion.button>
      </div>

      {/* Floating destination list — unique widget for this hero, not a card grid */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.2, ease }}
        className="absolute bottom-8 right-6 z-30 w-[220px] rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur md:right-12"
      >
        <p className="mb-3 text-[11px] uppercase tracking-wide text-[#211f1c]/40">
          Departing soon
        </p>
        <div className="flex flex-col gap-2.5">
          {destinations.map((d) => (
            <div key={d.name} className="flex items-center justify-between">
              <span className="text-[13px] text-[#211f1c]">{d.name}</span>
              <span className="text-[11px] text-[#211f1c]/45">{d.trips}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
