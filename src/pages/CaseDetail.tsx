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
        <Card className="p-8 mb-8 bg-gradient-to-br from-card to-primary/5">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {caseData.hashtags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold text-foreground">{caseData.title}</h1>
            
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

            {/* Vote Stats */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-yes-foreground">YES {yesPercentage.toFixed(0)}%</span>
                <span className="text-no-foreground">NO {noPercentage.toFixed(0)}%</span>
              </div>
              <div className="flex h-3 rounded-full overflow-hidden bg-muted">
                <div
                  className="bg-yes transition-all duration-500"
                  style={{ width: `${yesPercentage}%` }}
                />
                <div
                  className="bg-no transition-all duration-500"
                  style={{ width: `${noPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Submit Argument */}
        {!hasVoted && (
          <Card className="p-6 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Submit Your Argument</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button
                  variant={selectedSide === "yes" ? "default" : "outline"}
                  onClick={() => setSelectedSide("yes")}
                  className="flex-1 bg-yes hover:bg-yes/90 text-yes-foreground"
                >
                  I Vote YES
                </Button>
                <Button
                  variant={selectedSide === "no" ? "default" : "outline"}
                  onClick={() => setSelectedSide("no")}
                  className="flex-1 bg-no hover:bg-no/90 text-no-foreground"
                >
                  I Vote NO
                </Button>
              </div>
              <Textarea
                placeholder="Write your argument (max 300 characters)..."
                value={userArgument}
                onChange={(e) => setUserArgument(e.target.value.slice(0, 300))}
                className="min-h-[120px]"
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {userArgument.length}/300 characters
                </span>
                <Button onClick={handleSubmitArgument}>
                  Submit Argument
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Vote Instructions */}
        <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
          <p className="text-sm font-medium text-foreground">
            💡 Vote for the top 3 arguments that you find most compelling ({votedArguments.length}/3 selected)
          </p>
        </div>

        {/* Debate Arena - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* YES Arguments */}
          <div className="space-y-4">
            <div className="bg-yes/20 border-2 border-yes rounded-xl p-4">
              <h2 className="text-2xl font-bold text-yes-foreground mb-2">
                YES — {caseData.yesArgument}
              </h2>
              <p className="text-sm text-muted-foreground">
                Potential reward: Up to {Math.floor(caseData.rewardPool * 0.4)} tokens
              </p>
            </div>

            {caseArguments.yes.map((arg) => (
              <Card key={arg.id} className="p-5 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <p className="text-foreground leading-relaxed">{arg.content}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{arg.author}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-accent font-semibold">{arg.potentialReward} tokens</span>
                      <Button
                        size="sm"
                        variant={votedArguments.includes(arg.id) ? "default" : "outline"}
                        onClick={() => handleVoteForArgument(arg.id)}
                        className="gap-1"
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

          {/* NO Arguments */}
          <div className="space-y-4">
            <div className="bg-no/20 border-2 border-no rounded-xl p-4">
              <h2 className="text-2xl font-bold text-no-foreground mb-2">
                NO — {caseData.noArgument}
              </h2>
              <p className="text-sm text-muted-foreground">
                Potential reward: Up to {Math.floor(caseData.rewardPool * 0.4)} tokens
              </p>
            </div>

            {caseArguments.no.map((arg) => (
              <Card key={arg.id} className="p-5 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <p className="text-foreground leading-relaxed">{arg.content}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{arg.author}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-accent font-semibold">{arg.potentialReward} tokens</span>
                      <Button
                        size="sm"
                        variant={votedArguments.includes(arg.id) ? "default" : "outline"}
                        onClick={() => handleVoteForArgument(arg.id)}
                        className="gap-1"
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
