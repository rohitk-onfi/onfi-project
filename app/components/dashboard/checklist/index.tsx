'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus } from 'lucide-react';
import ChecklistTab from '@/app/components/dashboard/checklist/CheckllistTab';
import { Checklist, initialChecklists } from '@/app/components/dashboard/data';

const ChecklistManager = () => {
  const [checklists, setChecklists] = useState<Checklist[]>(initialChecklists);
  const [activeChecklist, setActiveChecklist] = useState('1');

  const handleAddChecklist = () => {
    const newChecklist: Checklist = {
      id: (checklists.length + 1).toString(),
      title: 'New Checklist',
      description: 'Description of the new checklist',
      items: []
    };
    setChecklists([...checklists, newChecklist]);
    setActiveChecklist(newChecklist.id);
  };

  const handleAddItem = (checklistId: string) => {
    // Implementation for adding a new item
    console.log('Add item to checklist:', checklistId);
  };

  const handleEditItem = (checklistId: string, itemId: string) => {
    // Implementation for editing an item
    console.log('Edit item:', itemId, 'in checklist:', checklistId);
  };

  const handleDeleteItem = (checklistId: string, itemId: string) => {
    // Implementation for deleting an item
    console.log('Delete item:', itemId, 'from checklist:', checklistId);
  };

  const handleRunItem = (checklistId: string, itemId: string) => {
    // Implementation for running a single item
    console.log('Run item:', itemId, 'in checklist:', checklistId);
  };

  const handleRunAllItems = (checklistId: string) => {
    // Implementation for running all items in a checklist
    console.log('Run all items in checklist:', checklistId);
  };

  const handleDeleteChecklist = (checklistId: string) => {
    // Implementation for deleting a checklist
    console.log('Delete checklist:', checklistId);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 border rounded-lg bg-card">
        <p className="text-sm text-muted-foreground">Configure and schedule recurring compliance verification tasks and regulatory checks</p>
        <Button onClick={handleAddChecklist}>
          <Plus className="h-4 w-4 mr-2" />
          Add Checklist
        </Button>
      </div>

      <Tabs value={activeChecklist} onValueChange={setActiveChecklist}>
        <TabsList className="bg-muted h-12 p-1 gap-1">
          {checklists.map((checklist) => (
            <TabsTrigger key={checklist.id} value={checklist.id} className="gap-2">
              {checklist.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {checklists.map((checklist) => (
          <TabsContent key={checklist.id} value={checklist.id}>
            <ChecklistTab checklist={checklist} handleAddItem={handleAddItem} handleRunAllItems={handleRunAllItems} handleDeleteChecklist={handleDeleteChecklist} handleRunItem={handleRunItem} handleEditItem={handleEditItem} handleDeleteItem={handleDeleteItem} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default ChecklistManager;