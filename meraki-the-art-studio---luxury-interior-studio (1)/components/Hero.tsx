
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  
  // High-quality stock video URL showing luxury interiors
  const videoUrl = "Hyper_cinematic_architectural_1080p_202601061.mp4";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const opacity = Math.max(0, 1 - (scrollY / (windowHeight * 0.7)));
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A0A0A]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 select-none">
        <div className="absolute inset-0 opacity-0 animate-[pageFadeIn_3s_ease-out_forwards]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Hero Content - Always Animated with Breathing effect */}
      <div 
        className="relative z-20 h-full max-w-screen-2xl mx-auto px-8 md:px-16 flex flex-col justify-center items-start text-white transition-opacity duration-300"
        style={{ opacity: scrollOpacity }}
      >
        <div className="max-w-4xl animate-luxury-breath">
          <p className="opacity-0 animate-fade-up text-[10px] md:text-xs uppercase tracking-[0.4em] font-light mb-6">
            100+ Projects Delivered Globally
          </p>

          <h1 className="opacity-0 animate-fade-up delay-100 text-5xl md:text-8xl lg:text-[10rem] font-serif mb-8 leading-[1] tracking-tight">
            Meraki <br /> <span className="text-4xl md:text-7xl lg:text-[6rem] italic font-light opacity-90">The Art Studio</span>
          </h1>

          <p className="opacity-0 animate-fade-up delay-200 text-base md:text-xl font-light text-white/80 max-w-lg mb-12 leading-relaxed">
            Helping homeowners and businesses design stylish, functional and artistic spaces that inspire.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-10">
            <button className="opacity-0 animate-scale-in delay-300 group relative px-10 py-4 bg-white text-black text-[11px] uppercase tracking-[0.25em] overflow-hidden transition-all duration-500 hover:bg-black hover:text-white">
              <span className="relative z-10">Explore Our Projects</span>
            </button>

            <a 
              href="#contact" 
              className="opacity-0 animate-fade-up delay-400 group text-[11px] uppercase tracking-[0.25em] relative py-2"
            >
              Start Consultation
              <span className="absolute bottom-0 left-0 w-8 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Always Animated */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 z-20">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white animate-luxury-breath" style={{ animationDuration: '4s' }}>Scroll</span>
        <div className="w-[1px] h-20 bg-white/10 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full h-full bg-white/60"
            style={{ 
              animation: 'scrollSlide 2.5s cubic-bezier(0.65, 0, 0.35, 1) infinite' 
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
