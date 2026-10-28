"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Zap, Cpu, Activity, FileBox } from "lucide-react";
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
              "security vulnerabilities (OSV)",
              "dependency conflicts",
              "outdated dependencies",
              "unused packages",
              "environment misconfigurations",
              "exposed secrets",
              "CI/CD workflow risks",
              "automated fixes"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 glass !rounded-xl border border-white/5 hover:border-orange-500/30 transition-all hover:bg-white/5 group">
                 <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] group-hover:scale-150 transition-transform"></div>
                 <span className="text-sm text-white/60 font-mono italic group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-white/50 font-mono mb-8">
            This page is an overview. The full guide, CLI reference and troubleshooting live at{" "}
            <a href="https://pydoctor-docs.thally.app" className="text-orange-500 underline underline-offset-4">pydoctor-docs.thally.app</a>.
          </p>
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
                   <li className="flex justify-between border-b border-white/5 pb-2"><span>Python</span> <span className="text-white">3.10+</span></li>
                   <li className="flex justify-between border-b border-white/5 pb-2"><span>OS</span> <span className="text-white">macOS, Linux, Win</span></li>
                   <li className="flex justify-between border-b border-white/5 pb-2"><span>Environment</span> <span className="text-white">venv, virtualenv, uv, Poetry, PDM</span></li>
                   <li className="flex justify-between border-b border-white/5 pb-2"><span>Network</span> <span className="text-white">api.osv.dev, pypi.org</span></li>
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
            <p className="text-white/40 text-sm font-mono">
              PyDoctor scans your project&apos;s own Python wherever it&apos;s installed: the active virtualenv, or a <code className="text-orange-400">.venv</code>/<code className="text-orange-400">venv</code> in the project. Point it at another interpreter with <code className="text-orange-400">--python</code>.
            </p>
            <div className="p-4 rounded-xl border border-orange-500/30 bg-orange-500/5 text-sm text-white/60 font-mono">
              Install <code className="text-orange-400">pydoctor-cli</code>, not <code className="text-orange-400">pydoctor</code>. The latter is an unrelated project that installs a command with the same name.
            </div>
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
{`ENVIRONMENT
  ✔ Python Version:       3.11.9
  ✔ Interpreter:          .venv/bin/python
    Found via:            .venv/ in the project
  ✔ Installed Packages:   124

SECURITY PROTOCOLS
  ✖ requests 2.31.0 — GHSA-9wx4-h78v-vm56
       Upgrade to 2.32.0 or later

VERSION STATUS
  ⚠ django 5.1.2 → 5.2.8

❤️  Project Health Score   89 / 100`}
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
                 <p>• Python version of the project&apos;s interpreter</p>
                 <p>• Virtual environment status</p>
                 <p>• pip inside the project environment (uv environments don&apos;t need it)</p>
                 <p>• Which interpreter was scanned, and how it was found</p>
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
                Severity comes from the advisory&apos;s own rating or its CVSS v3 base score: <span className="text-red-400 font-bold underline">LOW</span> → warning, <span className="text-red-400 font-bold underline">MEDIUM</span> → error, <span className="text-red-400 font-bold underline">HIGH</span> and <span className="text-red-400 font-bold underline">CRITICAL</span> → critical. If the database can&apos;t be reached, the scan fails instead of reporting a clean result.
             </p>
             <CommandPill command="pydoctor scan-security" />
          </div>
        </div>
      )
    },
    {
      id: "package-managers",
      title: "Package Managers",
      content: (
        <div className="space-y-10">
          <p className="text-white/50 leading-relaxed">
            PyDoctor is engine-agnostic and provides native support for the most popular Python package managers. It automatically detects your project structure and tailors its diagnostic kernel accordingly.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "pip", desc: "The standard", icon: "📦" },
              { name: "Poetry", desc: "Modern deps", icon: "📜" },
              { name: "PDM", desc: "Next-gen", icon: "🚀" },
              { name: "uv", desc: "Extremely fast", icon: "⚡" }
            ].map((pm) => (
              <div key={pm.name} className="p-6 glass !rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all group">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{pm.icon}</div>
                <h4 className="text-white font-bold text-sm mb-1">{pm.name}</h4>
                <p className="text-[10px] text-white/30 uppercase tracking-widest">{pm.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 font-mono text-xs text-white/40 italic">
            Note: PyDoctor reads declared dependencies from pyproject.toml (PEP 621 and Poetry) and requirements.txt, and uses your manager&apos;s own commands when applying fixes.
          </div>
        </div>
      )
    },
    {
       id: "cli",
       title: "CLI Commands",
       content: (
         <div className="space-y-8">
            <p className="text-white/50">Every scan command accepts <code className="text-orange-400">--path</code>, <code className="text-orange-400">--python</code>, <code className="text-orange-400">--json</code> and <code className="text-orange-400">--verbose</code>.</p>
            <div className="space-y-4">
               {[
                 { cmd: "pydoctor diagnose", desc: "Full project health scan" },
                 { cmd: "pydoctor check", desc: "Full scan without prompts (for CI)" },
                 { cmd: "pydoctor check --ci", desc: "Secrets and workflow risks only" },
                 { cmd: "pydoctor fix", desc: "Upgrade vulnerable and outdated packages" },
                 { cmd: "pydoctor scan-security", desc: "Known vulnerabilities (OSV)" },
                 { cmd: "pydoctor scan-deps", desc: "Dependency conflicts and missing packages" },
                 { cmd: "pydoctor scan-unused", desc: "Possibly unused dependencies" },
                 { cmd: "pydoctor check-env", desc: "Python and virtualenv health" },
                 { cmd: "pydoctor github", desc: "CI guard on a local git checkout" },
                 { cmd: "pydoctor docker", desc: "Dockerfile check (preview)" },
                 { cmd: "pydoctor cache clear", desc: "Clear cached advisories" }
               ].map((item) => (
                 <div key={item.cmd} className="group flex flex-col md:flex-row md:items-center justify-between p-4 glass !rounded-xl border border-white/5 hover:bg-white/10 hover:border-orange-500/30 hover:scale-[1.01] transition-all gap-4 shadow-lg cursor-pointer">
                    <code className="text-orange-500 font-bold group-hover:text-orange-400 transition-colors">{item.cmd}</code>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">{item.desc}</span>
                 </div>
               ))}
            </div>
         </div>
       )
    },
    {
      id: "deps",
      title: "Dependency Analysis",
      content: (
        <div className="space-y-6">
           <p className="text-white/50">PyDoctor checks every installed package&apos;s requirements against what is actually installed, the same check as <code className="text-orange-400">pip check</code>, and works without pip in uv environments.</p>
           <CommandPill command="pydoctor scan-deps" />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-8 glass !rounded-3xl border border-white/5">
                 <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-[0.2em]">Conflicts</h4>
                 <p className="text-sm text-white/40 leading-relaxed italic">A package requires a version range that the installed version doesn&apos;t satisfy, for example <code>urllib3&lt;3</code> with 3.0 installed.</p>
              </div>
              <div className="p-8 glass !rounded-3xl border border-white/5">
                 <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-[0.2em]">Missing Packages</h4>
                 <p className="text-sm text-white/40 leading-relaxed italic">A package depends on something that isn&apos;t installed at all. Both block CI with exit code 1.</p>
              </div>
           </div>
        </div>
      )
    },
    {
      id: "health-scoring",
      title: "Advanced Health Scoring",
      content: (
        <div className="space-y-12">
           <p className="text-white/50 leading-relaxed">Every scan produces a score from 0 to 100: Excellent (90+), Good (70+), Needs Attention (50+) or Critical. A vulnerable package counts once however many advisories it has, each category can only cost so much, and any critical issue keeps the score below Good.</p>
           
           <div className="p-10 glass !rounded-[2.5rem] border border-orange-500/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                 <Activity className="h-40 w-40 text-orange-500" />
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                 <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                       <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                       <motion.circle 
                          cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" 
                          strokeDasharray="364.4"
                          initial={{ strokeDashoffset: 364.4 }}
                          whileInView={{ strokeDashoffset: 36.44 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          className="text-orange-500" 
                       />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-3xl font-black text-white">90</span>
                       <span className="text-[8px] uppercase font-bold text-white/30 tracking-widest">DR-INDEX</span>
                    </div>
                 </div>
                 
                 <div className="flex-1 space-y-4">
                    <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-orange-500">PENALTY HEURISTICS</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px] font-mono">
                       <div className="flex items-center gap-2 text-red-400/60"><ShieldAlert className="w-3 h-3" /> Security: up to -60pts</div>
                       <div className="flex items-center gap-2 text-orange-400/60"><FileBox className="w-3 h-3" /> CI/CD &amp; secrets: up to -50pts</div>
                       <div className="flex items-center gap-2 text-white/40"><Cpu className="w-3 h-3" /> Environment: up to -30pts</div>
                       <div className="flex items-center gap-2 text-white/20"><Zap className="w-3 h-3" /> Outdated: up to -15pts</div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="space-y-4">
              <h4 className="text-white font-bold text-lg mb-2">Dynamic Fix Suggestions</h4>
              <p className="text-white/40 leading-relaxed font-mono text-sm">
                 The <code className="text-orange-400">🚀 Next Steps</code> terminal guide intelligently suggests remediation paths based on your current score. It automatically suppresses irrelevant noisy commands and self-optimizes once you achieve the perfect 100/100 health certificate.
              </p>
           </div>
           
           <div className="p-6 bg-white/5 rounded-2xl border border-white/10 italic text-white/30 text-xs text-center font-mono">
              Set <code>min_health_score</code> in <code>[tool.pydoctor]</code> to fail CI below a threshold.
           </div>
        </div>
      )
    },
    {
      id: "outdated",
      title: "Outdated Packages",
      content: (
        <div className="space-y-6">
           <p className="text-white/50">Packages with newer releases are listed as part of every full scan; major-version jumps are flagged as warnings. Upgrade them with <code className="text-orange-400">pydoctor fix</code>, which verifies each upgrade actually happened.</p>
           <CommandPill command="pydoctor diagnose" />
        </div>
      )
    },
    {
      id: "unused",
      title: "Unused Dependencies",
      content: (
        <div className="space-y-6">
           <p className="text-white/50">Finds declared dependencies that nothing appears to use. Imports under a different name, Django settings strings, database URLs and Procfile/Dockerfile commands all count as use. Results are &quot;possibly unused&quot;: confirm before removing.</p>
           <CommandPill command="pydoctor scan-unused" />
        </div>
      )
    },
    {
      id: "reports",
      title: "Reporting Engine",
      content: (
        <div className="space-y-6">
           <p className="text-white/50">Add <code className="text-orange-400">--json</code> to any scan for machine-readable output, including every issue, a severity summary and the health score.</p>
           <CommandPill command="pydoctor check --json > pydoctor-report.json" />
        </div>
      )
    },
    {
      id: "ci",
      title: "CI/CD Integration",
      content: (
        <div className="space-y-8">
           <p className="text-white/50">PyDoctor exits with code 1 when any issue is an error or critical, or when the score falls below <code className="text-orange-400">min_health_score</code>, so it works as a CI gate as-is.</p>
           <div className="bg-black/60 border border-white/10 rounded-2xl p-8 font-mono text-xs text-white/40 space-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <p className="text-orange-500/50"># .github/workflows/verify.yml</p>
              <p>- name: Install</p>
              <p>&nbsp;&nbsp;run: pip install pydoctor-cli &amp;&amp; pip install -r requirements.txt</p>
              <p>- name: PyDoctor</p>
              <p>&nbsp;&nbsp;run: pydoctor check --json</p>
           </div>
        </div>
      )
    },
    {
      id: "config",
      title: "Configuration",
      content: (
        <div className="space-y-6">
           <p className="text-white/50">Configure PyDoctor per project in <code className="text-orange-400">pyproject.toml</code>. Cache, timeout and concurrency are set with <code className="text-orange-400">PYDOCTOR_CACHE_TTL</code>, <code className="text-orange-400">PYDOCTOR_REQUEST_TIMEOUT</code> and <code className="text-orange-400">PYDOCTOR_MAX_WORKERS</code>.</p>
           <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <pre className="text-[10px] font-mono text-white/40">
{`[tool.pydoctor]
# Never report these as unused
ignored_packages = ["celery", "my-plugin"]
# Exit 1 when the health score drops below this
min_health_score = 70`}
              </pre>
           </div>
        </div>
      )
    },
    {
      id: "contributing",
      title: "Contributing",
      content: (
        <div className="space-y-6">
           <p className="text-white/50">PyDoctor is open-source. We welcome contributions to our diagnostic kernel and security heuristics.</p>
           <div className="flex gap-4">
              <a href="https://github.com/iamAgbaCoder/pydoctor-cli" className="px-6 py-3 glass !rounded-full text-[10px] uppercase font-bold tracking-widest text-orange-500 border-orange-500/20 hover:bg-orange-500/10 transition-all">GitHub Repository</a>
              <a href="https://github.com/iamAgbaCoder/pydoctor-cli/blob/main/docs/contributing.md" className="px-6 py-3 glass !rounded-full text-[10px] uppercase font-bold tracking-widest text-white/40 border-white/10">Read Guide</a>
           </div>
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

