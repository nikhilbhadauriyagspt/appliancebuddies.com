import ServiceLayout from '../../components/ServiceLayout';
import { Tv } from 'lucide-react';

const TelevisionPage = () => (
  <ServiceLayout 
    title="Television Repair"
    desc="Is your TV screen blank or showing lines? We can fix your LED, LCD, or Smart TV."
    longDesc="Don't miss your favorite shows or games. If your TV has a sound issue, a broken screen, or just won't turn on, our experts are here to help. We provide fast and reliable TV repair services for all major brands, ensuring you get back to your entertainment as soon as possible."
    icon={<Tv size={24} />}
    image="/tv.jpg"
    commonRepairs={[
      "TV screen is blank or has lines",
      "No sound or very low sound",
      "TV not turning on (power issues)",
      "Smart TV connectivity or app issues"
    ]}
    processSteps={[
      "Checking the screen and display",
      "Testing the internal boards",
      "Ensuring perfect picture and sound"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Professional TV Services</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            We specialize in repairing all types of modern televisions, including LED, LCD, and Smart TVs. Our goal is to provide a quick fix so you can enjoy your favorite content without any interruptions.
          </p>
        </section>

        <section className="py-12 border-y border-amber-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">TV Issues We Solve</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-amber-600" />
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Display & Picture</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Fixing blank or black screens",
                  "Removing lines or spots on screen",
                  "Repairing backlight issues",
                  "Adjusting color and brightness"
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
                <h4 className="text-amber-600 font-black uppercase text-[10px] tracking-[0.3em]">Sound & Power</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Fixing no sound or muffled audio",
                  "Repairing power supply boards",
                  "Fixing HDMI and port issues",
                  "Software and Smart TV updates"
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
            We only use high-quality spare parts to ensure your TV lasts longer. Our team is experienced with all major brands like Sony, Samsung, LG, and more. We believe in honest pricing and clear communication.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "Smart TV", val: "Experts" },
              { label: "Quick", val: "Turnaround" },
              { label: "Genuine", val: "Parts" },
              { label: "Fair", val: "Pricing" }
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

export default TelevisionPage;
