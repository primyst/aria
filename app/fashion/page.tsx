"use client";

import { motion } from "framer-motion";

const heroImage =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=90&w=2200&auto=format&fit=crop";
const detailImage =
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=85&w=1600&auto=format&fit=crop";
const campaignImage =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=85&w=1800&auto=format&fit=crop";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FashionHome() {
  return (
    <main className="min-h-screen w-full bg-[#eee9e2] text-[#171513]">
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference text-white">
        <div className="flex items-center justify-between px-5 py-5 md:px-8 md:py-7">
          <a href="#top" className="text-[15px] font-semibold tracking-[-0.03em]">NØRVE</a>
          <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.16em] md:flex">
            <a href="#collection">Collection</a><a href="#house">The House</a><a href="#journal">Journal</a>
          </nav>
          <a href="#contact" className="text-[11px] uppercase tracking-[0.16em]">Enquiries ↗</a>
        </div>
      </header>

      <section id="top" className="relative h-[100svh] min-h-[700px] overflow-hidden bg-[#211e1b] text-white">
        <img src={heroImage} alt="Nørve campaign" className="absolute inset-0 h-full w-full object-cover object-center opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-7 md:px-8 md:pb-9">
          <div className="mb-8 flex items-end justify-between border-b border-white/35 pb-4 text-[10px] uppercase tracking-[0.18em]"><span>Collection 01 — 2026</span><span>Made between Lagos & London</span></div>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease }} className="max-w-6xl text-[17vw] font-medium leading-[.78] tracking-[-0.075em] md:text-[12vw]"><span className="block">FORM,</span><span className="block pl-[14vw]">IN MOTION.</span></motion.h1>
          <div className="mt-8 flex items-start justify-between gap-8 text-[12px] leading-relaxed text-white/75 md:max-w-xl"><p>Clothing shaped by movement, proportion and the spaces between people.</p><a href="#collection" className="shrink-0 border-b border-white/60 pb-1 text-white">Enter collection ↓</a></div>
        </div>
      </section>

      <section id="collection" className="px-5 py-24 md:px-8 md:py-36">
        <div className="flex items-start justify-between border-t border-black/20 pt-4 text-[10px] uppercase tracking-[0.17em]"><span>01 / Current collection</span><span>SS26 — No. 01</span></div>
        <div className="mt-16 grid gap-12 md:grid-cols-[.72fr_1.28fr] md:gap-20">
          <div className="md:pt-20"><p className="text-[11px] uppercase tracking-[0.17em] text-black/45">The first edition</p><h2 className="mt-5 text-[clamp(3rem,7vw,7.5rem)] font-medium leading-[.82] tracking-[-0.065em]">A study<br />in becoming.</h2><p className="mt-8 max-w-sm text-[14px] leading-7 text-black/60">Nine pieces developed as one system. Loose where the body needs space. Structured where it needs direction.</p><a href="/fashion/collections/form-in-motion" className="mt-10 inline-block border-b border-black pb-2 text-[11px] uppercase tracking-[0.16em]">View the collection ↗</a></div>
          <a href="/fashion/collections/form-in-motion" className="group relative block"><img src={detailImage} alt="Nørve collection" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.015]" /><span className="absolute bottom-4 left-4 bg-[#eee9e2] px-3 py-2 text-[9px] uppercase tracking-[0.16em]">Look 01 / 09 ↗</span></a>
        </div>
      </section>

      <section id="looks" className="border-y border-black/15 bg-[#171513] px-5 py-24 text-[#eee9e2] md:px-8 md:py-32">
        <div className="flex items-end justify-between"><div><p className="text-[10px] uppercase tracking-[0.17em] text-white/45">02 / The edit</p><h2 className="mt-5 text-5xl tracking-[-0.06em] md:text-8xl">Selected looks.</h2></div><span className="hidden text-[10px] uppercase tracking-[0.16em] text-white/45 md:block">09 looks / one language</span></div>
        <div className="mt-16 grid gap-3 md:grid-cols-12 md:items-start">
          <a href="/fashion/collections/form-in-motion" className="group block md:col-span-7"><img src={campaignImage} alt="Nørve look" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.015]" /><p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-white/45">Look 04 — The long line ↗</p></a>
          <a href="/fashion/collections/form-in-motion" className="group block md:col-span-4 md:col-start-9 md:pt-32"><img src={heroImage} alt="Nørve look detail" className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-[1.015]" /><p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-white/45">Look 07 — Soft structure ↗</p></a>
        </div>
      </section>

      <section id="house" className="px-5 py-24 md:px-8 md:py-36"><div className="grid gap-12 md:grid-cols-[.35fr_1fr]"><p className="text-[10px] uppercase tracking-[0.17em] text-black/45">03 / The house</p><div><p className="max-w-5xl text-[clamp(2.7rem,6.5vw,7rem)] font-medium leading-[.9] tracking-[-0.065em]">We make clothes for people who are still becoming.</p><div className="mt-14 grid gap-10 border-t border-black/15 pt-7 text-[13px] leading-7 text-black/60 md:grid-cols-2"><p>Nørve is an independent fashion house working between Lagos and London. We look at clothing as architecture for the body: proportion, tension, volume and movement.</p><p>Every collection is developed slowly, produced in limited numbers, and designed to remain useful beyond a season.</p></div></div></div></section>

      <section id="journal" className="bg-[#d8d0c7] px-5 py-24 md:px-8 md:py-32"><div className="flex items-start justify-between border-t border-black/20 pt-4 text-[10px] uppercase tracking-[0.17em]"><span>04 / Journal</span><span>Notes from the house</span></div><div className="mt-12 divide-y divide-black/15 border-b border-black/15">{[['01','On proportion','12.08.26'],['02','Clothing and the moving body','27.06.26'],['03','Why we make fewer things','14.04.26']].map(([n,title,date]) => <a key={n} href="#contact" className="grid grid-cols-[45px_1fr_auto] items-center gap-4 py-7 text-[14px] transition hover:px-3 md:text-[18px]"><span className="text-[10px] text-black/40">{n}</span><span>{title}</span><span className="text-[10px] uppercase tracking-[0.14em] text-black/45">{date} ↗</span></a>)}</div></section>

      <section id="contact" className="px-5 py-28 md:px-8 md:py-40"><p className="text-[10px] uppercase tracking-[0.17em] text-black/45">05 / Enquiries</p><h2 className="mt-7 max-w-5xl text-[clamp(3.5rem,10vw,11rem)] font-medium leading-[.8] tracking-[-0.075em]">Come<br />closer.</h2><div className="mt-16 flex flex-col justify-between gap-10 border-t border-black/20 pt-5 text-[12px] md:flex-row"><p className="max-w-sm leading-6 text-black/55">Private appointments, press, wholesale and collaboration enquiries.</p><a href="mailto:studio@norve.house" className="text-[14px] underline underline-offset-4">studio@norve.house ↗</a></div></section>

      <footer className="flex flex-col gap-8 border-t border-black/15 px-5 py-7 text-[10px] uppercase tracking-[0.16em] md:flex-row md:items-center md:justify-between md:px-8"><span>NØRVE — Lagos / London</span><span>Independent fashion house · 2026</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
