import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CoreFeaturesSection from "@/components/CoreFeaturesSection";
import MissionSection from "@/components/MissionSection";
import TechStackSection from "@/components/TechStackSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <section id="systems">
          <CoreFeaturesSection />
        </section>
        
        <section id="missions">
          <MissionSection />
        </section>
        
        <section id="technology">
          <TechStackSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
