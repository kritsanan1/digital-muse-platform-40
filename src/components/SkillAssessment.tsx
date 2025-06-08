
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Award, Target, TrendingUp, Clock, 
  CheckCircle, Star, BookOpen, Users
} from "lucide-react";

export const SkillAssessment = () => {
  const [selectedSkill, setSelectedSkill] = useState("portrait");

  const skills = [
    {
      id: "portrait",
      name: "Portrait Photography",
      level: 3,
      progress: 75,
      nextMilestone: "Master Advanced Lighting",
      exercises: 12,
      completed: 9
    },
    {
      id: "landscape",
      name: "Landscape Art",
      level: 2,
      progress: 45,
      nextMilestone: "Color Theory Mastery",
      exercises: 8,
      completed: 4
    },
    {
      id: "abstract",
      name: "Abstract Concepts",
      level: 1,
      progress: 20,
      nextMilestone: "Composition Fundamentals",
      exercises: 6,
      completed: 1
    }
  ];

  const certifications = [
    {
      id: "1",
      title: "Professional Portrait Artist",
      issuer: "Lovable Academy",
      level: "Advanced",
      earned: true,
      date: "2024-01-15",
      badge: "🎖️"
    },
    {
      id: "2",
      title: "Commercial Photography",
      issuer: "Lovable Academy",
      level: "Intermediate",
      earned: false,
      progress: 80,
      badge: "🏆"
    },
    {
      id: "3",
      title: "Fine Art Specialist",
      issuer: "Lovable Academy",
      level: "Expert",
      earned: false,
      progress: 30,
      badge: "🎨"
    }
  ];

  const challenges = [
    {
      id: "1",
      title: "Daily Portrait Challenge",
      description: "Create a new portrait every day for 30 days",
      participants: 1200,
      deadline: "Dec 31, 2024",
      difficulty: "Intermediate",
      reward: "Portfolio Feature"
    },
    {
      id: "2",
      title: "Color Harmony Week",
      description: "Explore different color schemes in your artwork",
      participants: 800,
      deadline: "Dec 20, 2024",
      difficulty: "Beginner",
      reward: "Expert Feedback"
    },
    {
      id: "3",
      title: "Abstract Expression",
      description: "Push the boundaries of abstract art creation",
      participants: 600,
      deadline: "Jan 15, 2025",
      difficulty: "Advanced",
      reward: "Gallery Exhibition"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
          Skill Development Hub
        </h2>
        <p className="text-foreground/70">
          Track your progress, earn certifications, and challenge yourself
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Skills Progress */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-gold-400" />
                <span>Your Skills Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedSkill === skill.id 
                        ? "border-gold-500/50 bg-gold-500/10" 
                        : "border-border hover:border-gold-500/30"
                    }`}
                    onClick={() => setSelectedSkill(skill.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{skill.name}</h3>
                      <Badge variant="outline" className="border-gold-500/30 text-gold-400">
                        Level {skill.level}
                      </Badge>
                    </div>
                    
                    <Progress value={skill.progress} className="mb-2" />
                    
                    <div className="flex items-center justify-between text-sm text-foreground/60">
                      <span>Next: {skill.nextMilestone}</span>
                      <span>{skill.completed}/{skill.exercises} exercises</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Challenges */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-gold-400" />
                <span>Active Challenges</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium mb-1">{challenge.title}</h3>
                        <p className="text-sm text-foreground/70">{challenge.description}</p>
                      </div>
                      <Badge variant="outline">{challenge.difficulty}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-foreground/60 mb-3">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{challenge.participants}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{challenge.deadline}</span>
                        </span>
                      </div>
                      <span className="text-gold-400">🏆 {challenge.reward}</span>
                    </div>
                    
                    <Button size="sm" className="bg-gold-500 hover:bg-gold-600 text-black">
                      Join Challenge
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-gold-400" />
                <span>Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className={`p-4 rounded-lg border ${
                      cert.earned ? "border-gold-500/50 bg-gold-500/10" : "border-border"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{cert.badge}</span>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm mb-1">{cert.title}</h3>
                        <p className="text-xs text-foreground/60 mb-2">{cert.issuer}</p>
                        
                        {cert.earned ? (
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-gold-400" />
                            <span className="text-xs text-gold-400">Earned {cert.date}</span>
                          </div>
                        ) : (
                          <div>
                            <Progress value={cert.progress} className="mb-2" />
                            <span className="text-xs text-foreground/60">{cert.progress}% complete</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-gold-400" />
                <span>Your Stats</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { label: "Tutorials Completed", value: "24", icon: BookOpen },
                  { label: "Skills Mastered", value: "3", icon: Target },
                  { label: "Challenges Won", value: "7", icon: TrendingUp },
                  { label: "Community Rank", value: "#156", icon: Users }
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <stat.icon className="w-4 h-4 text-gold-400" />
                      <span className="text-sm">{stat.label}</span>
                    </div>
                    <span className="font-medium text-gold-400">{stat.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
