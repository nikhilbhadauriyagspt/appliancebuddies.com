import ServiceLayout from '../../components/ServiceLayout';
import { Refrigerator } from 'lucide-react';

const RefrigeratorPage = () => (
  <ServiceLayout 
    title="Refrigerator Repair"
    desc="Is your fridge not cooling or making strange noises? We can fix it today."
    longDesc="A broken refrigerator can lead to spoiled food and a lot of waste. Our expert team is ready to help you get your fridge back to the right temperature. Whether it's a cooling issue, a leaky freezer, or a noisy motor, we have the experience to fix it quickly and reliably."
    icon={<Refrigerator size={24} />}
    image="/refrigerator.png"
    commonRepairs={[
      "Fridge is not cooling properly",
      "Water leaking inside or outside",
      "Ice maker or water dispenser issues",
      "Loud humming or clicking sounds"
    ]}
    processSteps={[
      "Checking the cooling system",
      "Testing the motor and sensors",
      "Ensuring everything is cold and safe"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Expert Cooling Solutions</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            Your refrigerator is one of the most important appliances in your home. We specialize in fixing all types of fridges, from single doors to large double-door models. We focus on getting the temperature right so your food stays fresh and safe for your family.
          </p>
        </section>

        <section className="py-12 border-y border-amber-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Common Fridge Problems We Solve</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-amber-600" />
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Cooling & Airflow</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Fixing low cooling or no cooling",
                  "Repairing fan and motor issues",
                  "Clearing blocked air vents",
                  "Fixing freezer frost buildup"
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
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Parts & Electronics</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Replacing door seals and lights",
                  "Fixing thermostat and sensor issues",
                  "Repairing main control boards",
                  "Fixing gas leakage and refills"
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
            We only use high-quality, original spare parts to ensure your refrigerator lasts longer. Our team is experienced with all major brands. We believe in honest pricing and clear communication, so you always know exactly what you are paying for.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "All Brands", val: "Specialists" },
              { label: "Same Day", val: "Repair Goal" },
              { label: "Genuine", val: "Spare Parts" },
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

export default RefrigeratorPage;
