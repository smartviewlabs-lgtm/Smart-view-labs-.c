import hotelSuiteImg from '../assets/images/hotel_suite_luxury_360_1794489894032.jpg';

export type PostType = 'blog' | 'image';

export interface BlogPost {
  id: string;
  type: PostType;
  title: string;
  category: string;
  city: string;
  author: string;
  createdAt: string;
  imageUrl?: string;
  content: string;
  isUserCreated?: boolean;
}

const STORAGE_KEY = 'svl_blog_posts_v1';

export const SEED_BLOG_POSTS: BlogPost[] = [
  {
    id: 'seed-1',
    type: 'blog',
    title: 'How 360° Virtual Tours Boost Direct Wedding & Banquet Inquiries in Punjab',
    category: '360° Virtual Tour',
    city: 'Ludhiana & Amritsar',
    author: 'Smart View Labs Editorial',
    createdAt: '2026-11-10T10:00:00.000Z',
    imageUrl:
      'https://raw.githubusercontent.com/smartviewlabs-lgtm/svl.in/main/public/images/diwali%20shot%201.png',
    content:
      'NRI families and destination wedding planners across Chandigarh, Ludhiana, Jalandhar, and Amritsar want confidence before booking a venue. An interactive 16K HDR 360° virtual walkthrough lets decision-makers inspect mandap staging, chandelier lighting, seating capacity, and dining halls remotely from anywhere in the world—cutting site-visit friction and increasing direct WhatsApp inquiries.',
  },
  {
    id: 'seed-2',
    type: 'image',
    title: 'Flagship Automobile Showroom Interactive 360° Shoot',
    category: 'Luxury Retail & Auto',
    city: 'Chandigarh',
    author: 'Smart View Labs Crew',
    createdAt: '2026-11-08T14:30:00.000Z',
    imageUrl:
      'https://raw.githubusercontent.com/smartviewlabs-lgtm/svl.in/main/public/images/carshowroom.png',
    content:
      'Captured inside a luxury automobile showroom with balanced HDR exposure to preserve paint reflections, showroom glass clarity, and interior cabin highlights.',
  },
  {
    id: 'seed-3',
    type: 'blog',
    title: 'Google Street View & Local SEO Checklist for Hotels & Fine Dining',
    category: 'Google Street View',
    city: 'Chandigarh & Jalandhar',
    author: 'Smart View Labs SEO Team',
    createdAt: '2026-11-04T09:15:00.000Z',
    imageUrl: hotelSuiteImg,
    content:
      'Publishing geo-tagged 360° Street View imagery directly to your Google Business Profile strengthens trust signals on Google Maps. Combine updated 360° room previews, consistent NAP citations across Punjab directories, and fast mobile landing pages to turn map searches into direct phone calls and table or room reservations.',
  },
];

export function loadBlogPosts(): BlogPost[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return SEED_BLOG_POSTS;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return SEED_BLOG_POSTS;
    }
    return parsed as BlogPost[];
  } catch {
    return SEED_BLOG_POSTS;
  }
}

export function saveBlogPosts(posts: BlogPost[]): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    return true;
  } catch {
    return false;
  }
}
