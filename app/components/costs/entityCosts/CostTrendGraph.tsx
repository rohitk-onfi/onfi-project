import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Tooltip, Legend, Line, CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import React from "react";
import { CostTrend } from "../data";

interface CostTrendGraphProps {
    data: CostTrend[];
}

const CostTrendGraph: React.FC<CostTrendGraphProps> = ({data}) => {
    return (
        <Card>
            <CardHeader className="pb-4">
                <CardTitle className="text-base font-medium">Cost Trends</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
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
                            <Line type="monotone" dataKey="cost" stroke="hsl(var(--chart-1))" name="Cost ($)" dot={{ strokeWidth: 2, r: 2 }} activeDot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default CostTrendGraph;
