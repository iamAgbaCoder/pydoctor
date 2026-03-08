
export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center space-x-3 group ${className}`}>
    <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-orange-500"
      >
        <path
          d="M7 8L3 12L7 16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 16H21"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M11 4L15 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-40"
        />
      </svg>
    </div>
    <span className="text-xl font-bold tracking-tighter text-white">PyDoctor</span>
  </div>
);
