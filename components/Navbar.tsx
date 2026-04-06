'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 h-[68px] flex items-center justify-between px-6 md:px-8 transition-all duration-300
        ${scrolled
          ? 'bg-bgMain/90 dark:bg-bgMain/90 backdrop-blur-2xl border-b border-white/8'
          : 'bg-bgMain/70 dark:bg-bgMain/70 backdrop-blur-xl border-b border-white/4'
        }`}>

        {/* Logo */}
        <Link href="/" className="font-display font-extrabold text-[1.1rem] tracking-tight text-textMain hover:text-white transition-colors">
          Ashutosh<span className="text-accent">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map(l => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-[0.875rem] font-medium px-[0.82rem] py-[0.42rem] rounded-[8px] transition-all duration-200
                    ${active
                      ? 'text-accent bg-[rgba(var(--accent-rgb),0.09)]'
                      : 'text-textMuted hover:text-textMain hover:bg-white/6'
                    }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'calm' : theme === 'calm' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-[8px] border border-themeBorder bg-cardBg hover:border-accent/35 flex items-center justify-center text-base transition-all duration-200 hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌊' : theme === 'calm' ? '☀️' : '🌙'}
            </button>
          )}

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-[8px] border border-white/8 bg-white/4"
            aria-label="Menu"
          >
            <span className={`block w-[18px] h-[2px] bg-[#f0f4ff] rounded transition-all duration-300 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-[18px] h-[2px] bg-[#f0f4ff] rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[18px] h-[2px] bg-[#f0f4ff] rounded transition-all duration-300 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="fixed top-[68px] left-0 w-full z-40 bg-bgMain/97 backdrop-blur-2xl border-b border-white/6 flex flex-col px-6 py-3 gap-1">
          {LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-medium px-4 py-[0.65rem] rounded-[8px] transition-colors duration-200
                ${pathname === l.href
                  ? 'text-accent bg-[rgba(var(--accent-rgb),0.08)]'
                  : 'text-textMuted hover:text-textMain hover:bg-white/5'
                }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
