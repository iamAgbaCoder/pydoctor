"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Zap, Cpu } from "lucide-react";
import { CommandPill } from "@/components/command-pill";

export default function DocsPage() {

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <>
          <p className="text-xl text-white/40 mb-12 leading-relaxed font-mono">
            PyDoctor is a <span className="text-white font-bold italic">developer-first CLI tool</span> designed to analyze and diagnose the health of Python environments and projects.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            {[
              "outdated dependencies",
              "security vulnerabilities",
              "unused packages",
              "dependency issues",
              "environment misconfigurations"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 glass !rounded-xl">
                 <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                 <span className="text-sm text-white/60 font-mono italic">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-white/40 font-mono italic">
            PyDoctor acts as <span className="text-orange-500 font-bold uppercase tracking-widest text-xs ml-2">&quot;The Doctor for Your Python Environment.&quot;</span>
          </p>
        </>
      )
    },
    {
       id: "requirements",
       title: "System Requirements",
       content: (
         <div className="space-y-8">
            <p className="text-white/50 leading-loose">
              PyDoctor is designed to be **cross-platform, lightweight, and fast**. Ensure your environment meets the following minimum requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                 <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">Core Specs</h4>
                 <ul className="space-y-3 font-mono text-sm text-white/40">
                   <li className="flex justify-between border-b border-white/5 pb-2"><span>Python</span> <span className="text-white">3.9+</span></li>
                   <li className="flex justify-between border-b border-white/5 pb-2"><span>OS</span> <span className="text-white">macOS, Linux, Win</span></li>
                   <li className="flex justify-between border-b border-white/5 pb-2"><span>Environment</span> <span className="text-white">venv / virtualenv</span></li>
                   <li className="flex justify-between border-b border-white/5 pb-2"><span>Manager</span> <span className="text-white">pip</span></li>
                 </ul>
              </div>
              <div className="space-y-4">
                 <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">Supported Shells</h4>
                 <div className="flex flex-wrap gap-2">
                   {['bash', 'zsh', 'fish', 'PowerShell', 'CMD'].map(shell => (
                     <span key={shell} className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold text-white/40 border border-white/5">{shell}</span>
                   ))}
                 </div>
              </div>
            </div>
         </div>
       )
    },
    {
      id: "installation",
      title: "Installation",
      content: (
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
               <Zap className="w-5 h-5 text-orange-500" /> Primary Install
            </h3>
            <p className="text-white/50 leading-relaxed">The fastest way to install PyDoctor is through <span className="text-white font-bold">pip</span>. Post-installation, the command is available globally.</p>
            <CommandPill command="pip install pydoctor-cli" />
          </div>

          <div className="space-y-6 pt-8 border-t border-white/5">
            <h3 className="text-xl font-bold text-white">Recommended: pipx</h3>
            <p className="text-white/50 leading-relaxed">For an isolated global CLI installation, utilizing <span className="text-white font-bold">pipx</span> is the gold standard.</p>
            <CommandPill command="pipx install pydoctor-cli" />
          </div>

          <div className="space-y-6 pt-8 border-t border-white/5">
             <h3 className="text-xl font-bold text-white">From Source</h3>
             <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-6 py-3 border-b border-white/10 bg-white/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/30">
                  <span>GIT SOURCE</span>
                  <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                     <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                     <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>
                </div>
                <div className="p-8 font-mono text-sm space-y-4 text-white/60">
                   <div className="flex gap-4">
                     <span className="text-white/20">$</span>
                     <span>git clone https://github.com/iamAgbaCoder/pydoctor-cli.git</span>
                   </div>
                   <div className="flex gap-4">
                     <span className="text-white/20">$</span>
                     <span>cd pydoctor-cli && pip install -e .</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: "quick-start",
      title: "Quick Start",
      content: (
        <div className="space-y-8">
           <p className="text-white/50">Navigate to any Python project node and initiate a full diagnostic kernel scan.</p>
           <CommandPill command="pydoctor diagnose" />
           <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-8 space-y-4">
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-orange-500">Autonomous Report Example</h4>
              <pre className="text-xs font-mono text-white/40 leading-relaxed">
{`PyDoctor Environment Diagnosis

✔ Python Version: 3.11
✔ Virtual Environment Active
✔ Installed Packages: 124

Dependency Analysis
⚠ 4 Outdated Packages

Security Scan
✖ 1 Critical Vulnerability

Unused Dependencies
⚠ 2 Unused Packages

Diagnosis Complete`}
              </pre>
           </div>
        </div>
      )
    },
    {
      id: "env-analysis",
      title: "Environment Analysis",
      content: (
        <div className="space-y-6">
           <p className="text-white/50">Internal heuristics audit the Python runtime to verify binary integrity and environment health.</p>
           <CommandPill command="pydoctor check-env" />
           <div className="p-6 glass !rounded-2xl flex items-start gap-4">
              <Cpu className="w-5 h-5 text-orange-500 shrink-0" />
              <div className="text-xs text-white/40 font-mono leading-relaxed space-y-1">
                 <p className="text-white font-bold">CHECKS PERFORMED:</p>
                 <p>• Python version compatibility</p>
                 <p>• Active virtual environment status</p>
                 <p>• Binary PATH validity</p>
              </div>
           </div>
        </div>
      )
    },
    {
      id: "safety-protocol",
      title: "Vulnerability Scanning",
      content: (
        <div className="space-y-8">
          <p className="text-white/50">PyDoctor cross-references dependencies against global vulnerability databases (CVE/GHSA).</p>
          <div className="border border-red-500/30 bg-red-500/5 rounded-2xl p-8 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldAlert className="h-20 w-20 text-red-500" />
             </div>
             <h4 className="text-red-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Urgent: Security Integrity Check</h4>
             <p className="text-sm text-red-100/60 font-mono leading-relaxed mb-6">
                Critical vulnerabilities are automatically tiered into: <span className="text-red-400 font-bold underline">LOW</span> | <span className="text-red-400 font-bold underline">MEDIUM</span> | <span className="text-red-400 font-bold underline">HIGH</span> | <span className="text-red-400 font-bold underline">CRITICAL</span>.
             </p>
             <CommandPill command="pydoctor scan-security" />
          </div>
        </div>
      )
    },
    {
      id: "reports",
      title: "Reporting Engine",
      content: (
        <div className="space-y-6">
           <p className="text-white/50">Generate machine-readable assets for CI/CD pipelines and security audits.</p>
           <div className="grid sm:grid-cols-3 gap-4">
             {['JSON', 'Markdown', 'HTML'].map(format => (
               <div key={format} className="p-6 glass text-center font-bold text-[10px] uppercase tracking-widest text-white/40 hover:text-orange-500 hover:border-orange-500/30 transition-all">
                 {format}
               </div>
             ))}
           </div>
           <CommandPill command="pydoctor report --format json" />
        </div>
      )
    }
  ];

  return (
    <div className="flex w-full">
      <div className="flex-1 w-full lg:max-w-4xl xl:max-w-5xl pr-0 lg:pr-10 xl:pr-16 pb-32">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
             The <span className="text-orange-500 italic">Documentation</span>
          </h1>
          <p className="text-xl text-white/30 mb-20 max-w-2xl font-mono leading-relaxed italic">
             Technical specifications for the PyDoctor diagnostic kernel, automation hooks, and environment security protocols.
          </p>

          <div className="space-y-32">
            {sections.map((section, idx) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                 <div className="flex items-center gap-6 mb-10">
                    <span className="text-[10px] font-mono font-bold text-orange-500 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                      0{idx + 1}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                      {section.title}
                    </h2>
                 </div>
                 <div className="pl-0 md:pl-16">
                    {section.content}
                 </div>
              </section>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="hidden xl:block w-72 shrink-0">
        <div className="sticky top-32 pt-4">
          <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-10">
            MODULE INDEX
          </h5>
          <ul className="space-y-6 text-[11px] font-mono">
            {sections.map((section) => (
              <li key={section.id}>
                <a 
                  href={`#${section.id}`} 
                  className="group flex items-center text-white/30 hover:text-white transition-all tracking-widest"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10 mr-4 group-hover:bg-orange-500 transition-colors"></span>
                  {section.title.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

