import type { Metadata } from 'next';
import { Inter, DM_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
});

export const metadata: Metadata = {
  title: 'PyDoctor - The Autonomous Diagnostic Engine',
  description: 'Enterprise-grade environment analysis, security auditing, and health orchestration for Python ecosystems.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmMono.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 overflow-x-hidden font-mono antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
            <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
                <div className="absolute inset-0 grid-bg"></div>
                <div className="absolute inset-0 bg-dot-grid"></div>
            </div>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
