import React from 'react';
import { Language } from '../data/translations';
import { SITE_CONFIG } from '../data/siteConfig';
import { CheckCircle2, Award, ArrowRight } from 'lucide-react';
import hotelSuiteImg from '../assets/images/hotel_suite_luxury_360_1794489894032.jpg';

interface StreetViewSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const StreetViewSection: React.FC<StreetViewSectionProps> = ({
  lang,
  onOpenBooking,
}) => {
  return (
    <section id="street-view" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Proposition & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wide">
              <Award className="w-4 h-4 text-blue-600" />
              <span>Official Google Street View Integration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
              {lang === 'hi'
                ? 'गूगल मैप्स और स्ट्रीट व्यू पर आपका बिजनेस बने #1'
                : 'Turn Google Maps Searches into Footfall & Direct Bookings'}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {lang === 'hi'
                ? 'जब भी कोई ग्राहक चंडीगढ़, अमृतसर, जालंधर या लुधियाना में आपके सेक्टर या इलाके में सर्च करे, आपकी 360° प्रोफाइल गूगल के लोकल 3-पैक में सबसे ऊपर दिखेगी।'
                : 'When travelers and luxury buyers search for hotels, banquets, car showrooms, or restaurants in Punjab, 360° Street View listings receive 2x more interest and drive 3x more phone calls.'}
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Direct Google Maps Upload</div>
                  <p className="text-xs text-slate-500">Official Blue Line GPS geo-tagged placement</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Local SEO Schema & GBP Boost</div>
                  <p className="text-xs text-slate-500">Google Business Profile ranking optimization</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">100% Lifetime Hosting Free</div>
                  <p className="text-xs text-slate-500">Hosted permanently on Google servers with zero recurring fee</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Mobile & iOS Integration</div>
                  <p className="text-xs text-slate-500">Seamless navigation for Android Google Maps & Apple Maps</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-[#0f172a] hover:bg-[#d94819] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Schedule Google Street View Shoot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={SITE_CONFIG.phoneHref}
                className="text-xs sm:text-sm font-bold text-slate-700 hover:text-[#d94819] transition-colors py-2"
              >
                Punjab Desk: {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Mock Card & Visual Proof */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-[#faf4eb] border border-[#ebd7c2] p-6 sm:p-8 shadow-xl">
              {/* Google Brand Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center font-bold text-xs text-blue-600">
                    G
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Google Business Profile</div>
                    <div className="text-[10px] text-slate-500">Street View & 360° Photography</div>
                  </div>
                </div>

                <span className="px-2.5 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 rounded-full">
                  Verified Top 3-Pack
                </span>
              </div>

              {/* Mock Street View Window */}
              <div className="relative mt-5 aspect-16/10 rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                <img
                  src={hotelSuiteImg}
                  alt="Street View Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

                {/* Street View Pegman overlay */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-white font-medium flex items-center gap-1.5 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Google Street View · 360°</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-bold">Punjab Luxury Venue Showcase</div>
                  <div className="text-[10px] text-slate-300">{SITE_CONFIG.citiesEn}</div>
                </div>
              </div>

              {/* Performance Metrics Strip */}
              <div className="mt-5 grid grid-cols-2 gap-3 text-center">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xl font-extrabold text-blue-600 brand-font tabular-nums">+200%</div>
                  <div className="text-[11px] font-medium text-slate-600 mt-0.5">More Business Clicks</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xl font-extrabold text-emerald-600 brand-font tabular-nums">48 hrs</div>
                  <div className="text-[11px] font-medium text-slate-600 mt-0.5">Live on Google Maps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
