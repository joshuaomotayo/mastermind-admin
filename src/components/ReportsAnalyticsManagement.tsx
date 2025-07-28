import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Activity,
  Download,
  Calendar,
  Eye,
  MousePointer,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  RefreshCw
} from "lucide-react";

const analyticsData = [
  { metric: "Total Users", value: "12,847", change: "+12.5%", trend: "up" },
  { metric: "Active Users (30d)", value: "8,234", change: "+8.2%", trend: "up" },
  { metric: "Page Views", value: "247,891", change: "+15.3%", trend: "up" },
  { metric: "Session Duration", value: "8m 34s", change: "+2.1%", trend: "up" },
  { metric: "Bounce Rate", value: "32.4%", change: "-3.2%", trend: "down" },
  { metric: "Conversion Rate", value: "4.7%", change: "+1.8%", trend: "up" }
];

const topPages = [
  { page: "/quotes/daily", views: 45678, change: "+12%" },
  { page: "/dashboard", views: 34521, change: "+8%" },
  { page: "/community", views: 28934, change: "+15%" },
  { page: "/challenges", views: 23456, change: "+5%" },
  { page: "/profile", views: 19876, change: "+3%" }
];

const userMetrics = [
  { metric: "New Registrations", value: "234", period: "This Week" },
  { metric: "User Retention (7d)", value: "78.3%", period: "This Month" },
  { metric: "Daily Active Users", value: "3,247", period: "Today" },
  { metric: "Premium Subscriptions", value: "1,456", period: "Total" }
];

const deviceStats = [
  { device: "Mobile", percentage: 67, users: 8612 },
  { device: "Desktop", percentage: 28, users: 3597 },
  { device: "Tablet", percentage: 5, users: 642 }
];

export function ReportsAnalyticsManagement() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");
  const [selectedReport, setSelectedReport] = useState("overview");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
          <p className="text-muted-foreground">Track performance, user behavior, and platform metrics</p>
        </div>
        <div className="flex space-x-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {analyticsData.map((item) => (
          <Card key={item.metric}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.metric}</CardTitle>
              {item.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className={`text-xs ${
                item.trend === "up" ? "text-green-600" : "text-red-600"
              }`}>
                {item.change} from previous period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your users are coming from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Direct</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">45.2%</div>
                      <div className="text-xs text-muted-foreground">5,823 users</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Search Engines</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">32.1%</div>
                      <div className="text-xs text-muted-foreground">4,134 users</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Social Media</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">15.7%</div>
                      <div className="text-xs text-muted-foreground">2,021 users</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Referrals</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">7.0%</div>
                      <div className="text-xs text-muted-foreground">901 users</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
                <CardDescription>User device preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deviceStats.map((device) => (
                    <div key={device.device} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {device.device === "Mobile" && <Smartphone className="h-4 w-4 text-muted-foreground" />}
                        {device.device === "Desktop" && <Monitor className="h-4 w-4 text-muted-foreground" />}
                        {device.device === "Tablet" && <Smartphone className="h-4 w-4 text-muted-foreground" />}
                        <span className="text-sm">{device.device}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{device.percentage}%</div>
                        <div className="text-xs text-muted-foreground">{device.users.toLocaleString()} users</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Pages</CardTitle>
              <CardDescription>Most visited pages and their performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={page.page} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="text-sm font-medium text-muted-foreground">#{index + 1}</div>
                      <div>
                        <div className="font-medium">{page.page}</div>
                        <div className="text-sm text-muted-foreground">{page.views.toLocaleString()} views</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">{page.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {userMetrics.map((metric) => (
              <Card key={metric.metric}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.metric}</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-xs text-muted-foreground">{metric.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>Registration trends over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">This Month</span>
                    <span className="font-medium">1,234 new users</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Last Month</span>
                    <span className="font-medium">1,089 new users</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Growth Rate</span>
                    <span className="font-medium text-green-600">+13.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Churn Rate</span>
                    <span className="font-medium">2.1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Top countries by user count</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["United States", "Canada", "United Kingdom", "Australia", "Germany"].map((country, index) => (
                    <div key={country} className="flex items-center justify-between">
                      <span className="text-sm">{index + 1}. {country}</span>
                      <span className="font-medium">{Math.floor(Math.random() * 3000) + 500} users</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Quotes</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15,847</div>
                <p className="text-xs text-muted-foreground">+234 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">342</div>
                <p className="text-xs text-muted-foreground">+12 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Community Posts</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,923</div>
                <p className="text-xs text-muted-foreground">+456 this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Media Files</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,567</div>
                <p className="text-xs text-muted-foreground">+89 this month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Content Performance</CardTitle>
              <CardDescription>Most engaging content across the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Daily Mindfulness Quotes</h4>
                    <p className="text-sm text-muted-foreground">Quote Category</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">12,345 views</div>
                    <div className="text-sm text-muted-foreground">+15% engagement</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Meditation Techniques Guide</h4>
                    <p className="text-sm text-muted-foreground">Blog Post</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">8,923 views</div>
                    <div className="text-sm text-muted-foreground">+22% engagement</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">30-Day Challenge Discussion</h4>
                    <p className="text-sm text-muted-foreground">Community Thread</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">6,754 interactions</div>
                    <div className="text-sm text-muted-foreground">+8% engagement</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Session Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8m 34s</div>
                <p className="text-xs text-muted-foreground">+12s from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pages per Session</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.7</div>
                <p className="text-xs text-muted-foreground">+0.3 improvement</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Click-through Rate</CardTitle>
                <MousePointer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.4%</div>
                <p className="text-xs text-muted-foreground">+1.2% this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Return Visitors</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">67.3%</div>
                <p className="text-xs text-muted-foreground">+5% this month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Feature Usage</CardTitle>
              <CardDescription>How users interact with different features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { feature: "Quote of the Day", usage: "89.2%", sessions: "Daily" },
                  { feature: "Community Posts", usage: "67.8%", sessions: "Weekly" },
                  { feature: "Meditation Timer", usage: "45.3%", sessions: "Weekly" },
                  { feature: "Challenges", usage: "34.1%", sessions: "Monthly" },
                  { feature: "Premium Features", usage: "23.7%", sessions: "Daily" }
                ].map((item) => (
                  <div key={item.feature} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{item.feature}</h4>
                      <p className="text-sm text-muted-foreground">Used {item.sessions.toLowerCase()}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{item.usage}</div>
                      <div className="text-sm text-muted-foreground">of users</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Page Load Time</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2s</div>
                <p className="text-xs text-muted-foreground">-0.1s improvement</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">API Response Time</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">240ms</div>
                <p className="text-xs text-muted-foreground">+5ms this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Uptime</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">99.9%</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.1%</div>
                <p className="text-xs text-muted-foreground">-0.05% this month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>System Health</CardTitle>
              <CardDescription>Server and application performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Database Performance</h4>
                    <p className="text-sm text-muted-foreground">Query response times</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">Excellent</div>
                    <div className="text-sm text-muted-foreground">45ms avg</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">CDN Performance</h4>
                    <p className="text-sm text-muted-foreground">Content delivery speed</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">Good</div>
                    <div className="text-sm text-muted-foreground">89ms avg</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Server Resources</h4>
                    <p className="text-sm text-muted-foreground">CPU and memory usage</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-yellow-600">Moderate</div>
                    <div className="text-sm text-muted-foreground">67% usage</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}