import { ExampleModel } from "src/app/shared/models/example.model";

export const RESOURCE_EXAMPLES: ExampleModel[] = [
    {
        title: 'Basic Resource Creation',
        content: 'Learn fundamental resource() patterns for reactive data management. Create your first resource with automatic loading states and error handling.',
        routerLink: './resource-api-example1',
    },
    {
        title: 'Random User Fetcher',
        content: 'Build a dynamic user profile fetcher with resource(). Demonstrates real-world API integration with reactive state management and automatic updates.',
        routerLink: './resource-api-example4',
    }
];
