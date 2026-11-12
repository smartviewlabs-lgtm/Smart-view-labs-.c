import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  lightText?: boolean;
}

export const BRAND_FAVICON_URL =
  'https://github.com/smartviewlabs-lgtm/svl.in/blob/main/Gemini_Generated_Image_8xz6ql8xz6ql8xz6.png?raw=true';

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  lightText = false,
}) => {
  const [imgError, setImgError] = useState(false);

  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Brand Logo Icon from GitHub link */}
      <div className={`relative shrink-0 rounded-xl overflow-hidden shadow-xs ${iconDimensions} flex items-center justify-center bg-white`}>
        {!imgError ? (
          <img
            src={BRAND_FAVICON_URL}
            alt="Smart View Labs"
            className="w-full h-full object-contain p-0.5"
            onError={() => setImgError(true)}
          />
        ) : (
          /* SVG Hexagon Fallback */
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full p-1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="50,4 92,26 92,74 50,96 8,74 8,26"
              stroke="#ea580c"
              strokeWidth="8"
              fill="#ffffff"
            />
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fontSize="28"
              fontWeight="bold"
              fill="#0f172a"
              fontFamily="sans-serif"
            >
              SVL
            </text>
          </svg>
        )}
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <div className={`font-extrabold tracking-tight brand-font flex items-center leading-none ${titleSizes}`}>
          <span className={lightText ? 'text-white' : 'text-[#0f172a]'}>Smart View</span>
          <span className="text-[#ea580c] ml-1.5">Labs</span>
        </div>
        {showTagline && (
          <span className={`text-[11px] font-medium tracking-normal mt-0.5 ${lightText ? 'text-slate-400' : 'text-slate-500'}`}>
            Punjab’s Premier 360° & Marketing Agency
          </span>
        )}
      </div>
    </div>
  );
};
