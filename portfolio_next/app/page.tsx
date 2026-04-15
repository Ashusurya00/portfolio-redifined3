'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PERSON, STATS, MARQUEE_SKILLS, PROJECTS } from '@/lib/data';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/Animate';

function TypedRole() {
  const roles = PERSON.roles;
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const word = roles[roleIdx];
    if (!deleting) {
      if (charIdx < word.length) {
        const t = setTimeout(() => { setText(word.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 90);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), 1900);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => { setText(word.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 52);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setRoleIdx(i => (i + 1) % roles.length);
      }
    }
  }, [charIdx, deleting, roleIdx, roles]);

  return (
    <span className="font-display font-semibold text-[clamp(1.1rem,2.5vw,1.45rem)] text-[#00d4aa]">
      {text}<span className="cursor-blink inline-block w-[2px] h-[1em] bg-[#00d4aa] ml-[2px] align-bottom" />
    </span>
  );
}

function Marquee() {
  const items = [...MARQUEE_SKILLS, ...MARQUEE_SKILLS];
  return (
    <div className="marquee-wrap overflow-hidden border-y border-white/5 py-5">
      <div className="marquee-track flex gap-8 w-max">
        {items.map((s, i) => (
          <div key={i} className="flex items-center gap-2 font-mono text-[0.76rem] text-[#7a8599] whitespace-nowrap">
            {s} <span className="text-[#00d4aa] text-[0.5rem]">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="max-w-[1100px] mx-auto px-6">
        {/* ── HERO ── */}
        <section className="grid md:grid-cols-2 items-center gap-14 py-20 md:py-28 min-h-[calc(100vh-68px)]">
          <div className="order-2 md:order-1">
            <FadeUp delay={0.05}>
              <div className="flex items-center gap-2 font-mono text-[0.78rem] tracking-[0.12em] uppercase text-[#00d4aa] mb-5">
                <span className="w-7 h-[1px] bg-[#00d4aa]" />
                Available for hire
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <h1 className="font-display font-extrabold text-[clamp(2.4rem,6vw,3.8rem)] leading-[1.05] tracking-[-0.03em] text-[#f0f4ff] mb-2">
                Ashutosh<br />Suryawanshi
              </h1>
            </FadeUp>

            <FadeUp delay={0.18}>
              <div className="mb-5 h-8"><TypedRole /></div>
            </FadeUp>

            <FadeUp delay={0.24}>
              <p className="text-[#7a8599] text-[1rem] leading-[1.78] max-w-[480px] mb-7">
                {PERSON.tagline}
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-[0.62rem] rounded-[8px] bg-[#00d4aa] text-[#06080f] font-semibold text-[0.875rem] hover:bg-[#00bfa0] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(0,212,170,0.32)]">
                  Hire Me
                </Link>
                <Link href="/projects" className="inline-flex items-center gap-2 px-5 py-[0.62rem] rounded-[8px] border border-[rgba(0,212,170,0.35)] text-[#f0f4ff] text-[0.875rem] font-medium hover:bg-[rgba(0,212,170,0.08)] transition-all duration-200 hover:-translate-y-[2px]">
                  View Projects
                </Link>
                <a href={PERSON.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-[0.62rem] rounded-[8px] bg-white/4 border border-white/8 text-[#c8d0e0] text-[0.875rem] font-medium hover:bg-white/8 hover:border-white/14 transition-all duration-200 hover:-translate-y-[2px]">
                  GitHub ↗
                </a>
              </div>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.38}>
              <div className="flex flex-wrap gap-3">
                {STATS.map(s => (
                  <div key={s.label} className="flex flex-col px-4 py-3 border border-white/7 rounded-[10px] bg-white/[0.03] hover:border-[rgba(0,212,170,0.35)] transition-colors duration-200">
                    <span className="font-display font-extrabold text-[1.3rem] text-[#00d4aa] leading-none">{s.val}</span>
                    <span className="text-[0.68rem] text-[#7a8599] mt-[3px]">{s.label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Avatar */}
          <div className="order-1 md:order-2 flex justify-center">
            <FadeUp delay={0.22}>
              <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px]">
                <div className="avatar-ring absolute inset-[-12px] rounded-full border border-[rgba(0,212,170,0.35)]">
                  <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-[9px] h-[9px] bg-[#00d4aa] rounded-full shadow-[0_0_8px_#00d4aa]" />
                </div>
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[rgba(0,212,170,0.15)] to-[rgba(56,189,248,0.08)] border-2 border-[rgba(0,212,170,0.2)] flex items-center justify-center text-[6rem] select-none">
                  👨‍💻
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-[0.4rem] bg-[#0c101c] border border-white/8 rounded-full px-3 py-1 text-[0.7rem] text-[#7a8599]">
                  <span className="w-[7px] h-[7px] bg-[#22c55e] rounded-full pulse-dot shadow-[0_0_6px_#22c55e]" />
                  Open to work
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>

      <Marquee />

      {/* ── ABOUT + FEATURED PROJECTS PREVIEW ── */}
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 mb-16">
          <FadeUp>
            <span className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-[#00d4aa] mb-3 block">About me</span>
            <h2 className="font-display font-extrabold text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.1] tracking-[-0.025em] text-[#f0f4ff] mb-4">
              Building AI that<br />actually works
            </h2>
            <p className="text-[#7a8599] leading-[1.8] mb-4">
              2025 B.Tech CSE graduate from MRIIT Hyderabad, building production-grade AI systems with real evaluation metrics and live deployments.
            </p>
            <p className="text-[#7a8599] leading-[1.8] mb-6">
              Seeking entry-level AI / ML Engineer roles at companies pushing the frontier of applied AI.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-[0.62rem] rounded-[8px] bg-[#00d4aa] text-[#06080f] font-semibold text-[0.875rem] hover:bg-[#00bfa0] transition-all hover:-translate-y-[2px]">Let's talk →</Link>
              <Link href="/resume" className="inline-flex items-center gap-2 px-5 py-[0.62rem] rounded-[8px] bg-white/4 border border-white/8 text-[#c8d0e0] text-[0.875rem] hover:bg-white/8 transition-all hover:-translate-y-[2px]">View Resume</Link>
            </div>
          </FadeUp>

          <StaggerContainer className="flex flex-col gap-3">
            {[
              { icon: '🎓', title: 'B.Tech Computer Science & Engineering', sub: 'MRIIT, Hyderabad · 2021–2025' },
              { icon: '🏢', title: 'Data Science Intern — SaiKet Systems', sub: '3 ML models · 85% accuracy · 60% effort saved' },
              { icon: '📊', title: 'Data Analyst Intern — Codveda', sub: 'EDA on 20K+ records · 4hr → 20min reporting' },
              { icon: '🏆', title: 'Winner — Code Debugging Contest', sub: 'Tech Fest 2024 · 100+ participants' },
            ].map(item => (
              <StaggerItem key={item.title}>
                <div className="portfolio-card flex items-start gap-3 px-4 py-3 bg-white/[0.03] border border-white/7 rounded-[14px] hover:border-[rgba(0,212,170,0.35)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
                  <div className="w-[34px] h-[34px] rounded-[8px] bg-[rgba(0,212,170,0.1)] flex items-center justify-center flex-shrink-0 text-[0.9rem]">{item.icon}</div>
                  <div>
                    <p className="font-display font-semibold text-[0.88rem] text-[#f0f4ff]">{item.title}</p>
                    <p className="text-[0.78rem] text-[#7a8599] mt-[1px]">{item.sub}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Featured 3 projects preview */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <span className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-[#00d4aa]">Featured Projects</span>
            <Link href="/projects" className="text-[0.82rem] text-[#7a8599] hover:text-[#00d4aa] transition-colors">View all →</Link>
          </div>
          <StaggerContainer className="grid md:grid-cols-3 gap-4">
            {PROJECTS.filter(p => p.featured).map(p => (
              <StaggerItem key={p.slug}>
                <Link href={`/projects#${p.slug}`} className="portfolio-card block bg-white/[0.03] border border-white/7 rounded-[14px] p-5 hover:border-[rgba(0,212,170,0.35)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className="font-display font-bold text-[0.95rem] text-[#f0f4ff] mb-2">{p.title}</h3>
                  <p className="text-[0.8rem] text-[#7a8599] line-clamp-2 leading-[1.65]">{p.description}</p>
                  {p.metrics.length > 0 && (
                    <div className="flex gap-3 mt-3">
                      {p.metrics.slice(0,2).map(m => (
                        <div key={m.label} className="flex flex-col">
                          <span className="font-display font-bold text-[0.9rem] text-[#00d4aa]">{m.val}</span>
                          <span className="text-[0.65rem] text-[#7a8599]">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </>
  );
}
