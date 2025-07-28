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
  BarChart, 
  MessageSquare, 
  Users, 
  TrendingUp,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Play,
  Pause,
  PieChart
} from "lucide-react";

const polls = [
  {
    id: "POLL-001",
    question: "What's your favorite time for meditation?",
    type: "Multiple Choice",
    status: "Active",
    responses: 1247,
    created: "2024-01-20",
    endDate: "2024-02-20",
    creator: "Admin",
    options: ["Morning", "Afternoon", "Evening", "Night"],
    results: [45, 20, 25, 10]
  },
  {
    id: "POLL-002", 
    question: "Rate your stress level this week",
    type: "Rating Scale",
    status: "Draft",
    responses: 0,
    created: "2024-01-19",
    endDate: "2024-02-19",
    creator: "Wellness Team",
    options: ["1", "2", "3", "4", "5"],
    results: [0, 0, 0, 0, 0]
  },
  {
    id: "POLL-003",
    question: "Which mindfulness topic interests you most?",
    type: "Multiple Choice",
    status: "Completed",
    responses: 892,
    created: "2024-01-15",
    endDate: "2024-01-25",
    creator: "Content Team",
    options: ["Breathing", "Gratitude", "Focus", "Sleep"],
    results: [312, 245, 189, 146]
  }
];

const threads = [
  {
    id: "THREAD-001",
    title: "Share Your Morning Routine",
    author: "sarah@email.com",
    replies: 23,
    likes: 45,
    created: "2024-01-20 09:30",
    category: "Routines",
    status: "Active",
    lastActivity: "2 hours ago"
  },
  {
    id: "THREAD-002",
    title: "Best Apps for Meditation?",
    author: "mike@email.com", 
    replies: 18,
    likes: 32,
    created: "2024-01-19 14:15",
    category: "Resources",
    status: "Active",
    lastActivity: "5 hours ago"
  },
  {
    id: "THREAD-003",
    title: "Struggling with Consistency",
    author: "emily@email.com",
    replies: 15,
    likes: 28,
    created: "2024-01-18 16:45",
    category: "Support",
    status: "Pinned",
    lastActivity: "1 day ago"
  }
];

const pollTypes = ["Multiple Choice", "Rating Scale", "Yes/No", "Open Text"];
const threadCategories = ["General", "Routines", "Resources", "Support", "Success Stories"];

export function PollsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "default";
      case "Draft": return "outline";
      case "Completed": return "secondary";
      case "Pinned": return "default";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Polls & Threads</h1>
          <p className="text-muted-foreground">Manage community polls, surveys, and discussion threads</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <BarChart className="mr-2 h-4 w-4" />
            Analytics
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Poll
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Polls</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Responses</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,247</div>
            <p className="text-xs text-muted-foreground">+1,234 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Discussion Threads</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">89 active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67.3%</div>
            <p className="text-xs text-muted-foreground">+5.2% improvement</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="polls" className="w-full">
        <TabsList>
          <TabsTrigger value="polls">Polls & Surveys</TabsTrigger>
          <TabsTrigger value="threads">Discussion Threads</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="moderation">Moderation</TabsTrigger>
        </TabsList>

        <TabsContent value="polls" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Community Polls</CardTitle>
                  <CardDescription>Create and manage community polls and surveys</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      New Poll
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Create New Poll</DialogTitle>
                      <DialogDescription>Design a poll or survey for your community</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="poll-question">Question</Label>
                        <Input id="poll-question" placeholder="Enter your poll question" />
                      </div>
                      <div>
                        <Label htmlFor="poll-type">Poll Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select poll type" />
                          </SelectTrigger>
                          <SelectContent>
                            {pollTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="poll-options">Options (one per line)</Label>
                        <Textarea 
                          id="poll-options" 
                          placeholder="Option 1&#10;Option 2&#10;Option 3"
                          className="min-h-[100px]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="poll-start">Start Date</Label>
                          <Input id="poll-start" type="datetime-local" />
                        </div>
                        <div>
                          <Label htmlFor="poll-end">End Date</Label>
                          <Input id="poll-end" type="datetime-local" />
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1">Create Poll</Button>
                        <Button variant="outline">Save as Draft</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search polls by question or creator..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Poll Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {pollTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Question</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Responses</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {polls.map((poll) => (
                    <TableRow key={poll.id}>
                      <TableCell className="font-medium max-w-xs">
                        <div className="truncate">{poll.question}</div>
                        <div className="text-sm text-muted-foreground">by {poll.creator}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{poll.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(poll.status) as any}>
                          {poll.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{poll.responses.toLocaleString()}</TableCell>
                      <TableCell>{poll.created}</TableCell>
                      <TableCell>{poll.endDate}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <PieChart className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          {poll.status === "Active" ? (
                            <Button variant="ghost" size="sm">
                              <Pause className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button variant="ghost" size="sm">
                              <Play className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="threads" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Discussion Threads</CardTitle>
              <CardDescription>Manage community discussions and conversations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search threads by title or author..."
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {threadCategories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Thread</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Replies</TableHead>
                    <TableHead>Likes</TableHead>
                    <TableHead>Last Activity</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {threads.map((thread) => (
                    <TableRow key={thread.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{thread.title}</div>
                          <div className="text-sm text-muted-foreground">{thread.created}</div>
                        </div>
                      </TableCell>
                      <TableCell>{thread.author}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{thread.category}</Badge>
                      </TableCell>
                      <TableCell>{thread.replies}</TableCell>
                      <TableCell>{thread.likes}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {thread.lastActivity}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
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

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Poll Performance</CardTitle>
                <CardDescription>Poll engagement and response rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Average Response Rate</span>
                    <span className="font-medium">67.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Most Popular Type</span>
                    <span className="font-medium">Multiple Choice</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Completion Rate</span>
                    <span className="font-medium">89.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Peak Response Time</span>
                    <span className="font-medium">7-9 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thread Analytics</CardTitle>
                <CardDescription>Discussion engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Average Replies</span>
                    <span className="font-medium">18.7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Most Active Category</span>
                    <span className="font-medium">Support</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Daily New Threads</span>
                    <span className="font-medium">12.3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Engagement Score</span>
                    <span className="font-medium">8.4/10</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="moderation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Moderation</CardTitle>
              <CardDescription>Manage reported content and moderation settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Auto-Moderation</h4>
                  <p className="text-sm text-muted-foreground">Automatically flag inappropriate content</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="default">Active</Badge>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Reported Content</h4>
                  <p className="text-sm text-muted-foreground">3 items pending review</p>
                </div>
                <Button variant="outline" size="sm">Review</Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Blocked Keywords</h4>
                  <p className="text-sm text-muted-foreground">Manage prohibited words and phrases</p>
                </div>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}