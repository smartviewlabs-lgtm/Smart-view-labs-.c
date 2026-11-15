import React from 'react';
import { TourSpace, TOUR_SPACES } from '../data/tourSpaces';
import { ThreeSixtyViewer } from './ThreeSixtyViewer';
import { Language, contentData } from '../data/translations';
import { SITE_CONFIG } from '../data/siteConfig';
import { MapPin, Eye, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  selectedSpace: TourSpace;
  onSelectSpace: (space: TourSpace) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  selectedSpace,
  onSelectSpace,
}) => {
  const t = contentData[lang].hero;

  return (
    <section id="tours" className="relative pt-8 pb-12 md:pt-14 md:pb-20 bg-warm-dots overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Screenshot 1 */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          {/* Kicker */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs md:text-sm font-extrabold tracking-widest text-[#d94819] uppercase brand-font">
              {t.kicker}
            </span>
          </div>

          {/* Display Headline matching Screenshot 1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] font-serif tracking-tight leading-[1.15] text-balance">
            {t.headline}
          </h1>

          {/* Subtitle matching Screenshot 1 */}
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            {t.subtitle}
          </p>

          {/* Space Filter Tabs (Segmented control matching Screenshot 1) */}
          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-md border border-[#ebd7c2] gap-1 max-w-full">
              {TOUR_SPACES.map((space) => {
                const isActive = selectedSpace.id === space.id;
                const tabTitle = lang === 'hi' ? space.titleHi : space.title;

                return (
                  <button
                    key={space.id}
                    type="button"
                    onClick={() => onSelectSpace(space)}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#d94819] text-white shadow-md'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {tabTitle}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 360 Tour Clean Panoramic Canvas Container */}
        <div className="relative max-w-6xl mx-auto">
          <ThreeSixtyViewer
            space={selectedSpace}
            lang={lang}
          />
        </div>

        {/* Regional Quick Verification Strip below the Tour */}
        <div className="mt-6 max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-600 px-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#d94819]" />
            <span>
              {lang === 'hi'
                ? `स्थान: ${SITE_CONFIG.citiesHi}`
                : `Verified shoot locations: ${SITE_CONFIG.citiesEn}`}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Google Street View Certified</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              <Eye className="w-3.5 h-3.5" />
              <span>16K Ultra-HDR Resolution</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
