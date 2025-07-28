import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Database, 
  FileText, 
  Download, 
  Upload, 
  Trash2, 
  RefreshCw, 
  Shield, 
  Settings,
  Code,
  Terminal,
  Zap,
  Archive,
  Monitor
} from "lucide-react";

const tools = [
  {
    id: "backup",
    name: "Database Backup",
    description: "Create and manage database backups",
    icon: Database,
    status: "Active",
    lastUsed: "2024-01-20"
  },
  {
    id: "export",
    name: "Data Export",
    description: "Export user data and analytics",
    icon: Download,
    status: "Active", 
    lastUsed: "2024-01-19"
  },
  {
    id: "import",
    name: "Bulk Import",
    description: "Import quotes, users, and content in bulk",
    icon: Upload,
    status: "Active",
    lastUsed: "2024-01-18"
  },
  {
    id: "cleanup",
    name: "Data Cleanup",
    description: "Remove duplicate and unused data",
    icon: Trash2,
    status: "Maintenance",
    lastUsed: "2024-01-15"
  }
];

const systemStats = [
  { label: "Database Size", value: "2.4 GB", change: "+0.2 GB" },
  { label: "Active Users", value: "8,547", change: "+234" },
  { label: "API Calls", value: "1.2M", change: "+5.2%" },
  { label: "Storage Used", value: "67%", change: "+2%" }
];

export function ToolsManagement() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Tools</h1>
          <p className="text-muted-foreground">System utilities and maintenance tools</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Monitor className="mr-2 h-4 w-4" />
            System Status
          </Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {systemStats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change} from last week</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="tools" className="w-full">
        <TabsList>
          <TabsTrigger value="tools">Management Tools</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="api">API Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="tools" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Card key={tool.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Icon className="h-8 w-8 text-primary" />
                      <Badge variant={tool.status === "Active" ? "default" : "secondary"}>
                        {tool.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Last used: {tool.lastUsed}
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm">Launch</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{tool.name}</DialogTitle>
                            <DialogDescription>{tool.description}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p>Configure and run {tool.name.toLowerCase()}.</p>
                            <div className="flex space-x-2">
                              <Button className="flex-1">Execute</Button>
                              <Button variant="outline">Schedule</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Maintenance</CardTitle>
              <CardDescription>Routine maintenance and optimization tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Cache Cleanup</h4>
                  <p className="text-sm text-muted-foreground">Clear temporary files and optimize cache</p>
                </div>
                <Button variant="outline">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clean Now
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Database Optimization</h4>
                  <p className="text-sm text-muted-foreground">Optimize database performance and indexes</p>
                </div>
                <Button variant="outline">
                  <Zap className="mr-2 h-4 w-4" />
                  Optimize
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Archive Old Data</h4>
                  <p className="text-sm text-muted-foreground">Archive data older than 1 year</p>
                </div>
                <Button variant="outline">
                  <Archive className="mr-2 h-4 w-4" />
                  Archive
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Tools</CardTitle>
              <CardDescription>Security monitoring and management utilities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Security Scan</h4>
                  <p className="text-sm text-muted-foreground">Run comprehensive security audit</p>
                </div>
                <Button variant="outline">
                  <Shield className="mr-2 h-4 w-4" />
                  Scan Now
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Access Log Review</h4>
                  <p className="text-sm text-muted-foreground">Review recent access patterns</p>
                </div>
                <Button variant="outline">View Logs</Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Password Policy</h4>
                  <p className="text-sm text-muted-foreground">Enforce password requirements</p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Management</CardTitle>
              <CardDescription>API keys, rate limits, and monitoring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">API Keys</h4>
                  <p className="text-sm text-muted-foreground">Manage API access keys</p>
                </div>
                <Button variant="outline">
                  <Code className="mr-2 h-4 w-4" />
                  Manage Keys
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Rate Limits</h4>
                  <p className="text-sm text-muted-foreground">Configure API rate limiting</p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">API Console</h4>
                  <p className="text-sm text-muted-foreground">Test API endpoints</p>
                </div>
                <Button variant="outline">
                  <Terminal className="mr-2 h-4 w-4" />
                  Open Console
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}