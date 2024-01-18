import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => (
  <a href="#" className="text-xl font-bold flex items-center lg:ml-2.5">
    <img src={src} className="h-6 mr-2" alt={alt} />
    <span className="self-center whitespace-nowrap text-black">NesLab</span>
  </a>
);
export default Logo;