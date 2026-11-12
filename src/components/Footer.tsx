import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Language } from '../data/translations';
import { Phone, Mail, MessageSquare, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenBooking }) => {
  return (
    <footer className="bg-[#0c1829] text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="lg" lightText={true} />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Punjab’s premier 360° Virtual Tour, Google Street View certification, and custom website designing full-service digital marketing agency.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <a
                href="tel:+917508094760"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#ea580c]" />
                <span className="font-semibold">+91 7508094760 (Direct Calling)</span>
              </a>

              <a
                href="https://wa.me/917508094760"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 fill-current" />
                <span className="font-semibold">WhatsApp: +91 7508094760</span>
              </a>

              <a
                href="mailto:smartviewlabs@gmail.com"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>smartviewlabs@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Core Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#tours" className="hover:text-white transition-colors">
                  Interactive 360° Tours
                </a>
              </li>
              <li>
                <a href="#street-view" className="hover:text-white transition-colors">
                  Google Street View
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Website Designing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Local SEO & Google Ads
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Hotels & Banquet Showcase
                </a>
              </li>
            </ul>
          </div>

          {/* Punjab Cities */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Punjab Regional Hubs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Chandigarh Tricity (Mohali & Panchkula)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Amritsar (Mall Road & Heritage Corridor)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Jalandhar (Model Town & GT Road)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Ludhiana (Ferozepur Rd & Sarabha Nagar)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-500">
                <span>Also serving Zirakpur, Patiala, Bathinda</span>
              </li>
            </ul>
          </div>

          {/* Quick CTA */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Book On-Site Shoot
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ready to double your property inquiries with Google Street View & interactive 360° tours?
            </p>
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full py-3 px-4 rounded-xl bg-[#d94819] hover:bg-[#c23d13] text-white font-bold text-xs shadow-md transition-all text-center"
            >
              Request Free 360° Demo
            </button>
            <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Google Certified Street View Photographers</span>
            </div>
          </div>
        </div>

        {/* SEO Keywords Cloud Strip */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-400 space-y-1.5 leading-relaxed">
          <div className="font-bold text-slate-300 uppercase tracking-wide">
            Digital Marketing & 360° Photography Punjab Keywords:
          </div>
          <p className="text-slate-400">
            360 Virtual Tour Chandigarh · Google Street View certified photographer Punjab · Website Designing Ludhiana · Local SEO Agency Jalandhar · Hotel 360 photography Amritsar · Banquet Hall 3D Walkthrough Ludhiana · Restaurant 360 tour Sector 35 Chandigarh · Google Business Profile optimization Punjab · 16K HDR Virtual Tours · Meta Ads for Marriage Palaces · Zirakpur banquet photography.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Smart View Labs. All Rights Reserved. Serving Punjab & Tricity.
          </div>
          <div className="flex items-center gap-4">
            <span>Direct: +91 7508094760</span>
            <span>·</span>
            <span>smartviewlabs@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
