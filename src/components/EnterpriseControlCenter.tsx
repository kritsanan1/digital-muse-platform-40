
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Users, Shield, Globe, BarChart3, Settings, Crown,
  Server, Database, Activity, AlertTriangle, CheckCircle,
  Clock, Zap, FileText, Phone, Headphones, Star
} from "lucide-react";

export const EnterpriseControlCenter = () => {
  const [activeTeams, setActiveTeams] = useState(12);
  const [totalUsers, setTotalUsers] = useState(247);
  const [systemHealth, setSystemHealth] = useState(99.7);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-playfair font-bold gradient-text mb-4">
          Enterprise Control Center
        </h2>
        <p className="text-foreground/70 max-w-3xl mx-auto">
          Comprehensive enterprise management, scaling infrastructure, and professional services 
          for large-scale creative operations.
        </p>
      </div>

      {/* Enterprise Status Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="glass-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground/60">Active Teams</p>
              <p className="text-2xl font-bold text-blue-400">{activeTeams}</p>
            </div>
            <Users className="w-8 h-8 text-blue-400" />
          </div>
        </Card>

        <Card className="glass-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground/60">Total Users</p>
              <p className="text-2xl font-bold text-green-400">{totalUsers}</p>
            </div>
            <Globe className="w-8 h-8 text-green-400" />
          </div>
        </Card>

        <Card className="glass-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground/60">System Health</p>
              <p className="text-2xl font-bold text-gold-400">{systemHealth}%</p>
            </div>
            <Activity className="w-8 h-8 text-gold-400" />
          </div>
        </Card>

        <Card className="glass-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground/60">SLA Status</p>
              <p className="text-2xl font-bold text-green-400">99.9%</p>
            </div>
            <Shield className="w-8 h-8 text-green-400" />
          </div>
        </Card>
      </div>

      <Tabs defaultValue="teams" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="teams">Team Management</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="services">Professional Services</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="support">Support Tiers</TabsTrigger>
        </TabsList>

        <TabsContent value="teams" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Team Management */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Team Management</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Admin Users</span>
                  <Badge className="bg-red-500/20 text-red-400">8</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Team Leaders</span>
                  <Badge className="bg-blue-500/20 text-blue-400">15</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Creative Users</span>
                  <Badge className="bg-green-500/20 text-green-400">189</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">View-Only</span>
                  <Badge className="bg-purple-500/20 text-purple-400">35</Badge>
                </div>
              </div>
              <Button className="w-full mt-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                Manage Permissions
              </Button>
            </Card>

            {/* Custom Branding */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Custom Branding</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">White-Label UI</span>
                  <Badge className="bg-green-500/20 text-green-400">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Custom Domain</span>
                  <Badge className="bg-green-500/20 text-green-400">Configured</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Brand Guidelines</span>
                  <Badge className="bg-blue-500/20 text-blue-400">Enforced</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Custom Models</span>
                  <Badge className="bg-gold-500/20 text-gold-400">3 Active</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 border-gold-500/30">
                Configure Branding
              </Button>
            </Card>
          </div>

          {/* Advanced Analytics */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Advanced Analytics & Reporting</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">2.4M</p>
                <p className="text-sm text-foreground/60">Images Generated</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">94.2%</p>
                <p className="text-sm text-foreground/60">Team Productivity</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold-400">$47K</p>
                <p className="text-sm text-foreground/60">Cost Savings</p>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <Button variant="outline" className="border-gold-500/30">
                <BarChart3 className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
              <Button variant="outline" className="border-gold-500/30">
                <FileText className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="infrastructure" className="space-y-6">
          {/* Scaling Infrastructure */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Auto-Scaling Architecture</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>CPU Usage</span>
                    <span className="text-green-400">23%</span>
                  </div>
                  <Progress value={23} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Memory Usage</span>
                    <span className="text-blue-400">67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Active Instances</span>
                    <span className="text-gold-400">12/50</span>
                  </div>
                  <Progress value={24} className="h-2" />
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Global CDN Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">North America</span>
                  <Badge className="bg-green-500/20 text-green-400">Optimal</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Europe</span>
                  <Badge className="bg-green-500/20 text-green-400">Optimal</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Asia Pacific</span>
                  <Badge className="bg-green-500/20 text-green-400">Optimal</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Avg Response Time</span>
                  <Badge className="bg-blue-500/20 text-blue-400">87ms</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Database & Monitoring */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Database Optimization</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Read Replicas</span>
                  <Badge className="bg-green-500/20 text-green-400">5 Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sharding Status</span>
                  <Badge className="bg-blue-500/20 text-blue-400">Optimized</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Query Performance</span>
                  <Badge className="bg-green-500/20 text-green-400">98.5%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Backup Status</span>
                  <Badge className="bg-green-500/20 text-green-400">Current</Badge>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Monitoring & Alerting</h3>
              <div className="space-y-3">
                <Alert className="border-green-500/20 bg-green-500/5">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    All systems operational - No active alerts
                  </AlertDescription>
                </Alert>
                <div className="flex items-center justify-between text-sm">
                  <span>Last Alert</span>
                  <span className="text-foreground/60">3 days ago</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Response Time</span>
                  <span className="text-green-400">< 2 minutes</span>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          {/* Professional Services */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Custom Model Training</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Brand Style Models</span>
                  <Badge className="bg-gold-500/20 text-gold-400">3 Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Training Queue</span>
                  <Badge className="bg-blue-500/20 text-blue-400">2 Pending</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Success Rate</span>
                  <Badge className="bg-green-500/20 text-green-400">96.8%</Badge>
                </div>
              </div>
              <Button className="w-full mt-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                Request Training
              </Button>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Account Management</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-foreground/60">Dedicated Account Manager</p>
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" size="sm" className="border-gold-500/30">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule Call
                  </Button>
                  <Button variant="outline" size="sm" className="border-gold-500/30">
                    <Headphones className="w-4 h-4 mr-2" />
                    Live Chat
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Training & Onboarding */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Training & Onboarding Programs</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Team Onboarding</h4>
                <p className="text-sm text-foreground/60">Comprehensive 2-week program for new teams</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Technical Training</h4>
                <p className="text-sm text-foreground/60">API integration and advanced features</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Executive Briefings</h4>
                <p className="text-sm text-foreground/60">Strategic implementation workshops</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          {/* Compliance & Security */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">SOC 2 Type II Compliance</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Security Controls</span>
                  <Badge className="bg-green-500/20 text-green-400">Certified</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Availability</span>
                  <Badge className="bg-green-500/20 text-green-400">99.9%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Processing Integrity</span>
                  <Badge className="bg-green-500/20 text-green-400">Verified</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Confidentiality</span>
                  <Badge className="bg-green-500/20 text-green-400">Protected</Badge>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Data Governance</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Data Encryption</span>
                  <Badge className="bg-green-500/20 text-green-400">AES-256</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Audit Trails</span>
                  <Badge className="bg-blue-500/20 text-blue-400">Complete</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Data Residency</span>
                  <Badge className="bg-purple-500/20 text-purple-400">Compliant</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">GDPR Status</span>
                  <Badge className="bg-green-500/20 text-green-400">Certified</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Insurance & Liability */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Professional Insurance & Liability</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Coverage Details</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Professional Liability: $10M
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Cyber Liability: $5M
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Errors & Omissions: $2M
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Data Breach Response
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Risk Management</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Risk Assessment</span>
                    <Badge className="bg-green-500/20 text-green-400">Low</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Incident Response</span>
                    <Badge className="bg-blue-500/20 text-blue-400">Ready</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Legal Review</span>
                    <Badge className="bg-green-500/20 text-green-400">Current</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          {/* Support Tiers */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card p-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-playfair font-semibold">Business Support</h3>
                <p className="text-sm text-foreground/60">Standard enterprise support</p>
              </div>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  8x5 Support Coverage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  4-hour Response SLA
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Email & Chat Support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Knowledge Base Access
                </li>
              </ul>
            </Card>

            <Card className="glass-card p-6 border-gold-500/50">
              <div className="text-center mb-4">
                <h3 className="text-lg font-playfair font-semibold gradient-text">Enterprise Support</h3>
                <p className="text-sm text-foreground/60">Priority enterprise support</p>
              </div>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  24x7 Support Coverage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  1-hour Response SLA
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Phone, Email & Chat
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Dedicated Account Manager
                </li>
              </ul>
            </Card>

            <Card className="glass-card p-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-playfair font-semibold">Mission Critical</h3>
                <p className="text-sm text-foreground/60">Premium support with SLA</p>
              </div>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  24x7 Priority Support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  15-minute Response SLA
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Direct Engineer Access
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom SLA Agreement
                </li>
              </ul>
            </Card>
          </div>

          {/* SLA Guarantees */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">SLA Guarantees</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">99.9%</p>
                <p className="text-sm text-foreground/60">Uptime Guarantee</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">< 1hr</p>
                <p className="text-sm text-foreground/60">Critical Response</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold-400">< 87ms</p>
                <p className="text-sm text-foreground/60">API Response Time</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-400">100%</p>
                <p className="text-sm text-foreground/60">Data Protection</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
