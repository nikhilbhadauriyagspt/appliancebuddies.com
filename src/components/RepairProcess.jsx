import { Search, CalendarCheck, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './BookingModal';

const RepairProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      id: "01",
      title: "Identify Needs",
      desc: "Specify the appliance requiring professional attention.",
      icon: <Search size={22} />
    },
    {
      id: "02",
      title: "Schedule Visit",
      desc: "Coordinate a timeframe that suits your lifestyle.",
      icon: <CalendarCheck size={22} />
    },
    {
      id: "03",
      title: "Elite Restoration",
      desc: "Comprehensive repair using certified original spares.",
      icon: <Wrench size={22} />
    },
    {
      id: "04",
      title: "Active Warranty",
      desc: "Sustainable peace of mind for a full 90-day period.",
      icon: <ShieldCheck size={22} />
    }
  ];

  return (
    <section id="repair-process" className="py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              The Restoration <span className="text-amber-600">Framework.</span>
            </h2>

          </div>
          <div className="flex-shrink-0">
             <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white font-bold text-sm rounded-xl hover:bg-amber-600 transition-all shadow-lg active:scale-95 group"
              >
                Initialize Booking <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
          </div>
        </div>

        {/* Process Steps - Horizontal SaaS Timeline */}
        <div className="relative">
          {/* Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gray-100 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline Node */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-20 h-20 bg-white rounded-2xl border-2 border-gray-100 flex items-center justify-center mb-8 group-hover:border-amber-500 group-hover:shadow-lg group-hover:shadow-amber-600/10 transition-all duration-300 relative">
                    <div className="text-gray-400 group-hover:text-amber-600 transition-colors duration-300">
                      {step.icon}
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center text-[11px] font-bold shadow-md">
                       {step.id}
                    </div>
                  </div>

                  {/* Step Info */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">{step.title}</h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[250px] mx-auto lg:mx-0">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle="Appliance restoration" 
      />
    </section>
  );
};

export default RepairProcess;
