'use client';

import { PERSON, EXPERIENCE, SKILLS, CERTIFICATIONS, ACHIEVEMENTS, PROJECTS } from '@/lib/data';
import PageHero from '@/components/PageHero';
import { FadeUp } from '@/components/Animate';

const LEVEL_STYLE: Record<string, string> = {
  expert:     'bg-[rgba(0,212,170,0.08)] border-[rgba(0,212,170,0.28)] text-[#00d4aa]',
  proficient: 'bg-white/[0.04] border-white/9 text-[#c8d0e0]',
  familiar:   'bg-white/[0.02] border-white/5 text-[#7a8599]',
};

export default function ResumePage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 pb-24">
      <PageHero
        label="Curriculum Vitae"
        title={<>Resume <span className="text-[#00d4aa]">— 2025</span></>}
        subtitle="AI Engineer & Data Scientist · Fresher · Open to full-time roles across India"
      />

      <div className="grid md:grid-cols-[240px_1fr] gap-8 pt-10">

        {/* ── SIDEBAR ── */}
        <aside className="md:sticky md:top-[84px] self-start">
          <FadeUp>
            {/* Avatar placeholder */}
            <div className="w-full aspect-square rounded-[14px] bg-gradient-to-br from-[rgba(0,212,170,0.15)] to-[rgba(56,189,248,0.08)] border border-white/8 flex items-center justify-center text-[4rem] mb-5 select-none">
              👨‍💻
            </div>

            <p className="font-display font-extrabold text-[1.15rem] text-[#f0f4ff] leading-[1.2] mb-1">{PERSON.name}</p>
            <p className="text-[0.8rem] text-[#00d4aa] font-medium mb-4">AI Engineer · Data Scientist · GenAI Builder</p>

            <div className="flex flex-col gap-3 mb-5 text-[0.8rem]">
              {[
                { icon: '📍', val: PERSON.location },
                { icon: '📧', val: PERSON.email, href: `mailto:${PERSON.email}` },
                { icon: '📞', val: PERSON.phone, href: `tel:${PERSON.phone.replace(/\s/g,'')}` },
                { icon: '💼', val: 'LinkedIn', href: PERSON.linkedin },
                { icon: '⚡', val: 'GitHub', href: PERSON.github },
                { icon: '🐦', val: 'Twitter', href: PERSON.twitter },
                { icon: '💬', val: 'Discord', href: PERSON.discord },
              ].map(item => (
                <div key={item.val} className="flex items-center gap-2 text-[#7a8599]">
                  <span className="text-[0.9rem]">{item.icon}</span>
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noreferrer" className="hover:text-[#00d4aa] transition-colors truncate">{item.val}</a>
                    : <span>{item.val}</span>}
                </div>
              ))}
            </div>

            <a
              href="#"
              download
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-[0.68rem] rounded-[8px] bg-[#00d4aa] text-[#06080f] font-semibold text-[0.875rem] hover:bg-[#00bfa0] transition-all mb-2 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,212,170,0.3)]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
            </a>

            <hr className="border-white/6 my-5" />

            <div className="mb-4">
              <p className="font-mono text-[0.68rem] text-[#7a8599] tracking-[0.1em] uppercase mb-2">Availability</p>
              <span className="inline-flex items-center gap-2 text-[0.75rem] text-[#22c55e] bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.25)] rounded-full px-3 py-1">
                <span className="w-[6px] h-[6px] bg-[#22c55e] rounded-full pulse-dot shadow-[0_0_5px_#22c55e]" />
                Open to work
              </span>
            </div>

            <div>
              <p className="font-mono text-[0.68rem] text-[#7a8599] tracking-[0.1em] uppercase mb-2">Education</p>
              <p className="text-[0.82rem] text-[#c8d0e0] leading-[1.6]">
                <strong className="text-[#f0f4ff] font-display font-semibold">B.Tech CSE</strong><br />
                MRIIT, Hyderabad<br />
                <span className="text-[#7a8599]">2021 – 2025</span>
              </p>
            </div>
          </FadeUp>
        </aside>

        {/* ── MAIN BODY ── */}
        <div className="flex flex-col gap-5">

          {/* Summary */}
          <FadeUp delay={0.06}>
            <div className="bg-white/[0.03] border border-white/7 rounded-[14px] p-6">
              <h3 className="font-display font-bold text-[0.95rem] text-[#f0f4ff] mb-3 flex items-center gap-2 after:content-[''] after:flex-1 after:h-[1px] after:bg-white/6">
                Professional Summary
              </h3>
              <p className="text-[0.88rem] text-[#c8d0e0] leading-[1.78]">
                Fresher <strong className="text-[#00d4aa]">AI Engineer & Data Scientist</strong> specialising in{' '}
                <strong className="text-[#00d4aa]">Generative AI</strong>, RAG pipelines, and Agentic AI systems. Built
                production-ready AI applications including a RAG chatbot achieving{' '}
                <strong className="text-[#00d4aa]">90%+ retrieval accuracy</strong> (RAGAS-evaluated) and a 5-agent
                automation system reducing processing time by <strong className="text-[#00d4aa]">65%</strong>. Experienced
                in LangChain, LlamaIndex, LangSmith observability, and full MLOps deployment.
              </p>
            </div>
          </FadeUp>

          {/* Skills */}
          <FadeUp delay={0.1}>
            <div className="bg-white/[0.03] border border-white/7 rounded-[14px] p-6">
              <h3 className="font-display font-bold text-[0.95rem] text-[#f0f4ff] mb-4 flex items-center gap-2 after:content-[''] after:flex-1 after:h-[1px] after:bg-white/6">
                Technical Skills
              </h3>
              <div className="flex flex-col gap-4">
                {SKILLS.map(cat => (
                  <div key={cat.category}>
                    <p className="font-mono text-[0.68rem] text-[#7a8599] tracking-[0.09em] uppercase mb-2">{cat.category}</p>
                    <div className="flex flex-wrap gap-[0.35rem]">
                      {cat.items.map(s => (
                        <span key={s.name} className={`font-mono text-[0.73rem] px-[0.65rem] py-[0.25rem] rounded-[6px] border ${LEVEL_STYLE[s.level]}`}>
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Experience */}
          <FadeUp delay={0.14}>
            <div className="bg-white/[0.03] border border-white/7 rounded-[14px] p-6">
              <h3 className="font-display font-bold text-[0.95rem] text-[#f0f4ff] mb-4 flex items-center gap-2 after:content-[''] after:flex-1 after:h-[1px] after:bg-white/6">
                Internship Experience
              </h3>
              {EXPERIENCE.map((e, i) => (
                <div key={e.company} className={`pl-4 border-l-2 border-[#00d4aa] ${i < EXPERIENCE.length - 1 ? 'mb-6' : ''}`}>
                  <p className="font-display font-bold text-[0.95rem] text-[#f0f4ff]">{e.role}</p>
                  <p className="text-[0.8rem] text-[#00d4aa] mt-[1px] mb-3">{e.company}</p>
                  <ul className="flex flex-col gap-2">
                    {e.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2 text-[0.845rem] text-[#7a8599] leading-[1.65]">
                        <span className="text-[#00d4aa] text-[0.7rem] flex-shrink-0 mt-[0.2em]">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Projects */}
          <FadeUp delay={0.18}>
            <div className="bg-white/[0.03] border border-white/7 rounded-[14px] p-6">
              <h3 className="font-display font-bold text-[0.95rem] text-[#f0f4ff] mb-4 flex items-center gap-2 after:content-[''] after:flex-1 after:h-[1px] after:bg-white/6">
                Key Projects
              </h3>
              {PROJECTS.filter(p => p.featured).map((p, i) => (
                <div key={p.slug} className={`flex items-start justify-between gap-4 py-3 ${i < 2 ? 'border-b border-white/5' : ''}`}>
                  <div>
                    <p className="font-display font-semibold text-[0.9rem] text-[#f0f4ff]">{p.title}</p>
                    <p className="text-[0.8rem] text-[#7a8599] mt-1 leading-[1.6]">
                      {p.stack.slice(0,4).join(' · ')}
                      {p.metrics.length > 0 && ` · ${p.metrics[0].val} ${p.metrics[0].label}`}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-[7px] bg-[#00d4aa] text-[#06080f] font-semibold text-[0.75rem] hover:bg-[#00bfa0] transition-colors">
                        Demo
                      </a>
                    )}
                    <a href={p.github} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-[7px] bg-white/5 border border-white/8 text-[#c8d0e0] text-[0.75rem] hover:bg-white/10 transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Certifications */}
          <FadeUp delay={0.22}>
            <div className="bg-white/[0.03] border border-white/7 rounded-[14px] p-6">
              <h3 className="font-display font-bold text-[0.95rem] text-[#f0f4ff] mb-4 flex items-center gap-2 after:content-[''] after:flex-1 after:h-[1px] after:bg-white/6">
                Certifications
              </h3>
              {CERTIFICATIONS.map(c => (
                <div key={c.name} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-none last:pb-0">
                  <span className="w-[8px] h-[8px] bg-[#00d4aa] rounded-full flex-shrink-0" />
                  <span className="text-[0.855rem] text-[#c8d0e0] flex-1">{c.name} — {c.issuer}</span>
                  <span className="font-mono text-[0.72rem] text-[#00d4aa]">{c.year}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Achievements */}
          <FadeUp delay={0.26}>
            <div className="bg-white/[0.03] border border-white/7 rounded-[14px] p-6">
              <h3 className="font-display font-bold text-[0.95rem] text-[#f0f4ff] mb-4 flex items-center gap-2 after:content-[''] after:flex-1 after:h-[1px] after:bg-white/6">
                Achievements
              </h3>
              {ACHIEVEMENTS.map(a => (
                <div key={a.text} className="flex items-start gap-3 py-2.5 border-b border-white/5 last:border-none">
                  <span className="text-[1.05rem] flex-shrink-0">{a.icon}</span>
                  <span className="text-[0.855rem] text-[#c8d0e0] leading-[1.6]">{a.text}</span>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </div>
  );
}
