import ServiceLayout from '../../components/ServiceLayout';
import { Droplets } from 'lucide-react';

const WaterPurifierPage = () => (
  <ServiceLayout 
    title="Water Purifier Service"
    desc="Is your water purifier leaking or tastes different? We provide expert RO service."
    longDesc="Clean water is essential for your family's health. If your water purifier has a slow flow, a strange taste, or is leaking, it's time for a service. We provide thorough cleaning, filter replacement, and repairs for all types of RO and water purifiers."
    icon={<Droplets size={24} />}
    image="/water.jpg"
    commonRepairs={[
      "Water has a strange taste or smell",
      "Purifier is leaking water",
      "Very slow water flow or no water",
      "Beeping sounds or filter alerts"
    ]}
    processSteps={[
      "Testing water quality (TDS)",
      "Checking and cleaning filters",
      "Ensuring safe and clean water"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Healthy Water Solutions</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            We specialize in RO service and repair for all major brands. Our goal is to make sure your purifier is working at its best, providing you with 100% safe and clean drinking water every day.
          </p>
        </section>

        <section className="py-12 border-y border-amber-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Our RO Services Include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-amber-600" />
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Filter & Membrane</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "RO Membrane replacement",
                  "Sediment and Carbon filter change",
                  "Cleaning the water storage tank",
                  "Fixing slow water flow issues"
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
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Pump & Electrical</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Repairing the booster pump",
                  "Fixing SMPS and power issues",
                  "Stopping water leakage",
                  "Auto-cut and sensor repairs"
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
            We only use high-quality, genuine filters and spare parts. Our team is experienced with all major RO brands. We believe in honest pricing and clear communication about your water quality.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "TDS Check", val: "Included" },
              { label: "Original", val: "Filters" },
              { label: "Expert", val: "Service" },
              { label: "Safe", val: "Water" }
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

export default WaterPurifierPage;
