import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Send, 
  Users, 
  Calendar,
  TrendingUp,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Clock
} from "lucide-react";

const emailCampaigns = [
  {
    id: "CAMP-001",
    name: "Weekly Mindfulness Tips",
    subject: "Your Weekly Dose of Mindfulness",
    status: "Active",
    recipients: 2847,
    openRate: "34.2%",
    clickRate: "8.7%",
    lastSent: "2024-01-20",
    type: "Newsletter"
  },
  {
    id: "CAMP-002",
    name: "New User Welcome",
    subject: "Welcome to Your Mindfulness Journey",
    status: "Draft",
    recipients: 0,
    openRate: "-",
    clickRate: "-",
    lastSent: "-",
    type: "Automation"
  },
  {
    id: "CAMP-003",
    name: "Monthly Challenges",
    subject: "New Challenge: 30 Days of Gratitude",
    status: "Scheduled",
    recipients: 1234,
    openRate: "-",
    clickRate: "-",
    lastSent: "2024-01-25",
    type: "Campaign"
  }
];

const emailTemplates = [
  { id: "TEMP-001", name: "Welcome Email", type: "Onboarding", usage: 45 },
  { id: "TEMP-002", name: "Password Reset", type: "Transactional", usage: 12 },
  { id: "TEMP-003", name: "Newsletter", type: "Marketing", usage: 89 },
  { id: "TEMP-004", name: "Quote of the Day", type: "Content", usage: 156 }
];

export function EmailSystemManagement() {
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Email System</h1>
          <p className="text-muted-foreground">Manage email campaigns, templates, and automation</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Email Settings
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Emails Sent</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47,234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.4%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,847</div>
            <p className="text-xs text-muted-foreground">+189 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">2 scheduled</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="campaigns" className="w-full">
        <TabsList>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Campaigns</CardTitle>
              <CardDescription>Manage your email marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Open Rate</TableHead>
                    <TableHead>Click Rate</TableHead>
                    <TableHead>Last Sent</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emailCampaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{campaign.name}</div>
                          <div className="text-sm text-muted-foreground">{campaign.subject}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={
                          campaign.status === "Active" ? "default" :
                          campaign.status === "Scheduled" ? "secondary" : "outline"
                        }>
                          {campaign.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{campaign.recipients.toLocaleString()}</TableCell>
                      <TableCell>{campaign.openRate}</TableCell>
                      <TableCell>{campaign.clickRate}</TableCell>
                      <TableCell>{campaign.lastSent}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Email Templates</CardTitle>
                  <CardDescription>Pre-built email templates for different purposes</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      New Template
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Create Email Template</DialogTitle>
                      <DialogDescription>Design a new email template</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="template-name">Template Name</Label>
                        <Input id="template-name" placeholder="Enter template name" />
                      </div>
                      <div>
                        <Label htmlFor="template-type">Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select template type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="transactional">Transactional</SelectItem>
                            <SelectItem value="onboarding">Onboarding</SelectItem>
                            <SelectItem value="content">Content</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="template-subject">Subject Line</Label>
                        <Input id="template-subject" placeholder="Enter subject line" />
                      </div>
                      <div>
                        <Label htmlFor="template-content">Email Content</Label>
                        <Textarea 
                          id="template-content" 
                          placeholder="Enter email content..."
                          className="min-h-[200px]"
                        />
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1">Save Template</Button>
                        <Button variant="outline">Preview</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {emailTemplates.map((template) => (
                  <Card key={template.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <Badge variant="outline">{template.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Used {template.usage} times
                        </span>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Automation</CardTitle>
              <CardDescription>Set up automated email sequences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Welcome Series</h4>
                  <p className="text-sm text-muted-foreground">3-part welcome email sequence for new users</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="default">Active</Badge>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Abandoned Cart</h4>
                  <p className="text-sm text-muted-foreground">Remind users about items left in cart</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Inactive</Badge>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Re-engagement</h4>
                  <p className="text-sm text-muted-foreground">Win back inactive subscribers</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="default">Active</Badge>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Email campaign performance overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Delivery Rate</span>
                    <span className="font-medium">98.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Bounce Rate</span>
                    <span className="font-medium">1.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Unsubscribe Rate</span>
                    <span className="font-medium">0.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Spam Complaints</span>
                    <span className="font-medium">0.1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Performing Campaigns</CardTitle>
                <CardDescription>Best performing campaigns this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Weekly Mindfulness Tips", "New Challenge Announcement", "Monthly Newsletter"].map((campaign, index) => (
                    <div key={campaign} className="flex items-center justify-between">
                      <span className="text-sm">{index + 1}. {campaign}</span>
                      <Badge variant="outline">{(45 - index * 5).toFixed(1)}% open rate</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}