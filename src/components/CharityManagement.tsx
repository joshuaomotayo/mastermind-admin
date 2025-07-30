import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Search, Edit, Trash2, Heart, Users, DollarSign, Upload, FileText, Image, Video } from "lucide-react";

const charityPosts = [
  {
    id: 1,
    title: "Water Wells for Rural Communities",
    description: "Building clean water access in remote villages",
    status: "Active",
    amountRaised: 15420,
    target: 25000,
    donors: 234,
    dateCreated: "2024-01-15",
    category: "Water & Sanitation",
    hasProof: true
  },
  {
    id: 2,
    title: "School Books for Children",
    description: "Providing educational materials to underprivileged kids",
    status: "Completed",
    amountRaised: 8750,
    target: 8500,
    donors: 156,
    dateCreated: "2024-01-08",
    category: "Education",
    hasProof: true
  },
  {
    id: 3,
    title: "Emergency Food Relief",
    description: "Supporting families affected by natural disasters",
    status: "Draft",
    amountRaised: 0,
    target: 12000,
    donors: 0,
    dateCreated: "2024-01-25",
    category: "Emergency Relief",
    hasProof: false
  }
];

const statuses = ["Active", "Completed", "Draft", "Paused"];
const categories = ["Education", "Healthcare", "Water & Sanitation", "Emergency Relief", "Community Development"];

export function CharityManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "default";
      case "Completed": return "secondary";
      case "Draft": return "outline";
      case "Paused": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Charity & Donations</h1>
          <p className="text-muted-foreground">Create and manage charity posts with proof uploads</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Charity Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Charity Post</DialogTitle>
              <DialogDescription>Create a new charity campaign or donation request</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Charity Title</Label>
                <Input id="title" placeholder="Enter charity campaign title" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe the charity campaign..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Category</Label>
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
                  <Label htmlFor="target">Target Amount ($)</Label>
                  <Input id="target" type="number" placeholder="25000" />
                </div>
              </div>
              <div>
                <Label htmlFor="location">Location/Beneficiaries</Label>
                <Input id="location" placeholder="e.g., Rural villages in Kenya" />
              </div>
              <div>
                <Label htmlFor="details">Detailed Plan</Label>
                <Textarea id="details" placeholder="Explain how the funds will be used..." />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Save Draft</Button>
                <Button>Publish Post</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 ending soon</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Raised</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$47,830</div>
            <p className="text-xs text-muted-foreground">+$2,340 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+67 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Charity Posts</CardTitle>
          <CardDescription>Manage your charity campaigns and donation posts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search charity posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
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
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Donors</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Proof</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {charityPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{post.title}</div>
                      <div className="text-sm text-muted-foreground">{post.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{post.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(post.status) as any}>
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="text-sm font-medium">
                        ${post.amountRaised.toLocaleString()} / ${post.target.toLocaleString()}
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 mt-1">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${Math.min((post.amountRaised / post.target) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{post.donors.toLocaleString()}</TableCell>
                  <TableCell>{post.dateCreated}</TableCell>
                  <TableCell>
                    {post.hasProof ? (
                      <Badge variant="default">Uploaded</Badge>
                    ) : (
                      <Badge variant="outline">Pending</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" title="Upload Proof">
                            <Upload className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Upload Proof Files</DialogTitle>
                            <DialogDescription>
                              Upload proof of fund usage and donation evidence for {post.title}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <label className="text-sm font-medium">Spreadsheet/Document Proof</label>
                              <div className="mt-1 border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                                <div className="text-muted-foreground">
                                  <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground/50" />
                                  <p className="text-sm">Upload spreadsheets, PDFs, or documents</p>
                                  <p className="text-xs">Supported: .csv, .xlsx, .xls, .pdf, .doc, .docx</p>
                                </div>
                                <Button variant="outline" size="sm" className="mt-2">
                                  Choose Documents
                                </Button>
                              </div>
                            </div>
                            
                            <div>
                              <label className="text-sm font-medium">Photo Proof</label>
                              <div className="mt-1 border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                                <div className="text-muted-foreground">
                                  <Image className="h-8 w-8 mx-auto mb-2 text-muted-foreground/50" />
                                  <p className="text-sm">Upload donation photos and images</p>
                                  <p className="text-xs">Supported: .jpg, .jpeg, .png, .gif</p>
                                </div>
                                <Button variant="outline" size="sm" className="mt-2">
                                  Choose Photos
                                </Button>
                              </div>
                            </div>

                            <div>
                              <label className="text-sm font-medium">Video Proof</label>
                              <div className="mt-1 border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                                <div className="text-muted-foreground">
                                  <Video className="h-8 w-8 mx-auto mb-2 text-muted-foreground/50" />
                                  <p className="text-sm">Upload video documentation</p>
                                  <p className="text-xs">Supported: .mp4, .mov, .avi, .mkv</p>
                                </div>
                                <Button variant="outline" size="sm" className="mt-2">
                                  Choose Videos
                                </Button>
                              </div>
                            </div>
                            
                            <div>
                              <label className="text-sm font-medium">Description & Notes</label>
                              <Textarea 
                                placeholder="Describe how the funds were used, impact achieved, beneficiaries helped..."
                                className="mt-1"
                              />
                            </div>
                            
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h4 className="font-medium text-blue-900 mb-2">Public Transparency</h4>
                              <p className="text-sm text-blue-700">
                                These files will be displayed publicly to show transparency in fund usage and impact.
                                Make sure to remove any sensitive personal information before uploading.
                              </p>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button className="flex-1">
                                Upload All Files
                              </Button>
                              <Button variant="outline">
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
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
    </div>
  );
}