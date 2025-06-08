
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Shield, Star, FileText, Eye, CheckCircle, 
  AlertTriangle, Users, Scale, Lock, Info
} from "lucide-react";

import { QualityAssurance } from "./QualityAssurance";
import { ContentPolicy } from "./ContentPolicy";
import { EthicalAI } from "./EthicalAI";
import { SafetyMeasures } from "./SafetyMeasures";

export const QualityEthics = () => {
  const [activeReports, setActiveReports] = useState(12);
  const [qualityScore, setQualityScore] = useState(94.2);
  const [complianceStatus, setComplianceStatus] = useState("Excellent");

  return (
    <section id="quality-ethics" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Quality & Ethics{" "}
            <span className="gradient-text">Standards</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Professional-grade quality assurance and ethical AI practices for responsible creative generation
          </p>
        </div>

        {/* Overview Dashboard */}
        <Card className="glass-card p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-3 mx-auto">
                <Star className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-green-400 mb-1">{qualityScore}%</div>
              <div className="text-sm text-foreground/60">Quality Score</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-3 mx-auto">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-blue-400 mb-1">{complianceStatus}</div>
              <div className="text-sm text-foreground/60">Compliance Status</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mb-3 mx-auto">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-2xl font-bold text-orange-400 mb-1">{activeReports}</div>
              <div className="text-sm text-foreground/60">Active Reports</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-3 mx-auto">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
              <div className="text-sm text-foreground/60">Monitoring</div>
            </div>
          </div>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="quality" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-black/20">
            <TabsTrigger value="quality" className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>Quality Assurance</span>
            </TabsTrigger>
            <TabsTrigger value="policy" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Content Policy</span>
            </TabsTrigger>
            <TabsTrigger value="ethics" className="flex items-center space-x-2">
              <Scale className="w-4 h-4" />
              <span>Ethical AI</span>
            </TabsTrigger>
            <TabsTrigger value="safety" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Safety Measures</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quality" className="mt-6">
            <QualityAssurance />
          </TabsContent>

          <TabsContent value="policy" className="mt-6">
            <ContentPolicy />
          </TabsContent>

          <TabsContent value="ethics" className="mt-6">
            <EthicalAI />
          </TabsContent>

          <TabsContent value="safety" className="mt-6">
            <SafetyMeasures />
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="glass-card p-6 mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-playfair font-semibold gradient-text mb-2">
                Professional Standards Commitment
              </h3>
              <p className="text-foreground/60">
                Our platform maintains the highest standards of quality, ethics, and safety for professional creative work.
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="border-gold-500/30 text-gold-400">
                <FileText className="w-4 h-4 mr-2" />
                View Policies
              </Button>
              <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
                <CheckCircle className="w-4 h-4 mr-2" />
                Compliance Report
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
