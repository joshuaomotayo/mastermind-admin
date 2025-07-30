import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Image, 
  Video, 
  Upload, 
  Download,
  Trash2,
  Edit,
  Eye,
  Filter,
  Search,
  FolderPlus,
  Play,
  FileImage,
  FileVideo,
  HardDrive
} from "lucide-react";

const mediaFiles = [
  {
    id: "IMG-001",
    name: "meditation-background.jpg",
    type: "Image",
    size: "2.4 MB",
    dimensions: "1920x1080",
    uploaded: "2024-01-20",
    uploader: "Admin",
    category: "Backgrounds",
    tags: ["meditation", "peaceful", "nature"],
    url: "/api/placeholder/400/225"
  },
  {
    id: "VID-001", 
    name: "mindfulness-intro.mp4",
    type: "Video",
    size: "45.2 MB",
    dimensions: "1280x720",
    uploaded: "2024-01-19",
    uploader: "Content Team",
    category: "Educational",
    tags: ["mindfulness", "tutorial", "intro"],
    url: "/api/placeholder/400/225"
  },
  {
    id: "IMG-002",
    name: "quote-overlay.png",
    type: "Image", 
    size: "856 KB",
    dimensions: "800x800",
    uploaded: "2024-01-18",
    uploader: "Design Team",
    category: "Graphics",
    tags: ["quotes", "overlay", "design"],
    url: "/api/placeholder/400/225"
  },
  {
    id: "VID-002",
    name: "breathing-exercise.mp4",
    type: "Video",
    size: "28.7 MB", 
    dimensions: "1920x1080",
    uploaded: "2024-01-17",
    uploader: "Instructor",
    category: "Exercises",
    tags: ["breathing", "exercise", "guided"],
    url: "/api/placeholder/400/225"
  }
];

const categories = ["All", "Backgrounds", "Graphics", "Educational", "Exercises", "Promotional"];
const fileTypes = ["All", "Image", "Video", "Audio"];

