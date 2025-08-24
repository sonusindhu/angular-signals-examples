import { ExampleModel } from '../models/example.model';

export const LINKED_SIGNAL_EXAMPLES: ExampleModel[] = [
  {
    title: 'Smart Course Quantity',
    content: 'Master linkedSignal fundamentals with intelligent course quantity management. Automatic source tracking with seamless reactive updates.',
    routerLink: '/linked-signal/example1',
  },
  {
    title: 'Dynamic Tax Calculator',
    content: 'Build a sophisticated real-time tax computation system. Simplified linkedSignal syntax with immediate price calculations and tax adjustments.',
    routerLink: '/linked-signal/example2',
  },
  {
    title: 'Advanced Pricing Engine',
    content: 'Create complex multi-factor business logic with professional-grade pricing. Tuple sources, manual overrides, and enterprise-level calculations.',
    routerLink: '/linked-signal/example3',
  },
  {
    title: 'Unit Converter (Celsius ↔ Fahrenheit)',
    content: 'A two-way unit converter using linkedSignal for Celsius and Fahrenheit. Demonstrates real-world two-way data binding.',
    routerLink: '/linked-signal/example4',
  },
  {
    title: 'E-commerce Product Filters with Auto-Reset Pagination',
    content: 'Showcase product filtering with category and price, and auto-reset pagination using linkedSignal. Page resets to 1 on filter change, but allows manual navigation.',
    routerLink: '/linked-signal/example5',
  },
  {
    title: 'Form Defaults That Depend on Another Field',
    content: 'When a user selects a country, the default currency updates automatically. The user can override the currency, but if the country changes again, the currency resets to the new default.',
    routerLink: '/linked-signal/example6',
  },
  {
    title: 'Dashboard with Date Range Auto-Reset',
    content: 'Pick a data source (e.g., “Last Month”, “This Quarter”, “This Year”). The dashboard defaults the date range to match the data source. You can override the date range, but if the data source changes, the date range resets to match it again.',
    routerLink: '/linked-signal/example7',
  },
  {
    title: 'Quiz App with Auto-Reset Current Question',
    content: 'Select a quiz topic. The first question of that topic is shown by default. Navigate to next/previous question. If the topic changes, the current question resets to the first question of the new topic.',
    routerLink: '/linked-signal/example8',
  },
];
