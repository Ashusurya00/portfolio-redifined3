'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS, EXPERIENCE, CERTIFICATIONS, ACHIEVEMENTS } from '@/lib/data';
import PageHero from '@/components/PageHero';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/Animate';

const LEVEL_STYLE: Record<string, string> = {
  expert:     'bg-[rgba(0,212,170,0.08)] border-[rgba(0,212,170,0.3)] text-[#00d4aa]',
  proficient: 'bg-white/[0.04] border-white/10 text-[#c8d0e0]',
  familiar:   'bg-white/[0.02] border-white/6 text-[#7a8599]',
};

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: '🧠 Skills', id: 'skills' },
    { label: '💼 Experience', id: 'exp' },
    { label: '🏅 Certifications', id: 'certs' },
  ];

  return (
    <div className="max-w-[1100px] mx-auto px-6 pb-24">
      <PageHero
        label="Capabilities"
        title={<>Skills & <span className="text-[#00d4aa]">Experience</span></>}
        subtitle="Technical skills, internship experience, and professional certifications — all in one place."
      />

      {/* Tab row */}
      <div className="flex gap-2 pt-8 pb-6 border-b border-white/5">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(i)}
            className={`text-[0.875rem] font-medium px-4 py-[0.5rem] rounded-[8px] transition-all duration-200 
              ${activeTab === i
                ? 'bg-[rgba(0,212,170,0.09)] text-[#00d4aa] border border-[rgba(0,212,170,0.25)]'
                : 'text-[#7a8599] hover:text-[#f0f4ff] hover:bg-white/5 border border-transparent'
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* ── SKILLS TAB ── */}
        {activeTab === 0 && (
          <motion.div key="skills" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
            <div className="grid md:grid-cols-2 gap-5 pt-6">
              {SKILLS.map((cat, ci) => (
                <FadeUp key={cat.category} delay={ci * 0.06}>
                  <div className="portfolio-card bg-white/[0.03] border border-white/7 rounded-[14px] p-5 hover:border-[rgba(0,212,170,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[1.1rem]">{cat.icon}</span>
                      <h3 className="font-display font-bold text-[0.95rem] text-[#f0f4ff]">{cat.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-[0.38rem]">
                      {cat.items.map(skill => (
                        <span
                          key={skill.name}
                          className={`skill-pill inline-block font-mono text-[0.75rem] px-[0.75rem] py-[0.28rem] rounded-[7px] border cursor-default ${LEVEL_STYLE[skill.level]}`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                    {/* Legend */}
                    <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/5">
                      <span className="font-mono text-[0.62rem] text-[#00d4aa]">● Expert</span>
                      <span className="font-mono text-[0.62rem] text-[#c8d0e0]">● Proficient</span>
                      <span className="font-mono text-[0.62rem] text-[#7a8599]">● Familiar</span>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── EXPERIENCE TAB ── */}
        {activeTab === 1 && (
          <motion.div key="exp" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
            <div className="flex flex-col gap-5 pt-6">
              {EXPERIENCE.map((exp, i) => (
                <FadeUp key={exp.company} delay={i * 0.1}>
                  <div className="portfolio-card relative bg-white/[0.03] border border-white/7 rounded-[14px] p-6 hover:border-[rgba(0,212,170,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#00d4aa] rounded-l-[14px]" />
                    <h3 className="font-display font-bold text-[1rem] text-[#f0f4ff]">{exp.role}</h3>
                    <p className="text-[0.82rem] text-[#00d4aa] mb-1">{exp.company}</p>
                    <p className="text-[0.75rem] text-[#7a8599] mb-4 font-mono">{exp.type}</p>
                    <ul className="flex flex-col gap-2">
                      {exp.bullets.map(b => (
                        <li key={b} className="flex items-start gap-3 text-[0.855rem] text-[#7a8599] leading-[1.65]">
                          <span className="text-[#00d4aa] text-[0.72rem] mt-[0.2em] flex-shrink-0">→</span>
                          <span dangerouslySetInnerHTML={{ __html: b.replace(/\d+[%+KK+hrmins→ ]+\S+/g, m => `<strong class="text-[#c8d0e0]">${m}</strong>`) }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              ))}

              {/* Achievements */}
              <FadeUp delay={0.2}>
                <div className="bg-white/[0.03] border border-white/7 rounded-[14px] p-6">
                  <h3 className="font-display font-bold text-[1rem] text-[#f0f4ff] mb-4">Achievements</h3>
                  {ACHIEVEMENTS.map(a => (
                    <div key={a.text} className="flex items-start gap-3 py-3 border-b border-white/5 last:border-none">
                      <span className="text-[1.1rem] flex-shrink-0">{a.icon}</span>
                      <span className="text-[0.855rem] text-[#c8d0e0] leading-[1.6]">{a.text}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </motion.div>
        )}

        {/* ── CERTS TAB ── */}
        {activeTab === 2 && (
          <motion.div key="certs" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
            <div className="flex flex-col gap-4 pt-6">
              {CERTIFICATIONS.map((c, i) => (
                <FadeUp key={c.name} delay={i * 0.09}>
                  <div className="portfolio-card flex items-center gap-4 bg-white/[0.03] border border-white/7 rounded-[14px] px-5 py-4 hover:border-[rgba(0,212,170,0.3)] hover:translate-x-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
                    <div className="w-[40px] h-[40px] rounded-[8px] bg-[rgba(0,212,170,0.1)] flex items-center justify-center text-[1.1rem] flex-shrink-0">🏅</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-semibold text-[0.9rem] text-[#f0f4ff]">{c.name}</p>
                      <p className="text-[0.78rem] text-[#7a8599] mt-[1px]">{c.issuer}</p>
                    </div>
                    <span className="font-mono text-[0.72rem] text-[#00d4aa] bg-[rgba(0,212,170,0.08)] border border-[rgba(0,212,170,0.2)] rounded-full px-3 py-1 flex-shrink-0">
                      {c.year}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
