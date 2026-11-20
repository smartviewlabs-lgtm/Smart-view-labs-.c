import { useState, useCallback, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TourDetailsSection } from './components/TourDetailsSection';
import { AllCardsShowcase } from './components/AllCardsShowcase';
import { StreetViewSection } from './components/StreetViewSection';
import { ServicesSection } from './components/ServicesSection';
import { PunjabCitiesSection } from './components/PunjabCitiesSection';
import { BlogPostsPage } from './components/BlogPostsPage';
import { BookingForm } from './components/BookingForm';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { TOUR_SPACES, TourSpace } from './data/tourSpaces';
import { Language } from './data/translations';

type ActivePage = 'home' | 'blog';

function getPageFromHash(): ActivePage {
  return window.location.hash.startsWith('#/blog') ? 'blog' : 'home';
}

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activePage, setActivePage] = useState<ActivePage>(() => getPageFromHash());
  const [selectedSpace, setSelectedSpace] = useState<TourSpace>(TOUR_SPACES[0]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      setActivePage(getPageFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const openBooking = useCallback(() => setIsBookingOpen(true), []);
  const closeBooking = useCallback(() => setIsBookingOpen(false), []);

  const handleNavigate = useCallback((page: ActivePage, sectionId?: string) => {
    setActivePage(page);
    if (page === 'blog') {
      window.location.hash = '#/blog';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId) {
      window.location.hash = `#${sectionId}`;
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 40);
      });
    } else {
      window.location.hash = '#/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

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
          activePage={activePage}
          onNavigate={handleNavigate}
          onLanguageChange={setLang}
          onOpenBooking={openBooking}
        />

        <main className="flex-1">
          {activePage === 'blog' ? (
            <BlogPostsPage
              lang={lang}
              onBackHome={() => handleNavigate('home')}
              onOpenBooking={openBooking}
            />
          ) : (
            <>
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
            </>
          )}
        </main>

        <Footer lang={lang} onOpenBooking={openBooking} onNavigate={handleNavigate} />

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
