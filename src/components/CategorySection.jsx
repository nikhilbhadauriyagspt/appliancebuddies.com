import { Utensils, Wind, Tv, Shirt, ShieldCheck, Zap } from 'lucide-react';

const categories = [
  {
    name: "Kitchen",
    count: "12+ Services",
    icon: <Utensils size={24} />,
    color: "bg-orange-50 text-orange-600 border-orange-100",
    hover: "hover:bg-orange-600"
  },
  {
    name: "Laundry",
    count: "8+ Services",
    icon: <Shirt size={24} />,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    hover: "hover:bg-blue-600"
  },
  {
    name: "Home Comfort",
    count: "15+ Services",
    icon: <Wind size={24} />,
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    hover: "hover:bg-cyan-600"
  },
  {
    name: "Entertainment",
    count: "5+ Services",
    icon: <Tv size={24} />,
    color: "bg-purple-50 text-purple-600 border-purple-100",
    hover: "hover:bg-purple-600"
  },
  {
    name: "Electrical",
    count: "20+ Services",
    icon: <Zap size={24} />,
    color: "bg-yellow-50 text-yellow-600 border-yellow-100",
    hover: "hover:bg-yellow-600"
  },
  {
    name: "Maintenance",
    count: "Unlimited",
    icon: <ShieldCheck size={24} />,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    hover: "hover:bg-emerald-600"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Explore by Category</h2>
          <p className="text-gray-500 text-sm font-medium">Find the right expert for your specific needs</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl p-6 border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border transition-colors duration-300 ${cat.color} group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{cat.name}</h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;




