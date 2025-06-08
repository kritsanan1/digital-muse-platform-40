
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, Video, Users, Award, Target, 
  FileText, Lightbulb, Clock, Star, Play,
  Download, MessageCircle, Calendar, TrendingUp
} from "lucide-react";

export const LearningCenter = () => {
  const [selectedLevel, setSelectedLevel] = useState("beginner");

  const tutorials = [
    {
      id: "1",
      title: "Mastering Portrait Prompts",
      instructor: "Sarah Chen",
      duration: "45 min",
      level: "Intermediate",
      rating: 4.9,
      students: 2840,
      thumbnail: "https://i.postimg.cc/3rn5hbYH/LINE-ALBUM-2025-5-30-250607-22.jpg",
      category: "Portrait Photography",
      description: "Learn advanced prompting techniques for creating stunning portrait photography"
    },
    {
      id: "2",
      title: "Color Theory in AI Art",
      instructor: "Marcus Rodriguez",
      duration: "60 min",
      level: "Advanced",
      rating: 4.8,
      students: 1920,
      thumbnail: "https://i.postimg.cc/ZKnk5F5v/LINE-ALBUM-2025-5-30-250607-23.jpg",
      category: "Art Theory",
      description: "Understanding color relationships and harmony in digital art creation"
    },
    {
      id: "3",
      title: "Lighting Fundamentals",
      instructor: "Elena Kozlov",
      duration: "35 min",
      level: "Beginner",
      rating: 4.7,
      students: 3150,
      thumbnail: "https://i.postimg.cc/0NghnTd7/LINE-ALBUM-2025-5-30-250607-24.jpg",
      category: "Lighting",
      description: "Master the basics of lighting in AI-generated photography"
    }
  ];

  const learningPaths = [
    {
      id: "1",
      title: "Digital Portrait Mastery",
      level: "Beginner to Advanced",
      modules: 12,
      duration: "8 weeks",
      students: 1200,
      progress: 0,
      description: "Complete journey from basic portrait concepts to professional techniques"
    },
    {
      id: "2",
      title: "Commercial Photography",
      level: "Intermediate",
      modules: 8,
      duration: "6 weeks",
      students: 800,
      progress: 0,
      description: "Learn to create compelling commercial imagery for brands and marketing"
    },
    {
      id: "3",
      title: "Fine Art Creation",
      level: "Advanced",
      modules: 15,
      duration: "10 weeks",
      students: 600,
      progress: 0,
      description: "Develop your artistic vision and create gallery-worthy fine art pieces"
    }
  ];

  const workshops = [
    {
      id: "1",
      title: "Fashion Photography Masterclass",
      instructor: "James Park",
      date: "Dec 15, 2024",
      time: "2:00 PM EST",
      duration: "2 hours",
      type: "Live Workshop",
      spots: 15,
      price: "Free"
    },
    {
      id: "2",
      title: "AI Art Business Workshop",
      instructor: "Aria Thompson",
      date: "Dec 18, 2024",
      time: "6:00 PM EST",
      duration: "90 min",
      type: "Interactive Session",
      spots: 25,
      price: "$29"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-playfair font-bold text-foreground mb-4">
          Learning Center
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Master the art of AI-generated imagery with professional tutorials, workshops, and learning paths
        </p>
      </div>

      <Tabs defaultValue="tutorials" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="paths">Learning Paths</TabsTrigger>
          <TabsTrigger value="workshops">Workshops</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        {/* Tutorials Tab */}
        <TabsContent value="tutorials">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <Card key={tutorial.id} className="glass-card premium-hover overflow-hidden">
                <div className="relative">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black">
                      <Play className="w-5 h-5 mr-2" />
                      Watch Now
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-gold-500 text-black">
                    {tutorial.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-foreground/60">
                    <span>{tutorial.instructor}</span>
                    <Badge variant="outline">{tutorial.level}</Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-foreground/70 mb-4">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                        <span>{tutorial.rating}</span>
                      </div>
                    </div>
                    <span className="text-foreground/60">{tutorial.students} students</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Learning Paths Tab */}
        <TabsContent value="paths">
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Choose Your Learning Path</h2>
              <div className="flex space-x-2">
                {["beginner", "intermediate", "advanced"].map((level) => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    onClick={() => setSelectedLevel(level)}
                    className={selectedLevel === level ? "bg-gold-500 text-black" : "border-gold-500/30 text-gold-400"}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningPaths.map((path) => (
                <Card key={path.id} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="border-gold-500/30 text-gold-400">
                        {path.level}
                      </Badge>
                      <span className="text-sm text-foreground/60">{path.students} enrolled</span>
                    </div>
                    <CardTitle className="text-xl">{path.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-foreground/70 mb-4">{path.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>{path.modules} modules</span>
                        <span>{path.duration}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gold-500 h-2 rounded-full transition-all"
                          style={{ width: `${path.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Workshops Tab */}
        <TabsContent value="workshops">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Live Workshops & Masterclasses</h2>
              <p className="text-foreground/70">Learn directly from industry professionals</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {workshops.map((workshop) => (
                <Card key={workshop.id} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-gold-500 text-black">{workshop.type}</Badge>
                      <span className="text-lg font-bold text-gold-400">{workshop.price}</span>
                    </div>
                    <CardTitle className="text-xl">{workshop.title}</CardTitle>
                    <p className="text-foreground/60">with {workshop.instructor}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gold-400" />
                        <span>{workshop.date} at {workshop.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gold-400" />
                        <span>{workshop.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gold-400" />
                        <span>{workshop.spots} spots available</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Prompt Templates", icon: FileText, count: 150, description: "Professional prompts for every style" },
              { title: "Style Guides", icon: Lightbulb, count: 75, description: "Comprehensive style references" },
              { title: "Best Practices", icon: Target, count: 50, description: "Industry guidelines and tips" },
              { title: "Case Studies", icon: TrendingUp, count: 25, description: "Real-world project examples" }
            ].map((resource) => (
              <Card key={resource.title} className="glass-card premium-hover text-center">
                <CardHeader>
                  <resource.icon className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-4">{resource.description}</p>
                  <Badge variant="outline" className="mb-4 border-gold-500/30 text-gold-400">
                    {resource.count} resources
                  </Badge>
                  <Button variant="outline" className="w-full border-gold-500/30 text-gold-400">
                    <Download className="w-4 h-4 mr-2" />
                    Access Library
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Community Tab */}
        <TabsContent value="community">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Community Learning</h2>
              <p className="text-foreground/70">Connect, learn, and grow with fellow artists</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Study Groups", icon: Users, members: 1240, description: "Join collaborative learning sessions" },
                { title: "Expert Q&A", icon: MessageCircle, sessions: 45, description: "Weekly sessions with professionals" },
                { title: "Student Showcase", icon: Award, submissions: 850, description: "Share and get feedback on your work" }
              ].map((feature) => (
                <Card key={feature.title} className="glass-card premium-hover">
                  <CardHeader className="text-center">
                    <feature.icon className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-foreground/70 mb-4">{feature.description}</p>
                    <Badge variant="outline" className="mb-4 border-gold-500/30 text-gold-400">
                      {feature.members || feature.sessions || feature.submissions} active
                    </Badge>
                    <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                      Join Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
