import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shield outline */}
      <path
        d="M50 5 L20 20 L20 45 C20 65 35 85 50 95 C65 85 80 65 80 45 L80 20 Z"
        fill="currentColor"
        className="text-primary"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      {/* Inner shield background */}
      <path
        d="M50 10 L25 22 L25 43 C25 60 37 77 50 85 C63 77 75 60 75 43 L75 22 Z"
        fill="white"
        stroke="none"
      />
      
      {/* Scales of Justice - Centered and Balanced */}
      <g className="text-primary" fill="currentColor">
        {/* Central pillar */}
        <rect x="48.5" y="30" width="3" height="25" />
        
        {/* Top crossbar */}
        <rect x="38" y="30" width="24" height="2.5" />
        
        {/* Left scale pan */}
        <ellipse cx="42" cy="40" rx="6" ry="1.5" />
        <line x1="42" y1="32.5" x2="42" y2="38.5" stroke="currentColor" strokeWidth="1" />
        
        {/* Right scale pan */}
        <ellipse cx="58" cy="40" rx="6" ry="1.5" />
        <line x1="58" y1="32.5" x2="58" y2="38.5" stroke="currentColor" strokeWidth="1" />
        
        {/* Scale chains - more realistic */}
        <line x1="39" y1="32.5" x2="42" y2="38.5" stroke="currentColor" strokeWidth="0.8" />
        <line x1="45" y1="32.5" x2="42" y2="38.5" stroke="currentColor" strokeWidth="0.8" />
        <line x1="55" y1="32.5" x2="58" y2="38.5" stroke="currentColor" strokeWidth="0.8" />
        <line x1="61" y1="32.5" x2="58" y2="38.5" stroke="currentColor" strokeWidth="0.8" />
      </g>
      
      {/* Wheat/Grain elements - Surrounding the scales */}
      <g className="text-primary" fill="currentColor">
        {/* Left wheat stalk */}
        <path d="M32 45 Q33 50 32 55 Q31 60 32 65" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <ellipse cx="30.5" cy="47" rx="1.5" ry="0.8" />
        <ellipse cx="33.5" cy="48.5" rx="1.5" ry="0.8" />
        <ellipse cx="30.5" cy="50" rx="1.5" ry="0.8" />
        <ellipse cx="33.5" cy="51.5" rx="1.5" ry="0.8" />
        <ellipse cx="30.5" cy="53" rx="1.5" ry="0.8" />
        <ellipse cx="33.5" cy="54.5" rx="1.5" ry="0.8" />
        <ellipse cx="30.5" cy="56" rx="1.5" ry="0.8" />
        <ellipse cx="33.5" cy="57.5" rx="1.5" ry="0.8" />
        
        {/* Right wheat stalk */}
        <path d="M68 45 Q67 50 68 55 Q69 60 68 65" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <ellipse cx="69.5" cy="47" rx="1.5" ry="0.8" />
        <ellipse cx="66.5" cy="48.5" rx="1.5" ry="0.8" />
        <ellipse cx="69.5" cy="50" rx="1.5" ry="0.8" />
        <ellipse cx="66.5" cy="51.5" rx="1.5" ry="0.8" />
        <ellipse cx="69.5" cy="53" rx="1.5" ry="0.8" />
        <ellipse cx="66.5" cy="54.5" rx="1.5" ry="0.8" />
        <ellipse cx="69.5" cy="56" rx="1.5" ry="0.8" />
        <ellipse cx="66.5" cy="57.5" rx="1.5" ry="0.8" />
        
        {/* Additional wheat stalks for fuller look */}
        {/* Inner left wheat */}
        <path d="M36 48 Q37 52 36 56 Q35 60 36 63" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <ellipse cx="34.8" cy="49" rx="1.2" ry="0.6" />
        <ellipse cx="37.2" cy="50.5" rx="1.2" ry="0.6" />
        <ellipse cx="34.8" cy="52" rx="1.2" ry="0.6" />
        <ellipse cx="37.2" cy="53.5" rx="1.2" ry="0.6" />
        <ellipse cx="34.8" cy="55" rx="1.2" ry="0.6" />
        <ellipse cx="37.2" cy="56.5" rx="1.2" ry="0.6" />
        
        {/* Inner right wheat */}
        <path d="M64 48 Q63 52 64 56 Q65 60 64 63" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <ellipse cx="65.2" cy="49" rx="1.2" ry="0.6" />
        <ellipse cx="62.8" cy="50.5" rx="1.2" ry="0.6" />
        <ellipse cx="65.2" cy="52" rx="1.2" ry="0.6" />
        <ellipse cx="62.8" cy="53.5" rx="1.2" ry="0.6" />
        <ellipse cx="65.2" cy="55" rx="1.2" ry="0.6" />
        <ellipse cx="62.8" cy="56.5" rx="1.2" ry="0.6" />
      </g>
      
      {/* Small decorative elements around the base */}
      <g className="text-primary" fill="currentColor">
        <circle cx="45" cy="68" r="1" />
        <circle cx="55" cy="68" r="1" />
        <circle cx="50" cy="70" r="1.2" />
      </g>
    </svg>
  );
};

export default Logo;