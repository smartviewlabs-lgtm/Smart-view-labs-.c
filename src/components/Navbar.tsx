import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/siteConfig';
import { Language, contentData } from '../data/translations';

interface NavbarProps {
  lang: Language;
  activePage: 'home' | 'blog';
  onNavigate: (page: 'home' | 'blog', sectionId?: string) => void;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  activePage,
  onNavigate,
  onLanguageChange,
  onOpenBooking,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = contentData[lang].nav;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: 'home' | 'blog',
    sectionId?: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fcf6ee]/90 backdrop-blur-md border-b border-[#ebd7c2]/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3 lg:gap-6">
          {/* Zone 1: Brand Wordmark & Emblem */}
          <a
            href="#/"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center shrink-0"
          >
            <BrandLogo size="md" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-semibold text-slate-700">
            <a
              href="#tours"
              onClick={(e) => handleNavClick(e, 'home', 'tours')}
              className="hover:text-[#ea580c] transition-colors whitespace-nowrap shrink-0"
            >
              {t.tours}
            </a>
            <a
              href="#showcase"
              onClick={(e) => handleNavClick(e, 'home', 'showcase')}
              className="hover:text-[#ea580c] transition-colors whitespace-nowrap shrink-0"
            >
              Spaces Showcase
            </a>
            <a
              href="#street-view"
              onClick={(e) => handleNavClick(e, 'home', 'street-view')}
              className="hover:text-[#ea580c] transition-colors whitespace-nowrap shrink-0"
            >
              {t.streetView}
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'home', 'services')}
              className="hover:text-[#ea580c] transition-colors whitespace-nowrap shrink-0"
            >
              {t.webDesign} & SEO
            </a>
            <a
              href="#punjab-cities"
              onClick={(e) => handleNavClick(e, 'home', 'punjab-cities')}
              className="hover:text-[#ea580c] transition-colors whitespace-nowrap shrink-0"
            >
              {t.cities}
            </a>
            <a
              href="#/blog"
              onClick={(e) => handleNavClick(e, 'blog')}
              className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap shrink-0 ${
                activePage === 'blog'
                  ? 'bg-[#0f172a] text-white shadow-xs'
                  : 'text-[#d94819] bg-[#fcece6]/70 hover:bg-[#fcece6]'
              }`}
            >
              {t.blog}
            </a>
          </nav>

          {/* Zone 3: Actions - Language Toggle, Call, Free Demo CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone link on desktop */}
            <a
              href={SITE_CONFIG.phoneHref}
              className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-[#ea580c] transition-colors bg-white/70 px-3 py-1.5 rounded-full border border-slate-200 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#ea580c]" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            {/* Language Switcher EN / हि (EXACTLY matching screenshot) */}
            <div className="flex items-center p-0.5 bg-slate-200/80 rounded-full border border-slate-300/60 shadow-xs">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                  lang === 'en'
                    ? 'bg-[#ea580c] text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('hi')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                  lang === 'hi'
                    ? 'bg-[#ea580c] text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
                aria-label="Switch to Hindi"
              >
                हिं
              </button>
            </div>

            {/* Free Demo CTA Button (Red-Orange rounded button matching screenshot) */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-white bg-[#d94819] hover:bg-[#c23d13] active:scale-95 transition-all rounded-full shadow-md hover:shadow-lg whitespace-nowrap shrink-0"
            >
              {t.freeDemo}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-full hover:bg-slate-200/60 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf5ed] border-b border-[#ebd7c2] shadow-xl px-5 pt-3 pb-6 animate-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-3 font-semibold text-slate-800">
            <a
              href="#tours"
              onClick={(e) => handleNavClick(e, 'home', 'tours')}
              className="py-2 border-b border-slate-200/50 hover:text-[#ea580c]"
            >
              {t.tours}
            </a>
            <a
              href="#showcase"
              onClick={(e) => handleNavClick(e, 'home', 'showcase')}
              className="py-2 border-b border-slate-200/50 hover:text-[#ea580c]"
            >
              Luxury Spaces Showcase
            </a>
            <a
              href="#street-view"
              onClick={(e) => handleNavClick(e, 'home', 'street-view')}
              className="py-2 border-b border-slate-200/50 hover:text-[#ea580c]"
            >
              {t.streetView}
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'home', 'services')}
              className="py-2 border-b border-slate-200/50 hover:text-[#ea580c]"
            >
              {t.webDesign} & Local SEO
            </a>
            <a
              href="#punjab-cities"
              onClick={(e) => handleNavClick(e, 'home', 'punjab-cities')}
              className="py-2 border-b border-slate-200/50 hover:text-[#ea580c]"
            >
              {t.cities} (Chandigarh, Amritsar, Jalandhar, Ludhiana)
            </a>
            <a
              href="#/blog"
              onClick={(e) => handleNavClick(e, 'blog')}
              className={`py-2.5 px-3 rounded-xl flex items-center justify-between ${
                activePage === 'blog'
                  ? 'bg-[#0f172a] text-white'
                  : 'bg-[#fcece6]/70 text-[#d94819]'
              }`}
            >
              <span>{t.blog}</span>
              <span className="text-xs font-bold">New →</span>
            </a>

            {/* Direct Contact Links in Mobile Menu */}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-bold shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#ea580c]" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppUrl(
                  'Hello Smart View Labs, I want to book a 360 Virtual Tour and Digital Marketing consultation.'
                )}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp: {SITE_CONFIG.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full mt-1 py-3 text-white bg-[#d94819] hover:bg-[#c23d13] rounded-xl text-center font-bold text-sm shadow-md"
              >
                {t.freeDemo}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
