import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WorkflowStep,initialWorkflowSteps } from '@/app/components/workflow/data';
import { WorkflowSidebar } from '@/app/components/workflow/WorkflowSidebar';
import DefineEntities from '@/app/components/workflow/steps/entity';
import ElaborateScope from '@/app/components/workflow/steps/elaborate-scope';
import CrossCheckReferences from '@/app/components/workflow/steps/cross-check-references';
import Reporting from '@/app/components/workflow/steps/reporting';

interface WorkflowSectionProps {
}

const WorkflowSection:React.FC<WorkflowSectionProps> = ({}) => {
  const [currentStep, setCurrentStep] = useState('define-entities');
  const [workflowSteps, setWorkflowSteps] = useState<WorkflowStep[]>(initialWorkflowSteps);
  const [dataSource, setDataSource] = useState('');
  const [pollingFrequency, setPollingFrequency] = useState('');
  const [entityName, setEntityName] = useState('');
  const [entityDescription, setEntityDescription] = useState('');

  const handlePreviousStep = () => {
    const currentStepIndex = workflowSteps.findIndex(step => step.id === currentStep);
    if (currentStepIndex > 0) {
      setCurrentStep(workflowSteps[currentStepIndex - 1].id);
    }
  };

  const handleNextStep = () => {
    const currentStepIndex = workflowSteps.findIndex(step => step.id === currentStep);
    if (currentStepIndex < workflowSteps.length - 1) {
      const updatedSteps = workflowSteps.map((step, index) => ({
        ...step,
        status: index === currentStepIndex ? 'completed' 
               : index === currentStepIndex + 1 ? 'in-progress'
               : step.status
      }));
      setWorkflowSteps(updatedSteps);
      setCurrentStep(workflowSteps[currentStepIndex + 1].id);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'define-entities':
        return (
          <DefineEntities
            entityName={entityName}
            entityDescription={entityDescription}
            dataSource={dataSource}
            pollingFrequency={pollingFrequency}
            onEntityNameChange={setEntityName}
            onEntityDescriptionChange={setEntityDescription}
            onDataSourceChange={setDataSource}
            onPollingFrequencyChange={setPollingFrequency}
          />
        );
      case 'elaborate-scope':
        return <ElaborateScope />;
      case 'cross-check-references':
        return <CrossCheckReferences />;
      case 'reporting':
        return <Reporting />;
      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Implementation in Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">This section is currently under development.</p>
            </CardContent>
          </Card>
        );
    }
  };

    return (
        <div className="flex gap-8">
              <WorkflowSidebar
                steps={workflowSteps}
                currentStep={currentStep}
                onStepChange={setCurrentStep}
                onPrevious={handlePreviousStep}
                onNext={handleNextStep}
              />
              <div className="flex-1">
                {renderStepContent()}
              </div>
            </div>
    );
}

export default WorkflowSection;