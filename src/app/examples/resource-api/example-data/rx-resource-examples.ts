import { ExampleModel } from "src/app/shared/models/example.model";

export const RX_RESOURCE_EXAMPLES: ExampleModel[] = [
    {
        title: 'RxJS Resource Integration',
        content: 'Master rxResource() for powerful Observable-based data fetching. Combine RxJS operators with reactive resource management for advanced patterns.',
        routerLink: './example2',
    },
    {
        title: 'rxResource with GitHub Repositories',
        content: 'Use rxResource to fetch GitHub repository data with observables and display them in an interactive grid layout. Real-world API integration with reactive patterns.',
        routerLink: './example5',
    },
    {
        title: 'Country Info with rxResource',
        content: 'Fetch and display live country information (name, capital, region, population, flag) using rxResource and the REST Countries API. Select a country to view its details in real time.',
        routerLink: './example8',
    }
];
