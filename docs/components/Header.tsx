// components/Header.tsx
import React, { useState, useEffect } from "react";
import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const [magicalTitle, setMagicalTitle] = useState("Magical Student");
  
  useEffect(() => {
    const magicalTitles = [
      "Aspiring Wizard",
      "Mystical Apprentice",
      "Future Spellcaster",
      "Wandering Scholar",
      "Magical Novice"
    ];
    const randomTitle = magicalTitles[Math.floor(Math.random() * magicalTitles.length)];
    setMagicalTitle(randomTitle);
  }, []);
/*
  const customTheme = darkTheme({
    primaryButtonBg: "#405cf5", 
    buttonTextColor: "#ffffff",       // Replace with your preferred text color
  });*/
  
  return (
    <header className="relative">
      {/* Magical Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0F2E] to-[#1A1A2E] shadow-[0_5px_25px_rgba(0,0,0,0.35)]" />
      
      {/* Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#9B8164]/30 to-transparent" />
      
      {/* Magical Mist Effect */}
      <div className="absolute inset-0 bg-[url('/mist-texture.png')] opacity-5 mix-blend-overlay" />

      {/* Main Content */}
      <div className="container mx-auto relative">
        <nav className="flex justify-between items-center px-2 md:px-1 py-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <Image 
                src="/hogwarts.png" 
                alt="Hogwarts" 
                width={48} 
                height={48}
                className="transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#C7A94F]/20 rounded-full blur-xl scale-75 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <h1 className="
                text-3xl 
                md:text-4xl 
                font-mystic 
                text-transparent 
                bg-clip-text 
                bg-gradient-to-r 
                from-[#C7A94F] 
                to-[#E2C275]
                transition-all
                duration-500
                hover:from-[#E2C275]
                hover:to-[#C7A94F]
              ">
                Magical Gateway
              </h1>
              <span className="text-sm text-[#9B8164] font-light tracking-wider">
                Discord & Token Access
              </span>
            </div>
          </Link>

          {/* Navigation Links with User Status */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Houses</NavLink>
            <NavLink href="/spells">Spells</NavLink>
            <NavLink href="/potions">Potions</NavLink>
            
            {/* Discord-style username display */}
            <div className="flex items-center gap-2">
              {/* Online status indicator */}
              <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.5)]" />
              
              <span className="font-medium text-gray-100">
                {session?.user?.name || magicalTitle}
                {session?.user?.name && (
                  <span className="text-gray-400 font-normal">#{Math.floor(1000 + Math.random() * 9000)}</span>
                )}
              </span>
            </div>

            {/* Hogwarts Contract Button */}
            <Link 
              href={`https://etherscan.io/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                px-4
                py-2
                bg-[#2A1B3D]/40
                hover:bg-[#2A1B3D]/60
                rounded-lg
                border
                border-[#C7A94F]/30
                transition-all
                duration-300
                flex
                items-center
                gap-2
              "
            >
              <Image 
                src="/hogwarts.png" 
                alt="Hogwarts Contract" 
                width={20} 
                height={20}
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <span className="
                text-transparent 
                bg-clip-text 
                bg-gradient-to-r 
                from-[#C7A94F] 
                to-[#E2C275]
                font-mystic
                text-sm
              ">
                View Contract
              </span>
              <div className="absolute inset-0 bg-[#C7A94F]/5 rounded-lg blur-xl group-hover:bg-[#C7A94F]/10 transition-all duration-300" />
            </Link>

            {/* Connect Wallet Button */}
            <div className="relative z-20">
              <ConnectWallet 
                className="
                relative 
                 bg-[#FF69B4] 
                hover:bg-[#3D2F53]  
                text-[#E4BC7F] 
                hover:text-white
                px-6 
                py-2 
                rounded-lg 
                border 
                border-[#463366]/30 
                transition-all 
                duration-300 
                font-mystic
                text-lg
              "
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Navigation Link Component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="
      text-[#9B8164] 
      hover:text-[#C7A94F] 
      transition-colors 
      duration-300 
      font-mystic 
      tracking-wider 
      text-lg
    "
  >
    {children}
  </Link>
);

export default Header;
