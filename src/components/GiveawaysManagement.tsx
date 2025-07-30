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
import { Plus, Search, Edit, Trash2, Gift, Users, Calendar, DollarSign } from "lucide-react";

const giveaways = [
  {
    id: 1,
    title: "Daily Inspiration Book Bundle",
    description: "Win a collection of 5 inspirational books",
    status: "Active",
    entries: 234,
    endDate: "2024-02-15",
    prize: "Book Bundle ($75 value)",
    type: "Regular"
  },
  {
    id: 2,
    title: "Mindfulness Journal Set",
    description: "Premium journals for daily reflection",
    status: "Ending Soon",
    entries: 567,
    endDate: "2024-01-28",
    prize: "Journal Set ($45 value)",
    type: "Featured"
  },
  {
    id: 3,
    title: "Meditation Course Access",
    description: "1-year access to premium meditation course",
    status: "Draft",
    entries: 0,
    endDate: "2024-03-01",
    prize: "Course Access ($120 value)",
    type: "Sponsored"
  }
];

const statuses = ["Active", "Ending Soon", "Ended", "Draft"];
const types = ["Regular", "Featured", "Sponsored"];

export function GiveawaysManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "default";
      case "Ending Soon": return "destructive";
      case "Ended": return "secondary";
      case "Draft": return "outline";
      default: return "secondary";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Featured": return "default";
      case "Sponsored": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Giveaways Management</h1>
          <p className="text-muted-foreground">Create and manage giveaways and campaigns</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Giveaway
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Giveaway</DialogTitle>
              <DialogDescription>Set up a new giveaway campaign</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Giveaway Title</Label>
                <Input id="title" placeholder="Enter giveaway title" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe the giveaway..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {types.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <Input id="endDate" type="date" />
                </div>
              </div>
              <div>
                <Label htmlFor="prize">Prize Description</Label>
                <Input id="prize" placeholder="e.g., Book Bundle ($75 value)" />
              </div>
              <div>
                <Label htmlFor="rules">Entry Rules</Label>
                <Textarea id="rules" placeholder="How can users enter this giveaway?" />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Save Draft</Button>
                <Button>Launch Giveaway</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Giveaways</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2 ending soon</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Entries</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,347</div>
            <p className="text-xs text-muted-foreground">+234 today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Giveaways launched</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Prize Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,240</div>
            <p className="text-xs text-muted-foreground">Total active prizes</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Giveaways</CardTitle>
          <CardDescription>Manage your giveaway campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search giveaways..."
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
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Entries</TableHead>
                <TableHead>Prize</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {giveaways.map((giveaway) => (
                <TableRow key={giveaway.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{giveaway.title}</div>
                      <div className="text-sm text-muted-foreground">{giveaway.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getTypeColor(giveaway.type) as any}>
                      {giveaway.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(giveaway.status) as any}>
                      {giveaway.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{giveaway.entries.toLocaleString()}</TableCell>
                  <TableCell>{giveaway.prize}</TableCell>
                  <TableCell>{giveaway.endDate}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Upload Proof Files</DialogTitle>
                            <DialogDescription>
                              Upload proof of fund usage and donation evidence for {giveaway.title}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <label className="text-sm font-medium">Spreadsheet Proof (CSV/XLS)</label>
                              <div className="mt-1 border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                                <div className="text-muted-foreground">
                                  <p className="text-sm">Upload fund usage spreadsheet</p>
                                  <p className="text-xs">Supported: .csv, .xlsx, .xls</p>
                                </div>
                                <Button variant="outline" size="sm" className="mt-2">
                                  Choose Spreadsheet
                                </Button>
                              </div>
                            </div>
                            
                            <div>
                              <label className="text-sm font-medium">Photo/Video Proof</label>
                              <div className="mt-1 border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                                <div className="text-muted-foreground">
                                  <p className="text-sm">Upload donation photos or videos</p>
                                  <p className="text-xs">Multiple files supported</p>
                                </div>
                                <Button variant="outline" size="sm" className="mt-2">
                                  Choose Files
                                </Button>
                              </div>
                            </div>
                            
                            <div>
                              <label className="text-sm font-medium">Description</label>
                              <Textarea 
                                placeholder="Describe how the funds were used..."
                                className="mt-1"
                              />
                            </div>
                            
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h4 className="font-medium text-blue-900 mb-2">Public Display</h4>
                              <p className="text-sm text-blue-700">
                                These files will be displayed publicly to show transparency in fund usage.
                                Make sure all sensitive information is removed.
                              </p>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button className="flex-1">
                                Upload Proof Files
                              </Button>
                              <Button variant="outline">
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
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