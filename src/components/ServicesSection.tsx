import React from 'react';
import { Language, contentData } from '../data/translations';
import { Compass, Globe, Search, Megaphone, Check, ShieldCheck, Zap, TrendingUp, BarChart3 } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onOpenBooking }) => {
  const t = contentData[lang].services;

  const services = [
    {
      number: '01',
      title: 'Interactive 360° Web Tours (Custom Hotspots)',
      titleHi: 'इंटरएक्टिव 360° वेब टूअर्स (कस्टम हॉटस्पॉट्स)',
      tagline: 'High-Retention Virtual Spaces',
      taglineHi: 'उच्च-ग्राहक जुड़ाव वाले वर्चुअल टूअर्स',
      description: 'Ultra-HD 16K panoramic walk-throughs equipped with interactive media hotspots, audio commentary, dynamic floor plans, and direct booking engines.',
      descriptionHi: 'अल्ट्रा-एचडी 16K पैनोरमिक वॉकथ्रू जिसमें इंफो पॉपअप, ऑडियो कमेंटरी, फ्लोर प्लान और सीधे ऑनलाइन बुकिंग की सुविधा शामिल है।',
      icon: Compass,
      highlights: [
        'Custom interactive info hotspots with photos & video',
        'Direct booking / WhatsApp click triggers inside tour',
        'Mobile gyro & VR headset compatible (Meta Quest / Cardboard)',
        'Embeddable in 1 line of code on any website platform',
      ],
      seoKeywords: 'Interactive 360 Web Tours Punjab, Custom Hotspot Virtual Tour, 360 Panorama Photography',
    },
    {
      number: '02',
      title: 'Google Business Profile & Local SEO',
      titleHi: 'गूगल बिजनेस प्रोफाइल और लोकल एसईओ',
      tagline: '#1 Rank on Google Maps 3-Pack',
      taglineHi: 'गूगल मैप्स लोकल पैक में #1 रैंकिंग',
      description: 'Official Google Street View upload and local search optimization. Elevate your Chandigarh, Amritsar, Jalandhar, and Ludhiana business to the top of Google Maps.',
      descriptionHi: 'आधिकारिक गूगल स्ट्रीट व्यू सर्टिफिकेशन और लोकल सर्च इंजन ऑप्टिमाइजेशन। पंजाब के अपने शहर में गूगल मैप्स सर्च में सबसे ऊपर आएं।',
      icon: Search,
      highlights: [
        'Official Google Street View Trusted verification',
        'Google Maps Local 3-Pack top ranking strategy',
        'High-converting local citation audit & schema markup',
        'Direct phone call & navigation direction boost',
      ],
      seoKeywords: 'Google Street View Agency Chandigarh, Local SEO Ludhiana, Google Business Profile Ranking Amritsar, GBP Optimization Jalandhar',
    },
    {
      number: '03',
      title: 'Custom Websites Designing',
      titleHi: 'कस्टम वेबसाइट डिजाइनिंग',
      tagline: 'Ultra-Fast, High-Converting Web Portals',
      taglineHi: 'अल्ट्रा-फास्ट और आधुनिक वेबसाइट्स',
      description: 'Bespoke corporate websites built for luxury hospitality, real estate builders, automobile showrooms, and premium retail brands with seamless 360° embeds.',
      descriptionHi: 'होटल्स, रिजॉर्ट्स, शोरूम्स और रियल एस्टेट के लिए अत्याधुनिक, मोबाइल-फ्रेंडली और सुपरफास्ट लोडिंग कस्टम वेबसाइट डिजाइन।',
      icon: Globe,
      highlights: [
        'Mobile-first responsive architecture (iOS & Android)',
        'Sub-second load times with 95+ Google PageSpeed score',
        'Seamless fullscreen 360° panorama integration',
        'Integrated CRM & WhatsApp automated lead capture',
      ],
      seoKeywords: 'Website Designing Ludhiana, Web Design Agency Chandigarh, Custom Hotel Website Punjab, Luxury Web Development Jalandhar',
    },
    {
      number: '04',
      title: 'Custom Websites & Meta/Google Ads',
      titleHi: 'मेटा और गूगल विज्ञापन अभियान',
      tagline: 'High-ROI Paid Lead Generation',
      taglineHi: 'उच्च-आरओआई लक्षित विज्ञापन',
      description: 'Laser-targeted Google Search, Google Display, Instagram, and Facebook ad funnels driving verified wedding inquiries, room stays, and showroom walk-ins.',
      descriptionHi: 'गूगल सर्च, यूट्यूब और मेटा (इंस्टाग्राम/फेसबुक) पर सटीक टार्गेटेड कैंपेन, जिससे आपकी प्रॉपर्टी पर लगातार कॉल और बुकिंग्स आती रहें।',
      icon: Megaphone,
      highlights: [
        'High-intent Google Ads search keyword targeting',
        'Geo-targeted Punjab & NRI audience Meta campaigns',
        'End-to-end conversion tracking & ROAS analytics',
        'Retargeting users who toured your 360° space',
      ],
      seoKeywords: 'Google Ads Agency Punjab, Meta Ads for Banquet Halls, Hospitality Digital Marketing Chandigarh, Lead Generation Ludhiana',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#faf4eb] border-t border-[#ebd7c2]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
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

        {/* 4 Core Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const title = lang === 'hi' ? srv.titleHi : srv.title;
            const tagline = lang === 'hi' ? srv.taglineHi : srv.tagline;
            const desc = lang === 'hi' ? srv.descriptionHi : srv.description;

            return (
              <div
                key={idx}
                className="rounded-3xl bg-white p-7 sm:p-9 border border-[#ebd7c2] shadow-sm hover:shadow-xl hover:border-[#d94819]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#d94819] brand-font font-mono">
                      {srv.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#fdf2eb] text-[#d94819] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {tagline}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif leading-snug">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {desc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-6 space-y-2.5">
                    {srv.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom SEO keyword pill & Action */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Keywords: <span className="text-slate-800 font-semibold">{srv.seoKeywords.split(',')[0]}</span>
                  </span>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="text-xs font-bold text-[#d94819] hover:text-[#b3350c] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Request Details</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Smart View Immersive Advantage - Modern Editorial Style */}
        <div className="mt-16 rounded-3xl bg-white border border-[#ebd7c2] p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-extrabold tracking-widest text-[#d94819] uppercase brand-font">
              {lang === 'hi' ? 'स्मार्ट व्यू लैब्स का विशिष्ट दृष्टिकोण' : 'THE SMART VIEW ADVANTAGE'}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-slate-900 mt-2 leading-tight">
              {lang === 'hi'
                ? 'पंजाब के व्यवसायों के लिए 360° रूपांतरण और ब्रांड विश्वसनीयता'
                : 'Engineered for Real-World Footfall & Digital Conversions'}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              {lang === 'hi'
                ? 'हम केवल फोटो नहीं खींचते—हम आपके होटल, बैंक्वेट, शोरूम और रेस्तरां को एक उच्च-रूपांतरण डिजिटल अनुभव में बदलते हैं जो सीधे ग्राहक और बुकिंग लाता है।'
                : 'Beyond panoramic photography: we engineer complete immersive brand ecosystems combining certified Google Maps visibility, interactive multimedia triggers, and high-intent local SEO.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#faf4eb] border border-[#ebd7c2]/80 hover:border-[#d94819]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white text-[#d94819] flex items-center justify-center font-bold text-sm shadow-xs mb-4">
                01
              </div>
              <h4 className="text-base font-bold text-slate-900 font-serif">
                {lang === 'hi' ? '16K अल्ट्रा-एचडीआर कैप्चर' : '16K Ultra-HDR Spatial Capture'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {lang === 'hi'
                  ? 'शून्य विरूपण और प्राकृतिक प्रकाश के साथ पंजाब के भव्य बैंक्वेट और लक्ज़री रूम्स का स्पष्ट प्रदर्शन।'
                  : 'Multi-exposure bracketed imaging preserves genuine ambiance, crystal chandelier reflections, and architectural depth with zero lens distortion.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf4eb] border border-[#ebd7c2]/80 hover:border-[#d94819]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center font-bold text-sm shadow-xs mb-4">
                02
              </div>
              <h4 className="text-base font-bold text-slate-900 font-serif">
                {lang === 'hi' ? 'आधिकारिक गूगल स्ट्रीट व्यू' : 'Google Street View Integration'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {lang === 'hi'
                  ? 'स्थायी गूगल सर्वर होस्टिंग और गूगल मैप्स लोकल 3-पैक में स्थानीय सर्च रैंकिंग का विशेष लाभ।'
                  : 'Official GPS blue-line integration published directly on Google Maps, permanently hosted with lifetime zero recurring maintenance fees.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf4eb] border border-[#ebd7c2]/80 hover:border-[#d94819]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white text-emerald-600 flex items-center justify-center font-bold text-sm shadow-xs mb-4">
                03
              </div>
              <h4 className="text-base font-bold text-slate-900 font-serif">
                {lang === 'hi' ? 'व्हाट्सएप डायरेक्ट बुकिंग' : 'Direct Action Hotspot Logic'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {lang === 'hi'
                  ? 'टूर के भीतर ही मेनू, स्पेसिफिकेशन और सीधे व्हाट्सएप टेस्ट ड्राइव या रूम बुकिंग का एक-क्लिक विकल्प।'
                  : 'Transform passive 360° exploration into qualified leads with embedded video showcases, spec sheets, and one-tap WhatsApp inquiries.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf4eb] border border-[#ebd7c2]/80 hover:border-[#d94819]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white text-purple-600 flex items-center justify-center font-bold text-sm shadow-xs mb-4">
                04
              </div>
              <h4 className="text-base font-bold text-slate-900 font-serif">
                {lang === 'hi' ? 'स्थानीय पंजाब एसईओ रणनीति' : 'Punjab Regional Domination'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {lang === 'hi'
                  ? 'चंडीगढ़, अमृतसर, जालंधर और लुधियाना के स्थानीय खरीदारों और एनआरआई परिवारों तक सीधी पहुंच।'
                  : 'Hyper-targeted geo-citations and custom schema markup optimized for NRI wedding decision-makers and high-net-worth local clientele.'}
              </p>
            </div>
          </div>

          {/* Action strip */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-600 font-medium text-center sm:text-left">
              Serving Chandigarh Tricity · Amritsar · Jalandhar · Ludhiana with rapid on-site dispatch.
            </div>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full bg-[#0f172a] hover:bg-[#d94819] text-white text-xs sm:text-sm font-bold shadow-md transition-all whitespace-nowrap"
            >
              {lang === 'hi' ? 'प्रॉपर्टी वॉकथ्रू परामर्श शेड्यूल करें' : 'Schedule Property Consultation'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
