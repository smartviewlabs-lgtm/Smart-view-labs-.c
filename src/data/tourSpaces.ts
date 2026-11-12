import carShowroomImg from '../assets/images/car_showroom_luxury_360_1794489894599.jpg';
import hotelSuiteImg from '../assets/images/hotel_suite_luxury_360_1794489894032.jpg';
import restaurantImg from '../assets/images/restaurant_finedine_360_1794489896391.jpg';
import banquetHallImg from '../assets/images/banquet_hall_punjab_360_1794489894225.jpg';

export interface Hotspot {
  id: string;
  name: string;
  nameHi: string;
  category: string;
  description: string;
  descriptionHi: string;
  // Spherical coordinates for 3D placement (pitch & yaw in degrees)
  yaw: number; // horizontal angle (-180 to 180)
  pitch: number; // vertical angle (-90 to 90)
  highlightTag?: string;
  iconType?: 'pin' | 'car' | 'bed' | 'wine' | 'sparkles' | 'utensils';
}

export interface TourSpace {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  category: string;
  categoryHi: string;
  location: string;
  tagline: string;
  taglineHi: string;
  description: string;
  descriptionHi: string;
  image: string;
  hotspots: Hotspot[];
  features: {
    en: string;
    hi: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const TOUR_SPACES: TourSpace[] = [
  {
    id: 'luxury-showroom',
    slug: 'luxury-showroom',
    title: 'Luxury Showroom',
    titleHi: 'लक्ज़री शोरूम',
    category: 'Retail & Auto',
    categoryHi: 'रिटेल व ऑटोमोबाइल',
    location: 'Sector 35, Chandigarh / Ferozepur Rd, Ludhiana',
    tagline: 'Let buyers walk your floor, inspect every model and book a test drive from home.',
    taglineHi: 'ग्राहकों को घर बैठे अपने शोरूम में घुमाएं, हर कार मॉडल की जांच कराएं और टेस्ट ड्राइव बुक करवाएं।',
    description: 'Ultra-high resolution 360° virtual showroom designed for luxury automobile dealerships and high-end retail studios. Features clickable specification popups, custom paint preview links, and direct WhatsApp sales lead routing.',
    descriptionHi: 'लक्जरी ऑटोमोबाइल डीलरशिप और प्रीमियम रिटेल शोरूम के लिए बनाया गया 360° वर्चुअल वॉकथ्रू। ग्राहक सीधे व्हाट्सएप पर टेस्ट ड्राइव व मूल्य की जानकारी ले सकते हैं।',
    image: carShowroomImg,
    hotspots: [
      {
        id: 'hs-reception',
        name: 'Reception',
        nameHi: 'रिसेप्शन और वेलकम लाउंज',
        category: 'Customer Service',
        description: 'Bespoke marble reception with digital client check-in and dedicated concierge desk.',
        descriptionHi: 'मार्बल फिनिश रिसेप्शन डेस्क जहां ग्राहक सीधे सेल्स कंसल्टेंट से संपर्क कर सकते हैं।',
        yaw: 12,
        pitch: -4,
        iconType: 'pin',
        highlightTag: 'Main Desk',
      },
      {
        id: 'hs-coupe',
        name: 'Sports coupé',
        nameHi: 'स्पोर्ट्स कूपे (रेड एडिशन)',
        category: 'Featured Vehicle',
        description: 'V8 Twin-Turbo luxury coupe with aerodynamic carbon aero kit and hand-stitched leather.',
        descriptionHi: 'ट्विन-टर्बो वी8 स्पोर्ट्स कूपे। 360° एक्सटीरियर और इंटीरियर स्पेसिफिकेशन जांचें।',
        yaw: -60,
        pitch: -12,
        iconType: 'car',
        highlightTag: '0-100 in 2.9s',
      },
      {
        id: 'hs-tourer',
        name: 'Grand tourer',
        nameHi: 'ग्रैंड टूरर वीआईपी',
        category: 'Luxury Fleet',
        description: 'Executive grand tourer with panoramic glass moonroof and dynamic matrix illumination.',
        descriptionHi: 'कार्यकारी क्लास सेडान। लक्जरी कंफर्ट और एडवांस सेफ्टी फीचर्स।',
        yaw: 45,
        pitch: -10,
        iconType: 'car',
        highlightTag: 'Flagship',
      },
      {
        id: 'hs-skyline',
        name: 'City skyline',
        nameHi: 'सिटी स्काईलाइन व ग्लास पवेलियन',
        category: 'Architecture',
        description: 'Floor-to-ceiling acoustic glass frontage offering panoramic views of Chandigarh.',
        descriptionHi: 'पूरी कांच की दीवारें जो शोरूम को दिन में प्राकृतिक रोशनी और भव्य लुक देती हैं।',
        yaw: 135,
        pitch: 15,
        iconType: 'sparkles',
        highlightTag: 'View',
      },
    ],
    features: [
      { en: 'Clickable info hotspots with tech specs & pricing', hi: 'तकनीकी जानकारी और कीमतों के साथ क्लिक करने योग्य हॉटस्पॉट' },
      { en: 'Official Google Street View integration & Maps placement', hi: 'आधिकारिक गूगल स्ट्रीट व्यू और गूगल मैप्स एकीकरण' },
      { en: 'Instant WhatsApp test drive booking trigger', hi: 'तुरंत व्हाट्सएप टेस्ट ड्राइव बुकिंग बटन' },
      { en: 'Ultra-HD HDR 16K bracketed dynamic range captures', hi: 'अल्ट्रा-एचडी एचडीआर 16K डायनामिक रेंज फोटोग्राफी' },
      { en: 'Seamless iframe embed for custom automobile portals', hi: 'वेबसाइट के लिए आसान व सुपरफास्ट 60fps एम्बेड' },
      { en: 'Local SEO citation boost for Chandigarh & Punjab buyers', hi: 'पंजाब भर के खरीदारों के लिए गूगल मैप्स लोकल एसईओ' },
    ],
    specifications: [
      { label: 'Capture Quality', value: '16K Ultra-HDR' },
      { label: 'Delivery Time', value: '48 Hours' },
      { label: 'Street View Status', value: 'Google Certified' },
      { label: 'Mobile Compatibility', value: '100% Touch & Gyro' },
    ],
  },
  {
    id: 'royal-heritage-hotel',
    slug: 'royal-heritage-hotel',
    title: 'Royal Heritage Hotel',
    titleHi: 'रॉयल हेरिटेज होटल',
    category: 'Hospitality & Luxury Suites',
    categoryHi: 'हॉस्पिटैलिटी व लक्जरी सूट्स',
    location: 'Mall Road, Amritsar / Sector 17, Chandigarh',
    tagline: 'Showcase luxury rooms, suites, lobby, and dining ambiance in 360° so guests experience.',
    taglineHi: 'अपने लक्ज़री रूम्स, लॉबी और सुइट्स को 360° में दिखाएं ताकि मेहमान पहले ही मुग्ध हो जाएं।',
    description: 'Immersive 360° walkthrough of a presidential heritage suite and grand royal foyer. Perfect for boutique hotels, resorts, and heritage properties looking to boost direct online room bookings by over 300%.',
    descriptionHi: 'प्रेसिडेंशियल हेरिटेज सुइट और ग्रैंड लॉबी का 360° वर्चुअल टूअर। होटल वेबसाइट्स के लिए डायरेक्ट रूम बुकिंग 3 गुना बढ़ाने में कारगर।',
    image: hotelSuiteImg,
    hotspots: [
      {
        id: 'hs-bed',
        name: 'Presidential Master Suite',
        nameHi: 'प्रेसिडेंशियल मास्टर सुइट',
        category: 'Luxury Suite',
        description: 'King-size carved teakwood bed dressed in 800-thread-count Egyptian cotton with silk drapery.',
        descriptionHi: 'हस्तनिर्मित सागवान की नक्काशीदार किंग बेड और शुद्ध रेशमी पर्दों से सुसज्जित रॉयल बेडरूम।',
        yaw: 48,
        pitch: -14,
        iconType: 'bed',
        highlightTag: 'King Bed',
      },
      {
        id: 'hs-chandelier',
        name: 'Crystal Chandelier & Hearth',
        nameHi: 'क्रिस्टल झूमर और मार्बल फायरप्लेस',
        category: 'Architectural Craft',
        description: 'Hand-cut Bohemian crystal chandelier illuminating Italian Botticino marble and carved fireplace.',
        descriptionHi: 'हाथ से तराशा गया बोहेमियन क्रिस्टल झूमर और इटैलियन मार्बल का शानदार फायरप्लेस।',
        yaw: 0,
        pitch: 28,
        iconType: 'sparkles',
        highlightTag: 'Chandelier',
      },
      {
        id: 'hs-balcony',
        name: 'Panoramic Balcony View',
        nameHi: 'पैनोरमिक बालकनी व गार्डन व्यू',
        category: 'Scenic View',
        description: 'Double-glazed soundproof glass walls overlooking manicured Mughal-inspired hotel gardens.',
        descriptionHi: 'खूबसूरत बगीचे और शहर का मनोरम नजारा दिखाने वाली साउंडप्रूफ बालकनी।',
        yaw: -78,
        pitch: 6,
        iconType: 'pin',
        highlightTag: 'Balcony',
      },
      {
        id: 'hs-lounge',
        name: 'Private Sitting Lounge',
        nameHi: 'प्राइवेट सिटिंग लाउंज',
        category: 'Comfort',
        description: 'Plush velvet armchairs with gold leaf accents for private high tea and client meetings.',
        descriptionHi: 'रॉयल हाई-टी और आरामदायक बैठकों के लिए विशेष मखमली सोफा लाउंज।',
        yaw: -30,
        pitch: -18,
        iconType: 'sparkles',
        highlightTag: 'Lounge',
      },
    ],
    features: [
      { en: 'Direct "Book This Suite" CTA link within the 360 panorama', hi: '360° टूर के भीतर सीधा "बुक दिस रूम" बटन' },
      { en: 'Night / Day ambient lighting comparison mode', hi: 'दिन और रात की एंबियंट लाइटिंग देखने का विकल्प' },
      { en: 'Full Google Business Profile Street View linkage', hi: 'गूगल बिजनेस प्रोफाइल और गूगल मैप्स से पूर्ण लिंकेज' },
      { en: 'Integrated TripAdvisor & Booking.com widget embed', hi: 'ट्रिपएडवाइजर और बुकिंग विजेट्स के अनुकूल' },
      { en: 'Interactive floor plan with click-to-teleport hotspot nodes', hi: 'क्लिक करके कमरे बदलने वाला इंटरएक्टिव फ्लोर प्लान' },
      { en: 'Boosts OTA savings by driving commission-free direct hotel bookings', hi: 'कमीशन-मुक्त डायरेक्ट वेबसाइट बुकिंग में भारी वृद्धि' },
    ],
    specifications: [
      { label: 'Target Segment', value: '5-Star & Heritage Hotels' },
      { label: 'Direct Booking Lift', value: '+320% Average' },
      { label: 'OTA Commission Saved', value: 'Up to 22%' },
      { label: 'Turnaround', value: '2 Business Days' },
    ],
  },
  {
    id: 'fine-dine-restaurant',
    slug: 'fine-dine-restaurant',
    title: 'Fine-Dine Restaurant',
    titleHi: 'फ़ाइन-डाइन रेस्टोरेंट',
    category: 'Dining & Nightlife',
    categoryHi: 'डाइनिंग, बार व नाइटलाइफ',
    location: 'Model Town, Jalandhar / Sarabha Nagar, Ludhiana',
    tagline: 'Showcase candle-lit dining ambiance, cocktail bars, and VIP lounges in 360°.',
    taglineHi: 'कैंडल-लाइट डाइनिंग एंबियंस, कॉकटेल बार और वीआईपी लाउंज को 360° में दिखाएं।',
    description: 'Bespoke virtual walk-through capturing the mood, acoustic warmth, and architectural craftsmanship of fine dining restaurants. Guests can reserve exact private tables and view signature menus inside the tour.',
    descriptionHi: 'फाइन डाइनिंग रेस्टोरेंट और प्रीमियम बार लाउंज के लिए संवादात्मक 360° टूर। ग्राहक अपनी मनपसंद टेबल देखकर सीधे ऑनलाइन रिजर्व कर सकते हैं।',
    image: restaurantImg,
    hotspots: [
      {
        id: 'hs-bar',
        name: 'Artisanal Cocktail Bar',
        nameHi: 'आर्टिसनल कॉकटेल बार व वाइन सेलर',
        category: 'Mixology',
        description: 'Polished walnut bar counter with back-lit single malt displays and expert mixologists.',
        descriptionHi: 'प्रीमियम अखरोट की लकड़ी का बार काउंटर और विश्वस्तरीय पेय मेनू।',
        yaw: 52,
        pitch: -8,
        iconType: 'wine',
        highlightTag: 'Bar',
      },
      {
        id: 'hs-booths',
        name: 'Plush Velvet Dining Booths',
        nameHi: 'रॉयल वेलवेट डाइनिंग बूथ्स',
        category: 'Seating',
        description: 'Curved sapphire velvet banquettes designed for intimate romantic dinners and family celebrations.',
        descriptionHi: 'रोमांटिक डिनर और पारिवारिक समारोहों के लिए आरामदायक नीले मखमली सोफे।',
        yaw: -48,
        pitch: -15,
        iconType: 'utensils',
        highlightTag: 'Booth 04',
      },
      {
        id: 'hs-cellar',
        name: 'Climate-Controlled Wine Wall',
        nameHi: 'तापमान-नियंत्रित वाइन वाल',
        category: 'Collection',
        description: 'Floor-to-ceiling glass enclosed sommelier cellar housing vintage champagnes and old-world reds.',
        descriptionHi: 'पूरी कांच की वाइन डिस्प्ले जिसमें दुर्लभ विंटेज वाइन का संग्रह है।',
        yaw: 85,
        pitch: 12,
        iconType: 'wine',
        highlightTag: 'Wine Cellar',
      },
      {
        id: 'hs-chef',
        name: 'Live Chef Plating Station',
        nameHi: 'लाइव शेफ प्लेटिंग स्टेशन',
        category: 'Experience',
        description: 'Interactive culinary counter where guests observe Michelin-inspired gastronomy techniques.',
        descriptionHi: 'लाइव शेफ काउंटर जहां व्यंजन तैयार करने की कला प्रत्यक्ष देखी जा सकती है।',
        yaw: -12,
        pitch: -6,
        iconType: 'utensils',
        highlightTag: 'Live Kitchen',
      },
    ],
    features: [
      { en: 'Click-to-table reservation integration via WhatsApp or Zomato', hi: 'व्हाट्सएप या जोमैटो के माध्यम से टेबल रिजर्वेशन' },
      { en: 'Digital interactive food & cocktail menu hotspots with photos', hi: 'व्यंजनों और कॉकटेल की तस्वीरों के साथ डिजिटल मेनू' },
      { en: 'Ambiance music & gentle acoustic background embedding', hi: 'बैकग्राउंड संगीत और शांत माहौल का जीवंत अहसास' },
      { en: '100% Google Maps Restaurant Page synchronization', hi: 'गूगल मैप्स रेस्टोरेंट पेज के साथ 100% सिंक्रोनाइज़ेशन' },
      { en: 'Zomato, Swiggy and direct brand website embed', hi: 'सभी डिलीवरी और फूड पोर्टल्स पर इस्तेमाल योग्य' },
      { en: 'Drive high-ticket corporate party & kitty booking inquiries', hi: 'कॉरपोरेट पार्टियों और किटी बुकिंग पूछताछ में भारी इजाफा' },
    ],
    specifications: [
      { label: 'Ideal For', value: 'Fine Dining & Microbreweries' },
      { label: 'Weekend Table Bookings', value: '+185% Growth' },
      { label: 'Google 3-Pack Rank', value: '#1 for Dining In City' },
      { label: 'Mobile Experience', value: 'Zero-Lag 60 FPS' },
    ],
  },
  {
    id: 'grand-banquet-hall',
    slug: 'grand-banquet-hall',
    title: 'Grand Banquet Hall',
    titleHi: 'ग्रैंड बैंक्वेट हॉल',
    category: 'Weddings & Banquets',
    categoryHi: 'शादियां व बैंक्वेट हॉल्स',
    location: 'GT Road, Amritsar / Zirakpur, Chandigarh',
    tagline: 'Showcase grand banquet halls, stage decor, and dining layout for luxury Punjab weddings.',
    taglineHi: 'शानदार बैंक्वेट हॉल, भव्य स्टेज और डाइनिंग व्यवस्था को 360° में प्रदर्शित करें।',
    description: 'Designed specifically for Punjab destination weddings and royal banquet resorts. Allows NRI families from Canada, UK, and USA to inspect the 1000+ guest seating, mandap stage, and catering layouts without flying in.',
    descriptionHi: 'पंजाब की भव्य शादियों और पैलेस रिजॉर्ट्स के लिए 360° वर्चुअल टूर। एनआरआई परिवार घर बैठे पूरी स्टेज, मंडप और 1000+ लोगों की बैठक व्यवस्था देख सकते हैं।',
    image: banquetHallImg,
    hotspots: [
      {
        id: 'hs-stage',
        name: 'Grand Royal Stage & Mandap',
        nameHi: 'ग्रैंड रॉयल स्टेज व मंडप',
        category: 'Wedding Decor',
        description: 'Opulent arched stage with gold filigree columns, floral chandeliers, and dynamic LED lighting.',
        descriptionHi: 'स्वर्ण नक्काशीदार खंभों और सुगंधित फूलों से सुसज्जित भव्य विवाह स्टेज।',
        yaw: 0,
        pitch: -2,
        iconType: 'sparkles',
        highlightTag: 'Main Stage',
      },
      {
        id: 'hs-chandelier-dome',
        name: 'Crystal Chandelier Dome',
        nameHi: 'क्रिस्टल झूमर व शाही गुंबद',
        category: 'Architecture',
        description: 'Multi-tiered cascading imperial crystal chandeliers hanging from a gold-leaf coffered dome.',
        descriptionHi: 'सोने की परत वाले गुंबद से लटकते विशालकाय शाही क्रिस्टल झूमर।',
        yaw: 0,
        pitch: 35,
        iconType: 'sparkles',
        highlightTag: 'Dome',
      },
      {
        id: 'hs-banquet-dining',
        name: '1000-Guest Banquet Seating',
        nameHi: '1000 मेहमानों की डाइनिंग व्यवस्था',
        category: 'Seating Layout',
        description: 'Round dining arrangements with damask tablecloths, Chiavari chairs, and central floral vases.',
        descriptionHi: 'भव्य गोल डाइनिंग टेबल, सोने की चियावारी कुर्सियां और मनमोहक टेबल डेकोर।',
        yaw: -65,
        pitch: -18,
        iconType: 'utensils',
        highlightTag: 'Capacity',
      },
      {
        id: 'hs-entry',
        name: 'Bridal Grand Entry Aisle',
        nameHi: 'दुल्हन की भव्य एंट्री गैलरी',
        category: 'Experience',
        description: 'Carpeted grand entrance flanked by brass urns, ambient mood spotlights, and red carpet.',
        descriptionHi: 'दुल्हन और बारात के भव्य स्वागत के लिए सुसज्जित शाही रेड-कार्पेट गलियारा।',
        yaw: 120,
        pitch: -8,
        iconType: 'pin',
        highlightTag: 'Entry',
      },
    ],
    features: [
      { en: 'NRI family virtual walkthrough tool with remote sharing link', hi: 'विदेश में बैठे एनआरआई परिवारों के लिए आसान शेयरिंग लिंक' },
      { en: 'Pre-wedding stage, ring ceremony, and sangeet layout switches', hi: 'सगाई, संगीत और मुख्य विवाह की अलग-अलग स्टेज व्यवस्थाएं' },
      { en: 'Direct WhatsApp inquiry button with date-check form', hi: 'तारीख की उपलब्धता जांचने वाला सीधा व्हाट्सएप बटन' },
      { en: 'Drone 360° aerial lawn & parking lot integration', hi: 'ड्रोन 360° एरियल व्यू जिससे विशाल लॉन व पार्किंग दिख सके' },
      { en: 'Google Maps Business Profile #1 Wedding Resort ranking boost', hi: 'गूगल मैप्स पर पंजाब के शीर्ष वेडिंग वेन्यू के रूप में रैंकिंग' },
      { en: 'Closes NRI destination wedding packages worth ₹25L–₹1Cr faster', hi: 'बड़े बजट की डेस्टिनेशन वेडिंग्स को तेजी से फाइनल करने में मददगार' },
    ],
    specifications: [
      { label: 'Guest Capacity', value: '500 to 2,500 Guests' },
      { label: 'NRI Conversion Rate', value: '4.1x Higher' },
      { label: 'Shoot Duration', value: 'Half-Day Shoot' },
      { label: 'Google Street View', value: 'Full Campus Map' },
    ],
  },
];

export interface ShowcaseCard {
  id: string;
  title: string;
  titleHi: string;
  category: 'rooms' | 'lobby' | 'banquet' | 'dining' | 'showroom';
  categoryLabel: string;
  categoryLabelHi: string;
  cities: string;
  metrics: string;
  description: string;
  descriptionHi: string;
  image: string;
  tourId: string;
  seoKeywords: string[];
}

export const SHOWCASE_CARDS: ShowcaseCard[] = [
  {
    id: 'sc-luxury-rooms',
    title: 'Presidential Suites & Luxury Rooms',
    titleHi: 'प्रेसिडेंशियल सुइट्स व लग्जरी रूम्स',
    category: 'rooms',
    categoryLabel: 'Luxury Rooms',
    categoryLabelHi: 'लक्जरी रूम्स',
    cities: 'Chandigarh, Amritsar, Ludhiana',
    metrics: '+310% Direct Bookings',
    description: 'Allow guests to inspect room acoustics, view from balcony, bathroom marble, and bed comfort before locking dates.',
    descriptionHi: 'मेहमानों को कमरे की बालकनी से नजारा, बाथरूम का मार्बल और बेड कंफर्ट 360° में जांचने दें।',
    image: hotelSuiteImg,
    tourId: 'royal-heritage-hotel',
    seoKeywords: ['Hotel 360 virtual tour Chandigarh', 'Luxury hotel 3D walkthrough Amritsar', 'Resort room 360 photography Punjab'],
  },
  {
    id: 'sc-hotel-lobby',
    title: 'Grand Hotel Lobbies & Foyer Lounges',
    titleHi: 'ग्रैंड होटल लॉबी और वेलकम लाउंज',
    category: 'lobby',
    categoryLabel: 'Hotel Lobby',
    categoryLabelHi: 'होटल लॉबी',
    cities: 'Amritsar, Jalandhar, Chandigarh',
    metrics: '94% Higher Trust Index',
    description: 'Showcase high ceilings, concierge desk, marble floors, and majestic arrival ambiance to corporate travelers.',
    descriptionHi: 'कॉरपोरेट और एनआरआई यात्रियों को अपनी भव्य लॉबी, चेक-इन डेस्क और स्वागत व्यवस्था का शानदार अहसास कराएं।',
    image: hotelSuiteImg,
    tourId: 'royal-heritage-hotel',
    seoKeywords: ['Google Street View hotel Punjab', 'Hospitality 360 tours Jalandhar', 'Best hotel photography Ludhiana'],
  },
  {
    id: 'sc-banquet-halls',
    title: 'Royal Banquet Halls & Wedding Palaces',
    titleHi: 'रॉयल बैंक्वेट हॉल्स और वेडिंग पैलेस',
    category: 'banquet',
    categoryLabel: 'Banquet Halls',
    categoryLabelHi: 'बैंक्वेट हॉल्स',
    cities: 'Amritsar, Ludhiana, Jalandhar, Chandigarh',
    metrics: '₹45L+ Average Deal Value',
    description: 'Crucial for destination weddings in Punjab. NRI families from UK, Canada, & USA finalize bookings remotely.',
    descriptionHi: 'पंजाब की शादियों के लिए अनिवार्य। कनाडा, यूके और अमेरिका के एनआरआई परिवार दूर बैठकर वेन्यू फाइनल करते हैं।',
    image: banquetHallImg,
    tourId: 'grand-banquet-hall',
    seoKeywords: ['Banquet hall 360 tour Ludhiana', 'Wedding resort virtual tour Punjab', 'Marriage palace 360 shoot Amritsar'],
  },
  {
    id: 'sc-dining-ambiance',
    title: 'Fine Dining & Ambient Rooftop Lounges',
    titleHi: 'फाइन डाइनिंग और रूफटॉप बार लाउंज',
    category: 'dining',
    categoryLabel: 'Fine Dining',
    categoryLabelHi: 'फाइन डाइनिंग',
    cities: 'Chandigarh, Jalandhar, Ludhiana',
    metrics: '+185% Table Reservations',
    description: 'Diners can pick their favorite booth, check bar vibes, and inspect private party areas before heading out.',
    descriptionHi: 'ग्राहक आने से पहले अपना पसंदीदा कोना या बूथ चुन सकते हैं और बार का माहौल देख सकते हैं।',
    image: restaurantImg,
    tourId: 'fine-dine-restaurant',
    seoKeywords: ['Restaurant 360 tour Chandigarh', 'Lounge 360 view Model Town Jalandhar', 'Bar interior 360 Ludhiana'],
  },
  {
    id: 'sc-auto-showrooms',
    title: 'Automobile & Luxury Retail Showrooms',
    titleHi: 'ऑटोमोबाइल व लग्जरी रिटेल शोरूम',
    category: 'showroom',
    categoryLabel: 'Luxury Showrooms',
    categoryLabelHi: 'लक्जरी शोरूम',
    cities: 'Chandigarh Tricity, Ludhiana, Jalandhar',
    metrics: '3.2x More Inquiries',
    description: 'Let buyers inspect car exteriors, luxury jewelry showcases, and furniture studios with interactive hotspots.',
    descriptionHi: 'खरीदारों को कार, गहने और प्रीमियम फर्नीचर के हर विवरण को हॉटस्पॉट के जरिए करीब से देखने दें।',
    image: carShowroomImg,
    tourId: 'luxury-showroom',
    seoKeywords: ['Car showroom 360 tour Punjab', 'Retail store 360 walkthrough Chandigarh', 'Interactive showroom Ludhiana'],
  },
];
