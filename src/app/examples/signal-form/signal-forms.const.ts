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
    }
];