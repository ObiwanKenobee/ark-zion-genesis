import { Button } from "@/components/ui/button";
import { Play, Volume2 } from "lucide-react";
import heroMountains from "@/assets/hero-mountains.jpg";
import lionOfJudah from "@/assets/lion-of-judah.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroMountains})` }}
      >
        <div className="absolute inset-0 bg-gradient-mystical opacity-80" />
      </div>

      {/* Animated Soundwaves */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="flex space-x-1">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-accent rounded-full animate-soundwave"
              style={{
                height: `${Math.random() * 100 + 20}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Lion of Judah Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={lionOfJudah} 
              alt="Lion of Judah" 
              className="w-32 h-32 rounded-full shadow-glow-accent animate-pulse-sacred"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-sacred opacity-20 animate-glow" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-accent via-foreground to-primary-glow bg-clip-text text-transparent animate-float">
          ARK HORIZON
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-accent">
          Zion Genesis
        </h2>

        {/* Tagline */}
        <p className="text-xl md:text-2xl mb-12 text-foreground/90 max-w-4xl mx-auto leading-relaxed">
          Return to Zion, not as exiles — but as builders of the new covenant.
        </p>

        {/* Sound Player */}
        <div className="mb-12 flex justify-center items-center space-x-4">
          <Button variant="outline" size="lg" className="group">
            <Play className="mr-2 group-hover:animate-pulse" />
            Opening Dub Chant
          </Button>
          <Button variant="outline" size="lg" className="group">
            <Volume2 className="mr-2 group-hover:animate-pulse" />
            Heartbeat Drums
          </Button>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="sacred" size="xl" className="group">
            Join the Zion Movement
            <div className="ml-2 w-2 h-2 bg-primary-glow rounded-full animate-pulse" />
          </Button>
          <Button variant="hero" size="xl">
            Explore the Vision
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-accent rounded-full p-1">
            <div className="w-1 h-3 bg-accent rounded-full animate-bounce mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;