import ServiceLayout from '../../components/ServiceLayout';
import { Drum } from 'lucide-react';

const ClothesDryerPage = () => (
  <ServiceLayout 
    title="Clothes Dryer Repair"
    desc="Is your dryer not heating or taking too long? We can fix it quickly."
    longDesc="A dryer that doesn't heat or takes multiple cycles to dry clothes is a major inconvenience. Whether it's a broken belt, a faulty heating element, or a clogged vent, our team can diagnose and fix the issue so your laundry day stays on track."
    icon={<Drum size={24} />}
    image="/clothes.jpg"
    commonRepairs={[
      "Dryer is not heating up",
      "Taking too long to dry clothes",
      "Loud squealing or thumping noises",
      "Dryer won't start or turn on"
    ]}
    processSteps={[
      "Checking the heating system",
      "Testing the motor and belt",
      "Safety and airflow verification"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Expert Drying Solutions</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            We fix all types of dryers, including vented and condenser models. Our goal is to ensure your dryer is safe, energy-efficient, and gets your clothes dry in one go.
          </p>
        </section>

        <section className="py-12 border-y border-amber-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Common Dryer Issues</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-amber-600" />
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Heating & Airflow</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Replacing the heating element",
                  "Fixing thermostat and sensors",
                  "Cleaning internal lint buildup",
                  "Repairing exhaust vent issues"
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
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Mechanical & Power</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Replacing broken dryer belts",
                  "Repairing the drum motor",
                  "Fixing start button and timer",
                  "Main control board diagnostics"
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
            We only use high-quality spare parts to ensure your dryer lasts longer. Our team is experienced with all major brands. We believe in honest pricing and clear communication.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "All Brands", val: "Experts" },
              { label: "Quick", val: "Repair" },
              { label: "Genuine", val: "Parts" },
              { label: "Honest", val: "Price" }
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

export default ClothesDryerPage;
