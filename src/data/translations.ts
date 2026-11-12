export type Language = 'en' | 'hi';

export interface Translations {
  nav: {
    tours: string;
    streetView: string;
    webDesign: string;
    marketing: string;
    cities: string;
    contact: string;
    freeDemo: string;
    callNow: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subtitle: string;
    dragPrompt: string;
    autoRotateOn: string;
    autoRotateOff: string;
    zoomIn: string;
    zoomOut: string;
    fullscreen: string;
  };
  spaces: {
    hotel: string;
    showroom: string;
    restaurant: string;
    banquet: string;
  };
  details: {
    aboutSpace: string;
    hotspotsTitle: string;
    includesTitle: string;
    clickToFocus: string;
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
    selectCity: string;
    serviceNeeded: string;
    submit: string;
    whatsappDirect: string;
    orCallDirect: string;
  };
}

export const contentData: Record<Language, Translations> = {
  en: {
    nav: {
      tours: '360° Virtual Tours',
      streetView: 'Google Street View',
      webDesign: 'Website Designing',
      marketing: 'Digital Marketing & SEO',
      cities: 'Punjab Coverage',
      contact: 'Contact Us',
      freeDemo: 'Free Demo',
      callNow: 'Call: +91 7508094760',
    },
    hero: {
      kicker: 'LIVE VIRTUAL TOURS',
      headline: 'Explore our 360° spaces',
      subtitle: 'Drag, zoom and tap the golden hotspots. This is exactly what your customers will experience.',
      dragPrompt: 'Drag to look around',
      autoRotateOn: 'Auto-Rotate',
      autoRotateOff: 'Pause Rotation',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      fullscreen: 'Fullscreen View',
    },
    spaces: {
      hotel: 'Royal Heritage Hotel',
      showroom: 'Luxury Showroom',
      restaurant: 'Fine-Dine Restaurant',
      banquet: 'Grand Banquet Hall',
    },
    details: {
      aboutSpace: 'ABOUT THIS SPACE',
      hotspotsTitle: 'HOTSPOTS IN THIS TOUR',
      includesTitle: 'EVERY TOUR INCLUDES',
      clickToFocus: 'Tap hotspot to inspect',
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
      selectCity: 'Select Punjab City',
      serviceNeeded: 'Select Primary Service',
      submit: 'Request Free Consultation',
      whatsappDirect: 'Chat on WhatsApp (+91 7508094760)',
      orCallDirect: 'Direct Call: +91 7508094760',
    },
  },
  hi: {
    nav: {
      tours: '360° वर्चुअल टूअर',
      streetView: 'गूगल स्ट्रीट व्यू',
      webDesign: 'वेबसाइट डिजाइनिंग',
      marketing: 'डिजिटल मार्केटिंग व एसईओ',
      cities: 'पंजाब कवरेज',
      contact: 'संपर्क करें',
      freeDemo: 'मुफ्त डेमो',
      callNow: 'कॉल: +91 7508094760',
    },
    hero: {
      kicker: 'लाइव वर्चुअल टूर',
      headline: 'हमारे 360° स्पेस का अनुभव लें',
      subtitle: 'खींचे, ज़ूम करें और सुनहरे हॉटस्पॉट पर टैप करें। आपके ग्राहक भी बिल्कुल यही अनुभव करेंगे।',
      dragPrompt: 'देखने के लिए ड्रैग करें',
      autoRotateOn: 'ऑटो-रोटेट',
      autoRotateOff: 'रोटेशन रोकें',
      zoomIn: 'ज़ूम इन',
      zoomOut: 'ज़ूम आउट',
      fullscreen: 'फुलस्क्रीन देखें',
    },
    spaces: {
      hotel: 'रॉयल हेरिटेज होटल',
      showroom: 'लक्ज़री शोरूम',
      restaurant: 'फ़ाइन-डाइन रेस्टोरेंट',
      banquet: 'ग्रैंड बैंक्वेट हॉल',
    },
    details: {
      aboutSpace: 'इस स्पेस के बारे में',
      hotspotsTitle: 'इस टूर के प्रमुख हॉटस्पॉट्स',
      includesTitle: 'हर टूर में शामिल सुविधाएं',
      clickToFocus: 'हॉटस्पॉट पर टैप करके देखें',
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
      title: 'लोकल सर्च और 360° तकनीक में पंजाब का नंबर 1 ब्रांड',
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
      selectCity: 'पंजाब का शहर चुनें',
      serviceNeeded: 'आवश्यक सेवा चुनें',
      submit: 'मुफ्त डेमो का अनुरोध करें',
      whatsappDirect: 'व्हाट्सएप पर बात करें (+91 7508094760)',
      orCallDirect: 'सीधा कॉल करें: +91 7508094760',
    },
  },
};
