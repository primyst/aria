"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const image =
  "https://images.unsplash.com/photo-1782829243963-3a2dee566511?auto=format&fit=crop&fm=jpg&q=90&w=2400";

export default function FjordPavilionPage() {
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

      <section className="mx-auto max-w-[1440px] px-6 pb-14 pt-14 md:px-10 md:pb-20 md:pt-20 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-6 text-[10px] uppercase tracking-[0.2em] text-[#2c2925]/55">Project 032 · Cultural</p>
            <h1 className="max-w-5xl text-[clamp(3.4rem,8.8vw,9rem)] font-light leading-[0.82] tracking-[-0.07em]">Fjord Pavilion</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <p className="max-w-md text-base leading-7 text-[#2c2925]/70 md:text-lg">A small public pavilion where timber, stone and landscape create a quiet threshold between city and nature.</p>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-y-6 border-t border-[#2c2925]/15 pt-5 text-xs sm:grid-cols-4 md:mt-20">
          <div><p className="uppercase tracking-[0.14em] text-[#2c2925]/45">Location</p><p className="mt-2">Norway</p></div>
          <div><p className="uppercase tracking-[0.14em] text-[#2c2925]/45">Type</p><p className="mt-2">Public pavilion</p></div>
          <div><p className="uppercase tracking-[0.14em] text-[#2c2925]/45">Area</p><p className="mt-2">148 m²</p></div>
          <div><p className="uppercase tracking-[0.14em] text-[#2c2925]/45">Completed</p><p className="mt-2">2025</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative overflow-hidden">
          <img src={image} alt="Fjord Pavilion" className="h-[64vh] min-h-[500px] w-full object-cover md:h-[78vh]" />
          <div className="absolute left-0 top-0 max-w-xs bg-white px-5 py-4 text-xs leading-5 md:px-6">
            <span className="uppercase tracking-[0.14em] text-[#2c2925]/45">Public architecture</span>
            <p className="mt-1">A deliberately small intervention: shelter, gathering and a new way through the landscape.</p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_1fr]">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#2c2925]/45">01 · The threshold</p>
          <div>
            <h2 className="max-w-4xl text-4xl font-light leading-[0.98] tracking-[-0.045em] md:text-7xl">A building designed as a pause.</h2>
            <p className="mt-10 max-w-2xl text-[15px] leading-7 text-[#2c2925]/68 md:text-base">Fjord Pavilion sits between movement and stillness. Rather than behaving as an object in the landscape, the building frames a sequence of approaches, sheltered edges and views beyond.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#2c2925]/10">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-[1.15fr_0.85fr]">
          <div className="min-h-[520px] bg-[#d8d0c2] p-6 md:border-r md:border-[#2c2925]/10 md:p-10 lg:p-14">
            <div className="flex h-full flex-col justify-between">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#2c2925]/45">02 · Sequence</p>
              <div>
                <p className="max-w-xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-5xl">Approach. Enter. Gather. Look back.</p>
                <p className="mt-6 max-w-md text-sm leading-6 text-[#2c2925]/65">The pavilion is experienced gradually. Each threshold changes the relationship between the body, the building and the landscape.</p>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-10 lg:p-14">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#2c2925]/45">03 · Structure</p>
            <div className="mt-16 space-y-8">
              <div className="border-t border-[#2c2925]/15 pt-5"><p className="text-sm">Timber frame</p><p className="mt-2 text-xs leading-5 text-[#2c2925]/55">A light structural rhythm keeps the interior open and gives the roof a calm, legible order.</p></div>
              <div className="border-t border-[#2c2925]/15 pt-5"><p className="text-sm">Stone plinth</p><p className="mt-2 text-xs leading-5 text-[#2c2925]/55">The heavier base anchors the pavilion to the ground and establishes a durable public threshold.</p></div>
              <div className="border-t border-[#2c2925]/15 pt-5"><p className="text-sm">Deep roof edge</p><p className="mt-2 text-xs leading-5 text-[#2c2925]/55">Shelter extends beyond the enclosed volume, making the transition outdoors part of the architecture.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#2c2925]/45">04 · After the building</p>
            <h2 className="mt-6 max-w-3xl text-4xl font-light leading-[1] tracking-[-0.04em] md:text-6xl">The landscape remains the largest room.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#2c2925]/60">Architecture does not finish at the wall. The pavilion was conceived to make the landscape more perceptible — through shelter, framing, material and time.</p>
        </div>
      </section>

      <footer className="border-t border-[#2c2925]/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10 lg:px-14">
          <div><p className="text-sm">Halden &amp; Vire</p><p className="mt-2 text-xs text-[#2c2925]/50">Oslo · Lisbon</p></div>
          <Link href="/architecture" className="text-sm underline decoration-[#2c2925]/25 underline-offset-4 transition hover:decoration-[#2c2925]">← Back to studio</Link>
        </div>
      </footer>
    </main>
  );
}
