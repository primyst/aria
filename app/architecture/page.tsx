"use client";

import { motion } from "framer-motion";

/**
 * /architecture — hero + selected work
 * Hero design stays intentionally unchanged; the page now continues into
 * an editorial project section that establishes Halden & Vire's practice.
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
    <main className="w-full bg-[#a89c8a]">
      <section className="flex min-h-screen w-full items-center justify-center p-4 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="relative w-full max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-2xl"
        >
          {/* Nav */}
          <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2c2925] text-[12px] font-semibold text-white">
                H
              </span>
              <span className="text-[15px] font-semibold text-[#2c2925]">
                Halden &amp; Vire
              </span>
            </div>
            <div className="hidden gap-8 text-[14px] text-[#2c2925]/60 md:flex">
              <a href="#practice" className="transition hover:text-[#2c2925]">
                Practice
              </a>
              <a href="#selected-work" className="transition hover:text-[#2c2925]">
                Projects
              </a>
              <a href="#journal" className="transition hover:text-[#2c2925]">
                Journal
              </a>
            </div>
            <a
              href="#contact"
              className="rounded-full bg-[#2c2925] px-5 py-2 text-[13px] font-medium text-white transition hover:opacity-90"
            >
              Get in touch
            </a>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-2 md:gap-6 md:px-10 md:py-14">
            {/* Left: copy */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease }}
                className="text-[38px] font-semibold leading-[1.08] tracking-tight text-[#2c2925] md:text-[46px]"
              >
                Buildings that carry
                <br />
                their weight lightly.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28, ease }}
                className="mt-5 max-w-md text-[15px] leading-relaxed text-[#2c2925]/60"
              >
                A studio for residential and cultural work, based between Oslo
                and Lisbon. We design for how a space feels, not just how it
                photographs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease }}
                className="mt-7 flex items-center gap-4"
              >
                <a
                  href="#selected-work"
                  className="rounded-full bg-[#2c2925] px-6 py-3 text-[14px] font-medium text-white transition hover:opacity-90"
                >
                  View projects
                </a>
                <a
                  href="#journal"
                  className="flex items-center gap-2 text-[14px] font-medium text-[#2c2925]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2c2925]/20">
                    ↗
                  </span>
                  Studio journal
                </a>
              </motion.div>

              {/* Stat badges */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease }}
                className="mt-10 flex gap-8 border-t border-[#2c2925]/10 pt-6"
              >
                <div>
                  <p className="text-[20px] font-semibold text-[#2c2925]">18</p>
                  <p className="text-[12px] text-[#2c2925]/50">Years practicing</p>
                </div>
                <div>
                  <p className="text-[20px] font-semibold text-[#2c2925]">64</p>
                  <p className="text-[12px] text-[#2c2925]/50">Projects completed</p>
                </div>
                <div>
                  <p className="text-[20px] font-semibold text-[#2c2925]">6</p>
                  <p className="text-[12px] text-[#2c2925]/50">Design awards</p>
                </div>
              </motion.div>
            </div>

            {/* Right: image with floating project card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="relative"
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[20px]">
                <img
                  src={IMAGE_URL}
                  alt="Cantilevered glass and steel residence"
                  className="h-full w-full object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease }}
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur"
              >
                <div>
                  <p className="text-[13px] font-semibold text-[#2c2925]">
                    Lindøya House
                  </p>
                  <p className="text-[12px] text-[#2c2925]/50">412 m² — 2025</p>
                </div>
                <span className="rounded-full bg-[#2c2925] px-3 py-1 text-[11px] font-medium text-white">
                  Project 014
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Selected Work */}
      <section id="selected-work" className="px-4 pb-4 md:px-10 md:pb-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-white">
          <div className="px-6 py-16 md:px-10 md:py-24">
            {/* Section introduction */}
            <div className="grid gap-8 border-b border-[#2c2925]/10 pb-10 md:grid-cols-[1fr_2fr] md:items-end md:gap-12">
              <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.18em] text-[#2c2925]/45">
                <span>SELECTED WORK</span>
                <span className="h-px w-10 bg-[#2c2925]/20" />
                <span>03 PROJECTS</span>
              </div>

              <p className="max-w-2xl text-[24px] leading-[1.18] tracking-tight text-[#2c2925] md:text-[32px]">
                Architecture shaped by place, material, light and the lives
                lived within it.
              </p>
            </div>

            {/* Featured project */}
            <motion.article
              id="lindoya-house"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease }}
              className="pt-12 md:pt-16"
            >
              <div className="group overflow-hidden rounded-[20px] bg-[#eeeae3]">
                <div className="aspect-[16/9] overflow-hidden md:aspect-[2/1]">
                  <img
                    src={PROJECT_IMAGES.lindoya}
                    alt="Modern house with natural stone, concrete and expansive windows"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h2 className="text-[25px] font-semibold tracking-tight text-[#2c2925]">
                      Lindøya House
                    </h2>
                    <p className="text-[13px] text-[#2c2925]/45">
                      Oslo, Norway · Residential · 2025
                    </p>
                  </div>
                  <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-[#2c2925]/55">
                    A restrained family home shaped around light, landscape and
                    long views, with its mass held quietly against the site.
                  </p>
                </div>

                <a
                  href="#lindoya-house"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-[#2c2925]"
                >
                  View project <span>↗</span>
                </a>
              </div>
            </motion.article>

            {/* Supporting projects */}
            <div className="mt-20 grid gap-16 md:mt-28 md:grid-cols-12 md:gap-8">
              <motion.article
                id="casa-da-luz"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease }}
                className="md:col-span-5 md:mt-16"
              >
                <div className="group overflow-hidden rounded-[18px] bg-[#eeeae3]">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={PROJECT_IMAGES.casa}
                      alt="Modern house with large windows and a balcony surrounded by greenery"
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-[20px] font-semibold tracking-tight text-[#2c2925]">
                      Casa da Luz
                    </h3>
                    <p className="text-[12px] text-[#2c2925]/45">
                      Lisbon, Portugal · Residential · 2024
                    </p>
                  </div>
                  <p className="mt-2 max-w-md text-[13px] leading-relaxed text-[#2c2925]/50">
                    A compact urban house organized around light, privacy and
                    outdoor living.
                  </p>
                  <a
                    href="#casa-da-luz"
                    className="mt-4 inline-flex items-center gap-2 text-[12px] font-medium text-[#2c2925]"
                  >
                    Explore project <span>↗</span>
                  </a>
                </div>
              </motion.article>

              <motion.article
                id="fjord-pavilion"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.08, ease }}
                className="md:col-span-5 md:col-start-8"
              >
                <div className="group overflow-hidden rounded-[18px] bg-[#eeeae3]">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={PROJECT_IMAGES.pavilion}
                      alt="Contemporary timber pavilion set within a landscaped garden"
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-[20px] font-semibold tracking-tight text-[#2c2925]">
                      Fjord Pavilion
                    </h3>
                    <p className="text-[12px] text-[#2c2925]/45">
                      Norway · Cultural · 2025
                    </p>
                  </div>
                  <p className="mt-2 max-w-md text-[13px] leading-relaxed text-[#2c2925]/50">
                    A small public pavilion where timber, stone and landscape
                    create a quiet threshold between city and nature.
                  </p>
                  <a
                    href="#fjord-pavilion"
                    className="mt-4 inline-flex items-center gap-2 text-[12px] font-medium text-[#2c2925]"
                  >
                    Explore project <span>↗</span>
                  </a>
                </div>
              </motion.article>
            </div>

            {/* Archive CTA */}
            <div className="mt-20 flex flex-col gap-5 border-t border-[#2c2925]/10 pt-6 md:mt-28 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3 text-[11px] tracking-[0.16em] text-[#2c2925]/40">
                <span>01—03</span>
                <span className="h-px w-10 bg-[#2c2925]/20" />
                <span>BODY OF WORK</span>
              </div>
              <a
                href="#selected-work"
                className="group inline-flex items-center gap-3 text-[14px] font-medium text-[#2c2925]"
              >
                Explore the complete body of work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Anchors reserved for the next sections. */}
      <div id="practice" className="h-px" />
      <div id="journal" className="h-px" />
      <div id="contact" className="h-px" />
    </main>
  );
}
