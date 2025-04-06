import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { entityData, costTrends } from "@/app/components/costs/data";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import CostTrendGraph from "@/app/components/costs/entityCosts/CostTrendGraph";
import LatencyTrendGraph from "@/app/components/costs/entityCosts/LatencyTrendGraph";
import EntityTable from "@/app/components/costs/entityCosts/EntityTable";

interface EntityCostsProps {}

const EntityCosts: React.FC<EntityCostsProps> = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-3 mb-6">
                <CostTrendGraph data={costTrends} />
                <LatencyTrendGraph data={costTrends} />
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
                        <EntityTable data={entityData} />
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default EntityCosts;
