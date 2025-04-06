import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { CriticalChecklistItem } from "@/app/components/dashboard/data";

interface CriticalChecklistProps {
    data: CriticalChecklistItem[];
}

const CriticalChecklist: React.FC<CriticalChecklistProps> = ({ data }) => {
    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium">Critical Checklist Failures</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[40%]">Checklist Item</TableHead>
                            <TableHead className="w-[20%] text-right">Failure Rate</TableHead>
                            <TableHead className="w-[20%]">Impact Level</TableHead>
                            <TableHead className="w-[20%] text-right">Affected Companies</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.item}</TableCell>
                                <TableCell className="text-right">
                                    <span className="text-red-600 font-medium">{item.failureRate}</span>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={item.impact === "high" ? "destructive" : "secondary"}>{item.impact.toUpperCase()}</Badge>
                                </TableCell>
                                <TableCell className="text-right font-medium">{item.affectedCompanies}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default CriticalChecklist;
