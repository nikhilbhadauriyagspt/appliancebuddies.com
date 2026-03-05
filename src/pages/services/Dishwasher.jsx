import ServiceLayout from '../../components/ServiceLayout';
import { Waves } from 'lucide-react';

const DishwasherPage = () => (
  <ServiceLayout 
    title="Dishwasher Repair"
    desc="Is your dishwasher leaving food on plates or not draining? We can fix it."
    longDesc="A dishwasher is supposed to make your life easier, not harder. If your dishes are coming out dirty, the water isn't draining, or the machine is making loud noises, our experts are here to help. We provide quick and reliable dishwasher repairs so you can stop washing by hand."
    icon={<Waves size={24} />}
    image="/dish.png"
    commonRepairs={[
      "Dishes are still dirty after wash",
      "Water is not draining out",
      "Dishwasher is leaking on the floor",
      "Loud or strange grinding noises"
    ]}
    processSteps={[
      "Checking the sprayer and pumps",
      "Finding the cause of the leak",
      "Final wash and drain test"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Reliable Kitchen Help</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            We fix all major brands and types of dishwashers. Our goal is to ensure your machine cleans perfectly and runs quietly, saving you time and effort in the kitchen.
          </p>
        </section>

        <section className="py-12 border-y border-amber-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Common Dishwasher Issues</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-amber-600" />
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Cleaning & Drainage</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Unblocking the drain pump",
                  "Cleaning spray arms and filters",
                  "Fixing water inlet valve issues",
                  "Repairing the heating element"
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
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Mechanical & Safety</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Fixing door latch and seal leaks",
                  "Repairing the motor and bearings",
                  "Fixing display and button errors",
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
            We only use high-quality spare parts to ensure your dishwasher lasts longer. Our team is experienced with all major brands. We believe in honest pricing and clear communication.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "All Brands", val: "Experts" },
              { label: "Deep", val: "Diagnostics" },
              { label: "Original", val: "Parts" },
              { label: "Honest", val: "Pricing" }
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

export default DishwasherPage;
