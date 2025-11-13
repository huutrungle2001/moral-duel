import { Link } from "react-router-dom";
import { Sparkles, Plus, TrendingUp, Vote, Coins, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import CaseCard from "@/components/CaseCard";
import { mockCases } from "@/lib/mockData";

const Index = () => {
  const trendingCases = mockCases.filter(c => c.isTrending);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Where Logic Meets Morality</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.2] tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent drop-shadow-lg">
                Play to Think,
              </span>
              <br />
              <span className="text-foreground drop-shadow-sm">Think to Earn</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-[1.8]">
              <Vote className="inline w-5 h-5 mr-2 text-primary" />
              Explore moral dilemmas, vote on arguments, and earn rewards.
              <br />
              Your voice shapes the future of moral discourse.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/discover">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground text-lg px-8 gap-2 shadow-lg">
                  <Brain className="w-5 h-5" />
                  Join the vote now, show your intelligence!
                </Button>
              </Link>
              <Link to="/create">
                <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-accent-foreground text-lg px-8 gap-2 shadow-lg">
                  <Plus className="w-5 h-5" />
                  Create a Trend & Go Viral
                </Button>
              </Link>
            </div>

            <div className="pt-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                <Coins className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                <p className="text-foreground font-bold text-lg">
                  Earn up to <span className="text-2xl text-yellow-600 dark:text-yellow-400">100,000 tokens</span> by choosing the winning side!
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                🔥 Create trending cases to earn massive bonus rewards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Morality isn't black and white—it's reasoning, empathy, and consequences. We gamify philosophical debates, 
              reward logic, and challenge perspectives. Join where your voice shapes the future of moral discourse.
            </p>
          </div>
        </div>
      </section>

      {/* Trending Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold text-foreground">Trending Duels</h2>
            </div>
            <Link to="/discover">
              <Button variant="ghost" className="gap-2">
                View All
                <span className="text-lg">→</span>
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {trendingCases.map((caseData) => (
                <div key={caseData.id} className="flex-none w-[350px] snap-start">
                  <CaseCard caseData={caseData} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground drop-shadow-sm">Ready to Challenge Your Thinking?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of thinkers debating the toughest moral questions. Your brilliant perspective could earn you massive rewards!
          </p>
          <Link to="/discover">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-lg px-10 py-6 shadow-xl gap-2">
              <Sparkles className="w-5 h-5" />
              Start Your First Duel & Earn Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
