// Add import at the top of the file
import React, { useState } from 'react';
// ... existing code ...
import type { NextPage } from 'next'
import Head from 'next/head'
import { useContract, useContractWrite } from "@thirdweb-dev/react"
import Image from 'next/image'

const houses = [
  { 
    name: 'Gryffindor', 
    tokenId: process.env.NEXT_PUBLIC_CONTRACT_TOKEN_ID_GRYFFINDOR,
    color: 'from-red-900 to-yellow-600',
    description: "Where dwell the brave at heart!"
  },
  { 
    name: 'Hufflepuff', 
    tokenId: process.env.NEXT_PUBLIC_CONTRACT_TOKEN_ID_HUFFLEPUFF,
    color: 'from-yellow-600 to-black',
    description: "Where they are just and loyal!"
  },
  { 
    name: 'Slytherin', 
    tokenId: process.env.NEXT_PUBLIC_CONTRACT_TOKEN_ID_SLYTHERIN,
    color: 'from-green-900 to-gray-800',
    description: "Those cunning folk use any means!"
  },
  { 
    name: 'Ravenclaw', 
    tokenId: process.env.NEXT_PUBLIC_CONTRACT_TOKEN_ID_RAVENCLAW,
    color: 'from-blue-900 to-bronze-500',
    description: "Wit beyond measure is man's greatest treasure!"
  },
]

const SortingHat: NextPage = () => {
  const [selectedHouse, setSelectedHouse] = useState<typeof houses[0] | null>(null)
  const [isSorting, setIsSorting] = useState(false)
  
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)
  const { mutateAsync: mintNft, isLoading } = useContractWrite(contract, "mintTo")

  const startSorting = () => {
    setIsSorting(true)
    // Dramatic pause before selecting house
    setTimeout(() => {
      const randomHouse = houses[Math.floor(Math.random() * houses.length)]
      setSelectedHouse(randomHouse)
      setIsSorting(false)
    }, 3000)
  }

  const mintHouseNFT = async () => {
    if (!selectedHouse) return
    try {
      await mintNft({ args: [selectedHouse.tokenId] })
    } catch (err) {
      console.error("Failed to mint NFT:", err)
    }
  }

  return (
    <>
      <Head>
        <title>Sorting Hat Ceremony</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#2D1F43] flex flex-col items-center pt-32">
        <div className="max-w-2xl w-full text-center px-4">
          {!selectedHouse && !isSorting && (
            <div className="space-y-7 animate-fade-in">
              <h1 className="text-4xl font-mystic text-[#E4BC7F]">The Sorting Hat Ceremony</h1>
              <Image 
                src="https://res.cloudinary.com/storagemanagementcontainer/image/upload/v1731724117/portfolio/sortinghat_qhloix.png"
                alt="Sorting Hat" 
                width={200} 
                height={200}
                className="mx-auto hover:rotate-3 transition-transform cursor-pointer"
              />
              <button
                onClick={startSorting}
                className="px-8 py-4 bg-[#FF69B4] hover:bg-[#3D2F53] text-white rounded-lg 
                          transition-all duration-300 font-mystic text-xl shadow-lg 
                          hover:shadow-purple-500/30"
              >
                Place the Sorting Hat on your head
              </button>
            </div>
          )}

          {isSorting && (
            <div className="space-y-4 animate-pulse">
              <h2 className="text-2xl font-mystic text-[#E4BC7F]">
                Hmm... Difficult, very difficult...
              </h2>
              <div className="w-16 h-16 border-4 border-[#E4BC7F] border-t-transparent 
                            rounded-full animate-spin mx-auto">
              </div>
            </div>
          )}

          {selectedHouse && !isSorting && (
            <div className={`p-8 rounded-lg bg-gradient-to-br ${selectedHouse.color} 
                           shadow-xl animate-fade-in space-y-6`}>
              <h2 className="text-4xl font-mystic text-[#E4BC7F]">
                {selectedHouse.name}!
              </h2>
              <p className="text-xl text-white font-mystic">{selectedHouse.description}</p>
              <button
                onClick={mintHouseNFT}
                disabled={isLoading}
                className="px-6 py-3 bg-[#FF69B4] hover:bg-[#3D2F53] text-white rounded-lg 
                          transition-all duration-300 font-mystic text-lg disabled:opacity-50"
              >
                {isLoading ? "Minting..." : "Claim Your House NFT"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default SortingHat 