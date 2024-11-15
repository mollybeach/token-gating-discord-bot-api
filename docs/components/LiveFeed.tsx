// components/LiveFeed.tsx
import React from "react";

interface FeedItem {
    emoji: string;
    user: string;
    action: string;
  }

const FEED_DATA = [
  { emoji: "🦁", user: "WizardWanderer92", action: "Just joined Gryffindor!" },
  { emoji: "🪄", user: "MagicMaker123", action: "Purchased 15 tokens!" },
  { emoji: "🐍", user: "SerpentSeeker55", action: "Earned the Slytherin Expert role!" },
  { emoji: "🦅", user: "RavenReader42", action: "Just joined Ravenclaw!" },
  { emoji: "🧙‍♂️", user: "AlchemyAce", action: "Purchased 30 tokens!" },
  { emoji: "🦡", user: "HufflepuffHero", action: "Earned the Hufflepuff Novice role!" },
  { emoji: "⚡", user: "LightningLegend", action: "Just joined Gryffindor!" },
  { emoji: "🔮", user: "CrystalGazer", action: "Purchased 50 tokens!" },
  { emoji: "🐍", user: "BasiliskBrain", action: "Earned the Slytherin Master role!" },
  { emoji: "🦅", user: "WisdomSeeker", action: "Just joined Ravenclaw!" },
  { emoji: "🧪", user: "PotionPro99", action: "Purchased 25 tokens!" },
  { emoji: "🦁", user: "BravePaw22", action: "Earned the Gryffindor Journeyman role!" },
  { emoji: "🪄", user: "CharmCaster", action: "Just joined Hufflepuff!" },
  { emoji: "🌟", user: "StarStudent", action: "Purchased 40 tokens!" },
  { emoji: "🐍", user: "CunningCrafter", action: "Earned the Slytherin Novice role!" },
  { emoji: "🦅", user: "BookWorm42", action: "Just joined Ravenclaw!" },
  { emoji: "🧙‍♀️", user: "SpellMaster", action: "Purchased 60 tokens!" },
  { emoji: "🦡", user: "LoyalHeart", action: "Earned the Hufflepuff Expert role!" },
  { emoji: "⚡", user: "ThunderBolt", action: "Just joined Gryffindor!" },
  { emoji: "🔮", user: "DivinationPro", action: "Purchased 35 tokens!" },
  { emoji: "🐍", user: "SnakeCharmer", action: "Earned the Slytherin Journeyman role!" },
  { emoji: "🦅", user: "EagleEye", action: "Just joined Ravenclaw!" },
  { emoji: "🧪", user: "ElixirExpert", action: "Purchased 45 tokens!" },
  { emoji: "🦁", user: "LionHeart", action: "Earned the Gryffindor Master role!" },
  { emoji: "🪄", user: "WandWielder", action: "Just joined Hufflepuff!" },
  { emoji: "🌟", user: "MagicScholar", action: "Purchased 20 tokens!" },
  { emoji: "🐍", user: "SlytherinPride", action: "Earned the Slytherin Expert role!" },
  { emoji: "🦅", user: "WitBeyond", action: "Just joined Ravenclaw!" },
  { emoji: "🧙‍♂️", user: "MerlinsBeard", action: "Purchased 55 tokens!" },
  { emoji: "🦡", user: "BadgerBrave", action: "Earned the Hufflepuff Journeyman role!" },
  { emoji: "⚡", user: "QuidditchPro", action: "Just joined Gryffindor!" },
  { emoji: "🔮", user: "FortuneSeer", action: "Purchased 70 tokens!" },
  { emoji: "🐍", user: "PureBlood", action: "Earned the Slytherin Master role!" },
  { emoji: "🦅", user: "CleverClaw", action: "Just joined Ravenclaw!" },
  { emoji: "🧪", user: "BrewMaster", action: "Purchased 30 tokens!" },
  { emoji: "🦁", user: "GryffindorGold", action: "Earned the Gryffindor Expert role!" },
  { emoji: "🪄", user: "MagicMight", action: "Just joined Hufflepuff!" },
  { emoji: "🌟", user: "SpellSeeker", action: "Purchased 40 tokens!" },
  { emoji: "🐍", user: "AmbitionFirst", action: "Earned the Slytherin Novice role!" },
  { emoji: "🦅", user: "KnowledgeKeeper", action: "Just joined Ravenclaw!" },
  { emoji: "🧙‍♀️", user: "EnchantressElite", action: "Purchased 65 tokens!" },
  { emoji: "🦡", user: "TrueHeart", action: "Earned the Hufflepuff Master role!" },
  { emoji: "⚡", user: "ScarredHero", action: "Just joined Gryffindor!" },
  { emoji: "🔮", user: "OracleSight", action: "Purchased 25 tokens!" },
  { emoji: "🐍", user: "ChamberSeeker", action: "Earned the Slytherin Journeyman role!" },
  { emoji: "🦅", user: "WiseWizard", action: "Just joined Ravenclaw!" },
  { emoji: "🧪", user: "AlchemyArtist", action: "Purchased 50 tokens!" },
  { emoji: "🦁", user: "BattleBrave", action: "Earned the Gryffindor Novice role!" },
  { emoji: "🪄", user: "WandLore", action: "Just joined Hufflepuff!" },
  { emoji: "🌟", user: "MagicMaster", action: "Purchased 80 tokens!" },
];

const LiveFeed = () => {
  return (
    <div className="
      bg-[#1A1A2E]/80 
      backdrop-blur-sm 
      text-[#E4BC7F] 
      p-6 
      rounded-lg 
      shadow-[0_0_15px_rgba(0,0,0,0.3)] 
      w-full 
      max-w-2xl 
      mx-auto 
      overflow-y-auto 
      max-h-[800px]
      border
      border-[#463366]/20
      scrollbar-thin
      scrollbar-thumb-[#463366]
      scrollbar-track-[#1A1A2E]
    ">
      <h2 className="font-mystic text-2xl text-[#E4BC7F] mb-6 border-b border-[#463366]/30 pb-4">
        Live Discord Feed
      </h2>
      <div className="space-y-3">
        <style jsx global>{`
          .feed-item {
            transition: all 0.2s ease;
          }
          .feed-item:hover {
            background: rgba(70, 51, 102, 0.2);
            transform: translateX(4px);
          }
        `}</style>
        {FEED_DATA.map((item, index) => (
          <p 
            key={index} 
            className="
              feed-item 
              p-2 
              rounded 
              text-[#B8B8B8] 
              hover:text-[#E4BC7F]
              cursor-default
              transition-all
              duration-200
              hover:bg-[#463366]/20
              hover:translate-x-1
            "
          >
            {item.emoji} [{item.user}]: {item.action}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LiveFeed;