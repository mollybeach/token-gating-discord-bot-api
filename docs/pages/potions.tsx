import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

interface Potion {
  id: string
  name: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  imageUrl: string
  ingredients: string[]
  effect: string
}

const potions: Potion[] = [
  {
    id: 'polyjuice',
    name: 'Polyjuice Potion',
    description: 'Allows the drinker to assume the appearance of another person using a lock of their hair',
    difficulty: 'Advanced',
    imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/4La5OjA9isMlX4HqPTlxVt/3e13616f100cb3f339e2aeea9e2500f9/potions-3-web-fact-file-images.jpg?h=832&w=1200&fit=pad&fm=webp',
    ingredients: ['Lacewing flies', 'Leeches', 'Powdered bicorn horn', 'Knotgrass'],
    effect: 'Transformation'
  },
  {
    id: 'veritaserum',
    name: 'Veritaserum',
    description: 'Makes the drinker tell the truth using a lock of their hair',
    difficulty: 'Intermediate',
    imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/53j93Xf36wnPvY6hR1mn4L/b12a607894d6e4d19ba38eaf4efe2866/potions-2-web-fact-file-images.jpg?h=832&w=1200&fit=pad&fm=webp',
    ingredients: ['Mandrake root', 'Dittany', 'Gillyweed'],
    effect: 'Truth'
  },
  {
    id: 'firewhisky',
    name: 'Firewhisky',
    description: 'A fiery drink that can be used to start a fire and is used to make a fire-breathing dragon',
    difficulty: 'Beginner',
    imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/3bKVSMJb55Xd4ZAu18FYvr/f1ab4e21d6e5eddb88fa65051ae25f11/potions-4-web-fact-file-images.jpg?h=832&w=1200&fit=pad&fm=webp',
    ingredients: ['Firewhiskey', 'Firewhiskey', 'Firewhiskey'],
    effect: 'Fire'
  },
  {
    id: 'fizzing-whizzing',
    name: 'Fizzing Whizzing',
    description: 'Makes the drinker sneeze and is used to make a dragon sneeze',
    difficulty: 'Beginner',
    imageUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/5urd399l7sodXJmpkXkLTf/d38ee8451eedcd9a4149af1779aa008c/potions-1-web-fact-file-images.jpg?h=832&w=1200&fit=pad&fm=webp',
    ingredients: ['Fizzing Whizzing', 'Fizzing Whizzing', 'Fizzing Whizzing'],
    effect: 'Sneeze'
  }
  // Add more potions as needed
]

const PotionsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Potions | Harry Potter</title>
        <meta name="description" content="Discover magical potions from the Wizarding World" />
      </Head>

      <div className="min-h-screen bg-[#1a0f2e] text-white">
        {/* Hero Section - reduced height */}
        <div className="relative h-[30vh] bg-gradient-to-b from-[#2d1b4d]/80 to-[#1a0f2e]">
          <Image
            src="/assets/potions-hero.jpg"
            alt="Potions Class"
            fill
            className="object-cover opacity-40 mix-blend-soft-light"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-[#1a0f2e]/50">
            <h1 className="text-4xl md:text-5xl font-bold text-[#c9a55c] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Potions
            </h1>
          </div>
        </div>

        {/* Main Content - updated background and colors */}
        <main className="container mx-auto px-4 py-8">
          {/* Filters - updated colors */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 rounded-full border border-[#c9a55c] text-[#c9a55c] hover:bg-[#c9a55c]/10 transition-colors">
                All Potions
              </button>
              <button className="px-4 py-2 rounded-full border border-emerald-400/20 text-emerald-400/80 hover:border-emerald-400 hover:text-emerald-400 transition-colors">
                Beginner
              </button>
              <button className="px-4 py-2 rounded-full border border-purple-400/20 text-purple-400/80 hover:border-purple-400 hover:text-purple-400 transition-colors">
                Advanced
              </button>
            </div>
          </div>

          {/* Potions Grid - updated card styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {potions.map((potion) => (
              <div 
                key={potion.id}
                className="bg-[#2d1b4d] rounded-lg overflow-hidden hover:shadow-[#c9a55c]/20 hover:shadow-lg transition-all border border-purple-900/30"
              >
                <div className="relative h-48">
                  <Image
                    src={potion.imageUrl}
                    alt={potion.name}
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`
                      px-3 py-1 rounded-full text-sm
                      ${potion.difficulty === 'Advanced' 
                        ? 'bg-purple-500/80 text-white' 
                        : 'bg-emerald-500/80 text-white'}
                    `}>
                      {potion.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-[#2d1b4d] to-[#1a0f2e]">
                  <h3 className="text-xl font-bold text-[#c9a55c] mb-2">{potion.name}</h3>
                  <p className="text-gray-300 mb-4">{potion.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {potion.ingredients.map((ingredient, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-[#1a0f2e] rounded-full text-sm text-emerald-300/90 border border-emerald-900/30"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default PotionsPage