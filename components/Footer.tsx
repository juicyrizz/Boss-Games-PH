import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center scroll-animate">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} BOSS GAMES. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
