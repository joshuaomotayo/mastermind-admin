import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, Filter, TrendingUp, Users, Eye, Clock } from "lucide-react";

const searchLogs = [
  {
    id: "LOG-001",
    query: "mindfulness meditation",
    user: "sarah@email.com",
    timestamp: "2024-01-20 14:30:22",
    results: 47,
    category: "Quotes",
    ip: "192.168.1.1",
    device: "Mobile"
  },
  {
    id: "LOG-002", 
    query: "daily reflection",
    user: "mike@email.com",
    timestamp: "2024-01-20 13:15:10",
    results: 23,
    category: "Blog",
    ip: "192.168.1.2",
    device: "Desktop"
  },
  {
    id: "LOG-003",
    query: "stress management",
    user: "anonymous",
    timestamp: "2024-01-20 12:45:33",
    results: 31,
    category: "All",
    ip: "192.168.1.3",
    device: "Tablet"
  }
];

const categories = ["All", "Quotes", "Blog", "Groups", "Community"];
const devices = ["All", "Mobile", "Desktop", "Tablet"];

export function SearchLogsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Search Logs</h1>
          <p className="text-muted-foreground">Monitor user search patterns and behavior</p>
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
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Searches</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,847</div>
            <p className="text-xs text-muted-foreground">+2.5% from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,421</div>
            <p className="text-xs text-muted-foreground">+12% this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Results</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34.2</div>
            <p className="text-xs text-muted-foreground">Results per search</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peak Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2-4 PM</div>
            <p className="text-xs text-muted-foreground">Most active time</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Activity</CardTitle>
          <CardDescription>Recent search queries and patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search logs by query, user, or IP..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedDevice} onValueChange={setSelectedDevice}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Device Type" />
              </SelectTrigger>
              <SelectContent>
                {devices.map((device) => (
                  <SelectItem key={device} value={device}>{device}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Query</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Results</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Device</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {searchLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.query}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{log.timestamp}</TableCell>
                  <TableCell>{log.results}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{log.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{log.device}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Popular Searches</CardTitle>
            <CardDescription>Most searched terms this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["mindfulness", "meditation", "stress relief", "daily quotes", "motivation"].map((term, index) => (
                <div key={term} className="flex items-center justify-between">
                  <span className="text-sm">{index + 1}. {term}</span>
                  <Badge variant="outline">{Math.floor(Math.random() * 500) + 100} searches</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Search Trends</CardTitle>
            <CardDescription>Analytics and insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">Avg searches per user</span>
                <span className="font-medium">3.8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Zero result searches</span>
                <span className="font-medium">2.1%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Mobile searches</span>
                <span className="font-medium">67%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Repeat searches</span>
                <span className="font-medium">34%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}