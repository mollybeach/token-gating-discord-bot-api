//path: docs/pages/index.tsx
//import { ConnectButton } from "thirdweb/react";
import type { NextPage } from "next";
import { HomeContent } from "../components/HomeContent";
import { ThirdwebClient } from "thirdweb";
import { ConnectButton, ThirdwebProvider } from "thirdweb/react";

interface HomeProps {
  client: ThirdwebClient;
}

const Home: NextPage<HomeProps> = ({ client }) => {
  return (
    <ThirdwebProvider>
      {/* Background Elements - adjusted z-index */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[url('/images/magical-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E] via-[#1A1A2E]/95 to-[#1A1A2E]" />
        <div className="absolute inset-0 bg-[url('/images/mist-overlay.png')] bg-repeat opacity-5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[url('/images/magical-particles.png')] bg-repeat-y animate-float opacity-20" />
      </div>

      {/* Main Content */}
      <main className="relative min-h-screen z-[1]">
        <div className="container mx-auto px-4 pt-24">
          <HomeContent />
        </div>

        {/* Magical Corner Decorations - adjusted z-index */}
        <div className="fixed top-0 left-0 w-64 h-64 bg-[url('/images/corner-decoration.png')] bg-contain bg-no-repeat opacity-10 z-[-1]" />
        <div className="fixed top-0 right-0 w-64 h-64 bg-[url('/images/corner-decoration.png')] bg-contain bg-no-repeat transform scale-x-[-1] opacity-10 z-[-1]" />
        
        {/* Footer Accent - adjusted z-index */}
        <div className="fixed bottom-0 w-full h-24 bg-gradient-to-t from-[#1A1A2E] to-transparent pointer-events-none z-[-1]" />
      </main>
    </ThirdwebProvider>
  );
};

export default Home;
