// components/GetSortedButton.tsx
import React from "react";

const GetSortedButton = () => {
  const handleGetSorted = () => {
    // Sorting logic
    console.log("Sorting user into a house...");
  };

  return (
    <button
      onClick={handleGetSorted}
      className="w-full bg-[#1B3A4B] hover:bg-[#234B61] text-white py-4 px-6 rounded-lg transition-all duration-300 shadow-cyan-900/20 shadow-lg"
    >
      Get Sorted
    </button>
  );
};

export default GetSortedButton;
