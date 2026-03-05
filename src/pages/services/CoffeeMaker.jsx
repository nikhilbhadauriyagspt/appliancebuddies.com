import ServiceLayout from '../../components/ServiceLayout';
import { Coffee } from 'lucide-react';

const CoffeeMakerPage = () => (
  <ServiceLayout 
    title="Coffee Maker Repair"
    desc="Is your coffee machine leaking or not brewing? We can fix it."
    longDesc="Don't let a broken coffee maker ruin your morning. Whether it's a simple drip machine or a complex espresso maker, we can help. If your machine isn't heating, is leaking water, or has a blocked pump, our experts will get it brewing again."
    icon={<Coffee size={24} />}
    image="/coffee.jpg"
    commonRepairs={[
      "Coffee machine is not heating",
      "Water is leaking from the base",
      "Pump is making noise but no coffee",
      "Buttons or display not working"
    ]}
    processSteps={[
      "Checking the heating element",
      "Testing the water pump",
      "Final brew and taste test"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Perfect Brew Solutions</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            We fix all types of coffee machines, from home brewers to professional espresso systems. Our goal is to ensure your machine works perfectly so you can enjoy your favorite coffee every day.
          </p>
        </section>

        <section className="py-12 border-y border-amber-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Common Coffee Maker Issues</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-amber-600" />
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Brewing & Heating</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Replacing the heater element",
                  "Fixing water pump issues",
                  "Unblocking internal pipes",
                  "Repairing the steam wand"
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
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Parts & Controls</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Replacing leaky door seals",
                  "Fixing control board errors",
                  "Repairing the grinder motor",
                  "Replacing power switches"
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
            We only use high-quality spare parts to ensure your coffee maker lasts longer. Our team is experienced with all major brands. We believe in honest pricing and clear communication.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "All Models", val: "Fixed" },
              { label: "Quick", val: "Service" },
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

export default CoffeeMakerPage;
