import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Ashutosh Suryawanshi | AI Engineer',
  description: 'AI Engineer specialising in Generative AI, RAG Systems, and LLM Applications. Built production-ready chatbots, multi-agent systems, and ML pipelines.',
  keywords: ['AI Engineer', 'Generative AI', 'RAG', 'LLM', 'Machine Learning', 'Data Science'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="as-theme">
          <div className="relative min-h-screen bg-[#06080f] dark:bg-[#06080f] text-[#f0f4ff] dark:text-[#f0f4ff] transition-colors duration-300 grid-bg">
            <Navbar />
            <main className="relative z-10 pt-[68px]">{children}</main>
            <footer className="relative z-10 text-center py-8 border-t border-white/5 text-sm text-[#7a8599]">
              Built by{' '}
              <a href="mailto:ashusurya00@gmail.com" className="text-[#00d4aa] hover:underline">
                Ashutosh Suryawanshi
              </a>{' '}
              · Hyderabad, India · 2025
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
