import { NavigationItem, SocialLink } from '@/lib/types';

export const mainNavigation: NavigationItem[] = [
  { label: 'Red Dots', href: '/products/red-dots', category: 'red-dot' },
  { label: 'Riflescopes', href: '/products/riflescopes', category: 'riflescope' },
  { label: 'Laser Sights', href: '/products/laser-sights', category: 'laser-sight' },
  { label: 'Accessories', href: '/products/accessories', category: 'accessory' },
];

export const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com/adeoptics', icon: 'instagram' },
  { platform: 'Facebook', url: 'https://facebook.com/adeoptics', icon: 'facebook' },
  { platform: 'YouTube', url: 'https://youtube.com/adeoptics', icon: 'youtube' },
];
