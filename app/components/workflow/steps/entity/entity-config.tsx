import React from "react";
import { Settings, FileCode, FileJson, BookOpen, MoreVertical, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Plus } from "lucide-react";
import { EntityFile } from "@/app/components/workflow/data";

interface EntityConfigHeaderProps {}

const EntityConfigHeader: React.FC<EntityConfigHeaderProps> = ({}) => {
    return (
        <TableHeader>
            <TableRow className="hover:bg-transparent border-b">
                <TableHead className="w-[20%] border-r">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex items-center gap-2">
                                    <FileCode className="h-4 w-4" />
                                    File Pattern
                                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>
                                    Specify file naming patterns using wildcards (*)
                                    <br />
                                    Examples: *.entity.json, *.config.yaml
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </TableHead>
                <TableHead className="w-[20%] border-r">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex items-center gap-2">
                                    <FileJson className="h-4 w-4" />
                                    Schema Format
                                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>The format or specification used to define the file structure</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </TableHead>
                <TableHead className="w-[52%] border-r">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="h-4 w-4" />
                                    Purpose & Contents
                                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Describes the purpose and expected contents of matching files</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </TableHead>
                <TableHead className="w-[8%] text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
    );
};

interface EntityConfigRowProps {
    file: EntityFile;
}

const EntityConfigRow: React.FC<EntityConfigRowProps> = ({ file }) => {
    return (
        <TableRow className="border-b last:border-b-0">
            <TableCell className="font-medium border-r">
                <code className="px-2 py-1 bg-secondary rounded">{file.name}</code>
            </TableCell>
            <TableCell className="border-r">
                <Badge variant="secondary" className="font-normal">
                    {file.fileType}
                </Badge>
            </TableCell>
            <TableCell className="border-r">{file.contentSummary}</TableCell>
            <TableCell className="text-right">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                </Button>
            </TableCell>
        </TableRow>
    );
};

interface EntityConfigProps {
    data: EntityFile[];
}

const EntityConfig: React.FC<EntityConfigProps> = ({ data }) => {
    return (
        <div className="rounded-lg border bg-card">
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        <h2 className="text-base font-medium">Entity Configuration Files</h2>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Define file patterns and schemas for entity configuration</p>
                </div>
                <Button size="sm" className="h-9">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Configuration
                </Button>
            </div>
            <div>
                <Table>
                    <EntityConfigHeader />
                    <TableBody>
                        {data.map((file, index) => (
                            <EntityConfigRow key={index} file={file} />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default EntityConfig;
