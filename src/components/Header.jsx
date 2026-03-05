import { useState, useEffect, cloneElement } from 'react';
import { 
  ChevronDown, Menu, X, 
  WashingMachine, Refrigerator, Waves, Monitor, 
  Coffee, Snowflake, Microwave, Flame, Droplets, 
  Wind, Fan, Cpu, ArrowRight, Zap, ShieldCheck
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BookingModal from './BookingModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const services = [
    { id: "washing-machine", title: "Washing Machine", desc: "Drum & motor repair", icon: <WashingMachine size={20} /> },
    { id: "refrigerator", title: "Refrigerator", desc: "Cooling & compressor fix", icon: <Refrigerator size={20} /> },
    { id: "air-conditioner", title: "Air Conditioner", desc: "Gas refilling & PCB fix", icon: <Snowflake size={20} /> },
    { id: "television", title: "Television", desc: "Display & audio fix", icon: <Monitor size={20} /> },
    { id: "water-purifier", title: "Water Purifier", desc: "RO filter replacement", icon: <Droplets size={20} /> },
    { id: "microwave-oven", title: "Microwave Oven", desc: "Magnetron & panel fix", icon: <Microwave size={20} /> },
    { id: "kitchen-chimney", title: "Kitchen Chimney", desc: "Deep cleaning & motor fix", icon: <Fan size={20} /> },
    { id: "dishwasher", title: "Dishwasher", desc: "Pump & leakage repair", icon: <Waves size={20} /> },
    { id: "coffee-maker", title: "Coffee Maker", desc: "Heater & pump service", icon: <Coffee size={20} /> },
    { id: "oven-stove", title: "Oven & Gas Stove", desc: "Burner & ignition repair", icon: <Flame size={20} /> },
    { id: "clothes-dryer", title: "Clothes Dryer", desc: "Heating & belt repair", icon: <Wind size={20} /> },
    { id: "other-appliances", title: "Other Appliances", desc: "Mixers, irons & more", icon: <Cpu size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24 transition-all duration-300">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
             <img src="/logo-rok.png" alt="Appliance Buddies" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation - 2021 SaaS Style */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === link.path 
                    ? 'text-amber-600' 
                    : 'text-gray-600 hover:text-amber-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group" onMouseEnter={() => setActiveDropdown(true)} onMouseLeave={() => setActiveDropdown(false)}>
              <button className={`flex items-center gap-1 text-sm font-semibold transition-colors cursor-pointer ${
                activeDropdown || location.pathname.includes('/service/') ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'
              }`}>
                Services 
                <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Clean Panel Mega Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[850px] transition-all duration-200 ${
                activeDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible pointer-events-none'
              }`}>
                <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-black ring-opacity-5 overflow-hidden flex border border-gray-100">
                  
                  {/* Left Highlight */}
                  <div className="w-1/3 bg-gray-50 p-8 border-r border-gray-100">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-white">
                        <Zap size={18} fill="currentColor" />
                      </div>
                      <span className="text-[11px] font-bold text-amber-600 uppercase tracking-widest">Premium Care</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 leading-tight">Elite professional Solutions for Your Home</h4>
                    <p className="text-sm text-gray-500 mb-8 leading-relaxed">Fast, reliable, and expert repair services for all your household appliances with a 90-day warranty.</p>
                    <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                      <ShieldCheck size={18} />
                      <span>Certified Experts</span>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="w-2/3 p-8">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                      {services.map((item) => (
                        <Link 
                          key={item.id} 
                          to={`/service/${item.id}`} 
                          onClick={() => setActiveDropdown(false)} 
                          className="group flex items-center gap-4 p-3 rounded-xl hover:bg-amber-50 transition-colors"
                        >
                          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-400 group-hover:text-amber-600 group-hover:bg-white transition-all rounded-lg">
                            {cloneElement(item.icon, { size: 20 })}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{item.title}</div>
                            <div className="text-[11px] text-gray-500 font-medium">Expert Repair</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 bg-amber-600 text-white text-sm font-bold rounded-lg hover:bg-amber-700 transition-all shadow-md shadow-amber-600/10 active:scale-95"
            >
              Book Now
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden p-2 text-gray-600 hover:text-amber-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - 2021 SaaS Clean Slide */}
      <div className={`lg:hidden fixed inset-0 z-[100] bg-white transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
             <img src="/logo-rok.png" alt="Appliance Buddies" className="h-8 w-auto object-contain" />
             <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-900">
               <X size={24} />
             </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="space-y-6 mb-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="block text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="border-t border-gray-100 pt-8">
               <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Our Services</h5>
               <div className="grid grid-cols-1 gap-4">
                 {services.map((item) => (
                    <Link key={item.id} to={`/service/${item.id}`} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 hover:border-amber-200 transition-all">
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-50 text-amber-600 rounded-lg">
                        {item.icon}
                      </div>
                      <span className="text-sm font-bold text-gray-900">{item.title}</span>
                    </Link>
                 ))}
               </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-100">
            <button 
              onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
              className="w-full py-4 bg-amber-600 text-white font-bold rounded-lg shadow-lg"
            >
              Start Booking
            </button>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle="Appliance Repair" 
      />
    </header>
  );
};

export default Header;
