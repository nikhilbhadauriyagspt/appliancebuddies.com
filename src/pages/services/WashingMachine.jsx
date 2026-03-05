import ServiceLayout from '../../components/ServiceLayout';
import { WashingMachine } from 'lucide-react';

const WashingMachinePage = () => (
  <ServiceLayout 
    title="Washing Machine Repair"
    desc="Is your washing machine leaking, shaking, or not spinning? We can help."
    longDesc="When your washing machine breaks down, laundry piles up fast. Our team is here to fix the problem quickly and professionally. Whether you have a front-load or a top-load machine, we know how to get it running smoothly again so you can get back to your daily routine without any stress."
    icon={<WashingMachine size={24} />}
    image="/washing.jpg"
    commonRepairs={[
      "Water leaking on the floor",
      "Machine not spinning or shaking too much",
      "Loud or strange noises during wash",
      "Buttons or display screen not working"
    ]}
    processSteps={[
      "Thoroughly checking the machine",
      "Finding the exact cause of the problem",
      "Final testing to ensure it's safe to use"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Reliable Laundry Solutions</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            A broken washing machine can ruin your day. We focus on fixing the most common issues like leaks, motor problems, and drainage failures. Our goal is to provide a long-lasting fix so you don't have to worry about the same problem happening again next week.
          </p>
        </section>

        <section className="py-12 border-y border-amber-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Common Issues We Fix</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-amber-600" />
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Mechanical Problems</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Fixing loud drum and motor noises",
                  "Stopping heavy vibrations and shaking",
                  "Replacing door seals and rubber gaskets",
                  "Repairing broken belts and moving parts"
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
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Electrical & Control Issues</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Fixing display and button errors",
                  "Repairing water sensors and switches",
                  "Unblocking or fixing the drainage pump",
                  "Fixing heating and water temperature issues"
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
            We only use high-quality, original spare parts to ensure your machine lasts longer. Our team is experienced with all major brands and models. We believe in honest pricing and clear communication, so you always know exactly what you are paying for.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "Any Brand", val: "Expert Service" },
              { label: "Home Visit", val: "Fast Repair" },
              { label: "Real Parts", val: "Quality" },
              { label: "Honest Price", val: "No Hidden Cost" }
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

export default WashingMachinePage;
