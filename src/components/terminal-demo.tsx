"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Copy, CheckCircle2 } from "lucide-react";

export const TerminalDemo = () => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText("pydoctor --autonomous-scan");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full relative mx-auto max-w-2xl rounded-xl overflow-hidden glass shadow-[0_0_50px_rgba(249,115,22,0.1)] ring-1 ring-white/10"
    >
      <div className="flex items-center px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex-1 flex justify-center items-center opacity-50 text-[10px] uppercase tracking-widest font-mono text-white/40">
          Core Diagnostic Interface v0.1.0
        </div>
        <button 
          onClick={handleCopy}
          className="text-white/40 hover:text-white transition-colors"
        >
          {copied ? <CheckCircle2 className="w-4 h-4 text-orange-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      
      <div className="p-6 font-mono text-[13px] md:text-sm leading-relaxed overflow-x-auto text-neutral-300 bg-[#050505]/80">
        <div className="flex items-center text-orange-500 mb-6">
          <span className="text-white/40 mr-3">admin@pydoctor:~$</span> 
          <TypingText text="pyydoctor diagnose --verbose" delay={0.2} speed={40} />
        </div>
        
        <FadeIn delay={1.4}>
          <div className="text-white/40 mb-2 flex items-center">
             <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2 dot-blink"></span>
             Initializing Kernel Analysis...
          </div>
          <div className="flex items-center text-emerald-400/80 mb-1">
            <span className="mr-3 opacity-50">STDOUT:</span> [SUCCESS] Runtime: Python 3.12.2 (Enterprise Build)
          </div>
          <div className="flex items-center text-emerald-400/80 mb-5">
            <span className="mr-3 opacity-50">STDOUT:</span> [SUCCESS] Entropy Check: PASS
          </div>
        </FadeIn>

        <FadeIn delay={2.2}>
          <div className="text-white/40 mb-2">Orchestrating Dependency Audit...</div>
        </FadeIn>

        <FadeIn delay={3.2}>
          <div className="flex items-center text-orange-400 mb-1">
            <span className="mr-3 opacity-50">WARN:</span> 12 Packages Deprecated
          </div>
          <div className="flex items-center text-red-500 mb-1">
            <span className="mr-3 opacity-50">CRIT:</span> CWE-119 identified in &apos;cryptography&apos;
          </div>
          <div className="flex items-center text-emerald-400/80 mb-5">
            <span className="mr-3 opacity-50">INFO:</span> Shadow dependencies isolated
          </div>
        </FadeIn>

        <FadeIn delay={4.0}>
          <div className="text-orange-500 font-bold border border-orange-500/30 px-4 py-2 bg-orange-500/5 inline-block">
                  SECURITY PROTOCOL: ACTION REQUIRED. Generate report? (y/n)_
          </div>
        </FadeIn>
      </div>
    </motion.div>
  );
};

const TypingText = ({ text, delay, speed }: { text: string, delay: number, speed: number }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const startTyping = () => {
      let index = 0;
      const typeChar = () => {
        if (index < text.length) {
          setDisplayed((prev) => prev + text.charAt(index));
          index++;
          timeout = setTimeout(typeChar, speed);
        }
      };
      typeChar();
    };
    const initialDelay = setTimeout(startTyping, delay * 1000);
    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeout);
    };
  }, [text, delay, speed]);

  return (
    <span>
      {displayed}
      <span className="terminal-cursor ml-1 align-middle" />
    </span>
  );
};

const FadeIn = ({ children, delay }: { children: React.ReactNode, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};
