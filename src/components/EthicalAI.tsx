
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Scale, Brain, Shield, Eye, Users, 
  CheckCircle, Info, Lightbulb, Award, Lock
} from "lucide-react";

interface AIModel {
  id: string;
  name: string;
  version: string;
  transparency: number;
  bias_score: number;
  training_data: string;
  capabilities: string[];
}

interface EthicsMetric {
  id: string;
  name: string;
  score: number;
  status: "excellent" | "good" | "needs_improvement";
  description: string;
}

export const EthicalAI = () => {
  const [aiModels] = useState<AIModel[]>([
    {
      id: "sdxl",
      name: "Stable Diffusion XL",
      version: "1.0",
      transparency: 95,
      bias_score: 87,
      training_data: "LAION-5B (filtered)",
      capabilities: ["Photorealistic", "Artistic", "Commercial"]
    },
    {
      id: "flux",
      name: "Flux Schnell",
      version: "1.0",
      transparency: 90,
      bias_score: 92,
      training_data: "Curated artistic dataset",
      capabilities: ["Artistic", "Creative", "Fast generation"]
    }
  ]);

  const [ethicsMetrics] = useState<EthicsMetric[]>([
    {
      id: "transparency",
      name: "Model Transparency",
      score: 93,
      status: "excellent",
      description: "Clear documentation of AI model capabilities and limitations"
    },
    {
      id: "bias",
      name: "Bias Mitigation",
      score: 89,
      status: "good",
      description: "Active measures to reduce algorithmic bias and promote fairness"
    },
    {
      id: "attribution",
      name: "Creator Attribution",
      score: 95,
      status: "excellent",
      description: "Proper attribution and rights management for creators"
    },
    {
      id: "privacy",
      name: "Data Privacy",
      score: 97,
      status: "excellent",
      description: "Secure handling of user data and creative content"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-green-400 border-green-500/30 bg-green-500/10";
      case "good": return "text-blue-400 border-blue-500/30 bg-blue-500/10";
      case "needs_improvement": return "text-orange-400 border-orange-500/30 bg-orange-500/10";
      default: return "text-gray-400 border-gray-500/30 bg-gray-500/10";
    }
  };

  return (
    <div className="space-y-6">
      {/* Ethical AI Overview */}
      <Card className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Scale className="w-5 h-5 text-gold-400" />
          <div>
            <h3 className="text-xl font-playfair font-semibold gradient-text">Ethical AI Practices</h3>
            <p className="text-foreground/60">Transparent, fair, and responsible artificial intelligence</p>
          </div>
        </div>

        <Alert className="mb-6 border-gold-500/20 bg-gold-500/5">
          <Info className="h-4 w-4" />
          <AlertDescription>
            We are committed to developing and deploying AI technology that is transparent, fair, and beneficial 
            for all users while respecting creator rights and promoting artistic expression.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ethicsMetrics.map((metric) => (
            <Card key={metric.id} className="glass-card p-4">
              <div className="flex items-center justify-between mb-3">
                <Brain className="w-5 h-5 text-gold-400" />
                <Badge className={`text-xs ${getStatusColor(metric.status)}`}>
                  {metric.status.replace("_", " ")}
                </Badge>
              </div>
              <h4 className="font-semibold text-sm mb-2">{metric.name}</h4>
              <Progress value={metric.score} className="h-2 mb-2" />
              <p className="text-xs text-foreground/60">{metric.description}</p>
              <div className="text-right text-xs text-gold-400 mt-1">{metric.score}%</div>
            </Card>
          ))}
        </div>
      </Card>

      {/* AI Model Transparency */}
      <Card className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Eye className="w-5 h-5 text-gold-400" />
          <h3 className="text-lg font-playfair font-semibold gradient-text">AI Model Transparency</h3>
        </div>

        <div className="space-y-4">
          {aiModels.map((model) => (
            <Card key={model.id} className="glass-card p-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{model.name}</h4>
                    <Badge variant="outline" className="border-gold-500/30 text-gold-400">
                      v{model.version}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Transparency Score</span>
                        <span className="text-gold-400">{model.transparency}%</span>
                      </div>
                      <Progress value={model.transparency} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Bias Mitigation</span>
                        <span className="text-gold-400">{model.bias_score}%</span>
                      </div>
                      <Progress value={model.bias_score} className="h-2" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-medium text-gold-400 mb-1">Training Data</h5>
                      <p className="text-sm text-foreground/70">{model.training_data}</p>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-gold-400 mb-2">Capabilities</h5>
                      <div className="flex flex-wrap gap-1">
                        {model.capabilities.map((capability, index) => (
                          <Badge key={index} variant="outline" className="border-gold-500/30 text-gold-400 text-xs">
                            {capability}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Creator Rights & Attribution */}
      <Card className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Award className="w-5 h-5 text-gold-400" />
          <h3 className="text-lg font-playfair font-semibold gradient-text">Creator Rights Protection</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Attribution Policies</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-black/20 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Clear AI Generation Disclosure</div>
                  <div className="text-xs text-foreground/60">All AI-generated content is clearly labeled</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-black/20 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Creator Credit System</div>
                  <div className="text-xs text-foreground/60">Proper attribution for artistic influences</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-black/20 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Rights Management</div>
                  <div className="text-xs text-foreground/60">Clear usage rights and licensing terms</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Fair Use Guidelines</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-black/20 rounded-lg">
                <Shield className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Original Content Priority</div>
                  <div className="text-xs text-foreground/60">Emphasis on creating original artistic works</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-black/20 rounded-lg">
                <Shield className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Style Learning Ethics</div>
                  <div className="text-xs text-foreground/60">Respectful learning from artistic traditions</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-black/20 rounded-lg">
                <Shield className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Commercial Use Standards</div>
                  <div className="text-xs text-foreground/60">Clear guidelines for professional applications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Bias Detection & Mitigation */}
      <Card className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Users className="w-5 h-5 text-gold-400" />
          <h3 className="text-lg font-playfair font-semibold gradient-text">Bias Detection & Mitigation</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-lg mb-4 mx-auto">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Diverse Training Data</h4>
            <p className="text-sm text-foreground/60">
              Curated datasets representing diverse cultures, styles, and artistic traditions
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-lg mb-4 mx-auto">
              <Lightbulb className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Algorithmic Auditing</h4>
            <p className="text-sm text-foreground/60">
              Regular assessment of model outputs for bias and fairness across demographics
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-lg mb-4 mx-auto">
              <Scale className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Continuous Improvement</h4>
            <p className="text-sm text-foreground/60">
              Ongoing refinement based on community feedback and ethical guidelines
            </p>
          </div>
        </div>
      </Card>

      {/* Responsible Development */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Lock className="w-5 h-5 text-gold-400" />
            <h3 className="text-lg font-playfair font-semibold gradient-text">Responsible AI Development</h3>
          </div>
          <Button variant="outline" className="border-gold-500/30 text-gold-400">
            <Info className="w-4 h-4 mr-2" />
            Ethics Report
          </Button>
        </div>

        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-black/20 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Privacy by Design</h4>
              <p className="text-sm text-foreground/60">
                User data protection and privacy considerations are built into every aspect of our AI systems.
              </p>
            </div>
            
            <div className="p-4 bg-black/20 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Stakeholder Engagement</h4>
              <p className="text-sm text-foreground/60">
                Regular consultation with artists, ethicists, and community members on AI development.
              </p>
            </div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-lg border border-gold-500/20">
            <h4 className="font-semibold text-gold-400 mb-2">Our Ethical AI Commitment</h4>
            <p className="text-sm text-foreground/70 max-w-2xl mx-auto">
              We believe AI should augment human creativity, not replace it. Our platform is designed to empower 
              artists and creators while maintaining the highest standards of ethical AI development and deployment.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
