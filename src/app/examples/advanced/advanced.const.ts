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
    },
    {
        title: 'Real-World ng-template Use Cases',
        content: 'Explore advanced and practical uses of ng-template in Angular, including conditional rendering, template outlets, context passing, and custom structural directives.',
        routerLink: 'example3',
    },
    {
        title: 'Signal-based Disable Reactive Form',
        content: 'Control the disabled state of a reactive form using a signal and the disableControl directive.',
        routerLink: 'example4',
    },
    {
        title: 'Auto-Save Form Directive — Real-World Use Case',
        content: 'A reusable directive that auto-saves Angular form data to LocalStorage and an API, with debounce, dirty/touched state handling, and saving status.',
        routerLink: 'example5',
    },
    {
        title: 'Directive Composition with hostDirectives',
        content: 'Showcase of Angular 17+ hostDirectives for composing Tooltip and Highlight directives in a standalone component.',
        routerLink: 'example6',
    }
];