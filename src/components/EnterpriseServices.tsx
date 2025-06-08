
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Users, Settings, Crown, Phone, Headphones, Star,
  Calendar, Clock, CheckCircle, FileText, Zap, Award
} from "lucide-react";

export const EnterpriseServices = () => {
  const [serviceRequests] = useState([
    { id: 1, type: "Custom Model Training", status: "In Progress", priority: "High", eta: "3 days" },
    { id: 2, type: "API Integration", status: "Completed", priority: "Medium", eta: "Completed" },
    { id: 3, type: "Team Training", status: "Scheduled", priority: "Normal", eta: "Next week" }
  ]);

  const [supportTickets] = useState([
    { id: "ENT-001", title: "Performance Optimization", status: "Open", assignee: "Sarah Chen", priority: "Critical" },
    { id: "ENT-002", title: "Custom Workflow Setup", status: "In Progress", assignee: "Mike Rodriguez", priority: "High" },
    { id: "ENT-003", title: "Billing Query", status: "Resolved", assignee: "Lisa Wang", priority: "Low" }
  ]);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-playfair font-bold gradient-text mb-4">
          Professional Services
        </h2>
        <p className="text-foreground/70 max-w-3xl mx-auto">
          Comprehensive professional services including custom model training, consulting, 
          dedicated support, and enterprise-grade service level agreements.
        </p>
      </div>

      <Tabs defaultValue="services" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="services">Custom Services</TabsTrigger>
          <TabsTrigger value="support">Dedicated Support</TabsTrigger>
          <TabsTrigger value="training">Training Programs</TabsTrigger>
          <TabsTrigger value="consulting">Consulting</TabsTrigger>
        </TabsList>

        <TabsContent value="services" className="space-y-6">
          {/* Active Service Requests */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Active Service Requests</h3>
            <div className="space-y-4">
              {serviceRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between p-4 border border-gold-500/20 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold">{request.type}</h4>
                    <p className="text-sm text-foreground/60">ETA: {request.eta}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={`${
                      request.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                      request.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {request.priority}
                    </Badge>
                    <Badge className={`${
                      request.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                      request.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {request.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black">
              Request New Service
            </Button>
          </Card>

          {/* Custom Model Training */}
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
                <div className="flex items-center justify-between">
                  <span className="text-sm">Avg Training Time</span>
                  <Badge className="bg-purple-500/20 text-purple-400">4-6 hours</Badge>
                </div>
              </div>
              <div className="flex space-x-2 mt-4">
                <Button variant="outline" size="sm" className="border-gold-500/30">
                  <Crown className="w-4 h-4 mr-2" />
                  New Training
                </Button>
                <Button variant="outline" size="sm" className="border-gold-500/30">
                  <FileText className="w-4 h-4 mr-2" />
                  View Results
                </Button>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Custom Development</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="font-semibold text-sm">API Integrations</p>
                    <p className="text-xs text-foreground/60">Custom workflow development</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-gold-400" />
                  <div>
                    <p className="font-semibold text-sm">Automation Scripts</p>
                    <p className="text-xs text-foreground/60">Workflow optimization</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Crown className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="font-semibold text-sm">White-Label Solutions</p>
                    <p className="text-xs text-foreground/60">Complete platform customization</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 border-gold-500/30">
                Request Quote
              </Button>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          {/* Dedicated Account Management */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Dedicated Account Team</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-foreground/60">Senior Account Manager</p>
                    <p className="text-xs text-gold-400">Next check-in: Tomorrow 2PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Settings className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold">Mike Rodriguez</p>
                    <p className="text-sm text-foreground/60">Technical Solutions Engineer</p>
                    <p className="text-xs text-blue-400">Available for technical calls</p>
                  </div>
                </div>

                <div className="flex space-x-2 mt-4">
                  <Button size="sm" className="bg-gradient-to-r from-gold-500 to-gold-600 text-black">
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

            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Support Metrics</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">< 15 min</p>
                  <p className="text-sm text-foreground/60">Average Response Time</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400">99.8%</p>
                  <p className="text-sm text-foreground/60">First Call Resolution</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold-400">4.9/5</p>
                  <p className="text-sm text-foreground/60">Customer Satisfaction</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Active Support Tickets */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Active Support Tickets</h3>
            <div className="space-y-3">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-3 border border-gold-500/20 rounded-lg">
                  <div>
                    <p className="font-semibold text-sm">{ticket.title}</p>
                    <p className="text-xs text-foreground/60">#{ticket.id} • Assigned to {ticket.assignee}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={`text-xs ${
                      ticket.priority === 'Critical' ? 'bg-red-500/20 text-red-400' :
                      ticket.priority === 'High' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {ticket.priority}
                    </Badge>
                    <Badge className={`text-xs ${
                      ticket.status === 'Resolved' ? 'bg-green-500/20 text-green-400' :
                      ticket.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {ticket.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 border-gold-500/30">
              Create New Ticket
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="training" className="space-y-6">
          {/* Training Programs */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-center mb-3">Team Onboarding</h3>
              <p className="text-sm text-foreground/60 text-center mb-4">
                Comprehensive 2-week program for new teams
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Platform overview and setup
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Best practices training
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Workflow optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Performance tracking
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                Schedule Training
              </Button>
            </Card>

            <Card className="glass-card p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-center mb-3">Technical Training</h3>
              <p className="text-sm text-foreground/60 text-center mb-4">
                API integration and advanced features
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  API documentation deep-dive
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom integration patterns
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Security best practices
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Performance optimization
                </li>
              </ul>
              <Button variant="outline" className="w-full border-gold-500/30">
                Book Session
              </Button>
            </Card>

            <Card className="glass-card p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-center mb-3">Executive Briefings</h3>
              <p className="text-sm text-foreground/60 text-center mb-4">
                Strategic implementation workshops
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  ROI analysis and reporting
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Strategic roadmap planning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Change management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Success metrics definition
                </li>
              </ul>
              <Button variant="outline" className="w-full border-gold-500/30">
                Request Briefing
              </Button>
            </Card>
          </div>

          {/* Training Calendar */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Upcoming Training Sessions</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gold-500/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="font-semibold text-sm">Advanced API Workshop</p>
                    <p className="text-xs text-foreground/60">December 15, 2024 • 2:00 PM EST</p>
                  </div>
                </div>
                <Badge className="bg-blue-500/20 text-blue-400">Confirmed</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-gold-500/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="font-semibold text-sm">Team Leadership Training</p>
                    <p className="text-xs text-foreground/60">December 18, 2024 • 10:00 AM EST</p>
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-400">Available</Badge>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="consulting" className="space-y-6">
          {/* Professional Consulting */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Strategic Consulting</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-gold-400" />
                  <div>
                    <p className="font-semibold">Workflow Optimization</p>
                    <p className="text-sm text-foreground/60">Maximize team productivity and efficiency</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-semibold">Performance Analysis</p>
                    <p className="text-sm text-foreground/60">Data-driven insights and recommendations</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Crown className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="font-semibold">Enterprise Architecture</p>
                    <p className="text-sm text-foreground/60">Scale your creative operations effectively</p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                Book Consultation
              </Button>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Implementation Support</h3>
              <div className="space-y-3">
                <Alert className="border-green-500/20 bg-green-500/5">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Success Rate:</strong> 98% of consulting engagements exceed ROI targets
                  </AlertDescription>
                </Alert>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Average Implementation Time</span>
                    <Badge className="bg-blue-500/20 text-blue-400">2-4 weeks</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Typical ROI Improvement</span>
                    <Badge className="bg-green-500/20 text-green-400">150-300%</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Client Satisfaction</span>
                    <Badge className="bg-gold-500/20 text-gold-400">4.9/5.0</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Success Stories */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Recent Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gold-500/20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Global Fashion Brand</h4>
                <p className="text-sm text-foreground/60 mb-3">
                  Reduced content creation time by 75% while maintaining brand consistency across 50+ markets.
                </p>
                <div className="flex space-x-2">
                  <Badge className="bg-green-500/20 text-green-400 text-xs">75% Time Savings</Badge>
                  <Badge className="bg-blue-500/20 text-blue-400 text-xs">50+ Markets</Badge>
                </div>
              </div>
              
              <div className="border border-gold-500/20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Creative Agency</h4>
                <p className="text-sm text-foreground/60 mb-3">
                  Scaled operations 300% without increasing headcount through intelligent automation.
                </p>
                <div className="flex space-x-2">
                  <Badge className="bg-purple-500/20 text-purple-400 text-xs">300% Scale</Badge>
                  <Badge className="bg-gold-500/20 text-gold-400 text-xs">Zero Headcount Increase</Badge>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
