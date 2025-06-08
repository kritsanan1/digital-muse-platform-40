
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Star, MessageCircle, ThumbsUp, ThumbsDown, Eye, 
  Award, User, Clock, Filter, Heart, Share2, 
  ChevronDown, ChevronUp, Send, Image
} from "lucide-react";

export const ArtCritique = () => {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [expandedReview, setExpandedReview] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("recent");

  const critiques = [
    {
      id: "1",
      artwork: {
        title: "Ethereal Portrait",
        artist: "Sarah Chen",
        image: "https://i.postimg.cc/3rn5hbYH/LINE-ALBUM-2025-5-30-250607-22.jpg"
      },
      reviewer: {
        name: "Marcus Rodriguez",
        title: "Senior Art Director",
        verified: true,
        avatar: null
      },
      rating: 4.5,
      categories: {
        composition: 5,
        technique: 4,
        creativity: 5,
        execution: 4
      },
      review: "Exceptional use of lighting and shadow to create depth and emotion. The composition follows the rule of thirds perfectly, and the model's expression is captivating. Minor adjustments to color grading could enhance the overall mood.",
      helpful: 24,
      timestamp: "2 days ago",
      featured: true
    },
    {
      id: "2",
      artwork: {
        title: "Urban Elegance",
        artist: "Elena Kozlov",
        image: "https://i.postimg.cc/ZKnk5F5v/LINE-ALBUM-2025-5-30-250607-23.jpg"
      },
      reviewer: {
        name: "James Park",
        title: "Gallery Curator",
        verified: true,
        avatar: null
      },
      rating: 4.2,
      categories: {
        composition: 4,
        technique: 4,
        creativity: 5,
        execution: 4
      },
      review: "Bold street photography that captures the essence of urban life. The contrast between subject and environment is masterfully executed. The timing and decisive moment are excellent.",
      helpful: 18,
      timestamp: "3 days ago",
      featured: false
    }
  ];

  const reviewSubmissions = [
    {
      title: "Abstract Concept #7",
      artist: "David Kim",
      image: "https://i.postimg.cc/yxrbZt8g/LINE-ALBUM-2025-5-30-250607-27.jpg",
      submittedDate: "Today",
      status: "Pending Review",
      reviewsReceived: 0
    },
    {
      title: "Modern Beauty Study",
      artist: "Aria Thompson", 
      image: "https://i.postimg.cc/769cxfvN/LINE-ALBUM-2025-5-30-250607-26.jpg",
      submittedDate: "Yesterday",
      status: "Under Review",
      reviewsReceived: 2
    }
  ];

  const expertReviewers = [
    {
      name: "Dr. Catherine Mills",
      title: "Art History Professor",
      specialty: "Classical & Contemporary Analysis",
      reviews: 156,
      rating: 4.9,
      verified: true
    },
    {
      name: "Alex Turner",
      title: "Commercial Photography Director",
      specialty: "Technical & Commercial Critique",
      reviews: 89,
      rating: 4.7,
      verified: true
    }
  ];

  const toggleReviewExpansion = (id: string) => {
    setExpandedReview(expandedReview === id ? null : id);
  };

  return (
    <div className="space-y-8">
      {/* Critique Header */}
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
          Professional{" "}
          <span className="gradient-text">Art Critique</span>
        </h2>
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
          Get professional feedback from industry experts, curators, and fellow artists. 
          Improve your craft through constructive critique and peer review.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
          <Image className="w-4 h-4 mr-2" />
          Submit for Review
        </Button>
        <Button variant="outline" className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10">
          <Award className="w-4 h-4 mr-2" />
          Become a Reviewer
        </Button>
      </div>

      {/* Featured Reviews */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-playfair font-bold gradient-text">Featured Critiques</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-foreground/60">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-black/20 border border-white/10 rounded px-3 py-1 text-sm text-foreground"
            >
              <option value="recent">Most Recent</option>
              <option value="helpful">Most Helpful</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {critiques.map(critique => (
          <Card key={critique.id} className="glass-card overflow-hidden">
            <div className="md:flex">
              {/* Artwork Preview */}
              <div className="md:w-1/3">
                <img 
                  src={critique.artwork.image} 
                  alt={critique.artwork.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>

              {/* Critique Content */}
              <div className="md:w-2/3 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-playfair font-bold text-foreground mb-1">
                      {critique.artwork.title}
                    </h4>
                    <p className="text-gold-400 text-sm">by {critique.artwork.artist}</p>
                  </div>
                  {critique.featured && (
                    <Badge variant="outline" className="border-gold-500/30 text-gold-400">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-foreground">{critique.reviewer.name}</span>
                      {critique.reviewer.verified && (
                        <Award className="w-4 h-4 text-gold-400" />
                      )}
                    </div>
                    <span className="text-sm text-gold-400">{critique.reviewer.title}</span>
                  </div>
                  <div className="flex items-center space-x-1 ml-auto">
                    <Clock className="w-4 h-4 text-foreground/60" />
                    <span className="text-sm text-foreground/60">{critique.timestamp}</span>
                  </div>
                </div>

                {/* Rating Categories */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {Object.entries(critique.categories).map(([category, rating]) => (
                    <div key={category} className="text-center">
                      <div className="text-sm text-foreground/60 capitalize">{category}</div>
                      <div className="flex items-center justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < rating ? "text-gold-400 fill-current" : "text-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-gold-400">{rating}/5</div>
                    </div>
                  ))}
                </div>

                {/* Review Text */}
                <div className="mb-4">
                  <p className={`text-foreground/80 leading-relaxed ${
                    expandedReview === critique.id ? "" : "line-clamp-3"
                  }`}>
                    {critique.review}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleReviewExpansion(critique.id)}
                    className="text-gold-400 hover:bg-gold-500/10 p-0 h-auto mt-2"
                  >
                    {expandedReview === critique.id ? (
                      <><ChevronUp className="w-4 h-4 mr-1" /> Show Less</>
                    ) : (
                      <><ChevronDown className="w-4 h-4 mr-1" /> Read More</>
                    )}
                  </Button>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-gold-400">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {critique.helpful}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-gold-400">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Reply
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-gold-400">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-gold-400">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Submit for Review Section */}
      <Card className="glass-card p-8">
        <h3 className="text-2xl font-playfair font-bold gradient-text mb-6 text-center">
          Submit Your Work for Professional Critique
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gold-400 mb-2">
                Upload Artwork
              </label>
              <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-gold-400/50 transition-colors cursor-pointer">
                <Image className="w-12 h-12 text-gold-400 mx-auto mb-3" />
                <p className="text-foreground/70">Click to upload or drag and drop</p>
                <p className="text-sm text-foreground/50">PNG, JPG up to 10MB</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gold-400 mb-2">
                Artist Statement (Optional)
              </label>
              <textarea
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold-400/50 h-32"
                placeholder="Describe your creative process, inspiration, or specific areas you'd like feedback on..."
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gold-400 mb-3">Review Preferences</h4>
              <div className="space-y-3">
                {["Technical Analysis", "Artistic Interpretation", "Commercial Viability", "Emotional Impact"].map(type => (
                  <label key={type} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-white/20 text-gold-400 focus:ring-gold-400/50" />
                    <span className="text-sm text-foreground">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gold-400 mb-3">Reviewer Level</h4>
              <div className="space-y-2">
                {[
                  { level: "Community Review", description: "Free peer feedback from fellow artists" },
                  { level: "Professional Review", description: "$25 - Expert feedback from industry professionals" },
                  { level: "Master Critique", description: "$75 - Comprehensive analysis from renowned masters" }
                ].map(option => (
                  <label key={option.level} className="flex items-start space-x-3 p-3 border border-white/10 rounded-lg hover:border-gold-400/30 cursor-pointer">
                    <input type="radio" name="reviewLevel" className="mt-1 text-gold-400 focus:ring-gold-400/50" />
                    <div>
                      <div className="font-medium text-foreground">{option.level}</div>
                      <div className="text-sm text-foreground/60">{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
              <Send className="w-4 h-4 mr-2" />
              Submit for Review
            </Button>
          </div>
        </div>
      </Card>

      {/* Expert Reviewers */}
      <Card className="glass-card p-6">
        <h3 className="text-xl font-playfair font-bold gradient-text mb-6">Expert Reviewers</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {expertReviewers.map(reviewer => (
            <div key={reviewer.name} className="flex items-center space-x-4 p-4 border border-white/10 rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-foreground">{reviewer.name}</h4>
                  <Award className="w-4 h-4 text-gold-400" />
                </div>
                <p className="text-sm text-gold-400 mb-1">{reviewer.title}</p>
                <p className="text-xs text-foreground/60 mb-2">{reviewer.specialty}</p>
                <div className="flex items-center space-x-4 text-xs text-foreground/60">
                  <span>{reviewer.reviews} reviews</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-gold-400 fill-current" />
                    <span>{reviewer.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* My Submissions */}
      <Card className="glass-card p-6">
        <h3 className="text-xl font-playfair font-bold gradient-text mb-6">My Submissions</h3>
        <div className="space-y-4">
          {reviewSubmissions.map(submission => (
            <div key={submission.title} className="flex items-center space-x-4 p-4 border border-white/10 rounded-lg">
              <img 
                src={submission.image} 
                alt={submission.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{submission.title}</h4>
                <p className="text-sm text-gold-400">by {submission.artist}</p>
                <div className="flex items-center space-x-4 text-xs text-foreground/60">
                  <span>Submitted {submission.submittedDate}</span>
                  <span>{submission.reviewsReceived} reviews received</span>
                </div>
              </div>
              <Badge 
                variant="outline" 
                className={
                  submission.status === "Pending Review" 
                    ? "border-yellow-500/30 text-yellow-400"
                    : "border-blue-500/30 text-blue-400"
                }
              >
                {submission.status}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
