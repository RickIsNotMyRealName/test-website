import { Home, Hammer, Trees, Layers, Fence, DoorClosed } from 'lucide-astro';

export interface Service {
    id: string;
    icon: any;
    title: string;
    blurb: string;
    details: string[];
}

export const services: Service[] = [
    {
        id: 'new-construction',
        icon: Home,
        title: 'New Construction & Custom Builds',
        blurb: 'From foundations to finished structures, we create spaces tailored to your needs.',
        details: ['Custom Homes', 'Shops & Garages'],
    },
    {
        id: 'renovations',
        icon: Hammer,
        title: 'Renovations & Improvements',
        blurb: 'Interior and exterior upgrades for residential and commercial properties.',
        details: [
            'Interior & Exterior Renovations',
            'Home Additions',
            'Office & Commercial Space Renovations',
            'Camp Maintenance & Upgrades',
        ],
    },
    {
        id: 'outdoor-living',
        icon: Trees,
        title: 'Outdoor Living Spaces',
        blurb: 'Decks and patios built for relaxation and entertaining.',
        details: ['Wood Decks', 'Composite (Maintenance-Free) Decks', 'Concrete Patios'],
    },
    {
        id: 'concrete',
        icon: Layers,
        title: 'Concrete & Foundation Work',
        blurb: 'Durable concrete services for driveways, sidewalks, and more.',
        details: ['Driveways', 'Sidewalks', 'Concrete Patios'],
    },
    {
        id: 'fencing',
        icon: Fence,
        title: 'Fencing Solutions',
        blurb: 'Secure and attractive fencing for homes, businesses, and farms.',
        details: ['Chain-Link Fencing (Commercial & Residential)', 'Wood Fencing', 'Farm & Ranch Fencing'],
    },
    {
        id: 'doors-shutters',
        icon: DoorClosed,
        title: 'Doors & Security Shutters',
        blurb: 'Overhead doors and roll shutters to protect your property.',
        details: [
            'Residential Garage Doors',
            'Commercial Overhead Doors',
            'Maintenance & Repairs on Overhead Doors',
            'Commercial Security Roll Shutters',
            'Roll Shutter Maintenance',
        ],
    },
];
