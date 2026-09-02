"use client";

import { motion } from "framer-motion";

const images = {
  hero: "https://images.unsplash.com/photo-1758448756207-54505680d130?auto=format&fit=crop&fm=jpg&q=90&w=2400",
  detail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1800&auto=format&fit=crop",
  landscape: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
};

const ease = [0.22, 1, 0.36, 1] as const;

const facts = [
  ["Location", "Oslo, Norway"],
  ["Type", "Private residence"],
  ["Area", "412 m²"],
  ["Completed", "2025"],
  ["Status", "Built"],
];

export default function LindoyaHouseProject() {
  return (
    <main className="min-h-screen w-full bg-white text-[#2c2925]">
      <header className="w-full px-5 py-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between border-b border-[#2c2925]/10 pb-6">
          <a href="/architecture" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2c2925] text-[12px] font-semibold text-white">H</span>
            <span className="text-[15px] font-semibold">Halden &amp; Vire</span>
          </a>
          <a href="/architecture#selected-work" className="group flex items-center gap-2 text-[13px] font-medium">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            All projects
          </a>
        </div>
      </header>

      <section className="px-5 pb-16 pt-10 sm:px-8 md:px-12 md:pb-24 md:pt-16 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-end md:gap-16">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
              <p className="text-[11px] font-medium tracking-[0.18em] text-[#2c2925]/45">PROJECT 014 · RESIDENTIAL</p>
              <h1 className="mt-6 max-w-2xl text-[48px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-[64px] md:text-[76px]">Lindøya House</h1>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease }} className="max-w-2xl text-[20px] leading-[1.35] tracking-[-0.02em] text-[#2c2925]/70 md:pb-1 md:text-[24px]">
              A restrained family home shaped around light, landscape and long views, with its mass held quietly against the site.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, y: 28, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.15, ease }} className="mt-14 overflow-hidden rounded-[20px] md:mt-20">
            <div className="aspect-[16/10] md:aspect-[2/1]">
              <img src={images.hero} alt="Lindøya House exterior with stone, concrete and expansive glazing" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#2c2925]/10 px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-[1fr_2fr]">
          <div className="border-b border-[#2c2925]/10 py-8 text-[11px] font-medium tracking-[0.18em] text-[#2c2925]/45 md:border-b-0 md:border-r md:py-10">PROJECT DATA</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            {facts.map(([label, value]) => (
              <div key={label} className="border-b border-[#2c2925]/10 px-0 py-8 first:pl-0 sm:px-5 md:border-b-0 md:py-10 md:first:pl-8">
                <p className="text-[11px] tracking-[0.15em] text-[#2c2925]/40">{label}</p>
                <p className="mt-3 text-[13px] leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
          <div className="text-[11px] font-medium tracking-[0.18em] text-[#2c2925]/45">THE IDEA</div>
          <div>
            <motion.h2 initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease }} className="max-w-4xl text-[34px] leading-[1.08] tracking-[-0.035em] sm:text-[44px] md:text-[56px]">
              A house that sits within the landscape rather than on top of it.
            </motion.h2>
            <div className="mt-8 grid gap-8 text-[15px] leading-[1.8] text-[#2c2925]/60 md:grid-cols-2 md:gap-12">
              <p>The project began with a simple question: how little architecture was needed to make the site feel complete? The answer was a long, low volume, partially embedded into the terrain and opened toward the best light.</p>
              <p>Concrete, oak and stone form a deliberately quiet palette. Deep thresholds control the relationship between inside and out, while large openings turn the changing landscape into part of the everyday interior.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:px-12 md:pb-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-12 md:gap-8">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease }} className="overflow-hidden rounded-[18px] md:col-span-8">
            <div className="aspect-[4/3]"><img src={images.detail} alt="Modern residential architecture detail with glass and concrete" className="h-full w-full object-cover" /></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: 0.08, ease }} className="overflow-hidden rounded-[18px] md:col-span-4 md:mt-24">
            <div className="aspect-[3/4]"><img src={images.landscape} alt="Contemporary house surrounded by trees and landscape" className="h-full w-full object-cover" /></div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-[#2c2925]/10 px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <div className="text-[11px] font-medium tracking-[0.18em] text-[#2c2925]/45">MATERIAL &amp; LIGHT</div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease }} className="max-w-3xl text-[25px] leading-[1.2] tracking-[-0.02em] md:text-[36px]">
              The material palette was kept intentionally narrow so that daylight, weather and the surrounding trees could do more of the work.
            </motion.p>
          </div>

          <div className="mt-16 grid border-y border-[#2c2925]/10 md:mt-24 md:grid-cols-3">
            {[
              ["01", "Oak", "Warmth inside the house, chosen to age visibly rather than remain pristine."],
              ["02", "Concrete", "A structural material left legible, giving the quieter spaces their weight."],
              ["03", "Stone", "Local landscape translated into a durable edge between house and ground."],
            ].map(([number, title, body], index) => (
              <motion.div key={number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: index * 0.07, ease }} className="border-b border-[#2c2925]/10 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:py-10 first:md:pl-0 last:md:border-r-0 last:md:pr-0">
                <p className="text-[11px] tracking-[0.16em] text-[#2c2925]/40">{number}</p>
                <h3 className="mt-10 text-[21px] font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 max-w-sm text-[13px] leading-[1.7] text-[#2c2925]/55">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2c2925]/10 px-5 py-8 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 text-[12px] text-[#2c2925]/50 sm:flex-row sm:items-center sm:justify-between">
          <a href="/architecture" className="font-medium text-[#2c2925]">Halden &amp; Vire</a>
          <a href="/architecture#selected-work" className="group inline-flex items-center gap-2">Back to selected work <span className="transition-transform duration-300 group-hover:-translate-x-1">↩</span></a>
          <span>Oslo · Lisbon</span>
        </div>
      </footer>
    </main>
  );
}
