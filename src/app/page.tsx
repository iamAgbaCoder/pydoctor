import { Navbar } from "@/components/navbar";
import { TerminalDemo } from "@/components/terminal-demo";
import { FeatureGrid } from "@/components/feature-grid";
import { CommandPill } from "@/components/command-pill";
import { Github, ArrowRight, ShieldCheck, Zap, Lock, Cpu } from "lucide-react";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { Footer } from "@/components/footer";

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
                System Status: Operational
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
                { label: "Kernel Version", value: "v1.0.4", icon: Cpu },
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

        {/* CTA SECTION */}
        <section className="w-full max-w-5xl mx-auto px-6 lg:px-8 mt-48 relative text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-[2rem] p-16 md:p-24 border border-white/10 relative overflow-hidden group shadow-[0_0_80px_rgba(249,115,22,0.05)]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <ShieldCheck className="w-20 h-20 text-orange-500 mx-auto mb-10 opacity-80" />
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">
              Join the Security <br /> Revolution.
            </h2>
            <p className="text-xl text-white/40 max-w-xl mx-auto mb-12 font-mono">
              Contribute to the future of Python diagnostic tooling. Secure, fast, and community-driven.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-orange-500 text-black text-sm font-bold rounded-full hover:bg-orange-400 transition-all shadow-[0_0_30px_rgba(249,115,22,0.4)]"
              >
                Join the movement
              </motion.button>
              <a
                href="https://github.com/iamAgbaCoder/pydoctor-cli"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-10 text-sm font-bold text-white transition-all"
              >
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
