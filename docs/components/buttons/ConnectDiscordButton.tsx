// components/ConnectDiscordButton.tsx
import React from "react";
import { signIn } from "next-auth/react";

const ConnectDiscordButton = () => {
  return (
    <button
      onClick={() => signIn("discord")}
      className="w-full bg-[#2E1437] hover:bg-[#3D1A4A] text-white py-4 px-6 rounded-lg transition-all duration-300 shadow-purple-900/20 shadow-lg"
    >
      Connect Discord
    </button>
  );
};

export default ConnectDiscordButton;
