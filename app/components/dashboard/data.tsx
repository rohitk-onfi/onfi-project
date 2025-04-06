import { Database, ListChecks, DollarSign, Clock, Timer } from "lucide-react";

export interface UsageStats {
    label: string;
    value: string;
    change: string;
    period: string;
    icon: React.ElementType;
}

export const usageStats: UsageStats[] = [
    {
        label: "Entities Processed",
        value: "2,845",
        change: "+8%",
        period: "vs. last month",
        icon: Database,
    },
    {
        label: "Checklist Items Run",
        value: "12,456",
        change: "+12%",
        period: "vs. last month",
        icon: ListChecks,
    },
    {
        label: "Avg. Cost per Entity",
        value: "$2.45",
        change: "-5%",
        period: "vs. last month",
        icon: DollarSign,
    },
    {
        label: "Avg. Time per Entity",
        value: "45s",
        change: "-10%",
        period: "vs. last month",
        icon: Clock,
    },
    {
        label: "Avg. Time per Checklist",
        value: "12s",
        change: "-8%",
        period: "vs. last month",
        icon: Timer,
    },
];
export interface InProgressItem {
    name: string;
    progress: number;
    eta: string;
    status: "running" | "paused";
}

export const inProgressItems: InProgressItem[] = [
    {
        name: "Transaction Pattern Analysis",
        progress: 65,
        eta: "45 minutes",
        status: "running",
    },
    {
        name: "Customer Risk Assessment",
        progress: 85,
        eta: "15 minutes",
        status: "running",
    },
    {
        name: "Regulatory Compliance Check",
        progress: 40,
        eta: "paused",
        status: "paused",
    },
];

export interface CriticalChecklistItem {
    item: string;
    failureRate: string;
    impact: "high" | "medium" | "low";
    affectedCompanies: number;
}
export const criticalChecklist: CriticalChecklistItem[] = [
    {
        item: "KYC Documentation Verification",
        failureRate: "15.3%",
        impact: "high",
        affectedCompanies: 245,
    },
    {
        item: "Transaction Limit Compliance",
        failureRate: "12.8%",
        impact: "high",
        affectedCompanies: 198,
    },
    {
        item: "Regulatory Reporting Deadlines",
        failureRate: "10.5%",
        impact: "medium",
        affectedCompanies: 156,
    },
];

export interface DailyCheckStats {
    date: string;
    flagsRaised: number;
    flagsMitigated: number;
    escalations: number;
    passed: number;
    failed: number;
    pending: number;
}

export const dailyCheckStats: DailyCheckStats[] = [
    {
        date: "03/18",
        flagsRaised: 245,
        flagsMitigated: 220,
        escalations: 25,
        passed: 245,
        failed: 12,
        pending: 8,
    },
    {
        date: "03/19",
        flagsRaised: 268,
        flagsMitigated: 240,
        escalations: 28,
        passed: 268,
        failed: 15,
        pending: 5,
    },
    {
        date: "03/20",
        flagsRaised: 256,
        flagsMitigated: 235,
        escalations: 21,
        passed: 256,
        failed: 8,
        pending: 12,
    },
    {
        date: "03/21",
        flagsRaised: 289,
        flagsMitigated: 260,
        escalations: 29,
        passed: 289,
        failed: 10,
        pending: 6,
    },
    {
        date: "03/22",
        flagsRaised: 275,
        flagsMitigated: 245,
        escalations: 30,
        passed: 275,
        failed: 14,
        pending: 9,
    },
    {
        date: "03/23",
        flagsRaised: 298,
        flagsMitigated: 270,
        escalations: 28,
        passed: 298,
        failed: 9,
        pending: 7,
    },
    {
        date: "03/24",
        flagsRaised: 312,
        flagsMitigated: 285,
        escalations: 27,
        passed: 312,
        failed: 11,
        pending: 4,
    },
];

export interface AlertItem {
    id: string;
    title: string;
    time: string;
    severity: "high" | "medium" | "low";
}

export const recentAlerts: AlertItem[] = [
    {
        id: "1",
        title: "High-risk Transaction Pattern Detected",
        time: "10 minutes ago",
        severity: "high",
    },
    {
        id: "2",
        title: "Compliance Check Failed: Customer Due Diligence",
        time: "25 minutes ago",
        severity: "high",
    },
    {
        id: "3",
        title: "New Regulatory Update Available",
        time: "1 hour ago",
        severity: "medium",
    },
];

export interface RunningInvestigation {
    id: string;
    name: string;
    startTime: string;
    duration: string;
    progress: number;
    status: "running" | "paused";
    type: string;
    priority: "high" | "medium" | "low";
}

