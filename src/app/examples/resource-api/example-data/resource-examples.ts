import { ExampleModel } from "src/app/shared/models/example.model";

export const RESOURCE_EXAMPLES: ExampleModel[] = [
    {
        title: 'Basic Resource Creation',
        content: 'Learn fundamental resource() patterns for reactive data management. Create your first resource with automatic loading states and error handling.',
        routerLink: './resource-api-example1',
    },
    {
        title: 'GitHub User Data with resource()',
        content: 'Fetch random GitHub user profiles using the resource API with real-time data. Demonstrates GitHub API integration with profile interactions and data display.',
        routerLink: './resource-api-example4',
    },
    {
        title: 'Real-Time Weather Resource',
        content: 'Fetches and displays real-time weather data for a selected city using a free public API. Demonstrates live resource() integration and error handling.',
        routerLink: './resource-api-example7',
    }
];
