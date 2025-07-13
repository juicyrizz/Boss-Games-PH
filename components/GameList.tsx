
import React, { forwardRef } from 'react';
import Section from './Section';
import type { Game } from '../types';
import { GAMES_LIST } from '../constants';

const SteamIcon: React.FC<{className?: string}> = ({className}) => (
    <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1024px-Steam_icon_logo.svg.png" 
        alt="Steam Logo" 
        className={className}
    />
);


const GameCard: React.FC<{ game: Game }> = React.memo(({ game }) => {
    return (
      <a 
        href={game.steamUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative block aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-900"
        aria-label={`View ${game.name} on Steam`}
      >
        {/* Animated Glow Border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500 group-hover:duration-300 animate-pulse"></div>

        {/* Main Content */}
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <img 
              src={game.imageUrl} 
              alt={game.name} 
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              {/* This container has a fixed height and clips the content */}
              <div className="h-12 overflow-hidden">
                  {/* This inner container moves on hover */}
                  <div className="transform-gpu transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
                      {/* Default state: Game Title */}
                      <div className="h-12 flex items-center">
                          <h3 className="font-bold text-lg drop-shadow-lg truncate">{game.name}</h3>
                      </div>
                      {/* Hover state: "View on Steam" */}
                      <div className="h-12 flex items-center gap-2">
                          <SteamIcon className="h-6 w-6" />
                          <span className="font-semibold">View on Steam</span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </a>
    );
});

const GameListComponent = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <Section id="games" ref={ref} className="bg-gray-900">
      <div className="text-center mb-12 scroll-animate">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Games We Play</h2>
        <p className="mt-2 text-lg text-gray-400">A selection of games featured on the channel. Click to visit on Steam.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {GAMES_LIST.map((game, index) => (
            <div key={game.id} className="scroll-animate" style={{ transitionDelay: `${150 + index * 100}ms`}}>
                <GameCard game={game} />
            </div>
        ))}
      </div>
    </Section>
  );
});

export default React.memo(GameListComponent);
