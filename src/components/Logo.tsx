import React from 'react';

// Google Fonts'tan Dancing Script fontunu import et
const fontUrl = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => {
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = fontUrl;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className={`${className} flex items-center justify-center`}>
      <span
        style={{
          fontFamily: 'Dancing Script, cursive',
          fontWeight: 700,
          fontSize: '2.5rem',
          color: '#1e293b', // Tailwind slate-800
          letterSpacing: '0.05em',
          lineHeight: 1,
          textShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}
      >
        PiEr
      </span>
    </div>
  );
};

export default Logo;