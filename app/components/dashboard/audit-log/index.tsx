import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Users, Search, Filter, Brain, FileText, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { auditLogData } from "../data";
import AuditLogTable from "./table";
interface AuditLogProps {}

const AuditLog: React.FC<AuditLogProps> = ({}) => {
    return (
        <Card className="p-0">
            <CardHeader>
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input placeholder="Search logs..." className="pl-9" />
                        </div>
                        <Button variant="outline" size="icon">
                            <Filter className="h-4 w-4" />
                        </Button>
                        <Button variant="outline">
                            <FileText className="h-4 w-4 mr-2" />
                            Export
                        </Button>
                        <Button variant="default">
                            <Clock className="h-4 w-4 mr-2" />
                            Refresh
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <AuditLogTable data={auditLogData} />
        </Card>
    );
};

export default AuditLog;
