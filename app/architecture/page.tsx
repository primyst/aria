"use client";

import { motion } from "framer-motion";

/**
 * /architecture — Halden & Vire architecture studio homepage.
 * The page uses a full-width editorial layout rather than a centered mockup card.
 */

const IMAGE_URL =
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1400&auto=format&fit=crop";

const PROJECT_IMAGES = {
  lindoya:
    "https://images.unsplash.com/photo-1758448756207-54505680d130?auto=format&fit=crop&fm=jpg&q=80&w=2200",
  casa:
    "https://images.unsplash.com/photo-1742587852136-afdc7157f5e7?auto=format&fit=crop&fm=jpg&q=80&w=1800",
  pavilion:
    "https://images.unsplash.com/photo-1782829243963-3a2dee566511?auto=format&fit=crop&fm=jpg&q=80&w=1800",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function ArchitectureHero() {
  return (
    <main className="min-h-screen w-full bg-white text-[#2c2925]">
      <section className="w-full px-5 py-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <header className="flex items-center justify-between border-b border-[#2c2925]/10 pb-6">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2c2925] text-[12px] font-semibold text-white">H</span>
              <span className="text-[15px] font-semibold">Halden &amp; Vire</span>
            </a>
            <nav className="hidden gap-8 text-[14px] text-[#2c2925]/60 md:flex">
              <a href="#practice" className="transition hover:text-[#2c2925]">Practice</a>
              <a href="#selected-work" className="transition hover:text-[#2c2925]">Projects</a>
              <a href="#journal" className="transition hover:text-[#2c2925]">Journal</a>
            </nav>
            <a href="#contact" className="rounded-full bg-[#2c2925] px-5 py-2.5 text-[13px] font-medium text-white transition hover:opacity-90">Get in touch</a>
          </header>

          <div id="top" className="grid min-h-[calc(100vh-100px)] grid-cols-1 items-center gap-12 py-12 md:grid-cols-2 md:gap-16 md:py-16 lg:gap-24">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease }} className="max-w-2xl text-[42px] font-semibold leading-[1.04] tracking-[-0.04em] sm:text-[52px] lg:text-[64px]">
                Buildings that carry
                <br />
                their weight lightly.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28, ease }} className="mt-6 max-w-md text-[15px] leading-relaxed text-[#2c2925]/60">
                A studio for residential and cultural work, based between Oslo and Lisbon. We design for how a space feels, not just how it photographs.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease }} className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#selected-work" className="rounded-full bg-[#2c2925] px-6 py-3 text-[14px] font-medium text-white transition hover:opacity-90">View projects</a>
                <a href="#journal" className="flex items-center gap-2 text-[14px] font-medium"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2c2925]/20">↗</span>Studio journal</a>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55, ease }} className="mt-12 flex gap-8 border-t border-[#2c2925]/10 pt-6 sm:gap-12">
                <div><p className="text-[20px] font-semibold">18</p><p className="text-[12px] text-[#2c2925]/50">Years practicing</p></div>
                <div><p className="text-[20px] font-semibold">64</p><p className="text-[12px] text-[#2c2925]/50">Projects completed</p></div>
                <div><p className="text-[20px] font-semibold">6</p><p className="text-[12px] text-[#2c2925]/50">Design awards</p></div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease }} className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[20px] md:aspect-[4/5]"><img src={IMAGE_URL} alt="Cantilevered glass and steel residence" className="h-full w-full object-cover" /></div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6, ease }} className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                <div><p className="text-[13px] font-semibold">Lindøya House</p><p className="text-[12px] text-[#2c2925]/50">412 m² — 2025</p></div>
                <span className="rounded-full bg-[#2c2925] px-3 py-1 text-[11px] font-medium text-white">Project 014</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="selected-work" className="w-full border-t border-[#2c2925]/10 px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 border-b border-[#2c2925]/10 pb-10 md:grid-cols-[1fr_2fr] md:items-end md:gap-16">
            <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.18em] text-[#2c2925]/45"><span>SELECTED WORK</span><span className="h-px w-10 bg-[#2c2925]/20" /><span>03 PROJECTS</span></div>
            <p className="max-w-3xl text-[25px] leading-[1.16] tracking-[-0.02em] md:text-[36px]">Architecture shaped by place, material, light and the lives lived within it.</p>
          </div>

          <motion.article id="lindoya-house" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease }} className="pt-12 md:pt-16">
            <div className="group overflow-hidden rounded-[20px] bg-[#eeeae3]"><div className="aspect-[16/9] overflow-hidden md:aspect-[2.05/1]"><img src={PROJECT_IMAGES.lindoya} alt="Modern house with natural stone, concrete and expansive windows" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]" /></div></div>
            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1"><h2 className="text-[25px] font-semibold tracking-tight">Lindøya House</h2><p className="text-[13px] text-[#2c2925]/45">Oslo, Norway · Residential · 2025</p></div>
                <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-[#2c2925]/55">A restrained family home shaped around light, landscape and long views, with its mass held quietly against the site.</p>
              </div>
              <a href="#lindoya-house" className="inline-flex items-center gap-2 text-[13px] font-medium">View project <span>↗</span></a>
            </div>
          </motion.article>

          <div className="mt-20 grid gap-16 md:mt-28 md:grid-cols-12 md:gap-8">
            <motion.article id="casa-da-luz" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease }} className="md:col-span-5 md:mt-16">
              <div className="group overflow-hidden rounded-[18px] bg-[#eeeae3]"><div className="aspect-[4/5] overflow-hidden"><img src={PROJECT_IMAGES.casa} alt="Modern house with large windows and a balcony surrounded by greenery" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]" /></div></div>
              <div className="mt-5"><div className="flex flex-wrap items-baseline gap-x-3 gap-y-1"><h3 className="text-[20px] font-semibold tracking-tight">Casa da Luz</h3><p className="text-[12px] text-[#2c2925]/45">Lisbon, Portugal · Residential · 2024</p></div><p className="mt-2 max-w-md text-[13px] leading-relaxed text-[#2c2925]/50">A compact urban house organized around light, privacy and outdoor living.</p><a href="#casa-da-luz" className="mt-4 inline-flex items-center gap-2 text-[12px] font-medium">Explore project <span>↗</span></a></div>
            </motion.article>
            <motion.article id="fjord-pavilion" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: 0.08, ease }} className="md:col-span-5 md:col-start-8">
              <div className="group overflow-hidden rounded-[18px] bg-[#eeeae3]"><div className="aspect-[4/5] overflow-hidden"><img src={PROJECT_IMAGES.pavilion} alt="Contemporary timber pavilion set within a landscaped garden" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]" /></div></div>
              <div className="mt-5"><div className="flex flex-wrap items-baseline gap-x-3 gap-y-1"><h3 className="text-[20px] font-semibold tracking-tight">Fjord Pavilion</h3><p className="text-[12px] text-[#2c2925]/45">Norway · Cultural · 2025</p></div><p className="mt-2 max-w-md text-[13px] leading-relaxed text-[#2c2925]/50">A small public pavilion where timber, stone and landscape create a quiet threshold between city and nature.</p><a href="#fjord-pavilion" className="mt-4 inline-flex items-center gap-2 text-[12px] font-medium">Explore project <span>↗</span></a></div>
            </motion.article>
          </div>

          <div className="mt-20 flex flex-col gap-5 border-t border-[#2c2925]/10 pt-6 md:mt-28 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 text-[11px] tracking-[0.16em] text-[#2c2925]/40"><span>01—03</span><span className="h-px w-10 bg-[#2c2925]/20" /><span>BODY OF WORK</span></div>
            <a href="#selected-work" className="group inline-flex items-center gap-3 text-[14px] font-medium">Explore the complete body of work <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></a>
          </div>
        </div>
      </section>

      <section id="practice" className="w-full border-t border-[#2c2925]/10 px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <div className="text-[11px] font-medium tracking-[0.18em] text-[#2c2925]/45">THE PRACTICE</div>
            <div>
              <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease }} className="max-w-4xl text-[34px] leading-[1.08] tracking-[-0.035em] sm:text-[44px] md:text-[56px]">We make spaces that become quieter with time.</motion.h2>
              <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.08, ease }} className="mt-8 max-w-2xl text-[15px] leading-[1.75] text-[#2c2925]/60 md:text-[16px]">Our work begins with the conditions of a place — its light, material, landscape and the people who will inhabit it. We look for the simplest architectural response that can carry those conditions forward.</motion.p>
            </div>
          </div>

          <div className="mt-20 border-t border-[#2c2925]/10 md:mt-28"><div className="grid md:grid-cols-3">
            {[["01", "Place", "Every project starts with its setting, rather than a predetermined form."], ["02", "Material", "We work with materials for their physical character, aging and relationship to light."], ["03", "Life", "Architecture is measured by what happens inside it: movement, gathering, solitude and time."]].map(([number, title, body], index) => (
              <motion.div key={number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.08, ease }} className="border-b border-[#2c2925]/10 py-8 md:border-b-0 md:border-r md:px-8 md:py-10 first:md:pl-0 last:md:border-r-0 last:md:pr-0">
                <p className="text-[11px] tracking-[0.16em] text-[#2c2925]/40">{number}</p><h3 className="mt-10 text-[21px] font-semibold tracking-tight">{title}</h3><p className="mt-3 max-w-sm text-[13px] leading-[1.7] text-[#2c2925]/55">{body}</p>
              </motion.div>
            ))}
          </div></div>

          <div className="mt-20 border-t border-[#2c2925]/10 md:mt-28"><div className="grid md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease }} className="border-b border-[#2c2925]/10 py-8 md:border-b-0 md:border-r md:py-10 md:pr-12"><p className="text-[11px] font-medium tracking-[0.18em] text-[#2c2925]/40">OSLO</p><p className="mt-5 text-[20px] tracking-tight">Residential · Cultural · Nordic landscapes</p></motion.div>
            <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.08, ease }} className="py-8 md:py-10 md:pl-12"><p className="text-[11px] font-medium tracking-[0.18em] text-[#2c2925]/40">LISBON</p><p className="mt-5 text-[20px] tracking-tight">Residential · Adaptive reuse · Mediterranean contexts</p></motion.div>
          </div></div>
        </div>
      </section>

      {/* Featured Project / Process */}
      <section id="process" className="w-full border-t border-[#2c2925]/10 px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <div className="text-[11px] font-medium tracking-[0.18em] text-[#2c2925]/45">HOW WE WORK</div>
            <div>
              <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease }} className="max-w-3xl text-[30px] leading-[1.12] tracking-[-0.03em] sm:text-[40px] md:text-[52px]">
                Good architecture is less about adding than knowing what to leave out.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.08, ease }} className="mt-8 max-w-2xl text-[15px] leading-[1.75] text-[#2c2925]/60">
                We move from observation to proposition, testing each decision against the site, the brief and the life of the building. The process stays collaborative from the first sketch to the final detail.
              </motion.p>
            </div>
          </div>

          <div className="mt-20 border-y border-[#2c2925]/10 md:mt-28">
            {[
              ["01", "Read the place", "We begin with the site: orientation, landscape, climate, existing structures and the patterns already there."],
              ["02", "Frame the idea", "The brief becomes a clear architectural proposition — a small number of moves that establish the character of the project."],
              ["03", "Test the detail", "Light, material, proportion and construction are developed together so the concept survives contact with reality."],
              ["04", "Build with care", "We stay close to the work through delivery, protecting the decisions that make the finished space feel inevitable."],
            ].map(([number, title, body], index) => (
              <motion.div key={number} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.06, ease }} className="grid gap-5 border-b border-[#2c2925]/10 py-7 last:border-b-0 md:grid-cols-[80px_1fr_1.3fr] md:items-baseline md:gap-10 md:py-9">
                <span className="text-[11px] tracking-[0.16em] text-[#2c2925]/40">{number}</span>
                <h3 className="text-[20px] font-semibold tracking-tight">{title}</h3>
                <p className="max-w-xl text-[13px] leading-[1.7] text-[#2c2925]/55">{body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease }} className="mt-20 grid gap-8 border-t border-[#2c2925]/10 pt-6 md:mt-24 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[11px] font-medium tracking-[0.18em] text-[#2c2925]/40">FEATURED PROJECT · 014</p>
              <h2 className="mt-5 text-[30px] font-semibold tracking-[-0.03em] sm:text-[40px]">Lindøya House</h2>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-[#2c2925]/55">Oslo, Norway · Private residence · 412 m² · Completed 2025</p>
            </div>
            <a href="#lindoya-house" className="inline-flex items-center gap-3 text-[14px] font-medium">Read the project <span>↗</span></a>
          </motion.div>
        </div>
      </section>

      <div id="journal" className="h-px" />
      <div id="contact" className="h-px" />
    </main>
  );
}
