import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface HouseCrestSectionProps {
  // Add any props here if needed
}

export const HouseCrestSection: FC<HouseCrestSectionProps> = () => {
  return (
    <div className="
      relative 
      flex items-center justify-center gap-4 
      mx-auto px-8 py-12
      bg-[#1A1A2E]/40
      backdrop-blur-sm
      rounded-xl
      border border-[#463366]/20
      shadow-[0_0_25px_rgba(0,0,0,0.3)]
    ">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#2A1B3D]/20 to-transparent rounded-xl" />

      {/* First two crests */}
      <motion.div
        className="relative w-32 h-32 transition-transform duration-300 hover:scale-110"
        whileHover={{ y: -5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#463366]/10 to-transparent rounded-full blur-xl" />
        <Image
          src="//images.ctfassets.net/usf1vwtuqyxm/4PcgKT3VHNAUTvf7kXkdrD/2093bb06b6a9e6e74129f13c0c639932/Filled-Gryffindor.svg"
          alt="Gryffindor Crest"
          width={128}
          height={128}
          className="relative z-10 drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
        />
      </motion.div>

      <motion.div
        className="relative w-32 h-32 transition-transform duration-300 hover:scale-110"
        whileHover={{ y: -5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#463366]/10 to-transparent rounded-full blur-xl" />
        <Image
          src="//images.ctfassets.net/usf1vwtuqyxm/1Et1EKQhLsGiql1ZlbHShw/79b58fe13d156833a808c82b085bedfe/Filled-Hufflepuff.svg"
          alt="Hufflepuff Crest"
          width={128}
          height={128}
          className="relative z-10 drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
        />
      </motion.div>

      {/* Centered Button */}
      <div className="mx-2">
        <Link href="/sortinghat">
          <motion.button 
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              relative
              px-6 
              py-2.5
              text-sm
              bg-gradient-to-r 
              from-[#2A1B3D] 
              to-[#1D4B43] 
              text-[#E4BC7F]
              rounded-lg 
              font-cinzel
              tracking-wider
              shadow-[0_0_15px_rgba(0,0,0,0.3)]
              border
              border-[#463366]/30
              transition-all
              duration-300
              hover:shadow-[0_0_25px_rgba(70,51,102,0.5)]
              hover:text-[#F5D7A3]
              group
            "
          >
            <span className="relative z-10">GET SORTED NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#351F4F] to-[#235D52] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          </motion.button>
        </Link>
      </div>

      {/* Last two crests */}
      <motion.div
        className="relative w-32 h-32 transition-transform duration-300 hover:scale-110"
        whileHover={{ y: -5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#463366]/10 to-transparent rounded-full blur-xl" />
        <Image
          src="//images.ctfassets.net/usf1vwtuqyxm/17xo05yCVo3tetTYhsgAvG/8963643ef613a74abc40a72548ddb953/Filled-Ravenclaw.svg"
          alt="Ravenclaw Crest"
          width={128}
          height={128}
          className="relative z-10 drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
        />
      </motion.div>

      <motion.div
        className="relative w-32 h-32 transition-transform duration-300 hover:scale-110"
        whileHover={{ y: -5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#463366]/10 to-transparent rounded-full blur-xl" />
        <Image
          src="//images.ctfassets.net/usf1vwtuqyxm/1dUgeiYSumqjTF6m8BWP1u/aa4d596be495975136ce08fe14a63e7b/Filled-Slytherin.svg"
          alt="Slytherin Crest"
          width={128}
          height={128}
          className="relative z-10 drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
        />
      </motion.div>
    </div>
  );
};

export default HouseCrestSection;