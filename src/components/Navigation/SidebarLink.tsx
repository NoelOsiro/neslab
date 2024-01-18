// SidebarLink.tsx
import React from 'react';

interface SidebarLinkProps {
  href: string;
  text: string;
  icon: JSX.Element;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, text, icon }) => (
  <li>
    <a href={href} className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group">
      {icon}
      <span className="ml-3">{text}</span>
    </a>
  </li>
);

export default SidebarLink;
