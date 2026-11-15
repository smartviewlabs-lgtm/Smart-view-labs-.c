import { useState, useCallback } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
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
  const [selectedSpace, setSelectedSpace] = useState<TourSpace>(TOUR_SPACES[0]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = useCallback(() => setIsBookingOpen(true), []);
  const closeBooking = useCallback(() => setIsBookingOpen(false), []);

  const handleSelectSpace = useCallback((space: TourSpace) => {
    setSelectedSpace(space);
  }, []);

  const handleSelectSpaceById = useCallback((spaceId: string) => {
    const space = TOUR_SPACES.find((s) => s.id === spaceId || s.slug === spaceId);
    if (space) {
      setSelectedSpace(space);
      const toursSection = document.getElementById('tours');
      if (toursSection) {
        toursSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#fcf6ee] text-slate-800 flex flex-col font-sans selection:bg-[#ea580c] selection:text-white">
        <Navbar
          lang={lang}
          onLanguageChange={setLang}
          onOpenBooking={openBooking}
        />

        <main className="flex-1">
          <HeroSection
            lang={lang}
            selectedSpace={selectedSpace}
            onSelectSpace={handleSelectSpace}
          />

          <TourDetailsSection
            space={selectedSpace}
            lang={lang}
            onOpenBooking={openBooking}
          />

          <AllCardsShowcase
            lang={lang}
            onSelectSpaceById={handleSelectSpaceById}
            onOpenBooking={openBooking}
          />

          <StreetViewSection
            lang={lang}
            onOpenBooking={openBooking}
          />

          <ServicesSection
            lang={lang}
            onOpenBooking={openBooking}
          />

          <PunjabCitiesSection
            lang={lang}
            onOpenBooking={openBooking}
          />
        </main>

        <Footer lang={lang} onOpenBooking={openBooking} />

        <FloatingActions onOpenBooking={openBooking} />

        <BookingForm
          lang={lang}
          isOpen={isBookingOpen}
          onClose={closeBooking}
        />
      </div>
    </ErrorBoundary>
  );
}
