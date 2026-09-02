"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const systems = [
  {
    number: "01",
    name: "Lattice",
    type: "Infrastructure / 2026",
    title: "A routing system that learns from the network around it.",
    description:
      "An adaptive infrastructure experiment for environments where demand changes faster than fixed rules can respond.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=85&w=1800&auto=format&fit=crop",
  },
  {
    number: "02",
    name: "Morrow",
    type: "Interface / 2026",
    title: "Software that gives complex systems a human surface.",
    description:
      "A spatial interface study for seeing relationships, state and intent without flattening the underlying system.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=85&w=1800&auto=format&fit=crop",
  },
  {
    number: "03",
    name: "Null/01",
    type: "Research / 2025",
    title: "What happens when the interface gets out of the way?",
    description:
      "A research prototype exploring ambient interaction, machine perception and interfaces that appear only when needed.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=85&w=1800&auto=format&fit=crop",
  },
];

const notes = [
  ["01", "Interfaces should reveal complexity, not hide it."],
  ["02", "The best infrastructure is felt before it is seen."],
  ["03", "We prototype the difficult part first."],
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#f2f1ec] selection:bg-[#f2f1ec] selection:text-[#090909]">
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-5 py-5 md:px-8 md:py-7">
          <Link href="/technology" className="font-mono text-[13px] tracking-[0.18em] text-white">
            ARC/01
          </Link>
          <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.16em] text-white/75 md:flex">
            <a href="#systems">Systems</a>
            <a href="#notes">Field notes</a>
            <a href="#capabilities">Capabilities</a>
          </nav>
          <a href="#contact" className="font-mono text-[11px] uppercase tracking-[0.16em] text-white">
            Contact ↗
          </a>
        </div>
      </header>

      <section className="relative flex min-h-screen items-end overflow-hidden border-b border-white/10 px-5 pb-12 pt-32 md:px-8 md:pb-16">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="pointer-events-none absolute left-[68%] top-[18%] h-[42vw] w-[42vw] -translate-x-1/2 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute left-[68%] top-[18%] h-[24vw] w-[24vw] -translate-x-1/2 rounded-full border border-white/10" />

        <div className="relative z-10 w-full">
          <div className="mb-16 flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 md:mb-24">
            <span>Independent technology studio</span>
            <span className="text-right">London / Tokyo<br />Operating since 2021</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease }}>
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">01 / Signal</p>
            <h1 className="max-w-[1100px] text-[clamp(4rem,11vw,10.5rem)] font-medium leading-[0.78] tracking-[-0.075em]">
              WE BUILD
              <br />
              <span className="ml-[8vw]">SYSTEMS FOR</span>
              <br />
              <span className="text-white/30">UNCERTAIN</span> FUTURES.
            </h1>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/15 pt-6 md:grid-cols-[1fr_320px] md:items-end">
            <p className="max-w-xl text-[16px] leading-relaxed text-white/55 md:text-[18px]">
              ARC/01 works where technology becomes difficult: infrastructure, interfaces and products that need to make sense before they need to scale.
            </p>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40 md:text-right">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-white align-middle" />
              Systems online / 04 active
            </div>
          </div>
        </div>
      </section>

      <section id="systems" className="border-b border-white/10 px-5 py-24 md:px-8 md:py-36">
        <div className="mb-20 flex items-end justify-between gap-8 md:mb-28">
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">02 / Selected systems</p>
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.065em]">WORK THAT<br />BEHAVES.</h2>
          </div>
          <p className="hidden max-w-[240px] text-[13px] leading-relaxed text-white/40 md:block">Three studies across infrastructure, interfaces and machine interaction.</p>
        </div>

        <div className="space-y-32 md:space-y-44">
          {systems.map((system, index) => (
            <motion.article
              key={system.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease }}
              className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10"
            >
              <div className={`relative overflow-hidden bg-[#111] ${index === 1 ? "md:col-span-7 md:col-start-6" : "md:col-span-8"}`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={system.image} alt="" className="h-full w-full object-cover grayscale transition duration-700 hover:scale-[1.025] hover:grayscale-0" />
                </div>
                <div className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.15em] text-white/60">SYS.{system.number}</div>
              </div>

              <div className={`flex flex-col justify-between border-t border-white/15 pt-5 ${index === 1 ? "md:col-span-5 md:col-start-1 md:row-start-1" : "md:col-span-4"}`}>
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                    <span>{system.number} / {system.name}</span>
                    <span>{system.type}</span>
                  </div>
                  <h3 className="mt-8 max-w-lg text-[clamp(2rem,3.7vw,4rem)] font-medium leading-[0.92] tracking-[-0.045em]">{system.title}</h3>
                  <p className="mt-6 max-w-md text-[14px] leading-relaxed text-white/45">{system.description}</p>
                </div>
                <Link href="/technology/systems/lattice" className="mt-10 inline-flex w-fit items-center gap-3 border-b border-white/25 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] transition hover:border-white hover:text-white">
                  Examine system <span>↗</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="notes" className="grid grid-cols-1 border-b border-white/10 md:grid-cols-12">
        <div className="border-b border-white/10 px-5 py-24 md:col-span-5 md:border-b-0 md:border-r md:px-8 md:py-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">03 / Field notes</p>
          <h2 className="mt-16 text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.82] tracking-[-0.06em]">THINGS WE<br />ARE TESTING.</h2>
        </div>
        <div className="md:col-span-7">
          {notes.map(([number, note]) => (
            <div key={number} className="grid grid-cols-[70px_1fr] border-b border-white/10 px-5 py-9 last:border-b-0 md:grid-cols-[100px_1fr] md:px-10 md:py-12">
              <span className="font-mono text-[10px] text-white/30">{number}</span>
              <p className="max-w-2xl text-[clamp(1.4rem,2.5vw,2.5rem)] font-light leading-tight tracking-[-0.025em] text-white/75">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="capabilities" className="px-5 py-24 md:px-8 md:py-36">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">04 / Capabilities</p>
            <h2 className="mt-14 max-w-xl text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.84] tracking-[-0.06em]">FROM FIRST<br />PRINCIPLES.</h2>
          </div>
          <div className="md:col-span-7">
            {[
              ["01", "Research", "Technical strategy, systems thinking and experimental prototyping."],
              ["02", "Product", "Digital products shaped around real behaviour, not feature lists."],
              ["03", "Infrastructure", "Resilient architecture for systems that have to keep moving."],
              ["04", "Interfaces", "Interfaces that make complex technology legible and useful."],
            ].map(([number, title, description]) => (
              <div key={number} className="grid grid-cols-[48px_1fr] border-t border-white/15 py-7 md:grid-cols-[70px_1fr_240px] md:gap-8">
                <span className="font-mono text-[10px] text-white/30">{number}</span>
                <h3 className="text-[clamp(1.6rem,2.8vw,2.8rem)] tracking-[-0.04em]">{title}</h3>
                <p className="col-start-2 mt-3 text-[13px] leading-relaxed text-white/40 md:col-start-auto md:mt-1">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-white/10 px-5 py-28 md:px-8 md:py-44">
        <div className="pointer-events-none absolute right-[-10vw] top-1/2 h-[55vw] w-[55vw] -translate-y-1/2 rounded-full border border-white/10" />
        <div className="relative z-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">05 / Contact</p>
          <h2 className="mt-16 max-w-6xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.78] tracking-[-0.075em]">HAVE A<br /><span className="ml-[10vw] text-white/30">DIFFICULT</span><br />PROBLEM?</h2>
          <a href="mailto:studio@arc01.systems" className="mt-16 inline-block border-b border-white/40 pb-3 text-[18px] text-white/75 transition hover:border-white hover:text-white md:text-[24px]">studio@arc01.systems ↗</a>
        </div>
      </section>

      <footer className="flex flex-col gap-5 border-t border-white/10 px-5 py-8 font-mono text-[9px] uppercase tracking-[0.16em] text-white/30 md:flex-row md:items-center md:justify-between md:px-8">
        <span>ARC/01 — London / Tokyo</span>
        <span>Technology for uncertain futures</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
