import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Shield, Users2, Key, Trash2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import { User, UserRole } from "@/app/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { roleConfig } from "@/app/config/constants";

interface UserTableHeaderProps {}

const UserTableHeader: React.FC<UserTableHeaderProps> = ({}) => {
    return (
        <TableHeader>
            <TableRow className="hover:bg-transparent">
                <TableHead className="w-[300px] py-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        <Users2 className="h-4 w-4" />
                        User Details
                    </div>
                </TableHead>
                <TableHead className="w-[150px]">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">SSO Username</div>
                </TableHead>
                <TableHead className="w-[180px]">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        <Shield className="h-4 w-4" />
                        Role
                    </div>
                </TableHead>
                <TableHead className="w-[150px]">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        <Clock className="h-4 w-4" />
                        Last Active
                    </div>
                </TableHead>
                <TableHead className="w-[120px]">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</div>
                </TableHead>
                <TableHead className="text-right">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider justify-end">Actions</div>
                </TableHead>
            </TableRow>
        </TableHeader>
    );
};

interface UsersTableRowProps {
    user: User;
    handleUpdateRole: (userId: string, newRole: UserRole) => void;
    handleResetPassword: (userId: string) => void;
    handleRemoveUser: (userId: string) => void;
}

const UserTableRow: React.FC<UsersTableRowProps> = ({ user, handleUpdateRole, handleResetPassword, handleRemoveUser }) => {
    return (
        <TableRow className="hover:bg-muted/50">
            <TableCell>
                <div className="flex flex-col">
                    <span className="font-medium">{user.name}</span>
                    <span className="text-sm text-muted-foreground">{user.email}</span>
                </div>
            </TableCell>
            <TableCell>
                <span className="text-sm font-medium">{user.ssoUsername}</span>
            </TableCell>
            <TableCell>
                <Select value={user.role} onValueChange={(value: UserRole) => handleUpdateRole(user.id, value)}>
                    <SelectTrigger className="h-8 w-[160px] truncate">
                        <SelectValue>
                            <div
                                className={cn(
                                    "flex items-center gap-2 text-sm truncate",
                                    user.role === "business_user" && "text-blue-700",
                                    user.role === "workflow_admin" && "text-purple-700",
                                    user.role === "platform_admin" && "text-red-700"
                                )}>
                                <Shield className="h-4 w-4 shrink-0" />
                                <span className="truncate">{roleConfig[user.role].label}</span>
                            </div>
                        </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="business_user">
                            <div className="flex items-center gap-2 text-blue-700">
                                <Shield className="h-4 w-4" />
                                Business User
                            </div>
                        </SelectItem>
                        <SelectItem value="workflow_admin">
                            <div className="flex items-center gap-2 text-purple-700">
                                <Shield className="h-4 w-4" />
                                Workflow Admin
                            </div>
                        </SelectItem>
                        <SelectItem value="platform_admin">
                            <div className="flex items-center gap-2 text-red-700">
                                <Shield className="h-4 w-4" />
                                Platform Admin
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </TableCell>
            <TableCell>
                <span className="text-sm">{user.lastActive}</span>
            </TableCell>
            <TableCell>
                <Badge variant={user.status === "active" ? "default" : "secondary"} className="px-2 py-0.5">
                    {user.status}
                </Badge>
            </TableCell>
            <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted" onClick={() => handleResetPassword(user.id)}>
                                    <Key className="h-4 w-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Reset Password</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted" onClick={() => handleRemoveUser(user.id)}>
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Remove User</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </TableCell>
        </TableRow>
    );
};

interface UsersTableProps {
    users: User[];
    handleUpdateRole: (userId: string, newRole: UserRole) => void;
    handleResetPassword: (userId: string) => void;
    handleRemoveUser: (userId: string) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, handleUpdateRole, handleResetPassword, handleRemoveUser }) => {
    return (
        <div className="rounded-xl border bg-card">
            <Table>
                <UserTableHeader />
                <TableBody>
                    {users.map((user) => (
                        <UserTableRow key={user.id} user={user} handleUpdateRole={handleUpdateRole} handleResetPassword={handleResetPassword} handleRemoveUser={handleRemoveUser} />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default UsersTable;
