import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Database, 
  Shield, 
  Music, 
  Globe, 
  Zap,
  Code,
  Lock
} from "lucide-react";

const TechStackSection = () => {
  const techStack = [
    {
      name: "Aptos",
      category: "Blockchain",
      description: "High-performance blockchain for secure transactions",
      icon: Zap,
      color: "accent"
    },
    {
      name: "Audius",
      category: "Music Protocol",
      description: "Decentralized music streaming and distribution",
      icon: Music,
      color: "primary"
    },
    {
      name: "Soulbound IDs",
      category: "Identity",
      description: "Non-transferable identity tokens for community verification",
      icon: Shield,
      color: "sacred-red"
    },
    {
      name: "ZK-Proofs",
      category: "Privacy",
      description: "Zero-knowledge proofs for private sacred ceremonies",
      icon: Lock,
      color: "accent"
    },
    {
      name: "IPFS",
      category: "Storage",
      description: "Distributed storage for ancestral knowledge",
      icon: Database,
      color: "primary"
    },
    {
      name: "AI Oracles",
      category: "Intelligence",
      description: "Spiritual guidance through ethical AI systems",
      icon: Cpu,
      color: "sacred-red"
    },
    {
      name: "Polygon",
      category: "Scaling",
      description: "Layer 2 scaling for global accessibility",
      icon: Globe,
      color: "accent"
    },
    {
      name: "WebRTC",
      category: "Communication",
      description: "Peer-to-peer communication for ceremonies",
      icon: Code,
      color: "primary"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-mystical relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-8 h-full">
          {[...Array(64)].map((_, i) => (
            <div 
              key={i}
              className="border border-accent/20 animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent via-primary-glow to-foreground bg-clip-text text-transparent">
            Sacred Technologies
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Advanced blockchain and AI technologies harmonized with ancient wisdom
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techStack.map((tech, index) => (
            <Card 
              key={tech.name}
              className="group bg-card/30 backdrop-blur-sm border-accent/20 hover:border-accent/60 transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="p-6 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-2xl bg-gradient-${
                    tech.color === 'primary' ? 'primary' : 
                    tech.color === 'sacred-red' ? 'primary' : 'sacred'
                  } shadow-glow-accent group-hover:animate-glow`}>
                    <tech.icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>

                {/* Category Badge */}
                <Badge variant="outline" className="mb-3 border-accent/40 text-accent text-xs">
                  {tech.category}
                </Badge>

                {/* Name */}
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-sacred opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-hero border-accent/40 p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, hsl(var(--accent)) 90deg, transparent 180deg, hsl(var(--primary)) 270deg, transparent 360deg)`,
              backgroundSize: '100px 100px',
              animation: 'spin 20s linear infinite'
            }} />
          </div>

          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Open Source & Transparent
            </h3>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              All Zion Genesis technologies are built with transparency and community governance at their core. 
              Join our developers building the future of spiritual technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-block">
                <Card className="group bg-background/20 backdrop-blur-sm border-accent/40 hover:border-accent transition-all duration-300 p-4">
                  <div className="flex items-center space-x-3 text-foreground">
                    <Code className="w-6 h-6 text-accent" />
                    <span className="font-semibold">View on GitHub</span>
                  </div>
                </Card>
              </a>
              
              <a href="#" className="inline-block">
                <Card className="group bg-background/20 backdrop-blur-sm border-accent/40 hover:border-accent transition-all duration-300 p-4">
                  <div className="flex items-center space-x-3 text-foreground">
                    <Globe className="w-6 h-6 text-accent" />
                    <span className="font-semibold">Technical Docs</span>
                  </div>
                </Card>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TechStackSection;