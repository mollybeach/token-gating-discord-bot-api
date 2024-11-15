import { motion } from 'framer-motion';

interface RoleButtonProps {
  onClick: () => void;
  className?: string;
}

export function RoleButton({ 
  onClick, 
  className = "w-full bg-gradient-to-r from-[#2A1B3D] to-[#1D4B43] hover:from-[#351F4F] hover:to-[#235D52] text-[#E4BC7F] py-4 px-8 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(89,56,150,0.3)] hover:shadow-[0_0_25px_rgba(89,56,150,0.5)] border border-[#463366]/20 backdrop-blur-sm font-[Cinzel] tracking-wider"
}: RoleButtonProps) {
  return (
    <motion.button 
      onClick={onClick}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-center gap-3">
        <svg 
          className="w-5 h-5 opacity-70" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M13.197 4.172l-3.197 8.182-3.197-8.182-4.803 10.828h16l-4.803-10.828zm-3.197 9.828l3.197-8.182 2.803 6.182h-6z"/>
        </svg>
        <span>Claim Magical Role</span>
      </div>
    </motion.button>
  );
}