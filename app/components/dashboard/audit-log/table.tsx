import React from "react";
import { CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, FileText, Brain } from "lucide-react";
import { AuditLogEntry } from "../data";

interface AuditLogTableHeaderProps {}

const AuditLogTableHeader: React.FC<AuditLogTableHeaderProps> = ({}) => {
    return (
        <TableHeader>
            <TableRow className="hover:bg-transparent">
                <TableHead className="w-[100px]">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Type
                    </div>
                </TableHead>
                <TableHead className="w-[200px]">
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Person
                    </div>
                </TableHead>
                <TableHead className="w-[150px]">
                    <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Department
                    </div>
                </TableHead>
                <TableHead className="w-[150px]">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Time
                    </div>
                </TableHead>
                <TableHead className="min-w-[300px]">
                    <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Description
                    </div>
                </TableHead>
                <TableHead className="w-[200px]">
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        People Impact
                    </div>
                </TableHead>
                <TableHead className="w-[200px]">
                    <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4" />
                        AI Context
                    </div>
                </TableHead>
            </TableRow>
        </TableHeader>
    );
};

interface AuditLogTableRowProps {
    entry: AuditLogEntry;
}

const AuditLogTableRow: React.FC<AuditLogTableRowProps> = ({ entry }) => {
    return (
        <TableRow key={entry.id}>
            <TableCell>
                <Badge
                    variant={
                        entry.type === "Created"
                            ? "default"
                            : entry.type === "Updated"
                            ? "secondary"
                            : entry.type === "Deleted"
                            ? "destructive"
                            : entry.type === "Permission"
                            ? "outline"
                            : "secondary"
                    }>
                    {entry.type}
                </Badge>
            </TableCell>
            <TableCell>
                <div className="flex flex-col">
                    <span className="font-medium">{entry.person.name}</span>
                    <span className="text-sm text-muted-foreground">{entry.person.email}</span>
                </div>
            </TableCell>
            <TableCell>
                <Badge variant="outline" className="font-normal">
                    {entry.department}
                </Badge>
            </TableCell>
            <TableCell>
                <span className="text-sm">{entry.time}</span>
            </TableCell>
            <TableCell>
                <div className="flex items-start gap-2">
                    <span className="text-sm">{entry.description}</span>
                    <span className="text-xs text-muted-foreground">ID: {entry.id}</span>
                </div>
            </TableCell>
            <TableCell>
                <div className="flex flex-wrap gap-1">
                    {entry.peopleImpact.map((impact, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                            {impact}
                        </Badge>
                    ))}
                </div>
            </TableCell>
            <TableCell>
                <span className="text-sm text-muted-foreground">{entry.aiContext}</span>
            </TableCell>
        </TableRow>
    );
};


interface AuditLogTableProps {
    data: AuditLogEntry[];
}

const AuditLogTable: React.FC<AuditLogTableProps> = ({ data }) => {
    return (
        <CardContent>
            <div className="rounded-lg border">
                <Table>
                    <AuditLogTableHeader />
                    <TableBody>
                        {data.map((entry,idx) => (
                            <AuditLogTableRow key={idx} entry={entry} />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </CardContent>
    );
};

export default AuditLogTable;
