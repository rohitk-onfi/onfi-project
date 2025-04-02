import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface EntityDistChartProps {
    data: {
        name: string;
        count: number;
        percentage: number;
    }[];
}

export const EntityDistChart: React.FC<EntityDistChartProps> = ({ data }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Entity Distribution</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="hsl(var(--chart-4))" name="Count" />
                            <Bar dataKey="percentage" fill="hsl(var(--chart-5))" name="Percentage" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default EntityDistChart;
