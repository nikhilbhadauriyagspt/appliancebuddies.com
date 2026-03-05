import ServiceLayout from '../../components/ServiceLayout';
import { Fan } from 'lucide-react';

const KitchenChimneyPage = () => (
  <ServiceLayout 
    title="Kitchen Chimney Repair"
    desc="Is your chimney not sucking smoke or making loud noises? We can clean and fix it."
    longDesc="A working chimney is vital for a smoke-free and clean kitchen. If your chimney has become noisy, lost its suction power, or isn't turning on, our experts can help. We provide deep cleaning and repair services to keep your kitchen fresh."
    icon={<Fan size={24} />}
    image="/Kitchen.jpg"
    commonRepairs={[
      "Low suction or smoke in kitchen",
      "Loud or strange motor noises",
      "Buttons or touch panel not working",
      "Chimney not turning on"
    ]}
    processSteps={[
      "Checking the motor and suction",
      "Deep cleaning of filters",
      "Ensuring clean and quiet operation"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Fresh Kitchen Solutions</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            Grease and oil can block your chimney and damage the motor over time. We provide professional cleaning and repair services to ensure your chimney works perfectly and stays quiet while you cook.
          </p>
        </section>

        <section className="py-12 border-y border-amber-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Our Chimney Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-amber-600" />
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Cleaning & Suction</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Professional deep cleaning",
                  "Fixing low suction power",
                  "Cleaning oily filters and mesh",
                  "Duct pipe cleaning and repair"
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
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Motor & Controls</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Repairing the chimney motor",
                  "Fixing touch panel and buttons",
                  "Replacing internal lights",
                  "Main control board repair"
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
            We only use high-quality spare parts to ensure your chimney lasts longer. Our team is experienced with all major brands. We believe in honest pricing and clear communication.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "Deep Clean", val: "Service" },
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

export default KitchenChimneyPage;
