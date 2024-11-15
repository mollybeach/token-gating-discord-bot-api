import { useActiveAccount } from "thirdweb/react";
import { RoleButton } from "./buttons/RoleButton";
import ConnectDiscordButton from "./buttons/ConnectDiscordButton";
import GetSortedButton from "./buttons/GetSortedButton";
import LiveFeed from "../components/LiveFeed";
import { HouseSection } from "./HouseSection";
import { IntroSection } from "./IntroSection";
import { HouseCrestSection } from "./HouseCrestSection";

export function HomeContent() {
  const account = useActiveAccount();

  async function requestGrantRole() {
    try {
      if (!account) return;
      const response = await fetch("api/grant-role", {
        method: "POST",
        body: JSON.stringify({ address: account.address }),
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#16213E]">
      <div className="grid grid-cols-12 gap-6 container mx-auto px-4 py-12">
        {/* Main Content Area */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-[#1F1F1F]/60 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-[#2A2A2A]">
            <h1 className="text-4xl md:text-5xl font-mystic text-transparent bg-clip-text bg-gradient-to-r from-[#C7A94F] to-[#E2C275] mb-6">
              Welcome to the Magical Discord Gateway
            </h1>
            
            <p className="text-[#B8C1EC] text-lg mb-12 font-light">
              Step into a world where magic meets technology, where your journey begins...
            </p>

            <HouseCrestSection />

            {/* Authentication Section */}
            <div className="mt-12 space-y-6 max-w-md mx-auto">
              {!account && (
                <ConnectDiscordButton />
              )}
              
              {account && (
                <div className="space-y-4">
                  <GetSortedButton />
                  <RoleButton 
                    onClick={requestGrantRole}
                    className="w-full bg-[#2A3B2A] hover:bg-[#364B36] text-white py-4 px-6 rounded-lg transition-all duration-300 shadow-green-900/20 shadow-lg"
                  />
                </div>
              )}
            </div>

            <div className="mt-16">
              <IntroSection />
              <HouseSection />
            </div>
          </div>
        </div>

        {/* Live Feed Sidebar */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-[#1F1F1F]/60 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-[#2A2A2A] sticky top-6">
            <h3 className="text-2xl font-mystic text-[#C7A94F] mb-6">
              Recent Activities
            </h3>
            <LiveFeed />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute inset-0 bg-[url('/images/magical-pattern.png')] bg-repeat opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#1A1A2E]"></div>
      </div>
    </div>
  );
}