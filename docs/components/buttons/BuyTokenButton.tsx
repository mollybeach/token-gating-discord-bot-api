// components/BuyTokenButton.tsx
import React from "react";

const BuyTokenButton = () => {
  const handleBuyToken = () => {
    console.log("Redirecting to token purchase...");
  };

  return (
    <button
      onClick={handleBuyToken}
      className="bg-accentGold text-night font-mystic px-6 py-3 rounded-md shadow-glow hover:bg-accentGold/90 transition-colors duration-200"
    >
      Buy Our Token
    </button>
  );
};

export default BuyTokenButton;
