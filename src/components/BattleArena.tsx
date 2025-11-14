import { Card } from "@/components/ui/card";

interface BattleArenaProps {
  yesVotes: number;
  noVotes: number;
}

const BattleArena = ({ yesVotes, noVotes }: BattleArenaProps) => {
  const totalVotes = yesVotes + noVotes;
  const yesPercentage = (yesVotes / totalVotes) * 100;
  const noPercentage = (noVotes / totalVotes) * 100;

  return (
    <div className="flex flex-col justify-center px-4">
      {/* Battle Arena Card with Dynamic Gradient Border */}
      <div className="relative p-1 rounded-2xl overflow-hidden">
        {/* Dynamic Gradient Border Based on Vote Ratio */}
        <div 
          className="absolute inset-0 rounded-2xl animate-[pulse_3s_ease-in-out_infinite]"
          style={{
            background: `linear-gradient(90deg, 
              hsl(var(--yes)) 0%, 
              hsl(var(--yes)) ${yesPercentage}%, 
              hsl(var(--no)) ${yesPercentage}%, 
              hsl(var(--no)) 100%)`
          }}
        />
        
        {/* Outer Glow Effect */}
        <div 
          className="absolute -inset-2 rounded-2xl blur-xl opacity-60 animate-[pulse_4s_ease-in-out_infinite]"
          style={{
            background: `linear-gradient(90deg, 
              hsl(var(--yes) / 0.6) 0%, 
              hsl(var(--yes) / 0.6) ${yesPercentage}%, 
              hsl(var(--no) / 0.6) ${yesPercentage}%, 
              hsl(var(--no) / 0.6) 100%)`
          }}
        />
        
        {/* Card Content */}
        <Card className="relative bg-card/95 backdrop-blur-sm border-0 p-8 rounded-xl">
          {/* Total Warriors Header */}
          <div className="text-center mb-6">
            <h3 className="text-lg text-muted-foreground mb-2">Battle Arena</h3>
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl font-bold text-foreground">
                {totalVotes.toLocaleString()}
              </span>
              <span className="text-lg text-muted-foreground">Warriors</span>
            </div>
          </div>

          {/* Vote Statistics */}
          <div className="grid grid-cols-2 gap-6">
            {/* YES Side */}
            <div className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-yes/20 via-yes/10 to-transparent border-2 border-yes/30">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yes/40 to-transparent blur-xl" />
              
              <div className="relative z-10 text-center space-y-3">
                <h4 className="text-2xl font-bold text-yes-foreground drop-shadow-[0_0_10px_rgba(92,189,185,0.8)]">
                  YES
                </h4>
                <div className="text-5xl font-bold text-yes-foreground drop-shadow-[0_0_15px_rgba(92,189,185,1)] animate-[pulse_2s_ease-in-out_infinite]">
                  {yesPercentage.toFixed(1)}%
                </div>
                <div className="text-sm text-foreground/80 font-medium">
                  {yesVotes.toLocaleString()} votes
                </div>
                
                {/* Progress Indicator */}
                <div className="mt-4 h-3 rounded-full overflow-hidden bg-background/50">
                  <div 
                    className="h-full bg-gradient-to-r from-yes via-cyan-400 to-teal-400 transition-all duration-700 shadow-[0_0_12px_rgba(92,189,185,0.8)]" 
                    style={{ width: `${yesPercentage}%` }} 
                  />
                </div>
              </div>
            </div>

            {/* NO Side */}
            <div className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-no/20 via-no/10 to-transparent border-2 border-no/30">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-l from-no/40 to-transparent blur-xl" />
              
              <div className="relative z-10 text-center space-y-3">
                <h4 className="text-2xl font-bold text-no-foreground drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
                  NO
                </h4>
                <div className="text-5xl font-bold text-no-foreground drop-shadow-[0_0_15px_rgba(239,68,68,1)] animate-[pulse_2s_ease-in-out_infinite]">
                  {noPercentage.toFixed(1)}%
                </div>
                <div className="text-sm text-foreground/80 font-medium">
                  {noVotes.toLocaleString()} votes
                </div>
                
                {/* Progress Indicator */}
                <div className="mt-4 h-3 rounded-full overflow-hidden bg-background/50">
                  <div 
                    className="h-full bg-gradient-to-l from-no via-orange-400 to-red-400 transition-all duration-700 shadow-[0_0_12px_rgba(239,68,68,0.8)]" 
                    style={{ width: `${noPercentage}%` }} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Battle Ratio Visualization */}
          <div className="mt-6 relative">
            <div className="h-4 rounded-full overflow-hidden bg-background/50 border border-border/30">
              <div 
                className="h-full transition-all duration-700 relative"
                style={{
                  background: `linear-gradient(90deg, 
                    hsl(var(--yes)) 0%, 
                    hsl(var(--yes)) ${yesPercentage}%, 
                    hsl(var(--no)) ${yesPercentage}%, 
                    hsl(var(--no)) 100%)`,
                  boxShadow: '0 0 20px rgba(92,189,185,0.5), 0 0 20px rgba(239,68,68,0.5)'
                }}
              >
                {/* Battle Line Indicator */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-foreground/80 shadow-lg"
                  style={{ left: `${yesPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BattleArena;
