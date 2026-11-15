import React, { useState } from 'react';
import { Language, contentData } from '../data/translations';
import { SITE_CONFIG } from '../data/siteConfig';
import { MapPin, Building, ShieldCheck, Clock, Phone, ArrowRight } from 'lucide-react';

interface PunjabCitiesSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const PunjabCitiesSection: React.FC<PunjabCitiesSectionProps> = ({
  lang,
  onOpenBooking,
}) => {
  const t = contentData[lang].cities;
  const [activeCityId, setActiveCityId] = useState<string>('chandigarh');

  const cities = [
    {
      id: 'chandigarh',
      name: 'Chandigarh Tricity',
      nameHi: 'चंडीगढ़ ट्राइसिटी (मोहाली व पंचकूला)',
      tagline: 'Modern Architecture & Luxury Retail Capital',
      taglineHi: 'आधुनिक आर्किटेक्चर व लक्ज़री रिटेल',
      coverage: 'Sector 17, Sector 35, IT Park, Aerocity Mohali, Zirakpur & Panchkula',
      description: 'Chandigarh’s premier provider for Google Street View certified virtual tours. We work with leading 5-star hotels, automobile dealerships on Madhya Marg, and Zirakpur wedding resorts.',
      descriptionHi: 'चंडीगढ़, मोहाली और जीरकपुर के प्रमुख 5-स्टार होटलों, लक्जरी ऑटोमोबाइल शोरूम और वेडिंग रिजॉर्ट्स के लिए अधिकृत 360° वर्चुअल टूर पार्टनर।',
      clientCount: '48+ Spaces Published',
      topSectors: ['5-Star Luxury Hotels', 'Auto Dealerships', 'Fine Dining Cafes', 'Corporate Offices'],
      seoKeywords: '360 virtual tour Chandigarh, Google Street View Mohali, Web Designing Zirakpur, Local SEO Tricity',
    },
    {
      id: 'amritsar',
      name: 'Amritsar',
      nameHi: 'अमृतसर',
      tagline: 'Heritage Hospitality & International Tourism',
      taglineHi: 'हेरिटेज हॉस्पिटैलिटी व अंतरराष्ट्रीय पर्यटन',
      coverage: 'Mall Road, Ranjit Avenue, Golden Temple Corridor, Airport Road, GT Road',
      description: 'Capture international and NRI pilgrims before they arrive. Our 360° walkthroughs help Amritsar hotels, boutique homestays, and grand marriage palaces maximize direct online bookings.',
      descriptionHi: 'अमृतसर आने वाले देश-विदेश और एनआरआई पर्यटकों को लुभाने के लिए 360° हेरिटेज होटल टूअर्स। डायरेक्ट रूम और बैंक्वेट बुकिंग्स में भारी बढ़ोतरी।',
      clientCount: '32+ Spaces Published',
      topSectors: ['Heritage Hotels & Resorts', 'Destination Wedding Palaces', 'Authentic Dining', 'Jewelry Showrooms'],
      seoKeywords: '360 hotel tour Amritsar, Google Street View Amritsar, Banquet hall photography Amritsar, Wedding Palace 3D view',
    },
    {
      id: 'jalandhar',
      name: 'Jalandhar',
      nameHi: 'जालंधर',
      tagline: 'NRI Hub, Healthcare & Sports Industry',
      taglineHi: 'एनआरआई हब, हेल्थकेयर व खेल उद्योग',
      coverage: 'Model Town, BMC Chowk, GT Road, Cantt, Nakodar Road, Rama Mandi',
      description: 'Serving Jalandhar’s prestigious NRI community and medical tourism sector. We specialize in 360° tours for superspecialty hospitals, education campuses, and Model Town luxury dining.',
      descriptionHi: 'जालंधर के प्रतिष्ठित एनआरआई परिवारों और मेडिकल टूरिज्म के लिए आधुनिक 360° टूअर्स। अस्पताल, स्कूल और मॉडल टाउन के रेस्तरां के लिए बेस्ट।',
      clientCount: '28+ Spaces Published',
      topSectors: ['Superspecialty Hospitals', 'NRI Wedding Resorts', 'Fine Dining & Lounges', 'Private Universities'],
      seoKeywords: '360 tour Jalandhar, Hospital 360 virtual tour Jalandhar, Local SEO Jalandhar, Model Town 360 view',
    },
    {
      id: 'ludhiana',
      name: 'Ludhiana',
      nameHi: 'लुधियाना',
      tagline: 'Industrial Powerhouse & Mega Banquets',
      taglineHi: 'औद्योगिक राजधानी व भव्य मैरिज पैलेसेज',
      coverage: 'Ferozepur Road, Sarabha Nagar, South City, Pakhowal Road, Industrial Area',
      description: 'Ludhiana hosts Punjab’s largest high-budget destination weddings. Our high-resolution 360° scans allow NRI families from Canada & UK to inspect seating and mandaps remotely.',
      descriptionHi: 'लुधियाना के भव्य मैरिज पैलेसेज और कॉर्पोरेट शोरूम्स के लिए विशेष 360° शूट। यूके और कनाडा के एनआरआई परिवार दूर बैठकर वेन्यू फाइनल कर सकते हैं।',
      clientCount: '40+ Spaces Published',
      topSectors: ['Mega Marriage Palaces', 'Luxury Auto Showrooms', 'Fashion Boutiques', 'Real Estate Townships'],
      seoKeywords: 'Banquet hall 360 Ludhiana, Google Street View Ludhiana, Website Designing Ludhiana, Ferozepur Road 360 view',
    },
  ];

  const activeCity = cities.find((c) => c.id === activeCityId) || cities[0];

  return (
    <section id="punjab-cities" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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
        </div>

        {/* City Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {cities.map((city) => {
            const isActive = city.id === activeCityId;
            const cityName = lang === 'hi' ? city.nameHi : city.name;

            return (
              <button
                key={city.id}
                type="button"
                onClick={() => setActiveCityId(city.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-xs ${
                  isActive
                    ? 'bg-[#0f172a] text-white shadow-md scale-105'
                    : 'bg-[#faf4eb] text-slate-700 hover:bg-[#ebd7c2]/60'
                }`}
              >
                <MapPin className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-[#d94819]'}`} />
                <span>{cityName}</span>
              </button>
            );
          })}
        </div>

        {/* Active City Feature Spotlight */}
        <div className="rounded-3xl bg-[#faf4eb] border border-[#ebd7c2] p-7 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d94819] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Dedicated Punjab Dispatch Hub</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 leading-tight">
              {lang === 'hi' ? activeCity.nameHi : activeCity.name} · {lang === 'hi' ? activeCity.taglineHi : activeCity.tagline}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {lang === 'hi' ? activeCity.descriptionHi : activeCity.description}
            </p>

            <div className="pt-2">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">
                Prime Neighborhoods & Corridors Covered:
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 bg-white/80 p-3 rounded-xl border border-slate-200">
                {activeCity.coverage}
              </p>
            </div>

            {/* Top Sectors in this city */}
            <div className="pt-2">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">
                Specialized Property Categories:
              </div>
              <div className="flex flex-wrap gap-2">
                {activeCity.topSectors.map((sector, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1 bg-white text-slate-800 rounded-lg border border-slate-200 shadow-2xs"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-[#ebd7c2] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase text-slate-500">Local Presence</span>
                <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  On-Site Dispatch
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#d94819]" />
                <div>
                  <div className="text-xs font-bold text-slate-900">48-Hour Shoot Delivery</div>
                  <div className="text-xs text-slate-500">From HDR capture to live Google Maps link</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-[#d94819]" />
                <div>
                  <div className="text-xs font-bold text-slate-900">{activeCity.clientCount}</div>
                  <div className="text-xs text-slate-500">Verified locations in {activeCity.name}</div>
                </div>
              </div>

              {/* Local SEO keywords */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-600">
                <span className="font-bold text-slate-800">Target Search Queries:</span>
                <div className="mt-1 font-mono text-[10px] text-slate-500 leading-relaxed">
                  {activeCity.seoKeywords}
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-3 px-5 rounded-full bg-[#d94819] hover:bg-[#c23d13] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Book Shoot in {activeCity.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={SITE_CONFIG.phoneHref}
                className="w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#d94819]" />
                <span>Call City Coordinator: {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
