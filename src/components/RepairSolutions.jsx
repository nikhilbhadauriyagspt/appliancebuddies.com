import { 
  WashingMachine, Refrigerator, Waves, Monitor, 
  Coffee, Snowflake, Microwave, Flame, Droplets, 
  Wind, Fan, Cpu, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  { id: "washing-machine", title: "Washing machine", desc: "Motor & Drum Systems", icon: <WashingMachine size={22} />, image: "/washing.jpg" },
  { id: "refrigerator", title: "Refrigerator", desc: "Thermal Restoration", icon: <Refrigerator size={22} />, image: "/refrigerator.png" },
  { id: "dishwasher", title: "Dishwasher", desc: "Hydraulic Integrity", icon: <Waves size={22} />, image: "/dish.png" },
  { id: "television", title: "Television", desc: "Visual Calibration", icon: <Monitor size={22} />, image: "/tv.jpg" },
  { id: "coffee-maker", title: "Coffee maker", desc: "Precision Heating", icon: <Coffee size={22} />, image: "/coffee.jpg" },
  { id: "air-conditioner", title: "Air conditioner", desc: "Climate Optimization", icon: <Snowflake size={22} />, image: "/air.jpg" },
  { id: "microwave-oven", title: "Microwave oven", desc: "Digital Wave Control", icon: <Microwave size={22} />, image: "/micro.jpg" },
  { id: "oven-stove", title: "Oven & gas stove", desc: "Ignition Dynamics", icon: <Flame size={22} />, image: "/Ove.jpg" },
  { id: "water-purifier", title: "Water purifier", desc: "Filtration Science", icon: <Droplets size={22} />, image: "/water.jpg" },
  { id: "clothes-dryer", title: "Clothes dryer", desc: "Airflow Calibration", icon: <Wind size={22} />, image: "/clothes.jpg" },
  { id: "kitchen-chimney", title: "Kitchen chimney", desc: "Exhaust Efficiency", icon: <Fan size={22} />, image: "/Kitchen.jpg" },
  { id: "other-appliances", title: "Other appliances", desc: "Multi-Unit Support", icon: <Cpu size={22} />, image: "/others.jpg" }
];

const RepairSolutions = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden" id="repair-solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
            Elite Appliance <span className="text-amber-600">Restorations.</span>
          </h2>

        </div>

        {/* Solutions Grid - Clean SaaS Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, idx) => (
            <Link 
              key={idx} 
              to={`/service/${item.id}`}
              className="group bg-white rounded-2xl p-2 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-amber-200"
            >
              {/* Image Thumbnail */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <img 
                  loading="lazy" 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-3 left-3">
                   <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-lg flex items-center justify-center text-amber-600 shadow-sm">
                      {item.icon}
                   </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="px-4 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-1">{item.desc}</p>
                <div className="flex items-center text-amber-600 text-[11px] font-black uppercase tracking-widest gap-2">
                   View Service <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairSolutions;
