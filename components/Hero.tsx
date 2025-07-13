import React, { forwardRef } from 'react';
import { scrollToSection } from '../utils';

interface HeroProps {
  videosRef: React.RefObject<HTMLElement>;
}

const HeroComponent = forwardRef<HTMLElement, HeroProps>(({ videosRef }, ref) => {
  return (
    <section id="home" ref={ref} className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9bc27292880429.5e569ff84e4d0.gif"
          alt="Abstract animated background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white">
          <span className="block mb-2 text-indigo-400 drop-shadow-[0_2px_2px_rgba(79,70,229,0.8)]">BOSS GAMES PH</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light tracking-wide">
          Pro-level plays, hilarious moments, and a community that feels like family. Welcome to the hub.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://www.youtube.com/channel/UCNxWiktsb9MOQxuZDdYrtxw" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-indigo-500 transform hover:scale-105 transition-all duration-300">
                YouTube Channel
            </a>
             <button onClick={() => scrollToSection(videosRef)} className="w-full sm:w-auto inline-block bg-gray-700/50 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-gray-600/70 transform hover:scale-105 transition-all duration-300">
                Latest Videos
            </button>
        </div>
      </div>
    </section>
  );
});

export default React.memo(HeroComponent);
