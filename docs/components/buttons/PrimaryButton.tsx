interface PrimaryButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
  }
  
  export function PrimaryButton({ onClick, children, className = '' }: PrimaryButtonProps) {
    return (
      <button 
        onClick={onClick}
        className={`bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 ${className}`}
      >
        {children}
      </button>
    );
  }