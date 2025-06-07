
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, FileCheck, Download, AlertCircle, CheckCircle, Crown } from "lucide-react";

export const CommercialLicensing = () => {
  const licenseTypes = [
    {
      name: "Personal Use",
      price: "Free",
      description: "For personal projects and learning",
      features: [
        "Personal portfolio use",
        "Educational purposes",
        "Non-commercial sharing",
        "Social media (personal)"
      ],
      restrictions: [
        "No commercial use",
        "No resale allowed",
        "Attribution required"
      ],
      badge: "Standard",
      color: "blue"
    },
    {
      name: "Commercial Standard",
      price: "$49",
      description: "For small businesses and freelancers",
      features: [
        "Commercial projects",
        "Client presentations",
        "Marketing materials",
        "Social media advertising",
        "Print media up to 1000 copies"
      ],
      restrictions: [
        "Single user license",
        "No resale of license",
        "Attribution preferred"
      ],
      badge: "Professional",
      color: "gold"
    },
    {
      name: "Enterprise Extended",
      price: "$199",
      description: "For agencies and large corporations",
      features: [
        "Unlimited commercial use",
        "Team collaboration",
        "White-label rights",
        "Unlimited print runs",
        "Broadcast and streaming",
        "Product packaging",
        "Merchandising rights"
      ],
      restrictions: [
        "Company-wide license",
        "Usage tracking required"
      ],
      badge: "Enterprise",
      color: "purple"
    }
  ];

  const complianceFeatures = [
    {
      icon: Shield,
      title: "Copyright Protection",
      description: "Every generated image includes metadata for ownership tracking and rights management."
    },
    {
      icon: FileCheck,
      title: "Legal Compliance",
      description: "Built-in compliance checks ensure your usage meets licensing requirements."
    },
    {
      icon: Download,
      title: "License Documentation",
      description: "Automatic generation of license certificates and usage documentation."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-playfair font-bold gradient-text mb-4">
          Commercial Licensing & Rights Management
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Professional licensing solutions designed for commercial use, 
          with clear rights management and legal compliance.
        </p>
      </div>

      <Tabs defaultValue="licenses" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="licenses">License Types</TabsTrigger>
          <TabsTrigger value="compliance">Compliance Tools</TabsTrigger>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
        </TabsList>

        <TabsContent value="licenses" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {licenseTypes.map((license, index) => (
              <Card key={index} className="glass-card p-6 relative">
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="outline" 
                    className={`border-${license.color}-500/30 text-${license.color}-400`}
                  >
                    {license.badge}
                  </Badge>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2">
                    {license.name}
                  </h3>
                  <div className="text-2xl font-bold gradient-text mb-2">
                    {license.price}
                  </div>
                  <p className="text-foreground/60 text-sm">
                    {license.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Permitted Uses
                    </h4>
                    <ul className="space-y-1">
                      {license.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-foreground/70 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <AlertCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Restrictions
                    </h4>
                    <ul className="space-y-1">
                      {license.restrictions.map((restriction, restrictionIndex) => (
                        <li key={restrictionIndex} className="text-sm text-foreground/70 flex items-center">
                          <AlertCircle className="w-3 h-3 text-orange-400 mr-2 flex-shrink-0" />
                          {restriction}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6"
                  variant={license.name === "Commercial Standard" ? "default" : "outline"}
                >
                  Select License
                </Button>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="glass-card p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="documentation" className="space-y-6">
          <Card className="glass-card p-6">
            <h3 className="text-xl font-playfair font-semibold mb-4">
              License Documentation & Certificates
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                <div>
                  <h4 className="font-medium">Commercial License Certificate</h4>
                  <p className="text-sm text-foreground/60">Official documentation for commercial usage rights</p>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                <div>
                  <h4 className="font-medium">Usage Report</h4>
                  <p className="text-sm text-foreground/60">Detailed usage tracking and compliance report</p>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Generate
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
