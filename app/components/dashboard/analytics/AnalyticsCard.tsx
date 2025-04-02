import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArrowUpIcon,
    ArrowDownIcon,
} from "lucide-react";

export interface AnalyticsCardProps {
    title: string;
    value: string;
    change: string;
    direction: 'positive' | 'negative';
    versus: string;
    icon: React.ReactNode;
}

export const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, value, change, direction, versus, icon }) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{value}</div>
                    <div className={`flex items-center ${direction === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                        {direction === 'positive' ? <ArrowUpIcon className="h-4 w-4 mr-1" /> : <ArrowDownIcon className="h-4 w-4 mr-1" />}
                        {change}
                    </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">vs. {versus}</p>
            </CardContent>
        </Card>
    );
};

export default AnalyticsCard;
