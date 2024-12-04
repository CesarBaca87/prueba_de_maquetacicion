import { useEffect, useState } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/src/assets/bkg_home.jpg"
          alt="Background"
          className="w-full h-full object-cover transform scale-105 transition-transform duration-[20s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-emerald-900/70 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center h-full">
          <div className={`max-w-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white animate-fade-in">
              {title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}