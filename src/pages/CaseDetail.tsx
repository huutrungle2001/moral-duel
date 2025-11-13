import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, ArrowLeft, ThumbsUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { mockCases, mockArguments } from "@/lib/mockData";
import { toast } from "sonner";

const CaseDetail = () => {
  const { id } = useParams();
  const caseData = mockCases.find((c) => c.id === id);
  const caseArguments = mockArguments[id as keyof typeof mockArguments];
  
  const [userArgument, setUserArgument] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedSide, setSelectedSide] = useState<"yes" | "no" | null>(null);
  const [votedArguments, setVotedArguments] = useState<string[]>([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasWrittenArgument, setHasWrittenArgument] = useState(false);

  if (!caseData || !caseArguments) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Case not found</h1>
          <Link to="/discover">
            <Button>Back to Discover</Button>
          </Link>
        </div>
      </div>
    );
  }

  const totalVotes = caseData.yesVotes + caseData.noVotes;
  const yesPercentage = (caseData.yesVotes / totalVotes) * 100;
  const noPercentage = (caseData.noVotes / totalVotes) * 100;

  const handleVoteSelection = (side: "yes" | "no") => {
    setSelectedSide(side);
    toast.success(`You voted ${side.toUpperCase()}! Now like 3 arguments to continue.`);
  };

  const handleVoteForArgument = (argId: string) => {
    if (!selectedSide) {
      toast.error("Step 1: Please vote YES or NO first!");
      return;
    }

    if (votedArguments.includes(argId)) {
      setVotedArguments(votedArguments.filter(id => id !== argId));
      toast.info("Like removed");
      if (votedArguments.length - 1 < 3) {
        setHasLiked(false);
      }
    } else if (votedArguments.length < 3) {
      const newVotedArgs = [...votedArguments, argId];
      setVotedArguments(newVotedArgs);
      if (newVotedArgs.length === 3) {
        setHasLiked(true);
        toast.success("Great! Now write your argument to complete your vote.");
      } else {
        toast.success(`Liked! (${newVotedArgs.length}/3)`);
      }
    } else {
      toast.error("You can only like 3 arguments");
    }
  };

  const handleSubmitArgument = () => {
    if (!selectedSide) {
      toast.error("Step 1: Please vote YES or NO first!");
      return;
    }
    if (!hasLiked) {
      toast.error("Step 2: Please like 3 arguments first!");
      return;
    }
    if (userArgument.trim().length < 20) {
      toast.error("Argument must be at least 20 characters");
      return;
    }
    setHasWrittenArgument(true);
    setHasVoted(true);
    toast.success("🎉 Vote complete! Your argument has been submitted successfully!");
    setUserArgument("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/discover">
          <Button variant="ghost" className="mb-4 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Discover
          </Button>
        </Link>

        {/* Case Header */}
        <Card className="p-8 mb-8 bg-background/95 backdrop-blur-sm
          border-2 border-border/60
          dark:border-primary/30
          shadow-[0_4px_20px_rgba(92,189,185,0.2),0_2px_8px_rgba(0,0,0,0.08)]
          dark:shadow-[0_6px_25px_rgba(225,179,130,0.2),0_3px_10px_rgba(225,179,130,0.15)]">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {caseData.hashtags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-muted text-foreground border border-border/30">{tag}</Badge>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold text-foreground font-serif">{caseData.title}</h1>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              {caseData.context}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-accent font-bold text-xl">
                <span className="text-3xl">{caseData.rewardPool}</span>
                <span className="text-sm">tokens</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span className="font-medium">{caseData.timeRemaining} remaining</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Vote Instructions */}
        <div className="mb-6 p-6 bg-background/95 backdrop-blur-sm
          border-2 border-primary/30
          dark:border-primary/40
          shadow-[0_4px_20px_rgba(92,189,185,0.15),0_2px_8px_rgba(0,0,0,0.05)]
          dark:shadow-[0_6px_25px_rgba(225,179,130,0.15),0_3px_10px_rgba(225,179,130,0.1)]
          rounded-lg">
          <h3 className="text-lg font-bold text-foreground mb-3">
            How to Vote - Complete 3 Steps:
          </h3>
          <div className="space-y-2 text-sm text-foreground/80">
            <div className="flex items-start gap-3">
              <span className={`font-bold text-base ${selectedSide ? 'text-primary' : 'text-muted-foreground'}`}>
                {selectedSide ? '✓' : '1'}
              </span>
              <span>
                <strong className={selectedSide ? 'text-primary' : ''}>Vote YES or NO</strong>
                {selectedSide && <span className="text-primary ml-2">✓ Done</span>}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className={`font-bold text-base ${hasLiked ? 'text-primary' : 'text-muted-foreground'}`}>
                {hasLiked ? '✓' : '2'}
              </span>
              <span>
                <strong className={hasLiked ? 'text-primary' : ''}>Like 3 arguments</strong> that you find most compelling 
                ({votedArguments.length}/3 selected)
                {hasLiked && <span className="text-primary ml-2">✓ Done</span>}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className={`font-bold text-base ${hasWrittenArgument ? 'text-primary' : 'text-muted-foreground'}`}>
                {hasWrittenArgument ? '✓' : '3'}
              </span>
              <span>
                <strong className={hasWrittenArgument ? 'text-primary' : ''}>Write your argument</strong> explaining your vote (min 20 characters)
                {hasWrittenArgument && <span className="text-primary ml-2">✓ Done</span>}
              </span>
            </div>
          </div>
        </div>

        {/* Main Duel Layout - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: YES Side */}
          <div className="space-y-4">
            <Button
              variant={selectedSide === "yes" ? "default" : "outline"}
              onClick={() => handleVoteSelection("yes")}
              disabled={hasVoted}
              className="w-full bg-yes hover:bg-yes/90 text-yes-foreground py-6 text-lg font-bold disabled:opacity-50"
            >
              {selectedSide === "yes" ? "✓ Voted YES" : "I Vote YES"}
            </Button>

            {/* Comment Section - Appears after completing steps 1 & 2 */}
            {selectedSide === "yes" && hasLiked && !hasVoted && (
              <Card className="p-4 bg-background/95 backdrop-blur-sm border-2 border-yes/30 
                shadow-[0_4px_15px_rgba(92,189,185,0.2)]
                dark:shadow-[0_4px_15px_rgba(225,179,130,0.2)]">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Step 3: Share Your Reasoning
                </h4>
                <Textarea
                  placeholder="Explain why you voted YES (min 20 characters, max 300)..."
                  value={userArgument}
                  onChange={(e) => setUserArgument(e.target.value.slice(0, 300))}
                  className="min-h-[100px] mb-2 bg-background border-border"
                />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    {userArgument.length}/300 characters
                  </span>
                  <Button 
                    onClick={handleSubmitArgument} 
                    size="sm" 
                    className="bg-yes hover:bg-yes/90"
                    disabled={userArgument.length < 20}
                  >
                    Submit Vote
                  </Button>
                </div>
              </Card>
            )}
            
            {!hasLiked && selectedSide === "yes" && (
              <Card className="p-4 bg-muted/30 border-border/30">
                <p className="text-sm text-muted-foreground text-center">
                  Like 3 arguments below to unlock the comment section
                </p>
              </Card>
            )}

            {caseData.yesArgument && (
              <div className="bg-yes/20 border-2 border-yes rounded-xl p-4">
                <h2 className="text-lg font-bold text-yes-foreground font-serif">
                  {caseData.yesArgument}
                </h2>
              </div>
            )}
            
            <div className="bg-muted/30 border border-border/50 rounded-xl p-4">
              <p className="text-sm font-semibold text-accent">
                Reward: Up to {Math.floor(caseData.rewardPool * 0.4)} tokens
              </p>
            </div>

            {caseArguments.yes.slice(0, 3).map((arg) => (
              <Card key={arg.id} className="p-4 bg-background/95 backdrop-blur-sm
                border-2 border-border/60 hover:border-primary/50
                dark:border-primary/30 dark:hover:border-primary/50
                shadow-[0_4px_20px_rgba(92,189,185,0.15),0_2px_8px_rgba(0,0,0,0.05)]
                hover:shadow-[0_8px_30px_rgba(92,189,185,0.25),0_4px_12px_rgba(0,0,0,0.08)]
                dark:shadow-[0_6px_25px_rgba(225,179,130,0.15),0_3px_10px_rgba(225,179,130,0.1)]
                dark:hover:shadow-[0_12px_40px_rgba(225,179,130,0.25),0_6px_16px_rgba(225,179,130,0.15)]
                transition-all duration-300">
                <div className="space-y-3">
                  <p className="text-sm text-foreground leading-relaxed">{arg.content}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{arg.author}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-accent font-semibold">{arg.potentialReward} tokens</span>
                      <Button
                        size="sm"
                        variant={votedArguments.includes(arg.id) ? "default" : "outline"}
                        onClick={() => handleVoteForArgument(arg.id)}
                        className="gap-1 h-7 text-xs"
                        disabled={hasVoted}
                      >
                        <ThumbsUp className="w-3 h-3" />
                        {arg.votes}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* MIDDLE: Battle Stats */}
          <div className="flex flex-col justify-center">
            <Card className="p-8 relative overflow-hidden
              bg-gradient-to-br from-background/95 via-background/98 to-background/95 backdrop-blur-sm
              border-2 border-transparent
              shadow-[0_4px_20px_rgba(92,189,185,0.15),0_2px_8px_rgba(0,0,0,0.05)]
              dark:shadow-[0_6px_25px_rgba(225,179,130,0.15),0_3px_10px_rgba(225,179,130,0.1)]"
              style={{
                borderImage: 'linear-gradient(135deg, rgba(239, 68, 68, 0.6), rgba(255, 165, 0, 0.5), rgba(255, 215, 0, 0.4), rgba(239, 68, 68, 0.6)) 1',
              }}>
              
              <div className="relative z-10 space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground font-serif mb-1">
                    Battle Arena
                  </h2>
                  <p className="text-sm text-muted-foreground font-semibold">Live debate intensity</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-yes-foreground">
                        YES
                      </span>
                      <span className="text-2xl font-bold text-yes-foreground">{yesPercentage.toFixed(0)}%</span>
                    </div>
                    <div className="h-4 rounded-full overflow-hidden bg-muted border border-border/50 shadow-inner">
                      <div className="h-full bg-gradient-to-r from-yes to-yes/80 transition-all duration-500 shadow-lg" 
                        style={{ width: `${yesPercentage}%` }} />
                    </div>
                    <p className="text-xs text-muted-foreground">{caseData.yesVotes} votes</p>
                  </div>

                  <div className="text-center py-2">
                    <span className="text-2xl font-bold text-destructive drop-shadow-lg">VS</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-no-foreground">
                        NO
                      </span>
                      <span className="text-2xl font-bold text-no-foreground">{noPercentage.toFixed(0)}%</span>
                    </div>
                    <div className="h-4 rounded-full overflow-hidden bg-muted border border-border/50 shadow-inner">
                      <div className="h-full bg-gradient-to-l from-no to-no/80 transition-all duration-500 shadow-lg" 
                        style={{ width: `${noPercentage}%` }} />
                    </div>
                    <p className="text-xs text-muted-foreground">{caseData.noVotes} votes</p>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground font-semibold">Total Warriors</p>
                  <p className="text-3xl font-bold text-foreground">{totalVotes}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* RIGHT: NO Side */}
          <div className="space-y-4">
            <Button
              variant={selectedSide === "no" ? "default" : "outline"}
              onClick={() => handleVoteSelection("no")}
              disabled={hasVoted}
              className="w-full bg-no hover:bg-no/90 text-no-foreground py-6 text-lg font-bold disabled:opacity-50"
            >
              {selectedSide === "no" ? "✓ Voted NO" : "I Vote NO"}
            </Button>

            {/* Comment Section - Appears after completing steps 1 & 2 */}
            {selectedSide === "no" && hasLiked && !hasVoted && (
              <Card className="p-4 bg-background/95 backdrop-blur-sm border-2 border-no/30
                shadow-[0_4px_15px_rgba(239,68,68,0.2)]">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Step 3: Share Your Reasoning
                </h4>
                <Textarea
                  placeholder="Explain why you voted NO (min 20 characters, max 300)..."
                  value={userArgument}
                  onChange={(e) => setUserArgument(e.target.value.slice(0, 300))}
                  className="min-h-[100px] mb-2 bg-background border-border"
                />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    {userArgument.length}/300 characters
                  </span>
                  <Button 
                    onClick={handleSubmitArgument} 
                    size="sm" 
                    className="bg-no hover:bg-no/90"
                    disabled={userArgument.length < 20}
                  >
                    Submit Vote
                  </Button>
                </div>
              </Card>
            )}
            
            {!hasLiked && selectedSide === "no" && (
              <Card className="p-4 bg-muted/30 border-border/30">
                <p className="text-sm text-muted-foreground text-center">
                  Like 3 arguments below to unlock the comment section
                </p>
              </Card>
            )}

            {caseData.noArgument && (
              <div className="bg-no/20 border-2 border-no rounded-xl p-4">
                <h2 className="text-lg font-bold text-no-foreground font-serif">
                  {caseData.noArgument}
                </h2>
              </div>
            )}
            
            <div className="bg-muted/30 border border-border/50 rounded-xl p-4">
              <p className="text-sm font-semibold text-accent">
                Reward: Up to {Math.floor(caseData.rewardPool * 0.4)} tokens
              </p>
            </div>

            {caseArguments.no.slice(0, 3).map((arg) => (
              <Card key={arg.id} className="p-4 bg-background/95 backdrop-blur-sm
                border-2 border-border/60 hover:border-primary/50
                dark:border-primary/30 dark:hover:border-primary/50
                shadow-[0_4px_20px_rgba(92,189,185,0.15),0_2px_8px_rgba(0,0,0,0.05)]
                hover:shadow-[0_8px_30px_rgba(92,189,185,0.25),0_4px_12px_rgba(0,0,0,0.08)]
                dark:shadow-[0_6px_25px_rgba(225,179,130,0.15),0_3px_10px_rgba(225,179,130,0.1)]
                dark:hover:shadow-[0_12px_40px_rgba(225,179,130,0.25),0_6px_16px_rgba(225,179,130,0.15)]
                transition-all duration-300">
                <div className="space-y-3">
                  <p className="text-sm text-foreground leading-relaxed">{arg.content}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{arg.author}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-accent font-semibold">{arg.potentialReward} tokens</span>
                      <Button
                        size="sm"
                        variant={votedArguments.includes(arg.id) ? "default" : "outline"}
                        onClick={() => handleVoteForArgument(arg.id)}
                        className="gap-1 h-7 text-xs"
                        disabled={hasVoted}
                      >
                        <ThumbsUp className="w-3 h-3" />
                        {arg.votes}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
