import { ExampleModel } from "src/app/shared/models/example.model";

export const SIGNAL_FORM_EXAMPLES: ExampleModel[] = [
    {
        title: 'Example 1: Basic Signal Form',
        content: 'Demonstrates the use of Angular signals for managing form state.',
        routerLink: '/signal-forms/example1'
    },
    {
        title: 'Example 2: Signal Form Validations',
        content: 'Showcases validation, error handling, and extensible form logic using Angular signals.',
        routerLink: '/signal-forms/example2'
    },
    {
        title: 'Example 3: Signal Form Signup with Custom Validation',
        content: 'Signup form with name, email, password, confirm password fields and custom password match validation using Angular signals.',
        routerLink: '/signal-forms/example3'
    },
    {
        title: 'Example 4: Signal Form Signup with Dynamic Hobbies & Validation',
        content: 'Signup form with name, email, and dynamic hobbies fields. Features schema-based validation, instant error feedback, and interactive add/remove for hobbies using Angular signals.',
        routerLink: '/signal-forms/example4'
    },
    {
        title: 'Example 5: Advanced Nested Signal Form with Cards, Select, Radio & Checkbox',
        content: 'Demonstrates a deeply nested form with multiple fields, dynamic arrays, card-style contacts, select box for country, radio buttons for gender, and a checkbox for newsletter subscription. Features schema-based validation, instant error feedback, and interactive add/remove for contacts and tags using Angular signals.',
        routerLink: '/signal-forms/example5'
    }
];