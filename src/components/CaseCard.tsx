import { Link } from "react-router-dom";
import { Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Case } from "@/lib/mockData";

interface CaseCardProps {
  caseData: Case;
}

const CaseCard = ({ caseData }: CaseCardProps) => {
  const totalVotes = caseData.yesVotes + caseData.noVotes;
  const yesPercentage = totalVotes > 0 ? (caseData.yesVotes / totalVotes) * 100 : 50;
  const noPercentage = totalVotes > 0 ? (caseData.noVotes / totalVotes) * 100 : 50;

  return (
    <Link to={`/case/${caseData.id}`}>
      <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold text-foreground flex-1 leading-tight">
              {caseData.title}
            </h3>
            {caseData.isTrending && (
              <Badge className="bg-primary/20 text-primary border border-primary/30 gap-1 whitespace-nowrap font-semibold">
                <TrendingUp className="w-3 h-3" />
                Trending
              </Badge>
            )}
          </div>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2">
            {caseData.hashtags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs bg-muted text-foreground border border-border/30">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Context */}
          <p className="text-sm text-foreground/80 line-clamp-2 leading-relaxed">
            {caseData.context}
          </p>

          {/* Vote Stats */}
          <div className="space-y-2 bg-muted/30 p-3 rounded-lg">
            <div className="flex justify-between text-sm font-bold">
              <span className="text-yes flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-yes" />
                YES {yesPercentage.toFixed(0)}%
              </span>
              <span className="text-no flex items-center gap-1">
                NO {noPercentage.toFixed(0)}%
                <span className="w-2 h-2 rounded-full bg-no" />
              </span>
            </div>
            <div className="flex h-3 rounded-full overflow-hidden bg-background border border-border/20 shadow-inner">
              <div
                className="bg-gradient-to-r from-yes to-yes/80 transition-all duration-500"
                style={{ width: `${yesPercentage}%` }}
              />
              <div
                className="bg-gradient-to-l from-no to-no/80 transition-all duration-500"
                style={{ width: `${noPercentage}%` }}
              />
            </div>
          </div>

          {/* Top Comments */}
          {caseData.topComments.length > 0 && (
            <div className="pt-3 border-t-2 border-border/50 space-y-2 bg-card/30 -mx-2 px-2 py-2 rounded">
              {caseData.topComments.slice(0, 1).map((comment) => (
                <div key={comment.id} className="text-sm">
                  <p className="text-foreground italic line-clamp-2 leading-relaxed">
                    "{comment.content}"
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-muted-foreground font-medium">
                      — {comment.author}
                    </p>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      👍 {comment.votes}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t-2 border-border/50 text-sm">
            <div className="flex items-center gap-1 text-primary font-bold bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
              <span className="text-lg">{caseData.rewardPool}</span>
              <span className="text-xs">tokens</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground font-medium">
              <Clock className="w-4 h-4" />
              {caseData.timeRemaining}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CaseCard;
