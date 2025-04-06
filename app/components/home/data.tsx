export interface Investigation {
    id: string;
    name: string;
    createdBy: string;
    lastRun: string;
    nextRun: string;
    frequency: string;
    entity: string;
    checklistItems: number;
    sources: number;
    status: "active" | "paused";
    complianceRate: number;
    queueItems: number;
    alerts7d: number;
    reports7d: number;
}

export const investigations: Investigation[] = [
    {
        id: "1",
        name: "Transaction Pattern Analysis",
        createdBy: "Sarah Johnson",
        lastRun: "2024-03-21 14:30",
        nextRun: "2024-03-22 14:30",
        frequency: "Every 24 hours",
        entity: "Transactions",
        checklistItems: 12,
        sources: 3,
        status: "active",
        complianceRate: 98.5,
        queueItems: 23,
        alerts7d: 5,
        reports7d: 12,
    },
    {
        id: "2",
        name: "Customer Profile Verification",
        createdBy: "Michael Chen",
        lastRun: "2024-03-21 12:00",
        nextRun: "2024-03-22 12:00",
        frequency: "Every 12 hours",
        entity: "Customers",
        checklistItems: 8,
        sources: 2,
        status: "active",
        complianceRate: 100,
        queueItems: 0,
        alerts7d: 0,
        reports7d: 8,
    },
    {
        id: "3",
        name: "Regulatory Compliance Check",
        createdBy: "Alex Thompson",
        lastRun: "2024-03-21 10:15",
        nextRun: "2024-03-22 10:15",
        frequency: "Every 6 hours",
        entity: "Regulations",
        checklistItems: 15,
        sources: 5,
        status: "paused",
        complianceRate: 85.2,
        queueItems: 45,
        alerts7d: 12,
        reports7d: 3,
    },
];
