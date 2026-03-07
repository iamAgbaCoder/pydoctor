import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Search } from "lucide-react";

const navigation = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Core Features",
    links: [
      { title: "CLI Commands", href: "/docs/cli" },
      { title: "Environment Analysis", href: "/docs/env" },
      { title: "Dependency Analysis", href: "/docs/deps" },
      { title: "Vulnerability Scanning", href: "/docs/vuln" },
      { title: "Outdated Packages", href: "/docs/outdated" },
      { title: "Unused Dependencies", href: "/docs/unused" },
      { title: "Reports", href: "/docs/reports" },
    ],
  },
  {
    title: "Advanced",
    links: [
      { title: "CI/CD Integration", href: "/docs/ci" },
      { title: "Configuration", href: "/docs/config" },
      { title: "Contributing", href: "/docs/contributing" },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white relative flex flex-col pt-16 font-mono">
      {/* Re-use navbar or a specialized variants, but Navbar handles stickiness */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="flex-1 w-full max-w-screen-2xl mx-auto flex">
        {/* Left Sidebar */}
        <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 border-r border-white/5 overflow-y-auto md:sticky md:block md:w-64 lg:w-72 bg-[#050505]">
          <div className="pr-4 py-8 pl-8 space-y-8">
            <div className="relative">
              <span className="absolute left-2.5 top-2.5 text-white/20">
                <Search className="h-4 w-4" />
              </span>
              <input 
                type="text" 
                placeholder="Search index..." 
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-[11px] uppercase tracking-widest font-bold text-white focus:outline-none focus:ring-1 focus:ring-orange-500/50"
              />
            </div>
            
            {navigation.map((group, i) => (
              <div key={i} className="pb-4">
                <h4 className="mb-2 rounded-md px-2 py-1 text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">
                  {group.title}
                </h4>
                <div className="grid grid-flow-row auto-rows-max text-xs">
                  {group.links.map((item, j) => (
                    <Link
                      key={j}
                      href={item.href}
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-2 hover:text-orange-500 hover:bg-orange-500/5 text-white/40 transition-all font-mono"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10 mr-3 group-hover:bg-orange-500 transition-colors"></span>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Documentation Content Center */}
        <main className="flex-1 pt-8 px-8 md:pl-10 relative">
          <div className="mx-auto w-full max-w-5xl py-6 prose prose-invert prose-orange max-w-none">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
