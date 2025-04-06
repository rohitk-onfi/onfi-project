import React from "react";
import { Database, MoreVertical, Filter, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Plus } from "lucide-react";
import { SamplingStrategy } from "@/app/components/workflow/data";

interface SamplingStrategyTableHeaderProps {}

const SamplingStrategyTableHeader: React.FC<SamplingStrategyTableHeaderProps> = ({}) => {
    return (
        <TableHeader>
            <TableRow className="hover:bg-transparent border-b">
                <TableHead className="w-[30%] border-r">
                    <div className="flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        Property Name
                    </div>
                </TableHead>
                <TableHead className="w-[20%] border-r">
                    <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        Sampling Strategy
                    </div>
                </TableHead>
                <TableHead className="w-[42%] border-r">
                    <div className="flex items-center gap-2">
                        <Code2 className="h-4 w-4" />
                        Strategy JSON
                    </div>
                </TableHead>
                <TableHead className="w-[8%] text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
    );
};

interface SamplingStrategyTableRowProps {
    strategy: SamplingStrategy;
}

const SamplingStrategyTableRow: React.FC<SamplingStrategyTableRowProps> = ({ strategy }) => {
    return (
        <TableRow className="border-b last:border-b-0">
            <TableCell className="font-medium border-r">{strategy.propertyName}</TableCell>
            <TableCell className="border-r">
                <Badge variant="outline" className="font-normal capitalize">
                    {strategy.strategy.replace("-", " ")}
                </Badge>
            </TableCell>
            <TableCell className="border-r">
                <code className="text-sm bg-secondary/50 px-2 py-1 rounded">{strategy.strategyJson}</code>
            </TableCell>
            <TableCell className="text-right">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                </Button>
            </TableCell>
        </TableRow>
    );
};

interface SamplingStrategyTableProps {
    data: SamplingStrategy[];
}

const SamplingStrategyTable: React.FC<SamplingStrategyTableProps> = ({ data }) => {
    return (
        <div className="rounded-lg border bg-card">
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <Filter className="h-5 w-5" />
                        <h2 className="text-base font-medium">Sampling Strategies</h2>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Configure data sampling methods and parameters</p>
                </div>
                <Button size="sm" className="h-9">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Strategy
                </Button>
            </div>
            <div>
                <Table>
                    <SamplingStrategyTableHeader />
                    <TableBody>
                        {data.map((strategy, index) => (
                            <SamplingStrategyTableRow key={index} strategy={strategy} />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default SamplingStrategyTable;
