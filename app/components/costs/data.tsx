export interface EntityData {
    date: string;
    entityName: string;
    filesCount: number;
    modalities: string[];
    cost: number;
    processingTime: string;
}

export const entityData: EntityData[] = [
    {
        date: "2024-03-18",
        entityName: "Customer Profile",
        filesCount: 156,
        modalities: ["Text", "Image"],
        cost: 382.2,
        processingTime: "45s",
    },
    {
        date: "2024-03-19",
        entityName: "Transaction Record",
        filesCount: 142,
        modalities: ["Text"],
        cost: 340.8,
        processingTime: "42s",
    },
    {
        date: "2024-03-20",
        entityName: "Risk Assessment",
        filesCount: 168,
        modalities: ["Text", "Image", "PDF"],
        cost: 403.2,
        processingTime: "44s",
    },
];

export interface CostTrend {
    date: string;
    cost: number;
    latency: number;
}

export const costTrends: CostTrend[] = [
    { date: "03/18", cost: 382.2, latency: 45 },
    { date: "03/19", cost: 340.8, latency: 42 },
    { date: "03/20", cost: 403.2, latency: 44 },
    { date: "03/21", cost: 444.15, latency: 46 },
    { date: "03/22", cost: 462.3, latency: 48 },
];

export interface ChecklistData {
    date: string;
    entityId: string;
    checklistId: string;
    cost: number;
    processingTime: string;
    items: number;
    passRate: number;
}

export const checklistData: ChecklistData[] = [
    {
        date: "2024-03-18",
        entityId: "ENT-001",
        checklistId: "CHK-001",
        cost: 186.75,
        processingTime: "15s",
        items: 12,
        passRate: 98.5,
    },
    {
        date: "2024-03-19",
        entityId: "ENT-002",
        checklistId: "CHK-002",
        cost: 178.35,
        processingTime: "14s",
        items: 15,
        passRate: 97.8,
    },
    {
        date: "2024-03-20",
        entityId: "ENT-003",
        checklistId: "CHK-003",
        cost: 203.4,
        processingTime: "16s",
        items: 18,
        passRate: 99.1,
    },
];

export interface ChecklistTrend {
    date: string;
    cost: number;
    latency: number;
    passRate: number;
}

export const checklistTrends: ChecklistTrend[] = [
    { date: "03/18", cost: 186.75, latency: 15, passRate: 98.5 },
    { date: "03/19", cost: 178.35, latency: 14, passRate: 97.8 },
    { date: "03/20", cost: 203.4, latency: 16, passRate: 99.1 },
    { date: "03/21", cost: 195.6, latency: 15, passRate: 98.9 },
    { date: "03/22", cost: 210.45, latency: 17, passRate: 98.7 },
];