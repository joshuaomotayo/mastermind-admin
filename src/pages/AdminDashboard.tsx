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
import { SearchLogsManagement } from "@/components/SearchLogsManagement";
import { ToolsManagement } from "@/components/ToolsManagement";
import { EmailSystemManagement } from "@/components/EmailSystemManagement";
import { SupportManagement } from "@/components/SupportManagement";
import { MediaManagement } from "@/components/MediaManagement";
import { PollsManagement } from "@/components/PollsManagement";
import { ReportsAnalyticsManagement } from "@/components/ReportsAnalyticsManagement";
import { NotificationsManagement } from "@/components/NotificationsManagement";
import { AdminRolesManagement } from "@/components/AdminRolesManagement";
import { AutoLogsManagement } from "@/components/AutoLogsManagement";
import { CharityManagement } from "@/components/CharityManagement";
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
    case "charity":
      return <CharityManagement />;
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
    case "search":
      return <SearchLogsManagement />;
    case "tools":
      return <ToolsManagement />;
    case "email":
      return <EmailSystemManagement />;
    case "support":
      return <SupportManagement />;
    case "media":
      return <MediaManagement />;
    case "polls":
      return <PollsManagement />;
    case "reports":
      return <ReportsAnalyticsManagement />;
    case "settings":
      return <SettingsManagement />;
    case "notifications":
      return <NotificationsManagement />;
    case "admin-roles":
      return <AdminRolesManagement />;
    case "logs":
      return <AutoLogsManagement />;
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