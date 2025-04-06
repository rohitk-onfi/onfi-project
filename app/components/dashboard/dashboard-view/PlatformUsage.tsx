import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { UsageStats } from "@/app/components/dashboard/data";

interface PlatformUsageProps {
    data: UsageStats[];
}

const PlatformUsage: React.FC<PlatformUsageProps> = ({ data }) => {
    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium">Platform Usage</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {data.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                                <div className="flex items-center gap-3">
                                    <Icon className="h-5 w-5 text-muted-foreground" />
                                    <div>
                                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                                        <div className="font-medium">{stat.value}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className={cn("font-medium", stat.change.startsWith("+") ? "text-red-600" : "text-green-600")}>{stat.change}</div>
                                    <div className="text-xs text-muted-foreground">{stat.period}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
};

export default PlatformUsage;
