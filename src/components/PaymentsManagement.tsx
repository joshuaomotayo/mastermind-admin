import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, CreditCard, DollarSign, TrendingUp, AlertCircle, Download, RefreshCw } from "lucide-react";

const transactions = [
  {
    id: "TXN-001",
    customer: "Sarah Johnson",
    email: "sarah@email.com",
    amount: 24.99,
    method: "Credit Card",
    status: "Completed",
    orderNumber: "ORD-2024-001",
    date: "2024-01-20",
    products: ["Daily Reflection Journal"]
  },
  {
    id: "TXN-002",
    customer: "Mike Wilson",
    email: "mike@email.com",
    amount: 49.99,
    method: "PayPal",
    status: "Pending",
    orderNumber: "ORD-2024-002",
    date: "2024-01-19",
    products: ["Meditation Cushion Set"]
  },
  {
    id: "TXN-003",
    customer: "Emily Davis",
    email: "emily@email.com",
    amount: 16.99,
    method: "Credit Card",
    status: "Failed",
    orderNumber: "ORD-2024-003",
    date: "2024-01-18",
    products: ["Mindfulness Guide Book"]
  }
];

const paymentMethods = ["Credit Card", "PayPal", "Bank Transfer", "Apple Pay"];
const statuses = ["Completed", "Pending", "Failed", "Refunded"];

export function PaymentsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "default";
      case "Pending": return "outline";
      case "Failed": return "destructive";
      case "Refunded": return "secondary";
      default: return "secondary";
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case "Credit Card": return "default";
      case "PayPal": return "secondary";
      case "Bank Transfer": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Checkout / Payments</h1>
          <p className="text-muted-foreground">View transactions, orders, and payment methods</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Sync Payments
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$47,234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+89 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">Payment success rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Payments</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Monitor payment transactions and order details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by customer, email, or order..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedMethod} onValueChange={setSelectedMethod}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Payment Method" />
              </SelectTrigger>
              <SelectContent>
                {paymentMethods.map((method) => (
                  <SelectItem key={method} value={method}>{method}</SelectItem>
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

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Order</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-mono text-sm">{transaction.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{transaction.customer}</div>
                      <div className="text-sm text-muted-foreground">{transaction.email}</div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">${transaction.amount}</TableCell>
                  <TableCell>
                    <Badge variant={getMethodColor(transaction.method) as any}>
                      {transaction.method}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(transaction.status) as any}>
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{transaction.orderNumber}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      {transaction.status === "Completed" && (
                        <Button variant="ghost" size="sm">
                          Refund
                        </Button>
                      )}
                      {transaction.status === "Failed" && (
                        <Button variant="ghost" size="sm">
                          Retry
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Configure accepted payment methods</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-5 w-5" />
                  <span>Credit Cards</span>
                </div>
                <Badge variant="default">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-5 w-5" />
                  <span>PayPal</span>
                </div>
                <Badge variant="default">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-5 w-5" />
                  <span>Apple Pay</span>
                </div>
                <Badge variant="secondary">Inactive</Badge>
              </div>
              <Button variant="outline" className="w-full">
                Configure Payment Methods
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Analytics</CardTitle>
            <CardDescription>Revenue insights and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">Average Order Value</span>
                <span className="font-medium">$37.89</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Top Payment Method</span>
                <span className="font-medium">Credit Card (67%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Refund Rate</span>
                <span className="font-medium">2.1%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Monthly Recurring Revenue</span>
                <span className="font-medium">$12,450</span>
              </div>
              <Button variant="outline" className="w-full">
                View Detailed Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}