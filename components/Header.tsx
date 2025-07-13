
import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../utils';

const NavLink: React.FC<{ sectionRef: React.RefObject<HTMLElement>; children: React.ReactNode; onClick?: () => void }> = ({ sectionRef, children, onClick }) => (
  <button
    onClick={() => {
      scrollToSection(sectionRef);
      if (onClick) {
        onClick();
      }
    }}
    className="text-sm font-semibold tracking-wider uppercase text-gray-300 hover:text-indigo-400 transition-all duration-300"
  >
    {children}
  </button>
);

interface HeaderProps {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLElement>;
  };
}

const Header: React.FC<HeaderProps> = ({ sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'videos', label: 'Videos' },
    { key: 'games', label: 'Games' },
    { key: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg shadow-indigo-500/10' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection(sectionRefs.home)} className="text-2xl font-bold text-white tracking-widest text-left">
            <span className="text-indigo-500">BOSS</span>GAMES
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <NavLink key={link.key} sectionRef={sectionRefs[link.key]}>{link.label}</NavLink>)}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md pb-4">
          <div className="flex flex-col items-center space-y-4 pt-2">
            {navLinks.map(link => (
              <NavLink key={link.key} sectionRef={sectionRefs[link.key]} onClick={() => setIsOpen(false)}>{link.label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;