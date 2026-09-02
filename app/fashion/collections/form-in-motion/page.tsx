"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=90&w=2200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=90&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=90&w=1800&auto=format&fit=crop",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function FormInMotion() {
  return (
    <main className="min-h-screen bg-[#eee9e2] text-[#171513]">
      <header className="flex items-center justify-between px-5 py-6 md:px-8 md:py-7">
        <a href="/fashion" className="text-[15px] font-semibold tracking-[-0.03em]">NØRVE</a>
        <span className="text-[10px] uppercase tracking-[0.17em] text-black/45">Collection 01 — 2026</span>
        <a href="#contact" className="text-[10px] uppercase tracking-[0.17em]">Enquiries ↗</a>
      </header>

      <section className="px-5 pt-16 md:px-8 md:pt-28">
        <p className="text-[10px] uppercase tracking-[0.18em] text-black/45">01 / Form, in motion</p>
        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_.45fr] md:items-end">
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease }} className="text-[clamp(4rem,12vw,13rem)] font-medium leading-[.75] tracking-[-0.08em]">FORM,<br />IN MOTION.</motion.h1>
          <p className="max-w-sm pb-2 text-[14px] leading-7 text-black/60">Nine pieces developed as one system. A study in proportion, movement and the space between the body and the garment.</p>
        </div>
        <div className="mt-20 md:mt-28"><img src={images[0]} alt="Nørve Form, In Motion campaign" className="aspect-[16/9] w-full object-cover object-center" /></div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="grid gap-16 md:grid-cols-[.4fr_1fr]">
          <div><p className="text-[10px] uppercase tracking-[0.17em] text-black/45">02 / The idea</p></div>
          <div>
            <p className="max-w-4xl text-[clamp(2.4rem,5.5vw,6rem)] font-medium leading-[.9] tracking-[-0.06em]">Clothing should follow the body, not decide where it goes.</p>
            <div className="mt-14 grid gap-8 border-t border-black/15 pt-6 text-[13px] leading-7 text-black/60 md:grid-cols-2">
              <p>The collection begins with a simple question: what happens when structure is allowed to move? Volume shifts. Seams disappear. A familiar silhouette becomes something less fixed.</p>
              <p>Cut in small runs and finished by hand, each piece is designed to work alone and alongside the others. Nothing is ornamental without purpose.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#171513] px-5 py-24 text-[#eee9e2] md:px-8 md:py-32">
        <div className="flex items-start justify-between"><p className="text-[10px] uppercase tracking-[0.17em] text-white/45">03 / The looks</p><span className="text-[10px] uppercase tracking-[0.17em] text-white/35">01—09</span></div>
        <div className="mt-16 grid gap-3 md:grid-cols-12 md:items-start">
          <figure className="md:col-span-5"><img src={images[1]} alt="Nørve look 02" className="aspect-[3/4] w-full object-cover" /><figcaption className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.14em] text-white/45"><span>Look 02</span><span>The long line</span></figcaption></figure>
          <figure className="md:col-span-6 md:col-start-7 md:pt-36"><img src={images[2]} alt="Nørve look 04" className="aspect-[4/5] w-full object-cover" /><figcaption className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.14em] text-white/45"><span>Look 04</span><span>Soft structure</span></figcaption></figure>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="grid gap-12 md:grid-cols-[.4fr_1fr]">
          <p className="text-[10px] uppercase tracking-[0.17em] text-black/45">04 / Materials</p>
          <div><h2 className="text-5xl tracking-[-0.06em] md:text-8xl">Raw linen.<br />Washed silk.<br />Nothing extra.</h2><p className="mt-12 max-w-xl text-[14px] leading-7 text-black/60">Natural fibres chosen for how they change with wear. The palette stays close to the material: chalk, earth, black, unbleached white.</p></div>
        </div>
      </section>

      <section id="contact" className="border-t border-black/15 px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="text-[10px] uppercase tracking-[0.17em] text-black/45">05 / Collection enquiries</p><h2 className="mt-6 text-[clamp(3rem,8vw,9rem)] leading-[.8] tracking-[-0.07em]">See it<br />in person.</h2></div><div className="max-w-sm text-[13px] leading-7 text-black/55"><p>Private appointments and selected stockists available in Lagos and London.</p><a href="mailto:studio@norve.house" className="mt-5 inline-block underline underline-offset-4">studio@norve.house ↗</a></div></div>
      </section>

      <footer className="flex justify-between border-t border-black/15 px-5 py-7 text-[10px] uppercase tracking-[0.16em] md:px-8"><a href="/fashion">← Nørve</a><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
