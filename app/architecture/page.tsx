"use client";

import { motion } from "framer-motion";

/**
 * /real-estate — hero section
 * Distinct layout from /architecture, /fashion, /technology: the photo
 * IS the card (full-bleed), not a side panel. Nav and headline float
 * directly on the image. A docked spec sidebar slides in from the right,
 * and a bottom thumbnail strip acts as a mini gallery — neither pattern
 * appears in the other three heroes.
 */

const MAIN_IMAGE =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop";

const THUMBS = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=300&auto=format&fit=crop",
];

const ease = [0.22, 1, 0.36, 1] as const;

const specs = [
  { label: "Price", value: "€4.2M" },
  { label: "Type", value: "Villa" },
  { label: "Bedrooms", value: "5" },
  { label: "Area", value: "640 m²" },
  { label: "Reference", value: "SE-1142" },
];

export default function RealEstateHero() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[#1c1a17] p-4 md:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease }}
        className="relative h-[85vh] w-full max-w-6xl overflow-hidden rounded-[28px] shadow-2xl"
      >
        {/* Full-bleed photo — the image IS the card, not a side panel */}
        <img
          src={MAIN_IMAGE}
          alt="Glass-walled coastal residence at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />

        {/* Nav floats directly on the photo */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          <span className="text-[15px] font-semibold tracking-tight text-white">
            Solane Estates
          </span>
          <div className="hidden gap-8 text-[13px] text-white/70 md:flex">
            <span>Listings</span>
            <span>Advisory</span>
            <span>Journal</span>
          </div>
          <button className="rounded-full bg-white px-5 py-2 text-[13px] font-medium text-[#1c1a17] transition hover:opacity-90">
            Book a viewing
          </button>
        </div>

        {/* Headline floats bottom-left on the photo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="absolute bottom-24 left-6 z-10 max-w-md md:bottom-28 md:left-10"
        >
          <p className="mb-2 text-[12px] tracking-wide text-white/70">
            Cascais, Portugal
          </p>
          <h1 className="text-[32px] font-semibold leading-[1.1] text-white md:text-[42px]">
            A house that faces
            <br />
            the sea.
          </h1>
        </motion.div>

        {/* Docked spec sidebar — slides in from the right, not a card grid */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="absolute right-4 top-24 z-10 w-[220px] rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur md:right-8 md:top-28"
        >
          <p className="mb-4 text-[11px] uppercase tracking-wide text-[#1c1a17]/45">
            Property details
          </p>
          <div className="flex flex-col gap-3">
            {specs.map((s) => (
              <div key={s.label} className="flex items-center justify-between">
                <span className="text-[12px] text-[#1c1a17]/50">{s.label}</span>
                <span className="text-[13px] font-medium text-[#1c1a17]">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full rounded-full bg-[#1c1a17] py-2.5 text-[13px] font-medium text-white transition hover:opacity-90">
            Request details
          </button>
        </motion.div>

        {/* Bottom thumbnail strip — mini gallery, unique to this hero */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease }}
          className="absolute bottom-6 left-6 right-6 z-10 flex gap-2 md:left-10 md:right-10"
        >
          {THUMBS.map((src, i) => (
            <button
              key={src}
              className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                i === 0 ? "border-white" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
