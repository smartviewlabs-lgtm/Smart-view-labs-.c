export type Language = 'en' | 'hi';

export interface Translations {
  nav: {
    tours: string;
    streetView: string;
    webDesign: string;
    cities: string;
    blog: string;
    freeDemo: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subtitle: string;
  };
  details: {
    aboutSpace: string;
    includesTitle: string;
  };
  allCards: {
    badge: string;
    title: string;
    subtitle: string;
    viewIn360: string;
    filterAll: string;
    filterRooms: string;
    filterLobby: string;
    filterBanquet: string;
    filterDining: string;
    filterShowroom: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
  };
  cities: {
    badge: string;
    title: string;
    subtitle: string;
  };
  booking: {
    title: string;
    subtitle: string;
    fullName: string;
    phone: string;
    businessName: string;
    city: string;
    submit: string;
  };
}

export const contentData: Record<Language, Translations> = {
  en: {
    nav: {
      tours: '360° Virtual Tours',
      streetView: 'Google Street View',
      webDesign: 'Website Designing',
      cities: 'Punjab Coverage',
      blog: 'Blog & Posts',
      freeDemo: 'Free Demo',
    },
    hero: {
      kicker: 'LIVE VIRTUAL TOURS',
      headline: 'Explore our 360° spaces',
      subtitle: 'Drag to look around and scroll to zoom. This is exactly what your customers will experience.',
    },
    details: {
      aboutSpace: 'ABOUT THIS SPACE',
      includesTitle: 'EVERY TOUR INCLUDES',
    },
    allCards: {
      badge: 'PREMIUM 360° EXPERIENCES',
      title: 'Showcase Every Corner in Immersive 360°',
      subtitle: 'Give your high-ticket guests an authentic preview of luxury suites, royal lobbies, grand banquet halls, and dining ambiance before they visit.',
      viewIn360: 'Launch 360° Tour',
      filterAll: 'All Spaces',
      filterRooms: 'Luxury Rooms',
      filterLobby: 'Hotel Lobby',
      filterBanquet: 'Banquet Halls',
      filterDining: 'Fine Dining',
      filterShowroom: 'Showrooms',
    },
    services: {
      badge: 'FULL-SERVICE DIGITAL AGENCY',
      title: 'Dominating Local Search & Immersive Tech',
      subtitle: 'Combining certified Google Street View integration, bespoke website development, and targeted performance marketing across Punjab.',
    },
    cities: {
      badge: 'SERVING ACROSS PUNJAB',
      title: 'Premier 360° Tours in Chandigarh, Amritsar, Jalandhar & Ludhiana',
      subtitle: 'Our certified professional shoot crew dispatches across all major cities with guaranteed 48-hour delivery.',
    },
    booking: {
      title: 'Book a Free 360° Demo & Site Consultation',
      subtitle: 'See how an interactive 360° tour and Google Business Profile optimization can double your inquiries.',
      fullName: 'Your Full Name',
      phone: 'Phone / WhatsApp Number',
      businessName: 'Business / Property Name',
      city: 'Your City',
      submit: 'Request Free Consultation',
    },
  },
  hi: {
    nav: {
      tours: '360° वर्चुअल टूअर',
      streetView: 'गूगल स्ट्रीट व्यू',
      webDesign: 'वेबसाइट डिजाइनिंग',
      cities: 'पंजाब कवरेज',
      blog: 'ब्लॉग व पोस्ट',
      freeDemo: 'मुफ्त डेमो',
    },
    hero: {
      kicker: 'लाइव वर्चुअल टूर',
      headline: 'हमारे 360° स्पेस का अनुभव लें',
      subtitle: 'चारों ओर देखने के लिए ड्रैग करें और ज़ूम करने के लिए स्क्रॉल करें। आपके ग्राहक भी बिल्कुल यही अनुभव करेंगे।',
    },
    details: {
      aboutSpace: 'इस स्पेस के बारे में',
      includesTitle: 'हर टूर में शामिल सुविधाएं',
    },
    allCards: {
      badge: 'प्रीमियम 360° अनुभव',
      title: 'अपने होटल, रूम्स, लॉबी और बैंक्वेट को 360° में दिखाएं',
      subtitle: 'चंडीगढ़, अमृतसर, जालंधर और लुधियाना के ग्राहकों को आने से पहले ही अपनी लग्जरी सुविधाओं का जीवंत अनुभव कराएं।',
      viewIn360: '360° टूर शुरू करें',
      filterAll: 'सभी स्पेस',
      filterRooms: 'लक्जरी रूम्स',
      filterLobby: 'होटल लॉबी',
      filterBanquet: 'बैंक्वेट हॉल्स',
      filterDining: 'डाइनिंग एंबियंस',
      filterShowroom: 'शोरूम्स',
    },
    services: {
      badge: 'फुल-सर्विस डिजिटल एजेंसी',
      title: 'लोकल सर्च और 360° तकनीक में अग्रणी डिजिटल एजेंसी',
      subtitle: 'प्रमाणित गूगल स्ट्रीट व्यू, आधुनिक वेबसाइट डिजाइनिंग और मेटा/गूगल ऐड्स से बिजनेस लीड्स कई गुना बढ़ाएं।',
    },
    cities: {
      badge: 'संपूर्ण पंजाब में सेवारत',
      title: 'चंडीगढ़, अमृतसर, जालंधर और लुधियाना में शीर्ष 360° टूर सेवाएं',
      subtitle: 'हमारी प्रशिक्षित टीम पंजाब के हर शहर में 48 घंटे के भीतर ऑन-साइट शूट और डिलीवरी प्रदान करती है।',
    },
    booking: {
      title: 'मुफ्त 360° डेमो और कंसल्टेशन बुक करें',
      subtitle: 'जानें कैसे 360° वर्चुअल टूर और गूगल बिजनेस प्रोफाइल ऑप्टिमाइजेशन से आपके ग्राहक दोगुने हो सकते हैं।',
      fullName: 'आपका नाम',
      phone: 'फोन / व्हाट्सएप नंबर',
      businessName: 'बिजनेस / होटल का नाम',
      city: 'आपका शहर',
      submit: 'मुफ्त डेमो का अनुरोध करें',
    },
  },
};
