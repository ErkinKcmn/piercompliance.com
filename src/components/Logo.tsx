import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-20 w-20" }) => {
  return (
    <img
      src="/pier-compliance.png"
      alt="Pier Compliance Logo"
      className={className}
    />
  );
};

export default Logo;
