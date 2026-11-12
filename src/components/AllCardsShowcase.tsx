import React, { useState } from 'react';
import { SHOWCASE_CARDS, ShowcaseCard, TOUR_SPACES, TourSpace } from '../data/tourSpaces';
import { Language, contentData } from '../data/translations';
import { Sparkles, MapPin, Eye, ArrowUpRight, TrendingUp, Check } from 'lucide-react';

interface AllCardsShowcaseProps {
  lang: Language;
  onSelectSpaceById: (spaceId: string) => void;
  onOpenBooking: () => void;
}

export const AllCardsShowcase: React.FC<AllCardsShowcaseProps> = ({
  lang,
  onSelectSpaceById,
  onOpenBooking,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const t = contentData[lang].allCards;

  const filteredCards = selectedFilter === 'all'
    ? SHOWCASE_CARDS
    : SHOWCASE_CARDS.filter((card) => card.category === selectedFilter);

  const filters = [
    { id: 'all', label: t.filterAll },
    { id: 'rooms', label: t.filterRooms },
    { id: 'lobby', label: t.filterLobby },
    { id: 'banquet', label: t.filterBanquet },
    { id: 'dining', label: t.filterDining },
    { id: 'showroom', label: t.filterShowroom },
  ];

  return (
    <section id="showcase" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs md:text-sm font-extrabold tracking-widest text-[#d94819] uppercase brand-font">
              {t.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-serif tracking-tight leading-tight">
            {t.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-[#0f172a] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((card) => {
            const cardTitle = lang === 'hi' ? card.titleHi : card.title;
            const cardDesc = lang === 'hi' ? card.descriptionHi : card.description;
            const categoryLabel = lang === 'hi' ? card.categoryLabelHi : card.categoryLabel;

            return (
              <div
                key={card.id}
                className="group rounded-3xl bg-[#fdfaf6] border border-[#ebd7c2]/80 hover:border-[#d94819]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Container with Badge */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                  <img
                    src={card.image}
                    alt={cardTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-bold text-slate-900 bg-white/90 backdrop-blur-md rounded-full shadow-xs">
                      {categoryLabel}
                    </span>
                  </div>

                  {/* Top Right ROI Metric */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-extrabold text-white bg-emerald-600/90 backdrop-blur-md rounded-full shadow-xs">
                      <TrendingUp className="w-3 h-3" />
                      <span>{card.metrics}</span>
                    </span>
                  </div>

                  {/* Bottom Image Overlay: Cities */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-semibold text-slate-200 z-10">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>{card.cities}</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-serif leading-snug group-hover:text-[#d94819] transition-colors">
                      {cardTitle}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cardDesc}
                    </p>

                    {/* SEO Keyword Chips */}
                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                      {card.seoKeywords.map((kw, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectSpaceById(card.tourId)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#0f172a] hover:bg-[#d94819] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all"
                    >
                      <Eye className="w-4 h-4 text-amber-300" />
                      <span>{t.viewIn360}</span>
                    </button>
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-[#fcece6] text-slate-700 hover:text-[#d94819] transition-colors"
                      title="Inquire about this space shoot"
                      aria-label="Inquire"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lead banner underneath cards */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#0f172a] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-serif text-white">
              {lang === 'hi'
                ? 'क्या आप अपने होटल, बैंक्वेट या शोरूम के लिए 360° टूर बनवाना चाहते हैं?'
                : 'Need a custom 360° virtual walkthrough for your venue in Punjab?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              {lang === 'hi'
                ? 'चंडीगढ़, अमृतसर, जालंधर और लुधियाना में 48 घंटे के भीतर ऑन-साइट प्रोफेशनल शूट।'
                : '48-hour turn-around shoot & publishing across Chandigarh, Amritsar, Jalandhar & Ludhiana.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+917508094760"
              className="px-5 py-2.5 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-bold hover:bg-slate-100 transition-colors"
            >
              +91 7508094760
            </a>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full bg-[#d94819] hover:bg-[#c23d13] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              {lang === 'hi' ? 'मुफ्त कोटेशन पाएं' : 'Get Free Quote'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
