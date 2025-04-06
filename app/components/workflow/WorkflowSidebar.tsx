'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WorkflowStep,statusConfig } from '@/app/components/workflow/data';

interface WorkflowSidebarProps {
  steps: WorkflowStep[];
  currentStep: string;
  onStepChange: (stepId: string) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function WorkflowSidebar({
  steps,
  currentStep,
  onStepChange,
  onPrevious,
  onNext
}: WorkflowSidebarProps) {
  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <Card className="w-72 h-fit">
      <CardHeader className="px-6">
        <CardTitle className="text-lg font-medium">Setup Investigation Agent</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col space-y-1">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const StatusIcon = statusConfig[step.status].icon;
            return (
              <Button
                key={step.id}
                variant="ghost"
                className={cn(
                  "flex-col items-start justify-start gap-1 px-6 py-4 h-auto rounded-none relative hover:bg-secondary/80",
                  currentStep === step.id && "bg-secondary",
                  currentStep === step.id && "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-primary"
                )}
                onClick={() => onStepChange(step.id)}
              >
                <div className="flex items-center gap-4 w-full">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-medium shrink-0">
                    {index + 1}
                  </span>
                  <div className="flex items-center gap-3 flex-1">
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{step.label}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 pl-12 text-sm text-muted-foreground">
                  <StatusIcon className={cn("h-4 w-4", statusConfig[step.status].color)} />
                  <span>{statusConfig[step.status].label}</span>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
      <CardContent className="p-4 border-t mt-1">
        <div className="flex justify-between gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={onPrevious}
            disabled={currentStepIndex === 0}
            className="w-full h-10"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onNext}
            disabled={currentStepIndex === steps.length - 1}
            className="w-full h-10"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}