'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/lib/data';
import PageHero from '@/components/PageHero';
import { StaggerContainer, StaggerItem } from '@/components/Animate';

function StackChip({ label }: { label: string }) {
  return (
    <span className="font-mono text-[0.66rem] px-[0.55rem] py-[0.22rem] rounded-[5px] bg-white/5 border border-white/8 text-[#7a8599]">
      {label}
    </span>
  );
}

function MetricBadge({ val, label }: { val: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display font-bold text-[0.95rem] text-[#00d4aa]">{val}</span>
      <span className="text-[0.64rem] text-[#7a8599] mt-[1px]">{label}</span>
    </div>
  );
}

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-[0.32rem] font-mono text-[0.67rem] text-[#22c55e] bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.25)] rounded-full px-[0.65rem] py-[0.2rem]">
      <span className="w-[5px] h-[5px] bg-[#22c55e] rounded-full shadow-[0_0_5px_#22c55e] pulse-dot" />
      Live
    </span>
  );
}

function ProjectCard({ project, featured }: { project: typeof PROJECTS[0]; featured?: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      id={project.slug}
      className={`portfolio-card flex flex-col bg-white/[0.03] border border-white/7 rounded-[14px] overflow-hidden
        ${hover ? 'border-[rgba(0,212,170,0.35)] shadow-[0_20px_48px_rgba(0,0,0,0.55)]' : ''}
      `}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      {/* Header */}
      <div className="px-6 pt-5 pb-0 flex items-start justify-between gap-3">
        <div className="w-[44px] h-[44px] rounded-[10px] flex items-center justify-center text-[1.4rem] flex-shrink-0"
          style={{ background: `${project.accent}18` }}>
          {project.icon}
        </div>
        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="font-mono text-[0.66rem] text-[#00d4aa] bg-[rgba(0,212,170,0.1)] border border-[rgba(0,212,170,0.22)] rounded-full px-[0.62rem] py-[0.2rem]">
              Featured
            </span>
          )}
          {project.demo && <LiveBadge />}
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-4 flex-1">
        <h2 className="font-display font-bold text-[1.08rem] text-[#f0f4ff] tracking-[-0.01em] mb-2">{project.title}</h2>
        <p className="text-[0.855rem] text-[#7a8599] leading-[1.72] mb-3">{project.description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-[0.35rem] mb-3">
          {project.stack.map(s => <StackChip key={s} label={s} />)}
        </div>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <div className="flex gap-4 px-3 py-3 bg-[rgba(0,212,170,0.04)] border border-[rgba(0,212,170,0.11)] rounded-[8px] mb-3">
            {project.metrics.map(m => <MetricBadge key={m.label} {...m} />)}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 pb-5 flex gap-2 border-t border-white/5 pt-4">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-[0.58rem] rounded-[8px] bg-[#00d4aa] text-[#06080f] font-semibold text-[0.8rem] hover:bg-[#00bfa0] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_14px_rgba(0,212,170,0.3)]">
            Live Demo ↗
          </a>
        )}
        <a href={project.github} target="_blank" rel="noreferrer"
          className={`${project.demo ? '' : 'flex-1'} inline-flex items-center justify-center gap-2 px-4 py-[0.58rem] rounded-[8px] bg-white/4 border border-white/8 text-[#c8d0e0] text-[0.8rem] font-medium hover:bg-white/8 hover:border-white/14 transition-all duration-200 hover:-translate-y-[1px]`}>
          GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const featured = PROJECTS.filter(p => p.featured);
  const others   = PROJECTS.filter(p => !p.featured);

  return (
    <div className="max-w-[1100px] mx-auto px-6 pb-20">
      <PageHero
        label="Portfolio"
        title={<>AI Projects <span className="text-[#00d4aa]">that ship.</span></>}
        subtitle="Production-grade AI systems with real evaluation metrics, live demos, and open-source code."
      />

      {/* Featured */}
      <section className="pt-10 pb-4">
        <span className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-[#00d4aa] mb-4 block">
          Featured · {featured.length} projects
        </span>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(p => (
            <StaggerItem key={p.slug}>
              <ProjectCard project={p} featured />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Other projects */}
      {others.length > 0 && (
        <section className="pt-10">
          <span className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-[#00d4aa] mb-4 block">
            Other Projects
          </span>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map(p => (
              <StaggerItem key={p.slug}>
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}
    </div>
  );
}
