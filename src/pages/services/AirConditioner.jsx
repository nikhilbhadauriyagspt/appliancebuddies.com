import ServiceLayout from '../../components/ServiceLayout';
import { Wind } from 'lucide-react';

const AirConditionerPage = () => (
  <ServiceLayout 
    title="AC Repair & Service"
    desc="Stop sweating! Get your AC cooling perfectly with our expert repair service."
    longDesc="A malfunctioning AC can make your home feel like an oven. Whether your unit isn't blowing cold air, making loud noises, or leaking water, we can help. Our team provides fast, reliable, and honest AC services to keep you cool and comfortable all year round."
    icon={<Wind size={24} />}
    image="/ac-repair.jpg"
    commonRepairs={[
      "AC is not blowing cold air",
      "Water leaking from the indoor unit",
      "Strange noises or bad smells",
      "AC not turning on or tripping the power"
    ]}
    processSteps={[
      "Full system inspection",
      "Gas level and leak check",
      "Final cooling performance test"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Expert Cooling Repairs</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            We handle everything from simple cleaning to complex motor repairs. Our goal is to make sure your AC runs efficiently, saving you money on electricity bills while keeping your home at the perfect temperature.
          </p>
        </section>

        <section className="py-12 border-y border-amber-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">AC Services We Offer</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-amber-600" />
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Repair & Maintenance</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Fixing cooling and airflow issues",
                  "Repairing noisy fans and motors",
                  "Cleaning filters and coils",
                  "Fixing water leakage problems"
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
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Gas & Electrical</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "AC gas refilling and leak fixing",
                  "Repairing main control boards",
                  "Fixing remote and sensor issues",
                  "Compressor repair and replacement"
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
            We only use high-quality, original spare parts to ensure your AC lasts longer. Our team is experienced with all major brands like Samsung, LG, Daikin, and more. We believe in honest pricing and clear communication.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "Expert", val: "Technicians" },
              { label: "Original", val: "Spare Parts" },
              { label: "Fast", val: "Response" },
              { label: "No Hidden", val: "Charges" }
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

export default AirConditionerPage;
