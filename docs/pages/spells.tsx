import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

interface SpellCategory {
  title: string
  spells: {
    name: string
    description: string,
    image: string
  }[]
}

const Spells: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#0B163B] text-white">
      <Head>
        <title>Spells Guide | Harry Potter</title>
        <meta name="description" content="Guide to spells in the Harry Potter universe" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-[50vh] mb-8">
            <Image
              src="https://images.ctfassets.net/usf1vwtuqyxm/1MAvmyjr9bfWwKJAUWt4yV/959f1bfcdabdf006ed4404d911193e8c/HP-F5-order-of-the-phoenix-hermione-da-wand-web-landscape?w=2048&fm=jpg&q=70"
              alt="Spells Hero Image"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-8 left-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Your Guide to Spells
                </h1>
                <p className="text-lg md:text-xl">
                  Discover the magical world of spellcasting
                </p>
              </div>
            </div>
          </div>

          {/* Spells Content */}
          <div className="space-y-12">
            {spellCategories.map((category, index) => (
              <section key={index} className="border-b border-gray-700 pb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  {category.title}
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {category.spells.map((spell, spellIndex) => (
                    <div 
                      key={spellIndex}
                      className="bg-[#1A2544] p-6 rounded-lg hover:bg-[#243154] transition"
                    >
                      <h3 className="text-xl font-bold mb-2 text-[#C4A962]">
                        {spell.name}
                      </h3>
                      <p className="text-gray-300">
                        {spell.description}
                      </p>
                      <div className="flex justify-center items-center pt-6 mt-auto">
                        <Image
                          src={spell.image}
                          alt="Spell Image"
                          width={300}
                          height={300}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

const spellCategories: SpellCategory[] = [
  {
    title: "Essential Spells",
    spells: [
      {
        name: "Lumos",
        description: "Creates light at the tip of the wand",
        image:"https://images.ctfassets.net/usf1vwtuqyxm/6SxLe7lBqyoGXPDx7jxotS/b4239f92ee20251a5b7774897d0aea49/HP-F8-deathly-hallows-part-two-neville-harry-ron-hermione-staring-lumos-web-landscape?w=914&q=70&fm=webp",
      },
      {
        name: "Alohomora",
        description: "Unlocks doors and windows",
        image:"https://images.ctfassets.net/usf1vwtuqyxm/1o3KLDMOaqS3D0SCPboMPE/2b0802f0e6a7663d9eeeb0a2baad1def/WB-HP-F1-philosophers-stone-fluffy.jpg?w=914&q=70&fm=webp"
      },
      // Add more spells as needed
    ]
  },
  {
    title: "Defensive Spells",
    spells: [
      {
        name: "Expelliarmus",
        description: "Disarms your opponent",
        image:"https://images.ctfassets.net/usf1vwtuqyxm/7rQkd8lyu3OpUJCUFZz4Cl/fffdbd6acc401438b3ad2b838e2d3e42/ron-broken-wand-rat.jpg?w=914&q=70&fm=webp"
      },
      {
        name: "Protego",
        description: "Creates a magical shield",
        image:"https://images.ctfassets.net/usf1vwtuqyxm/7rQkd8lyu3OpUJCUFZz4Cl/fffdbd6acc401438b3ad2b838e2d3e42/ron-broken-wand-rat.jpg?w=914&q=70&fm=webp"
      },
      // Add more spells as needed
    ]
  }
]

export default Spells