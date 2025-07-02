import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-12" }) => {
  return (
    <img
      src="/pier-compliance.png"
      alt="Pier Compliance Logo"
      className={className}
    />
  );
};

export default Logo;
