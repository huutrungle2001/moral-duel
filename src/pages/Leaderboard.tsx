import { useEffect } from "react";
import { Trophy, Medal, Award, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import confetti from "canvas-confetti";

interface LeaderboardUser {
  rank: number;
  name: string;
  points: number;
  wins: number;
  badge: string;
}

const leaderboardData: LeaderboardUser[] = [
  { rank: 1, name: "PhilosopherKing", points: 15240, wins: 127, badge: "🧠 Nhà hiền triết" },
  { rank: 2, name: "LogicMaster", points: 14890, wins: 115, badge: "💬 Bậc thầy lý lẽ" },
  { rank: 3, name: "MoralGuru", points: 13650, wins: 98, badge: "🔥 Người tạo trend" },
  { rank: 4, name: "DebateChamp", points: 12340, wins: 89, badge: "💬 Bậc thầy lý lẽ" },
  { rank: 5, name: "ThinkTankPro", points: 11890, wins: 82, badge: "🧠 Nhà hiền triết" },
  { rank: 6, name: "EthicsExpert", points: 10560, wins: 76, badge: "💬 Bậc thầy lý lẽ" },
  { rank: 7, name: "WisdomSeeker", points: 9870, wins: 71, badge: "🔥 Người tạo trend" },
  { rank: 8, name: "TruthFinder", points: 8920, wins: 65, badge: "🧠 Nhà hiền triết" },
  { rank: 9, name: "ReasonWarrior", points: 8340, wins: 58, badge: "💬 Bậc thầy lý lẽ" },
  { rank: 10, name: "JusticeSeeker", points: 7650, wins: 52, badge: "🔥 Người tạo trend" },
];

const Leaderboard = () => {
  useEffect(() => {
    // Trigger confetti on page load
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-8 h-8 text-yellow-500" />;
      case 2:
        return <Trophy className="w-7 h-7 text-gray-400" />;
      case 3:
        return <Medal className="w-7 h-7 text-amber-600" />;
      default:
        return <Award className="w-6 h-6 text-accent" />;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-500/50";
      case 2:
        return "bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400/50";
      case 3:
        return "bg-gradient-to-r from-amber-600/20 to-orange-500/20 border-amber-600/50";
      default:
        return "bg-card border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Hall of Champions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Leaderboard
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrate the brightest minds who dominate the moral arena with logic, empathy, and wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {leaderboardData.map((user) => (
              <Card key={user.rank} className={`${getRankBg(user.rank)} border-2 transition-all hover:shadow-lg`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    {/* Rank Icon */}
                    <div className="flex-shrink-0">
                      {getRankIcon(user.rank)}
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-4 flex-1">
                      <Avatar className="w-12 h-12 border-2 border-primary/20">
                        <AvatarFallback className="bg-primary/10 text-primary font-bold">
                          {user.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg text-foreground">{user.name}</h3>
                          <span className="text-sm">{user.badge}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {user.wins} victories • Rank #{user.rank}
                        </p>
                      </div>
                    </div>

                    {/* Points */}
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                        {user.points.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">moral points</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Want to see your name here?</p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
              Start Competing Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
