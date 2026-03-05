import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../servicesData';
import { ShieldCheck, Clock, Award, ArrowLeft, CheckCircle2, AlertCircle, Wrench } from 'lucide-react';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!service) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold">Service not found</h2>
        <Link to="/" className="text-orange-600 font-bold mt-4 inline-block underline">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <Link to="/" className="inline-flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-12 hover:text-orange-600 transition-colors group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-8">
            <div className="relative mb-12 group">
              <div className="rounded-[40px] overflow-hidden aspect-video bg-gray-100 shadow-2xl border-8 border-gray-50">
                <img loading="lazy" 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-orange-600 rounded-3xl flex items-center justify-center text-white shadow-2xl z-20">
                {service.icon}
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1.5px] bg-orange-600 rounded-full" />
              <span className="text-[11px] font-bold text-orange-600 tracking-wider uppercase">Expert repair solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-gray-950 leading-[1.1] mb-8 tracking-tight">
              {service.title} <br />
              <span className="text-orange-600 italic">service & repair.</span>
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-12 border-l-2 border-orange-100 pl-8">
                {service.longDesc || service.desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                <div className="p-8 rounded-[32px] bg-gray-50 border border-gray-100 group transition-all hover:bg-white hover:shadow-2xl hover:shadow-orange-600/5">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6 transition-all group-hover:bg-orange-600 group-hover:text-white">
                    <AlertCircle size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-950 mb-4 tracking-tight">Common issues we fix</h3>
                  <ul className="space-y-4">
                    {["Performance drops", "Unusual noises", "Power failures", "Leaking components"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-500 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 rounded-[32px] bg-gray-950 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-3xl" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-600/20">
                      <Wrench size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 tracking-tight">Our repair process</h3>
                    <ul className="space-y-4">
                      {["Deep diagnostics", "Genuine parts replace", "Safety testing", "Post-repair cleaning"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-400 font-medium">
                          <CheckCircle2 size={16} className="text-orange-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 sticky top-32">
            <div className="bg-white border border-gray-100 rounded-[40px] p-10 shadow-xl shadow-black/[0.02]">
              <h4 className="text-[11px] font-bold text-orange-600 uppercase tracking-widest mb-10">Why choose us</h4>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-orange-600 border border-gray-100">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-950 text-sm mb-1">Fast response</h5>
                    <p className="text-gray-400 text-[13px] font-medium leading-relaxed">Reach your home in 60 mins</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-orange-600 border border-gray-100">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-950 text-sm mb-1">Service warranty</h5>
                    <p className="text-gray-400 text-[13px] font-medium leading-relaxed">90 days full guarantee</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-orange-600 border border-gray-100">
                    <Award size={22} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-950 text-sm mb-1">Genuine parts</h5>
                    <p className="text-gray-400 text-[13px] font-medium leading-relaxed">100% original spares</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-gray-100">
                <p className="text-xs font-medium text-gray-400 leading-relaxed mb-8">
                  Need immediate help? Our friendly team is ready to assist you with any repair needs.
                </p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-5 bg-gray-950 text-white rounded-xl font-bold text-[13px] hover:bg-orange-600 transition-all shadow-xl shadow-gray-950/5 cursor-pointer active:scale-95"
                >
                  Book now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle={service.title} 
      />
    </div>
  );
};

export default ServiceDetail;




