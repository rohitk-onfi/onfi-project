import React from "react";
import { MoreVertical, AlertCircle, Users, Bell, Clock, LayoutList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Plus } from "lucide-react";
import { NotificationRule } from "@/app/components/workflow/data";

interface NotifRulesHeaderProps {}

const NotifRulesHeader: React.FC<NotifRulesHeaderProps> = ({}) => {
    return (
        <TableHeader>
            <TableRow className="hover:bg-transparent border-b">
                <TableHead className="w-[20%] border-r">
                    <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Rule Name
                    </div>
                </TableHead>
                <TableHead className="w-[25%] border-r">
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Recipients
                    </div>
                </TableHead>
                <TableHead className="w-[15%] border-r">
                    <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4" />
                        Channel
                    </div>
                </TableHead>
                <TableHead className="w-[15%] border-r">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Frequency
                    </div>
                </TableHead>
                <TableHead className="w-[17%] border-r">
                    <div className="flex items-center gap-2">
                        <LayoutList className="h-4 w-4" />
                        Conditions
                    </div>
                </TableHead>
                <TableHead className="w-[8%] text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
    );
};

interface NotifRulesRowProps {
    rule: NotificationRule;
}

const NotifRulesRow: React.FC<NotifRulesRowProps> = ({ rule }) => {
    return (
        <TableRow className="border-b last:border-b-0">
            <TableCell className="font-medium border-r">{rule.name}</TableCell>
            <TableCell className="border-r">
                <div className="flex flex-wrap gap-1">
                    {rule.recipients.map((recipient, i) => (
                        <Badge key={i} variant="secondary" className="font-normal">
                            {recipient}
                        </Badge>
                    ))}
                </div>
            </TableCell>
            <TableCell className="border-r">
                <Badge variant="outline" className="font-normal">
                    {rule.channel}
                </Badge>
            </TableCell>
            <TableCell className="border-r">{rule.frequency}</TableCell>
            <TableCell className="border-r">
                <span className="text-sm text-muted-foreground">{rule.conditions}</span>
            </TableCell>
            <TableCell className="text-right">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                </Button>
            </TableCell>
        </TableRow>
    );
};

interface NotifRulesProps {
    data: NotificationRule[];
}

const NotifRules: React.FC<NotifRulesProps> = ({ data }) => {
    return (
        <div className="rounded-lg border bg-card">
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <Bell className="h-5 w-5" />
                        <h2 className="text-base font-medium">Notification Rules</h2>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Configure notification settings and recipients</p>
                </div>
                <Button size="sm" className="h-9">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Rule
                </Button>
            </div>
            <div>
                <Table>
                    <NotifRulesHeader />
                    <TableBody>
                        {data.map((rule, index) => (
                            <NotifRulesRow key={index} rule={rule} />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default NotifRules;
