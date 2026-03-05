import { ShieldCheck, Clock, CheckCircle2, ArrowRight, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Section - SaaS Clean */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="w-full lg:w-3/5">

              
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8">
                Architecting <span className="text-amber-600">Functional Homes.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mb-10">
                Appliance Buddies specializes in the high-level restoration of essential domestic systems. We bridge the gap between complex hardware failure and seamless household continuity through expert intervention.
              </p>

              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold text-sm rounded-xl hover:bg-amber-600 transition-all shadow-lg active:scale-95 group"
              >
                Connect With Experts <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="w-full lg:w-2/5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img src="/about-mainn.jpg" alt="professional restoration" className="w-full h-auto object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Values Grid - Clean SaaS */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Operational <span className="text-amber-600">Precision.</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Every system we restore is a testament to our dedication to household reliability and professional excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<ShieldCheck size={24} />}
              title="Sourced Integrity"
              desc="We integrate strictly original manufacturer hardware, ensuring total synchronization with your appliance architecture."
            />
            <ValueCard 
              icon={<Clock size={24} />}
              title="Logistical Velocity"
              desc="Our response infrastructure is designed for rapid deployment, typically reaching your location within 45 minutes."
            />
            <ValueCard 
              icon={<Zap size={24} />}
              title="Advanced Insight"
              desc="Our workforce possesses comprehensive knowledge of next-generation smart systems and traditional mechanics."
            />
          </div>
        </div>
      </section>

      {/* 3. Standards List - Clean Split */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <img src="/about-child2.jpg" className="w-full h-auto object-cover" alt="Service quality" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 tracking-tight">
                Definitive <span className="text-amber-600">Standards.</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  { title: 'Manufacturer Direct Integration', desc: 'Direct access to verified manufacturer inventory for zero-compromise repairs.' },
                  { title: 'Transparent Pricing Framework', desc: 'Comprehensive cost diagnostics provided before any restoration initiation.' },
                  { title: 'Sustained Performance Guarantee', desc: 'A 90-day comprehensive validation period for every system we restore.' },
                  { title: 'Verified Professional Network', desc: 'Elite specialists rigorously vetted for security and high-level proficiency.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Timeline Section - Clean & Minimal */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">System Lifecycle.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <TimelineStep 
              step="01"
              title="Deep Diagnostics"
              desc="Identification of hardware fatigue and electronic anomalies through advanced analytical methods."
            />
            <TimelineStep 
              step="02"
              title="Architecture Alignment"
              desc="Selection of specific manufacturer-original spares to restore factory-default performance."
            />
            <TimelineStep 
              step="03"
              title="Expert Restoration"
              desc="Execution of precision repair sequences by specialists trained in brand-specific protocols."
            />
            <TimelineStep 
              step="04"
              title="Operational Audit"
              desc="Final load testing and safety validation to ensure long-term stability and optimal efficiency."
            />
          </div>
        </div>
      </section>

      {/* 5. Final CTA - SaaS Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Begin Elite <span className="text-amber-500">Restoration.</span>
              </h2>
              <p className="text-gray-400 text-lg font-medium mb-10 max-w-xl mx-auto">
                Partner with the industry leader in professional appliance care and professional support.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-amber-600 text-white font-bold text-sm rounded-xl hover:bg-white hover:text-gray-950 transition-all active:scale-95 group">
                Initiate Now <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          </div>
        </div>
      </section>

    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div className="p-10 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-amber-200 group">
    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-8 transition-colors group-hover:bg-amber-600 group-hover:text-white">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

const TimelineStep = ({ step, title, desc }) => (
  <div className="flex gap-6 group">
    <span className="text-4xl font-black text-amber-100 group-hover:text-amber-500 transition-colors duration-300">{step}</span>
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-amber-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

export default About;
