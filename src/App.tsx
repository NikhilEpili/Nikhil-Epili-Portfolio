import { AnimatedHero } from "./components/anime/AnimatedHero";
import { CharacterProfile } from "./components/anime/CharacterProfile";
import { PowerSystem } from "./components/anime/PowerSystem";
import { StoryArcs } from "./components/anime/StoryArcs";
import { LoreSection } from "./components/anime/LoreSection";
import { BattleHistory } from "./components/anime/BattleHistory";
import { FinalScene } from "./components/anime/FinalScene";
import { ParticleField } from "./components/anime/ParticleField";
import { CyberpunkGrid } from "./components/anime/CyberpunkGrid";

export default function App() {
  return (
    <div className="dark min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background Layers */}
      <div className="fixed inset-0 pointer-events-none">
        <CyberpunkGrid />
        <ParticleField />
        
        {/* Neon Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-red-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Scan Lines */}
        <div className="absolute inset-0 bg-repeat opacity-[0.03]" 
          style={{ 
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)',
            pointerEvents: 'none'
          }} 
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <AnimatedHero />
        <CharacterProfile />
        <PowerSystem />
        <StoryArcs />
        <LoreSection />
        <BattleHistory />
        <FinalScene />
      </div>
    </div>
  );
}
