"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, ListChecks } from "lucide-react";
import EntityCosts from "@/app/components/costs/entityCosts";
import ChecklistCosts from "@/app/components/costs/checklistCosts";

const Costs = () => {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="container mx-auto space-y-6">
                <div className="flex items-center justify-between border p-3 rounded">
                    <div>
                        <h1 className="text-2xl font-semibold">Transaction Pattern Analysis</h1>
                        <p className="text-sm text-muted-foreground">Cost analysis and performance metrics for transaction pattern detection pipeline</p>
                    </div>
                </div>

                <Tabs defaultValue="entity" className="space-y-8">
                    <TabsList className="bg-muted h-12 p-1 gap-1">
                        <TabsTrigger value="entity" className="gap-2">
                            <Database className="h-4 w-4" />
                            Entity Processing Costs
                        </TabsTrigger>
                        <TabsTrigger value="checklist" className="gap-2">
                            <ListChecks className="h-4 w-4" />
                            Checklist Run Costs
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="entity">
                        <EntityCosts />
                    </TabsContent>

                    <TabsContent value="checklist">
                        <ChecklistCosts />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Costs;
