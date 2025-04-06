import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, Activity, ListChecks, History, PlayCircle } from "lucide-react";
import DashboardView from "@/app/components/dashboard/dashboard-view";
import AuditLog from "@/app/components/dashboard/audit-log";
import CurrentlyRunning from "@/app/components/dashboard/running";
import ChecklistManager from "@/app/components/dashboard/checklist";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="container mx-auto space-y-8">
                <Tabs defaultValue="dashboard" className="space-y-8">
                    <TabsList className="bg-muted h-12 p-1 gap-1">
                        <TabsTrigger value="dashboard" className="gap-2">
                            <BarChart2 className="h-4 w-4" />
                            Dashboard
                        </TabsTrigger>
                        <TabsTrigger value="checklist" className="gap-2">
                            <ListChecks className="h-4 w-4" />
                            Checklist
                        </TabsTrigger>
                        <TabsTrigger value="transactions" className="gap-2">
                            <Activity className="h-4 w-4" />
                            Entity
                        </TabsTrigger>
                        <TabsTrigger value="audit" className="gap-2">
                            <History className="h-4 w-4" />
                            Audit Log
                        </TabsTrigger>
                        <TabsTrigger value="running" className="gap-2">
                            <PlayCircle className="h-4 w-4" />
                            Currently Running
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="dashboard" className="space-y-8">
                        <DashboardView />
                    </TabsContent>

                    <TabsContent value="checklist">
                        <ChecklistManager />
                    </TabsContent>

                    <TabsContent value="transactions">
                        <Card>
                            <CardHeader>
                                <CardTitle>Transaction Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Transaction-specific information will be displayed here</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="audit">
                        <AuditLog />
                    </TabsContent>

                    <TabsContent value="running">
                        <CurrentlyRunning />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Dashboard;
