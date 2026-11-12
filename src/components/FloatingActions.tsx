import React, { useState } from 'react';
import { Phone, MessageSquare, Calendar, ChevronUp } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-slate-700 hover:text-slate-950 shadow-md border border-slate-200/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        title="Back to Top"
        aria-label="Back to Top"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      {/* Floating WhatsApp Action Button */}
      <div className="relative flex items-center">
        {showTooltip && (
          <div className="hidden sm:block absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-lg border border-slate-700 animate-in fade-in slide-in-from-right-2 duration-150">
            WhatsApp Smart View Labs (+91 7508094760)
          </div>
        )}

        <a
          href="https://wa.me/917508094760?text=Hello%20Smart%20View%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20360%20Virtual%20Tour%20and%20Digital%20Marketing%20project."
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:scale-108 active:scale-95 transition-all ring-4 ring-emerald-400/20"
          title="Chat on WhatsApp"
          aria-label="WhatsApp Us"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
        </a>
      </div>

      {/* Mobile quick action pill for direct phone */}
      <div className="sm:hidden flex items-center gap-2">
        <a
          href="tel:+917508094760"
          className="px-3.5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold shadow-lg flex items-center gap-1.5 border border-slate-700"
        >
          <Phone className="w-3.5 h-3.5 text-[#ea580c]" />
          <span>Call Us</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="px-3.5 py-2 rounded-full bg-[#d94819] text-white text-xs font-bold shadow-lg flex items-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Demo</span>
        </button>
      </div>
    </div>
  );
};
