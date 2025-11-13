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

  const handleSubmitArgument = () => {
    if (!selectedSide) {
      toast.error("Please select YES or NO first");
      return;
    }
    if (userArgument.trim().length < 20) {
      toast.error("Argument must be at least 20 characters");
      return;
    }
    toast.success("Argument submitted successfully!");
    setUserArgument("");
    setHasVoted(true);
  };

  const handleVoteForArgument = (argId: string) => {
    if (votedArguments.includes(argId)) {
      setVotedArguments(votedArguments.filter(id => id !== argId));
      toast.info("Vote removed");
    } else if (votedArguments.length < 3) {
      setVotedArguments([...votedArguments, argId]);
      toast.success("Voted for this argument");
    } else {
      toast.error("You can only vote for 3 arguments");
    }
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
        <Card className="p-8 mb-8 bg-card">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {caseData.hashtags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold text-foreground font-serif">{caseData.title}</h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
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
        <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
          <p className="text-sm font-medium text-foreground">
            💡 Give your choice, comment and vote the top 3 arguments that you find most compelling ({votedArguments.length}/3 selected)
          </p>
        </div>

        {/* Main Duel Layout - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: YES Side */}
          <div className="space-y-4">
            <Button
              variant={selectedSide === "yes" ? "default" : "outline"}
              onClick={() => setSelectedSide("yes")}
              className="w-full bg-yes hover:bg-yes/90 text-yes-foreground py-6 text-lg font-bold"
            >
              I Vote YES
            </Button>

            {/* Comment Section - Appears after voting YES */}
            {selectedSide === "yes" && !hasVoted && (
              <Card className="p-4 bg-yes/5 border-yes/30">
                <h4 className="text-sm font-semibold text-foreground mb-3">Share Your Reasoning</h4>
                <Textarea
                  placeholder="Explain why you voted YES (max 300 characters)..."
                  value={userArgument}
                  onChange={(e) => setUserArgument(e.target.value.slice(0, 300))}
                  className="min-h-[100px] mb-2"
                />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    {userArgument.length}/300
                  </span>
                  <Button onClick={handleSubmitArgument} size="sm" className="bg-yes hover:bg-yes/90">
                    Submit
                  </Button>
                </div>
              </Card>
            )}

            <div className="bg-yes/20 border-2 border-yes rounded-xl p-4">
              <h2 className="text-lg font-bold text-yes-foreground font-serif">
                {caseData.yesArgument}
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Reward: Up to {Math.floor(caseData.rewardPool * 0.4)} tokens
              </p>
            </div>

            {caseArguments.yes.slice(0, 3).map((arg) => (
              <Card key={arg.id} className="p-4 hover:shadow-md transition-shadow">
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
            <Card className="p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-duel opacity-30" />
              
              <div className="relative z-10 space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-2 font-serif">Battle Stats</h2>
                  <p className="text-sm text-muted-foreground">Live vote distribution</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-yes-foreground">YES</span>
                      <span className="text-2xl font-bold text-yes-foreground">{yesPercentage.toFixed(0)}%</span>
                    </div>
                    <div className="h-4 rounded-full overflow-hidden bg-muted">
                      <div className="h-full bg-yes transition-all duration-500" style={{ width: `${yesPercentage}%` }} />
                    </div>
                    <p className="text-xs text-muted-foreground">{caseData.yesVotes} votes</p>
                  </div>

                  <div className="text-center py-2">
                    <span className="text-4xl font-bold text-muted-foreground">VS</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-no-foreground">NO</span>
                      <span className="text-2xl font-bold text-no-foreground">{noPercentage.toFixed(0)}%</span>
                    </div>
                    <div className="h-4 rounded-full overflow-hidden bg-muted">
                      <div className="h-full bg-no transition-all duration-500" style={{ width: `${noPercentage}%` }} />
                    </div>
                    <p className="text-xs text-muted-foreground">{caseData.noVotes} votes</p>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">Total Participants</p>
                  <p className="text-3xl font-bold text-foreground">{totalVotes}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* RIGHT: NO Side */}
          <div className="space-y-4">
            <Button
              variant={selectedSide === "no" ? "default" : "outline"}
              onClick={() => setSelectedSide("no")}
              className="w-full bg-no hover:bg-no/90 text-no-foreground py-6 text-lg font-bold"
            >
              I Vote NO
            </Button>

            {/* Comment Section - Appears after voting NO */}
            {selectedSide === "no" && !hasVoted && (
              <Card className="p-4 bg-no/5 border-no/30">
                <h4 className="text-sm font-semibold text-foreground mb-3">Share Your Reasoning</h4>
                <Textarea
                  placeholder="Explain why you voted NO (max 300 characters)..."
                  value={userArgument}
                  onChange={(e) => setUserArgument(e.target.value.slice(0, 300))}
                  className="min-h-[100px] mb-2"
                />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    {userArgument.length}/300
                  </span>
                  <Button onClick={handleSubmitArgument} size="sm" className="bg-no hover:bg-no/90">
                    Submit
                  </Button>
                </div>
              </Card>
            )}

            <div className="bg-no/20 border-2 border-no rounded-xl p-4">
              <h2 className="text-lg font-bold text-no-foreground font-serif">
                {caseData.noArgument}
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Reward: Up to {Math.floor(caseData.rewardPool * 0.4)} tokens
              </p>
            </div>

            {caseArguments.no.slice(0, 3).map((arg) => (
              <Card key={arg.id} className="p-4 hover:shadow-md transition-shadow">
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
