import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Shield, 
  Users, 
  Key, 
  UserPlus,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Lock,
  Unlock,
  Crown,
  Settings
} from "lucide-react";

const adminUsers = [
  {
    id: "ADMIN-001",
    name: "John Doe",
    email: "john@admin.com",
    role: "Super Admin",
    status: "Active",
    lastLogin: "2024-01-20 14:30",
    permissions: ["all"],
    createdAt: "2024-01-01",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: "ADMIN-002",
    name: "Jane Smith",
    email: "jane@admin.com",
    role: "Content Manager",
    status: "Active",
    lastLogin: "2024-01-20 11:15",
    permissions: ["quotes", "blog", "community"],
    createdAt: "2024-01-05",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: "ADMIN-003",
    name: "Bob Wilson",
    email: "bob@admin.com",
    role: "User Support",
    status: "Inactive",
    lastLogin: "2024-01-18 16:45",
    permissions: ["users", "support"],
    createdAt: "2024-01-10",
    avatar: "/api/placeholder/40/40"
  }
];

const roles = [
  {
    id: "ROLE-001",
    name: "Super Admin",
    description: "Full system access and control",
    permissions: ["all"],
    users: 1,
    color: "destructive"
  },
  {
    id: "ROLE-002",
    name: "Content Manager",
    description: "Manage quotes, blog posts, and community content",
    permissions: ["quotes", "blog", "community", "media"],
    users: 3,
    color: "default"
  },
  {
    id: "ROLE-003",
    name: "User Support",
    description: "Handle user queries and support tickets",
    permissions: ["users", "support", "tickets"],
    users: 2,
    color: "secondary"
  },
  {
    id: "ROLE-004",
    name: "Analytics Viewer",
    description: "View reports and analytics only",
    permissions: ["analytics", "reports"],
    users: 1,
    color: "outline"
  }
];

const permissions = [
  { id: "users", name: "User Management", category: "Core" },
  { id: "quotes", name: "Quotes Management", category: "Content" },
  { id: "blog", name: "Blog Management", category: "Content" },
  { id: "community", name: "Community Management", category: "Content" },
  { id: "media", name: "Media Management", category: "Content" },
  { id: "analytics", name: "Analytics & Reports", category: "Data" },
  { id: "reports", name: "Generate Reports", category: "Data" },
  { id: "support", name: "Support Tickets", category: "Support" },
  { id: "settings", name: "System Settings", category: "System" },
  { id: "admin", name: "Admin Management", category: "System" }
];

export function AdminRolesManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const getStatusColor = (status: string) => {
    return status === "Active" ? "default" : "secondary";
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Super Admin": return "destructive";
      case "Content Manager": return "default";
      case "User Support": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Role Management</h1>
          <p className="text-muted-foreground">Manage admin users, roles, and permissions</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Role Settings
          </Button>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Admin
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Admins</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">+1 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Currently online</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Roles Defined</CardTitle>
            <Key className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Permission groups</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Login</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2m</div>
            <p className="text-xs text-muted-foreground">ago</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="admins" className="w-full">
        <TabsList>
          <TabsTrigger value="admins">Admin Users</TabsTrigger>
          <TabsTrigger value="roles">Roles</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
        </TabsList>

        <TabsContent value="admins" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Admin Users</CardTitle>
                  <CardDescription>Manage administrator accounts and access</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Admin
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Add New Admin</DialogTitle>
                      <DialogDescription>Create a new administrator account</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="admin-name">Full Name</Label>
                          <Input id="admin-name" placeholder="Enter full name" />
                        </div>
                        <div>
                          <Label htmlFor="admin-email">Email</Label>
                          <Input id="admin-email" type="email" placeholder="Enter email address" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="admin-role">Role</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select admin role" />
                          </SelectTrigger>
                          <SelectContent>
                            {roles.map((role) => (
                              <SelectItem key={role.id} value={role.name}>{role.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="admin-password">Temporary Password</Label>
                          <Input id="admin-password" type="password" placeholder="Generate password" />
                        </div>
                        <div className="flex items-end">
                          <Button variant="outline" className="w-full">Generate Password</Button>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="send-invite" />
                        <Label htmlFor="send-invite">Send invitation email</Label>
                      </div>
                      <Button className="w-full">Create Admin Account</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search admins by name or email..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role.id} value={role.name}>{role.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Admin</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adminUsers.map((admin) => (
                    <TableRow key={admin.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <img 
                            src={admin.avatar} 
                            alt={admin.name}
                            className="h-8 w-8 rounded-full"
                          />
                          <div>
                            <div className="font-medium">{admin.name}</div>
                            <div className="text-sm text-muted-foreground">{admin.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {admin.role === "Super Admin" && <Crown className="h-4 w-4 text-yellow-500" />}
                          <Badge variant={getRoleColor(admin.role) as any}>
                            {admin.role}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(admin.status) as any}>
                          {admin.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {admin.lastLogin}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {admin.createdAt}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          {admin.status === "Active" ? (
                            <Button variant="ghost" size="sm">
                              <Lock className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button variant="ghost" size="sm">
                              <Unlock className="h-4 w-4" />
                            </Button>
                          )}
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Admin Roles</CardTitle>
                  <CardDescription>Define and manage administrator roles</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Role
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roles.map((role) => (
                  <Card key={role.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-5 w-5 text-muted-foreground" />
                          <CardTitle className="text-lg">{role.name}</CardTitle>
                        </div>
                        <Badge variant={role.color as any}>{role.users} users</Badge>
                      </div>
                      <CardDescription>{role.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Permissions:</h4>
                          <div className="flex flex-wrap gap-1">
                            {role.permissions.slice(0, 3).map((permission) => (
                              <Badge key={permission} variant="outline" className="text-xs">
                                {permission}
                              </Badge>
                            ))}
                            {role.permissions.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{role.permissions.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Permission System</CardTitle>
              <CardDescription>Configure granular permissions for different roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {["Core", "Content", "Data", "Support", "System"].map((category) => (
                  <div key={category}>
                    <h3 className="text-lg font-medium mb-3">{category} Permissions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {permissions
                        .filter((permission) => permission.category === category)
                        .map((permission) => (
                          <div key={permission.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <h4 className="font-medium">{permission.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                Control access to {permission.name.toLowerCase()}
                              </p>
                            </div>
                            <Switch />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Admin Activity Log</CardTitle>
              <CardDescription>Track admin actions and system changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <div>
                      <h4 className="font-medium">John Doe logged in</h4>
                      <p className="text-sm text-muted-foreground">Admin login from IP 192.168.1.1</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">2 minutes ago</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <h4 className="font-medium">Jane Smith updated user permissions</h4>
                      <p className="text-sm text-muted-foreground">Modified role for user sarah@email.com</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">1 hour ago</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <h4 className="font-medium">Bob Wilson created new role</h4>
                      <p className="text-sm text-muted-foreground">Added "Content Moderator" role</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">3 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                    <div>
                      <h4 className="font-medium">Failed login attempt</h4>
                      <p className="text-sm text-muted-foreground">Invalid credentials for admin@unknown.com</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">5 hours ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}