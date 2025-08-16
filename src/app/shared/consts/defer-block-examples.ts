import { ExampleModel } from '../models/example.model';

export const DEFER_BLOCK_EXAMPLES: ExampleModel[] = [
  {
    title: 'Example 1',
    content: 'Basic Defer on Idle - Loads content when browser becomes idle',
    routerLink: '/defer-block/defer-example1',
  },
  {
    title: 'Example 2',
    content: 'Defer on Interaction - Triggers loading when user interacts with element',
    routerLink: '/defer-block/defer-example2',
  },
  {
    title: 'Example 3',
    content: 'Defer on Viewport - Loads content when it enters the viewport',
    routerLink: '/defer-block/defer-example3',
  },
  {
    title: 'Example 4',
    content: 'Defer with Timer - Loads content after specified time delay',
    routerLink: '/defer-block/defer-example4',
  },
  {
    title: 'Example 5',
    content: 'Advanced Defer - Multiple triggers, conditions, and error handling',
    routerLink: '/defer-block/defer-example5',
  },
  {
    title: 'Example 6',
    content: 'Defer on Hover - Triggers loading when mouse hovers over element',
    routerLink: '/defer-block/defer-example6',
  },
  {
    title: 'Example 7',
    content: 'Defer on Immediate - Loads content immediately after non-deferred content',
    routerLink: '/defer-block/defer-example7',
  },
  {
    title: 'Example 8',
    content: 'Multiple Triggers & Prefetch - Advanced performance optimization strategies',
    routerLink: '/defer-block/defer-example8',
  },
  {
    title: 'Example 9',
    content: 'Error Handling & Retry - Robust error handling with retry mechanisms',
    routerLink: '/defer-block/defer-example9',
  },
  {
    title: 'Example 10',
    content: 'Loading States with Timing - Professional timing controls to prevent flickering',
    routerLink: '/defer-block/defer-example10',
  },
  {
    title: 'Example 11',
    content: 'Real-world Dashboard Widget - Production-ready dashboard with smart loading',
    routerLink: '/defer-block/defer-example11',
  },
];