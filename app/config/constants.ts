import { ClipboardList, Users2, FileText, Search, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { WorkflowStep, EntityFile, ScopeItem, MetadataColumn, NotificationRule, ReportFormat, SamplingStrategy, Reference } from '../types';

export const initialWorkflowSteps: WorkflowStep[] = [
  { id: 'define-entities', label: 'Define Entities', icon: ClipboardList, status: 'in-progress' },
  { id: 'cross-check-references', label: 'Cross-check References', icon: FileText, status: 'pending' },
  { id: 'elaborate-scope', label: 'Elaborate Scope', icon: Users2, status: 'pending' },
  { id: 'reporting', label: 'Reporting', icon: Search, status: 'pending' },
];

export const statusConfig = {
  'completed': { icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50', label: 'Completed' },
  'in-progress': { icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50', label: 'In Progress' },
  'pending': { icon: AlertCircle, color: 'text-gray-400', bg: 'bg-gray-50', label: 'Pending' },
};

export const entityFiles: EntityFile[] = [
  {
    name: '*.entity.json',
    fileType: 'JSON Schema',
    contentSummary: 'Core entity structure and field definitions'
  },
  {
    name: '*.relations.yaml',
    fileType: 'YAML',
    contentSummary: 'Entity relationships and foreign key mappings'
  },
  {
    name: '*.validation.ts',
    fileType: 'TypeScript',
    contentSummary: 'Custom validation logic and business rules'
  },
  {
    name: '*.openapi.yaml',
    fileType: 'OpenAPI',
    contentSummary: 'REST API specifications for entity operations'
  }
];

export const scopeData: ScopeItem[] = [
  {
    heading: "Regulatory Framework",
    category: "Policy",
    investigation: "Review and analyze the current regulatory framework governing financial markets"
  },
  {
    heading: "Market Structure",
    category: "Research",
    investigation: "Examine the structure and organization of financial markets, including trading mechanisms and participant roles"
  },
  {
    heading: "Compliance Requirements",
    category: "Policy",
    investigation: "Identify and document key compliance requirements for market participants"
  },
  {
    heading: "Risk Assessment",
    category: "Analysis",
    investigation: "Conduct comprehensive risk assessment of market operations and control mechanisms"
  },
  {
    heading: "Enforcement Measures",
    category: "Legal",
    investigation: "Review enforcement mechanisms and penalties for market violations"
  }
];

export const metadataColumns: MetadataColumn[] = [
  { name: 'User ID', dataType: 'UUID', manner: 'Auto-generated', artifacts: 'None' },
  { name: 'Username', dataType: 'String', manner: 'User Input', artifacts: 'Validation Rules' },
  { name: 'Email', dataType: 'String', manner: 'User Input', artifacts: 'Email Format' },
  { name: 'Created At', dataType: 'Timestamp', manner: 'System', artifacts: 'None' },
];

export const roleConfig = {
  business_user: { label: 'Business User', color: 'bg-blue-100 text-blue-800' },
  workflow_admin: { label: 'Workflow Admin', color: 'bg-purple-100 text-purple-800' },
  platform_admin: { label: 'Platform Admin', color: 'bg-red-100 text-red-800' }
};

export const mockUsers = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    ssoUsername: 'jsmith',
    role: 'business_user',
    lastActive: '2024-03-20',
    status: 'active'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    ssoUsername: 'sjohnson',
    role: 'workflow_admin',
    lastActive: '2024-03-19',
    status: 'active'
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'm.chen@example.com',
    ssoUsername: 'mchen',
    role: 'platform_admin',
    lastActive: '2024-03-18',
    status: 'active'
  }
];

export const notificationRules: NotificationRule[] = [
  {
    name: "Critical Updates",
    recipients: ["Platform Admins", "Workflow Admins"],
    channel: "email",
    frequency: "immediate",
    conditions: "On critical system events or failures"
  },
  {
    name: "Daily Summary",
    recipients: ["Business Users"],
    channel: "in-app",
    frequency: "daily",
    conditions: "End of day activity summary"
  },
  {
    name: "Workflow Changes",
    recipients: ["Workflow Admins"],
    channel: "email",
    frequency: "on-change",
    conditions: "When workflow configurations are modified"
  },
  {
    name: "Security Alerts",
    recipients: ["Platform Admins"],
    channel: "email",
    frequency: "immediate",
    conditions: "Security-related events and unauthorized access attempts"
  }
];

export const reportFormats: ReportFormat[] = [
  {
    name: "Executive Summary",
    format: "PDF",
    sections: "Overview, Key Findings, Recommendations",
    frequency: "Monthly"
  },
  {
    name: "Detailed Analysis",
    format: "Excel",
    sections: "Raw Data, Analytics, Trends, Charts",
    frequency: "Weekly"
  },
  {
    name: "Compliance Report",
    format: "Word",
    sections: "Regulatory Updates, Compliance Status, Action Items",
    frequency: "Quarterly"
  },
  {
    name: "Audit Trail",
    format: "CSV",
    sections: "User Actions, System Events, Timestamps",
    frequency: "On-demand"
  }
];

export const samplingStrategies: SamplingStrategy[] = [
  {
    propertyName: "Transaction Amount",
    strategy: "grouped",
    strategyJson: '{"ranges": ["0-1000", "1001-10000", "10001+"], "samplesPerGroup": 100}'
  },
  {
    propertyName: "Trade Time",
    strategy: "time-range",
    strategyJson: '{"interval": "1h", "samplesPerInterval": 50}'
  },
  {
    propertyName: "User Activity",
    strategy: "uniform",
    strategyJson: '{"sampleSize": 1000, "randomSeed": 42}'
  },
  {
    propertyName: "Risk Score",
    strategy: "exhaustive",
    strategyJson: '{"threshold": 0.8}'
  }
];

export const references: Reference[] = [
  {
      purpose: "Validate transaction patterns against historical data",
      searchMethod: "Pattern Match",
      source: "Internal DB",
  },
  {
      purpose: "Cross-reference customer information with external databases",
      searchMethod: "Fuzzy Search",
      source: "External API",
  },
  {
      purpose: "Verify regulatory compliance across jurisdictions",
      searchMethod: "Rule-based",
      source: "RegTech API",
  },
];