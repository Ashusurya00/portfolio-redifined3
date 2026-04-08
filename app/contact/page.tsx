'use client';

import { useState } from 'react';
import { PERSON } from '@/lib/data';
import PageHero from '@/components/PageHero';
import { FadeUp } from '@/components/Animate';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setForm({ firstName: '', lastName: '', email: '', topic: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  };

  const socials = [
    { icon: '💼', name: 'LinkedIn', handle: 'ashutosh-s', href: PERSON.linkedin },
    { icon: '⚡', name: 'GitHub', handle: 'Ashusurya00', href: PERSON.github },
    { icon: '🐦', name: 'Twitter', handle: '@ashusurya', href: PERSON.twitter },
    { icon: '💬', name: 'Discord', handle: 'ashusurya00', href: PERSON.discord },
  ];

  return (
    <div className="max-w-[1100px] mx-auto px-6 pb-24">
      <PageHero
        label="Get in touch"
        title={<>Let's work <span className="text-[#00d4aa]">together.</span></>}
        subtitle="Open to full-time AI/ML Engineer roles, freelance projects, and exciting collaborations."
      />

      <div className="grid md:grid-cols-[1fr_340px] gap-6 pt-10">

        {/* Form */}
        <FadeUp delay={0.06}>
          <div className="bg-white/[0.03] border border-white/7 rounded-[14px] p-7">
            <h2 className="font-display font-bold text-[1.15rem] text-[#f0f4ff] mb-1">Send a message</h2>
            <p className="text-[0.855rem] text-[#7a8599] mb-6">I'll get back to you within 24 hours.</p>

            {/* Success State */}
            {status === 'success' ? (
              <div className="text-center py-10 px-4 rounded-[10px] bg-[rgba(34,197,94,0.06)] border border-[rgba(34,197,94,0.2)]">
                <div className="w-14 h-14 rounded-full bg-[rgba(34,197,94,0.15)] flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="font-display font-bold text-[#22c55e] text-[1.1rem] mb-1">Message sent successfully!</p>
                <p className="text-[0.855rem] text-[#7a8599] mb-5">I'll get back to you at <span className="text-[#f0f4ff]">{form.email || 'your email'}</span> within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-[0.8rem] text-[#00d4aa] hover:underline"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {(['firstName', 'lastName'] as const).map((field) => (
                    <div key={field} className="flex flex-col gap-[0.38rem]">
                      <label className="text-[0.78rem] font-medium text-[#7a8599]">
                        {field === 'firstName' ? 'First name' : 'Last name'}
                      </label>
                      <input
                        type="text"
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        placeholder={field === 'firstName' ? 'John' : 'Doe'}
                        required
                        disabled={status === 'loading'}
                        className="bg-white/[0.03] border border-white/8 rounded-[8px] px-[0.9rem] py-[0.65rem] text-[#f0f4ff] text-[0.875rem] font-body placeholder-[#7a8599]/60 outline-none focus:border-[rgba(0,212,170,0.4)] focus:bg-[rgba(0,212,170,0.03)] transition-all duration-200 disabled:opacity-50"
                      />
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-[0.38rem]">
                  <label className="text-[0.78rem] font-medium text-[#7a8599]">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    disabled={status === 'loading'}
                    className="bg-white/[0.03] border border-white/8 rounded-[8px] px-[0.9rem] py-[0.65rem] text-[#f0f4ff] text-[0.875rem] placeholder-[#7a8599]/60 outline-none focus:border-[rgba(0,212,170,0.4)] focus:bg-[rgba(0,212,170,0.03)] transition-all duration-200 disabled:opacity-50"
                  />
                </div>

                {/* Topic */}
                <div className="flex flex-col gap-[0.38rem]">
                  <label className="text-[0.78rem] font-medium text-[#7a8599]">Regarding</label>
                  <select
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="bg-[#0c101c] border border-white/8 rounded-[8px] px-[0.9rem] py-[0.65rem] text-[#c8d0e0] text-[0.875rem] outline-none focus:border-[rgba(0,212,170,0.4)] transition-all duration-200 disabled:opacity-50"
                  >
                    <option value="">Select a topic…</option>
                    <option>Full-time job opportunity</option>
                    <option>Freelance / contract project</option>
                    <option>Collaboration</option>
                    <option>General enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-[0.38rem]">
                  <label className="text-[0.78rem] font-medium text-[#7a8599]">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={status === 'loading'}
                    placeholder="Tell me about the role, project, or what you'd like to discuss…"
                    className="bg-white/[0.03] border border-white/8 rounded-[8px] px-[0.9rem] py-[0.65rem] text-[#f0f4ff] text-[0.875rem] placeholder-[#7a8599]/60 outline-none focus:border-[rgba(0,212,170,0.4)] focus:bg-[rgba(0,212,170,0.03)] resize-none transition-all duration-200 disabled:opacity-50"
                  />
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-[8px] bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.25)] text-[#f87171] text-[0.82rem]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    {errorMsg}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center gap-2 px-5 py-[0.78rem] rounded-[8px] bg-[#00d4aa] text-[#06080f] font-semibold text-[0.9rem] hover:bg-[#00bfa0] transition-all hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(0,212,170,0.32)] disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </FadeUp>

        {/* Sidebar */}
        <div className="flex flex-col gap-4">
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-3 bg-[rgba(0,212,170,0.05)] border border-[rgba(0,212,170,0.2)] rounded-[14px] px-5 py-4">
              <span className="w-[9px] h-[9px] bg-[#22c55e] rounded-full pulse-dot shadow-[0_0_7px_#22c55e] flex-shrink-0" />
              <div>
                <p className="font-display font-semibold text-[0.875rem] text-[#f0f4ff]">Open to opportunities</p>
                <p className="text-[0.76rem] text-[#7a8599] mt-[1px]">Full-time AI / ML Engineer roles in India</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.14}>
            <div className="bg-white/[0.03] border border-white/7 rounded-[14px] p-5">
              <h3 className="font-display font-bold text-[0.9rem] text-[#f0f4ff] mb-4">Contact details</h3>
              {[
                { icon: '📧', label: 'Email', val: PERSON.email, href: `mailto:${PERSON.email}` },
                { icon: '📍', label: 'Location', val: PERSON.location },
                { icon: '📞', label: 'Phone', val: PERSON.phone, href: `tel:${PERSON.phone.replace(/\s/g, '')}` },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3 py-[0.55rem] border-b border-white/5 last:border-none">
                  <div className="w-[30px] h-[30px] rounded-[7px] bg-[rgba(0,212,170,0.1)] flex items-center justify-center text-[0.82rem] flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-[0.67rem] text-[#7a8599] mb-[1px]">{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="text-[0.82rem] text-[#f0f4ff] font-medium hover:text-[#00d4aa] transition-colors">{item.val}</a>
                      : <p className="text-[0.82rem] text-[#f0f4ff] font-medium">{item.val}</p>}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.18}>
            <div className="bg-white/[0.03] border border-white/7 rounded-[14px] p-5">
              <h3 className="font-display font-bold text-[0.9rem] text-[#f0f4ff] mb-4">Connect</h3>
              <div className="grid grid-cols-2 gap-2">
                {socials.map(s => (
                  <a key={s.name} href={s.href} target="_blank" rel="noreferrer"
                    className="portfolio-card flex items-center gap-2 px-3 py-[0.65rem] border border-white/7 rounded-[9px] bg-white/[0.02] hover:border-[rgba(0,212,170,0.3)] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                    <span className="text-[1rem]">{s.icon}</span>
                    <div className="min-w-0">
                      <p className="text-[0.78rem] font-semibold text-[#f0f4ff]">{s.name}</p>
                      <p className="text-[0.64rem] text-[#7a8599] truncate">{s.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
