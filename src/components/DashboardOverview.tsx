import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  UserPlus, 
  Quote, 
  Mail, 
  ShoppingCart, 
  MessageCircle,
  TrendingUp,
  AlertTriangle,
  Plus,
  Send,
  Calendar,
  Users2
} from "lucide-react";

const kpiData = [
  { label: "Total Users", value: "12,847", change: "+12%", icon: Users, trend: "up" },
  { label: "Active Today", value: "1,284", change: "+8%", icon: UserPlus, trend: "up" },
  { label: "New Signups", value: "94", change: "+23%", icon: UserPlus, trend: "up" },
  { label: "Quotes Posted", value: "2,456", change: "+15%", icon: Quote, trend: "up" },
  { label: "Daily Quote Sent", value: "11,923", change: "+2%", icon: Mail, trend: "up" },
  { label: "Purchases", value: "156", change: "-5%", icon: ShoppingCart, trend: "down" },
  { label: "Comments", value: "3,892", change: "+18%", icon: MessageCircle, trend: "up" },
];

const recentActivity = [
  { action: "New user registered", user: "Sarah Johnson", time: "2 minutes ago", type: "user" },
  { action: "Quote posted", user: "Mike Chen", time: "5 minutes ago", type: "content" },
  { action: "Giveaway started", user: "Admin", time: "12 minutes ago", type: "event" },
  { action: "Group created", user: "Emma Davis", time: "18 minutes ago", type: "group" },
  { action: "Purchase completed", user: "John Smith", time: "24 minutes ago", type: "purchase" },
];

const pendingAlerts = [
  { title: "User complaint pending", count: 3, priority: "high" },
  { title: "Spam detection", count: 7, priority: "medium" },
  { title: "Pending quotes review", count: 12, priority: "low" },
  { title: "Flagged content", count: 2, priority: "high" },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Last 7 days
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Card key={kpi.label}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{kpi.label}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <p className={`text-xs ${kpi.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                  {kpi.change} from last period
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Shortcut Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used admin actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add New Quote
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Send className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Create Event
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users2 className="mr-2 h-4 w-4" />
              Manage Groups
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest user and system activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'user' ? 'bg-primary' :
                    activity.type === 'content' ? 'bg-success' :
                    activity.type === 'event' ? 'bg-warning' :
                    activity.type === 'group' ? 'bg-accent' :
                    'bg-muted'
                  }`} />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alerts & Pending */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Alerts & Pending
            </CardTitle>
            <CardDescription>Items requiring your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingAlerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{alert.title}</p>
                    <Badge variant={
                      alert.priority === 'high' ? 'destructive' :
                      alert.priority === 'medium' ? 'default' :
                      'secondary'
                    } className="text-xs">
                      {alert.count} items
                    </Badge>
                  </div>
                  <Button size="sm" variant="outline">
                    Review
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}