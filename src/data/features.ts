import { Hammer, Home, Building2, DoorClosed, Shield, Fence, Heart, Coffee, Smile } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Hammer;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Home,
                title: 'Residential & Commercial Builds',
                description: 'Custom homes, shops, and tenant improvements',
            },
            {
                icon: Hammer,
                title: 'Renovations',
                description: 'Interior and exterior upgrades for any space',
            },
            {
                icon: Building2,
                title: 'New Construction',
                description: 'From foundations to finished structures',
            },
            {
                icon: Fence,
                title: 'Decks & Fencing',
                description: 'Wood, composite, and chain link options',
            },
            {
                icon: DoorClosed,
                title: 'Overhead Doors',
                description: 'Installation and maintenance of garage doors',
            },
            {
                icon: Shield,
                title: 'Roll Shutters',
                description: 'Security and energy-efficient solutions',
            },
        ],
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail',
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements',
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use',
            },
        ],
    },
};
