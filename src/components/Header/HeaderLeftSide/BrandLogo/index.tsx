import Image from 'next/image';

interface BrandLogoProps {
  logoUrl: string;
}

const BrandLogo = ({ logoUrl }: BrandLogoProps) => {
  return (
    <div className='flex items-center justify-center gap-1'>
      <Image
        src={logoUrl}
        alt='Brand Logo'
        width={40}
        height={40}
        className='rounded-full cursor-pointer'
      />
    </div>
  );
};

export default BrandLogo;
