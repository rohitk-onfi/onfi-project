'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { User, UserRole } from '@/app/components/workflow/data';
import UsersTable from './table';
import UserCreator from './user-creator';

interface UserManagementProps {
  initialUsers: User[];
}

const UserManagement:React.FC<UserManagementProps> = ({ initialUsers }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [showUserCreator, setShowUserCreator] = useState(false);

  const handleRemoveUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleResetPassword = (userId: string) => {
    console.log(`Password reset requested for user ${userId}`);
  };

  const handleUpdateRole = (userId: string, newRole: UserRole) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    ));
  };

  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 px-0 pb-8">
        <div>
          <CardTitle className="text-2xl font-semibold">User Management</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">Manage user access and permissions</p>
        </div>
        <Button 
          onClick={() => setShowUserCreator(true)}
          className="bg-primary hover:bg-primary/90"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </CardHeader>
      <CardContent className="px-0">
        {showUserCreator && <UserCreator setUsers={setUsers} setShowUserCreator={setShowUserCreator} />}

        <UsersTable users={users} handleUpdateRole={handleUpdateRole} handleResetPassword={handleResetPassword} handleRemoveUser={handleRemoveUser} />
      </CardContent>
    </Card>
  );
}

export default UserManagement;