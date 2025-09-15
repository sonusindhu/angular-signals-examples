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
    },
    {
        title: 'Track Angular Performance',
        content: 'This example shows how to override ApplicationRef.tick to log every global change detection run, explains why async operations like setInterval do not trigger ticks, and demonstrates how to manually trigger change detection for performance analysis.',
        routerLink: 'example7',
    },
    {
        title: 'Two-way / Setter pattern',
        content: 'Demonstrates two-way binding and setter pattern using Angular signals. Shows how to use a signal and a setter function for input fields.',
        routerLink: 'example8',
    },
    {
        title: 'Undo/Redo State Management',
        content: 'Implement a signal-based undo/redo stack for a form, showing how to track and revert state changes using Angular signals.',
        routerLink: 'example9',
    },
    {
        title: 'Collaborative List (Signals + Storage Event)',
        content: 'A real-time collaborative list using Angular signals and the browser storage event. Add, edit, or remove items and see changes sync instantly across tabs/windows—no backend required.',
        routerLink: 'example10',
    },
    {
        title: 'Modal Service with ViewContainerRef',
        content: 'Open a modal using a service and ViewContainerRef. Demonstrates dynamic component creation and service-driven modals.',
        routerLink: 'example11',
    },
    {
        title: 'On-Demand Preloading via Service & Custom Strategy',
        content: 'Preload modules only when triggered (e.g., on hover) using a service and custom PreloadingStrategy. Demonstrates bandwidth savings and modern Angular routing.',
        routerLink: 'example12',
    },
];