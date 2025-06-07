
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, FolderOpen, BarChart3, Settings, Crown, Zap, Globe, Lock } from "lucide-react";

export const EnterpriseWorkspace = () => {
  const workspaceFeatures = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time collaboration with role-based permissions and project sharing",
      features: ["Multi-user workspaces", "Role management", "Real-time sync", "Team chat"]
    },
    {
      icon: FolderOpen,
      title: "Project Management",
      description: "Advanced project organization with client management and deadline tracking",
      features: ["Client portals", "Project templates", "Deadline tracking", "Asset organization"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive usage analytics and performance reporting for teams",
      features: ["Usage analytics", "Performance metrics", "Team productivity", "Cost tracking"]
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "API access and webhook support for seamless workflow integration",
      features: ["REST API", "Webhook support", "SSO integration", "Custom workflows"]
    }
  ];

  const enterpriseTools = [
    {
      name: "Brand Guidelines Compliance",
      description: "Ensure all generated content meets your brand standards",
      icon: Crown,
      features: [
        "Custom brand models",
        "Color palette enforcement",
        "Style guide compliance",
        "Brand asset library"
      ]
    },
    {
      name: "Bulk Generation Engine",
      description: "Process large volumes of creative content efficiently",
      icon: Zap,
      features: [
        "Batch processing",
        "Queue management",
        "Priority processing",
        "Automated workflows"
      ]
    },
    {
      name: "White-Label Solution",
      description: "Deploy our platform under your own brand",
      icon: Globe,
      features: [
        "Custom branding",
        "Domain customization",
        "API white-labeling",
        "Client portals"
      ]
    },
    {
      name: "Security & Compliance",
      description: "Enterprise-grade security and compliance features",
      icon: Lock,
      features: [
        "SOC 2 compliance",
        "GDPR compliance",
        "Data encryption",
        "Audit trails"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-playfair font-bold gradient-text mb-4">
          Enterprise Creative Workspace
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Professional collaboration tools and enterprise features designed for 
          creative teams, agencies, and large organizations.
        </p>
      </div>

      <Tabs defaultValue="collaboration" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
          <TabsTrigger value="tools">Enterprise Tools</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="collaboration" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {workspaceFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="glass-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-foreground/70 mb-4">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.features.map((item, itemIndex) => (
                          <Badge key={itemIndex} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="tools" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {enterpriseTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <Card key={index} className="glass-card p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{tool.name}</h3>
                      <p className="text-foreground/70 text-sm">{tool.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card className="glass-card p-6">
            <h3 className="text-xl font-playfair font-semibold mb-6">
              Professional Software Integration
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Adobe Creative Suite</h4>
                <p className="text-sm text-foreground/60">Direct integration with Photoshop, Illustrator, and InDesign</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Design Platforms</h4>
                <p className="text-sm text-foreground/60">Seamless workflow with Figma, Sketch, and Canva</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Marketing Tools</h4>
                <p className="text-sm text-foreground/60">Connect with HubSpot, Mailchimp, and social platforms</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-gold-400" />
                <h3 className="text-lg font-semibold">Security Features</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  End-to-end encryption
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  SOC 2 Type II compliance
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  GDPR compliance
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Regular security audits
                </li>
              </ul>
            </Card>
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <BarChart3 className="w-6 h-6 text-gold-400" />
                <h3 className="text-lg font-semibold">Compliance & Monitoring</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Real-time audit trails
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Data residency controls
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Access logging
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Compliance reporting
                </li>
              </ul>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
