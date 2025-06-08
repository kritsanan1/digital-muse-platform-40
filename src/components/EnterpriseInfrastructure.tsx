import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Server, Database, Globe, Activity, Zap, Shield,
  BarChart3, Clock, AlertTriangle, CheckCircle, Settings
} from "lucide-react";

export const EnterpriseInfrastructure = () => {
  const [systemMetrics, setSystemMetrics] = useState({
    cpuUsage: 23,
    memoryUsage: 67,
    diskUsage: 45,
    networkLatency: 87,
    activeConnections: 2847,
    throughput: 1.2
  });

  const [regions] = useState([
    { name: "US East", status: "healthy", latency: 45, load: 23 },
    { name: "US West", status: "healthy", latency: 52, load: 31 },
    { name: "Europe", status: "healthy", latency: 78, load: 18 },
    { name: "Asia Pacific", status: "healthy", latency: 112, load: 27 },
    { name: "South America", status: "degraded", latency: 156, load: 8 }
  ]);

  useEffect(() => {
    // Simulate real-time metrics updates
    const interval = setInterval(() => {
      setSystemMetrics(prev => ({
        ...prev,
        cpuUsage: Math.max(10, Math.min(90, prev.cpuUsage + (Math.random() - 0.5) * 10)),
        memoryUsage: Math.max(40, Math.min(85, prev.memoryUsage + (Math.random() - 0.5) * 5)),
        networkLatency: Math.max(50, Math.min(200, prev.networkLatency + (Math.random() - 0.5) * 20))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-playfair font-bold gradient-text mb-4">
          Enterprise Infrastructure
        </h2>
        <p className="text-foreground/70 max-w-3xl mx-auto">
          Real-time monitoring and management of auto-scaling cloud architecture, 
          global CDN deployment, and enterprise-grade infrastructure.
        </p>
      </div>

      {/* Real-time System Health */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="glass-card p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-foreground/60">CPU Usage</span>
            <Activity className="w-5 h-5 text-blue-400" />
          </div>
          <div className="flex items-center space-x-2">
            <Progress value={systemMetrics.cpuUsage} className="flex-1 h-2" />
            <span className="text-sm font-semibold">{Math.round(systemMetrics.cpuUsage)}%</span>
          </div>
        </Card>

        <Card className="glass-card p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-foreground/60">Memory</span>
            <Database className="w-5 h-5 text-green-400" />
          </div>
          <div className="flex items-center space-x-2">
            <Progress value={systemMetrics.memoryUsage} className="flex-1 h-2" />
            <span className="text-sm font-semibold">{Math.round(systemMetrics.memoryUsage)}%</span>
          </div>
        </Card>

        <Card className="glass-card p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-foreground/60">Network</span>
            <Globe className="w-5 h-5 text-gold-400" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gold-400">{Math.round(systemMetrics.networkLatency)}ms</span>
          </div>
        </Card>

        <Card className="glass-card p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-foreground/60">Throughput</span>
            <Zap className="w-5 h-5 text-purple-400" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-purple-400">{systemMetrics.throughput}GB/s</span>
          </div>
        </Card>
      </div>

      {/* Auto-Scaling Status */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-card p-6">
          <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Auto-Scaling Clusters</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium">GPU Compute Cluster</span>
                <p className="text-xs text-foreground/60">High-performance image generation</p>
              </div>
              <div className="text-right">
                <Badge className="bg-green-500/20 text-green-400">12/50 Instances</Badge>
                <p className="text-xs text-foreground/60">Auto-scaling enabled</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium">API Gateway Cluster</span>
                <p className="text-xs text-foreground/60">Request routing and load balancing</p>
              </div>
              <div className="text-right">
                <Badge className="bg-blue-500/20 text-blue-400">8/20 Instances</Badge>
                <p className="text-xs text-foreground/60">Optimal capacity</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium">Database Cluster</span>
                <p className="text-xs text-foreground/60">Distributed data storage</p>
              </div>
              <div className="text-right">
                <Badge className="bg-gold-500/20 text-gold-400">5 Read Replicas</Badge>
                <p className="text-xs text-foreground/60">Sharded architecture</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Disaster Recovery</h3>
          <div className="space-y-4">
            <Alert className="border-green-500/20 bg-green-500/5">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Last backup completed successfully 2 hours ago
              </AlertDescription>
            </Alert>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Recovery Point Objective</span>
                <Badge className="bg-blue-500/20 text-blue-400">Less than 1 hour</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Recovery Time Objective</span>
                <Badge className="bg-green-500/20 text-green-400">Less than 4 hours</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Backup Retention</span>
                <Badge className="bg-purple-500/20 text-purple-400">90 days</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Cross-Region Backup</span>
                <Badge className="bg-gold-500/20 text-gold-400">Enabled</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Global CDN Status */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-playfair font-semibold gradient-text mb-6">Global CDN Performance</h3>
        <div className="grid md:grid-cols-5 gap-4">
          {regions.map((region, index) => (
            <div key={index} className="text-center">
              <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${
                region.status === 'healthy' ? 'bg-green-500/20' : 
                region.status === 'degraded' ? 'bg-yellow-500/20' : 'bg-red-500/20'
              }`}>
                <Globe className={`w-6 h-6 ${
                  region.status === 'healthy' ? 'text-green-400' : 
                  region.status === 'degraded' ? 'text-yellow-400' : 'text-red-400'
                }`} />
              </div>
              <h4 className="font-semibold text-sm mb-1">{region.name}</h4>
              <p className="text-xs text-foreground/60 mb-2">{region.latency}ms avg</p>
              <Badge className={`text-xs ${
                region.status === 'healthy' ? 'bg-green-500/20 text-green-400' : 
                region.status === 'degraded' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {region.load}% load
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Monitoring Dashboard */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-card p-6">
          <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Active Monitoring</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Active Monitors</span>
              <Badge className="bg-green-500/20 text-green-400">147</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Alert Rules</span>
              <Badge className="bg-blue-500/20 text-blue-400">89</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Webhook Integrations</span>
              <Badge className="bg-purple-500/20 text-purple-400">12</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Response Time SLA</span>
              <Badge className="bg-green-500/20 text-green-400">99.7%</Badge>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4 border-gold-500/30">
            <BarChart3 className="w-4 h-4 mr-2" />
            View Detailed Metrics
          </Button>
        </Card>

        <Card className="glass-card p-6">
          <h3 className="text-lg font-playfair font-semibold gradient-text mb-4">Security Monitoring</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Active Threats</span>
              <Badge className="bg-green-500/20 text-green-400">0</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Blocked Requests</span>
              <Badge className="bg-blue-500/20 text-blue-400">1,247 today</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">DDoS Protection</span>
              <Badge className="bg-green-500/20 text-green-400">Active</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">SSL Certificate</span>
              <Badge className="bg-green-500/20 text-green-400">Valid</Badge>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4 border-gold-500/30">
            <Shield className="w-4 h-4 mr-2" />
            Security Dashboard
          </Button>
        </Card>
      </div>
    </div>
  );
};
