export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: 'What types of projects do you handle?',
                answer: 'We work on residential and commercial builds, renovations, decks, fences, overhead doors, roll shutters, and more.',
            },
            {
                question: 'Do you provide free estimates?',
                answer: 'Yes. We offer free consultations and estimates so you know exactly what to expect.',
            },
            {
                question: 'Are you licensed and insured?',
                answer: 'Absolutely. Our team is fully licensed and insured for your peace of mind.',
            },
            {
                question: 'How long have you been in business?',
                answer: 'Our family has over 25 years of experience in the construction industry.',
            },
            {
                question: 'Do you offer maintenance services?',
                answer: 'Yes, we provide ongoing maintenance for overhead doors, roll shutters, and other installations.',
            },
        ],
    },
};
