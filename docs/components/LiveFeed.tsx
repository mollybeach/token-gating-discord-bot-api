// components/LiveFeed.tsx
import React, { useEffect, useState } from "react";

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
  const [feedItems, setFeedItems] = useState(FEED_DATA);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedItems(prevItems => {
        const newItems = [...prevItems];
        // Move last item to the top
        const lastItem = newItems.pop()!;
        newItems.unshift(lastItem);
        return newItems;
      });
    }, 1000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
      overflow-hidden 
      border
      border-[#463366]/20
      relative
    ">
      <h2 className="font-mystic text-2xl text-[#E4BC7F] mb-6 border-b border-[#463366]/30 pb-4">
        Live Discord Feed
      </h2>

      {/* Fade overlay at top */}
      <div className="absolute top-[4.5rem] left-0 right-0 h-8 bg-gradient-to-b from-[#1A1A2E] to-transparent z-10" />

      <div className="
        max-h-[800px] 
        overflow-hidden
        space-y-3
      ">
        {feedItems.map((item, index) => (
          <div 
            key={`${item.user}-${index}`}
            className="
              transform
              transition-transform
              duration-1000
              feed-item 
              p-2 
              rounded 
              text-[#B8B8B8] 
              hover:text-[#E4BC7F]
              cursor-default
              hover:bg-[#463366]/20
              animate-slideUp
            "
          >
            {item.emoji} [{item.user}]: {item.action}
          </div>
        ))}
      </div>

      {/* Fade overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#1A1A2E] to-transparent" />

      <style jsx global>{`
        @keyframes slideUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .feed-item {
          transition: all 0.2s ease;
        }
        .feed-item:hover {
          background: rgba(70, 51, 102, 0.2);
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
};

export default LiveFeed;