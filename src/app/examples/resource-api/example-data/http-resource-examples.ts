import { ExampleModel } from "src/app/shared/models/example.model";

export const HTTP_RESOURCE_EXAMPLES: ExampleModel[] = [
    {
        title: 'Pagination with httpResource',
        content: 'Discover httpResource() with pagination functionality using dynamic parameters for fetching paginated todo data. Modern approach to data navigation.',
        routerLink: './resource-api-example3',
    },
    {
        title: 'httpResource with Chuck Norris API',
        content: 'Use httpResource to fetch random jokes from an external API with simple URL-based resource loading. Demonstrates clean API integration and error handling.',
        routerLink: './resource-api-example6',
    },
    {
        title: 'Country Info with httpResource',
        content: 'Fetch and display live country information (name, capital, region, population, flag) using httpResource and the REST Countries API. Select a country to view its details in real time.',
        routerLink: './resource-api-example9',
    }
];
