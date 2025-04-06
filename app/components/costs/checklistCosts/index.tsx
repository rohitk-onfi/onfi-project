import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { checklistData, checklistTrends } from "@/app/components/costs/data";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import CostPerfTrendGraph from "@/app/components/costs/checklistCosts/CostPerfTrendGraph";
import LatencyTrendGraph from "@/app/components/costs/checklistCosts/LatencyTrendGraph";
import ChecklistTable from "@/app/components/costs/checklistCosts/ChecklistTable";

interface ChecklistCostsProps {}

const ChecklistCosts: React.FC<ChecklistCostsProps> = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-3 mb-6">
                <CostPerfTrendGraph data={checklistTrends} />
                <LatencyTrendGraph data={checklistTrends} />
            </div>

            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input placeholder="Search records..." className="pl-9" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon">
                                <Filter className="h-4 w-4" />
                            </Button>
                            <Button variant="outline">
                                <Calendar className="h-4 w-4 mr-2" />
                                Date Range
                            </Button>
                            <Button variant="outline">
                                <Download className="h-4 w-4 mr-2" />
                                Export Report
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-lg border">
                        <ChecklistTable data={checklistData} />
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default ChecklistCosts;
