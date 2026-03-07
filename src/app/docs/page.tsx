"use client";

import { motion } from "framer-motion";
import { Copy, CheckCircle2, Info, ShieldAlert } from "lucide-react";
import { useState } from "react";
import { CommandPill } from "@/components/command-pill";

export default function DocsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="flex w-full">
      {/* Center documentation column */}
      <div className="flex-1 w-full lg:max-w-4xl xl:max-w-5xl pr-0 lg:pr-10 xl:pr-16 pb-32">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-5xl font-bold tracking-tighter text-white mb-4">
            Autonomous <span className="text-orange-500 italic">Orchestration</span>
          </h1>
          <p className="text-xl text-white/40 mb-12 leading-relaxed font-mono">
            Technical specifications for the PyDoctor diagnostic kernel and environment security protocols.
          </p>

          <section id="installation" className="mt-16 mb-24">
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-8 border-b border-white/5 pb-4">
              01. Binary Distribution
            </h2>
            <p className="text-white/50 mb-8 leading-7 font-mono">
              PyDoctor is distributed as a high-performance binary via the Python Package Index. Deploy to your local node or enterprise cluster.
            </p>
            
            <div className="mb-10">
               <CommandPill command="pip install pydoctor-cli" />
            </div>

            <div className="bg-orange-500/5 border border-orange-500/20 p-6 rounded-2xl mb-8 flex items-start">
              <Info className="h-5 w-5 text-orange-500 mr-4 shrink-0 translate-y-0.5" />
              <div className="text-sm text-white/50 font-mono leading-relaxed">
                <strong className="text-white block mb-1 uppercase tracking-widest text-[10px]">Optimization Protocol:</strong> 
                For global orchestration across multiple containers, utilize the persistent binary installation via <code className="text-orange-300">pipx</code> for isolated runtime execution.
              </div>
            </div>
          </section>

          <section id="safety-protocol" className="mb-24">
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-8 border-b border-white/5 pb-4 flex items-center">
               <span className="w-2 h-2 rounded-full bg-red-500 mr-4 dot-blink"></span>
               02. Safety & Risk Protocol
            </h2>
            <p className="text-white/50 mb-8 leading-7 font-mono">
              Automated heuristics for identifying high-risk vulnerabilities and environment drift.
            </p>

            <div className="border border-red-500/30 bg-red-500/5 rounded-2xl p-8 mb-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-20">
                  <ShieldAlert className="h-12 w-12 text-red-500" />
               </div>
               <h3 className="text-red-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Urgent: Security Integrity Check</h3>
               <p className="text-sm text-red-100/60 font-mono leading-relaxed mb-6">
                  Detected drift in the <code className="bg-red-500/20 px-1 rounded text-red-200">env-ptr</code> pointer? PyDoctor&apos;s kernel will automatically halt execution if a critical vulnerability is detected during an autonomous scan.
               </p>
               <div className="font-mono text-[12px] text-red-400 bg-black/40 p-4 rounded-lg border border-red-500/20">
                  $ pydoctor scan --security-gate=strict
               </div>
            </div>
          </section>

          <section id="cli-commands" className="mb-24">
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-10 border-b border-white/5 pb-4">
              03. Command Architecture
            </h2>
            
            <div className="grid gap-6">
              {[
                { cmd: "pydoctor scan", desc: "Execute full-stack diagnostic heuristics on the current node." },
                { cmd: "pydoctor check-env", desc: "Kernel-level audit of the active Python binary and PATH entropy." },
                { cmd: "pydoctor check-deps", desc: "Validate symbolic links and version constraints within the dependency graph." },
                { cmd: "pydoctor outdated", desc: "Sync with upstream registries to calculate version-drift metrics." },
                { cmd: "pydoctor report", desc: "Serialize diagnostic data into high-contrast JSON format." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-orange-500/20 transition-all flex items-center justify-between group">
                  <div className="space-y-2">
                    <code className="text-orange-500 font-bold font-mono text-sm uppercase tracking-tight">
                      {item.cmd}
                    </code>
                    <p className="text-sm text-white/30 font-mono">{item.desc}</p>
                  </div>
                  <button 
                      onClick={() => handleCopy(item.cmd)}
                      className="text-white/20 hover:text-white transition-colors p-2 glass rounded-full"
                    >
                      {copied === item.cmd ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                </div>
              ))}
            </div>
          </section>

        </motion.div>
      </div>

      {/* Right Table of Contents */}
      <div className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 pt-4">
          <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 mb-6">
            Module Index
          </h5>
          <ul className="space-y-4 text-xs font-mono">
            <li>
              <a href="#installation" className="text-orange-500 transition-colors font-bold flex items-center">
                <span className="w-1 h-1 bg-orange-500 rounded-full mr-3"></span>
                Binary Distribution
              </a>
            </li>
            <li>
              <a href="#safety-protocol" className="text-white/30 hover:text-white transition-colors flex items-center">
                <span className="w-1 h-1 bg-white/20 rounded-full mr-3"></span>
                Safety Protocol
              </a>
            </li>
            <li>
              <a href="#cli-commands" className="text-white/30 hover:text-white transition-colors flex items-center">
                 <span className="w-1 h-1 bg-white/20 rounded-full mr-3"></span>
                 Command Arch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
