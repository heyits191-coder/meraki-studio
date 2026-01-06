
import React, { useEffect, useRef, useState } from 'react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-40 px-8 md:px-16 bg-[#F9F7F2] border-t border-black/5"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className={`mb-20 md:mb-32 transition-all duration-[2s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-[10px] md:text-xs uppercase tracking-[0.4em] text-black/50 mb-6 animate-luxury-breath">
            Consultation
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.2] mb-8 animate-luxury-breath" style={{ animationDelay: '0.4s' }}>
            Ready to redesign <br className="hidden md:block" /> your world?
          </h2>
          <p className="text-[#4A4A4A] font-light text-base md:text-lg max-w-lg">
            Let's discuss how Meraki The Art Studio can help you create a stylish and functional space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div className={`flex flex-col space-y-12 transition-all duration-[2s] delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-[#4A4A4A] font-light text-lg leading-relaxed max-w-md">
              Whether it's your dream home or a business workspace, we bring artistic vision and functional design to the table.
            </p>
            
            <div className="flex flex-col space-y-6">
              {[
                { label: 'Email', value: 'hello@merakiartstudio.com', type: 'link', href: 'mailto:hello@merakiartstudio.com' },
                { label: 'Phone', value: '+91 85300 28111', type: 'link', href: 'tel:8530028111' },
                { label: 'Studio Location', value: 'India', type: 'text' }
              ].map((item, idx) => (
                <div key={item.label} className="flex flex-col animate-subtle-float" style={{ animationDelay: `${idx * 0.4}s` }}>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-1">{item.label}</span>
                  {item.type === 'link' ? (
                    <a href={item.href} className="text-lg md:text-xl font-light hover:text-black/60 transition-all hover:translate-x-1 inline-block">{item.value}</a>
                  ) : (
                    <span className="text-lg md:text-xl font-light">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form 
            className={`flex flex-col space-y-8 transition-all duration-[2s] delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col border-b border-black/10 focus-within:border-black transition-all duration-700 py-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-1">Name</label>
                <input type="text" className="bg-transparent outline-none py-1 font-light" placeholder="Your full name" />
              </div>
              <div className="flex flex-col border-b border-black/10 focus-within:border-black transition-all duration-700 py-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-1">Email</label>
                <input type="email" className="bg-transparent outline-none py-1 font-light" placeholder="email@example.com" />
              </div>
            </div>

            <div className="flex flex-col border-b border-black/10 focus-within:border-black transition-all duration-700 py-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-1">Phone</label>
              <input type="tel" className="bg-transparent outline-none py-1 font-light" placeholder="+91 85300 28111" />
            </div>

            <div className="flex flex-col border-b border-black/10 focus-within:border-black transition-all duration-700 py-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-1">Project Type</label>
              <select className="bg-transparent outline-none py-1 font-light">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Boutique Office</option>
                <option>Other</option>
              </select>
            </div>

            <div className="pt-6">
              <button className="group relative px-12 py-4 bg-black text-white text-[11px] uppercase tracking-[0.25em] overflow-hidden transition-all duration-700 hover:bg-black/90 hover:scale-105 active:scale-95">
                <span className="relative z-10">Send Inquiry</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
