
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, MessageCircle, Heart, Share2, Award, 
  Calendar, MapPin, Star, Eye, Briefcase, 
  Network, UserPlus, Send, Filter, Search
} from "lucide-react";

export const CommunityHub = () => {
  const [activeTab, setActiveTab] = useState("network");

  const networkingEvents = [
    {
      id: "1",
      title: "Digital Art Professionals Meetup",
      date: "2024-02-15",
      location: "Virtual Event",
      attendees: 245,
      type: "Networking",
      description: "Connect with fellow digital artists and industry professionals.",
      host: "Professional Artists Network"
    },
    {
      id: "2", 
      title: "Portfolio Review Session",
      date: "2024-02-20",
      location: "San Francisco, CA",
      attendees: 89,
      type: "Workshop",
      description: "Get professional feedback on your portfolio from industry experts.",
      host: "Art Directors Guild"
    }
  ];

  const collaborationOpportunities = [
    {
      id: "1",
      title: "Fashion Photography Series",
      artist: "Sarah Chen",
      skills: ["Portrait", "Fashion", "Studio Lighting"],
      seeking: ["Makeup Artist", "Stylist", "Model"],
      budget: "$2,000-5,000",
      timeline: "4 weeks",
      applications: 12
    },
    {
      id: "2",
      title: "Abstract Art Exhibition",
      artist: "Marcus Rodriguez", 
      skills: ["Abstract", "Digital Art", "Conceptual"],
      seeking: ["Co-curator", "Gallery Space", "Marketing"],
      budget: "Revenue Share",
      timeline: "8 weeks",
      applications: 8
    }
  ];

  const professionalConnections = [
    {
      name: "Elena Kozlov",
      title: "Senior Art Director",
      company: "Creative Studio Inc",
      specialty: "Conceptual Photography",
      connections: 1240,
      verified: true,
      status: "Available for Projects"
    },
    {
      name: "James Park",
      title: "Gallery Curator",
      company: "Modern Art Gallery",
      specialty: "Fine Art Curation",
      connections: 890,
      verified: true,
      status: "Seeking Artists"
    }
  ];

  const discussions = [
    {
      id: "1",
      title: "Best practices for AI-assisted portrait photography",
      author: "Sarah Chen",
      replies: 24,
      likes: 156,
      category: "Technique",
      lastActivity: "2 hours ago"
    },
    {
      id: "2",
      title: "How to price commercial photography work",
      author: "Marcus Rodriguez",
      replies: 18,
      likes: 89,
      category: "Business",
      lastActivity: "4 hours ago"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Community Header */}
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
          Professional{" "}
          <span className="gradient-text">Community</span>
        </h2>
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
          Connect, collaborate, and grow with a community of professional artists, 
          curators, and creative industry experts.
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { label: "Active Artists", value: "12,450", icon: Users },
          { label: "Professional Networks", value: "1,240", icon: Network },
          { label: "Collaborations", value: "890", icon: Briefcase },
          { label: "Events This Month", value: "24", icon: Calendar }
        ].map(stat => (
          <Card key={stat.label} className="glass-card p-6 text-center">
            <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gold-400 mb-1">{stat.value}</div>
            <div className="text-sm text-foreground/60">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Community Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="network">Network</TabsTrigger>
          <TabsTrigger value="collaborate">Collaborate</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
        </TabsList>

        <TabsContent value="network" className="space-y-6">
          {/* Search and Filter */}
          <Card className="glass-card p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold-400" />
                <input
                  type="text"
                  placeholder="Search professionals by skill, company, or location..."
                  className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold-400/50"
                />
              </div>
              <Button variant="outline" className="border-gold-500/30 text-gold-400">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Art Directors", "Curators", "Photographers", "Digital Artists", "Gallery Owners"].map(role => (
                <Badge key={role} variant="outline" className="cursor-pointer hover:bg-gold-500/10">
                  {role}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Professional Connections */}
          <div className="grid md:grid-cols-2 gap-6">
            {professionalConnections.map(person => (
              <Card key={person.name} className="glass-card p-6 premium-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-foreground">{person.name}</h3>
                        {person.verified && (
                          <Award className="w-4 h-4 text-gold-400" />
                        )}
                      </div>
                      <p className="text-sm text-gold-400">{person.title}</p>
                      <p className="text-xs text-foreground/60">{person.company}</p>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className="text-xs border-green-500/30 text-green-400"
                  >
                    {person.status}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-foreground/60">Specialty: </span>
                    <span className="text-sm text-foreground">{person.specialty}</span>
                  </div>
                  <div>
                    <span className="text-sm text-foreground/60">Connections: </span>
                    <span className="text-sm text-foreground">{person.connections.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-4">
                  <Button size="sm" className="bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                  <Button size="sm" variant="outline" className="border-gold-500/30 text-gold-400">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="collaborate" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {collaborationOpportunities.map(project => (
              <Card key={project.id} className="glass-card p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-playfair font-bold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gold-400 text-sm">by {project.artist}</p>
                    </div>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-400">
                      {project.applications} applicants
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gold-400 mb-2">Skills Offered</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.skills.map(skill => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gold-400 mb-2">Seeking</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.seeking.map(need => (
                        <Badge key={need} variant="outline" className="text-xs border-gold-500/30 text-gold-400">
                          {need}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-foreground/60">Budget: </span>
                      <span className="text-foreground">{project.budget}</span>
                    </div>
                    <div>
                      <span className="text-foreground/60">Timeline: </span>
                      <span className="text-foreground">{project.timeline}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                      <Send className="w-4 h-4 mr-2" />
                      Apply
                    </Button>
                    <Button size="sm" variant="outline" className="border-gold-500/30 text-gold-400">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-gold-500/30 text-gold-400">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Post Collaboration */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-bold gradient-text mb-4">
              Post a Collaboration Opportunity
            </h3>
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
              Create Collaboration Post
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {networkingEvents.map(event => (
              <Card key={event.id} className="glass-card p-6 premium-hover">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-playfair font-bold text-foreground">
                      {event.title}
                    </h3>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-400">
                      {event.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-foreground/70 text-sm">{event.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gold-400" />
                      <span className="text-foreground/70">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gold-400" />
                      <span className="text-foreground/70">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gold-400" />
                      <span className="text-foreground/70">{event.attendees} attending</span>
                    </div>
                  </div>

                  <div className="text-xs text-foreground/60">
                    Hosted by {event.host}
                  </div>

                  <Button size="sm" className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                    Join Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="discussions" className="space-y-6">
          <div className="space-y-4">
            {discussions.map(discussion => (
              <Card key={discussion.id} className="glass-card p-6 premium-hover">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {discussion.category}
                      </Badge>
                      <span className="text-xs text-foreground/60">{discussion.lastActivity}</span>
                    </div>
                    
                    <h3 className="text-lg font-medium text-foreground mb-2 hover:text-gold-400 cursor-pointer">
                      {discussion.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-sm text-foreground/60">
                      <span>by {discussion.author}</span>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{discussion.likes} likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="glass-card p-6">
            <h3 className="text-lg font-playfair font-bold gradient-text mb-4">
              Start a Discussion
            </h3>
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
              New Discussion
            </Button>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
