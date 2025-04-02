export type StepStatus = 'pending' | 'in-progress' | 'completed';

export type UserRole = 'business_user' | 'workflow_admin' | 'platform_admin';

export interface WorkflowStep {
  id: string;
  label: string;
  icon: any;
  status: StepStatus;
}

export interface User {
  id: string;
  name: string;
  email: string;
  ssoUsername: string;
  role: UserRole;
  lastActive: string;
  status: 'active' | 'inactive';
}

export interface EntityFile {
  name: string;
  fileType: string;
  contentSummary: string;
}

export interface ScopeItem {
  heading: string;
  category: string;
  investigation: string;
}

export interface MetadataColumn {
  name: string;
  dataType: string;
  manner: string;
  artifacts: string;
}

export interface NotificationRule {
  name: string;
  recipients: string[];
  channel: string;
  frequency: string;
  conditions: string;
}

export interface ReportFormat {
  name: string;
  format: string;
  sections: string;
  frequency: string;
}

export type SamplingStrategyType = 'uniform' | 'grouped' | 'exhaustive' | 'time-range';

export interface SamplingStrategy {
  propertyName: string;
  strategy: SamplingStrategyType;
  strategyJson: string;
}

export interface Reference {
  purpose: string;
  searchMethod: string;
  source: string;
}