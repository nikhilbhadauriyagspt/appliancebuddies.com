import React from 'react';
import { ShieldCheck, Clock, PenTool as Tool, CheckCircle2 } from 'lucide-react';

const AboutOrganization = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-amber-600/5 rounded-[40px] blur-2xl group-hover:bg-amber-600/10 transition-all duration-700" />
            <div className="relative rounded-[32px] overflow-hidden border border-gray-100 bg-white p-2">
              <img 
                src="/about-mainn.jpg" 
                alt="Our professional appliance repair team" 
                className="w-full h-[600px] object-cover rounded-[24px]"
              />
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-100">
                <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                <span className="text-amber-600 text-[10px] font-black uppercase tracking-[0.2em]">Our Story</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[0.95]">
                Reliable repairs for your <span className="text-amber-600 italic">happy home.</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed font-medium max-w-xl">
                At Appliance Buddies, we believe in honest service and high-quality repairs. We started with a simple goal: to help families fix their home appliances quickly and at a fair price. We treat every home with respect and every repair with care.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <ShieldCheck className="text-amber-600" />, title: "Honest Advice", desc: "We only suggest repairs that are truly needed." },
                { icon: <Clock className="text-amber-600" />, title: "On-Time Service", desc: "We value your time and arrive when we say we will." },
                { icon: <Tool className="text-amber-600" />, title: "Expert Hands", desc: "Our team knows exactly how to fix your appliances." },
                { icon: <CheckCircle2 className="text-amber-600" />, title: "Clean Work", desc: "We always leave your home tidy after our work." }
              ].map((item, idx) => (
                <div key={idx} className="group flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                    {React.cloneElement(item.icon, { size: 24, className: "transition-colors duration-500" })}
                  </div>
                  <div>
                    <h3 className="text-gray-950 font-bold mb-1 tracking-tight">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-snug font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOrganization;
