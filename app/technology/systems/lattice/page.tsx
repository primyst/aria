"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function LatticePage() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#f2f1ec] selection:bg-[#f2f1ec] selection:text-[#090909]">
      <header className="flex items-center justify-between border-b border-white/10 px-5 py-5 md:px-8 md:py-7">
        <Link href="/technology" className="font-mono text-[12px] tracking-[0.18em]">ARC/01</Link>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">System 01 / Lattice</span>
        <a href="mailto:studio@arc01.systems" className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/60 hover:text-white">Enquiries ↗</a>
      </header>

      <section className="border-b border-white/10 px-5 pb-20 pt-20 md:px-8 md:pb-32 md:pt-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease }} className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">01 / Lattice / Infrastructure / 2026</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .1, ease }} className="mt-8 text-[clamp(4.5rem,12vw,12rem)] font-medium leading-[0.75] tracking-[-0.08em]">LATTICE.</motion.h1>
          </div>
          <div className="flex items-end md:col-span-4">
            <p className="max-w-sm text-[17px] leading-relaxed text-white/55">An adaptive routing system for environments where demand changes faster than fixed rules can respond.</p>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .2, ease }} className="relative mt-20 overflow-hidden md:mt-28">
          <div className="aspect-[16/8] bg-[#111]">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=90&w=2200&auto=format&fit=crop" alt="Lattice system" className="h-full w-full object-cover grayscale" />
          </div>
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55">LATTICE / CORE NODE</div>
          <div className="absolute bottom-4 right-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55">Signal map / 01</div>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 border-b border-white/10 md:grid-cols-12">
        <div className="border-b border-white/10 px-5 py-20 md:col-span-4 md:border-b-0 md:border-r md:px-8 md:py-28">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">The problem</p>
          <h2 className="mt-10 text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.84] tracking-[-0.055em]">STATIC<br />RULES<br />BREAK.</h2>
        </div>
        <div className="px-5 py-20 md:col-span-8 md:px-12 md:py-28">
          <p className="max-w-3xl text-[clamp(1.6rem,3vw,3rem)] font-light leading-[1.05] tracking-[-0.035em] text-white/75">Most infrastructure assumes tomorrow will behave like today. Lattice was designed around the opposite assumption.</p>
          <p className="mt-12 max-w-2xl text-[14px] leading-relaxed text-white/40">The system observes changes in load, availability and route conditions, then continuously recalculates how work should move through the network. The objective is not maximum complexity. It is fewer moments where the system asks a person to intervene.</p>
        </div>
      </section>

      <section className="border-b border-white/10 px-5 py-24 md:px-8 md:py-36">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">02 / System model</p>
            <h2 className="mt-12 text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.8] tracking-[-0.065em]">OBSERVE.<br />ADAPT.<br /><span className="text-white/30">MOVE.</span></h2>
          </div>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-white/25 md:block">Iteration 14 / Stable</span>
        </div>

        <div className="mt-20 grid grid-cols-1 border-y border-white/10 md:mt-28 md:grid-cols-3">
          {[['01', 'Observe', 'Read the state of the network in real time.'], ['02', 'Adapt', 'Rebalance routes against current conditions.'], ['03', 'Move', 'Execute the next best path with minimal intervention.']].map(([n, title, text]) => (
            <div key={n} className="border-b border-white/10 px-5 py-10 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:py-14 md:last:border-r-0">
              <span className="font-mono text-[10px] text-white/25">{n}</span>
              <h3 className="mt-16 text-[clamp(1.8rem,3vw,3rem)] tracking-[-0.04em]">{title}</h3>
              <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/40">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 px-5 py-24 md:px-8 md:py-36">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">03 / Architecture</p>
            <h2 className="mt-12 text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.82] tracking-[-0.06em]">THE SYSTEM<br />IS THE<br /><span className="text-white/30">INTERFACE.</span></h2>
          </div>
          <div className="md:col-span-7">
            <div className="relative overflow-hidden border border-white/10 bg-[#0d0d0d] p-6 md:p-10">
              <div className="grid grid-cols-3 gap-3 md:gap-5">
                {['INPUT', 'SIGNAL', 'STATE', 'ROUTE', 'DECIDE', 'OUTPUT'].map((label, i) => (
                  <div key={label} className="flex aspect-square items-center justify-center border border-white/15 font-mono text-[8px] tracking-[0.12em] text-white/45 md:text-[10px]">
                    {label}
                    {i < 5 && <span className="absolute hidden" />}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between font-mono text-[8px] uppercase tracking-[0.15em] text-white/20"><span>Data layer</span><span>Decision layer</span><span>Execution layer</span></div>
            </div>
            <p className="mt-8 max-w-xl text-[14px] leading-relaxed text-white/40">Lattice separates observation from decision and execution. Each layer can evolve without forcing the rest of the system to be rewritten.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-5 py-24 md:px-8 md:py-36">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">04 / Result</p>
        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {[['−38%', 'manual routing decisions'], ['+61%', 'faster response to load changes'], ['24/7', 'continuous system observation']].map(([value, label]) => (
            <div key={label} className="border-t border-white/15 pt-6">
              <p className="text-[clamp(3rem,6vw,6rem)] font-medium leading-none tracking-[-0.06em]">{value}</p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-20 max-w-2xl text-[clamp(1.5rem,2.7vw,2.6rem)] font-light leading-tight tracking-[-0.03em] text-white/65">The outcome is deliberately unremarkable: the network simply feels like it knows where to go.</p>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-col gap-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">Next system</p>
            <h2 className="mt-10 text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.78] tracking-[-0.07em]">MORROW.</h2>
          </div>
          <Link href="/technology" className="inline-flex w-fit items-center gap-3 border-b border-white/25 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] hover:border-white">Back to ARC/01 ↗</Link>
        </div>
      </section>

      <footer className="flex flex-col gap-4 border-t border-white/10 px-5 py-8 font-mono text-[9px] uppercase tracking-[0.16em] text-white/25 md:flex-row md:justify-between md:px-8">
        <span>ARC/01 — London / Tokyo</span><span>System 01 / Lattice</span><span>© 2026</span>
      </footer>
    </main>
  );
}
