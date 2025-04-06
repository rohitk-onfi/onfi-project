import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Play, Clock, FileText, Trash2, Settings, Edit, CheckCircle2 } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Checklist, ChecklistItem } from "@/app/components/dashboard/data";

interface ChecklistTableHeaderProps {}

const ChecklistTableHeader: React.FC<ChecklistTableHeaderProps> = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className="w-[300px]">Name</TableHead>
                <TableHead className="w-[300px]">Description</TableHead>
                <TableHead className="w-[120px]">Status</TableHead>
                <TableHead className="w-[180px]">Last Run</TableHead>
                <TableHead className="w-[180px]">Next Run</TableHead>
                <TableHead className="w-[150px]">Owner</TableHead>
                <TableHead className="w-[100px] text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
    );
};

interface ChecklistTableRowProps {
    item: ChecklistItem;
    handleRunItem: () => void;
    handleEditItem: () => void;
    handleDeleteItem: () => void;
}

const ChecklistTableRow: React.FC<ChecklistTableRowProps> = ({ item, handleRunItem, handleEditItem, handleDeleteItem }) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>
                <Badge variant={item.status === "completed" ? "default" : item.status === "in-progress" ? "secondary" : "outline"}>
                    {item.status === "in-progress" ? (
                        <div className="flex items-center gap-1">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            In Progress
                        </div>
                    ) : item.status === "completed" ? (
                        <div className="flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3" />
                            Completed
                        </div>
                    ) : (
                        "Pending"
                    )}
                </Badge>
            </TableCell>
            <TableCell>{item.lastRun}</TableCell>
            <TableCell>{item.nextRun}</TableCell>
            <TableCell>{item.owner}</TableCell>
            <TableCell className="text-right">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Settings className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={handleRunItem}>
                            <Play className="h-4 w-4 mr-2" />
                            Run Now
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleEditItem}>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Item
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleDeleteItem} className="text-destructive focus:text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Item
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    );
};

interface ChecklistTabProps {
    checklist: Checklist;
    handleAddItem: (checklistId: string) => void;
    handleRunAllItems: (checklistId: string) => void;
    handleDeleteChecklist: (checklistId: string) => void;
    handleRunItem: (checklistId: string, itemId: string) => void;
    handleEditItem: (checklistId: string, itemId: string) => void;
    handleDeleteItem: (checklistId: string, itemId: string) => void;
}

const ChecklistTab: React.FC<ChecklistTabProps> = ({ checklist, handleAddItem, handleRunAllItems, handleDeleteChecklist, handleRunItem, handleEditItem, handleDeleteItem }) => {
    return (
        <Card className="border rounded-lg">
            <CardContent className="p-6">
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input placeholder="Search items..." className="pl-9" />
                        </div>
                        <Button onClick={() => handleAddItem(checklist.id)}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Item
                        </Button>
                        <Button variant="outline" onClick={() => handleRunAllItems(checklist.id)}>
                            <Play className="h-4 w-4 mr-2" />
                            Run All
                        </Button>
                        <Button variant="outline">
                            <Clock className="h-4 w-4 mr-2" />
                            Schedule
                        </Button>
                        <Button variant="outline">
                            <FileText className="h-4 w-4 mr-2" />
                            Export
                        </Button>
                        <Button variant="destructive" size="icon" onClick={() => handleDeleteChecklist(checklist.id)}>
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="rounded-lg border">
                        <Table>
                            <ChecklistTableHeader />
                            <TableBody>
                                {checklist.items.map((item, idx) => (
                                    <ChecklistTableRow
                                        key={idx}
                                        item={item}
                                        handleRunItem={() => handleRunItem(checklist.id, item.id)}
                                        handleEditItem={() => handleEditItem(checklist.id, item.id)}
                                        handleDeleteItem={() => handleDeleteItem(checklist.id, item.id)}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ChecklistTab;
