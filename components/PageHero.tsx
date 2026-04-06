import { FadeUp } from './Animate';

interface Props {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: Props) {
  return (
    <div className="border-b border-white/6 pb-10 pt-16">
      <FadeUp>
        <span className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-[#00d4aa] mb-3 block">
          {label}
        </span>
      </FadeUp>
      <FadeUp delay={0.08}>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.2rem)] leading-[1.08] tracking-[-0.03em] text-[#f0f4ff] mb-3">
          {title}
        </h1>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.16}>
          <p className="text-[#7a8599] text-[1rem] max-w-[540px]">{subtitle}</p>
        </FadeUp>
      )}
    </div>
  );
}
