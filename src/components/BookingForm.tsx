import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Phone, MessageSquare, X, CheckCircle, Sparkles, Send } from 'lucide-react';
import { Language, contentData } from '../data/translations';

interface BookingFormProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  lang,
  isOpen,
  onClose,
}) => {
  const t = contentData[lang].booking;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    city: 'Chandigarh',
    service: '360° Virtual Tour + Google Street View',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // safe fallback
    }
  };

  const generateWhatsAppLink = () => {
    const text = `Hello Smart View Labs! I would like to book a 360° Virtual Tour & Digital Marketing consultation:
Name: ${formData.name || 'Client'}
Business: ${formData.business || 'Property'}
City: ${formData.city}
Service: ${formData.service}
Contact: ${formData.phone || '+91 7508094760'}`;
    return `https://wa.me/917508094760?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#fdfaf6] rounded-3xl shadow-2xl border border-[#ebd7c2] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="p-6 bg-gradient-to-r from-[#0c2d48] to-[#0d3b66] text-white flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-widest brand-font">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart View Labs · Punjab</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
              {t.title}
            </h3>
            <p className="text-xs text-cyan-100/80 mt-1">
              {t.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h4 className="text-xl font-bold font-serif text-slate-900">
                {lang === 'hi' ? 'अनुरोध प्राप्त हुआ!' : 'Consultation Request Received!'}
              </h4>

              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                {lang === 'hi'
                  ? 'धन्यवाद! हमारी टीम 2 घंटे के भीतर आपसे संपर्क करेगी। त्वरित बातचीत के लिए आप सीधे व्हाट्सएप पर भी चैट कर सकते हैं।'
                  : 'Thank you! Our Punjab shoot director will reach out within 2 hours. For instant scheduling, connect directly via WhatsApp.'}
              </p>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Send Details on WhatsApp (+91 7508094760)</span>
                </a>

                <a
                  href="tel:+917508094760"
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Direct Call: +91 7508094760</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 pt-2"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.fullName} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramjeet Singh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#d94819] text-sm bg-white"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.phone} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#d94819] text-sm bg-white"
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.businessName}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Grand Royal Resort / Aurora Motors"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#d94819] text-sm bg-white"
                />
              </div>

              {/* City Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t.city} *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#d94819] text-sm bg-white"
                  >
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Amritsar">Amritsar</option>
                    <option value="Jalandhar">Jalandhar</option>
                    <option value="Ludhiana">Ludhiana</option>
                    <option value="Mohali">Mohali</option>
                    <option value="Panchkula">Panchkula</option>
                    <option value="Zirakpur">Zirakpur</option>
                    <option value="Patiala">Patiala</option>
                    <option value="Bathinda">Bathinda</option>
                    <option value="Other Punjab Location">Other Punjab Location</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#d94819] text-sm bg-white"
                  >
                    <option value="360° Virtual Tour + Google Street View">360° Tour + Street View</option>
                    <option value="Google Business Profile & Local SEO">Google Maps & Local SEO</option>
                    <option value="Custom Website Designing">Custom Website Design</option>
                    <option value="Meta & Google Ads Campaign">Meta & Google Ads</option>
                    <option value="Full Agency Growth Package">Complete Growth Package</option>
                  </select>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 space-y-2.5">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#d94819] hover:bg-[#c23d13] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.submit}</span>
                </button>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-slate-200" />
                  <span className="flex-shrink mx-3 text-xs text-slate-400 font-semibold">OR CONNECT INSTANTLY</span>
                  <div className="flex-grow border-t border-slate-200" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/917508094760?text=Hello%20Smart%20View%20Labs%2C%20I%20want%20to%20discuss%20a%20360%20Virtual%20Tour%20and%20Digital%20Marketing%20project."
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>WhatsApp Us</span>
                  </a>

                  <a
                    href="tel:+917508094760"
                    className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-amber-300" />
                    <span>+91 7508094760</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
