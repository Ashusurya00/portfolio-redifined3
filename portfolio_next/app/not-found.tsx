import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <p className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-[#00d4aa] mb-3">404</p>
      <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3rem)] tracking-tight text-[#f0f4ff] mb-3">
        Page not found
      </h1>
      <p className="text-[#7a8599] text-[1rem] mb-8 max-w-[380px]">
        This page doesn't exist. Head back home and explore the portfolio.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-[8px] bg-[#00d4aa] text-[#06080f] font-semibold text-[0.875rem] hover:bg-[#00bfa0] transition-all hover:-translate-y-[2px]"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
