import Image from "next/image";
import { PrimaryButton } from './PrimaryButton';

interface TokenButtonProps {
  onClick: () => void;
}

export function TokenButton({ onClick }: TokenButtonProps) {
  return (
    <PrimaryButton 
      onClick={onClick}
      className="flex items-center gap-3"
    >
      Buy Token
      <Image 
        src="/hogwarts.png" 
        alt="Hogwarts" 
        width={24} 
        height={24}
        className="rounded-full"
      />
    </PrimaryButton>
  );
}