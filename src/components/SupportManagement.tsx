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
  HelpCircle, 
  MessageSquare, 
  Users, 
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Trash2,
  Edit,
  Send
} from "lucide-react";

const supportTickets = [
  {
    id: "TICK-001",
    title: "Unable to reset password",
    user: "sarah@email.com", 
    priority: "High",
    status: "Open",
    category: "Account",
    created: "2024-01-20 14:30",
    lastReply: "2024-01-20 15:45",
    agent: "John Doe"
  },
  {
    id: "TICK-002",
    title: "Quotes not loading properly",
    user: "mike@email.com",
    priority: "Medium", 
    status: "In Progress",
    category: "Technical",
    created: "2024-01-20 12:15",
    lastReply: "2024-01-20 14:20",
    agent: "Jane Smith"
  },
  {
    id: "TICK-003",
    title: "Feature request: Dark mode",
    user: "emily@email.com",
    priority: "Low",
    status: "Resolved",
    category: "Feature Request",
    created: "2024-01-19 16:45",
    lastReply: "2024-01-20 09:30",
    agent: "Bob Wilson"
  }
];

const faqItems = [
  {
    id: "FAQ-001",
    question: "How do I reset my password?",
    answer: "Click on 'Forgot Password' on the login page and follow the instructions.",
    category: "Account",
    views: 234,
    helpful: 89
  },
  {
    id: "FAQ-002", 
    question: "How do I customize my daily quotes?",
    answer: "Go to Settings > Preferences and select your preferred categories.",
    category: "Features",
    views: 156,
    helpful: 67
  },
  {
    id: "FAQ-003",
    question: "Can I share quotes with friends?",
    answer: "Yes, click the share button on any quote to share via social media or email.",
    category: "Features", 
    views: 98,
    helpful: 45
  }
];

const priorities = ["Low", "Medium", "High", "Urgent"];
const statuses = ["Open", "In Progress", "Waiting", "Resolved", "Closed"];
const categories = ["Account", "Technical", "Billing", "Feature Request", "General"];

export function SupportManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Urgent": return "destructive";
      case "High": return "destructive"; 
      case "Medium": return "default";
      case "Low": return "secondary";
      default: return "outline";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "destructive";
      case "In Progress": return "default";
      case "Waiting": return "outline";
      case "Resolved": return "default";
      case "Closed": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Support & Help Center</h1>
          <p className="text-muted-foreground">Manage support tickets, FAQs, and user assistance</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            New Article
          </Button>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            New Ticket
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">-2 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4h</div>
            <p className="text-xs text-muted-foreground">-0.3h improvement</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">+1.5% this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Satisfaction</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7/5</div>
            <p className="text-xs text-muted-foreground">Customer rating</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tickets" className="w-full">
        <TabsList>
          <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
          <TabsTrigger value="faq">FAQ Management</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="tickets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Support Tickets</CardTitle>
              <CardDescription>Manage and respond to user support requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search tickets by title, user, or ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    {priorities.map((priority) => (
                      <SelectItem key={priority} value={priority}>{priority}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>{status}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Agent</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {supportTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-mono text-sm">{ticket.id}</TableCell>
                      <TableCell className="font-medium">{ticket.title}</TableCell>
                      <TableCell>{ticket.user}</TableCell>
                      <TableCell>
                        <Badge variant={getPriorityColor(ticket.priority) as any}>
                          {ticket.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(ticket.status) as any}>
                          {ticket.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{ticket.agent}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{ticket.created}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Reply
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

        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>FAQ Management</CardTitle>
                  <CardDescription>Manage frequently asked questions and answers</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add FAQ
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Add New FAQ</DialogTitle>
                      <DialogDescription>Create a new frequently asked question</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="faq-question">Question</Label>
                        <Input id="faq-question" placeholder="Enter the question" />
                      </div>
                      <div>
                        <Label htmlFor="faq-category">Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>{category}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="faq-answer">Answer</Label>
                        <Textarea 
                          id="faq-answer" 
                          placeholder="Enter the answer..."
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button className="w-full">Add FAQ</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faqItems.map((faq) => (
                  <div key={faq.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium">{faq.question}</h4>
                          <Badge variant="outline">{faq.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{faq.answer}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{faq.views} views</span>
                          <span>{faq.helpful} found helpful</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>Comprehensive documentation and guides</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Getting Started Guide</h4>
                  <p className="text-sm text-muted-foreground">Complete guide for new users</p>
                </div>
                <div className="flex space-x-2">
                  <Badge variant="outline">156 views</Badge>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Feature Documentation</h4>
                  <p className="text-sm text-muted-foreground">Detailed feature explanations</p>
                </div>
                <div className="flex space-x-2">
                  <Badge variant="outline">89 views</Badge>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Troubleshooting</h4>
                  <p className="text-sm text-muted-foreground">Common issues and solutions</p>
                </div>
                <div className="flex space-x-2">
                  <Badge variant="outline">234 views</Badge>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Support Metrics</CardTitle>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">First Response Time</span>
                    <span className="font-medium">1.2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Resolution Time</span>
                    <span className="font-medium">8.4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Escalation Rate</span>
                    <span className="font-medium">5.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Self-Service Rate</span>
                    <span className="font-medium">67%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Topics</CardTitle>
                <CardDescription>Most common support categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Account Issues", "Technical Problems", "Feature Requests", "Billing Questions"].map((topic, index) => (
                    <div key={topic} className="flex items-center justify-between">
                      <span className="text-sm">{index + 1}. {topic}</span>
                      <Badge variant="outline">{Math.floor(Math.random() * 50) + 10} tickets</Badge>
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