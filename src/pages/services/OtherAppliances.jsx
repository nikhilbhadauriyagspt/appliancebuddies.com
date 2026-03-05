import ServiceLayout from '../../components/ServiceLayout';
import { Settings } from 'lucide-react';

const OtherAppliancesPage = () => (
  <ServiceLayout 
    title="General Appliance Repair"
    desc="Is something else in your home broken? We can probably fix it."
    longDesc="From small kitchen gadgets to large household systems, we handle it all. If you have an appliance that isn't working right and you don't see it listed, give us a call. Our expert team has the experience to fix a wide range of home appliances quickly and reliably."
    icon={<Settings size={24} />}
    image="/others.jpg"
    commonRepairs={[
      "Appliance not turning on",
      "Strange noises or vibrations",
      "Electrical or display issues",
      "Performance and cleaning problems"
    ]}
    processSteps={[
      "Thorough diagnostic check",
      "Finding the exact part needed",
      "Final safety and performance test"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Complete Home Solutions</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            We believe in making home maintenance easy. Whether it's a small repair or a major fix, we treat every job with the same care and professionalism. Our goal is to get your home back to normal as fast as possible.
          </p>
        </section>

        <section className="py-12 border-y border-amber-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">What Else We Fix</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-amber-600" />
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Kitchen & Laundry</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Air fryer and grill repair",
                  "Mixer and grinder issues",
                  "Vacuum cleaner maintenance",
                  "Iron and steamer repairs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold text-gray-600 group/item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-amber-600" />
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Other Home Systems</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Electric heater repair",
                  "Fan and air cooler service",
                  "Main board and wiring fixes",
                  "General mechanical repairs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold text-gray-600 group/item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Our Quality Promise</h3>
          <p className="text-gray-600 leading-relaxed font-medium mb-12">
            We only use high-quality spare parts to ensure your appliances last longer. Our team is experienced with all major brands. We believe in honest pricing and clear communication.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "Expert", val: "Diagnostics" },
              { label: "All Brands", val: "Welcome" },
              { label: "Original", val: "Parts" },
              { label: "Fair", val: "Price" }
            ].map((item, idx) => (
              <div key={idx} className="feature-card">
                <div className="label">{item.label}</div>
                <div className="value">{item.val}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    }
  />
);

export default OtherAppliancesPage;
