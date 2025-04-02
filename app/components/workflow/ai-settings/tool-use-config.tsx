import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, ExternalLink } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Server } from "../data";

interface ServersTableHeaderProps {}

const ServersTableHeader: React.FC<ServersTableHeaderProps> = ({}) => {
    return (
        <TableHeader>
            <TableRow className="border-b">
                <TableHead className="w-[18%]">Server Name</TableHead>
                <TableHead className="w-[60%]">Summary</TableHead>
                <TableHead className="w-[14%]">Documentation</TableHead>
                <TableHead className="w-[8%]">Status</TableHead>
            </TableRow>
        </TableHeader>
    );
};

interface ServersTableRowProps {
    server: Server;
    onCheckedChange: (checked: boolean) => void;
}

const ServersTableRow: React.FC<ServersTableRowProps> = ({ server, onCheckedChange }) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{server.name}</TableCell>
            <TableCell>{server.summary}</TableCell>
            <TableCell>
                <a href={server.documentation} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                    View Docs
                    <ExternalLink className="h-3 w-3" />
                </a>
            </TableCell>
            <TableCell>
                <Checkbox checked={server.status === "active"} onCheckedChange={onCheckedChange} />
            </TableCell>
        </TableRow>
    );
};

interface ToolUseConfigProps {
    servers: Server[];
}

const ToolUseConfig: React.FC<ToolUseConfigProps> = ({ servers }) => {
    return (
        <>
            <Card>
                <CardContent className="flex items-center justify-between py-4">
                    <div>
                        <h3 className="font-medium">Tool Use Configuration</h3>
                        <p className="text-sm text-muted-foreground">Manage server connections and API endpoints</p>
                    </div>
                    <Button size="sm" className="h-9">
                        <Plus className="h-4 w-4 mr-2" />
                        Add MCP Server
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <ServersTableHeader />
                        <TableBody>
                            {servers.map((server, index) => (
                                <ServersTableRow
                                    key={index}
                                    server={server}
                                    onCheckedChange={(checked) => {
                                        // Update server status logic here
                                    }}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    );
};

export default ToolUseConfig;