export function MediaManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [showFolderDialog, setShowFolderDialog] = useState(false);
  const [uploadTags, setUploadTags] = useState("");
  const [folderName, setFolderName] = useState("");

  const getFileIcon = (type: string) => {
    switch (type) {
      case "Image": return FileImage;
      case "Video": return FileVideo;
      default: return Image;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Photos & Videos</h1>
          <p className="text-muted-foreground">Manage media files, images, and video content</p>
        </div>
        <div className="flex space-x-2">
          <Dialog open={showFolderDialog} onOpenChange={setShowFolderDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <FolderPlus className="mr-2 h-4 w-4" />
                New Folder
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Folder</DialogTitle>
                <DialogDescription>
                  Create a new folder to organize your media files
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Folder Name</label>
                  <Input
                    placeholder="Enter folder name..."
                    value={folderName}
                    onChange={(e) => setFolderName(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => {
                      console.log("Creating folder:", folderName);
                      setShowFolderDialog(false);
                      setFolderName("");
                    }}
                    className="flex-1"
                  >
                    Create Folder
                  </Button>
                  <Button variant="outline" onClick={() => setShowFolderDialog(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
            <DialogTrigger asChild>
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Upload Media
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Upload Media Files</DialogTitle>
                <DialogDescription>
                  Upload photos and videos with tags for easy organization
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Choose Files</label>
                  <div className="mt-1 border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Support: JPG, PNG, MP4, MOV (Max 100MB)
                    </p>
                    <input type="file" multiple accept="image/*,video/*" className="hidden" />
                    <Button variant="outline" className="mt-4">Choose Files</Button>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Tags</label>
                  <Input
                    placeholder="Enter tags separated by commas (e.g., Hope, Healing, Peace)"
                    value={uploadTags}
                    onChange={(e) => setUploadTags(e.target.value)}
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Tags help match media with quotes automatically
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="backgrounds">Backgrounds</SelectItem>
                      <SelectItem value="graphics">Graphics</SelectItem>
                      <SelectItem value="educational">Educational</SelectItem>
                      <SelectItem value="exercises">Exercises</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    onClick={() => {
                      console.log("Uploading files with tags:", uploadTags);
                      setShowUploadDialog(false);
                      setUploadTags("");
                    }}
                    className="flex-1"
                  >
                    Upload Files
                  </Button>
                  <Button variant="outline" onClick={() => setShowUploadDialog(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Files</CardTitle>
            <Image className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+89 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.7 GB</div>
            <p className="text-xs text-muted-foreground">67% of 40GB limit</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Images</CardTitle>
            <FileImage className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">923</div>
            <p className="text-xs text-muted-foreground">74% of total files</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Videos</CardTitle>
            <FileVideo className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">324</div>
            <p className="text-xs text-muted-foreground">26% of total files</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="gallery" className="w-full">
        <TabsList>
          <TabsTrigger value="gallery">Media Gallery</TabsTrigger>
          <TabsTrigger value="uploads">Recent Uploads</TabsTrigger>
          <TabsTrigger value="folders">Folders</TabsTrigger>
          <TabsTrigger value="settings">Storage Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="gallery" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Media Gallery</CardTitle>
              <CardDescription>Browse and manage your media files</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search by filename, tags, or uploader..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="File Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {fileTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {mediaFiles.map((file) => {
                  const FileIcon = getFileIcon(file.type);
                  return (
                    <Card key={file.id} className="group hover:shadow-md transition-shadow">
                      <div className="relative aspect-video bg-muted rounded-t-lg overflow-hidden">
                        {file.type === "Image" ? (
                          <img 
                            src={file.url} 
                            alt={file.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-muted">
                            <Play className="h-12 w-12 text-muted-foreground" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                          <Button variant="secondary" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="secondary" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="secondary" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">{file.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <FileIcon className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{file.size}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {file.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="uploads" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Uploads</CardTitle>
              <CardDescription>Recently uploaded media files</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>File</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Uploader</TableHead>
                    <TableHead>Uploaded</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mediaFiles.map((file) => {
                    const FileIcon = getFileIcon(file.type);
                    return (
                      <TableRow key={file.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <FileIcon className="h-8 w-8 text-muted-foreground" />
                            <div>
                              <div className="font-medium">{file.name}</div>
                              <div className="text-sm text-muted-foreground">{file.dimensions}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{file.type}</Badge>
                        </TableCell>
                        <TableCell>{file.size}</TableCell>
                        <TableCell>{file.category}</TableCell>
                        <TableCell>{file.uploader}</TableCell>
                        <TableCell>{file.uploaded}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="folders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Folder Structure</CardTitle>
              <CardDescription>Organize your media files into folders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {["Backgrounds", "Quote Graphics", "Video Content", "User Uploads", "Promotional Materials"].map((folder) => (
                <div key={folder} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FolderPlus className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">{folder}</h4>
                      <p className="text-sm text-muted-foreground">
                        {Math.floor(Math.random() * 200) + 50} files • {Math.floor(Math.random() * 10) + 1}.{Math.floor(Math.random() * 9)} GB
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Open</Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Storage Settings</CardTitle>
                <CardDescription>Manage storage limits and optimization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Storage Limit</span>
                  <span className="font-medium">40 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Used Space</span>
                  <span className="font-medium">24.7 GB (67%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Available Space</span>
                  <span className="font-medium">15.3 GB</span>
                </div>
                <Button variant="outline" className="w-full">
                  Upgrade Storage
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upload Settings</CardTitle>
                <CardDescription>Configure file upload preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Max File Size</span>
                  <span className="font-medium">100 MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Allowed Formats</span>
                  <span className="font-medium">JPG, PNG, MP4, MOV</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Auto Compression</span>
                  <span className="font-medium">Enabled</span>
                </div>
                <Button variant="outline" className="w-full">
                  Configure Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}