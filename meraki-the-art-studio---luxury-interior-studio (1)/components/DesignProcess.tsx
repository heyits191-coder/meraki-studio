
import React, { useEffect, useRef, useState } from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  loopDelay: number;
  entranceDelay: number;
  isVisible: boolean;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, title, description, loopDelay, entranceDelay, isVisible, isLast 
}) => (
  <div 
    className={`relative flex flex-col items-start transition-all duration-[1.8s] ease-out ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'
    } ${!isLast ? 'lg:pr-12' : ''}`}
    style={{ transitionDelay: `${entranceDelay}ms` }}
  >
    {/* Step Number - Static Opacity Pulse */}
    <span 
      className="text-4xl md:text-5xl font-serif text-black mb-8 block select-none animate-number-pulse"
      style={{ animationDelay: `${loopDelay}s` }}
    >
      {number}
    </span>
    
    {/* Step Content Container - Continuous Subtle Float (Opacity + Vertical Movement) */}
    <div 
      className="animate-subtle-float"
      style={{ animationDelay: `${loopDelay}s` }}
    >
      <h3 className="text-xl md:text-2xl font-serif mb-4 tracking-wide text-black">
        {title}
      </h3>
      <p className="text-[#4A4A4A] font-light leading-relaxed text-sm md:text-base max-w-[240px]">
        {description}
      </p>
    </div>

    {/* Subtle Vertical Divider for Desktop */}
    {!isLast && (
      <div className={`hidden lg:block absolute top-12 right-0 w-[1px] h-32 bg-black/5 transition-all duration-[2s] delay-[1s] ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}></div>
    )}
  </div>
);

const DesignProcess: React.FC = () => {
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

  const steps = [
    {
      number: "01",
      title: "Concept & Consultation",
      description: "Understanding client vision, lifestyle and project requirements.",
      loopDelay: 0,
      entranceDelay: 100
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Creating refined layouts, materials and design concepts.",
      loopDelay: 0.6,
      entranceDelay: 300
    },
    {
      number: "03",
      title: "Execution & Detailing",
      description: "Precision-driven execution with close attention to every detail.",
      loopDelay: 1.2,
      entranceDelay: 500
    },
    {
      number: "04",
      title: "Final Styling & Handover",
      description: "Delivering a polished, functional and beautifully finished space.",
      loopDelay: 1.8,
      entranceDelay: 700
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="our-approach"
      className="py-24 md:py-40 px-8 md:px-16 bg-[#F9F7F2] border-t border-black/5 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className={`mb-20 md:mb-32 text-center transition-all duration-[1.5s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-[10px] md:text-xs uppercase tracking-[0.4em] text-black/50 mb-6 animate-luxury-breath">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.2] mb-8 animate-luxury-breath" style={{ animationDelay: '0.3s' }}>
            Our Design Philosophy
          </h2>
          <p className="text-[#4A4A4A] font-light text-base md:text-lg max-w-lg mx-auto">
            A thoughtful process that transforms ideas into timeless interior spaces.
          </p>
        </div>

        {/* Steps Grid - Staggered Right to Left Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 lg:gap-0">
          {steps.map((step, index) => (
            <ProcessStep 
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              loopDelay={step.loopDelay}
              entranceDelay={step.entranceDelay}
              isVisible={isVisible}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
