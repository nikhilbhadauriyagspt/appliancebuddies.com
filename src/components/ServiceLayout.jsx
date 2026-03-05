import { ShieldCheck, Clock, Award, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BookingModal from './BookingModal';

const ServiceLayout = ({ 
  title, 
  desc, 
  longDesc, 
  icon, 
  image, 
  extraContent,
  commonRepairs = ["Performance issues", "Noise diagnostics", "Power failures", "Seal replacement"],
  processSteps = ["Full diagnostics", "OEM parts", "Final testing"]
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 selection:bg-amber-100 selection:text-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Header Section */}
        <div className="mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-amber-600 transition-all mb-10 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to services
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-full mb-6 border border-amber-100">
                <ShieldCheck size={14} className="text-amber-600" />
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest leading-none">
                  Professional service
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                {title} <span className="text-amber-600">Solutions.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl">
                {desc}
              </p>
            </div>
            
            <div className="shrink-0">
               <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full lg:w-auto px-10 py-4 bg-amber-600 text-white font-bold text-sm rounded-xl hover:bg-amber-700 transition-all shadow-lg shadow-amber-600/20 active:scale-95 flex items-center justify-center gap-3 group"
               >
                 Book Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>

        {/* 2. Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Body */}
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-xl shadow-gray-950/5 relative overflow-hidden">
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 border border-amber-100">
                     {icon}
                   </div>
                   <div className="h-[1px] flex-1 bg-gray-100" />
                 </div>

                 <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
                   Service overview
                 </h2>
                 <p className="text-lg text-gray-600 font-medium leading-relaxed mb-10">
                   {longDesc}
                 </p>
                 
                 <div className="extra-service-content-matrix">
                   {extraContent}
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-10 bg-gray-900 rounded-3xl relative overflow-hidden group">
                  <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                    Common issues
                  </h3>
                  <ul className="space-y-4">
                    {commonRepairs.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-white">
                        <CheckCircle2 size={16} className="text-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Workflow process</h3>
                  <ul className="space-y-4">
                    {processSteps.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-sm font-bold text-gray-900 group">
                        <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-amber-600 flex items-center justify-center text-xs shadow-sm transition-colors group-hover:bg-amber-600 group-hover:text-white group-hover:border-transparent">
                          {i + 1}
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
               <img src={image} className="w-full h-auto object-cover" alt={title} />
            </div>

            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl shadow-gray-900/5">
               <h4 className="text-xs font-bold text-gray-400 tracking-widest mb-10 text-center uppercase">Quality benchmarks</h4>
               <div className="space-y-3">
                  {[
                    { icon: <Clock size={18} />, label: 'Arrival', val: '45 mins' },
                    { icon: <ShieldCheck size={18} />, label: 'Warranty', val: '90 days' },
                    { icon: <Award size={18} />, label: 'Hardware', val: 'OEM parts' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                          {item.icon}
                        </div>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.label}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-900">{item.val}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle={title} 
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .extra-service-content-matrix section {
          margin-top: 4rem;
        }
        .extra-service-content-matrix h2 {
          font-size: 1.75rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 1.5rem;
          letter-spacing: -0.025em;
        }
        .extra-service-content-matrix h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 1.25rem;
          letter-spacing: -0.025em;
        }
        .extra-service-content-matrix h4 {
          font-size: 0.75rem;
          font-weight: 800;
          color: #d97706; /* amber-600 */
          margin-bottom: 1rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .extra-service-content-matrix p {
          margin-bottom: 1.5rem;
          color: #4b5563;
          line-height: 1.7;
          font-size: 1.05rem;
        }
        .extra-service-content-matrix ul {
          margin-bottom: 2.5rem;
          display: grid;
          grid-template-cols: 1fr;
          gap: 1.25rem;
          background: #f9fafb;
          padding: 2rem;
          border-radius: 1.5rem;
          border: 1px solid #f3f4f6;
        }
        @media (min-width: 768px) {
          .extra-service-content-matrix ul {
            grid-template-cols: 1fr 1fr;
          }
        }
        .extra-service-content-matrix li {
          color: #374151;
          font-weight: 700;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .extra-service-content-matrix li::before {
          content: "";
          width: 6px;
          height: 6px;
          background-color: #d97706;
          flex-shrink: 0;
          border-radius: 50%;
        }
        .extra-service-content-matrix .feature-card-grid {
          display: grid;
          grid-template-cols: repeat(2, 1fr);
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .extra-service-content-matrix .feature-card-grid {
            grid-template-cols: repeat(4, 1fr);
          }
        }
        .extra-service-content-matrix .feature-card {
          background: white;
          border: 1px solid #f3f4f6;
          border-radius: 1.25rem;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s;
        }
        .extra-service-content-matrix .feature-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border-color: #fef3c7; /* amber-100 */
          transform: translateY(-2px);
        }
        .extra-service-content-matrix .feature-card .label {
          font-size: 0.65rem;
          font-weight: 800;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        .extra-service-content-matrix .feature-card .value {
          font-size: 0.875rem;
          font-weight: 800;
          color: #111827;
          text-transform: uppercase;
        }
      `}} />
    </div>
  );
};

export default ServiceLayout;
