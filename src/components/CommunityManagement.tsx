import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Search, MessageSquare, Heart, Flag, User, Calendar, Filter } from "lucide-react";

const posts = [
  {
    id: 1,
    type: "Prayer",
    content: "Please pray for my family during this difficult time...",
    author: "Sarah M.",
    group: "Faith & Prayer",
    likes: 23,
    comments: 8,
    status: "Published",
    flagged: false,
    createdAt: "2024-01-20"
  },
  {
    id: 2,
    type: "Quote",
    content: "The only way to do great work is to love what you do - Steve Jobs",
    author: "Mike W.",
    group: "Daily Motivation",
    likes: 67,
    comments: 12,
    status: "Published",
    flagged: false,
    createdAt: "2024-01-19"
  },
  {
    id: 3,
    type: "Story",
    content: "Today I helped an elderly person cross the street and it reminded me...",
    author: "Emily D.",
    group: "Acts of Kindness",
    likes: 45,
    comments: 15,
    status: "Flagged",
    flagged: true,
    createdAt: "2024-01-18"
  }
];

const postTypes = ["Prayer", "Quote", "Story", "Greeting", "Challenge"];
const statuses = ["Published", "Flagged", "Hidden", "Under Review"];

export function CommunityManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "default";
      case "Flagged": return "destructive";
      case "Hidden": return "secondary";
      case "Under Review": return "outline";
      default: return "secondary";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Prayer": return "default";
      case "Quote": return "secondary";
      case "Story": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community & Posts</h1>
          <p className="text-muted-foreground">Manage community posts, comments, and interactions</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filters
          </Button>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            Create Announcement
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Posts Today</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+15% from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Interactions</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,542</div>
            <p className="text-xs text-muted-foreground">Likes & comments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flagged Content</CardTitle>
            <Flag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Requires review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">Posted this week</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Community Posts</CardTitle>
          <CardDescription>Moderate and manage community content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Post Type" />
              </SelectTrigger>
              <SelectContent>
                {postTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>{status}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className={post.flagged ? "border-destructive" : ""}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium">{post.author}</span>
                          <Badge variant={getTypeColor(post.type) as any} className="text-xs">
                            {post.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">in {post.group}</span>
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.createdAt}
                        </div>
                      </div>
                    </div>
                    <Badge variant={getStatusColor(post.status) as any}>
                      {post.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm mb-3 line-clamp-2">{post.content}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {post.comments}
                      </div>
                      {post.flagged && (
                        <div className="flex items-center text-destructive">
                          <Flag className="h-4 w-4 mr-1" />
                          Flagged
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {post.flagged && (
                        <>
                          <Button variant="outline" size="sm">
                            Approve
                          </Button>
                          <Button variant="destructive" size="sm">
                            Remove
                          </Button>
                        </>
                      )}
                      {!post.flagged && (
                        <Button variant="ghost" size="sm">
                          Hide
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6">
            <Button variant="outline" className="w-full">
              Load More Posts
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Content Moderation Tools</CardTitle>
          <CardDescription>Automated content filtering and keyword management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Blocked Keywords</h4>
              <Textarea placeholder="Enter blocked keywords, separated by commas..." />
            </div>
            <div className="flex justify-end">
              <Button>Update Keywords</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}