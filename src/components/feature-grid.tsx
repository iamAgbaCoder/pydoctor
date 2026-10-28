"use client";

import { motion } from "framer-motion";
import { Search, ShieldAlert, Container, Github, FileBox, Activity } from "lucide-react";

const features = [
  {
    title: "CI/CD Guard Mode",
    description: "Find committed secrets (cloud, payment and AI API keys, database URLs, .env files) and risky GitHub Actions patterns like pull_request_target pwn requests.",
    icon: FileBox,
    color: "text-orange-500"
  },
  {
    title: "Docker Check (Preview)",
    description: "Confirms your Dockerfile exists and uses a Python base image. Image and container inspection are on the roadmap.",
    icon: Container,
    color: "text-orange-400"
  },
  {
    title: "GitHub Integration",
    description: "Run the CI/CD guard on a local checkout, with the repository, branch and remote shown in the report.",
    icon: Github,
    color: "text-orange-300"
  },
  {
    title: "Smart Env Detection",
    description: "Scans your project's own interpreter wherever PyDoctor is installed, tells you which one, and works in uv environments without pip.",
    icon: ShieldAlert,
    color: "text-red-500"
  },
  {
    title: "Advanced Health Scoring",
    description: "A 0-100 score where each vulnerable package counts once and every fix moves the needle. Severity comes from real CVSS scores.",
    icon: Activity,
    color: "text-orange-400"
  },
  {
    title: "OSV Deep-Fetching",
    description: "Dynamic real-time fetching and caching of full vulnerability advisories to overcome upstream API batch limits.",
    icon: Search,
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
