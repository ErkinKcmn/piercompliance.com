import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <img 
        src="/assets/Adsız tasarım(6) copy.png"
        alt="Pier Compliance - REACH KKDIK GPSR Uyumluluk Danışmanlığı Logo"
        className={`${className} object-contain`}
        style={{ 
          objectFit: 'contain',
          maxWidth: '100%',
          height: 'auto',
          imageRendering: 'crisp-edges'
        }}
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
};

export default Logo;