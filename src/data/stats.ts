export interface Stat {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
}

export interface StatsList {
    id: string;
    stats: Stat[];
    content?: {
        title: string;
        description: string;
        button?: {
            text: string;
            link: string;
            variant?: 'primary' | 'secondary' | 'ghostLight' | 'ghostDark';
        };
    };
}

export const statsLists: Record<string, StatsList> = {
    main: {
        id: 'main',
        stats: [
            {
                value: 10,
                label: 'Theme Configurations',
            },
            {
                value: 11,
                label: 'Pre-Built Components',
            },
            {
                value: 48,
                label: 'Team Members',
            },
            {
                value: 500000,
                label: 'Lines of Code',
                prefix: '+',
            },
        ],
    },
    withContent: {
        id: 'withContent',
        stats: [
            {
                value: 25,
                label: 'Years Experience',
                prefix: '+',
            },
            {
                value: 100,
                label: 'Projects Completed',
                prefix: '+',
            },
            {
                value: 50,
                label: 'Satisfied Clients',
                prefix: '+',
            },
            {
                value: 10,
                label: 'Service Areas',
            },
        ],
    },
};
