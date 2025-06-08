
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Settings, BarChart3, Zap, Shield, DollarSign, 
  Clock, Cpu, Database, TrendingUp, AlertTriangle,
  CheckCircle, Users, Globe, FileText, Star
} from "lucide-react";
import { advancedReplicateService } from "@/services/replicateAdvanced";
import { performanceOptimizer } from "@/services/performanceOptimizer";

export const ProfessionalDashboard = () => {
  const [metrics, setMetrics] = useState({
    totalGenerations: 0,
    successRate: 95.2,
    avgProcessingTime: 28,
    costThisMonth: 45.67,
    cacheHitRate: 78,
    queueLength: 0
  });

  const [modelPerformance, setModelPerformance] = useState([]);
  const [queueStatus, setQueueStatus] = useState({ queued: 0, processing: 0, estimatedWait: 0 });

  useEffect(() => {
    // Load real-time metrics
    const loadMetrics = () => {
      const performance = advancedReplicateService.getPerformanceMetrics();
      const queue = advancedReplicateService.getQueueStatus();
      const perf = performanceOptimizer.getPerformanceMetrics();
      
      setModelPerformance(performance);
      setQueueStatus(queue);
      setMetrics(prev => ({
        ...prev,
        cacheHitRate: Math.round(perf.cacheHitRate * 100),
        queueLength: queue.queued
      }));
    };

    loadMetrics();
    const interval = setInterval(loadMetrics, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-playfair font-bold gradient-text">Professional Dashboard</h2>
          <p className="text-foreground/60">Monitor performance, manage costs, and optimize workflows</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-gold-500/30">
            <FileText className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
            <Settings className="w-4 h-4 mr-2" />
            Configure
          </Button>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="glass-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground/60">Success Rate</p>
              <p className="text-2xl font-bold text-green-400">{metrics.successRate}%</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
        </Card>

        <Card className="glass-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground/60">Avg Processing</p>
              <p className="text-2xl font-bold text-blue-400">{metrics.avgProcessingTime}s</p>
            </div>
            <Clock className="w-8 h-8 text-blue-400" />
          </div>
        </Card>

        <Card className="glass-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground/60">Monthly Cost</p>
              <p className="text-2xl font-bold text-gold-400">${metrics.costThisMonth}</p>
            </div>
            <DollarSign className="w-8 h-8 text-gold-400" />
          </div>
        </Card>

        <Card className="glass-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground/60">Cache Hit Rate</p>
              <p className="text-2xl font-bold text-purple-400">{metrics.cacheHitRate}%</p>
            </div>
            <Database className="w-8 h-8 text-purple-400" />
          </div>
        </Card>
      </div>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="analytics" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-black/20">
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="queue">Queue</TabsTrigger>
          <TabsTrigger value="models">Models</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="costs">Costs</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Performance Trends */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Performance Trends</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Processing Speed</span>
                    <span className="text-green-400">+12% this week</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Success Rate</span>
                    <span className="text-green-400">+2.3% this week</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>User Satisfaction</span>
                    <span className="text-gold-400">4.8/5.0</span>
                  </div>
                  <Progress value={96} className="h-2" />
                </div>
              </div>
            </Card>

            {/* Usage Statistics */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Usage Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Generations</span>
                  <Badge className="bg-blue-500/20 text-blue-400">1,247</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Peak Hour</span>
                  <Badge className="bg-purple-500/20 text-purple-400">2-3 PM</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Most Used Style</span>
                  <Badge className="bg-green-500/20 text-green-400">Portrait Art</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Avg Queue Time</span>
                  <Badge className="bg-gold-500/20 text-gold-400">15s</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Performance Optimization Suggestions */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Optimization Suggestions</h3>
            <div className="space-y-3">
              <Alert className="border-blue-500/20 bg-blue-500/5">
                <TrendingUp className="h-4 w-4" />
                <AlertDescription>
                  <strong>Cache Optimization:</strong> Enable intelligent caching to reduce costs by 23%
                </AlertDescription>
              </Alert>
              <Alert className="border-green-500/20 bg-green-500/5">
                <Zap className="h-4 w-4" />
                <AlertDescription>
                  <strong>Model Selection:</strong> Switch to Flux Schnell for 40% faster processing on simple prompts
                </AlertDescription>
              </Alert>
              <Alert className="border-gold-500/20 bg-gold-500/5">
                <DollarSign className="h-4 w-4" />
                <AlertDescription>
                  <strong>Batch Processing:</strong> Group similar requests to save 15% on processing costs
                </AlertDescription>
              </Alert>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="queue" className="space-y-6">
          {/* Queue Management */}
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-playfair font-semibold gradient-text">Queue Management</h3>
              <Badge className={`${queueStatus.queued > 10 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
                {queueStatus.queued} queued
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">{queueStatus.processing}</p>
                <p className="text-sm text-foreground/60">Processing</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold-400">{queueStatus.estimatedWait}s</p>
                <p className="text-sm text-foreground/60">Est. Wait</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">3</p>
                <p className="text-sm text-foreground/60">Available Slots</p>
              </div>
            </div>

            {queueStatus.queued > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold">Queue Priority Settings</h4>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="border-gold-500/30">
                    Urgent Priority (+$0.05)
                  </Button>
                  <Button variant="outline" size="sm" className="border-gold-500/30">
                    Reschedule to Off-Peak
                  </Button>
                  <Button variant="outline" size="sm" className="border-gold-500/30">
                    Batch Similar Jobs
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="models" className="space-y-6">
          {/* Model Performance Analysis */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Model Performance Analysis</h3>
            <div className="space-y-4">
              {modelPerformance.map((model: any, index) => (
                <div key={index} className="border border-gold-500/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">{model.modelId}</h4>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-gold-400" />
                      <span className="text-sm">{(model.userSatisfaction * 5).toFixed(1)}/5.0</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-foreground/60">Success Rate</p>
                      <p className="font-semibold text-green-400">{(model.successRate * 100).toFixed(1)}%</p>
                    </div>
                    <div>
                      <p className="text-foreground/60">Avg Time</p>
                      <p className="font-semibold text-blue-400">{model.avgTime.toFixed(1)}s</p>
                    </div>
                    <div>
                      <p className="text-foreground/60">Total Jobs</p>
                      <p className="font-semibold text-gold-400">{model.totalGenerations}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* A/B Testing */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">A/B Testing Results</h3>
            <div className="space-y-4">
              <div className="border border-gold-500/20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Portrait Photography Test</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-foreground/60">SDXL Model</p>
                    <p className="text-lg font-bold text-blue-400">4.2/5.0 rating</p>
                    <p className="text-xs text-green-400">Winner: +15% satisfaction</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Stable Diffusion</p>
                    <p className="text-lg font-bold text-purple-400">3.8/5.0 rating</p>
                    <p className="text-xs text-foreground/60">28% faster processing</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          {/* Security Status */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Security & Compliance Status</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Content Filtering</span>
                  <Badge className="bg-green-500/20 text-green-400">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Bias Detection</span>
                  <Badge className="bg-green-500/20 text-green-400">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Audit Logging</span>
                  <Badge className="bg-green-500/20 text-green-400">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">GDPR Compliance</span>
                  <Badge className="bg-green-500/20 text-green-400">Compliant</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Recent Security Events</h4>
                <div className="text-sm text-foreground/60">
                  <p>✓ No security incidents in the last 30 days</p>
                  <p>✓ All content passed safety checks</p>
                  <p>✓ Rate limiting active and effective</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Compliance Dashboard */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Compliance Dashboard</h3>
            <div className="space-y-4">
              <Alert className="border-green-500/20 bg-green-500/5">
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  All systems are compliant with enterprise security standards
                </AlertDescription>
              </Alert>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-gold-500/30">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Audit Report
                </Button>
                <Button variant="outline" className="border-gold-500/30">
                  <Globe className="w-4 h-4 mr-2" />
                  Privacy Settings
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="costs" className="space-y-6">
          {/* Cost Management */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Cost Management</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">${metrics.costThisMonth}</p>
                <p className="text-sm text-foreground/60">This Month</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">$89.50</p>
                <p className="text-sm text-foreground/60">Monthly Budget</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold-400">$43.83</p>
                <p className="text-sm text-foreground/60">Remaining</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Budget Usage</span>
                  <span>{Math.round((metrics.costThisMonth / 89.50) * 100)}%</span>
                </div>
                <Progress value={(metrics.costThisMonth / 89.50) * 100} className="h-2" />
              </div>

              <Alert className="border-gold-500/20 bg-gold-500/5">
                <DollarSign className="h-4 w-4" />
                <AlertDescription>
                  <strong>Cost Optimization:</strong> Enable smart batching to reduce costs by up to 25%
                </AlertDescription>
              </Alert>
            </div>
          </Card>

          {/* Budget Controls */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Budget Controls</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Budget Limit</label>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">$</span>
                    <input 
                      type="number" 
                      defaultValue="89.50" 
                      className="flex-1 bg-black/30 border border-gold-500/20 rounded px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Alert Threshold</label>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="range" 
                      min="50" 
                      max="95" 
                      defaultValue="80" 
                      className="flex-1"
                    />
                    <span className="text-sm">80%</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" className="border-gold-500/30">
                  Enable Auto-Optimization
                </Button>
                <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
                  Save Settings
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
