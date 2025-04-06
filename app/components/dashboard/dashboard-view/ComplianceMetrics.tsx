import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { DailyCheckStats } from "@/app/components/dashboard/data";

interface ComplianceMetricsProps {
    data: DailyCheckStats[];
}

const ComplianceMetrics: React.FC<ComplianceMetricsProps> = ({ data }) => {
    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium">Compliance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "hsl(var(--background))",
                                    border: "1px solid hsl(var(--border))",
                                    borderRadius: "6px",
                                }}
                            />
                            <Legend />
                            <Bar name="Flags Raised" dataKey="flagsRaised" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                            <Bar name="Flags Mitigated" dataKey="flagsMitigated" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                            <Bar name="Escalations" dataKey="escalations" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default ComplianceMetrics;
