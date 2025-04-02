import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { SearchStrategy } from "../data";

interface SearchStrategyTableHeaderProps {}

const SearchStrategyTableHeader: React.FC<SearchStrategyTableHeaderProps> = ({}) => {
    return (
        <TableHeader>
            <TableRow className="border-b">
                <TableHead className="w-[20%]">Algorithm</TableHead>
                <TableHead className="w-[52%]">Description</TableHead>
                <TableHead className="w-[10%]">Cost/100</TableHead>
                <TableHead className="w-[10%]">Time/100</TableHead>
                <TableHead className="w-[8%]">Status</TableHead>
            </TableRow>
        </TableHeader>
    );
};

interface SearchStrategyTableRowProps {
    strategy: SearchStrategy;
    onCheckedChange: (checked: boolean) => void;
}

const SearchStrategyTableRow: React.FC<SearchStrategyTableRowProps> = ({ strategy, onCheckedChange }) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{strategy.name}</TableCell>
            <TableCell className="text-sm text-muted-foreground">{strategy.description}</TableCell>
            <TableCell>{strategy.costPer100}</TableCell>
            <TableCell>{strategy.timePer100}</TableCell>
            <TableCell>
                <Checkbox checked={strategy.enabled} onCheckedChange={onCheckedChange} />
            </TableCell>
        </TableRow>
    );
};

interface SearchStrategiesSectionProps {
    searchStrategies: SearchStrategy[];
}

const SearchStrategiesSection: React.FC<SearchStrategiesSectionProps> = ({ searchStrategies }) => {
    return (
        <>
            <Card>
                <CardContent className="flex items-center justify-between py-4">
                    <div>
                        <h3 className="font-medium">Search Strategies</h3>
                        <p className="text-sm text-muted-foreground">Configure and optimize search algorithms for different use cases</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <SearchStrategyTableHeader />
                        <TableBody>
                            {searchStrategies.map((strategy, index) => (
                                <SearchStrategyTableRow
                                    key={index}
                                    strategy={strategy}
                                    onCheckedChange={(checked) => {
                                        const newStrategies = [...searchStrategies];
                                        newStrategies[index].enabled = checked as boolean;
                                    }}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    );
};

export default SearchStrategiesSection;
