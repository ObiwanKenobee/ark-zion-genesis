import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TreePine, Coins, Users, Target } from "lucide-react";

const MissionSection = () => {
  const missions = [
    {
      id: "tree-of-life",
      title: "Tree of Life Project",
      description: "Reforestation and ecological restoration across Zion Node territories, connecting spiritual growth with environmental healing.",
      impact: "2,847 trees planted",
      funding: "127,000 ZION",
      status: "Active",
      icon: TreePine,
      progress: 68
    },
    {
      id: "dubdao",
      title: "DubDAO",
      description: "Decentralized music production and cultural preservation, empowering Rastafarian artists and preserving sacred sounds.",
      impact: "89 artists supported",
      funding: "94,500 ZION",
      status: "Expanding",
      icon: Users,
      progress: 84
    },
    {
      id: "genesis-education",
      title: "Genesis Education",
      description: "Digital learning platforms combining ancient wisdom with modern knowledge, accessible to all Zion community members.",
      impact: "1,420 students",
      funding: "156,300 ZION",
      status: "Active",
      icon: Target,
      progress: 91
    }
  ];

  return (
    <section className="py-24 px-6 bg-background relative">
      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="sacred-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
              <polygon points="10,5 13,13 5,13" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sacred-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Real-World Impact
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Witness the transformative power of our community-driven missions across the globe
          </p>
          
          {/* Community Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">47</div>
              <div className="text-sm text-foreground/60">Zion Nodes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">12,847</div>
              <div className="text-sm text-foreground/60">Community Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">2.4M</div>
              <div className="text-sm text-foreground/60">ZION Tokens</div>
            </div>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {missions.map((mission) => (
            <Card key={mission.id} className="group bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/60 transition-all duration-500 overflow-hidden">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-primary shadow-glow-primary group-hover:animate-pulse-sacred">
                    <mission.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <Badge variant="outline" className="border-accent/60 text-accent">
                    {mission.status}
                  </Badge>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {mission.title}
                </h3>
                <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                  {mission.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-foreground/60 mb-2">
                    <span>Progress</span>
                    <span>{mission.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-sacred h-2 rounded-full transition-all duration-1000 shadow-glow-accent"
                      style={{ width: `${mission.progress}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">Impact:</span>
                    <span className="text-accent font-semibold">{mission.impact}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">Funding:</span>
                    <span className="text-accent font-semibold">{mission.funding}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group/btn">
                  <Coins className="mr-2 w-4 h-4 group-hover/btn:animate-spin" />
                  Support this Mission
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Zion Bonds Section */}
        <Card className="bg-gradient-hero border-accent/40 p-8 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Zion Bonds
          </h3>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            Community-issued tokens that represent your commitment to the Zion vision. 
            Participate in governance, funding, and the growth of our global network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="sacred" size="lg">
              Issue Zion Bond
            </Button>
            <Button variant="outline" size="lg">
              View Bond Market
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MissionSection;