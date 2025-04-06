import React from "react";
import { ChecklistData } from "@/app/components/costs/data";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign } from "lucide-react";
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from "@/components/ui/table";
import Link from "next/link";

interface ChecklistTableProps {
    data: ChecklistData[];
}

const ChecklistTable: React.FC<ChecklistTableProps> = ({ data }) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Entity ID</TableHead>
                    <TableHead>Checklist ID</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Pass Rate</TableHead>
                    <TableHead>Cost</TableHead>
                    <TableHead>Processing Time</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((record) => (
                    <TableRow key={record.date}>
                        <TableCell>{record.date}</TableCell>
                        <TableCell>
                            <Link href={`/entity/${record.entityId}`} className="text-primary hover:underline">
                                {record.entityId}
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Link href={`/checklist/${record.checklistId}`} className="text-primary hover:underline">
                                {record.checklistId}
                            </Link>
                        </TableCell>
                        <TableCell>{record.items}</TableCell>
                        <TableCell>
                            <Badge variant="outline" className={record.passRate >= 98 ? "text-green-500" : record.passRate >= 95 ? "text-yellow-500" : "text-red-500"}>
                                {record.passRate}%
                            </Badge>
                        </TableCell>
                        <TableCell>
                            <Badge variant="outline">
                                <DollarSign className="h-3 w-3 mr-1" />
                                {record.cost.toFixed(2)}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            <Badge variant="outline">
                                <Clock className="h-3 w-3 mr-1" />
                                {record.processingTime}
                            </Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ChecklistTable;
