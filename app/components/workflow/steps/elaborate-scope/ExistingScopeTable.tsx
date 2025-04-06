import React from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Menu, Tag, ListChecks, MoreVertical, Plus } from "lucide-react";
import { ScopeItem } from "@/app/components/workflow/data";

interface ExistingScopeTableProps {
    data: ScopeItem[];
}

const ExistingScopeTable: React.FC<ExistingScopeTableProps> = ({ data }) => {
    return (
        <div className="rounded-lg border bg-card">
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex flex-col">
                        <h2 className="text-base font-medium">Elaborate Scope</h2>
                        <p className="text-xs text-muted-foreground">Investigation Scope Definition</p>
                    </div>
                    <Button size="sm" className="h-9">
                        <Plus className="h-4 w-4 mr-2" />
                        Add New
                    </Button>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent border-b">
                            <TableHead className="w-[15%] border-r">
                                <div className="flex items-center gap-2">
                                    <Menu className="h-4 w-4" />
                                    Heading
                                </div>
                            </TableHead>
                            <TableHead className="w-[10%] border-r">
                                <div className="flex items-center gap-2">
                                    <Tag className="h-4 w-4" />
                                    Category
                                </div>
                            </TableHead>
                            <TableHead className="w-[67%] border-r">
                                <div className="flex items-center gap-2">
                                    <ListChecks className="h-4 w-4" />
                                    Manner of Investigation
                                </div>
                            </TableHead>
                            <TableHead className="w-[8%] text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow key={index} className="border-b last:border-b-0">
                                <TableCell className="font-medium border-r">{item.heading}</TableCell>
                                <TableCell className="border-r">
                                    <Badge variant="secondary" className="font-normal">
                                        {item.category}
                                    </Badge>
                                </TableCell>
                                <TableCell className="border-r">{item.investigation}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
    );
};

export default ExistingScopeTable;