import { ExampleModel } from '../../../shared/models/example.model';

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
];