export const runningInvestigations: RunningInvestigation[] = [
    {
        id: "1",
        name: "Daily Transaction Analysis",
        startTime: "2024-03-22 09:00",
        duration: "45m",
        progress: 65,
        status: "running",
        type: "Scheduled",
        priority: "high",
    },
    {
        id: "2",
        name: "Customer Risk Assessment",
        startTime: "2024-03-22 08:30",
        duration: "1h 15m",
        progress: 85,
        status: "running",
        type: "Manual",
        priority: "medium",
    },
    {
        id: "3",
        name: "Compliance Audit",
        startTime: "2024-03-22 08:45",
        duration: "2h",
        progress: 40,
        status: "paused",
        type: "Scheduled",
        priority: "low",
    },
];

export interface AuditLogEntry {
    id: string;
    type: "Created" | "Updated" | "Deleted" | "Permission" | "Config";
    person: {
        name: string;
        email: string;
    };
    department: string;
    time: string;
    description: string;
    peopleImpact: string[];
    aiContext: string;
}

export const auditLogData: AuditLogEntry[] = [
    {
        id: "67e13e82549ee5e64c44772c",
        type: "Created",
        person: {
            name: "John Doe",
            email: "john@example.com",
        },
        department: "Compliance",
        time: "Mar 24, 2024 11:14",
        description: "Created a new compliance policy for data protection. This policy outlines the requirements...",
        peopleImpact: ["All employees", "Contractors", "HR", "IT", "Finance"],
        aiContext: "Policy was analyzed for compliance with GDPR requirements",
    },
    {
        id: "67e13e82549ee5e64c44773d",
        type: "Updated",
        person: {
            name: "Sarah Wilson",
            email: "sarah@example.com",
        },
        department: "Information Security",
        time: "Mar 24, 2024 10:30",
        description: "Updated security controls for third-party vendor access",
        peopleImpact: ["Vendor management team", "Procurement", "Legal"],
        aiContext: "Changes validated against security best practices",
    },
    {
        id: "67e13e82549ee5e64c44774e",
        type: "Deleted",
        person: {
            name: "Mike Johnson",
            email: "mike@example.com",
        },
        department: "Risk Management",
        time: "Mar 24, 2024 09:45",
        description: "Deleted outdated risk assessment document",
        peopleImpact: ["Risk assessment team"],
        aiContext: "Confirmed document obsolescence",
    },
    {
        id: "67e13e82549ee5e64c44775f",
        type: "Permission",
        person: {
            name: "Emily Brown",
            email: "emily@example.com",
        },
        department: "IT Operations",
        time: "Mar 24, 2024 08:15",
        description: "Added new user permissions for regulatory reporting system",
        peopleImpact: ["Reporting team members"],
        aiContext: "Access level verified against role requirements",
    },
    {
        id: "67e13e82549ee5e64c44776g",
        type: "Config",
        person: {
            name: "Alex Turner",
            email: "alex@example.com",
        },
        department: "System Administration",
        time: "Mar 24, 2024 07:30",
        description: "System configuration change for audit logging enhancement",
        peopleImpact: ["All system users"],
        aiContext: "Configuration optimized for performance",
    },
];

export interface ChecklistItem {
    id: string;
    name: string;
    description: string;
    status: "pending" | "in-progress" | "completed";
    lastRun: string;
    nextRun: string;
    owner: string;
}

export interface Checklist {
    id: string;
    title: string;
    description: string;
    items: ChecklistItem[];
}

export const initialChecklists: Checklist[] = [
    {
        id: "1",
        title: "Daily Compliance Checks",
        description: "Standard checks performed daily for regulatory compliance",
        items: [
            {
                id: "1-1",
                name: "Transaction Monitoring",
                description: "Monitor all transactions for suspicious patterns",
                status: "completed",
                lastRun: "2024-03-22 09:00",
                nextRun: "2024-03-23 09:00",
                owner: "John Smith",
            },
            {
                id: "1-2",
                name: "Customer Due Diligence",
                description: "Review customer profiles and risk ratings",
                status: "in-progress",
                lastRun: "2024-03-22 10:00",
                nextRun: "2024-03-23 10:00",
                owner: "Sarah Johnson",
            },
            {
                id: "1-3",
                name: "Regulatory Reporting",
                description: "Generate and submit required regulatory reports",
                status: "pending",
                lastRun: "2024-03-22 11:00",
                nextRun: "2024-03-23 11:00",
                owner: "Mike Wilson",
            },
        ],
    },
    {
        id: "2",
        title: "Weekly Risk Assessments",
        description: "Comprehensive risk evaluation procedures performed weekly",
        items: [],
    },
];
