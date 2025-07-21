import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Shield, Globe, Scroll, ArrowRight } from "lucide-react";
import zionOsImage from "@/assets/zion-os-abstract.jpg";
import nyabinghiLedger from "@/assets/nyabinghi-ledger.jpg";

const CoreFeaturesSection = () => {
  const features = [
    {
      id: "zionos",
      title: "ZionOS",
      subtitle: "AI-Enhanced Personal Journey",
      description: "An intelligent system that guides your spiritual and personal development through Rastafarian principles enhanced by cutting-edge AI.",
      image: zionOsImage,
      icon: Brain,
      color: "primary"
    },
    {
      id: "ark-protocol",
      title: "Ark Protocol",
      subtitle: "Tokenized Sacred Rituals",
      description: "Digital ceremonies and offerings that preserve ancient traditions while creating new pathways for community participation.",
      icon: Shield,
      color: "accent"
    },
    {
      id: "zion-nodes",
      title: "Zion Nodes",
      subtitle: "Global Sacred Communities",
      description: "Decentralized retreat centers and governance models that connect local communities across continents.",
      icon: Globe,
      color: "sacred-red"
    },
    {
      id: "nyabinghi-ledger",
      title: "Nyabinghi Ledger",
      subtitle: "Ancestral Knowledge Vault",
      description: "A secure repository of ancestral chants, scriptures, and prophecies with advanced privacy protection.",
      image: nyabinghiLedger,
      icon: Scroll,
      color: "primary"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-mystical relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
            Core Systems
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover the sacred technologies that power the Zion Genesis ecosystem
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <Card key={feature.id} className="group relative bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/60 transition-all duration-500 overflow-hidden">
              {/* Feature Image */}
              {feature.image && (
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-80" />
                </div>
              )}

              <div className="p-8">
                {/* Icon & Title */}
                <div className="flex items-start mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-${feature.color === 'primary' ? 'primary' : feature.color === 'accent' ? 'sacred' : 'primary'} shadow-glow-accent mr-4 group-hover:animate-pulse-sacred`}>
                    <feature.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-accent font-semibold">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/80 mb-8 leading-relaxed">
                  {feature.description}
                </p>

                {/* CTA */}
                <Button variant="outline" className="group/btn">
                  Explore {feature.title}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" style={{
                background: 'linear-gradient(90deg, transparent, hsl(var(--accent)) 0.5px, transparent)',
                backgroundSize: '100px 100%',
                animation: 'none'
              }} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;