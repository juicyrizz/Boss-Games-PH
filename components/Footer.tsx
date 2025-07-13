
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} BOSS GAMES. All Rights Reserved.
          </p>
          <SocialLinks links={SOCIAL_LINKS} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;