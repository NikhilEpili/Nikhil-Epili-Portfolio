import { CharacterProfile } from "../components/anime/CharacterProfile";
import { PowerSystem } from "../components/anime/PowerSystem";
import { BattleHistory } from "../components/anime/BattleHistory";

export function About() {
  return (
    <div className="pt-16">
      <CharacterProfile />
      <PowerSystem />
      <BattleHistory />
    </div>
  );
}
