'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Workflow, Users, Brain } from 'lucide-react';
import { User } from '@/app/types';
import { mockUsers } from '@/app/config/constants';
import UserManagement from '@/app/components/workflow/users';
import AISettings from '@/app/components/workflow/ai-settings';
import WorkflowSection from '@/app/components/workflow/workflowModule';

interface WorkflowModuleProps {}

const WorkflowModule:React.FC<WorkflowModuleProps> = ({}) => {
  const [currentTab, setCurrentTab] = useState('workflow');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-8">
          <div className="border-b">
            <TabsList className="w-full justify-start h-12 bg-transparent">
              <TabsTrigger 
                value="workflow" 
                className="data-[state=active]:bg-background data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:border-b-2 rounded-none flex gap-2"
              >
                <Workflow className="h-4 w-4" />
                Workflow
              </TabsTrigger>
              <TabsTrigger 
                value="users" 
                className="data-[state=active]:bg-background data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:border-b-2 rounded-none flex gap-2"
              >
                <Users className="h-4 w-4" />
                Users
              </TabsTrigger>
              <TabsTrigger 
                value="analytics" 
                className="data-[state=active]:bg-background data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:border-b-2 rounded-none flex gap-2"
              >
                <Brain className="h-4 w-4" />
                AI Settings
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="workflow">
            <WorkflowSection />
          </TabsContent>

          <TabsContent value="users">
            <UserManagement initialUsers={mockUsers as User[]} />
          </TabsContent>

          <TabsContent value="analytics">
            <AISettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default WorkflowModule;