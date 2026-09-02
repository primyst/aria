"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const properties = [
  {
    ref: "01",
    name: "Casa Mare",
    location: "Comporta, Portugal",
    type: "Private residence",
    price: "€3.8M",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=2000&auto=format&fit=crop",
  },
  {
    ref: "02",
    name: "Villa Serein",
    location: "Cascais, Portugal",
    type: "Coastal villa",
    price: "€4.2M",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=90&w=2000&auto=format&fit=crop",
  },
  {
    ref: "03",
    name: "The Courtyard House",
    location: "Lisbon, Portugal",
    type: "Townhouse",
    price: "€2.1M",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=90&w=2000&auto=format&fit=crop",
  },
];

const journal = [
  ["01", "The value of a view", "On choosing a home by what surrounds it, not what fills it.", "08.26"],
  ["02", "Beyond the address", "Why the best properties begin with a sense of place.", "06.26"],
  ["03", "Buying less, living better", "A different measure of space.", "04.26"],
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-[#f3efe7] text-[#171613] selection:bg-[#171613] selection:text-[#f3efe7]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#171613]/10 bg-[#f3efe7]/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-5 py-5 md:px-10 md:py-6">
          <Link href="/real-estate" className="font-serif text-[22px] leading-none tracking-[-0.05em]">SOLANE</Link>
          <nav className="hidden items-center gap-9 text-[11px] uppercase tracking-[0.16em] text-[#171613]/55 md:flex">
            <a href="#properties" className="hover:text-[#171613]">Properties</a>
            <a href="#approach" className="hover:text-[#171613]">Approach</a>
            <a href="#journal" className="hover:text-[#171613]">Journal</a>
          </nav>
          <a href="#contact" className="border-b border-[#171613] pb-1 text-[11px] uppercase tracking-[0.14em]">Private enquiries</a>
        </div>
      </header>

      <section className="grid min-h-screen grid-cols-1 pt-[72px] md:grid-cols-[58%_42%]">
        <div className="relative flex min-h-[70vh] flex-col justify-between overflow-hidden bg-[#d9d0c1] p-5 md:min-h-screen md:p-10">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=90&w=2200&auto=format&fit=crop" alt="Contemporary Mediterranean residence" className="h-full w-full object-cover" />
          </div>
          <div className="relative z-10 flex justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-white/75">
            <span>Residence / 014</span><span>36°43' N — 9°25' W</span>
          </div>
          <div className="relative z-10 mt-auto pt-48">
            <div className="flex items-end justify-between gap-5 text-white">
              <div>
                <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/65">Featured property</p>
                <h1 className="font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.8] tracking-[-0.065em]">Casa<br />Mare.</h1>
              </div>
              <span className="mb-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/65">Comporta / PT</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between border-l border-[#171613]/10 px-6 py-10 md:px-12 md:py-14">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#171613]/40">Independent real estate advisory</p>
            <motion.h2 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease }} className="mt-20 max-w-lg font-serif text-[clamp(3.3rem,6vw,6.5rem)] leading-[0.82] tracking-[-0.06em]">Places worth<br /><em>staying for.</em></motion.h2>
            <p className="mt-10 max-w-md text-[15px] leading-relaxed text-[#171613]/55">Solane is a private real estate practice representing distinctive homes across the Atlantic coast. We look beyond the listing to understand the life a property makes possible.</p>
          </div>
          <div className="mt-20 border-t border-[#171613]/15 pt-5">
            <div className="flex justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-[#171613]/45"><span>Current selection</span><span>03 residences</span></div>
            <a href="#properties" className="mt-8 inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.12em]">Explore the selection <span>↓</span></a>
          </div>
        </div>
      </section>

      <section id="properties" className="border-t border-[#171613]/10 px-5 py-24 md:px-10 md:py-36">
        <div className="mb-20 flex flex-col justify-between gap-8 md:mb-28 md:flex-row md:items-end">
          <div><p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#171613]/40">01 / Selection</p><h2 className="mt-10 font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.8] tracking-[-0.065em]">The right<br /><em>address.</em></h2></div>
          <p className="max-w-xs text-[13px] leading-relaxed text-[#171613]/45">A small selection, deliberately. Homes chosen for architecture, landscape and the quality of everyday life.</p>
        </div>
        <div className="space-y-24 md:space-y-36">
          {properties.map((property, i) => (
            <motion.article key={property.ref} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .8, ease }} className={`grid grid-cols-1 gap-7 md:grid-cols-12 md:gap-10 ${i === 1 ? "md:ml-[8%]" : i === 2 ? "md:mr-[8%]" : ""}`}>
              <div className={`overflow-hidden ${i === 1 ? "md:col-span-7 md:col-start-6" : "md:col-span-8"}`}>
                <div className="aspect-[4/3] overflow-hidden"><img src={property.image} alt={property.name} className="h-full w-full object-cover transition duration-700 hover:scale-[1.025]" /></div>
              </div>
              <div className={`flex flex-col justify-between border-t border-[#171613]/15 pt-5 ${i === 1 ? "md:col-span-5 md:col-start-1 md:row-start-1" : "md:col-span-4"}`}>
                <div>
                  <div className="flex justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-[#171613]/40"><span>{property.ref} / {property.type}</span><span>{property.price}</span></div>
                  <h3 className="mt-10 font-serif text-[clamp(2.2rem,4vw,4rem)] leading-[0.85] tracking-[-0.05em]">{property.name}</h3>
                  <p className="mt-4 text-[13px] text-[#171613]/50">{property.location}</p>
                </div>
                <a href="#contact" className="mt-12 inline-flex w-fit items-center gap-3 border-b border-[#171613]/25 pb-2 text-[10px] uppercase tracking-[0.15em] hover:border-[#171613]">Request details ↗</a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="approach" className="bg-[#171613] px-5 py-24 text-[#f3efe7] md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5"><p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">02 / Our approach</p><h2 className="mt-14 font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.82] tracking-[-0.06em]">A property is<br /><em>more than its</em><br />walls.</h2></div>
          <div className="md:col-span-7 md:pt-16"><p className="max-w-2xl text-[clamp(1.6rem,3vw,3rem)] font-serif leading-[1.02] tracking-[-0.035em] text-white/75">We advise on the things photographs cannot show: light at four in the afternoon, the walk to the water, how a room sounds when the windows are open.</p><div className="mt-16 grid grid-cols-2 border-t border-white/15 pt-6 md:grid-cols-4"><div><p className="font-serif text-4xl">18</p><p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">Years / practice</p></div><div><p className="font-serif text-4xl">42</p><p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">Private sales</p></div><div><p className="font-serif text-4xl">07</p><p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">Coastal markets</p></div><div><p className="font-serif text-4xl">01</p><p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">Standard / selective</p></div></div></div>
        </div>
      </section>

      <section id="journal" className="px-5 py-24 md:px-10 md:py-36">
        <div className="flex items-end justify-between border-b border-[#171613]/15 pb-6"><div><p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#171613]/40">03 / Journal</p><h2 className="mt-10 font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.8] tracking-[-0.06em]">Field notes.</h2></div><span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#171613]/35">Lisbon — Lagos — London</span></div>
        <div>{journal.map(([n, title, description, date]) => <article key={n} className="grid grid-cols-[45px_1fr] gap-4 border-b border-[#171613]/15 py-8 md:grid-cols-[70px_1fr_180px] md:gap-8"><span className="font-mono text-[9px] text-[#171613]/35">{n}</span><div><h3 className="font-serif text-[clamp(1.6rem,3vw,2.8rem)] tracking-[-0.035em]">{title}</h3><p className="mt-2 max-w-lg text-[13px] text-[#171613]/45">{description}</p></div><span className="mt-3 font-mono text-[9px] uppercase tracking-[0.15em] text-[#171613]/35 md:text-right">{date}</span></article>)}</div>
      </section>

      <section id="contact" className="border-t border-[#171613]/10 px-5 py-28 md:px-10 md:py-44">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#171613]/40">04 / Private enquiries</p>
        <div className="mt-16 flex flex-col justify-between gap-14 md:flex-row md:items-end"><h2 className="max-w-5xl font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.75] tracking-[-0.075em]">Find your<br /><em>place.</em></h2><div className="max-w-xs"><p className="text-[14px] leading-relaxed text-[#171613]/50">For private viewings, acquisition advice and discreet representation.</p><a href="mailto:hello@solane.estates" className="mt-8 inline-block border-b border-[#171613] pb-2 text-[13px]">hello@solane.estates ↗</a></div></div>
      </section>

      <footer className="flex flex-col gap-4 border-t border-[#171613]/10 px-5 py-8 font-mono text-[9px] uppercase tracking-[0.15em] text-[#171613]/35 md:flex-row md:justify-between md:px-10"><span>SOLANE — Private real estate</span><span>Lisbon / Lagos / London</span><span>© 2026</span></footer>
    </main>
  );
}
