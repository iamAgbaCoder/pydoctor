"use client";

import { motion } from "framer-motion";
import React from "react";

const marqueeItems = [
  "DEPENDENCY SCANNING",
  "SECURITY AUDITING",
  "ENVIRONMENT DIAGNOSIS",
  "VERSION COMPATIBILITY",
  "PIP",
  "POETRY",
  "PDM",
  "UV",
  "VULNERABILITY DETECTION",
  "HEALTH ORCHESTRATION",
  "PACKAGE ANALYSIS",
  "AUTONOMOUS KERNEL",
  "CI/CD GUARD",
  "DOCKER AUDIT",
  "GITHUB SCAN",
  "HEALTH SCORING",
  "OSV FETCHING",
];

export const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-orange-500/[0.02] border-y border-orange-500/10 py-10 my-24">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex space-x-12 px-6"
        >
          {marqueeItems.concat(marqueeItems).map((item, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 group cursor-default"
            >
              <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-orange-500/30 group-hover:text-orange-500 transition-colors uppercase font-mono">
                {item}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500/20 group-hover:bg-orange-500 transition-colors"></div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
    </div>
  );
};
