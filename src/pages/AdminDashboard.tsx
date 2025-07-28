import { useState } from "react";
import { AdminSidebar } from "@/components/AdminSidebar";
import { DashboardOverview } from "@/components/DashboardOverview";
import { UserManagement } from "@/components/UserManagement";
import { QuotesManagement } from "@/components/QuotesManagement";
import { BlogManagement } from "@/components/BlogManagement";
import { GiveawaysManagement } from "@/components/GiveawaysManagement";
import { GroupsManagement } from "@/components/GroupsManagement";
import { CommunityManagement } from "@/components/CommunityManagement";
import { ChallengesManagement } from "@/components/ChallengesManagement";
import { ShopManagement } from "@/components/ShopManagement";
import { PaymentsManagement } from "@/components/PaymentsManagement";
import { SettingsManagement } from "@/components/SettingsManagement";
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
      return <BlogManagement />;
    case "giveaways":
      return <GiveawaysManagement />;
    case "groups":
      return <GroupsManagement />;
    case "community":
      return <CommunityManagement />;
    case "challenges":
      return <ChallengesManagement />;
    case "shop":
      return <ShopManagement />;
    case "payments":
      return <PaymentsManagement />;
    case "settings":
      return <SettingsManagement />;
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