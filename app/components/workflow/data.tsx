export interface Server {
    name: string;
    summary: string;
    documentation: string;
    status: string;
}

export interface SearchStrategy {
    id: string;
    name: string;
    description: string;
    costPer100: string;
    timePer100: string;
    enabled: boolean;
}

export const servers: Server[] = [
    {
        name: "Production API",
        summary: "Main production server for API endpoints",
        documentation: "https://api.example.com/docs",
        status: "active",
    },
    {
        name: "Development Server",
        summary: "Development environment for testing",
        documentation: "https://dev-api.example.com/docs",
        status: "active",
    },
    {
        name: "Staging Environment",
        summary: "Pre-production testing environment",
        documentation: "https://staging-api.example.com/docs",
        status: "maintenance",
    },
];

export const searchStrategies: SearchStrategy[] = [
    {
        id: "breadth-first",
        name: "Breadth-first Search",
        description: "Systematically explores neighboring nodes at the present depth before moving to nodes at the next depth level. Optimal for finding the shortest path in unweighted graphs.",
        costPer100: "$0.50",
        timePer100: "2.5s",
        enabled: true,
    },
    {
        id: "depth-first",
        name: "Depth-first Search",
        description: "Explores as far as possible along each branch before backtracking. Efficient for exploring all possibilities in decision trees and solving puzzles.",
        costPer100: "$0.35",
        timePer100: "1.8s",
        enabled: true,
    },
    {
        id: "heuristic",
        name: "A* Search",
        description: "Combines path cost and estimated distance to goal for intelligent pathfinding. Excellent for spatial navigation and optimization problems.",
        costPer100: "$0.75",
        timePer100: "1.2s",
        enabled: false,
    },
    {
        id: "parallel",
        name: "Parallel Search",
        description: "Distributes search operations across multiple threads for concurrent exploration. Ideal for large-scale data processing and real-time applications.",
        costPer100: "$1.20",
        timePer100: "0.8s",
        enabled: true,
    },
];
