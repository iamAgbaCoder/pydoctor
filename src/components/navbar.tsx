"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Github } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-6xl">
      <header className="glass !rounded-full px-4 md:px-8 py-3 flex items-center justify-between shadow-2xl border-white/5 bg-black/40 backdrop-blur-2xl">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 transition-all duration-300">
              <Terminal className="h-5 w-5 text-orange-500" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">PyDoctor</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/docs"
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-white transition-colors"
            >
              Workflow
            </Link>
            <Link
              href="/docs#safety-protocol"
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-white transition-colors"
            >
              Safety
            </Link>
            <Link
               href="/docs"
               className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-colors ${
                 pathname?.startsWith("/docs") ? "text-orange-500" : "text-white/40 hover:text-white"
               }`}
             >
               Docs
             </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <a
            href="https://github.com/iamAgbaCoder/pydoctor-cli"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-white transition-colors px-4 py-2"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">Star Site</span>
          </a>
          
          <Link
            href="/docs"
            className="h-11 inline-flex items-center justify-center rounded-full bg-white px-6 text-[11px] uppercase tracking-[0.2em] font-black text-black transition-all hover:bg-orange-500 hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
          >
            Install CLI
          </Link>
        </div>
      </header>
    </div>
  );
};
