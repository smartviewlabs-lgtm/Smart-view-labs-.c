import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TourDetailsSection } from './components/TourDetailsSection';
import { AllCardsShowcase } from './components/AllCardsShowcase';
import { StreetViewSection } from './components/StreetViewSection';
import { ServicesSection } from './components/ServicesSection';
import { PunjabCitiesSection } from './components/PunjabCitiesSection';
import { BookingForm } from './components/BookingForm';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { TOUR_SPACES, TourSpace } from './data/tourSpaces';
import { Language } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  // Initialize with 'luxury-showroom' as depicted in screenshot 1 and 2
  const [selectedSpace, setSelectedSpace] = useState<TourSpace>(TOUR_SPACES[0]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Switch space
  const handleSelectSpace = (space: TourSpace) => {
    setSelectedSpace(space);
  };

  // Switch space by ID from showcase cards and smoothly scroll up to the 360 tour
  const handleSelectSpaceById = (spaceId: string) => {
    const space = TOUR_SPACES.find((s) => s.id === spaceId || s.slug === spaceId);
    if (space) {
      setSelectedSpace(space);
      const toursSection = document.getElementById('tours');
      if (toursSection) {
        toursSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf6ee] text-slate-800 flex flex-col font-sans selection:bg-[#ea580c] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with Clean 360 Viewer */}
        <HeroSection
          lang={lang}
          selectedSpace={selectedSpace}
          onSelectSpace={handleSelectSpace}
        />

        {/* About This Space & Inclusions */}
        <TourDetailsSection
          space={selectedSpace}
          lang={lang}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* ALL CARDS Showcase - Luxury Rooms, Lobby, Banquet, Dining */}
        <AllCardsShowcase
          lang={lang}
          onSelectSpaceById={handleSelectSpaceById}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Google Street View Certification & Google Maps Local SEO */}
        <StreetViewSection
          lang={lang}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Full-Service Digital Marketing Agency & 4 Pillars */}
        <ServicesSection
          lang={lang}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Punjab Regional Hubs: Chandigarh, Amritsar, Jalandhar, Ludhiana */}
        <PunjabCitiesSection
          lang={lang}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Floating Action Trigger (WhatsApp & Call) */}
      <FloatingActions onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Lead Capture & Free Demo Consultation Modal */}
      <BookingForm
        lang={lang}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
