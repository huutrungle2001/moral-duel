import { Sparkles, Award, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Community = () => {
  const mockPosts = [
    {
      id: 1,
      author: "0xABC...123",
      avatar: "A1",
      content: "Today I earned 240 tokens by defending the importance of privacy in relationships. Logic wins! 🧠",
      type: "reward",
      time: "2 hours ago"
    },
    {
      id: 2,
      author: "0xDEF...456",
      avatar: "D2",
      content: "Mini moral game: If you could read your partner's mind for one day, would you? The Oracle says NO. Privacy is sacred.",
      type: "game",
      time: "5 hours ago"
    },
    {
      id: 3,
      author: "0xGHI...789",
      avatar: "G3",
      content: "Just unlocked 'Bậc thầy lý lẽ' badge! My arguments on workplace ethics resonated with the community 💬",
      type: "achievement",
      time: "1 day ago"
    },
    {
      id: 4,
      author: "0xJKL...012",
      avatar: "J4",
      content: "\"Empathy without boundaries becomes self-destruction.\" — A reflection from today's debates",
      type: "quote",
      time: "1 day ago"
    },
    {
      id: 5,
      author: "0xMNO...345",
      avatar: "M5",
      content: "Created a case about elderly employment rights that got 150+ participants! Bonus rewards incoming 🔥",
      type: "trending",
      time: "2 days ago"
    },
    {
      id: 6,
      author: "0xPQR...678",
      avatar: "P6",
      content: "Mini moral game: Should companies prioritize profit over employee wellbeing? Cast your vote in Discover!",
      type: "game",
      time: "2 days ago"
    }
  ];

  const getPostIcon = (type: string) => {
    switch (type) {
      case "reward":
        return <Award className="w-5 h-5 text-accent" />;
      case "achievement":
        return <Sparkles className="w-5 h-5 text-primary" />;
      case "game":
        return <Sparkles className="w-5 h-5 text-primary-glow" />;
      case "trending":
        return <Heart className="w-5 h-5 text-destructive" />;
      default:
        return <Sparkles className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getPostBadge = (type: string) => {
    const badges: Record<string, { label: string; className: string }> = {
      reward: { label: "Reward", className: "bg-accent/20 text-accent-foreground border-accent" },
      achievement: { label: "Achievement", className: "bg-primary/20 text-primary-foreground border-primary" },
      game: { label: "Game", className: "bg-primary-glow/20 text-primary border-primary-glow" },
      trending: { label: "Trending", className: "bg-destructive/20 text-destructive-foreground border-destructive" },
      quote: { label: "Reflection", className: "bg-muted text-muted-foreground border-border" }
    };
    return badges[type] || badges.quote;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">Community</h1>
          <p className="text-lg text-muted-foreground">
            A positive space for sharing insights, mini games, and celebrating achievements
          </p>
        </div>

        {/* Info Banner */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-primary/10 to-primary-glow/10 border-primary/20">
          <div className="flex items-start gap-4">
            <Sparkles className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Welcome to the Community Feed</h3>
              <p className="text-muted-foreground leading-relaxed">
                This is a reply-free showcase area where members share their earnings, moral reflections, 
                mini games, and achievements. No debates here—just inspiration and celebration! 🎉
              </p>
            </div>
          </div>
        </Card>

        {/* Posts Feed */}
        <div className="max-w-3xl mx-auto space-y-4">
          {mockPosts.map((post) => {
            const badge = getPostBadge(post.type);
            return (
              <Card key={post.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <Avatar className="w-12 h-12 flex-shrink-0">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-semibold">
                      {post.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-medium text-foreground">
                          {post.author}
                        </span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{post.time}</span>
                      </div>
                      {getPostIcon(post.type)}
                    </div>

                    <p className="text-foreground leading-relaxed">{post.content}</p>

                    <Badge variant="outline" className={badge.className}>
                      {badge.label}
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Empty State Message */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            More posts coming soon! Keep participating in duels to see your achievements here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
