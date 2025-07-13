
import React from 'react';
import type { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className = '' }) => {
  return (
    <div className={`flex items-center space-x-6 ${className}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
