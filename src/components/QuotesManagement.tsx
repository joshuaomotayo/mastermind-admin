import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  Star, 
  Calendar, 
  Upload,
  Download,
  Flag,
  Heart,
  MessageCircle,
  Share,
  Edit,
  Trash2
} from "lucide-react";

const quotesData = [
  {
    id: "1",
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Motivation",
    addedBy: "Admin",
    addedDate: "2024-01-15",
    likes: 234,
    shares: 45,
    comments: 12,
    status: "Published",
    flagged: false
  },
  {
    id: "2",
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
    category: "Life",
    addedBy: "Sarah Johnson",
    addedDate: "2024-01-14",
    likes: 189,
    shares: 32,
    comments: 8,
    status: "Published",
    flagged: false
  },
  {
    id: "3",
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Dreams",
    addedBy: "Mike Chen",
    addedDate: "2024-01-13",
    likes: 156,
    shares: 28,
    comments: 15,
    status: "Pending Review",
    flagged: true
  },
  {
    id: "4",
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Success",
    addedBy: "Admin",
    addedDate: "2024-01-12",
    likes: 312,
    shares: 67,
    comments: 23,
    status: "Quote of the Day",
    flagged: false
  }
];

export function QuotesManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredQuotes = quotesData.filter(quote => {
    const matchesSearch = quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || quote.category === categoryFilter;
    const matchesStatus = !statusFilter || quote.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Published":
        return <Badge variant="default" className="bg-success text-success-foreground">Published</Badge>;
      case "Quote of the Day":
        return <Badge variant="default" className="bg-primary text-primary-foreground">Quote of the Day</Badge>;
      case "Pending Review":
        return <Badge variant="secondary">Pending Review</Badge>;
      case "Draft":
        return <Badge variant="outline">Draft</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Quotes Management</h1>
          <p className="text-muted-foreground">Manage quotes, set quote of the day, and review submissions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Upload className="mr-2 h-4 w-4" />
            Bulk Import
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Quote
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Quote</DialogTitle>
                <DialogDescription>
                  Add a new quote to the collection. It will be pending review by default.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="quote-text">Quote Text</Label>
                  <Textarea 
                    id="quote-text"
                    placeholder="Enter the quote text..."
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input 
                    id="author"
                    placeholder="Author name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="motivation">Motivation</SelectItem>
                      <SelectItem value="life">Life</SelectItem>
                      <SelectItem value="success">Success</SelectItem>
                      <SelectItem value="dreams">Dreams</SelectItem>
                      <SelectItem value="love">Love</SelectItem>
                      <SelectItem value="wisdom">Wisdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button className="flex-1">Add Quote</Button>
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Quotes</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,456</div>
            <p className="text-xs text-success">+23 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Flag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-warning">Needs attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Quote Views</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">11,923</div>
            <p className="text-xs text-success">+8% from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flagged Content</CardTitle>
            <Flag className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-destructive">Requires review</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filters & Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search quotes or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Motivation">Motivation</SelectItem>
                <SelectItem value="Life">Life</SelectItem>
                <SelectItem value="Success">Success</SelectItem>
                <SelectItem value="Dreams">Dreams</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Published">Published</SelectItem>
                <SelectItem value="Pending Review">Pending Review</SelectItem>
                <SelectItem value="Quote of the Day">Quote of the Day</SelectItem>
                <SelectItem value="Draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Quotes Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>All Quotes ({filteredQuotes.length})</span>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Auto-Generate Video
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Generate Video Slide</DialogTitle>
                  <DialogDescription>
                    Create a video with quote text animation and background media
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Select Quote</label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choose a quote to generate video" />
                      </SelectTrigger>
                      <SelectContent>
                        {quotesData.map((quote) => (
                          <SelectItem key={quote.id} value={quote.id}>
                            {quote.text.substring(0, 60)}...
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Background Media</label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Auto-match by tags or choose manually" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Auto-match by tags</SelectItem>
                        <SelectItem value="peaceful-nature">Peaceful Nature Video</SelectItem>
                        <SelectItem value="calm-water">Calm Water Background</SelectItem>
                        <SelectItem value="meditation-bg">Meditation Background</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Text Animation Style</label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choose animation style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="slide-in">Slide In from Left</SelectItem>
                        <SelectItem value="fade-in">Gentle Fade In</SelectItem>
                        <SelectItem value="typewriter">Typewriter Effect</SelectItem>
                        <SelectItem value="zoom-in">Zoom In Effect</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Preview Settings</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• Duration: 15 seconds</p>
                      <p>• Resolution: 1080x1080 (Square)</p>
                      <p>• Format: MP4</p>
                      <p>• Audio: Calm instrumental (optional)</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      Generate Video
                    </Button>
                    <Button variant="outline">
                      Preview
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Quote</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Engagement</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Added By</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredQuotes.map((quote) => (
                <TableRow key={quote.id} className={quote.flagged ? "bg-destructive/5" : ""}>
                  <TableCell className="max-w-md">
                    <div className="flex items-start gap-2">
                      {quote.flagged && <Flag className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />}
                      <p className="text-sm line-clamp-2">{quote.text}</p>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{quote.author}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{quote.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {quote.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share className="h-3 w-3" />
                        {quote.shares}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {quote.comments}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(quote.status)}</TableCell>
                  <TableCell>
                    <div>
                      <div className="text-sm">{quote.addedBy}</div>
                      <div className="text-xs text-muted-foreground">{quote.addedDate}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Quote
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Star className="mr-2 h-4 w-4" />
                          Set as Quote of Day
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Flag className="mr-2 h-4 w-4" />
                          {quote.flagged ? "Unflag" : "Flag Quote"}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete Quote
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}