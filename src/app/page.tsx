import { Navbar } from "@/components/navbar";
import { TerminalDemo } from "@/components/terminal-demo";
import { FeatureGrid } from "@/components/feature-grid";
import { CommandPill } from "@/components/command-pill";
import { Github, ArrowRight, ShieldCheck, Zap, Lock, Cpu } from "lucide-react";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center min-h-screen pt-24 pb-32">
        {/* HERO SECTION */}
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-32 relative">
          <div className="grid lg:grid-cols-1 gap-16 items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-10"
            >
              <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-orange-400">
                <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 mr-2 dot-blink"></span>
                System Status: Operational (v0.1.0)
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9] text-center max-w-5xl">
                The Autonomous <br />
                <span className="italic text-orange-500">Diagnostic</span> Engine.
              </h1>
              
              <p className="text-lg md:text-xl text-white/40 max-w-2xl leading-relaxed font-mono">
                PyDoctor orchestrates enterprise-grade environment analysis and security auditing to maintain the integrity of your Python clusters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
                 <CommandPill command="pip install pydoctor-cli" />
                 
                 <Link
                  href="/docs"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-orange-500/30 group shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                >
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform text-orange-500" />
                </Link>
              </div>
            </motion.div>
 
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full flex items-center justify-center py-12"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-orange-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
              <TerminalDemo />
            </motion.div>
          </div>
        </section>
 
        {/* METRICS STACK */}
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
                { label: "Execution speed", value: "<15ms", icon: Zap },
                { label: "Security Heuristics", value: "840+", icon: Lock },
                { label: "Core Integrity", value: "99.9%", icon: ShieldCheck },
                { label: "Kernel Version", value: "v0.1.0", icon: Cpu },
            ].map((stat, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center md:items-start space-y-2 glass p-6 rounded-2xl border-white/5"
                >
                    <stat.icon className="h-4 w-4 text-orange-500/50 mb-2" />
                    <div className="text-2xl font-bold tracking-tighter text-white">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{stat.label}</div>
                </motion.div>
            ))}
        </section>

        {/* MARQUEE SECTION */}
        <Marquee />

        {/* SAFETY DEEP DIVE - SECTION 2 */}
        <section id="safety" className="py-32 px-6 w-full max-w-7xl mx-auto">
          <div className="glass p-8 md:p-20 border border-white/5 flex flex-col lg:flex-row items-center gap-16 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-500 rounded-lg text-[10px] font-black tracking-widest uppercase mb-8 border border-red-500/20">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />{" "}
                SAFETY PROTOCOL ACTIVE
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight text-white uppercase italic">
                SAFETY FIRST.
                <br />
                SECOND, AND THIRD.
              </h2>
              <p className="text-white/40 text-lg mb-10 leading-relaxed font-mono italic">
                The terminal shouldn&apos;t be a danger zone. PyDoctor categorizes
                every command by risk level. High-risk operations like{" "}
                <code className="text-red-400 bg-red-400/5 px-2 py-0.5 rounded border border-red-500/10 font-mono">
                  pip uninstall
                </code>{" "}
                or
                <code className="text-red-400 bg-red-400/5 px-2 py-0.5 rounded border border-red-500/10 ml-2 font-mono">
                  rm -rf
                </code>{" "}
                require manual confirmation to proceed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Zero auto-execution",
                  "Dangerous flag analysis",
                  "PID Target detection",
                  "Permission safeguarding",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-white/60 font-mono text-xs"
                  >
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />{" "}
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <div className="w-full max-w-sm aspect-square bg-black/40 rounded-[2.5rem] border border-white/5 p-12 flex items-center justify-center relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000" />
                <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-9xl select-none italic">
                  AI
                </div>
                <motion.div
                  className="w-full font-mono text-[10px] text-orange-500/40 space-y-2 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <p className="">{">"} analyzing binary integrity...</p>
                  <p className="">{">"} cross-referencing GHSA-database...</p>
                  <p className="text-green-500/40">{">"} 0 vulnerabilities found</p>
                  <p className="text-orange-500">{">"} Risk Level: SEVERE (sudo detected)</p>
                  <p className="bg-orange-500/20 px-2 py-1 inline-block animate-pulse">AWAITING USER CONFIRMATION...</p>
                </motion.div>
                <div className="absolute bottom-10 right-10 text-6xl opacity-20 filter grayscale group-hover:grayscale-0 transition-all duration-700">🛡️</div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 pt-48">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center w-full max-w-3xl mx-auto mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              Advanced Tooling <br /> for <span className="text-orange-500">Infrastructure</span> Health.
            </h2>
            <p className="text-lg text-white/40 font-mono">
              PyDoctor leverages proprietary scanning algorithms to ensure your environment remains immutable and secure against emerging threats.
            </p>
          </motion.div>
          
          <FeatureGrid />
        </section>

        {/* COMMUNITY SECTION - SECTION 1 */}
        <section className="py-48 px-6 w-full max-w-4xl mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/5 blur-[120px] rounded-full -z-10" />
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white">
            Built by developers.
            <br />
            <span className="text-white/30 italic underline decoration-orange-500/30">
              For developers.
            </span>
          </h2>
          <p className="text-white/40 text-lg mb-12 leading-relaxed font-mono italic max-w-2xl mx-auto">
            PyDoctor is 100% open source and community-driven. We believe the
            future of the terminal is open, safe, and powered by collective
            intelligence. Join thousands of engineers building a safer shell.
          </p>
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-wrap gap-8 items-center justify-center">
              <a
                href="https://github.com/iamAgbaCoder/pydoctor-cli"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white transition-colors border border-white/10">
                  <Github className="w-6 h-6 text-white group-hover:text-black" />
                </div>
              </a>
              <div className="h-10 w-px bg-white/10 hidden md:block" />
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[#050505] bg-white/10 overflow-hidden"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?u=${i + 10}`}
                      alt="contributor"
                      width={40}
                      height={40}
                      className="w-full h-full grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-crosshair object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-orange-500 flex items-center justify-center text-[10px] font-black text-black">
                  +24
                </div>
              </div>
            </div>

            <Link
              href="https://github.com/iamAgbaCoder/pydoctor-cli"
              className="px-10 py-5 glass !rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all hover:scale-105 border-white/10 hover:border-orange-500/50"
            >
              Join the movement
            </Link>
          </div>
        </section>

        {/* FINAL CTA SECTION - SECTION 3 */}
        <section className="py-48 px-6 text-center relative w-full overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-orange-500/20 blur-[100px] -z-10" />
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <h2 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter text-white leading-tight">
              Upgrade your
              <br />
              shell experience.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16">
              <button
                className="w-full md:w-auto px-16 py-6 bg-white text-black font-black rounded-2xl hover:bg-orange-500 hover:text-white transition-all text-xl shadow-[0_20px_40px_rgba(255,255,255,0.05)] active:scale-95 uppercase tracking-tighter"
              >
                INSTALL PYDOCTOR
              </button>
              <Link
                href="/docs"
                className="w-full md:w-auto px-12 py-6 glass text-white font-bold rounded-2xl border border-white/10 hover:bg-white/5 transition-all text-xl flex items-center justify-center uppercase tracking-tighter"
              >
                VIEW DOCUMENTATION
              </Link>
            </div>
            <p className="mt-20 text-white/20 font-mono text-[10px] tracking-[0.5em] uppercase font-bold">
              Open Source & Free
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
