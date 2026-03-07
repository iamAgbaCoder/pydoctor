"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CommandPillProps {
  command: string;
}

export const CommandPill = ({ command }: CommandPillProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group flex items-center gap-3 glass px-4 py-2 rounded-full border-white/10 hover:border-orange-500/30 transition-all shadow-lg overflow-hidden relative">
      <code className="text-sm font-mono text-white/70 select-all tracking-tight">
        {command}
      </code>
      <button 
        onClick={handleCopy}
        className="ml-2 hover:text-orange-500 transition-colors p-1 relative z-10"
        title="Copy to clipboard"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="copied"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1.5"
            >
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-[10px] font-bold text-emerald-400 animate-pulse uppercase tracking-tighter">Copied!</span>
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Copy className="h-3.5 w-3.5 text-white/40 group-hover:text-orange-500 transition-colors" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};
