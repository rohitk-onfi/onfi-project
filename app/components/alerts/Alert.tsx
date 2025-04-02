'use client';

import { AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface AlertProps {
  title: string;
  time: string;
  severity: 'high' | 'medium' | 'low';
}

export function Alert({ title, time, severity }: AlertProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center gap-3">
        <AlertCircle className={`h-5 w-5 ${
          severity === 'high' ? 'text-red-500' :
          severity === 'medium' ? 'text-yellow-500' :
          'text-blue-500'
        }`} />
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{time}</p>
        </div>
      </div>
      <Badge variant={
        severity === 'high' ? 'destructive' :
        severity === 'medium' ? 'default' :
        'secondary'
      }>
        {severity.toUpperCase()}
      </Badge>
    </div>
  );
}