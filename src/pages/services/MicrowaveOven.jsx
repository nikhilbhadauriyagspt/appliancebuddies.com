import ServiceLayout from '../../components/ServiceLayout';
import { Microwave } from 'lucide-react';

const MicrowaveOvenPage = () => (
  <ServiceLayout 
    title="Microwave Repair"
    desc="Is your microwave not heating or making sparks? We can help."
    longDesc="A microwave is essential for quick meals. If it's not heating, the plate isn't spinning, or you see sparks inside, it's time for a professional check. We provide fast and safe microwave repair services to get your kitchen back to normal."
    icon={<Microwave size={24} />}
    image="/micro.jpg"
    commonRepairs={[
      "Microwave is not heating food",
      "Glass plate is not spinning",
      "Sparks or strange noises inside",
      "Buttons or timer not working"
    ]}
    processSteps={[
      "Safety and radiation check",
      "Testing the heating element",
      "Final heating and timer test"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Safe Kitchen Solutions</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            We fix all types of microwaves, including solo, grill, and convection models. Our goal is to ensure your appliance is safe to use and heats your food perfectly every time.
          </p>
        </section>

        <section className="py-12 border-y border-amber-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Common Microwave Issues</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-amber-600" />
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Heating & Safety</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Fixing heating issues (Magnetron)",
                  "Stopping sparks and electrical smells",
                  "Repairing door locks and switches",
                  "Fixing internal light issues"
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
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Controls & Moving Parts</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Fixing keypad and display errors",
                  "Repairing the spinning motor",
                  "Fixing timer and sensor issues",
                  "Repairing the main control board"
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
            We only use high-quality spare parts to ensure your microwave lasts longer. Our team is experienced with all major brands. We believe in honest pricing and clear communication.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "All Models", val: "Repaired" },
              { label: "Safety", val: "First" },
              { label: "Genuine", val: "Parts" },
              { label: "No Hidden", val: "Cost" }
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

export default MicrowaveOvenPage;
