import React, { useState } from "react";
import { UserRole, User } from "@/app/components/workflow/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

interface UserCreatorProps {
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
    setShowUserCreator: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserCreator: React.FC<UserCreatorProps> = ({ setUsers, setShowUserCreator }) => {
    const [newUserName, setNewUserName] = useState("");
    const [newUserEmail, setNewUserEmail] = useState("");
    const [newUserSsoUsername, setNewUserSsoUsername] = useState("");
    const [newUserRole, setNewUserRole] = useState<UserRole>("business_user");

    const handleAddUser = () => {
        if (newUserName && newUserEmail && newUserSsoUsername && newUserRole) {
            const newUser: User = {
                id: Math.random().toString(36).substr(2, 9),
                name: newUserName,
                email: newUserEmail,
                ssoUsername: newUserSsoUsername,
                role: newUserRole,
                lastActive: new Date().toISOString().split("T")[0],
                status: "active",
            };
            setUsers((users: User[]) => [...users, newUser]);
            setShowUserCreator(false);
        }
    };

    return (
        <div className="mb-8">
            <div className="bg-card border rounded-xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Add New User</h3>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowUserCreator(false)}>
                        <X className="h-4 w-4" />
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input placeholder="Enter full name" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} className="bg-background" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input placeholder="Enter email address" type="email" value={newUserEmail} onChange={(e) => setNewUserEmail(e.target.value)} className="bg-background" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">SSO Username</label>
                        <Input placeholder="Enter SSO username" value={newUserSsoUsername} onChange={(e) => setNewUserSsoUsername(e.target.value)} className="bg-background" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Role</label>
                        <Select value={newUserRole} onValueChange={(value: UserRole) => setNewUserRole(value)}>
                            <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="business_user">Business User</SelectItem>
                                <SelectItem value="workflow_admin">Workflow Admin</SelectItem>
                                <SelectItem value="platform_admin">Platform Admin</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex justify-end gap-3 pt-2">
                    <Button variant="outline" onClick={() => setShowUserCreator(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleAddUser}>Add User</Button>
                </div>
            </div>
        </div>
    );
};

export default UserCreator;
