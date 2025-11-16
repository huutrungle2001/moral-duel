import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const slides = [
    {
      title: "Hook & Introduction",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-4 mb-8 opacity-75">
            <div className="bg-destructive/20 border-2 border-destructive/40 p-4 rounded-lg text-destructive font-bold text-center">
              "You're WRONG!"
            </div>
            <div className="bg-destructive/20 border-2 border-destructive/40 p-4 rounded-lg text-destructive font-bold text-center">
              "Stupid opinion"
            </div>
            <div className="bg-destructive/20 border-2 border-destructive/40 p-4 rounded-lg text-destructive font-bold text-center">
              "Delete this"
            </div>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-xl leading-relaxed">
              Hello everyone, I'm Mai, non-tech founder of this project, team leader of <span className="font-bold text-primary">Bo'oh'o'wa'er</span>. 
              As you can see, every single day, millions of people go to online platforms like Reddit, Facebook, X, to debate.
            </p>

            <Card className="p-6 bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/30">
              <p className="text-lg font-semibold text-center">
                And the majority of it looks like this. It's emotional, it's toxic, and at the end of the day, it creates <span className="text-destructive font-bold">zero value</span>.
              </p>
            </Card>

            <p className="text-lg leading-relaxed">
              Online platforms love drama, not logic. Why? Because people love conflict, and the simple certainty of knowing who to blame.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border-2 border-primary/30">
              <p className="text-xl font-semibold mb-4">But have you ever posted a comment online and got hundreds of upvotes or 'likes'?</p>
              <p className="text-lg">It feels pretty good, doesn't it? That little rush of validation is addictive too. "Oh, wow, people actually agree with me."</p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/20 via-primary-glow/10 to-accent/20 border-2 border-primary/50 shadow-xl">
              <p className="text-2xl font-bold text-center mb-4">What if you got rewarded for how well you think, not just how loud you shout?</p>
              <p className="text-xl text-center">What if we could monetize critical thinking?</p>
            </Card>

            <div className="text-center py-6">
              <p className="text-3xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                And with that inspiration, our Moral Oracle was born.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The Solution (The Product)",
      content: (
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <img 
              src={isDark ? logoDark : logoLight} 
              alt="Moral Oracle" 
              className="w-32 h-32 mx-auto" 
            />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Moral Oracle
            </h2>
            <p className="text-2xl font-serif italic text-primary">Play to Think – Think to Earn</p>
          </div>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/40">
            <p className="text-2xl font-bold text-center">
              The world's first <span className="text-primary">'Wisdom Market'</span>
            </p>
            <p className="text-xl text-center mt-2">We turn chaotic, pointless arguments into a real strategy game.</p>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8">It works in 3 simple steps:</h3>
            
            <Card className="p-6 bg-card border-2 border-primary/30 hover:border-primary/60 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-primary">THE DILEMMA</h4>
                  <p className="text-lg">First, you're presented with a tough, real-world and controversial scenario.</p>
                  <p className="text-sm text-muted-foreground mt-2 italic">(e.g., "Should companies fire older employees to cut costs?")</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-2 border-accent/30 hover:border-accent/60 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-accent">THE DEBATE</h4>
                  <p className="text-lg">Second, you pick a side - YES or NO - and write a short, compelling argument to defend your logic, upvote for at least 3 compelling comments.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-2 border-primary-glow/30 hover:border-primary-glow/60 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-glow to-accent flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-primary-glow">THE VERDICT</h4>
                  <p className="text-lg mb-3">And third, the most important part:</p>
                  <Card className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary">
                    <p className="text-xl font-bold text-center">The crowd does NOT decide who wins. Our AI Judge does.</p>
                  </Card>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 dark:from-amber-950/40 dark:via-orange-950/40 dark:to-amber-950/40 border-2 border-amber-200 dark:border-amber-800">
            <p className="text-lg text-center">
              You get paid from the prize pool, via <span className="font-bold text-primary">smart contract</span>, for two things: 
              <span className="font-bold text-accent"> siding with the AI's final verdict</span> or 
              <span className="font-bold text-primary-glow"> writing a highly-upvoted comment</span>.
            </p>
          </Card>
        </div>
      )
    },
    {
      title: "The Core Technology",
      content: (
        <div className="space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What's Under the Hood?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/50 hover:shadow-xl transition-all">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-4xl">
                  ⚖️
                </div>
                <h3 className="text-2xl font-bold text-primary">AI Referee</h3>
                <p className="text-base leading-relaxed">
                  Our <span className="font-bold">core tech</span>, completely 'firewalled' from the crowd to guarantee absolute fairness. 
                  It has a framework to make decisions. This makes Moral Oracle a <span className="font-bold text-primary">true game of skill</span>, not a gamble.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/50 hover:shadow-xl transition-all">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-4xl">
                  🤖
                </div>
                <h3 className="text-2xl font-bold text-accent">AI Agents</h3>
                <p className="text-base leading-relaxed">
                  Doing two key jobs: <span className="font-bold">One creates cases</span> by scanning viral news, and the 
                  <span className="font-bold"> second moderates</span> all user-created cases.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary-glow/20 to-primary-glow/5 border-2 border-primary-glow/50 hover:shadow-xl transition-all">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary-glow to-accent flex items-center justify-center text-4xl">
                  📜
                </div>
                <h3 className="text-2xl font-bold text-primary-glow">Smart Contract</h3>
                <p className="text-base leading-relaxed">
                  Rewards? <span className="font-bold">Fully automated</span>. A Smart Contract instantly divides the prize pool as soon as the verdict is in.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/40 to-secondary/10 border-2 border-primary/40 hover:shadow-xl transition-all">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl">
                  🔗
                </div>
                <h3 className="text-2xl font-bold text-primary">Blockchain & Wallet</h3>
                <p className="text-base leading-relaxed">
                  All your <span className="font-bold">data, reputation, and rewards</span> are secured on the Blockchain and your game tokens are managed in your NeoWallet.
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary-glow/10 border-2 border-primary/50">
            <p className="text-2xl font-bold text-center">
              It's a <span className="text-primary">closed-loop</span>, <span className="text-accent">automated</span>, and <span className="text-primary-glow">transparent</span> ecosystem.
            </p>
          </Card>
        </div>
      )
    },
    {
      title: "A Win-Win-Win Ecosystem",
      content: (
        <div className="space-y-8 max-w-4xl mx-auto">
          <Card className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50">
            <p className="text-2xl font-bold text-center">
              Moral Oracle isn't a zero-sum game. We've designed an ecosystem where <span className="text-primary">every single party wins</span>.
            </p>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-2 border-primary/40 hover:border-primary/70 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-3xl flex-shrink-0">
                  🎮
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-primary">Players Win</h3>
                  <div className="space-y-3">
                    <p className="text-lg">
                      We are the <span className="font-bold">first platform</span> that pays you for the <span className="text-primary font-bold">quality of your thought</span>, not the popularity of your opinion.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                      <Card className="flex-1 p-4 bg-primary/10 border border-primary/30">
                        <p className="font-semibold text-center">💪 A 'thinking gym' to sharpen your mind</p>
                      </Card>
                      <Card className="flex-1 p-4 bg-primary/10 border border-primary/30">
                        <p className="font-semibold text-center">🏆 A 'Moral IQ' score to build your reputation</p>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-2 border-accent/40 hover:border-accent/70 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-3xl flex-shrink-0">
                  🏢
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-accent">Platform Wins</h3>
                  <div className="space-y-3">
                    <p className="text-lg">
                      We have a clean, scalable <span className="font-bold text-accent">2% transaction fee</span> in every case.
                    </p>
                    <Card className="p-4 bg-gradient-to-r from-accent/20 to-primary/20 border-2 border-accent/40">
                      <p className="text-lg font-bold text-center">
                        But our real win is that every game played builds our core asset: the <span className="text-accent">ethics dataset</span>.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-2 border-primary-glow/40 hover:border-primary-glow/70 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-glow to-accent flex items-center justify-center text-3xl flex-shrink-0">
                  🤖
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-primary-glow">AI Industry Wins</h3>
                  <Card className="p-6 bg-gradient-to-br from-primary-glow/20 to-accent/20 border-2 border-primary-glow/40">
                    <p className="text-xl font-bold text-center">
                      We provide them with the <span className="text-primary-glow">'Gold Standard' dataset</span> they desperately need to train safer, more responsible AI models.
                    </p>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      title: "Future Growth",
      content: (
        <div className="space-y-8 max-w-4xl mx-auto">
          <Card className="p-6 bg-gradient-to-br from-primary/20 via-accent/20 to-primary-glow/20 border-2 border-primary/50">
            <p className="text-2xl font-bold text-center">
              But this is just the beginning. Our real growth comes from what we're building under the hood.
            </p>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 bg-card border-2 border-primary/40 hover:border-primary/70 hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-5xl flex-shrink-0">
                  🎓
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-bold text-primary">Education</h3>
                  <p className="text-xl leading-relaxed">
                    We can package this as <span className="font-bold text-primary">'Moral Oracle for Schools'</span>.
                  </p>
                  <Card className="p-5 bg-gradient-to-r from-primary/10 to-primary-glow/10 border-2 border-primary/30">
                    <p className="text-lg text-center">
                      It's where students get <span className="font-bold">real experience</span> to learn logic, not just how to win an argument.
                    </p>
                  </Card>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-accent/40 hover:border-accent/70 hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-primary-glow flex items-center justify-center text-5xl flex-shrink-0">
                  🏢
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-bold text-accent">Enterprise</h3>
                  <p className="text-xl leading-relaxed">
                    We become a <span className="font-bold text-accent">'culture dashboard'</span>.
                  </p>
                  <Card className="p-5 bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/30">
                    <p className="text-lg text-center">
                      A CEO can finally get <span className="font-bold">real data</span> on how their teams make tough calls, letting them spot ethical risks long before they become a crisis.
                    </p>
                  </Card>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary via-accent to-primary-glow border-2 border-primary shadow-2xl">
            <div className="space-y-4">
              <p className="text-3xl font-bold text-center text-white drop-shadow-lg">
                This is how we scale:
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center text-white">
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/30 flex-1">
                  <p className="text-xl font-bold text-center">We start as a viral intellectual game</p>
                </Card>
                <div className="text-4xl font-bold">→</div>
                <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/30 flex-1">
                  <p className="text-xl font-bold text-center">We end up as an essential platform</p>
                </Card>
              </div>
            </div>
          </Card>

          <div className="text-center py-6">
            <p className="text-4xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Play to Think – Think to Earn
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 dark:from-background dark:via-background dark:to-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={isDark ? logoDark : logoLight} 
              alt="Moral Oracle" 
              className="w-12 h-12" 
            />
            <div>
              <h1 className="text-xl font-bold text-foreground font-roboto">Moral Oracle</h1>
              <p className="text-xs text-muted-foreground">Pitch Deck</p>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Slide Title */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent mb-2">
              {slides[currentSlide].title}
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Slide Content */}
          <div className="min-h-[500px]">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-md border-t border-border shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="text-sm text-muted-foreground font-medium">
            Slide {currentSlide + 1} of {slides.length}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            variant="outline"
            className="gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Keyboard Hint */}
      <div className="fixed bottom-20 right-4 text-xs text-muted-foreground bg-card/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border">
        Use ← → arrow keys to navigate
      </div>
    </div>
  );
};

export default Presentation;
