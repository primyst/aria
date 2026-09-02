"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const image =
  "https://images.unsplash.com/photo-1742587852136-afdc7157f5e7?auto=format&fit=crop&fm=jpg&q=90&w=2400";

export default function CasaDaLuzPage() {
  return (
    <main className="min-h-screen bg-white text-[#2c2925]">
      <header className="border-b border-[#2c2925]/10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-10 lg:px-14">
          <Link href="/architecture" className="flex items-center gap-3 text-sm tracking-[-0.01em]">
            <span className="flex h-8 w-8 items-center justify-center border border-[#2c2925] text-[11px] font-medium">H</span>
            <span>Halden &amp; Vire</span>
          </Link>
          <Link href="/architecture#selected-work" className="text-xs uppercase tracking-[0.16em] text-[#2c2925]/65 transition hover:text-[#2c2925]">
            ← All projects
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-6 text-[10px] uppercase tracking-[0.2em] text-[#2c2925]/55">Project 021 · Residential</p>
            <h1 className="max-w-[620px] text-[clamp(3.5rem,8vw,8.5rem)] font-light leading-[0.84] tracking-[-0.065em]">
              Casa da Luz
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-[#2c2925]/70 md:text-lg">
              A compact urban house organized around light, privacy and outdoor living.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="grid grid-cols-2 gap-y-5 border-t border-[#2c2925]/15 pt-5 text-xs sm:grid-cols-4">
            <div><p className="uppercase tracking-[0.14em] text-[#2c2925]/45">Location</p><p className="mt-2">Lisbon, Portugal</p></div>
            <div><p className="uppercase tracking-[0.14em] text-[#2c2925]/45">Type</p><p className="mt-2">Private residence</p></div>
            <div><p className="uppercase tracking-[0.14em] text-[#2c2925]/45">Area</p><p className="mt-2">286 m²</p></div>
            <div><p className="uppercase tracking-[0.14em] text-[#2c2925]/45">Completed</p><p className="mt-2">2024</p></div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative overflow-hidden bg-[#eeeae3]">
          <img src={image} alt="Casa da Luz" className="h-[58vh] min-h-[480px] w-full object-cover md:h-[72vh]" />
          <div className="absolute bottom-0 left-0 max-w-sm bg-white/95 px-5 py-4 text-xs leading-5 backdrop-blur-sm md:px-6">
            <span className="uppercase tracking-[0.14em] text-[#2c2925]/45">Lisbon · 2024</span>
            <p className="mt-1">Light enters from above and the courtyard, giving a compact footprint a sense of depth.</p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:grid-cols-[0.55fr_1fr] md:px-10 md:py-32 lg:px-14">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#2c2925]/45">01 · The idea</p>
        <div>
          <h2 className="max-w-3xl text-4xl font-light leading-[1.02] tracking-[-0.04em] md:text-6xl">A house arranged around a pocket of sky.</h2>
          <div className="mt-10 max-w-2xl space-y-5 text-[15px] leading-7 text-[#2c2925]/68 md:text-base">
            <p>The project works within the tight grain of Lisbon rather than trying to escape it. Rooms are gathered around a small internal courtyard, allowing daylight and air to travel through the depth of the plan.</p>
            <p>Street-facing spaces remain measured and private. Toward the courtyard, the house opens progressively — from threshold to living room, from living room to terrace, from interior to sky.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#2c2925]/10">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
          <div className="border-b border-[#2c2925]/10 p-6 md:border-b-0 md:border-r md:p-10 lg:p-14">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#2c2925]/45">02 · Light</p>
            <p className="mt-20 max-w-md text-2xl font-light leading-tight tracking-[-0.025em] md:text-3xl">The courtyard becomes the quiet center of the home — a changing measure of sun, shadow and weather.</p>
          </div>
          <div className="p-6 md:p-10 lg:p-14">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#2c2925]/45">03 · Material</p>
            <div className="mt-16 divide-y divide-[#2c2925]/10 border-y border-[#2c2925]/10">
              <div className="flex items-center justify-between py-5"><span>Plaster</span><span className="text-xs text-[#2c2925]/45">Mineral · matte</span></div>
              <div className="flex items-center justify-between py-5"><span>Oak</span><span className="text-xs text-[#2c2925]/45">Warm · natural</span></div>
              <div className="flex items-center justify-between py-5"><span>Terracotta</span><span className="text-xs text-[#2c2925]/45">Local · tactile</span></div>
              <div className="flex items-center justify-between py-5"><span>Stone</span><span className="text-xs text-[#2c2925]/45">Thresholds · exterior</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="grid gap-12 md:grid-cols-[0.55fr_1fr]">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#2c2925]/45">04 · Living</p>
          <div>
            <h2 className="max-w-3xl text-4xl font-light leading-[1.02] tracking-[-0.04em] md:text-6xl">Privacy without turning inward.</h2>
            <p className="mt-8 max-w-2xl text-[15px] leading-7 text-[#2c2925]/68 md:text-base">The plan creates privacy through layers rather than enclosure. Bedrooms sit deeper in the plan, while the kitchen and living spaces open toward the courtyard and terrace. The result is a home that feels connected to the city without being exposed to it.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2c2925]/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10 lg:px-14">
          <div><p className="text-sm">Halden &amp; Vire</p><p className="mt-2 text-xs text-[#2c2925]/50">Oslo · Lisbon</p></div>
          <Link href="/architecture/projects/fjord-pavilion" className="text-sm underline decoration-[#2c2925]/25 underline-offset-4 transition hover:decoration-[#2c2925]">Next project → Fjord Pavilion</Link>
        </div>
      </footer>
    </main>
  );
}
