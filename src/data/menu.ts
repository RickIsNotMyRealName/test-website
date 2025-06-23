// src/data/menu.ts

export interface MenuItem {
    name: string;
    link: string;
    children?: { name: string; link: string }[];
    showArrow?: boolean;
}

export const headerMenu: MenuItem[] = [
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Rentals', link: '/rental' },
];

export const footerMenu: { name: string; link: string }[] = [
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Rentals', link: '/rental' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' },
];
