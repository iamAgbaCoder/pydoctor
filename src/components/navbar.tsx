"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-6xl">
      <header className="glass !rounded-2xl md:!rounded-full px-4 md:px-8 py-3 flex items-center justify-between shadow-2xl border-white/5 bg-black/40 backdrop-blur-2xl transition-all duration-300">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link href="/" className="flex items-center space-x-3 group">
            <Logo />
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

        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
          <div className="hidden lg:flex items-center gap-4">
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

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/60 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-[24px] stroke-[1.5]" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[calc(100%+12px)] left-0 w-full glass !rounded-3xl p-8 border-white/10 shadow-3xl bg-black/90 backdrop-blur-3xl lg:hidden z-[99]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-[8rem] font-black tracking-tighter select-none">MENU</div>
            
            <div className="relative z-10 space-y-10">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">DOCUMENTATION</span>
              
              <nav className="flex flex-col gap-8">
                <Link
                  href="/#features"
                  className="text-2xl font-bold tracking-tighter text-white/40 hover:text-white transition-colors uppercase"
                >
                  Features
                </Link>
                <Link
                  href="/docs"
                  className="text-2xl font-bold tracking-tighter text-white/40 hover:text-white transition-colors uppercase"
                >
                  Workflow
                </Link>
                <Link
                  href="/docs#safety-protocol"
                  className="text-2xl font-bold tracking-tighter text-white/40 hover:text-white transition-colors uppercase"
                >
                  Safety
                </Link>
                <Link
                  href="/docs"
                  className={`text-2xl font-bold tracking-tighter transition-colors uppercase ${
                    pathname?.startsWith("/docs") ? "text-orange-500" : "text-white/40 hover:text-white"
                  }`}
                >
                  Docs
                </Link>
              </nav>

              <div className="h-px bg-white/10 w-full" />

              <div className="flex flex-col gap-4">
                <Link
                  href="/docs"
                  className="w-full h-16 inline-flex items-center justify-center rounded-2xl bg-orange-500 text-[13px] uppercase tracking-[0.25em] font-black text-black transition-all hover:bg-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.3)] active:scale-95"
                >
                  Install CLI
                </Link>
                <a
                  href="https://github.com/iamAgbaCoder/pydoctor-cli"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full h-12 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-white transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Star on Github
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

