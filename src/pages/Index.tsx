import { Link } from "react-router-dom";
import { Sparkles, Plus, TrendingUp, Vote, Coins, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import CaseCard from "@/components/CaseCard";
import { mockCases } from "@/lib/mockData";
import logicEmotionLight from "@/assets/logic-emotion-light.png";
import logicEmotionDark from "@/assets/logic-emotion-dark.png";

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
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.3] tracking-tight mb-8">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent dark:from-primary dark:via-primary-glow dark:to-accent bg-clip-text text-transparent drop-shadow-lg">
                Play to Think,
              </span>
              <br />
              <span className="block mt-4 text-foreground drop-shadow-sm">Think to Earn</span>
            </h1>
            
            <p className="text-xl max-w-2xl mx-auto leading-[1.9] font-serif italic text-foreground/90">
              Explore moral dilemmas, vote on arguments, and earn rewards.
              <br />
              Your voice shapes the future of moral discourse.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/discover">
                <Button size="lg" variant="gradientAccent" className="text-lg px-8 gap-2">
                  <Brain className="w-5 h-5" />
                  Join the vote now, show your intelligence!
                </Button>
              </Link>
              <Link to="/create">
                <Button size="lg" variant="gradientAccent" className="text-lg px-8 gap-2">
                  <Plus className="w-5 h-5" />
                  Create a Trend & Go Viral
                </Button>
              </Link>
            </div>

            <div className="pt-10 space-y-3">
              <div className="relative inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 dark:from-amber-950/40 dark:via-orange-950/40 dark:to-amber-950/40 border border-amber-200/60 dark:border-amber-800/60 shadow-[0_8px_30px_rgb(251,146,60,0.12)] dark:shadow-[0_8px_30px_rgb(251,146,60,0.25)] hover:shadow-[0_12px_40px_rgb(251,146,60,0.2)] dark:hover:shadow-[0_12px_40px_rgb(251,146,60,0.35)] transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 dark:via-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                
                <div className="relative z-10">
                  <Coins className="w-7 h-7 text-amber-600 dark:text-amber-400 transition-transform duration-500 group-hover:rotate-12" />
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 relative z-10">
                  <p className="text-foreground font-semibold text-base sm:text-lg">
                    Earn up to
                  </p>
                  <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-400 dark:to-amber-500 bg-clip-text text-transparent [text-shadow:_0_2px_20px_rgb(251_146_60_/_0.3)]">
                    100,000 tokens
                  </span>
                  <p className="text-foreground font-semibold text-base sm:text-lg">
                    by choosing the winning side!
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                🔥 Create trending cases to earn <span className="font-semibold text-primary">massive bonus rewards</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Image - Light Mode */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat dark:hidden"
          style={{ backgroundImage: `url(${logicEmotionLight})` }}
        >
          <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
        </div>
        
        {/* Background Image - Dark Mode */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden dark:block"
          style={{ backgroundImage: `url(${logicEmotionDark})` }}
        >
          <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-widest uppercase
              text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-accent
              drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] dark:drop-shadow-[0_4px_20px_rgba(0,0,0,1)]">
              Our Mission
            </h2>
            
            <div className="space-y-6 py-4">
              <p className="text-2xl md:text-4xl font-display font-bold leading-tight
                text-foreground dark:text-white
                drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] dark:drop-shadow-[0_4px_20px_rgba(0,0,0,1)]">
                Where <span className="text-primary dark:text-primary-glow drop-shadow-[0_0_24px_rgba(92,189,185,0.9)]">LOGIC</span> meets <span className="text-accent dark:text-accent drop-shadow-[0_0_24px_rgba(251,113,133,0.9)]">EMOTION</span>
              </p>
              <p className="text-xl md:text-2xl font-display font-semibold leading-relaxed 
                text-foreground dark:text-white/95
                drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)] dark:drop-shadow-[0_3px_16px_rgba(0,0,0,1)]">
                Where reasoning confronts empathy, and every voice shapes moral truth.
              </p>
              <p className="text-lg md:text-xl font-display leading-relaxed 
                text-foreground/90 dark:text-white/90
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] dark:drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
                Think deeper. Debate smarter. Earn your influence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Cases */}
      <section className="py-16 bg-muted/30 dark:bg-gradient-to-b dark:from-background dark:via-muted/10 dark:to-background relative overflow-hidden">
        <div className="absolute inset-0 dark:opacity-100 opacity-0" style={{ background: 'var(--gradient-galaxy)' }} />
        <div className="container mx-auto px-4 relative z-10">
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
            <Button size="lg" variant="gradientAccent" className="text-lg px-10 py-6 shadow-xl gap-2">
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
