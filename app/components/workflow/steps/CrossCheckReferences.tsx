"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MoreVertical, Plus, FileText, Settings, Database } from "lucide-react";
import { Reference } from "@/app/types";
import { references } from "@/app/config/constants";

interface ReferencesTableHeaderProps {}

const ReferencesTableHeader: React.FC<ReferencesTableHeaderProps> = ({}) => {
    return (
        <TableHeader>
            <TableRow className="hover:bg-transparent border-b">
                <TableHead className="w-[50%] border-r">
                    <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Purpose
                    </div>
                </TableHead>
                <TableHead className="w-[25%] border-r">
                    <div className="flex items-center gap-2">
                        <Search className="h-4 w-4" />
                        Search Method
                    </div>
                </TableHead>
                <TableHead className="w-[17%] border-r">
                    <div className="flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        Source
                    </div>
                </TableHead>
                <TableHead className="w-[8%] text-right">
                    <div className="flex items-center gap-2 justify-end">
                        <Settings className="h-4 w-4" />
                        Actions
                    </div>
                </TableHead>
            </TableRow>
        </TableHeader>
    );
};

interface ReferencesTableRowProps {
    reference: Reference;
}

const ReferencesTableRow: React.FC<ReferencesTableRowProps> = ({ reference }) => {
    return (
        <TableRow className="border-b last:border-b-0">
            <TableCell className="font-medium border-r">{reference.purpose}</TableCell>
            <TableCell className="border-r">{reference.searchMethod}</TableCell>
            <TableCell className="border-r">
                <Badge variant="secondary">{reference.source}</Badge>
            </TableCell>
            <TableCell className="text-right">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                </Button>
            </TableCell>
        </TableRow>
    );
};

interface CrossCheckReferencesProps {}

const CrossCheckReferences: React.FC<CrossCheckReferencesProps> = ({}) => {
    return (
        <div className="space-y-6">
            <Card>
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex flex-col">
                        <h2 className="text-base font-medium">Reference Checks</h2>
                        <p className="text-sm text-muted-foreground">Configure and manage reference validation rules</p>
                    </div>
                    <Button size="sm" className="h-9">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Check
                    </Button>
                </div>
                <CardContent className="p-0">
                    <Table>
                        <ReferencesTableHeader />
                        <TableBody>
                            {references.map((ref, index) => (
                                <ReferencesTableRow key={index} reference={ref} />
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default CrossCheckReferences;
