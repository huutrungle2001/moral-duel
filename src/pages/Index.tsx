import { Link } from "react-router-dom";
import { Sparkles, Plus, TrendingUp } from "lucide-react";
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
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Play to Think,
              </span>
              <br />
              <span className="text-foreground">Think to Earn</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Turn controversial dilemmas into logical duels. Vote, argue, and earn rewards based on AI verdicts. 
              Your voice shapes the future of moral discourse.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/discover">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-lg px-8 gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Join the Duel
                </Button>
              </Link>
              <Link to="/create">
                <Button size="lg" variant="outline" className="text-lg px-8 gap-2 border-2">
                  <Plus className="w-5 h-5" />
                  Create a Trend
                </Button>
              </Link>
            </div>

            <div className="pt-8">
              <p className="text-accent font-semibold text-lg">
                💰 Vote and comment to earn up to <span className="text-2xl">5,000</span> tokens
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Create trending cases to earn bonus rewards
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
              We believe morality isn't black and white—it's a spectrum of reasoning, empathy, and consequences. 
              Moral Oracle gamifies philosophical debates, rewarding thoughtful arguments and challenging perspectives. 
              Join a community where your logic matters, your voice is heard, and critical thinking is celebrated.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingCases.map((caseData) => (
              <CaseCard key={caseData.id} caseData={caseData} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold text-foreground">Ready to Challenge Your Thinking?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of thinkers debating the toughest moral questions. Your perspective could earn you rewards.
          </p>
          <Link to="/discover">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-lg px-8">
              Start Debating Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
