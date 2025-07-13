
import React, { forwardRef } from 'react';
import Section from './Section';
import { scrollToSection } from '../utils';

interface AboutProps {
  contactRef: React.RefObject<HTMLElement>;
}

const AboutComponent = forwardRef<HTMLElement, AboutProps>(({ contactRef }, ref) => {
  return (
    <Section id="about" ref={ref} className="bg-gray-900 overflow-x-hidden">
        <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 flex items-center justify-center scroll-animate-left">
                <div className="relative w-full max-w-sm p-4 bg-gray-800/50 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="absolute -inset-20 bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 animate-spin [animation-duration:10s]"></div>
                    <div className="relative w-full aspect-[4/3] flex items-center justify-center bg-gray-900/80 rounded-lg backdrop-blur-sm overflow-hidden">
                        <img 
                            src="https://i.imgur.com/HxqbBPS.png" 
                            alt="BOSS GAMES gaming setup" 
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div className="md:col-span-3 scroll-animate-right" style={{ transitionDelay: '150ms' }}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight uppercase">
                    <span className="block text-indigo-400">WELCOME TO BOSS GAMES PH</span>
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                    Welcome to the crew. We've been in the game for life. What started as a hustle in a tiny bedroom is now the main grind, and we built it from the ground up with the squad.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                    We live for two things here: landing impossible shots in competitive shooters and mastering the worlds of deep RPGs. But the gameplay is only half the story. The real deal is the community we're building—a loyal crew that reps the BOSS GAMES name.
                </p>
                 <p className="text-gray-300 mb-6 leading-relaxed">
                    So whether you're here for the god-tier clutches or the hilariously bad jokes, you've found your spot.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Smash that subscribe button and roll with us.
                </p>
                <button onClick={() => scrollToSection(contactRef)} className="inline-block bg-transparent border-2 border-indigo-500 text-indigo-400 font-bold py-2 px-6 rounded-full uppercase tracking-wider hover:bg-indigo-500 hover:text-white transition-all duration-300">
                    Get in Touch
                </button>
            </div>
        </div>
    </Section>
  );
});

export default React.memo(AboutComponent);
