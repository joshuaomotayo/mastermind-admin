import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Bell, 
  Send, 
  Users, 
  Calendar,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Settings,
  Smartphone,
  Mail,
  Globe,
  Clock
} from "lucide-react";

const notifications = [
  {
    id: "NOTIF-001",
    title: "New quote of the day available",
    message: "Start your morning with inspiration...",
    type: "Push",
    status: "Sent",
    recipients: 8247,
    sentAt: "2024-01-20 09:00",
    openRate: "34.2%",
    clickRate: "8.7%"
  },
  {
    id: "NOTIF-002",
    title: "Weekly challenge reminder",
    message: "Don't forget about this week's mindfulness challenge!",
    type: "Email",
    status: "Scheduled",
    recipients: 2341,
    sentAt: "2024-01-21 10:00",
    openRate: "-",
    clickRate: "-"
  },
  {
    id: "NOTIF-003",
    title: "Community post liked",
    message: "Someone liked your post about meditation",
    type: "In-App",
    status: "Sent",
    recipients: 1,
    sentAt: "2024-01-20 15:30",
    openRate: "100%",
    clickRate: "100%"
  }
];

const templates = [
  {
    id: "TEMP-001",
    name: "Daily Quote Notification",
    type: "Push",
    category: "Content",
    usage: 365,
    lastUsed: "2024-01-20"
  },
  {
    id: "TEMP-002", 
    name: "Welcome Email",
    type: "Email",
    category: "Onboarding",
    usage: 234,
    lastUsed: "2024-01-19"
  },
  {
    id: "TEMP-003",
    name: "Challenge Reminder",
    type: "Push",
    category: "Engagement",
    usage: 89,
    lastUsed: "2024-01-18"
  }
];

const notificationTypes = ["Push", "Email", "In-App", "SMS"];
const categories = ["Content", "Onboarding", "Engagement", "System", "Marketing"];

export function NotificationsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Sent": return "default";
      case "Scheduled": return "secondary";
      case "Draft": return "outline";
      case "Failed": return "destructive";
      default: return "outline";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Push": return Smartphone;
      case "Email": return Mail;
      case "In-App": return Bell;
      case "SMS": return Smartphone;
      default: return Bell;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">Manage push notifications, emails, and in-app messages</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Notification Settings
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Send Notification
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sent Today</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,847</div>
            <p className="text-xs text-muted-foreground">+2.5% from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Rate</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.4%</div>
            <p className="text-xs text-muted-foreground">+1.2% this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,247</div>
            <p className="text-xs text-muted-foreground">+156 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">Next 24 hours</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="notifications" className="w-full">
        <TabsList>
          <TabsTrigger value="notifications">Recent Notifications</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Notification History</CardTitle>
                  <CardDescription>View and manage sent notifications</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Send className="mr-2 h-4 w-4" />
                      Send Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Send Notification</DialogTitle>
                      <DialogDescription>Create and send a new notification</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="notif-title">Title</Label>
                        <Input id="notif-title" placeholder="Enter notification title" />
                      </div>
                      <div>
                        <Label htmlFor="notif-message">Message</Label>
                        <Textarea 
                          id="notif-message" 
                          placeholder="Enter notification message..."
                          className="min-h-[100px]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="notif-type">Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              {notificationTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="notif-audience">Audience</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select audience" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Users</SelectItem>
                              <SelectItem value="premium">Premium Users</SelectItem>
                              <SelectItem value="active">Active Users</SelectItem>
                              <SelectItem value="inactive">Inactive Users</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1">Send Now</Button>
                        <Button variant="outline">Schedule</Button>
                        <Button variant="outline">Save Draft</Button>
                      </div>
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
                      placeholder="Search notifications..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {notificationTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Notification</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Open Rate</TableHead>
                    <TableHead>Sent At</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {notifications.map((notification) => {
                    const TypeIcon = getTypeIcon(notification.type);
                    return (
                      <TableRow key={notification.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{notification.title}</div>
                            <div className="text-sm text-muted-foreground truncate max-w-xs">
                              {notification.message}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <TypeIcon className="h-4 w-4 text-muted-foreground" />
                            <Badge variant="outline">{notification.type}</Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getStatusColor(notification.status) as any}>
                            {notification.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{notification.recipients.toLocaleString()}</TableCell>
                        <TableCell>{notification.openRate}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {notification.sentAt}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Notification Templates</CardTitle>
                  <CardDescription>Pre-built notification templates</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Template
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((template) => {
                  const TypeIcon = getTypeIcon(template.type);
                  return (
                    <Card key={template.id}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <TypeIcon className="h-5 w-5 text-muted-foreground" />
                            <Badge variant="outline">{template.type}</Badge>
                          </div>
                          <Badge variant="secondary">{template.category}</Badge>
                        </div>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <span>Used {template.usage} times</span>
                          <span>Last: {template.lastUsed}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Button>
                          <Button size="sm" className="flex-1">
                            <Send className="mr-2 h-4 w-4" />
                            Use
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Notifications</CardTitle>
              <CardDescription>Upcoming automated notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Daily Quote Reminder</h4>
                    <p className="text-sm text-muted-foreground">Scheduled for tomorrow 9:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Push</Badge>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Weekly Challenge Email</h4>
                    <p className="text-sm text-muted-foreground">Scheduled for Sunday 10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Email</Badge>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Inactive User Re-engagement</h4>
                    <p className="text-sm text-muted-foreground">Scheduled for Friday 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Email</Badge>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Configure default notification settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Push Notifications</h4>
                    <p className="text-sm text-muted-foreground">Enable push notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">Enable email notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">In-App Notifications</h4>
                    <p className="text-sm text-muted-foreground">Show in-app notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SMS Notifications</h4>
                    <p className="text-sm text-muted-foreground">Enable SMS notifications</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Delivery Settings</CardTitle>
                <CardDescription>Configure notification delivery options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Rate Limit</span>
                  <span className="font-medium">1000/hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Retry Attempts</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Batch Size</span>
                  <span className="font-medium">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Quiet Hours</span>
                  <span className="font-medium">10 PM - 8 AM</span>
                </div>
                <Button variant="outline" className="w-full">
                  Configure Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}