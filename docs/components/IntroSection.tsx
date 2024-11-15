import { motion } from 'framer-motion';

interface IntroSectionProps {
  className?: string;
  text?: string;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ 
  className = '',
  text = 'Welcome to the magical sorting experience! Discover which of the four legendary houses might be your perfect match.'
}) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`
        relative
        z-[1]
        max-w-prose 
        mx-auto 
        px-6 
        py-8 
        text-lg 
        md:text-xl 
        leading-relaxed 
        bg-gradient-to-r 
        from-[#1A1A2E] 
        to-[#2A1B3D] 
        rounded-lg 
        shadow-[0_0_15px_rgba(0,0,0,0.3)]
        border
        border-[#463366]/20
        backdrop-blur-sm
        ${className}
      `}
      data-testid="intro-section"
    >
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="
          first-letter:float-left 
          first-letter:text-7xl 
          first-letter:md:text-8xl 
          first-letter:pr-2 
          first-letter:font-serif 
          first-letter:text-[#E4BC7F]
          first-letter:font-bold
          text-[#B8B8B8]
          font-light
          tracking-wide
          selection:bg-[#2A1B3D]
          selection:text-[#E4BC7F]
        "
      >
        {text}
      </motion.p>
    </motion.section>
  );
};

// Styled subcomponents for additional content if needed
export const IntroHighlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#E4BC7F] font-medium">{children}</span>
);

export const IntroQuote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="
    italic 
    text-[#9B9B9B] 
    border-l-4 
    border-[#463366] 
    pl-4 
    my-4
    "
  >
    {children}
  </blockquote>
);

export default IntroSection;