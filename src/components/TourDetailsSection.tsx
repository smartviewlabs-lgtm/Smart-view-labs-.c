import React from 'react';
import { TourSpace } from '../data/tourSpaces';
import { Language, contentData } from '../data/translations';
import { CheckCircle, Phone, ArrowRight } from 'lucide-react';

interface TourDetailsSectionProps {
  space: TourSpace;
  lang: Language;
  onOpenBooking: () => void;
}

export const TourDetailsSection: React.FC<TourDetailsSectionProps> = ({
  space,
  lang,
  onOpenBooking,
}) => {
  const t = contentData[lang].details;

  return (
    <section className="py-12 md:py-16 bg-warm-dots-subtle border-t border-[#ebd7c2]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About This Space Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs md:text-sm font-extrabold tracking-widest text-[#d94819] uppercase brand-font mb-2">
            {t.aboutSpace}
          </div>

          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-slate-700 bg-white/80 border border-slate-200/80 mb-3 shadow-2xs">
            {lang === 'hi' ? space.categoryHi : space.category}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-serif leading-tight">
            {lang === 'hi' ? space.taglineHi : space.tagline}
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'hi' ? space.descriptionHi : space.description}
          </p>
        </div>

        {/* Every Tour Includes Card (Clean Full-Width Showcase) */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white border border-[#ebd7c2] shadow-lg">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold tracking-widest text-[#d94819] uppercase brand-font mb-2">
              {t.includesTitle}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
              {lang === 'hi'
                ? 'हर 360° वर्चुअल टूर के साथ मिलने वाली संपूर्ण सुविधाएं'
                : 'Complete Deliverables Included with Every 360° Shoot'}
            </h3>
          </div>

          {/* Features Grid in 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
            {space.features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#fdfaf6] border border-[#ebd7c2]/60">
                <div className="w-5 h-5 rounded-full bg-[#fcece6] text-[#d94819] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 fill-[#d94819] text-white" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                  {lang === 'hi' ? item.hi : item.en}
                </p>
              </div>
            ))}
          </div>

          {/* Specifications Strip & Booking Action */}
          <div className="pt-8 border-t border-slate-100">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {space.specifications.map((spec, i) => (
                <div key={i} className="bg-[#faf4eb] p-3.5 rounded-2xl border border-slate-200/80">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {spec.label}
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-900 mt-1">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-slate-600 font-medium text-center sm:text-left">
                On-site shoot crews stationed in Chandigarh, Amritsar, Jalandhar & Ludhiana.
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#d94819] hover:bg-[#c23d13] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>{lang === 'hi' ? 'अपने स्पेस के लिए 360° शूट बुक करें' : 'Book a 360° Shoot for Your Property'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+917508094760"
                  className="w-full sm:w-auto px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#d94819]" />
                  <span>+91 7508094760</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
