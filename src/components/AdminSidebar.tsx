import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  BarChart3,
  Users,
  Quote,
  FileText,
  Gift,
  Users2,
  MessageCircle,
  Trophy,
  Calendar,
  ShoppingBag,
  CreditCard,
  Search,
  Wrench,
  Mail,
  HelpCircle,
  Image,
  BarChart,
  Settings,
  Bell,
  Shield,
  Activity
} from "lucide-react";
import { useState } from "react";

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "users", label: "User Management", icon: Users },
  { id: "quotes", label: "Quotes Management", icon: Quote },
  { id: "blog", label: "Blog/Explore", icon: FileText },
  { id: "giveaways", label: "Giveaways", icon: Gift },
  { id: "groups", label: "Groups Management", icon: Users2 },
  { id: "community", label: "Community & Posts", icon: MessageCircle },
  { id: "challenges", label: "Challenges & Events", icon: Trophy },
  { id: "shop", label: "Shop Management", icon: ShoppingBag },
  { id: "payments", label: "Checkout / Payments", icon: CreditCard },
  { id: "search", label: "Search Logs", icon: Search },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "email", label: "Email System", icon: Mail },
  { id: "support", label: "Support / Help Center", icon: HelpCircle },
  { id: "media", label: "Photos & Videos", icon: Image },
  { id: "polls", label: "Polls & Threads", icon: BarChart },
  { id: "reports", label: "Reports & Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "admin-roles", label: "Admin Role Management", icon: Shield },
  { id: "logs", label: "Auto Logs", icon: Activity }
];

export function AdminSidebar({ activeSection, onSectionChange }: AdminSidebarProps) {
  return (
    <div className="flex h-full w-64 flex-col border-r bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-lg font-semibold text-primary">Mastermind Admin</h2>
      </div>
      
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-9 px-3",
                  activeSection === item.id 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
                onClick={() => onSectionChange(item.id)}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm">{item.label}</span>
              </Button>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
}