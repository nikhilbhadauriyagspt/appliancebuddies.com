import { Shield, Clock, CheckCircle2 } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="pt-12 bg-white min-h-screen relative">
      
      {/* Redesigned Contact Section Integration */}
      <ContactSection />

      {/* Brand Promise Section - SaaS Clean */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="mt-20 p-10 lg:p-20 rounded-3xl bg-gray-900 relative overflow-hidden shadow-2xl">
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Side: Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold tracking-widest text-amber-500 uppercase mb-8">
                <Shield size={14} /> The Appliance Buddies Guarantee
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
                Your Trust is Our <span className="text-amber-500">Greatest Asset.</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-10">
                We guarantee that every interaction with our team will be professional, transparent, and focused on solving your problem definitively.
              </p>
              
              <div className="flex flex-wrap gap-6">
                 <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <CheckCircle2 size={18} className="text-amber-500" /> Professional Conduct
                 </div>
                 <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <CheckCircle2 size={18} className="text-amber-500" /> Transparent Pricing
                 </div>
              </div>
            </div>

            {/* Right Side: Feature Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-gray-950 mb-6 group-hover:scale-110 transition-transform">
                   <Clock size={24} />
                </div>
                <h4 className="text-white font-extrabold text-lg tracking-tight mb-2 uppercase">On-Time</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">Response infrastructure designed for rapid deployment.</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-amber-50 rounded-xl border border-amber-500 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                   <Shield size={24} />
                </div>
                <h4 className="text-white font-extrabold text-lg tracking-tight mb-2 uppercase">Secure</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">Full background checks and insurance for every specialist.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
