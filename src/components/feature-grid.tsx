"use client";

import { motion } from "framer-motion";
import { Search, ShieldAlert, Boxes, PackageX, FileBox, Activity } from "lucide-react";

const features = [
  {
    title: "Kernel-Level Analysis",
    description: "Deep-trace the Python runtime environment to identify entropy issues, binary conflicts, and architecture mismatches.",
    icon: Activity,
    color: "text-orange-500"
  },
  {
    title: "Graph Dependency Audit",
    description: "Multi-dimensional visualization and mapping of dependency sub-trees, identifying cyclic redundancies and shadow imports.",
    icon: Boxes,
    color: "text-orange-400"
  },
  {
    title: "Real-time Registry Sync",
    description: "Synchronize with global PyPI and proprietary indexes to identify drift in versioning and patch management.",
    icon: Search,
    color: "text-orange-300"
  },
  {
    title: "CWE/CVE Scanning",
    description: "Automated vulnerability detection leveraging advanced security heuristics to map your codebase against the CVE database.",
    icon: ShieldAlert,
    color: "text-red-500"
  },
  {
    title: "Dead-Code Elimination",
    description: "Analyze runtime import hierarchies to detect and isolate unused modules, reducing memory footprint and attack surface.",
    icon: PackageX,
    color: "text-orange-400"
  },
  {
    title: "CI/CD Orchestration",
    description: "Seamlessly integrate with industrial-grade pipelines (GitHub, GitLab, CircleCI) to enforce security gates and quality metrics.",
    icon: FileBox,
    color: "text-orange-200"
  }
];

export const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="features">
      {features.map((feature, idx) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, borderColor: "rgba(249, 115, 22, 0.4)" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group relative glass rounded-2xl p-8 hover:bg-white/[0.05] transition-all border border-white/10 overflow-hidden"
        >
          {/* Ghosted Index */}
          <div className="absolute top-[-10px] right-[-10px] text-8xl font-bold text-white/5 select-none transition-all group-hover:text-orange-500/10 z-0 tracking-tighter">
            0{idx + 1}
          </div>

          <div className="relative z-10">
            <div className={`mb-6 inline-flex p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 text-white`}>
              <feature.icon className={`h-7 w-7 ${feature.color}`} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{feature.title}</h3>
            <p className="text-white/40 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
          
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-radial-gradient from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
};
