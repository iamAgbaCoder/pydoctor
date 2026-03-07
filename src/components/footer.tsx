import Link from "next/link";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#050505] py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <Logo />
            </div>
            <p className="text-sm text-white/30 max-w-xs font-mono leading-relaxed">
              Empowering developers to work faster and safer inside the terminal. Built for the next generation of engineers.
            </p>
            <div className="flex items-center space-x-6 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
              <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
              <a href="https://github.com/iamAgbaCoder/pydoctor-cli" className="hover:text-orange-500 transition-colors">GitHub</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Discord</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/20">Product</h4>
            <ul className="space-y-3 text-sm text-white/40 font-mono">
              <li><Link href="/#features" className="hover:text-orange-500 transition-colors">Features</Link></li>
              <li><Link href="/docs" className="hover:text-orange-500 transition-colors">How it works</Link></li>
              <li><Link href="/docs#safety-protocol" className="hover:text-orange-500 transition-colors">Safety Protocol</Link></li>
              <li><Link href="/changelog" className="hover:text-orange-500 transition-colors">Changelog</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Developers</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/20">Resources</h4>
            <ul className="space-y-3 text-sm text-white/40 font-mono">
              <li><Link href="/docs" className="hover:text-orange-500 transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/docs#cli-commands" className="hover:text-orange-500 transition-colors">CLI Reference</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Community</Link></li>
              <li><Link href="https://github.com/iamAgbaCoder/pydoctor-cli" className="hover:text-orange-500 transition-colors">Open Source</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5">
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
            &copy; {new Date().getFullYear()} BUILT WITH ❤️ BY <Link href="https://iamagbacoder.github.io" className="color: text-orange-500 hover:text-white transition-colors">IAMAGBACODER</Link>. DEPLOYED IN PRODUCTION.
          </div>
          <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
