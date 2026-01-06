
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Our Work', delay: 0.2 },
    { name: 'Services', delay: 0.4 },
    { name: 'The Studio', delay: 0.6 },
    { name: 'Contact', delay: 0.8 },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-8 md:px-16 py-6 md:py-8 ${
        isScrolled ? 'bg-[#F9F7F2]/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        {/* Brand Logo - Infinite Breathing Animation */}
        <div 
          className={`text-lg md:text-xl lg:text-2xl font-serif tracking-[0.2em] uppercase cursor-pointer hover:opacity-70 transition-all animate-luxury-breath ${isScrolled ? 'text-black' : 'text-white'}`}
          style={{ animationDuration: '6s' }}
        >
          Meraki <span className="font-light italic lowercase">The Art Studio</span>
        </div>

        {/* Desktop Navigation Links - Staggered Infinite Animation */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase().replace(' ', '-')}`}
              className={`text-[11px] uppercase tracking-[0.25em] font-medium transition-all relative group animate-luxury-breath ${isScrolled ? 'text-black' : 'text-white'}`}
              style={{ 
                animationDelay: `${item.delay}s`,
                animationDuration: '6s'
              }}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className={`md:hidden flex flex-col space-y-1.5 cursor-pointer p-2 ${isScrolled ? 'text-black' : 'text-white'}`}>
          <div className="w-6 h-[1px] bg-current"></div>
          <div className="w-4 h-[1px] bg-current self-end"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
