"use client";

import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "#introduction" },
      { title: "Installation", href: "#installation" },
      { title: "Quick Start", href: "#quick-start" },
    ],
  },
  {
    title: "Setup & Managers",
    links: [
      { title: "System Requirements", href: "#requirements" },
      { title: "Package Managers", href: "#package-managers" },
    ],
  },
  {
    title: "Core Features",
    links: [
      { title: "CLI Commands", href: "#cli" },
      { title: "Environment Analysis", href: "#env-analysis" },
      { title: "Dependency Analysis", href: "#deps" },
      { title: "Vulnerability Scanning", href: "#safety-protocol" },
      { title: "Outdated Packages", href: "#outdated" },
      { title: "Unused Dependencies", href: "#unused" },
      { title: "Reporting Engine", href: "#reports" },
    ],
  },
  {
    title: "Advanced",
    links: [
      { title: "CI/CD Integration", href: "#ci" },
      { title: "Configuration", href: "#config" },
      { title: "Contributing", href: "#contributing" },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredNavigation = navigation.map(group => ({
    ...group,
    links: group.links.filter(link => 
      link.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(group => group.links.length > 0);

  // Close mobile sidebar on link click
  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white relative flex flex-col font-mono selection:bg-orange-500/30">
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <Navbar />
      </div>

      {/* Mobile Sidebar Toggle */}
      <div className="fixed bottom-6 right-6 z-[70] md:hidden">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.5)] active:scale-95 transition-all"
        >
          {isSidebarOpen ? <X className="text-black" /> : <Menu className="text-black" />}
        </button>
      </div>

      <div className="flex-1 w-full max-w-screen-2xl mx-auto flex pt-24 md:pt-32">
        {/* Left Sidebar */}
        <AnimatePresence>
          {(isSidebarOpen || true) && (
            <motion.aside 
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#050505]/95 backdrop-blur-xl border-r border-white/5 overflow-y-auto md:sticky md:top-32 md:h-[calc(100vh-8rem)] md:block ${isSidebarOpen ? 'block' : 'hidden'}`}
            >
              <div className="px-8 py-8 space-y-8">
                <div className="relative">
                  <span className="absolute left-2.5 top-2.5 text-white/20">
                    <Search className="h-4 w-4" />
                  </span>
                  <input 
                    type="text" 
                    placeholder="Search index..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-[10px] uppercase tracking-widest font-bold text-white focus:outline-none focus:border-orange-500/50 transition-colors"
                  />
                </div>
                
                <nav className="space-y-8 pb-20 md:pb-0">
                  {filteredNavigation.map((group, i) => (
                    <div key={i}>
                      <h4 className="mb-4 px-2 text-[10px] uppercase font-bold tracking-[0.3em] text-white/20">
                        {group.title}
                      </h4>
                      <div className="space-y-1">
                        {group.links.map((item, j) => (
                          <Link
                            key={j}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="group flex w-full items-center rounded-xl px-3 py-2.5 hover:bg-orange-500/5 text-white/40 hover:text-white transition-all border border-transparent hover:border-white/5"
                          >
                            <span className="w-1 h-1 rounded-full bg-white/10 mr-4 group-hover:bg-orange-500 group-hover:scale-150 transition-all"></span>
                            <span className="text-[11px] font-bold tracking-wider uppercase">{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Backdrop for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Documentation Content Center */}
        <main className="flex-1 w-full px-6 md:px-10 lg:pl-16 xl:pl-24 relative overflow-x-hidden">
          <div className="mx-auto w-full max-w-none">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

