export const SITE_CONFIG = {
  brandName: 'Smart View Labs',
  domain: 'smartviewlabs.com',
  phoneDisplay: '+91 7508094760',
  phoneHref: 'tel:+917508094760',
  whatsappDigits: '917508094760',
  email: 'smartviewlabs@gmail.com',
  emailHref: 'mailto:smartviewlabs@gmail.com',
  logoUrl:
    'https://github.com/smartviewlabs-lgtm/svl.in/blob/main/Gemini_Generated_Image_8xz6ql8xz6ql8xz6.png?raw=true',
  citiesEn: 'Chandigarh · Amritsar · Jalandhar · Ludhiana',
  citiesHi: 'चंडीगढ़ · अमृतसर · जालंधर · लुधियाना',
} as const;

export function getWhatsAppUrl(
  message = 'Hello Smart View Labs, I would like to discuss a 360 Virtual Tour and Digital Marketing project.'
): string {
  return `https://wa.me/${SITE_CONFIG.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
