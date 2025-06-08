
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, Shield, Users, Globe, AlertTriangle, 
  CheckCircle, Info, Book, Scale, Heart, Bell
} from "lucide-react";

interface PolicyCategory {
  id: string;
  name: string;
  description: string;
  rules: string[];
  examples: { good: string[]; avoid: string[] };
}

export const ContentPolicy = () => {
  const [policies] = useState<PolicyCategory[]>([
    {
      id: "professional",
      name: "Professional Use Guidelines",
      description: "Standards for commercial and professional creative work",
      rules: [
        "Content must be suitable for professional environments",
        "Commercial use requires proper licensing verification",
        "Brand guidelines must be respected when applicable",
        "Professional quality standards must be maintained"
      ],
      examples: {
        good: [
          "Corporate headshots and business portraits",
          "Product photography for e-commerce",
          "Marketing materials and advertisements",
          "Professional event documentation"
        ],
        avoid: [
          "Content violating brand guidelines",
          "Unprofessional or inappropriate imagery",
          "Copyright-infringing material",
          "Low-quality outputs for commercial use"
        ]
      }
    },
    {
      id: "artistic",
      name: "Artistic Expression Policies",
      description: "Guidelines for creative freedom while maintaining community standards",
      rules: [
        "Artistic expression is encouraged within community guidelines",
        "Creative interpretation of themes is welcomed",
        "Original artistic concepts are prioritized",
        "Cultural appropriation should be avoided"
      ],
      examples: {
        good: [
          "Original artistic interpretations",
          "Creative abstract compositions",
          "Stylized portraits and concepts",
          "Innovative visual storytelling"
        ],
        avoid: [
          "Direct copying of existing artworks",
          "Culturally insensitive representations",
          "Offensive or harmful imagery",
          "Plagiarism of artistic styles without attribution"
        ]
      }
    },
    {
      id: "community",
      name: "Community Standards",
      description: "Behavioral guidelines for platform participation",
      rules: [
        "Respectful interaction with all community members",
        "Constructive feedback and criticism only",
        "No harassment or discriminatory behavior",
        "Professional conduct in all interactions"
      ],
      examples: {
        good: [
          "Constructive artistic feedback",
          "Collaborative learning and sharing",
          "Respectful cultural discussions",
          "Professional networking"
        ],
        avoid: [
          "Personal attacks or harassment",
          "Discriminatory language or imagery",
          "Spam or promotional abuse",
          "Disruptive or inappropriate behavior"
        ]
      }
    }
  ]);

  const [contentFilters] = useState([
    { name: "Age Appropriateness", status: "Active", description: "Ensures content is suitable for all professional audiences" },
    { name: "Cultural Sensitivity", status: "Active", description: "Prevents culturally inappropriate or offensive content" },
    { name: "Brand Safety", status: "Active", description: "Maintains brand-safe content for commercial use" },
    { name: "Quality Standards", status: "Active", description: "Enforces minimum quality thresholds" }
  ]);

  return (
    <div className="space-y-6">
      {/* Policy Overview */}
      <Card className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <FileText className="w-5 h-5 text-gold-400" />
          <div>
            <h3 className="text-xl font-playfair font-semibold gradient-text">Content Policy Framework</h3>
            <p className="text-foreground/60">Professional guidelines for responsible creative generation</p>
          </div>
        </div>

        <Alert className="mb-6 border-gold-500/20 bg-gold-500/5">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Our content policies are designed to foster a professional, inclusive, and creative environment 
            while maintaining the highest standards for commercial and artistic work.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contentFilters.map((filter, index) => (
            <Card key={index} className="glass-card p-4">
              <div className="flex items-center justify-between mb-2">
                <Shield className="w-5 h-5 text-green-400" />
                <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 text-xs">
                  {filter.status}
                </Badge>
              </div>
              <h4 className="font-semibold text-sm mb-2">{filter.name}</h4>
              <p className="text-xs text-foreground/60">{filter.description}</p>
            </Card>
          ))}
        </div>
      </Card>

      {/* Policy Categories */}
      <Tabs defaultValue="professional" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-black/20">
          <TabsTrigger value="professional" className="flex items-center space-x-2">
            <Scale className="w-4 h-4" />
            <span>Professional</span>
          </TabsTrigger>
          <TabsTrigger value="artistic" className="flex items-center space-x-2">
            <Heart className="w-4 h-4" />
            <span>Artistic</span>
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Community</span>
          </TabsTrigger>
        </TabsList>

        {policies.map((policy) => (
          <TabsContent key={policy.id} value={policy.id} className="mt-6">
            <Card className="glass-card p-6">
              <div className="mb-6">
                <h3 className="text-lg font-playfair font-semibold gradient-text mb-2">
                  {policy.name}
                </h3>
                <p className="text-foreground/70">{policy.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Rules */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <Book className="w-4 h-4 mr-2 text-gold-400" />
                    Policy Rules
                  </h4>
                  <div className="space-y-3">
                    {policy.rules.map((rule, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-black/20 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Examples */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Encouraged Content
                    </h4>
                    <div className="space-y-2">
                      {policy.examples.good.map((example, index) => (
                        <div key={index} className="text-sm text-foreground/70 p-2 bg-green-500/10 rounded border-l-2 border-green-500/30">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-red-400 mb-3 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Content to Avoid
                    </h4>
                    <div className="space-y-2">
                      {policy.examples.avoid.map((example, index) => (
                        <div key={index} className="text-sm text-foreground/70 p-2 bg-red-500/10 rounded border-l-2 border-red-500/30">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Cultural Sensitivity Guidelines */}
      <Card className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Globe className="w-5 h-5 text-gold-400" />
          <h3 className="text-lg font-playfair font-semibold gradient-text">Cultural Sensitivity & Inclusion</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Respectful Representation</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                <span>Authentic cultural representation</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                <span>Diverse and inclusive imagery</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                <span>Research-based cultural elements</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Professional Standards</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                <span>Workplace-appropriate content</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                <span>Universal accessibility guidelines</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                <span>International compliance standards</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Community Values</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                <span>Collaborative learning environment</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                <span>Constructive feedback culture</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                <span>Professional growth support</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Policy Updates */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-playfair font-semibold gradient-text mb-2">
              Policy Updates & Resources
            </h3>
            <p className="text-foreground/60">
              Stay informed about policy changes and access additional resources for responsible content creation.
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="border-gold-500/30 text-gold-400">
              <Book className="w-4 h-4 mr-2" />
              Full Guidelines
            </Button>
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
              <Bell className="w-4 h-4 mr-2" />
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
