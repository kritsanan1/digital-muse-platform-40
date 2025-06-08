
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Star, Target, Eye, CheckCircle, BarChart3, 
  Image, Settings, Award, TrendingUp, Filter
} from "lucide-react";

interface QualityMetric {
  id: string;
  name: string;
  score: number;
  weight: number;
  description: string;
}

interface QualityStandard {
  id: string;
  name: string;
  level: "basic" | "professional" | "premium";
  criteria: string[];
  enabled: boolean;
}

export const QualityAssurance = () => {
  const [qualityMetrics] = useState<QualityMetric[]>([
    {
      id: "resolution",
      name: "Resolution Quality",
      score: 96,
      weight: 25,
      description: "Image clarity and pixel density"
    },
    {
      id: "composition",
      name: "Composition",
      score: 92,
      weight: 30,
      description: "Rule of thirds, balance, visual flow"
    },
    {
      id: "technical",
      name: "Technical Excellence",
      score: 94,
      weight: 20,
      description: "Lighting, exposure, color accuracy"
    },
    {
      id: "artistic",
      name: "Artistic Merit",
      score: 89,
      weight: 25,
      description: "Creativity, originality, aesthetic appeal"
    }
  ]);

  const [qualityStandards] = useState<QualityStandard[]>([
    {
      id: "professional",
      name: "Professional Grade",
      level: "professional",
      criteria: [
        "Minimum 1024x1024 resolution",
        "Proper composition alignment",
        "Color accuracy validation",
        "Technical quality score > 85%"
      ],
      enabled: true
    },
    {
      id: "commercial",
      name: "Commercial Ready",
      level: "premium",
      criteria: [
        "High-resolution output (2048x2048+)",
        "Professional lighting standards",
        "Brand safety compliance",
        "Commercial licensing clear"
      ],
      enabled: true
    },
    {
      id: "artistic",
      name: "Artistic Excellence",
      level: "premium",
      criteria: [
        "Creative originality assessment",
        "Artistic composition scoring",
        "Style consistency validation",
        "Emotional impact evaluation"
      ],
      enabled: false
    }
  ]);

  const [automatedScoring, setAutomatedScoring] = useState(true);
  const [manualReview, setManualReview] = useState(true);
  const [featuredContent, setFeaturedContent] = useState(false);

  const overallScore = Math.round(
    qualityMetrics.reduce((total, metric) => total + (metric.score * metric.weight / 100), 0)
  );

  return (
    <div className="space-y-6">
      {/* Quality Overview */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gold-500/20 rounded-lg">
              <Star className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <h3 className="text-xl font-playfair font-semibold gradient-text">Quality Standards</h3>
              <p className="text-foreground/60">Professional-grade output evaluation</p>
            </div>
          </div>
          <Badge className="bg-gold-500/20 text-gold-400 border border-gold-500/30 text-lg px-4 py-2">
            {overallScore}% Overall
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {qualityMetrics.map((metric) => (
            <Card key={metric.id} className="glass-card p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-sm">{metric.name}</h4>
                <Badge variant="outline" className="border-gold-500/30 text-gold-400 text-xs">
                  {metric.weight}%
                </Badge>
              </div>
              <div className="space-y-2">
                <Progress value={metric.score} className="h-2" />
                <div className="flex justify-between text-xs text-foreground/60">
                  <span>{metric.description}</span>
                  <span>{metric.score}%</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="border-t border-gold-500/20 pt-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5 text-gold-400" />
                <div>
                  <Label htmlFor="automated" className="text-sm font-medium">Automated Scoring</Label>
                  <p className="text-xs text-foreground/60">Real-time quality evaluation</p>
                </div>
              </div>
              <Switch
                id="automated"
                checked={automatedScoring}
                onCheckedChange={setAutomatedScoring}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-gold-400" />
                <div>
                  <Label htmlFor="manual" className="text-sm font-medium">Manual Review</Label>
                  <p className="text-xs text-foreground/60">Expert human validation</p>
                </div>
              </div>
              <Switch
                id="manual"
                checked={manualReview}
                onCheckedChange={setManualReview}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-gold-400" />
                <div>
                  <Label htmlFor="featured" className="text-sm font-medium">Featured Content</Label>
                  <p className="text-xs text-foreground/60">Showcase eligible content</p>
                </div>
              </div>
              <Switch
                id="featured"
                checked={featuredContent}
                onCheckedChange={setFeaturedContent}
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Quality Standards */}
      <Card className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Target className="w-5 h-5 text-gold-400" />
          <h3 className="text-lg font-playfair font-semibold gradient-text">Professional Standards</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {qualityStandards.map((standard) => (
            <Card key={standard.id} className="glass-card p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-foreground">{standard.name}</h4>
                  <Badge 
                    variant="outline" 
                    className={`mt-1 text-xs ${
                      standard.level === 'premium' 
                        ? 'border-gold-500/30 text-gold-400'
                        : standard.level === 'professional'
                        ? 'border-blue-500/30 text-blue-400'
                        : 'border-gray-500/30 text-gray-400'
                    }`}
                  >
                    {standard.level}
                  </Badge>
                </div>
                <Switch
                  checked={standard.enabled}
                  onCheckedChange={(checked) => {
                    // Handle standard toggle
                  }}
                />
              </div>

              <div className="space-y-2">
                {standard.criteria.map((criterion, index) => (
                  <div key={index} className="flex items-center space-x-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                    <span className="text-foreground/70">{criterion}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Technical Metrics */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <BarChart3 className="w-5 h-5 text-gold-400" />
            <h3 className="text-lg font-playfair font-semibold gradient-text">Technical Quality Metrics</h3>
          </div>
          <Button variant="outline" className="border-gold-500/30 text-gold-400">
            <TrendingUp className="w-4 h-4 mr-2" />
            View Analytics
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Image Quality Parameters</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Minimum Resolution</span>
                  <span>1024px</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Color Accuracy</span>
                  <span>95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Noise Reduction</span>
                  <span>88%</span>
                </div>
                <Progress value={88} className="h-2" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Artistic Evaluation</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Composition Score</span>
                  <span>92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Style Consistency</span>
                  <span>87%</span>
                </div>
                <Progress value={87} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Creative Originality</span>
                  <span>91%</span>
                </div>
                <Progress value={91} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
