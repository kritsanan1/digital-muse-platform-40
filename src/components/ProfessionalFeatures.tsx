
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Settings, Star, User, Code, ArrowRight } from "lucide-react";
import { CommercialLicensing } from "./CommercialLicensing";
import { EnterpriseWorkspace } from "./EnterpriseWorkspace";
import { APIIntegration } from "./APIIntegration";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProfessionalFeatures = () => {
  const features = [
    {
      icon: Camera,
      title: "8K Resolution Output",
      description: "Generate professional-grade images up to 8K resolution for commercial use",
      benefits: ["Print-ready quality", "Commercial licensing", "Multiple formats"]
    },
    {
      icon: Settings,
      title: "Advanced Controls",
      description: "Precise artistic controls for professional workflow optimization",
      benefits: ["Custom parameters", "Batch processing", "Style mixing"]
    },
    {
      icon: Star,
      title: "Custom Model Training",
      description: "Train custom AI models on your brand or artistic style",
      benefits: ["Brand consistency", "Unique styles", "Proprietary models"]
    },
    {
      icon: User,
      title: "Team Collaboration",
      description: "Professional workspace for creative teams and agencies",
      benefits: ["Project management", "Team permissions", "Version control"]
    },
    {
      icon: Code,
      title: "API Integration",
      description: "Seamless integration with creative workflows and software",
      benefits: ["Adobe integration", "Webhook support", "Custom workflows"]
    }
  ];

  const pricingPlans = [
    {
      name: "Artist",
      price: "$29",
      period: "/month",
      description: "Perfect for individual artists and creators",
      features: [
        "1,000 generations/month",
        "Up to 4K resolution",
        "Basic style library",
        "Community gallery access",
        "Standard support"
      ],
      recommended: false
    },
    {
      name: "Professional",
      price: "$89",
      period: "/month",
      description: "Ideal for professional artists and small studios",
      features: [
        "5,000 generations/month",
        "Up to 8K resolution",
        "Premium style library",
        "Custom model training",
        "Priority support",
        "Commercial licensing",
        "API access"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For agencies and large creative teams",
      features: [
        "Unlimited generations",
        "Custom resolution",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
        "Advanced analytics"
      ],
      recommended: false
    }
  ];

  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Professional{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Advanced tools and capabilities designed for professional artists, 
            creative agencies, and enterprise workflows.
          </p>
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="licensing">Licensing</TabsTrigger>
            <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
            <TabsTrigger value="api">API & Integrations</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass-card p-6 premium-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    
                    <h3 className="text-xl font-playfair font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    
                    <p className="text-foreground/70 mb-4">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-foreground/60">
                          <Star className="w-3 h-3 text-gold-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="licensing" className="space-y-8">
            <CommercialLicensing />
          </TabsContent>

          <TabsContent value="enterprise" className="space-y-8">
            <EnterpriseWorkspace />
          </TabsContent>

          <TabsContent value="api" className="space-y-8">
            <APIIntegration />
          </TabsContent>

          <TabsContent value="pricing" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`glass-card p-8 relative ${
                    plan.recommended 
                      ? 'border-gold-500 ring-1 ring-gold-500/20' 
                      : 'border-gold-500/20'
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-black px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-playfair font-bold mb-2 text-foreground">
                      {plan.name}
                    </h3>
                    <p className="text-foreground/60 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-foreground/60 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Star className="w-4 h-4 text-gold-400 mr-3 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.recommended
                        ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500'
                        : 'border-gold-500/30 text-gold-400 hover:bg-gold-500/10'
                    } font-semibold py-6 group`}
                    variant={plan.recommended ? "default" : "outline"}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Creating"}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-foreground/60">
                All plans include 14-day free trial • No setup fees • Cancel anytime
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
