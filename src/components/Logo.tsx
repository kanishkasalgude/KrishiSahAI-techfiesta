import React from 'react';

export const Logo = ({ className = "h-10 w-10", textClassName = "text-xl" }: { className?: string, textClassName?: string }) => {
  return (
    <div className="flex items-center gap-2">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Blue Chat Bubble Outline */}
        <path
          d="M20 20 H80 A10 10 0 0 1 90 30 V70 A10 10 0 0 1 80 80 H40 L20 95 V80 H20 A10 10 0 0 1 10 70 V30 A10 10 0 0 1 20 20 Z"
          stroke="#0D47A1"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Green Bars */}
        <path d="M35 70 V50" stroke="#43A047" strokeWidth="8" strokeLinecap="round" />
        <path d="M50 70 V40" stroke="#43A047" strokeWidth="8" strokeLinecap="round" />
        <path d="M65 70 V30" stroke="#43A047" strokeWidth="8" strokeLinecap="round" />

        {/* Leaf growing from bottom left */}
        <path
          d="M20 95 Q 25 75 45 75 Q 55 75 60 85 Q 50 95 40 90"
          fill="#43A047"
        />
        <path
            d="M20 95 Q 10 85 15 75"
            stroke="#43A047"
            strokeWidth="4"
            strokeLinecap="round"
        />

        {/* Orange Dot */}
        <circle cx="90" cy="20" r="6" fill="#FB8C00" />
      </svg>
      <div className={`font-display font-bold ${textClassName}`}>
        <span className="text-[#0D47A1]">KrishiSah</span>
        <span className="text-[#43A047]">AI</span>
      </div>
    </div>
  );
};
