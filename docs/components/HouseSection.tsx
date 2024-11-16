import Image from 'next/image';
import Link from 'next/link';

interface House {
  name: string;
  crest: string;
  description: string;
  quote: string;
}

interface HouseSectionProps {
  houses?: House[];
  className?: string;
}

export const HouseSection: React.FC<HouseSectionProps> = ({ 
  className = '',
  houses = [
    {
      name: 'Gryffindor',
      crest: '//images.ctfassets.net/usf1vwtuqyxm/4PcgKT3VHNAUTvf7kXkdrD/2093bb06b6a9e6e74129f13c0c639932/Filled-Gryffindor.svg',
      description: 'Notable members include (of course) Harry Potter, Hermione Granger and Ron Weasley.',
      quote: 'You might belong in Gryffindor,\nWhere dwell the brave at heart,\nTheir daring, nerve and chivalry\nSet Gryffindors apart.'
    },
    {
      name: 'Hufflepuff',
      crest: '//images.ctfassets.net/usf1vwtuqyxm/1Et1EKQhLsGiql1ZlbHShw/79b58fe13d156833a808c82b085bedfe/Filled-Hufflepuff.svg',
      description: 'Notable members include Newt Scamander, Cedric Diggory and Nymphadora Tonks.',
      quote: 'You might belong in Hufflepuff\nWhere they are just and loyal\nThose patient Hufflepuffs are true\nAnd unafraid of toil.'
    },
    {
      name: 'Ravenclaw',
      crest: '//images.ctfassets.net/usf1vwtuqyxm/17xo05yCVo3tetTYhsgAvG/8963643ef613a74abc40a72548ddb953/Filled-Ravenclaw.svg',
      description: 'Notable members include Luna Lovegood, Gilderoy Lockhart and Filius Flitwick.',
      quote: 'Or yet in wise old Ravenclaw\nIf you\'ve a ready mind\nWhere those of wit and learning\nWill always find their kind.'
    },
    {
      name: 'Slytherin',
      crest: '//images.ctfassets.net/usf1vwtuqyxm/1dUgeiYSumqjTF6m8BWP1u/aa4d596be495975136ce08fe14a63e7b/Filled-Slytherin.svg',
      description: 'Notable members include Severus Snape, Draco Malfoy and (rather unfortunately) Lord Voldemort.',
      quote: 'Or perhaps in Slytherin\nYou\'ll make your real friends\nThose cunning folk use any means\nTo achieve their ends.'
    }
  ]
}) => {
  return (
    <section className={`max-w-6xl mx-auto px-4 py-8 ${className}`}>
      <div className="space-y-4 mb-8">
        <p>Are you Gryffindor? Are you Hufflepuff? Are you Slytherin? Are you Ravenclaw?</p>
        <p>Now, were assuming youre more than familiar with the four houses of Hogwarts, but heres a quick refresher, just in case.</p>
      </div>


      <div className="space-y-4 mb-8">
        <p>Hogwarts was founded over a thousand years ago by four powerful wizards: Godric Gryffindor, Salazar Slytherin, Rowena Ravenclaw and Helga Hufflepuff. They chose to split the students into four houses, each bearing their surnames and featuring young wizards and witches who displayed abilities and personalities they wanted to nurture.</p>
        <p>To do this, Godric Gryffindor used his magical hat – henceforward known as the Sorting Hat – to decide which children should go into which house, and so it has been ever since with a yearly Sorting Ceremony that places each new pupil into their own new home.</p>
        <p>The four houses have different entry requirements, and nobody summed them up better than the old Sorting Hat itself in its welcoming song...</p>
      </div>

      {houses.map((house) => (
        <div key={house.name} className="border-b border-gray-200 pb-12 mb-12 last:border-0">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">{house.name}</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-48">
              <Image
                src={house.crest}
                alt={`${house.name} crest`}
                width={188}
                height={188}
                className="w-full"
              />
            </div>
            <div className="flex-1 space-y-8">
              <p className="text-xl leading-relaxed">{house.description}</p>
              <div className="flex gap-8">
                <Image
                  src="//images.ctfassets.net/usf1vwtuqyxm/3Vh0IKq4YAaSB73rPfTkyP/92130622ddba7499ac841cb6bcaf13ed/quote.svg"
                  alt="Quote"
                  width={30}
                  height={30}
                />
                <div>
                  <p className="italic text-xl leading-relaxed whitespace-pre-line mb-4">{house.quote}</p>
                  <p className="text-gray-600">Harry Potter and the Philosophers Stone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="space-y-4">
      <p>Once youve tried the <Link 
          href="https://my.wizardingworld.com/sorting-hat" 
          className="
            text-[#463366] 
            hover:text-[#2A1B3D]
            font-medium
            transition-colors 
            duration-300
            border-b 
            border-[#463366]/30
            hover:border-[#463366]
            px-0.5
          "
        >
          Hogwarts Sorting Experience
        </Link>, you can find out more about your house, and how the houses came to be in the first place.</p>
        
        <p>You can read more about the <Link 
          href="/features/stories-of-the-hogwarts-founders" 
          className="
            text-[#463366] 
            hover:text-[#2A1B3D]
            font-medium
            transition-colors 
            duration-300
            border-b 
            border-[#463366]/30
            hover:border-[#463366]
            px-0.5
          "
        >
          founders of Hogwarts
        </Link> or the wily old <Link 
          href="/writing-by-jk-rowling/the-sorting-hat" 
          className="
            text-[#463366] 
            hover:text-[#2A1B3D]
            font-medium
            transition-colors 
            duration-300
            border-b 
            border-[#463366]/30
            hover:border-[#463366]
            px-0.5
          "
        >
          Sorting Hat
        </Link> and even your <Link 
          href="/features/hogwarts-ghosts" 
          className="
            text-[#463366] 
            hover:text-[#2A1B3D]
            font-medium
            transition-colors 
            duration-300
            border-b 
            border-[#463366]/30
            hover:border-[#463366]
            px-0.5
          "
        >
          house ghost
        </Link>.</p>
      </div>
    </section>
  );
};

export default HouseSection;