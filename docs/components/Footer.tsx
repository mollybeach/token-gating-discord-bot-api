import React from 'react';

export function Footer() {
  const houses = [
    { name: 'Gryffindor', emoji: '🦁', color: 'text-[#740001]' },
    { name: 'Slytherin', emoji: '🐍', color: 'text-[#1a472a]' },
    { name: 'Ravenclaw', emoji: '🦅', color: 'text-[#2b3f75]' },
    { name: 'Hufflepuff', emoji: '🦡', color: 'text-[#ecb939]' },
  ];

  return (
    <footer className="fixed bottom-0 w-full bg-[#0a2416]">
      {/* Gradient Background */}
      <div className="absolute inset-0 h-32 bg-gradient-to-t from-[#1A1A2E] to-transparent pointer-events-none z-[-1]" />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-between items-center text-[#B8C1EC]/70 text-sm">
          {/* Left Section - House Icons */}
          <div className="flex space-x-6 items-center">
            {houses.map((house) => (
              <div 
                key={house.name} 
                className={`hidden md:flex items-center space-x-2 ${house.color} hover:scale-110 transition-transform cursor-pointer`}
              >
                <span className="text-xl">{house.emoji}</span>
                <span className="text-xs">{house.name}</span>
              </div>
            ))}
          </div>

          {/* Center Section - Magical Elements */}
          <div className="hidden md:flex items-center space-x-2">
            <span>⚡</span>
            <span className="font-mystic">✨ &ldquo;Mischief Managed&rdquo; ✨</span>
            <span>⚡</span>
          </div>

          {/* Right Section - Credits */}
          <div className="text-right">
            <p className="text-xs opacity-70">
              Made with 🪄 by Magical Developers 🧙‍♂️
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C7A94F]/20 to-transparent" />
      </div>
    </footer>
  );
}

export default Footer;