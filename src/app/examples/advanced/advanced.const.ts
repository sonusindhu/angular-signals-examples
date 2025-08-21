import { ExampleModel } from "src/app/shared/models/example.model";

export const ADVANCED_EXAMPLES: ExampleModel[] = [
    {
        title: 'HTTP Caching with interceptors',
        content: 'This example demonstrates the use of HTTP interceptors for caching API responses.',
        routerLink: 'example1',
    },
    {
        title: 'HTTP Caching with RxJS shareReplay',
        content: 'Cache HTTP requests in a service using RxJS shareReplay for efficient data reuse.',
        routerLink: 'example2',
    }
];