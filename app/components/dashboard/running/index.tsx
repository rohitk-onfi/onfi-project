import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ExternalLink, Settings, Play, Pause, Trash2 } from "lucide-react";
import { runningInvestigations, RunningInvestigation } from "../data";

interface InvestigationTableHeaderProps {}

const InvestigationTableHeader: React.FC<InvestigationTableHeaderProps> = ({}) => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className="w-[300px]">Investigation Name</TableHead>
                <TableHead className="w-[180px]">Start Time</TableHead>
                <TableHead className="w-[120px]">Duration</TableHead>
                <TableHead className="w-[120px]">Progress</TableHead>
                <TableHead className="w-[120px]">Status</TableHead>
                <TableHead className="w-[120px]">Type</TableHead>
                <TableHead className="w-[120px]">Priority</TableHead>
                <TableHead className="w-[100px] text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
    );
};

interface InvestigationTableRowProps {
    investigation: RunningInvestigation;
}

const InvestigationTableRow: React.FC<InvestigationTableRowProps> = ({ investigation }) => {
    const handleViewStatus = (id: string) => {
        console.log("View status for:", id);
    };

    const handleTogglePause = (id: string) => {
        console.log("Toggle pause for:", id);
    };

    const handleDeleteRun = (id: string) => {
        console.log("Delete run:", id);
    };
    return (
        <TableRow key={investigation.id}>
            <TableCell className="font-medium">{investigation.name}</TableCell>
            <TableCell>{investigation.startTime}</TableCell>
            <TableCell>{investigation.duration}</TableCell>
            <TableCell>
                <div className="w-full bg-secondary rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${investigation.progress}%` }}></div>
                </div>
                <span className="text-xs text-muted-foreground mt-1 block">{investigation.progress}%</span>
            </TableCell>
            <TableCell>
                <Badge variant={investigation.status === "running" ? "default" : "secondary"}>
                    {investigation.status === "running" ? (
                        <div className="flex items-center gap-1">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Running
                        </div>
                    ) : (
                        <div className="flex items-center gap-1">
                            <span className="relative flex h-2 w-2">
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
                            </span>
                            Paused
                        </div>
                    )}
                </Badge>
            </TableCell>
            <TableCell>{investigation.type}</TableCell>
            <TableCell>
                <Badge variant={investigation.priority === "high" ? "destructive" : investigation.priority === "medium" ? "default" : "secondary"}>
                    {investigation.priority.charAt(0).toUpperCase() + investigation.priority.slice(1)}
                </Badge>
            </TableCell>
            <TableCell className="text-right">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Settings className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleViewStatus(investigation.id)}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Status
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleTogglePause(investigation.id)}>
                            {investigation.status === "paused" ? (
                                <>
                                    <Play className="h-4 w-4 mr-2" />
                                    Resume Run
                                </>
                            ) : (
                                <>
                                    <Pause className="h-4 w-4 mr-2" />
                                    Pause Run
                                </>
                            )}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeleteRun(investigation.id)} className="text-destructive focus:text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Run
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    );
};

interface CurrentlyRunningProps {}

const CurrentlyRunning: React.FC<CurrentlyRunningProps> = ({}) => {
    return (
        <Card>
            <CardContent className="p-6">
                <Table>
                    <InvestigationTableHeader />
                    <TableBody>
                        {runningInvestigations.map((investigation, idx) => (
                            <InvestigationTableRow key={idx} investigation={investigation} />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default CurrentlyRunning;
