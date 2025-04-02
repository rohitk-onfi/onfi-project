import React from "react";
import { Settings, Tag, Database, ListChecks, MoreVertical, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Plus } from "lucide-react";
import { MetadataColumn } from "@/app/types";

interface EntitySchemaHeaderProps {}

const EntitySchemaHeader: React.FC<EntitySchemaHeaderProps> = ({}) => {
    return (
        <TableHeader>
            <TableRow className="hover:bg-transparent border-b">
                <TableHead className="w-[15%] border-r">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex items-center gap-2">
                                    <Tag className="h-4 w-4" />
                                    Property Name
                                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>The name of the entity property or field</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </TableHead>
                <TableHead className="w-[15%] border-r">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex items-center gap-2">
                                    <Database className="h-4 w-4" />
                                    Data Type
                                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>The type of data this property will store</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </TableHead>
                <TableHead className="w-[42%] border-r">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex items-center gap-2">
                                    <Settings className="h-4 w-4" />
                                    Population Method
                                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>How this property&apos;s value is set or generated</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </TableHead>
                <TableHead className="w-[20%] border-r">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex items-center gap-2">
                                    <ListChecks className="h-4 w-4" />
                                    Validation Rules
                                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Additional validation and formatting requirements</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </TableHead>
                <TableHead className="w-[8%] text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
    );
};

interface EntitySchemaRowProps {
    metaColumn: MetadataColumn;
}

const EntitySchemaRow: React.FC<EntitySchemaRowProps> = ({ metaColumn }) => {
    return (
        <TableRow className="border-b last:border-b-0">
            <TableCell className="font-medium border-r">{metaColumn.name}</TableCell>
            <TableCell className="border-r">
                <Badge variant="secondary" className="font-normal">
                    {metaColumn.dataType}
                </Badge>
            </TableCell>
            <TableCell className="border-r">{metaColumn.manner}</TableCell>
            <TableCell className="border-r">{metaColumn.artifacts}</TableCell>
            <TableCell className="text-right">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                </Button>
            </TableCell>
        </TableRow>
    );
};

interface EntitySchemaProps {
    data: MetadataColumn[];
}

const EntitySchema: React.FC<EntitySchemaProps> = ({ data }) => {
    return (
        <div className="rounded-lg border bg-card">
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <Database className="h-5 w-5" />
                        <h2 className="text-base font-medium">Entity Schema Definition</h2>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Define the core structure and properties of your entities</p>
                </div>
                <Button size="sm" className="h-9">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Property
                </Button>
            </div>
            <div>
                <Table>
                    <EntitySchemaHeader />
                    <TableBody>
                        {data.map((metaColumn, index) => (
                            <EntitySchemaRow key={index} metaColumn={metaColumn} />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default EntitySchema;
