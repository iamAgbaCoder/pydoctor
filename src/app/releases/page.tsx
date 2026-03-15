import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import * as motion from "framer-motion/client";

const releases = [
  {
    version: "v2.0.0",
    date: "Latest Release",
    tagline: "The Security & Architecture Update",
    highlight: true,
    changes: [
      {
        title: "Major UI/UX Revamp",
        emoji: "🚀",
        description: "Introduced a premium \"kernel/hacker\" aesthetic with boxed reports, dynamic progress animations, and improved readability."
      },
      {
        title: "CI/CD Guard Mode",
        emoji: "🛡️",
        description: "New `pydoctor check --ci` command to detect exposed secrets (AWS, GitHub, PyPI tokens) and insecure workflow patterns in GitHub Actions/GitLab CI."
      },
      {
        title: "Docker Support",
        emoji: "🐳",
        description: "New `pydoctor docker` command to diagnose Python issues inside containers and audit Dockerfiles."
      },
      {
        title: "GitHub Integration",
        emoji: "🐙",
        description: "New `pydoctor github` command for repository-wide health scans and local git configuration audits."
      },
      {
        title: "Advanced Health Scoring",
        emoji: "📈",
        description: "Refined the 0-100 scoring algorithm with granular penalties for security vulnerabilities and CI/CD risks."
      },
      {
        title: "Performance Boost",
        emoji: "⚡",
        description: "Parallel execution engine for scanning large codebases faster."
      },
      {
        title: "Smart Environment Detection",
        emoji: "🔍",
        description: "Now automatically prompts users when no venv is found, preventing accidental system-wide changes."
      },
      {
        title: "Context-Aware Reporting",
        emoji: "🎯",
        description: "Targeted commands (like `pydoctor scan-unused` or `pydoctor github`) now intelligently suppress unrelated scanner noise."
      },
      {
        title: "OSV Deep-Fetching",
        emoji: "🧠",
        description: "Overcame upstream OSV API batch limits by implementing dynamic real-time fetching and caching of full vulnerability advisories natively."
      },
      {
        title: "Transitive Dependency Tracking",
        emoji: "🔗",
        description: "PyDoctor now uniquely segregates mathematical/transitive dependencies from pure unused bloat, effectively preventing `pydoctor fix` from uninstalling required sub-packages."
      },
      {
        title: "Refined Git Discovery",
        emoji: "🛠️",
        description: "Utilizes native git heuristics (`--is-inside-work-tree` & `--show-toplevel`) to flawlessly map out project roots and repository states, even when scanning from deeply nested sub-directories."
      },
      {
        title: "Dynamic Fix Suggestions",
        emoji: "🔮",
        description: "The `🚀 Next Steps` terminal guide now dynamically rules out the currently running command and gracefully self-hides when a project achieves a perfect 100/100 health rating."
      }
    ]
  },
  {
    version: "v0.1.3",
    date: "Previous Release",
    changes: [
      {
        title: "Enhanced Package Detection",
        emoji: "📦",
        description: "Pydoctor now intelligently detects and uses your project's specific virtual environment (Poetry, UV, PDM, or standard venv) to run all scans and diagnoses."
      },
      {
        title: "Improved Architecture",
        emoji: "🏗️",
        description: "Refactored core modules to reduce complexity and improve maintainability (resolved C901 linting errors)."
      },
      {
        title: "Fix Rendering Errors",
        emoji: "🐛",
        description: "Resolved issues with undefined verbose detail renderers in the CLI."
      }
    ]
  },
  {
    version: "v0.1.2",
    date: "Maintenance",
    changes: [
      {
        title: "Maintenance",
        emoji: "🔧",
        description: "Minor internal fixes and linting improvements for CI/CD stability."
      },
      {
        title: "Professional Meta",
        emoji: "📝",
        description: "Revamped `pyproject.toml` with complete author metadata and SEO keywords."
      }
    ]
  },
  {
    version: "v0.1.1",
    date: "Patch updates",
    changes: [
      {
        title: "Bug Fixes",
        emoji: "🐛",
        description: "Minor improvements to dependency scanning reliability."
      },
      {
        title: "Metadata Update",
        emoji: "🏷️",
        description: "Initial professional README branding."
      }
    ]
  },
  {
    version: "v0.1.0",
    date: "Initial Release",
    changes: [
      {
        title: "Initial Release",
        emoji: "🎉",
        description: "Core diagnostic engine with support for Environment, Dependencies, Outdated Packages, Security, and Unused Package scans."
      },
      {
        title: "Remediation",
        emoji: "💊",
        description: "Initial support for auto-fixing issues via `pydoctor fix`."
      }
    ]
  }
];

export default function Releases() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center min-h-screen pt-32 pb-32">
        <section className="w-full max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-orange-400 mb-8">
              <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 mr-2 dot-blink"></span>
              Changelog
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              Release <span className="italic text-orange-500">History</span>.
            </h1>
            <p className="text-lg text-white/40 font-mono max-w-2xl mx-auto">
              Track the evolution of the PyDoctor diagnostic engine. All updates, patches, and feature additions are logged here.
            </p>
          </motion.div>

          <div className="space-y-24">
            {releases.map((release) => (
              <motion.div 
                key={release.version}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative p-8 md:p-12 rounded-[2.5rem] border ${release.highlight ? 'bg-orange-500/5 border-orange-500/20 glass shadow-[0_0_50px_rgba(249,115,22,0.05)]' : 'border-white/5 glass bg-white/[0.02]'}`}
              >
                {release.highlight && (
                  <div className="absolute -top-3 right-10 px-4 py-1 bg-orange-500 text-black text-[10px] uppercase tracking-widest font-black rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                    Latest Version
                  </div>
                )}
                
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/5 pb-8">
                  <div>
                    <div className="text-orange-500 font-mono text-sm mb-2">{release.date}</div>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                      {release.version}
                    </h2>
                    {release.tagline && (
                      <p className="text-white/40 mt-2 font-mono italic">
                        &quot;{release.tagline}&quot;
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  {release.changes.map((change, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                      className="flex gap-4 group p-4 rounded-2xl transition-all border border-transparent hover:border-white/5 cursor-pointer"
                    >
                      <div className="text-2xl mt-0.5 opacity-80 group-hover:scale-125 group-hover:-rotate-6 transition-all duration-300 transform-gpu">
                        {change.emoji}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-1 tracking-tight group-hover:text-orange-400 transition-colors">
                          {change.title}
                        </h3>
                        {/* We use inline code snippets parsing via regex simply by replacing backticks if needed, but here simple rendering is fine since it's hardcoded. We can just leave basic formatting or manual tags if needed. */}
                        <p className="text-white/40 leading-relaxed font-mono text-sm max-w-2xl group-hover:text-white/60 transition-colors">
                          {change.description.split('`').map((part, i) => 
                            i % 2 === 1 ? <code key={i} className="text-orange-400 bg-orange-400/10 px-1 py-0.5 rounded border border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.1)]">{part}</code> : part
                          )}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 pt-16 border-t border-white/10 text-center"
          >
             <h2 className="text-2xl font-bold text-white mb-6">Verified Links</h2>
             <div className="flex flex-wrap items-center justify-center gap-6">
                <a href="https://github.com/iamAgbaCoder/pydoctor-cli" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/50 hover:text-orange-500 transition-colors">
                  <span>GitHub Repository</span>
                </a>
                <span className="text-white/20">•</span>
                <a href="https://github.com/iamAgbaCoder/pydoctor-cli/issues" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/50 hover:text-orange-500 transition-colors">
                  <span>Issue Tracker</span>
                </a>
             </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
