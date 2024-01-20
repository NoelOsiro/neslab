import React from 'react';
import Image from 'next/image';

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => (
  <a href="#" className="text-xl font-bold flex items-center lg:ml-2.5">
    <Image height={24} src={src} className="h-6 mr-2" alt={alt} />
    <span className="self-center whitespace-nowrap text-black">NesLab</span>
  </a>
);
export default Logo;