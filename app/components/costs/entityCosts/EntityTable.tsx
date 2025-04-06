import React from "react";
import { EntityData } from "@/app/components/costs/data";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign } from "lucide-react";
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from "@/components/ui/table";

interface EntityTableProps {
    data: EntityData[];
}

const EntityTable: React.FC<EntityTableProps> = ({ data }) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Entity Name</TableHead>
                    <TableHead className="text-center"># Files</TableHead>
                    <TableHead>Modalities Used</TableHead>
                    <TableHead>Cost</TableHead>
                    <TableHead>Processing Time</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((record) => (
                    <TableRow key={record.date}>
                        <TableCell>{record.date}</TableCell>
                        <TableCell className="font-medium">{record.entityName}</TableCell>
                        <TableCell className="text-center">{record.filesCount}</TableCell>
                        <TableCell>
                            <div className="flex gap-1">
                                {record.modalities.map((modality) => (
                                    <Badge key={modality} variant="secondary" className="font-normal">
                                        {modality}
                                    </Badge>
                                ))}
                            </div>
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

export default EntityTable;
