import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => {
  return (
    <img 
      src="/src/assets/Adsız tasarım(6) copy.png"
      alt="Pier Compliance Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default Logo;