import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Settings, Globe, Shield, Bell, Mail, Palette, Database, Users } from "lucide-react";

export function SettingsManagement() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [userVerification, setUserVerification] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [commentModeration, setCommentModeration] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Configure site-wide settings and preferences</p>
        </div>
        <Button>
          <Settings className="mr-2 h-4 w-4" />
          Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  Site Information
                </CardTitle>
                <CardDescription>Basic site configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input id="siteName" defaultValue="Daily Inspiration Hub" />
                </div>
                <div>
                  <Label htmlFor="siteDescription">Site Description</Label>
                  <Textarea id="siteDescription" defaultValue="Your daily source of inspiration and motivation" />
                </div>
                <div>
                  <Label htmlFor="siteUrl">Site URL</Label>
                  <Input id="siteUrl" defaultValue="https://dailyinspiration.com" />
                </div>
                <div>
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input id="contactEmail" defaultValue="contact@dailyinspiration.com" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regional Settings</CardTitle>
                <CardDescription>Timezone and localization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">Eastern Time</SelectItem>
                      <SelectItem value="pst">Pacific Time</SelectItem>
                      <SelectItem value="cst">Central Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Date Format</Label>
                  <Select defaultValue="mdy">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="appearance">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="mr-2 h-5 w-5" />
                  Branding
                </CardTitle>
                <CardDescription>Customize your site's appearance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex space-x-2">
                    <Input id="primaryColor" defaultValue="#3B82F6" type="color" className="w-20" />
                    <Input defaultValue="#3B82F6" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="secondaryColor">Secondary Color</Label>
                  <div className="flex space-x-2">
                    <Input id="secondaryColor" defaultValue="#6B7280" type="color" className="w-20" />
                    <Input defaultValue="#6B7280" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="logo">Site Logo</Label>
                  <Input id="logo" type="file" accept="image/*" />
                </div>
                <div>
                  <Label htmlFor="favicon">Favicon</Label>
                  <Input id="favicon" type="file" accept="image/*" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Layout Settings</CardTitle>
                <CardDescription>Control site layout and visibility</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Allow users to toggle dark mode</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Sidebar Navigation</Label>
                    <p className="text-sm text-muted-foreground">Show sidebar on all pages</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Footer</Label>
                    <p className="text-sm text-muted-foreground">Display footer on all pages</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2 h-5 w-5" />
                  Notification Settings
                </CardTitle>
                <CardDescription>Configure when to send notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Send email notifications to users</p>
                  </div>
                  <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Daily Quote Emails</Label>
                    <p className="text-sm text-muted-foreground">Send daily quote to subscribers</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Weekly Digest</Label>
                    <p className="text-sm text-muted-foreground">Send weekly summary emails</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Event Reminders</Label>
                    <p className="text-sm text-muted-foreground">Notify users about upcoming events</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Configuration
                </CardTitle>
                <CardDescription>SMTP settings for outgoing emails</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="smtpHost">SMTP Host</Label>
                  <Input id="smtpHost" placeholder="smtp.gmail.com" />
                </div>
                <div>
                  <Label htmlFor="smtpPort">SMTP Port</Label>
                  <Input id="smtpPort" placeholder="587" />
                </div>
                <div>
                  <Label htmlFor="smtpUsername">Username</Label>
                  <Input id="smtpUsername" placeholder="your-email@domain.com" />
                </div>
                <div>
                  <Label htmlFor="smtpPassword">Password</Label>
                  <Input id="smtpPassword" type="password" placeholder="••••••••" />
                </div>
                <Button variant="outline" className="w-full">
                  Test Email Configuration
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Security Settings
                </CardTitle>
                <CardDescription>Protect your site and users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>User Email Verification</Label>
                    <p className="text-sm text-muted-foreground">Require email verification for new users</p>
                  </div>
                  <Switch checked={userVerification} onCheckedChange={setUserVerification} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Enable 2FA for admin accounts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Comment Moderation</Label>
                    <p className="text-sm text-muted-foreground">Require approval for comments</p>
                  </div>
                  <Switch checked={commentModeration} onCheckedChange={setCommentModeration} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Spam Protection</Label>
                    <p className="text-sm text-muted-foreground">Enable automated spam detection</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  User Permissions
                </CardTitle>
                <CardDescription>Default user roles and permissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Default User Role</Label>
                  <Select defaultValue="user">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="contributor">Contributor</SelectItem>
                      <SelectItem value="moderator">Moderator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Role Permissions</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Users can create groups</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Users can post quotes</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Users can comment</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="features">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Feature Toggles</CardTitle>
                <CardDescription>Enable or disable site features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">Feature</Badge>
                    <span>User Groups</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">Feature</Badge>
                    <span>Blog/Explore</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">Feature</Badge>
                    <span>Shop</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">Feature</Badge>
                    <span>Giveaways</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">Feature</Badge>
                    <span>Challenges</span>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Homepage Layout</CardTitle>
                <CardDescription>Configure homepage sections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Quote of the Day</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span>Featured Groups</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span>Recent Blog Posts</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span>Active Giveaways</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span>Community Feed</span>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="advanced">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5" />
                  System Maintenance
                </CardTitle>
                <CardDescription>Advanced system controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">Hide site from public access</p>
                  </div>
                  <Switch checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    Clear Cache
                  </Button>
                  <Button variant="outline" className="w-full">
                    Export Database
                  </Button>
                  <Button variant="destructive" className="w-full">
                    Reset All Settings
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API & Integrations</CardTitle>
                <CardDescription>Third-party service configurations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="googleAnalytics">Google Analytics ID</Label>
                  <Input id="googleAnalytics" placeholder="GA-XXXXXXXXX-X" />
                </div>
                <div>
                  <Label htmlFor="facebookPixel">Facebook Pixel ID</Label>
                  <Input id="facebookPixel" placeholder="Facebook Pixel ID" />
                </div>
                <div>
                  <Label htmlFor="stripeKey">Stripe Publishable Key</Label>
                  <Input id="stripeKey" placeholder="pk_test_..." />
                </div>
                <div>
                  <Label htmlFor="mailchimpKey">Mailchimp API Key</Label>
                  <Input id="mailchimpKey" placeholder="Mailchimp API Key" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}