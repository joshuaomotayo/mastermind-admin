import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Search,
  Download,
  Filter,
  RefreshCw,
  Clock,
  Database,
  Server,
  Bug,
  Info,
  Zap,
  Globe
} from "lucide-react";

const systemLogs = [
  {
    id: "LOG-001",
    timestamp: "2024-01-20 14:30:22",
    level: "INFO",
    service: "Authentication",
    message: "User login successful",
    details: "User john@email.com logged in from IP 192.168.1.1",
    requestId: "req_123456",
    userId: "user_789"
  },
  {
    id: "LOG-002",
    timestamp: "2024-01-20 14:28:15",
    level: "ERROR",
    service: "Database",
    message: "Connection timeout",
    details: "Failed to connect to database after 30s timeout",
    requestId: "req_123455",
    userId: null
  },
  {
    id: "LOG-003",
    timestamp: "2024-01-20 14:25:10",
    level: "WARNING",
    service: "Quote API",
    message: "Rate limit exceeded",
    details: "Client exceeded 100 requests per minute limit",
    requestId: "req_123454",
    userId: "user_456"
  },
  {
    id: "LOG-004",
    timestamp: "2024-01-20 14:22:33",
    level: "DEBUG",
    service: "Cache",
    message: "Cache miss for key 'daily_quotes'",
    details: "Cache key expired, fetching from database",
    requestId: "req_123453",
    userId: null
  }
];

const errorTypes = [
  { type: "Database Errors", count: 23, trend: "+5" },
  { type: "Authentication Failures", count: 12, trend: "-2" },
  { type: "API Timeouts", count: 8, trend: "+1" },
  { type: "Validation Errors", count: 45, trend: "+12" }
];

const services = ["Authentication", "Database", "Quote API", "User API", "Cache", "Email Service"];
const logLevels = ["ALL", "ERROR", "WARNING", "INFO", "DEBUG"];

export function AutoLogsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const getLevelColor = (level: string) => {
    switch (level) {
      case "ERROR": return "destructive";
      case "WARNING": return "secondary";
      case "INFO": return "default";
      case "DEBUG": return "outline";
      default: return "outline";
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "ERROR": return XCircle;
      case "WARNING": return AlertTriangle;
      case "INFO": return Info;
      case "DEBUG": return Bug;
      default: return Info;
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case "Database": return Database;
      case "Authentication": return Globe;
      case "Cache": return Zap;
      default: return Server;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Auto Logs</h1>
          <p className="text-muted-foreground">Monitor system logs, errors, and application events</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Logs
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filter
          </Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Logs Today</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,752</div>
            <p className="text-xs text-muted-foreground">+1,234 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Errors</CardTitle>
            <XCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">88</div>
            <p className="text-xs text-destructive">+16 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-yellow-600">+8 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.8%</div>
            <p className="text-xs text-green-600">Uptime last 24h</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="logs" className="w-full">
        <TabsList>
          <TabsTrigger value="logs">System Logs</TabsTrigger>
          <TabsTrigger value="errors">Error Analysis</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="settings">Log Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Real-time System Logs</CardTitle>
              <CardDescription>Monitor application events and system activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search logs by message, user, or request ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Log Level" />
                  </SelectTrigger>
                  <SelectContent>
                    {logLevels.map((level) => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {systemLogs.map((log) => {
                    const LevelIcon = getLevelIcon(log.level);
                    const ServiceIcon = getServiceIcon(log.service);
                    return (
                      <TableRow key={log.id}>
                        <TableCell className="font-mono text-sm">{log.timestamp}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <LevelIcon className="h-4 w-4" />
                            <Badge variant={getLevelColor(log.level) as any}>
                              {log.level}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <ServiceIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{log.service}</span>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <div>
                            <div className="font-medium truncate">{log.message}</div>
                            <div className="text-sm text-muted-foreground truncate">{log.details}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-xs">{log.requestId}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="errors" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Error Summary</CardTitle>
                <CardDescription>Breakdown of error types and frequencies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {errorTypes.map((error) => (
                    <div key={error.type} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{error.type}</h4>
                        <p className="text-sm text-muted-foreground">Last 24 hours</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{error.count}</div>
                        <div className={`text-sm ${
                          error.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {error.trend}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Critical Errors</CardTitle>
                <CardDescription>Latest high-priority error events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemLogs
                    .filter(log => log.level === "ERROR")
                    .map((log) => (
                      <div key={log.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                        <XCircle className="h-5 w-5 text-destructive mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate">{log.message}</h4>
                          <p className="text-sm text-muted-foreground truncate">{log.details}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">{log.service}</Badge>
                            <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Error Trends</CardTitle>
              <CardDescription>Error patterns and frequency over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-destructive">23</div>
                  <div className="text-sm text-muted-foreground">Errors this hour</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">4.2min</div>
                  <div className="text-sm text-muted-foreground">Avg resolution time</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">12%</div>
                  <div className="text-sm text-muted-foreground">Error rate increase</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Response Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245ms</div>
                <p className="text-xs text-muted-foreground">Average last hour</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Requests/min</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,247</div>
                <p className="text-xs text-muted-foreground">Current rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
                <Server className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">67%</div>
                <p className="text-xs text-muted-foreground">of 8GB total</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">34%</div>
                <p className="text-xs text-muted-foreground">4 cores</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Service Performance</CardTitle>
              <CardDescription>Performance metrics by service</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Database className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">{service}</h4>
                        <p className="text-sm text-muted-foreground">
                          {Math.floor(Math.random() * 500) + 100}ms avg response
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">Healthy</div>
                      <div className="text-sm text-muted-foreground">
                        {Math.floor(Math.random() * 1000) + 500} req/min
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Log Configuration</CardTitle>
                <CardDescription>Configure logging levels and retention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Log Level</h4>
                    <p className="text-sm text-muted-foreground">Minimum level to log</p>
                  </div>
                  <Select defaultValue="INFO">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DEBUG">DEBUG</SelectItem>
                      <SelectItem value="INFO">INFO</SelectItem>
                      <SelectItem value="WARNING">WARNING</SelectItem>
                      <SelectItem value="ERROR">ERROR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Retention Period</h4>
                    <p className="text-sm text-muted-foreground">How long to keep logs</p>
                  </div>
                  <Select defaultValue="30">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="365">1 year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Log Format</h4>
                    <p className="text-sm text-muted-foreground">Output format</p>
                  </div>
                  <Select defaultValue="json">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="json">JSON</SelectItem>
                      <SelectItem value="text">Plain Text</SelectItem>
                      <SelectItem value="structured">Structured</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alert Settings</CardTitle>
                <CardDescription>Configure automated alerts and notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Error Rate Alerts</h4>
                    <p className="text-sm text-muted-foreground">Alert when error rate exceeds threshold</p>
                  </div>
                  <Badge variant="default">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Performance Alerts</h4>
                    <p className="text-sm text-muted-foreground">Alert on slow response times</p>
                  </div>
                  <Badge variant="default">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">System Health Alerts</h4>
                    <p className="text-sm text-muted-foreground">Alert on system resource issues</p>
                  </div>
                  <Badge variant="secondary">Disabled</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}