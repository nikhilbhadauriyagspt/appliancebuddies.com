import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap, Star, Clock, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import BookingModal from './BookingModal';

const slides = [
  {
    id: "01",
    title: "Expert Care for Your",
    highlight: "Washing Machine",
    desc: "Restore your laundry routine with certified motor and drum diagnostics. Professional-grade repairs ensuring silent and efficient performance.",
    image: "/hero-washing.jpg"
  },
  {
    id: "02",
    title: "Optimize Your Home",
    highlight: "Refrigeration",
    desc: "Maintain peak freshness with expert compressor service and safe gas refilling. Energy-efficient solutions for modern cooling systems.",
    image: "/hero-refri.jpg"
  },
  {
    id: "03",
    title: "Precision Repair for",
    highlight: "Cooking Units",
    desc: "Professional heating element restoration and control board synchronization. Ensure safety and precision in every meal you prepare.",
    image: "/hero-cook.jpg"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative w-full h-screen min-h-[650px] bg-white overflow-hidden flex items-center">
      {/* Background Media - Full Screen Overlay */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 md:from-white md:via-white/90 md:to-transparent z-10" />
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full relative z-20 pt-20">
        <div className="max-w-2xl">
          
          {/* Main Text Content */}
          <div className="relative min-h-[200px] md:min-h-[260px]">
            {slides.map((slide, idx) => (
              <div 
                key={idx}
                className={`transition-all duration-700 ease-out ${
                  idx === current ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                }`}
              >
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-[1.1] mb-6">
                  <span className="block">{slide.title}</span>
                  <span className="text-amber-600 drop-shadow-sm block">{slide.highlight}</span>
                </h1>
                <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed mb-10 max-w-lg">
                  {slide.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-10 py-4 md:py-5 bg-gray-900 text-white font-bold text-sm md:text-base rounded-2xl hover:bg-amber-600 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] active:scale-95 flex items-center justify-center gap-3 group"
            >
              Book Service Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Lower Trust Bar */}
          <div className="mt-12 md:mt-16 flex flex-wrap gap-6 md:gap-10">
             <div className="flex items-center gap-4 bg-white/60 backdrop-blur-md p-3 rounded-2xl border border-white/50 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                   <Clock size={24} />
                </div>
                <div>
                   <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-1.5">Response</p>
                   <p className="text-sm md:text-base font-bold text-gray-900 leading-none">45 Min Arrival</p>
                </div>
             </div>
             <div className="flex items-center gap-4 bg-white/60 backdrop-blur-md p-3 rounded-2xl border border-white/50 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                   <ShieldCheck size={24} />
                </div>
                <div>
                   <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-1.5">Warranty</p>
                   <p className="text-sm md:text-base font-bold text-gray-900 leading-none">90-Day Coverage</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-30 flex flex-col md:flex-row items-end md:items-center gap-6">
         <div className="flex items-center gap-2 mb-4 md:mb-0 md:mr-6">
            {slides.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 transition-all duration-500 rounded-full ${idx === current ? 'w-10 bg-amber-600' : 'w-3 bg-gray-300/80 backdrop-blur-sm'}`} 
              />
            ))}
         </div>
         <div className="flex gap-3">
           <button onClick={prevSlide} className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/50 bg-white/70 backdrop-blur-xl flex items-center justify-center text-gray-900 hover:bg-amber-600 hover:text-white hover:border-transparent transition-all shadow-lg active:scale-95">
              <ChevronLeft size={24} />
           </button>
           <button onClick={nextSlide} className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/50 bg-white/70 backdrop-blur-xl flex items-center justify-center text-gray-900 hover:bg-amber-600 hover:text-white hover:border-transparent transition-all shadow-lg active:scale-95">
              <ChevronRight size={24} />
           </button>
         </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle="Appliance Repair" 
      />
    </section>
  );
};

export default Hero;
