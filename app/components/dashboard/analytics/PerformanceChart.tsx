import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface PerformanceChartProps {
    data: {
        date: string;
        compliance: number;
        alerts: number;
        reports: number;
    }[];
}

export const PerformanceChart: React.FC<PerformanceChartProps> = ({ data }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="compliance" stroke="hsl(var(--chart-1))" name="Compliance %" />
                            <Line type="monotone" dataKey="alerts" stroke="hsl(var(--chart-2))" name="Alerts" />
                            <Line type="monotone" dataKey="reports" stroke="hsl(var(--chart-3))" name="Reports" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default PerformanceChart;
