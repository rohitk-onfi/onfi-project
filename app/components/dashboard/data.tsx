import { AlertTriangle, BarChart2, Activity, Users } from "lucide-react";
import { AnalyticsCardProps } from "@/app/components/dashboard/analytics/AnalyticsCard";

export const performanceData = [
    { date: "2024-03-15", compliance: 95, alerts: 8, reports: 15 },
    { date: "2024-03-16", compliance: 97, alerts: 5, reports: 12 },
    { date: "2024-03-17", compliance: 94, alerts: 10, reports: 18 },
    { date: "2024-03-18", compliance: 98, alerts: 3, reports: 14 },
    { date: "2024-03-19", compliance: 96, alerts: 7, reports: 16 },
    { date: "2024-03-20", compliance: 99, alerts: 2, reports: 13 },
    { date: "2024-03-21", compliance: 97, alerts: 4, reports: 15 },
];

export const entityDistribution = [
    { name: "Transactions", count: 1250, percentage: 45 },
    { name: "Customers", count: 850, percentage: 30 },
    { name: "Regulations", count: 450, percentage: 16 },
    { name: "Products", count: 250, percentage: 9 },
];

export interface RecentAlert {
    title: string;
    time: string;
    severity: "high" | "medium" | "low";
}

export const recentAlerts: RecentAlert[] = [
    { title: "High-risk Transaction Detected", time: "10 minutes ago", severity: "high" },
    { title: "Compliance Check Failed", time: "25 minutes ago", severity: "medium" },
    { title: "New Regulatory Update", time: "1 hour ago", severity: "low" },
];

export const systemStatus = [
    { name: "API Endpoints", status: "operational" },
    { name: "Database", status: "operational" },
    { name: "Authentication", status: "operational" },
    { name: "Processing Queue", status: "degraded" },
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

export const analyticsCards: AnalyticsCardProps[] = [
    {
        title: "Total Investigations",
        value: "2,850",
        change: "12.5%",
        direction: "positive",
        versus: "last month",
        icon: <BarChart2 className="h-4 w-4 text-muted-foreground" />,
    },
    {
        title: "Active Alerts",
        value: "24",
        change: "8.2%",
        direction: "negative",
        versus: "last week",
        icon: <AlertTriangle className="h-4 w-4 text-muted-foreground" />,
    },
    {
        title: "Compliance Rate",
        value: "97.8%",
        change: "2.1%",
        direction: "positive",
        versus: "target",
        icon: <Activity className="h-4 w-4 text-muted-foreground" />,
    },
    {
        title: "Total Users",
        value: "1,234",
        change: "4.3%",
        direction: "positive",
        versus: "last month",
        icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
];
