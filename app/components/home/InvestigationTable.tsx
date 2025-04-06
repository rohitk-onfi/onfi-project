import React from "react";
import { Investigation } from "@/app/components/home/data";
import { User, Clock, CheckSquare, Database, LineChart, AlertTriangle, FileText, Settings, Pause, Play, Trash2, DollarSign, ListChecks, AlertCircle, BarChart2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface InvestigationActionsProps {
    id: string;
    status: string;
    handleStatusToggle: (id: string) => void;
    handleDelete: (id: string) => void;
}

const InvestigationActions: React.FC<InvestigationActionsProps> = ({ id, status, handleStatusToggle, handleDelete }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Settings className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => (window.location.href = `/dashboard`)}>
                    <BarChart2 className="h-4 w-4 mr-2" />
                    View Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => (window.location.href = `/workflow?id=${id}`)}>
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Pipeline
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => (window.location.href = `/costs`)}>
                    <DollarSign className="h-4 w-4 mr-2" />
                    Cost Analysis
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleStatusToggle(id)}>
                    {status === "paused" ? (
                        <>
                            <Play className="h-4 w-4 mr-2" />
                            Resume Pipeline
                        </>
                    ) : (
                        <>
                            <Pause className="h-4 w-4 mr-2" />
                            Pause Pipeline
                        </>
                    )}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDelete(id)} className="text-destructive focus:text-destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Pipeline
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

interface InvestigationTableHeaderProps {}

const InvestigationTableHeader: React.FC<InvestigationTableHeaderProps> = ({}) => {
    return (
        <thead>
            <tr className="h-[64px] border-b">
                <th className="w-[180px] px-6 text-left font-medium border-r">
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Created By
                    </div>
                </th>
                <th className="w-[160px] px-6 text-left font-medium border-r">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Last Run
                    </div>
                </th>
                <th className="w-[160px] px-6 text-left font-medium border-r">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Next Run
                    </div>
                </th>
                <th className="w-[160px] px-6 text-left font-medium border-r">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Frequency
                    </div>
                </th>
                <th className="w-[140px] px-6 text-left font-medium border-r">
                    <div className="flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        Entity
                    </div>
                </th>
                <th className="w-[120px] px-6 text-left font-medium border-r">
                    <div className="flex items-center gap-2">
                        <CheckSquare className="h-4 w-4" />
                        Checklist
                    </div>
                </th>
                <th className="w-[120px] px-6 text-left font-medium border-r">
                    <div className="flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        Sources
                    </div>
                </th>
                <th className="w-[200px] px-6 text-left font-medium border-r">
                    <div className="flex items-center gap-2">
                        <LineChart className="h-4 w-4" />
                        Compliance Rate
                    </div>
                </th>
                <th className="w-[120px] px-6 text-left font-medium border-r">
                    <div className="flex items-center gap-2">
                        <ListChecks className="h-4 w-4" />
                        Queue
                    </div>
                </th>
                <th className="w-[180px] px-6 text-left font-medium border-r">
                    <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Alerts (7d)
                    </div>
                </th>
                <th className="w-[180px] px-6 text-left font-medium border-r">
                    <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Reports (7d)
                    </div>
                </th>
                <th className="w-[120px] px-6 text-left font-medium border-r">
                    <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Status
                    </div>
                </th>
                <th className="w-[100px] px-6 text-right font-medium">
                    <div className="flex items-center gap-2 justify-end">
                        <Settings className="h-4 w-4" />
                        Actions
                    </div>
                </th>
            </tr>
        </thead>
    );
};

interface InvestigationTableRowProps {
    investigation: Investigation;
    handleStatusToggle: (id: string) => void;
    handleDelete: (id: string) => void;
}

const InvestigationTableRow: React.FC<InvestigationTableRowProps> = ({ investigation, handleStatusToggle, handleDelete }) => {
    return (
        <tr key={investigation.id} className="h-[64px] border-b last:border-b-0 hover:bg-muted/50">
            <td className="px-6 border-r">{investigation.createdBy}</td>
            <td className="px-6 border-r">{investigation.lastRun}</td>
            <td className="px-6 border-r">{investigation.nextRun}</td>
            <td className="px-6 border-r">{investigation.frequency}</td>
            <td className="px-6 border-r">
                <Link href={`/entity/${investigation.entity.toLowerCase()}`} className="text-primary hover:underline">
                    {investigation.entity}
                </Link>
            </td>
            <td className="px-6 border-r">{investigation.checklistItems}</td>
            <td className="px-6 border-r">{investigation.sources}</td>
            <td className="px-6 border-r">
                <span className={`font-medium ${investigation.complianceRate >= 98 ? "text-green-600" : investigation.complianceRate >= 90 ? "text-yellow-600" : "text-red-600"}`}>
                    {investigation.complianceRate}%
                </span>
            </td>
            <td className="px-6 border-r">{investigation.queueItems}</td>
            <td className="px-6 border-r">{investigation.alerts7d}</td>
            <td className="px-6 border-r">{investigation.reports7d}</td>
            <td className="px-6 border-r">
                <Badge variant={investigation.status === "active" ? "default" : investigation.status === "paused" ? "outline" : "destructive"}>
                    {investigation.status.charAt(0).toUpperCase() + investigation.status.slice(1)}
                </Badge>
            </td>
            <td className="px-6 text-right">
                <InvestigationActions id={investigation.id} status={investigation.status} handleStatusToggle={handleStatusToggle} handleDelete={handleDelete} />
            </td>
        </tr>
    );
};

interface InvestigationTableProps {
    data: Investigation[];
}

const InvestigationTable = ({ data }: InvestigationTableProps) => {
    const handleStatusToggle = (id: string) => {
        // Implementation for toggling status
        console.log("Toggle status for:", id);
    };

    const handleDelete = (id: string) => {
        // Implementation for deleting investigation
        console.log("Delete investigation:", id);
    };

    return (
        <div className="overflow-x-auto ml-[400px]">
            <table className="w-full min-w-[2200px]">
                <InvestigationTableHeader />
                <tbody>
                    {data.map((investigation) => (
                        <InvestigationTableRow key={investigation.id} investigation={investigation} handleStatusToggle={handleStatusToggle} handleDelete={handleDelete} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvestigationTable;
