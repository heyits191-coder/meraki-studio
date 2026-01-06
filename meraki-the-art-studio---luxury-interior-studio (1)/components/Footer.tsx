
import React, { useEffect, useRef, useState } from 'react';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const quickLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'];
  const services = ['Residential Interiors', 'Commercial Interiors', 'Turnkey Solutions', 'Design Consultation'];
  const socials = ['Instagram', 'Facebook', 'Pinterest', 'Behance'];

  return (
    <footer 
      ref={footerRef}
      className={`bg-[#F9F7F2] pt-24 pb-12 px-8 md:px-16 border-t border-black/5 transition-all duration-[2.5s] ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
          
          {/* COLUMN 1 – BRAND STORY */}
          <div className={`flex flex-col max-w-xs transition-opacity duration-[2s] delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h4 className="text-xl md:text-2xl font-serif tracking-widest uppercase mb-6 text-black/90">
              Meraki <span className="text-sm lowercase italic font-light block mt-1">The Art Studio</span>
            </h4>
            <p className="text-[#4A4A4A] text-sm md:text-base font-light leading-relaxed opacity-80">
              A luxury interior design studio helping homeowners and businesses design stylish, functional and elegant spaces.
            </p>
          </div>

          {/* COLUMN 2 – QUICK LINKS */}
          <div className={`flex flex-col space-y-4 transition-opacity duration-[2s] delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-4">Quick Links</span>
            <div className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase().replace(' ', '-')}`} 
                  className="text-sm font-light text-[#4A4A4A] transition-all duration-700 w-max relative group hover:text-black/70"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black/10 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 3 – SERVICES */}
          <div className={`flex flex-col space-y-4 transition-opacity duration-[2s] delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-4">Services</span>
            <div className="flex flex-col space-y-3">
              {services.map((service) => (
                <a 
                  key={service} 
                  href="#services" 
                  className="text-sm font-light text-[#4A4A4A] transition-all duration-700 w-max relative group hover:text-black/70"
                >
                  {service}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black/10 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 4 – CONTACT INFO */}
          <div className={`flex flex-col space-y-4 transition-opacity duration-[2s] delay-900 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-4">Contact Info</span>
            <div className="flex flex-col space-y-4 font-light text-[#4A4A4A] text-sm">
              <div className="flex flex-col group">
                <span className="text-[9px] uppercase tracking-[0.2em] text-black/30 mb-1">Email</span>
                <a href="mailto:hello@merakiartstudio.com" className="transition-all duration-700 hover:text-black/70 hover:translate-x-1">hello@merakiartstudio.com</a>
              </div>
              <div className="flex flex-col group">
                <span className="text-[9px] uppercase tracking-[0.2em] text-black/30 mb-1">Phone</span>
                <a href="tel:8530028111" className="transition-all duration-700 hover:text-black/70">+91 85300 28111</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.2em] text-black/30 mb-1">Location</span>
                <span className="transition-colors duration-700">India</span>
              </div>
            </div>
          </div>
        </div>

        {/* SOCIAL LINKS (MINIMAL) */}
        <div className={`flex flex-wrap gap-8 mb-16 transition-opacity duration-[2s] delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {socials.map((social) => (
            <a 
              key={social} 
              href="#" 
              className="text-[10px] uppercase tracking-[0.3em] text-black/50 hover:text-black/80 transition-all duration-700 ease-in-out"
            >
              {social}
            </a>
          ))}
        </div>

        {/* BOTTOM FOOTER BAR */}
        <div className={`pt-10 border-t border-black/[0.04] transition-all duration-[2s] delay-[1.2s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#4A4A4A] opacity-50">
              © Meraki The Art Studio. All rights reserved.
            </p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#4A4A4A] opacity-30 italic font-light">
              Designing stylish & functional spaces.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
