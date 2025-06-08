
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Shield, Flag, Eye, Users, AlertTriangle, 
  CheckCircle, Clock, MessageSquare, Phone, Mail
} from "lucide-react";

interface SafetyReport {
  id: string;
  type: "content" | "behavior" | "technical" | "other";
  status: "pending" | "reviewing" | "resolved" | "escalated";
  priority: "low" | "medium" | "high" | "critical";
  timestamp: string;
}

interface ModerationAction {
  id: string;
  action: string;
  reason: string;
  timestamp: string;
  reviewer: string;
}

export const SafetyMeasures = () => {
  const [reportType, setReportType] = useState("content");
  const [reportDescription, setReportDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const [safetyReports] = useState<SafetyReport[]>([
    {
      id: "1",
      type: "content",
      status: "resolved",
      priority: "medium",
      timestamp: "2024-01-15T10:30:00Z"
    },
    {
      id: "2",
      type: "behavior",
      status: "reviewing",
      priority: "high",
      timestamp: "2024-01-14T15:45:00Z"
    }
  ]);

  const [moderationActions] = useState<ModerationAction[]>([
    {
      id: "1",
      action: "Content Removed",
      reason: "Violation of community guidelines",
      timestamp: "2024-01-15T11:00:00Z",
      reviewer: "Safety Team"
    },
    {
      id: "2",
      action: "Warning Issued",
      reason: "Inappropriate artistic content",
      timestamp: "2024-01-14T16:00:00Z",
      reviewer: "Safety Team"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved": return "text-green-400 border-green-500/30 bg-green-500/10";
      case "reviewing": return "text-orange-400 border-orange-500/30 bg-orange-500/10";
      case "pending": return "text-blue-400 border-blue-500/30 bg-blue-500/10";
      case "escalated": return "text-red-400 border-red-500/30 bg-red-500/10";
      default: return "text-gray-400 border-gray-500/30 bg-gray-500/10";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical": return "text-red-400";
      case "high": return "text-orange-400";
      case "medium": return "text-yellow-400";
      case "low": return "text-green-400";
      default: return "text-gray-400";
    }
  };

  const handleSubmitReport = () => {
    // Handle report submission
    console.log("Report submitted:", { reportType, reportDescription, contactEmail });
    setReportDescription("");
    setContactEmail("");
  };

  return (
    <div className="space-y-6">
      {/* Safety Overview */}
      <Card className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="w-5 h-5 text-gold-400" />
          <div>
            <h3 className="text-xl font-playfair font-semibold gradient-text">Safety & Moderation</h3>
            <p className="text-foreground/60">Comprehensive safety measures and community protection</p>
          </div>
        </div>

        <Alert className="mb-6 border-gold-500/20 bg-gold-500/5">
          <Shield className="h-4 w-4" />
          <AlertDescription>
            Our safety team operates 24/7 to ensure a secure and professional environment for all users. 
            Report any concerns immediately for rapid response.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-4 gap-4">
          <Card className="glass-card p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-3 mx-auto">
              <Eye className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
            <div className="text-sm text-foreground/60">Active Monitoring</div>
          </Card>

          <Card className="glass-card p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-3 mx-auto">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">5 min</div>
            <div className="text-sm text-foreground/60">Avg Response Time</div>
          </Card>

          <Card className="glass-card p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mb-3 mx-auto">
              <Flag className="w-6 h-6 text-orange-400" />
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-1">{safetyReports.length}</div>
            <div className="text-sm text-foreground/60">Active Reports</div>
          </Card>

          <Card className="glass-card p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-3 mx-auto">
              <CheckCircle className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-1">99.8%</div>
            <div className="text-sm text-foreground/60">Resolution Rate</div>
          </Card>
        </div>
      </Card>

      {/* Report & Flag System */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-card p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Flag className="w-5 h-5 text-gold-400" />
            <h3 className="text-lg font-playfair font-semibold gradient-text">Report Content or Behavior</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gold-400">Report Type</label>
              <div className="grid grid-cols-2 gap-2">
                {["content", "behavior", "technical", "other"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setReportType(type)}
                    className={`p-3 rounded-lg border text-sm capitalize transition-all ${
                      reportType === type
                        ? 'border-gold-500 bg-gold-500/10 text-gold-400'
                        : 'border-gold-500/20 bg-black/20 text-foreground/70 hover:border-gold-500/40'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gold-400">Description</label>
              <Textarea
                value={reportDescription}
                onChange={(e) => setReportDescription(e.target.value)}
                placeholder="Please describe the issue in detail..."
                className="bg-black/20 border-gold-500/20"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gold-400">Contact Email (Optional)</label>
              <Input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="bg-black/20 border-gold-500/20"
              />
            </div>

            <Button 
              onClick={handleSubmitReport}
              disabled={!reportDescription.trim()}
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500"
            >
              <Flag className="w-4 h-4 mr-2" />
              Submit Report
            </Button>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <div className="flex items-center space-x-3 mb-6">
            <MessageSquare className="w-5 h-5 text-gold-400" />
            <h3 className="text-lg font-playfair font-semibold gradient-text">Emergency Contacts</h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <h4 className="font-semibold text-red-400">Critical Safety Issues</h4>
              </div>
              <p className="text-sm text-foreground/70 mb-3">
                For immediate safety concerns or urgent violations
              </p>
              <div className="flex space-x-2">
                <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Line
                </Button>
                <Button size="sm" variant="outline" className="border-red-500/30 text-red-400">
                  <Mail className="w-4 h-4 mr-2" />
                  Priority Email
                </Button>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold text-blue-400">General Support</h4>
              </div>
              <p className="text-sm text-foreground/70 mb-3">
                For general questions and non-urgent issues
              </p>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="border-blue-500/30 text-blue-400">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Live Chat
                </Button>
                <Button size="sm" variant="outline" className="border-blue-500/30 text-blue-400">
                  <Mail className="w-4 h-4 mr-2" />
                  Support Email
                </Button>
              </div>
            </div>

            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <h4 className="font-semibold text-green-400">Professional Services</h4>
              </div>
              <p className="text-sm text-foreground/70 mb-3">
                For enterprise and professional accounts
              </p>
              <Button size="sm" variant="outline" className="border-green-500/30 text-green-400">
                <Users className="w-4 h-4 mr-2" />
                Account Manager
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Moderation Activity */}
      <Card className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Eye className="w-5 h-5 text-gold-400" />
          <h3 className="text-lg font-playfair font-semibold gradient-text">Recent Moderation Activity</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-foreground mb-4">Safety Reports</h4>
            <div className="space-y-3">
              {safetyReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Flag className="w-4 h-4 text-gold-400" />
                    <div>
                      <div className="text-sm font-medium capitalize">{report.type} Report</div>
                      <div className="text-xs text-foreground/60">
                        {new Date(report.timestamp).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Badge className={`text-xs ${getPriorityColor(report.priority)}`}>
                      {report.priority}
                    </Badge>
                    <Badge className={`text-xs ${getStatusColor(report.status)}`}>
                      {report.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Moderation Actions</h4>
            <div className="space-y-3">
              {moderationActions.map((action) => (
                <div key={action.id} className="p-3 bg-black/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">{action.action}</div>
                    <div className="text-xs text-foreground/60">
                      {new Date(action.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-xs text-foreground/60 mb-1">{action.reason}</div>
                  <div className="text-xs text-gold-400">by {action.reviewer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* User Education */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-gold-400" />
            <h3 className="text-lg font-playfair font-semibold gradient-text">Safety Education & Resources</h3>
          </div>
          <Button variant="outline" className="border-gold-500/30 text-gold-400">
            <MessageSquare className="w-4 h-4 mr-2" />
            Safety Guide
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-3 mx-auto">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Community Guidelines</h4>
            <p className="text-sm text-foreground/60">
              Learn about our community standards and behavioral expectations
            </p>
          </div>

          <div className="text-center p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-3 mx-auto">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Safety Best Practices</h4>
            <p className="text-sm text-foreground/60">
              Tips for safe and responsible use of AI creative tools
            </p>
          </div>

          <div className="text-center p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-3 mx-auto">
              <Flag className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Reporting Guide</h4>
            <p className="text-sm text-foreground/60">
              How to effectively report violations and safety concerns
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
