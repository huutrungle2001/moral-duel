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
      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold text-foreground flex-1 leading-tight">
              {caseData.title}
            </h3>
            {caseData.isTrending && (
              <Badge className="bg-accent text-accent-foreground gap-1 whitespace-nowrap">
                <TrendingUp className="w-3 h-3" />
                Trending
              </Badge>
            )}
          </div>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2">
            {caseData.hashtags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Context */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {caseData.context}
          </p>

          {/* Vote Stats */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-yes">YES {yesPercentage.toFixed(0)}%</span>
              <span className="text-no">NO {noPercentage.toFixed(0)}%</span>
            </div>
            <div className="flex h-2 rounded-full overflow-hidden bg-muted">
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

          {/* Top Comments */}
          {caseData.topComments.length > 0 && (
            <div className="pt-3 border-t border-border space-y-2">
              {caseData.topComments.slice(0, 1).map((comment) => (
                <div key={comment.id} className="text-sm">
                  <p className="text-foreground italic line-clamp-2">
                    "{comment.content}"
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-muted-foreground">
                      — {comment.author}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      👍 {comment.votes}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-border text-sm">
            <div className="flex items-center gap-1 text-accent font-semibold">
              <span className="text-lg">{caseData.rewardPool}</span>
              <span className="text-xs">tokens</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
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
