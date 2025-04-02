import React from "react";
import { MoreVertical, FileText, FileType, Clock, LayoutList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Plus } from "lucide-react";
import { ReportFormat } from "@/app/types";

interface ReportTempsHeaderProps {}

const ReportTempsHeader: React.FC<ReportTempsHeaderProps> = ({}) => {
    return (
        <TableHeader>
            <TableRow className="hover:bg-transparent border-b">
                <TableHead className="w-[25%] border-r">
                    <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Template Name
                    </div>
                </TableHead>
                <TableHead className="w-[15%] border-r">
                    <div className="flex items-center gap-2">
                        <FileType className="h-4 w-4" />
                        Format
                    </div>
                </TableHead>
                <TableHead className="w-[42%] border-r">
                    <div className="flex items-center gap-2">
                        <LayoutList className="h-4 w-4" />
                        Sections
                    </div>
                </TableHead>
                <TableHead className="w-[10%] border-r">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Frequency
                    </div>
                </TableHead>
                <TableHead className="w-[8%] text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
    );
};

interface ReportTempsRowProps {
    format: ReportFormat;
}

const ReportTempsRow: React.FC<ReportTempsRowProps> = ({ format }) => {
    return (
        <TableRow className="border-b last:border-b-0">
            <TableCell className="font-medium border-r">{format.name}</TableCell>
            <TableCell className="border-r">
                <Badge variant="outline" className="font-normal">
                    {format.format}
                </Badge>
            </TableCell>
            <TableCell className="border-r">
                <span className="text-sm text-muted-foreground">{format.sections}</span>
            </TableCell>
            <TableCell className="border-r">{format.frequency}</TableCell>
            <TableCell className="text-right">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                </Button>
            </TableCell>
        </TableRow>
    );
};

interface ReportTempsProps {
    data: ReportFormat[];
}

const ReportTemps: React.FC<ReportTempsProps> = ({ data }) => {
    return (
        <div className="rounded-lg border bg-card">
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        <h2 className="text-base font-medium">Report Templates</h2>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Manage report formats and templates</p>
                </div>
                <Button size="sm" className="h-9">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Template
                </Button>
            </div>
            <div>
                <Table>
                    <ReportTempsHeader />
                    <TableBody>
                        {data.map((format, index) => (
                            <ReportTempsRow key={index} format={format} />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default ReportTemps;
