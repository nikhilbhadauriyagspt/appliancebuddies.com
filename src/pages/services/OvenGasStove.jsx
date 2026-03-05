import ServiceLayout from '../../components/ServiceLayout';
import { Flame } from 'lucide-react';

const OvenGasStovePage = () => (
  <ServiceLayout 
    title="Oven & Stove Repair"
    desc="Is your oven not heating or stove burners not lighting? We can fix it safely."
    longDesc="Cooking for your family is important. If your oven is heating unevenly or your gas stove burners aren't lighting, it can be frustrating and even dangerous. Our experts provide safe and reliable repair services for ovens, hobs, and gas stoves to get your kitchen cooking again."
    icon={<Flame size={24} />}
    image="/Ove.jpg"
    commonRepairs={[
      "Oven is not heating up",
      "Gas burners won't light",
      "Uneven baking or heating",
      "Strange gas smells or leaks"
    ]}
    processSteps={[
      "Safety and gas leak check",
      "Testing heating elements",
      "Final burner and temperature test"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Safe Cooking Solutions</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            We fix all major brands of ovens, hobs, and gas stoves. Our goal is to ensure your appliance is safe to use and heats perfectly so you can cook your favorite meals without any worry.
          </p>
        </section>

        <section className="py-12 border-y border-amber-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Stove & Oven Issues We Fix</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-amber-600" />
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Heating & Ignitors</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Replacing oven heating elements",
                  "Fixing gas ignitors and sparkers",
                  "Repairing the convection fan",
                  "Fixing thermostat and temperature"
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
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Safety & Controls</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Stopping gas leaks and smells",
                  "Fixing control knobs and buttons",
                  "Repairing the main control board",
                  "Replacing door glass and seals"
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
            We only use high-quality spare parts to ensure your oven and stove last longer. Our team is experienced with all major brands. We believe in honest pricing and clear communication.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "Gas Safe", val: "Repairs" },
              { label: "All Brands", val: "Fixed" },
              { label: "Genuine", val: "Parts" },
              { label: "Fair Price", val: "Guaranteed" }
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

export default OvenGasStovePage;
