import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Mastermind Admin Suite
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comprehensive admin panel for managing users, quotes, community features, and business operations
          </p>
          <Link to="/admin">
            <Button size="lg" className="text-lg px-8 py-6">
              Access Admin Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Comprehensive user administration with roles, permissions, and activity monitoring
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Content Control</CardTitle>
              <CardDescription>
                Manage quotes, blogs, giveaways, and community content with moderation tools
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Analytics & Reports</CardTitle>
              <CardDescription>
                Detailed insights into user engagement, content performance, and business metrics
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>21 Complete Admin Modules</CardTitle>
              <CardDescription>
                From dashboard overview to payment management, everything you need to run your platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div>• Dashboard Overview</div>
                <div>• User Management</div>
                <div>• Quotes Management</div>
                <div>• Blog/Explore</div>
                <div>• Giveaways</div>
                <div>• Groups Management</div>
                <div>• Community & Posts</div>
                <div>• Challenges & Events</div>
                <div>• Shop Management</div>
                <div>• Payments</div>
                <div>• Search Logs</div>
                <div>• And 10 more modules...</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
