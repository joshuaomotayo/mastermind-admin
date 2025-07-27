import { useState } from "react";
import { AdminSidebar } from "@/components/AdminSidebar";
import { DashboardOverview } from "@/components/DashboardOverview";
import { UserManagement } from "@/components/UserManagement";
import { QuotesManagement } from "@/components/QuotesManagement";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const renderActiveSection = (activeSection: string) => {
  switch (activeSection) {
    case "dashboard":
      return <DashboardOverview />;
    case "users":
      return <UserManagement />;
    case "quotes":
      return <QuotesManagement />;
    case "blog":
      return (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">Blog/Explore Management</h1>
          <Card>
            <CardHeader>
              <CardTitle>Blog Management</CardTitle>
              <CardDescription>Manage blog posts, categories, and content</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Blog management features coming soon...</p>
            </CardContent>
          </Card>
        </div>
      );
    case "giveaways":
      return (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">Giveaways Management</h1>
          <Card>
            <CardHeader>
              <CardTitle>Giveaways</CardTitle>
              <CardDescription>Create and manage giveaways and campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Giveaways management features coming soon...</p>
            </CardContent>
          </Card>
        </div>
      );
    case "groups":
      return (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">Groups Management</h1>
          <Card>
            <CardHeader>
              <CardTitle>Groups</CardTitle>
              <CardDescription>Manage user groups, moderators, and group content</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Groups management features coming soon...</p>
            </CardContent>
          </Card>
        </div>
      );
    case "community":
      return (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">Community & Posts</h1>
          <Card>
            <CardHeader>
              <CardTitle>Community Posts</CardTitle>
              <CardDescription>Manage community posts, comments, and interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Community management features coming soon...</p>
            </CardContent>
          </Card>
        </div>
      );
    case "challenges":
      return (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">Challenges & Events</h1>
          <Card>
            <CardHeader>
              <CardTitle>Events</CardTitle>
              <CardDescription>Create and manage challenges, events, and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Events management features coming soon...</p>
            </CardContent>
          </Card>
        </div>
      );
    case "shop":
      return (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">Shop Management</h1>
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>Manage products, inventory, and shop settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Shop management features coming soon...</p>
            </CardContent>
          </Card>
        </div>
      );
    case "payments":
      return (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">Checkout / Payments</h1>
          <Card>
            <CardHeader>
              <CardTitle>Payments</CardTitle>
              <CardDescription>View transactions, orders, and payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Payment management features coming soon...</p>
            </CardContent>
          </Card>
        </div>
      );
    case "settings":
      return (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <Card>
            <CardHeader>
              <CardTitle>Site Settings</CardTitle>
              <CardDescription>Configure site-wide settings and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Settings management features coming soon...</p>
            </CardContent>
          </Card>
        </div>
      );
    default:
      return (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h1>
          <Card>
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
              <CardDescription>This section is under development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">This feature will be available soon...</p>
            </CardContent>
          </Card>
        </div>
      );
  }
};

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6">
          {renderActiveSection(activeSection)}
        </div>
      </main>
    </div>
  );
}