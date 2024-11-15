// components/Header.tsx
import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
        <nav className="flex justify-between items-center px-6 py-4">
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
              <h1 className="text-3xl font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#C7A94F] to-[#E2C275]">
                Magical Gateway
              </h1>
              <span className="text-sm text-[#9B8164] font-light tracking-wider">
                Discord & Token Access
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/houses">Houses</NavLink>
            <NavLink href="/spells">Spells</NavLink>
            <NavLink href="/potions">Potions</NavLink>
          </div>

          {/* Connect Wallet Button */}
          <div className="relative z-20">
            <ConnectWallet 
              className="relative bg-[#1A1A2E] hover:bg-[#2A1B3D] text-[#E4BC7F] px-6 py-2 rounded-lg border border-[#463366]/30 transition-all duration-300 font-cinzel"
              theme="dark"
            />
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
    className="text-[#9B8164] hover:text-[#C7A94F] transition-colors duration-300 font-cinzel tracking-wider text-sm"
  >
    {children}
  </Link>
);

export default Header;
